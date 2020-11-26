import React from "react";
import App from "./App";
import CommonPage from "../CommonPage";
import CheckVersion from "../CheckVersion";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Page from '../draft/index'
// import SettingPage from '../setting/index'
import AsideMore from "../../assets/icon/aside-more.svg";
import Setting from "../../assets/icon/setting.svg";
import Doc from '../../assets/icon/doc.svg'
import WebPage from '../../assets/icon/webpage.svg'
import './index.scss'

const RouteMe = function(){
  return (
    <Router>
      <div>
        <div className='more-icon'>
          <p data-tip='查看我的PAGENOTE'>
            <Link to="/"><WebPage/></Link>
          </p>
          <p data-tip='临时记事本'>
            <a href="/draft"><Doc /></a>
          </p>
          <p data-tip='个性化设置PAGENOTE'>
            <a href="/setting"><Setting /></a>
          </p>
        </div>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

CommonPage(CheckVersion(RouteMe,'0.12.1'),false,false);

