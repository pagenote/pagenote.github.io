import React from "react";
import { notification , Tooltip,Popover} from "antd";
import App from "./me/Me";
import CommonPage from "../CommonPage";
import CheckVersion from "../CheckVersion";
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Loadable from 'react-loadable';
import Draft from '../draft/index';
import SettingPage from '../setting/App';
import DonationIcon from '@/assets/icon/donation.svg'
import AsideMore from "../../assets/icon/aside-more.svg";
import Setting from "../../assets/icon/setting.svg";
import Doc from '../../assets/icon/doc.svg'
import WebPage from '../../assets/icon/webpage.svg'
import WechatIcon from '@/assets/icon/wechat.svg'
import RateIcon from '@/assets/icon/rate.svg';
import Menus from './me/menu/Menus';
import './index.scss'

// const SettingPage = Loadable({
//   loader: () => import('../setting/index'),
//   loading: <div>加载中</div>,
// });

const DraftPage = Loadable({
  loader: () => import('../draft/index'),
  loading: <div>加载中</div>,
});
const sideWidth = 180;
const predefineSize = window.innerWidth - sideWidth - 2;
const RouteMe = function(){
  return (
    <Router>
      <div class='pagenote-me'>
        <Menus sideWidth={sideWidth}></Menus>
        <div className='page-container' style={{width: predefineSize + 'px'}}>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route exact path="/draft">
              <Draft></Draft>
            </Route>
            <Route exact path="/setting">
              <SettingPage></SettingPage>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
};

CommonPage(CheckVersion(RouteMe,'0.13.0'),false,false);

