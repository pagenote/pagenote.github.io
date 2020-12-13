import React from "react";
import { notification } from "antd";
import App from "./me/App";
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
import AsideMore from "../../assets/icon/aside-more.svg";
import Setting from "../../assets/icon/setting.svg";
import Doc from '../../assets/icon/doc.svg'
import WebPage from '../../assets/icon/webpage.svg'
import './index.scss'

// const SettingPage = Loadable({
//   loader: () => import('../setting/index'),
//   loading: <div>加载中</div>,
// });

const DraftPage = Loadable({
  loader: () => import('../draft/index'),
  loading: <div>加载中</div>,
});

const predefineSize = window.innerWidth - 160 - 2;
const RouteMe = function(){
  return (
    <Router>
      <div class='pagenote-me'>
        <div className='page-menus'>
          <NavLink activeClassName="active" exact={true} to="/">我的PAGE</NavLink>
          <NavLink activeClassName="active" exact={true} to="/draft">临时记事本</NavLink>
          <NavLink activeClassName="active" exact={true} to="/setting">设置</NavLink>
        </div>
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

