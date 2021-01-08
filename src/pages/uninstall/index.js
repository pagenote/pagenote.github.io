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
            <div>因为功能异常而卸载？前往公众号反馈。PAGENOTE 还在成长阶段，或许还有不足，但请相信，你一定能见证它的变化</div>
            <img src="/img/wechat.jpg" alt=""/>
          </div>
        </InstallBar>
        <Functions/>
      </div>
    )
  }
}

CommonPage(CreatePage);
