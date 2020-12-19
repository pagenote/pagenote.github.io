import {NavLink} from "react-router-dom";
import {Popover, Tooltip} from "antd";
import DonationIcon from "@/assets/icon/donation.svg";
import WechatIcon from "@/assets/icon/wechat.svg";
import RateIcon from "@/assets/icon/rate.svg";
import React from "react";
import InternetIcon from '@/assets/icon/internet.svg'
import NoteBookIcon from '@/assets/icon/notebook.svg';
import BugIcon from '@/assets/icon/bug.svg'
import SettingIcon from '@/assets/icon/setting.svg'
import PlanIcon from '@/assets/icon/plan.svg'

export default function Menus({sideWidth}){
  return(
    <div className='page-menus' style={{width:sideWidth+'px'}}>
      <div className="menus">
        <NavLink activeClassName="active" exact={true} to="/">
          <InternetIcon/>网页笔记
        </NavLink>
        <NavLink activeClassName="active" exact={true} to="/draft">
          <NoteBookIcon/>文稿
        </NavLink>
        <NavLink activeClassName="active" exact={true} to="/setting">
          <SettingIcon/>设置
        </NavLink>
      </div>
      <div className='menus-footer'>
        <div>
          <Tooltip title='赞赏'>
            <a href="/donation" target='_blank'>
              <DonationIcon></DonationIcon>
            </a>
          </Tooltip>
          <Popover title='关注微信公众号' content={<div><img width={140} height={140} src="/img/wechat.jpg" alt=""/> </div>}>
            <WechatIcon>
            </WechatIcon>
          </Popover>
          <Tooltip title='为 PAGENOTE 评分'>
            <a href="/rate" target='_blank'>
              <RateIcon>
              </RateIcon>
            </a>
          </Tooltip>
          <Tooltip title='反馈bug'>
            <a href="https://github.com/rowthan/pagenote/issues" target='_blank'>
              <BugIcon></BugIcon>
            </a>
          </Tooltip>
          <Tooltip title='功能规划'>
            <PlanIcon />
          </Tooltip>

        </div>
        <p className='version'>
          PAGENOTE {document.documentElement.dataset.version}
        </p>
      </div>
    </div>
  )
}
