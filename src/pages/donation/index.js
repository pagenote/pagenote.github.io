import React, {Component} from 'react'
import '../why/why.scss'
import CommonPage from "../CommonPage";
export default class Donation extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        const users =['Liu*un','a*e'];
        return (
            <div className='donation'>
               <div>
                   <div>
                       <p>
                           PAGENOTE 不以盈利为目的，只为热爱：热爱产品，热爱技术。
                       </p>
                       <p>
                           如果觉得 PAGENOTE 对你产生了一点点帮助，打赏让我们知道「自己的努力有了一些价值」。任意金额都是对我们的一种鼓励。
                       </p>
                       <div>
                           <img width="200" src='/qr.png' alt="打赏"/>
                           <img src="https://logike.cn/images/zhifu.png" alt=""/>
                       </div>
                   </div>
                   <div>
                       <h4>感谢以下用户的支持</h4>
                       <p>
                           {
                               users.map((user)=>(
                                 <span key={user} className='user'>{user}  </span>
                               ))
                           }
                       </p>
                   </div>

                   <div className='more-promote'>
                       除了打赏外，你还可以参与产品的推广和改进。
                       <ol>
                           <li>
                               <strong>绘制 PAGENOTE 宣传插画、海报图片、视频， PAGENOTE icon等各类UI稿。</strong>
                           </li>
                           <li>
                               加入QQ用户群 <b>769094377</b> 提供你的反馈和idea
                           </li>
                           <li>
                               参与代码维护、功能开发。<a href="https://github.com/rowthan/pagenote">GitHub</a>
                           </li>
                           <li>
                               把 PAGENOTE 推荐给你的好友、在论坛内发帖推广
                           </li>
                       </ol>
                   </div>
               </div>
            </div>
        )
    }
}

CommonPage(Donation);
