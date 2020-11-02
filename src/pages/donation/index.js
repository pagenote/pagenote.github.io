import React, {Component} from 'react'
import Editor from '../../components/editor/Editor'
import CommonPage from "../CommonPage";


const datas = {
  donation:{"time":1604322221558,"blocks":[{"type":"paragraph","data":{"text":"PAGENOTE 不以盈利为目的，只为热爱：热爱产品，热爱技术。"}},{"type":"paragraph","data":{"text":"如果觉得 PAGENOTE 对你产生了一点点帮助。打赏让我们知道「自己的努力有了一些价值」。任意金额都是对我们的一种鼓励。"}},{"type":"image","data":{"url":"/dashang.jpg","caption":"微信扫码打赏。如果愿意，支付时可以留下你的邮箱或QQ信息呀，方便我们回访。","withBorder":false,"withBackground":true,"stretched":false}},{"type":"header","data":{"text":"感谢以下用户的支持","level":4}},{"type":"paragraph","data":{"text":"<mark class=\"cdx-marker\">Liu*un</mark>、 <mark class=\"cdx-marker\">a*e</mark>、"}},{"type":"paragraph","data":{"text":"无名的用户，单号："}},{"type":"paragraph","data":{"text":"<mark class=\"cdx-marker\">512102</mark>"}},{"type":"paragraph","data":{"text":"除了打赏外，你还可以参与产品的推广和改进。"}},{"type":"list","data":{"style":"ordered","items":["绘制 PAGENOTE 宣传插画、海报图片、视频， PAGENOTE icon等各类UI稿。","加入QQ用户群&nbsp;<b>769094377</b>&nbsp;提供你的反馈和idea。","参与代码维护、功能开发。<a href=\"https://github.com/rowthan/pagenote\">GitHub</a>。","把 PAGENOTE 推荐给你的好友、在论坛内发帖推广。"]}}],"version":"2.19.0"},
};

export default class CreatePage extends Component{

  render() {
    let data = datas.donation;
    return (
      <div className='donation'>
        <div className='editor_container'>
          <Editor data={data} readonly={true}></Editor>
        </div>
      </div>
    )
  }
}

CommonPage(CreatePage);
