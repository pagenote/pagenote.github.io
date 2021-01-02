import {useState,useEffect} from 'react'
import {computePosition, convertColor} from "@/utils/document";
import CopyIcon from "@/assets/icon/default_copy.svg";
import AddIcon from "@/assets/icon/add.svg";
import {Button, Input, Popconfirm, Slider, Modal, message, Tooltip, Spin} from "antd";
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
import {useTranslation} from "react-i18next";

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
  const { t, i18n } = useTranslation();
  const [loading,setLoading] = useState(false);
  const [colorIndex,setColorIndex] = useState(-1);
  const [settingIndex,setSettingIndex] = useState({
    groupIndex:-1,
    itemIndex:-1,
  });
  const [setting,setSetting] = useState({});

  const {maxRecord=0,colors=[],shortCuts='',actionGroup=[]} = setting;


  useEffect(()=>{
    fetchSetting()
  },[]);

  const fetchSetting = function (){
    setLoading(true);
    getSetting(function (result){
      setSetting(result);
      setLoading(false);
    })
  }

  const updateSet= throttle(function (showMessage=true){
    const value = JSON.parse(JSON.stringify(setting))
    setSetting(value);
    saveSetting(value,function (){
      if(showMessage){
        message.success(t('saved'))
      }
    });
  },2000)

  const setShortKey=(e)=>{
    const key = (e.key||'').toUpperCase();
    if(!/[A-Z0-9\[\];',.`]/.test(key) || colorIndex<0){
      message.error(t('Only some letters, numbers and punctuation are supported'));
      return;
    }
    setting.shortCuts = shortCuts.replaceCharAt(colorIndex,key).substr(0,colors.length);
    updateSet(true)
  };

  const changeLimit = function (value){
    setting.maxRecord = value;
    updateSet(false)
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
    onCloseDrawer();
    updateSet(true)
  };

  const setColor = (color, index) => {
    setting.colors[index] = color.hex;
    updateSet();
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
    onCloseDrawer();
    updateSet();
  };

  const addItem=(type='item',groupIndex,itemIndex)=>{
    switch (type) {
      case 'item':
        if(actionGroup[groupIndex].length>=4){
          message.error(t('limited_action_group',{count:4}));
          return;
        }
        actionGroup[groupIndex].push({
          name: new Date().toLocaleTimeString(),
          shortcut: '',
          clickScript: '',
          clickUrl: '',
          icon: '',
        });
        itemIndex++;
        break;
      case 'group':
        if(actionGroup.length>=2){
          message.error(t('limited_action_group',{count:2})+t('add_action_group_tip'));
          return;
        }
        actionGroup.push([{
          name: new Date().toLocaleTimeString(),
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
    setSettingIndex(newSettingIndex);
  };

  const resetAll = ()=>{
    resetSetting(function (){
      message.success(t('reset success'))
      fetchSetting()
    });
  };

  let funItem = {};
  try{
    funItem = setting.actionGroup[settingIndex.groupIndex][settingIndex.itemIndex]
  }catch (e) {

  }

  return(
    <Spin spinning={loading}>
      <div className='pagenote setting-part'>
        <div className='tip'>
          {t('click any module to custom setting')}
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

              <div className='action-group'>
                <Tooltip title={t('single click to copy, dbclick for copy and save it to history')}>
                  <CopyIcon className='function-item'/>
                </Tooltip>
              </div>
              {
                actionGroup.map((group,index)=>(
                  <div key={index} className='action-group'>
                    {group.map((action,i)=>{
                      const image = /^<svg/.test(action.icon) ?  `data:image/svg+xml;base64,${window.btoa(action.icon)}` : action.icon;
                      return(
                        <Tooltip title={`${action.name}${action.shortcut?action.shortcut:''}`}>
                          <div onClick={()=>{setIconFun(index,i)}} key={action.name+action.icon+i}
                               className={`function-item ${(settingIndex.groupIndex===index && settingIndex.itemIndex===i)?'active':''}`}
                               style={{ backgroundImage: `url(${image})`}}>
                          </div>
                        </Tooltip>

                      )
                    })}
                    <div className='function-item'>
                      <AddIcon  onClick={()=>addItem('item',index,group.length-1)}/>
                    </div>
                  </div>
                ))
              }
              <div className='action-group'>
                <AddIcon className='function-item' onClick={()=>{addItem('group')}} />
              </div>
            </div>
          </div>
          <Modal
            title={t("custom your Buttons")}
            onCancel={onCloseDrawer}
            footer={null}
            visible={settingIndex.groupIndex>-1 && settingIndex.itemIndex>-1}
          >
            <FunctionIconSetting
              key={settingIndex.groupIndex+'-'+settingIndex.itemIndex}
              deleteIcon={()=>deleteFun(settingIndex.groupIndex,settingIndex.itemIndex)}
               onSave={saveFun} initFunItem={funItem}
               groupIndex={settingIndex.groupIndex} itemIndex={settingIndex.itemIndex} />
          </Modal>
          <Modal
            mask={true}
            visible={colorIndex>=0}
            onCancel={()=>setColorIndex(-1)}
            footer={null}
            title={t('setting_pen')}>
            <div className='color-modal'>
              <div className='setting-item'>
                <div className='setting-label'>{t('highlight background color')}</div>
                  <SliderPicker onChangeComplete={(color)=>{setColor(color,colorIndex)}} color={colors[colorIndex]} />
                  {/*<CompactPicker*/}
                  {/*  onChangeComplete={(color)=>{setColor(color,colorIndex)}}*/}
                  {/*  colors={[...predefineTheme[0].colors,...predefineTheme[1].colors,...predefineTheme[2].colors]}*/}
                  {/*  color={colors[colorIndex]} />*/}
              </div>
              <div className='setting-item'>
                <span className='setting-label'>
                  {t('shortcut')}
                </span>
                <Input readOnly onKeyUp={setShortKey} onInput={setShortKey} value={shortCuts[colorIndex]}/>
              </div>
            </div>

            {/*<div className='predefine-theme'>*/}
            {/*  <div className='setting-title'>一键设置</div>*/}
            {/*  <div>*/}
            {/*    {*/}
            {/*      predefineTheme.map((item)=>(*/}
            {/*        <div key={item.label}>*/}
            {/*          <button onClick={()=>setColors(item.colors)}>{item.label}</button>*/}
            {/*          {*/}
            {/*            item.colors.map((color)=>(*/}
            {/*              <span key={color} className='set-color-item' style={{background:color}}></span>*/}
            {/*            ))*/}
            {/*          }*/}
            {/*        </div>*/}
            {/*      ))*/}
            {/*    }*/}
            {/*  </div>*/}
            {/*</div>*/}
          </Modal>
        </div>
      </div>

      <div className='limit setting-part'>
        <div className='mark-count'>
          <Slider value={maxRecord} tipFormatter={(value)=>{return (t('max marked in a page',{
            number: value
          }))}} max={50} min={0}  onChange={changeLimit} />
        </div>
      </div>

      <div className="reset setting-part">
        <CheckVersionPart version='0.12.5'>
          <Popconfirm placement="topLeft" title={t('Confirm to reset extension setting?')} onConfirm={resetAll} okText={t('confirm')} cancelText={t('cancel')}>
            <Button type="link">{t('Reset')}</Button>
          </Popconfirm>
        </CheckVersionPart>
      </div>
    </Spin>
  )
}

export default CheckVersion(Extension,'0.13.4')
