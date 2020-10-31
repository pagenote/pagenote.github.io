import React, {Component} from 'react'
import './developer.scss';
import CommonPage from "../CommonPage";

export default class Developer extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='developer'>
                <div>
                    为你的网站接入 PAGENOTE 后，你的网站将具备以下功能：
                    <ul>
                      <li>用户不需要安装插件也能使用PAGENOTE的功能</li>
                      <li>PAGENOTE 提供了API，你可以将数据存储在你部署的服务器中</li>
                      <li>支持用户一键反馈、在网页上记录笔记、协同沟通、等功能</li>
                      <li>你还可以定制化你的需求</li>
                    </ul>
                    接入方式：<a href="https://github.com/rowthan/pagenote">https://github.com/rowthan/pagenote</a>
                </div>

                <div>
                  <h4>企业用户</h4>
                  接收付费定制服务。详情请联系 logikecn@gmai.com
                </div>

            </div>
        )
    }
}

CommonPage(Developer)
