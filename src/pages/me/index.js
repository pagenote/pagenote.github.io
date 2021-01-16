import React,{useState,useEffect,Suspense} from "react";
import App from "./me/Me";
import CommonPage from "../CommonPage";
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
// import Clipboard from './clipboard'
// import SettingPage from './setting';
import { lazy } from '@loadable/component'
import Menus from './me/menu/Menus';
import useSize from './hooks/useSize'
import 'antd/dist/antd.css';
import './index.scss'

const Clipboard = lazy(() => import('./clipboard'));

const SettingPage = lazy(() => import('./setting'));

const NotePage = lazy(() => import('./notebook'));

const sideWidth = 180;

const RouteMe = function(){
  const predefineSize = useSize().width - sideWidth;
  return (
    <Router>
      <div className='pagenote-me'>
        <Menus sideWidth={sideWidth}></Menus>
        <div className='page-container' style={{width: predefineSize + 'px'}}>
          <Switch>
            <Route exact path="/">
              <Suspense fallback={<div>Loading...</div>}>
                <App />
              </Suspense>
            </Route>
            <Route exact path="/paper">
              <Suspense fallback={<div>Loading...</div>}>
                <NotePage />
              </Suspense>
            </Route>
            <Route path="/setting">
              <Suspense fallback={<div>Loading...</div>}>
                <SettingPage />
              </Suspense>
            </Route>
            <Route path='/clipboard'>
              <Suspense fallback={<div>Loading...</div>}>
                <Clipboard />
              </Suspense>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
};

CommonPage(RouteMe,false,false);

