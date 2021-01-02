import React from 'react';
import {
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import {Frame,Left,Right} from "@/pages/me/Frame";
import Extension from "./Extension";
import Cloud from './Cloud'
import Account from './Account'
import PluginIcon from '@/assets/icon/plugin.svg'
import AccountIcon from '@/assets/icon/account.svg'
import CloudIcon from '@/assets/icon/cloud.svg'
import CheckVersion from "@/pages/CheckVersion";
import './index.scss'

const Setting = function (){
  return(
    <Frame>
      <Left width={0.2}>
        <div className="setting-left-tabs">
          <nav>
            <NavLink activeClassName="active" to="/setting/extension">
              <PluginIcon/>插件配置
            </NavLink>
          </nav>
          <nav>
            <NavLink activeClassName="active" to={`/setting/account`}>
              <AccountIcon/>账户配置
            </NavLink>
          </nav>
          <nav>
            <NavLink activeClassName="active" to={`/setting/store`}>
              <CloudIcon/>存储设置
            </NavLink>
          </nav>
        </div>
      </Left>

      <Right>
        <div className='setting-right-part'>
          <Switch>
            <Route exact path={`/setting/account`}>
              <Account />
            </Route>
            <Route exact path={`/setting/store`}>
              <Cloud />
            </Route>
            <Route exact path={`/setting/extension`}>
              <Extension/>
            </Route>
            <Route>
              <Redirect to="/setting/extension" />
            </Route>
          </Switch>
        </div>
      </Right>
    </Frame>
  )
}

export default CheckVersion(Setting,'0.0.1')
