import {NavLink} from "react-router-dom";
import {Popover, Tooltip,Button} from "antd";
import { useTranslation } from 'react-i18next';
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

export default function Menus({sideWidth}){
  const { t, i18n } = useTranslation();

  const changeLanguage = function (lang){
    i18n.changeLanguage(lang);
    localStorage.setItem('lang',lang)
  }

  return(
    <div className='page-menus' style={{width:sideWidth+'px'}}>
      <div className="menus">
        <NavLink activeClassName="active" exact={true} to="/">
          <span className='new-notification'>
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
        <NavLink activeClassName="active" to="/setting">
          <SettingIcon/>{t('setting')}
        </NavLink>
      </div>
      <div className='menus-footer'>
        <div>
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
          PAGENOTE {document.documentElement.dataset.version}
        </div>
        <div className='language'>
          <Button type="dashed" size='small' onClick={()=>changeLanguage(i18n.language==='en'?'zh_CN':"en")}>
            {i18n.language==='en'?'中文':"English"}
          </Button>
        </div>
      </div>
    </div>
  )
}
