import React, {Component} from 'react'
import CommonPage from "../CommonPage";
import InstallBar from "@/components/InstallBar";
import Functions from "../../components/Functions"
import './donation.scss'


export default class CreatePage extends Component{

  render() {
    return (
      <div className='uninstall'>
        <InstallBar>
          <div>
            <div>因为功能异常而卸载？前往公众号反馈</div>
            <img src="/img/wechat.jpg" alt=""/>
          </div>
        </InstallBar>
        <Functions/>
      </div>
    )
  }
}

CommonPage(CreatePage);
