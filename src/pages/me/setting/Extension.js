import {useState,useEffect} from 'react'
import {computePosition, convertColor} from "@/utils/document";
import CopyIcon from "@/assets/icon/default_copy.svg";
import AddIcon from "@/assets/icon/add.svg";
import {Button, Drawer, Popconfirm, Slider,Modal} from "antd";
import FunctionIconSetting from "@/components/setting/FunctionIconSetting";
import CheckVersionPart from "@/pages/CheckVersionPart";
import Loadable from "react-loadable";
import Loading from "@/components/Loading";
import throttle from "lodash/throttle";
import CheckVersion from "@/pages/CheckVersion";
import {predefineTheme} from './const';
import { getSetting,saveSetting,resetSetting } from "@/utils/api";
import CloseIcon from '@/assets/icon/close.svg'
import './extension.scss';

String.prototype.replaceCharAt = function(n,c){
  return this.substr(0, n)+ c + this.substr(n+1,this.length-1-n);
};

const CompactPicker = Loadable({
  loader: () => import('react-color/es/components/compact/Compact'),
  loading: Loading,
});

const SliderPicker = Loadable({
  loader: () => import('react-color/es/components/slider/Slider'),
  loading: Loading,
});


function Extension(){

  const [colorIndex,setColorIndex] = useState(-1);
  const [settingIndex,setSettingIndex] = useState({
    groupIndex:-1,
    itemIndex:-1,
  });
  const [setting,setSetting] = useState({});
  const {maxRecord=0,colors=[],shortCuts='',actionGroup=[]} = setting;

  useEffect(()=>{
    getSetting(function (result){
      setSetting(result);
    })
  },[]);

  const saveSet=function (value){
    setSetting(value);

  }

  const setShortKey=(e)=>{
    const key = (e.key||'').toUpperCase();
    if(!/[A-Z0-9\[\];',.`]/.test(key) || colorIndex<0){
      alert('仅支持字母、数字和部分标点符号');
      return;
    }
    setting.shortCuts = shortCuts.replaceCharAt(colorIndex,key).substr(0,colors.length);
    setSetting(setting)
  };

  const changeLimit = function (value){
    setting.maxRecord = value;
    setSetting(setting)
    saveSetting()
  }

  const onCloseDrawer=()=>{
    setSettingIndex({
      groupIndex:-1,
      itemIndex:-1,
    })
  }

  const setIndex=(index,e)=>{
    setColorIndex(index);
  };

  const saveFun =(funItem,groupIndex,itemIndex)=>{
    const actionGroup = setting.actionGroup;
    actionGroup[groupIndex][itemIndex] = funItem;
    setSetting(setting);

    saveSetting();
    onCloseDrawer();
  };

  const setColor = (color, index) => {
    const hasIndex = colors.indexOf(color);
    if(hasIndex>-1 && hasIndex!==index){
      return;
    }
    colors[index] = color.hex;
    setSetting(setting);
  };

  const setColors =(colors)=> {
    setting.colors = colors;
    setSetting(setting);
  };

  const setIconFun =(groupIndex,itemIndex)=>{
    setSettingIndex({
      groupIndex,
      itemIndex,
    })
  };

  const deleteFun =(groupIndex,itemIndex)=>{
    const group = actionGroup[groupIndex];
    if(group.length<=1){
      actionGroup.splice(groupIndex,1);
    }else{
      group.splice(itemIndex,1);
    }
    setting.actionGroup = actionGroup;
    setSetting(setting);
    setSettingIndex({
      groupIndex:-1,
      itemIndex:-1,
    })
  };

  const addItem=(type='item',groupIndex,itemIndex)=>{
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
    setting.actionGroup = actionGroup;
    setSetting(setting);
    setSettingIndex(newSettingIndex);
  };

  const resetAll = ()=>{
    resetSetting();
  };

  let funItem = {};
  try{
    funItem = setting.actionGroup[settingIndex.groupIndex][settingIndex.itemIndex]
  }catch (e) {

  }

  return(
    <section>
      <div className='pagenote setting-part'>
        <div className='tip'>
          点击下方你想要个性化的模块进行设置。
        </div>
        <div className='function-container'>
          <div className='function-area'>
            <div className='function-colors'>
              {
                colors.map((color,index)=>{
                  const {x:offsetX,y:offsetY} = computePosition(index-1,40);
                  return(
                    <div
                      key={color+index}
                      onClick={(e)=>{setIndex(index,e)}}
                      className={`color-item ${index===colorIndex?'active':''}`}  style={{
                      top: (offsetY / -1) + 'px',
                      left: (offsetX / -1) + 'px',
                      background: color,
                      color: convertColor(color).textColor
                    }}>{shortCuts[index]}</div>
                  )
                })
              }
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
                        <div onClick={()=>{setIconFun(index,i)}} key={action.name+action.icon+i}
                             data-tip={`${action.name}${action.shortcut?' 快捷键：'+action.shortcut:''}`}
                             className={`function-item ${(settingIndex.groupIndex===index && settingIndex.itemIndex===i)?'active':''}`}
                             style={{ backgroundImage: `url(${image})`}}>
                          <span className="delete" onClick={(e)=>{deleteFun(index,i);e.stopPropagation()}}>
                              <CloseIcon />
                          </span>
                        </div>
                      )
                    })}
                    <div className='function-item' data-tip='点击添加一个按钮'>
                      <AddIcon  onClick={()=>addItem('item',index,group.length-1)}/>
                    </div>
                  </div>
                ))
              }
              <div className='action-group' data-tip='点击添加一个按钮分组'>
                <AddIcon className='function-item' onClick={()=>{addItem('group')}} />
              </div>
            </div>
          </div>
          <Modal
            title={`自定义我的 PAGENOTE 按钮`}
            onCancel={onCloseDrawer}
            footer={null}
            visible={settingIndex.groupIndex>-1 && settingIndex.itemIndex>-1}
          >
            <FunctionIconSetting key={settingIndex.groupIndex+'-'+settingIndex.itemIndex} onSave={saveFun} initFunItem={funItem} groupIndex={settingIndex.groupIndex} itemIndex={settingIndex.itemIndex} />
          </Modal>
          <Modal
            mask={true}
            visible={colorIndex>=0}
            onCancel={()=>setColorIndex(-1)}
            footer={null}
            title='设置标记画笔🖌'>
            <div>
              <div className='setting-title'>
                色块修改
              </div>
              <div className='setting-item'>
                <div className='setting-label'>选取高亮背景色：</div>
                  <SliderPicker onChangeComplete={(color)=>{setColor(color,colorIndex)}} color={colors[colorIndex]} />

                  <CompactPicker
                    onChangeComplete={(color)=>{setColor(color,colorIndex)}}
                    colors={[...predefineTheme[0].colors,...predefineTheme[1].colors,...predefineTheme[2].colors]}
                    color={colors[colorIndex]} />
              </div>
              <div className='setting-item'>
                <span className='setting-label'>
                    快捷键：
                </span>
                <input readOnly onKeyUp={setShortKey} value={shortCuts[colorIndex]}/>
              </div>
            </div>

            <div className='predefine-theme'>
              <div className='setting-title'>一键设置</div>
              <div>
                {
                  predefineTheme.map((item)=>(
                    <div key={item.label}>
                      <button onClick={()=>setColors(item.colors)}>{item.label}</button>
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
          </Modal>
        </div>
      </div>

      <div className='limit setting-part'>
        <div className='mark-count'>
          <Slider value={maxRecord} tipFormatter={(value)=>{return '单页面最多标记'+value+'个'}} max={50} min={0}  onChange={changeLimit} />
        </div>
        <div className='tip'>
          {
            maxRecord === 0 &&
            <div>
              当设置为0，等同于<b>关闭 PAGENOTE</b> ：不可进行标记、已有标记的页面也将无法使用 PAGENOTE 功能。
              <br/>
              你可以设置为0来关闭 PAGENOTE
              <br/>
            </div>
          }
        </div>
      </div>

      <div className="reset setting-part">
        <CheckVersionPart version='0.12.5'>
          <Popconfirm placement="topLeft" title={'确定重置「基础配置」「功能开关」？'} onConfirm={resetAll} okText="确认" cancelText="取消">
            <Button type="link">一键重置</Button>
          </Popconfirm>
        </CheckVersionPart>
      </div>
    </section>
  )
}

export default CheckVersion(Extension,'0.13.4')
