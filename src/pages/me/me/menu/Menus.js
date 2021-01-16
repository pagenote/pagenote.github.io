import {useState,useEffect} from 'react'
import {NavLink} from "react-router-dom";
import {Popover, Tooltip,Button,Badge,Tag} from "antd";
import { useTranslation } from 'react-i18next';
import localforage from "localforage";
import DonationIcon from "@/assets/icon/donation.svg";
import WechatIcon from "@/assets/icon/wechat.svg";
import RateIcon from "@/assets/icon/rate.svg";
import React from "react";
import InternetIcon from '@/assets/icon/internet.svg'
import NoteBookIcon from '@/assets/icon/notebook.svg';
import BugIcon from '@/assets/icon/bug.svg'
import SettingIcon from '@/assets/icon/setting.svg'
import PlanIcon from '@/assets/icon/plan.svg'
import ChangeLogIcon from '@/assets/icon/changelog.svg';
import MaterialIcon from "@/assets/icon/material.svg";
import DoctorIcon from '@/assets/icon/doctor.svg'
import ClipboardIcon from '@/assets/icon/clipboard.svg'
import BroadCastIcon from '@/assets/icon/broadcast.svg'
import {getNotifications, readNotifications} from "@/utils/notification";
import ReadIcon from '@/assets/icon/read.svg'
import version from '../../../../../public/version.json';
import { isLow } from "@/utils";
import usePagenote from '@/components/usePagenote';
import './menu.scss'

const { CheckableTag } = Tag;

export default function Menus({sideWidth}){
  const { t, i18n } = useTranslation();
  const [notifications,setNotification] = useState([])
  const pagenote = usePagenote();

  const changeLanguage = function (lang){
    i18n.changeLanguage(lang);
    localStorage.setItem('lang',lang)
  }

  useEffect(()=>{
    fetchNotifi()
  },[]);

  const fetchNotifi = function (){
    getNotifications(pagenote,function (result){
      setNotification(result);
    })
  }

  const readNotifi = function (id){
    readNotifications(id,function (){
      fetchNotifi()
    })
  }


  const currentVersion = pagenote.version;
  const hasNewVersion = isLow(currentVersion,version.latest.version);

  return(
    <div className='page-menus' style={{width:sideWidth+'px'}}>
      <div className="menus">
        <NavLink activeClassName="active" exact={true} to="/">
          <span className=''>
            <InternetIcon/>{t('note in page')}
          </span>
        </NavLink>
        {/*<NavLink activeClassName="active" exact={true} to="/material">*/}
        {/*  <MaterialIcon/>素材库*/}
        {/*</NavLink>*/}
        <NavLink activeClassName="active" exact={true} to="/paper">
          <NoteBookIcon/>{t('paper')}
        {/*  TODO 支持导入写作模板 自定义模板*/}
        </NavLink>
        <NavLink activeClassName="active" exact={true} to="/clipboard">
          <ClipboardIcon/>{t('clipboard')}
        </NavLink>
        <NavLink activeClassName="active" to="/setting">
          <SettingIcon/>{t('setting')}
        </NavLink>
      </div>

      <div className='menus-footer'>
        {
          notifications.length>0 &&
          <div className='broadcast'>
            <Badge size="small" count={notifications.length}>
              <BroadCastIcon/>
            </Badge>
            {
              notifications.map((notification)=>(
                <div key={notification.id} className='info-item' onClick={()=>readNotifi(notification.id)}>
                  <a href={notification.url} target='_blank'>{notification.title}</a>
                </div>
              ))
            }
          </div>
        }
        <div className='links'>
          <label>{t('Follow Us')}</label>
          <Tooltip title={t('donation for us')}>
            <a href="/donation" target='_blank'>
              <DonationIcon/>
            </a>
          </Tooltip>
          <Popover title={t('follow us in wechat')} content={<div><img width={140} height={140} src="/img/wechat.jpg" alt=""/> </div>}>
            <a>
              <WechatIcon />
            </a>
          </Popover>
          <Tooltip title={t('Rate for PAGENOTE')}>
            <a href="/rate" target='_blank'>
              <RateIcon/>
            </a>
          </Tooltip>
        </div>
        <div className='links'>
          <label>{t('For more')}</label>
          <Tooltip title={t('feature in future')}>
            <a target='_blank' href="/page?id=future"><PlanIcon /></a>
          </Tooltip>
          <Tooltip title={t('system monitor, report a bug')}>
            <a target='_blank' href="/doctor">
              <DoctorIcon />
            </a>
          </Tooltip>
          {/*<Tooltip title='反馈bug'>*/}
          {/*  <a href="/doctor" target='_blank'>*/}
          {/*    <BugIcon />*/}
          {/*  </a>*/}
          {/*</Tooltip>*/}
          <Tooltip title={t('Release Notes')}>
            <a target='_blank' href="/release">
              <ChangeLogIcon />
            </a>
          </Tooltip>
        </div>
        <div className='version'>
          PAGENOTE {hasNewVersion?<Tooltip title={t('new version is available')}>
          <a target='_blank' href="/release"><Badge status="Error" >
            {currentVersion}
          </Badge></a>
        </Tooltip>:currentVersion}
        </div>
        <div className='language'>
          <CheckableTag
            key='zh'
            checked={i18n.language==='zh_CN'}
            onChange={checked => changeLanguage('zh_CN')}
          >
            中文
          </CheckableTag>
          <CheckableTag
            key='en'
            color="blue"
            checked={i18n.language==='en'}
            onChange={checked => changeLanguage("en")}
          >
            English
          </CheckableTag>
          {/*<Tooltip title='切换语言；Change language'>*/}
          {/*  <Button type="dashed" size='small' onClick={()=>changeLanguage(i18n.language==='en'?'zh_CN':"en")}>*/}
          {/*    {i18n.language==='en'?'中文':"English"}*/}
          {/*  </Button>*/}
          {/*</Tooltip>*/}
        </div>
      </div>
    </div>
  )
}
