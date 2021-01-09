import React, {Component} from 'react'
import Loadable from 'react-loadable';
import Loading from '../../components/Loading';
import {convertColor, computePosition} from "@/utils/document";
import AddIcon from '../../assets/icon/add.svg'
import CopyIcon from '../../assets/icon/default_copy.svg';
import FunctionIconSetting from "../../components/setting/FunctionIconSetting";
import CheckVersionPart from "../CheckVersionPart";
import throttle from 'lodash/throttle';
import './setting.scss';
import { Collapse, message,Switch, Button, Slider,Popconfirm,Tabs,Drawer,Radio, Spin } from 'antd';
import 'antd/dist/antd.css';
// import 'antd/es/collapse/style/index.css'
import UserForm from "../../components/setting/UserForm";
import CloudForm from "../../components/setting/WebDavForm";
import { getSetting,saveSetting,fetchUserInfo,fetchCloudInfo,resetSetting,setUserInfo } from "@/utils/api";

const { Panel } = Collapse;
const { TabPane } = Tabs;

const CompactPicker = Loadable({
  loader: () => import('react-color/es/components/compact/Compact'),
  loading: Loading,
});

const SliderPicker = Loadable({
  loader: () => import('react-color/es/components/slider/Slider'),
  loading: Loading,
});

String.prototype.replaceCharAt = function(n,c){
  return this.substr(0, n)+ c + this.substr(n+1,this.length-1-n);
};
const predefineTheme = [
  {
    id:'theme-simple',
    label:'最简单',
    desc:'',
    colors:['#ffc106'],
  },
  {
    id:'theme-default',
    label:'默认色',
    desc:'默认有多色，有深浅，半透明色',
    colors:['#72D0FF','#ffbea9','#c8a6ff','#6fe2d5','#FFDE5D','#FBB5D6'],
  },
  {
    id:'theme-1',
    label:'七彩风',
    desc:'赤橙黄绿蓝靛紫，适用于显著地为标记做分类',
    colors:['#03a9f4','#f44336','#ff5722','#ffc107','#4caf50','#673ab7','#9c27b0'],
  },{
    id:'theme-2',
    label:'山水风',
    desc:'一套青色风，适用于重要程度区分',
    colors:['#00bcd4','#e0f7fa','#80deea','#26c6da','#00acc1','#00838f','#006064'],
  }];

const languages = [
  {
    name:'简体中文',
    value:'zh_CN',
  },
  {
    name:'English',
    value:'en',
  },
  {
    name:'日本語',
    value:'ja',
  },
  {
    name:'Deutsch',
    value:'de',
  }
]

export default class SettingRender extends Component{
  constructor(props) {
    super(props);
    this.colorPart = React.createRef();
    this.state={
      colors:[],
      themeId:'',
      userActivity:[],
      matchType: "smart",
      maxRecord: 30,
      openInTab: false,
      langType: 'zh_CN',
      shortCuts: "PAGENOTE",
      enableBookmark: true,
      enableCollectImage: false,
      actionGroup: [],
      track:'enable',

      colorPickerPro: false,
      colorIndex: -1,
      modalPosition: {
        left:0,
        top:0,
      },

      settingIndex:{
        groupIndex:-1,
        itemIndex: -1,
      },

      userInfo:{
        // avatar: "",
        // contact: "",
        email: "",
        functions: [],
        name: "",
        uid: "",
        doId:''
      },

      cloud:{
        server:'',
        username:'',
        password:'',
        secret: '',
        path:'',
      }
    }
  }

  componentDidMount() {
    window.location.href = '/me#/paper'
  }

  getUserInfo=()=>{
    fetchUserInfo((data)=>{
      if(data){
        this.setState({
          userInfo: data,
        })
      }
    })
  };

  getCloudAccount=()=>{
    fetchCloudInfo( (data)=>{
      if(data){
        this.setState({
          cloud: data,
          fetchTime: new Date(),
        })
      }
    })
  };


  saveCloudInfo=(values)=>{
    if(!values.invite_code || values.invite_code.trim().toUpperCase()!=='PAGENOTE-CSN'){
      message.error('邀请码不正确，公众号 pagenote 获取');
      return;
    }
    setUserInfo(values,()=>{
      message.success('保存成功');
    })
  };

  addClickListener=()=>{
    document.addEventListener('click',(e)=>{
      if(this.colorPart.current && !this.colorPart.current.contains(e.target)){
        this.setState({
          colorIndex: -1
        })
      }
    })
  };

  initSetting= throttle(()=>{
    getSetting((setting)=>{
      this.setState({
        colors: setting.colors || [],
        themeId: setting.themeId || '',
        userActivity: setting.userActivity || [],
        matchType: setting.matchType,
        maxRecord: setting.maxRecord,
        enableBookmark: setting.enableBookmark || false,
        enableCollectImage: setting.enableCollectImage || false,
        openInTab: setting.openInTab,
        langType: setting.langType || 'zh_cn',
        track: setting.track || 'enable',
        shortCuts: setting.shortCuts || '',
        actionGroup: setting.actionGroup || [],
        // colorIndex: -1,
        fetchTime: new Date().getTime,
      })
    })
  },200);

  setIndex=(index,e)=>{
    this.setState({
      colorIndex: index,
      modalPosition: {
        left: e.pageX,
        top: e.pageY,
      }
    })
  };

  setShortKey=(e)=>{
    const key = (e.key||'').toUpperCase();
    console.log(key)
    if(!/[A-Z0-9\[\];',.`]/.test(key)){
      alert('仅支持字母、数字和部分标点符号');
      return;
    }
    let {shortCuts,colorIndex} = this.state;
    shortCuts = shortCuts.replaceCharAt(colorIndex,key).substr(0,this.state.colors.length);
    this.setState({
      shortCuts: shortCuts,
    },()=>{
      this.saveSetting();
    })
  };

  setColor = (color, index) => {
    const currentColors = this.state.colors;
    const hasIndex = currentColors.indexOf(color);
    if(hasIndex>-1 && hasIndex!==index){
      return;
    }
    currentColors[index] = color.hex;
    this.setState({
      colors: currentColors
    },()=>{
      this.saveSetting()
    });
  };

  setColors =(colors)=> {
    this.setState({
      colors: [...colors]
    },()=>{
      this.saveSetting();
    })
  };

  toggleSwitch =(value,key)=>{
    // const value = e.target.checked;
    this.setState({
      [key]: value,
    },()=>{
      this.saveSetting();
    })
  };

  changeLimit = throttle((value)=>{
    this.setState({
      maxRecord: value,
    },()=>{
      this.saveSetting();
    })
  },20);

  saveSetting= throttle(()=>{
    const {colors,maxRecord,track,openInTab,langType,shortCuts,enableBookmark,enableCollectImage,actionGroup} = this.state;
    const settings = {
      colors: colors || [],
      maxRecord: maxRecord,
      enableBookmark: enableBookmark,
      enableCollectImage: enableCollectImage,
      openInTab: openInTab,
      langType: langType,
      shortCuts: shortCuts || [],
      actionGroup: actionGroup,
      track:track,
    };

    saveSetting(settings,(result)=>{
      message.destroy();
      message.success('修改成功。已打开的网页刷新后生效');
    })
  },1000);

  resetAll = ()=>{
    resetSetting(()=>{
      message.success('重置成功');
      this.initSetting();
    })
  }

  onCloseDrawer=()=>{
    this.setState({
      settingIndex:{
        groupIndex:-1,
        itemIndex:-1,
      }
    })
  }

  setIconFun =(groupIndex,itemIndex)=>{
    this.setState({
      settingIndex:{
        groupIndex,
        itemIndex,
      }
    })
  };

  deleteFun =(groupIndex,itemIndex)=>{
    const actionGroup = this.state.actionGroup;
    const group = actionGroup[groupIndex];
    if(group.length<=1){
      actionGroup.splice(groupIndex,1);
    }else{
      group.splice(itemIndex,1);
    }
    this.setState({
      settingIndex:{
        groupIndex:-1,
        itemIndex:-1,
      },
      actionGroup:actionGroup
    },()=>{
      this.saveSetting();
    })
  };

  saveFun =(funItem,groupIndex,itemIndex)=>{
    const actionGroup = this.state.actionGroup;
    actionGroup[groupIndex][itemIndex] = funItem;
    this.setState({
      actionGroup: actionGroup,
    },()=>{
      this.saveSetting();
      this.onCloseDrawer();
    })
  };

  addItem=(type='item',groupIndex,itemIndex)=>{
    let {actionGroup} = this.state;

    switch (type) {
      case 'item':
        if(actionGroup[groupIndex].length>=4){
          alert('最多设置4个子按钮');
          return;
        }
        actionGroup[groupIndex].push({
          name: '定义一个名称吧：'+new Date().toLocaleTimeString(),
          shortcut: '',
          clickScript: '',
          clickUrl: '',
          icon: '',
        });
        itemIndex++;
        break;
      case 'group':
        if(actionGroup.length>=3){
          alert('最多设置3组');
          return;
        }
        actionGroup.push([{
          name: '定义一个名称吧：'+new Date().toLocaleTimeString(),
          shortcut: '',
          clickScript: '',
          clickUrl: '',
          icon: '',
        }]);
        groupIndex = actionGroup.length - 1;
        itemIndex=0;
        break;
    }
    const newSettingIndex = {
      groupIndex: groupIndex,
      itemIndex:itemIndex,
    };
    this.setState({
      actionGroup: actionGroup,
      settingIndex: newSettingIndex
    })
  };

  saveUserInfo =(values)=>{
    bridge.sendMessage('set_user_info',values,(result)=>{
      message.success('保存成功');
    });
  };

  setLocale=(e)=>{
    this.setState({
      langType:e.target.value
    },()=>{
      this.saveSetting();
    })
  }



  render() {
    const {colors=[],shortCuts=[],colorIndex,modalPosition,track,openInTab,langType,maxRecord,enableBookmark,colorPickerPro,enableCollectImage,actionGroup,settingIndex,userInfo,cloud,fetchTime} = this.state;
    let funItem = {};
    try{
      funItem = actionGroup[settingIndex.groupIndex][settingIndex.itemIndex]
    }catch (e) {

    }

    return (
      <div className='setting-page'>
        <div className='pagenote-bar' key={fetchTime}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="基础配置" key="1">
              <section>
                <div className='pagenote setting-part'>
                  <div className='tip'>
                    点击下方你想要个性化的模块进行设置。
                  </div>
                  <div className='function-container'>
                    <div className='function-area'>
                      <div className='function-colors' ref={this.colorPart} data-tip='点击设置'>
                        {
                          colors.map((color,index)=>{
                            const {x:offsetX,y:offsetY} = computePosition(index-1,40);
                            return(
                              <div
                                key={color+index}
                                onClick={(e)=>{this.setIndex(index,e)}}
                                className={`color-item ${index===colorIndex?'active':''}`}  style={{
                                top: (offsetY / -1) + 'px',
                                left: (offsetX / -1) + 'px',
                                background: color,
                                color: convertColor(color).textColor
                              }}>{shortCuts[index]}</div>
                            )
                          })
                        }
                        <div
                          className={`color-modal ${colorIndex>=0?'show':''}`}
                          style={{left: modalPosition.left,top: modalPosition.top}}
                        >
                          <div>
                            <div className='setting-title'>
                              色块修改
                            </div>
                            <div className='setting-item'>
                              <div className='setting-label'>选取高亮背景色：</div>
                              {
                                colorPickerPro ?
                                  <SliderPicker onChangeComplete={(color)=>{this.setColor(color,colorIndex)}} color={colors[colorIndex]}/>
                                  : <CompactPicker onChangeComplete={(color)=>{this.setColor(color,colorIndex)}}
                                                   colors={[...predefineTheme[0].colors,...predefineTheme[1].colors,...predefineTheme[2].colors]}
                                                   color={colors[colorIndex]} />
                              }
                            </div>
                            {/*<div className='setting-item'>*/}
                            {/*    <span className='setting-label'>字体色：</span>*/}
                            {/*    <span className='color-show' style={{background: convertColor(colors[colorIndex]).textColor}}></span>*/}
                            {/*    <span className='tip'>根据背景色自动计算</span>*/}
                            {/*</div>*/}
                            <div className='setting-item'>
                                    <span className='setting-label'>
                                        快捷键：
                                    </span>
                              <input readOnly onKeyUp={this.setShortKey} value={shortCuts[colorIndex]}/>
                            </div>
                          </div>

                          <div className='predefine-theme'>
                            <div className='setting-title'>一键设置</div>
                            <div>
                              {
                                predefineTheme.map((item)=>(
                                  <div key={item.label}>
                                    <button onClick={()=>this.setColors(item.colors)}>{item.label}</button>
                                    {
                                      item.colors.map((color)=>(
                                        <span key={color} className='set-color-item' style={{background:color}}></span>
                                      ))
                                    }
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='function-custom'>
                        <div className='action-group' data-tip='单击仅复制，双击复制且保存到下方的历史面板中。暂不可自定义'>
                          <CopyIcon className='function-item'/>
                        </div>
                        {
                          actionGroup.map((group,index)=>(
                            <div key={index} className='action-group'>
                              {group.map((action,i)=>{
                                const image = /^<svg/.test(action.icon) ?  `data:image/svg+xml;base64,${window.btoa(action.icon)}` : action.icon;
                                return(
                                  <div onClick={()=>{this.setIconFun(index,i)}} key={action.name+action.icon+i}
                                       data-tip={`${action.name}${action.shortcut?' 快捷键：'+action.shortcut:''}`}
                                       className={`function-item ${(settingIndex.groupIndex===index && settingIndex.itemIndex===i)?'active':''}`}
                                       style={{ backgroundImage: `url(${image})`}}>
                                    <svg onClick={(e)=>{this.deleteFun(index,i);e.stopPropagation()}} t="1603522183404" className="delete" viewBox="0 0 1024 1024"
                                         version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3421"
                                         width="12" height="12">
                                      <path
                                        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                                        fill="#CCCCCC" p-id="3422"></path>
                                      <path
                                        d="M484.844 511.908L318.91 345.974c-8.331-8.331-8.331-21.839 0-30.17 8.331-8.331 21.839-8.331 30.17 0l165.934 165.934L680.95 315.804c8.33-8.331 21.838-8.331 30.17 0 8.33 8.331 8.33 21.839 0 30.17L545.184 511.908 711.12 677.843c8.33 8.33 8.33 21.838 0 30.17-8.332 8.33-21.84 8.33-30.17 0L515.014 542.078 349.08 708.013c-8.331 8.33-21.839 8.33-30.17 0-8.331-8.332-8.331-21.84 0-30.17l165.934-165.935z"
                                        fill="#FFFFFF" p-id="3423"></path>
                                    </svg>
                                  </div>
                                )
                              })}
                              <div className='function-item' data-tip='点击添加一个按钮'>
                                <AddIcon  onClick={()=>this.addItem('item',index,group.length-1)}/>
                              </div>
                            </div>
                          ))
                        }
                        <div className='action-group' data-tip='点击添加一个按钮分组'>
                          <AddIcon className='function-item' onClick={()=>{this.addItem('group')}} />
                        </div>
                      </div>
                    </div>
                    <Drawer
                      title={`自定义我的 PAGENOTE 按钮`}
                      width={500}
                      onClose={this.onCloseDrawer}
                      visible={settingIndex.groupIndex>-1 && settingIndex.itemIndex>-1}
                      bodyStyle={{ paddingBottom: 10 }}
                    >
                      <FunctionIconSetting key={settingIndex.groupIndex+'-'+settingIndex.itemIndex} onSave={this.saveFun} initFunItem={funItem} groupIndex={settingIndex.groupIndex} itemIndex={settingIndex.itemIndex} />
                    </Drawer>
                  </div>
                </div>

                <div className='limit setting-part'>
                  <div className='mark-count'>
                    <Slider value={maxRecord} tipFormatter={(value)=>{return '单页面最多标记'+value+'个'}} max={50} min={0}  onChange={this.changeLimit} />
                  </div>
                  <div className='tip'>
                    {
                      maxRecord == 0 &&
                      <div>
                        当设置为0，等同于<b>关闭 PAGENOTE</b> ：不可进行标记、已有标记的页面也将无法使用 PAGENOTE 功能。
                        <br/>
                        你可以设置为0来关闭 PAGENOTE
                        <br/>
                      </div>
                    }
                  </div>
                </div>

                {/*<div className="language setting-part">*/}
                {/*  <CheckVersionPart version='0.13.3'>*/}
                {/*    <Radio.Group onChange={this.setLocale} value={langType}>*/}
                {/*      {*/}
                {/*        languages.map((item)=>(*/}
                {/*          <Radio value={item.value}>{item.name}</Radio>*/}
                {/*        ))*/}
                {/*      }*/}
                {/*    </Radio.Group>*/}
                {/*  </CheckVersionPart>*/}
                {/*</div>*/}

                <div className="reset setting-part">
                  <CheckVersionPart version='0.12.5'>
                    <Popconfirm placement="topLeft" title={'确定重置「基础配置」「功能开关」？'} onConfirm={this.resetAll} okText="确认" cancelText="取消">
                      <span className='tip'>如果发现功能异常，可以尝试<Button type="link">一键重置</Button></span>
                    </Popconfirm>
                  </CheckVersionPart>
                </div>
              </section>
            </TabPane>
            <TabPane tab="功能开关" key="4">
              <div className='tab setting-part'>
                <label>
                  <Switch checked={openInTab} onChange={(checked)=>{this.toggleSwitch(checked,'openInTab')}}>
                  </Switch>
                  <span>新开页面打开 <a href="/me">PAGENOTE/ME</a></span>
                </label>
              </div>
              <div className='tab setting-part'>
                <CheckVersionPart version='0.12.3'>
                  <label>
                    <Switch checked={track!=='disable'} onChange={(checked)=>{this.toggleSwitch(checked?'enable':'disable','track')}}>
                    </Switch>
                    <span>开启用户体验收集计划 <a href="/page?id=why_track">了解详情</a></span>
                  </label>
                </CheckVersionPart>
              </div>

              <div className='bookmark setting-part'>
                <label>
                  <Switch checked={enableBookmark} onChange={(checked)=>{this.toggleSwitch(checked,'enableBookmark')}}>
                  </Switch>
                  <span>启用智能书签</span>
                </label>
                <div className='tip'>
                  {
                    enableBookmark? '开启后请不要（也无法）手动操作 pagenote 书签文件夹（pagenote将根据标记自动重置）':''
                  }
                </div>
              </div>
            </TabPane>
            <TabPane tab="账户设置" key="2">
              <div className="setting-part">
                <CheckVersionPart version='0.13.0'>
                  <h2>公测中 <a target='_blank' href="https://mp.weixin.qq.com/s/41cT8ub4iNjzrunwrxksDw">了解详情</a></h2>
                  <CloudForm defaultData={cloud} onSubmit={this.saveCloudInfo} />
                </CheckVersionPart>
              </div>
              <div className="setting-part">
                <CheckVersionPart version='0.12.4'>
                  <UserForm defaultData={userInfo} onSubmit={this.saveUserInfo}></UserForm>
                </CheckVersionPart>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}
