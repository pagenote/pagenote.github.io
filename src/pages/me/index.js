import React,{useState,useEffect} from "react";
import { notification , Tooltip,Popover} from "antd";
import App from "./me/Me";
import CommonPage from "../CommonPage";
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Loadable from 'react-loadable';
import Draft from './notebook/index';
import SettingPage from './setting';
import Menus from './me/menu/Menus';
import useSize from './hooks/useSize'
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

const RouteMe = function(){
  const predefineSize = useSize().width - sideWidth - 2;
  return (
    <Router>
      <div className='pagenote-me'>
        <Menus sideWidth={sideWidth}></Menus>
        <div className='page-container' style={{width: predefineSize + 'px'}}>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route exact path="/paper">
              <Draft />
            </Route>
            <Route path="/setting">
              <SettingPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
};

CommonPage(RouteMe,false,false);

