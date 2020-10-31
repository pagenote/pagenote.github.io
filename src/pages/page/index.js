import React, {Component} from 'react'
import Editor from '../../components/editor/Editor'
import './page.scss'
import CommonPage from "../CommonPage";


const datas = {
  why: {"time":1604149594503,"blocks":[{"type":"header","data":{"text":"Q: 怎么使用？","level":2}},{"type":"paragraph","data":{"text":"<a href=\"http://localhost:8080/why#how-to-use\"></a>A: pagenote几乎没有学习成本，所有的功能，都可以从「勾选一段文本」开始。"}},{"type":"header","data":{"text":"Q: 会做pagenote自己的服务存储吗？","level":2}},{"type":"paragraph","data":{"text":"<a href=\"http://localhost:8080/why#why-no-server\"></a>A: 搭建自己的服务器，有一定的经济成本，当使用用户较多时，会考虑。如果你有这方面的需求，请&nbsp;<a href=\"https://www.wjx.cn/jq/69876579.aspx\">留言</a>"}},{"type":"paragraph","data":{"text":"正在规划支持 webdav 协议数据存储"}},{"type":"header","data":{"text":"Q: 怎么参与贡献？","level":2}},{"type":"paragraph","data":{"text":"<a href=\"http://localhost:8080/why#how-to-donation\"></a>A:支持/贡献"}},{"type":"header","data":{"text":"Q: 加入用户群可以做什么？","level":2}},{"type":"paragraph","data":{"text":"<a href=\"http://localhost:8080/why#why-join-us\"></a>A: 这是一个思想碰撞的地方，如果你有什么建议或点子，可以在这里分享，你的想法很可能被大家一起验证并出现在pagenote的功能中。当然作为早期的pagenote用户，加入用户群可以第一时间掌握最新功能动态和使用高级功能。"}}],"version":"2.19.0"},
  privacy:{"time":1604150080100,"blocks":[{"type":"paragraph","data":{"text":"请您审慎阅读并选择接受或不接受本协议。<b>若您不同意本条款，请您立即停止使用或卸载本扩展应用</b>。"}},{"type":"paragraph","data":{"text":"本隐私政策包括以下内容："}},{"type":"list","data":{"style":"ordered","items":["我们如何收集您的个人信息","我们如何使用您的个人信息","我们如何共享、转让、公开披露您的个人信息","个人信息的存储","隐私政策的变更和通知"]}},{"type":"paragraph","data":{"text":"PAGENOTE无服务器端存储用户信息"}},{"type":"list","data":{"style":"ordered","items":["我们<b>不会收集你的个人身份信息</b>（指能够单独或者与其他信息结合识别特定自然人身份的信息，如姓名、手机号、邮件等）。但对每一个用户会生成一个随机字符串ID，用于标识当前用户。","日志记录 我们将对您在使用过程中产生的&nbsp;<b>部分关键行为进行记录</b>，<b>默认视为【参与改进计划】</b>，如启用、关闭扩展应用。这些记录是为了更好的帮助我们了解产品功能的使用频率，为后续的改进提供参考。我们<b>仅会记录功能使用的次数，而不会记录具体的使用数据</b>。例，我们并不会收集你访问了某个网站的URL。如果你不希望我们获取这些信息，你可以在设置页面中，关闭【参与改进计划】。<br>","授权登录 我们提供了使用GitHub账号授权的功能，授权后将可以通过本扩展调用GitHub API，如创建issue，获取账号信息等。授权信息仅存储在你的浏览器本地，我们不会收集这些授权信息。<br>","我们不会共享、转让、公开披露您的个人信息。如有需要，在此之前会再次征求您的同意。<br>","您的个人信息存储在你的浏览器本地。<br>","隐私政策发生改变时，我们再另行通知与您。<br>"]}}],"version":"2.19.0"},
  donation:{"time":1604150308403,"blocks":[{"type":"paragraph","data":{"text":"PAGENOTE 不以盈利为目的，只为热爱：热爱产品，热爱技术。"}},{"type":"paragraph","data":{"text":"如果觉得 PAGENOTE 对你产生了一点点帮助。打赏让我们知道「自己的努力有了一些价值」。任意金额都是对我们的一种鼓励。"}},{"type":"image","data":{"url":"/qr.png","caption":"微信扫码打赏。如果愿意，支付时可以留下你的邮箱或QQ信息呀，方便我们回访。","withBorder":false,"withBackground":true,"stretched":false}},{"type":"header","data":{"text":"感谢以下用户的支持","level":4}},{"type":"paragraph","data":{"text":"<mark class=\"cdx-marker\">Liu*un</mark>、 <mark class=\"cdx-marker\">a*e</mark>"}},{"type":"paragraph","data":{"text":"除了打赏外，你还可以参与产品的推广和改进。"}},{"type":"list","data":{"style":"ordered","items":["绘制 PAGENOTE 宣传插画、海报图片、视频， PAGENOTE icon等各类UI稿。","加入QQ用户群&nbsp;<b>769094377</b>&nbsp;提供你的反馈和idea。","参与代码维护、功能开发。<a href=\"https://github.com/rowthan/pagenote\">GitHub</a>。","把 PAGENOTE 推荐给你的好友、在论坛内发帖推广。"]}}],"version":"2.19.0"},
  developer:{"time":1604150447136,"blocks":[{"type":"header","data":{"text":"开发者","level":2}},{"type":"paragraph","data":{"text":"为你的网站接入 PAGENOTE 后，你的网站将具备以下功能："}},{"type":"list","data":{"style":"unordered","items":["用户不需要安装插件也能使用PAGENOTE的功能","PAGENOTE 提供了API，你可以将数据存储在你部署的服务器中","支持用户一键反馈、在网页上记录笔记、协同沟通、等功能","你还可以定制化你的需求"]}},{"type":"paragraph","data":{"text":"接入方式：<a href=\"https://github.com/rowthan/pagenote\">https://github.com/rowthan/pagenote</a>"}},{"type":"header","data":{"text":"企业用户","level":4}},{"type":"paragraph","data":{"text":"接收付费定制服务。详情请联系 logikecn@gmai.com"}}],"version":"2.19.0"},
  '0.12.0':{"time":1604159658197,"blocks":[{"type":"header","data":{"text":"PAGENOTE 0.12.0 自定义你的功能按钮","level":2}},{"type":"paragraph","data":{"text":"从现在起，你可以在设置页面内自定义功能按钮，甚至自己编写一段脚本。"}},{"type":"image","data":{"url":"/release/0.12.0.png","caption":"自定义你的功能按钮","withBorder":false,"withBackground":true,"stretched":false}},{"type":"header","data":{"text":"使用方法：","level":2}},{"type":"paragraph","data":{"text":"横向\\纵向点击添加，在右侧使用「预设」方案，或自定义。其中你需要填写以下信息"}},{"type":"list","data":{"style":"ordered","items":["按钮名称：按钮中唯一的名称","按钮图片：支持svg图片，你可以在网上搜索找到一些合适的svg格式图标。比如在<a href=\"https://www.iconfont.cn/\">这里</a>","快捷键：主要不要和其他快键键冲突即可","跳转链接：https://www.baidu.com/s?wd=<b>${keyword}&nbsp; </b>注意：${keyword} 会被替换为选中的文本","执行函数：与「跳转链接」互斥，优先级高于「跳转链接」"]}},{"type":"warning","data":{"title":"输入内容为一个匿名执行函数。例子如下。我们预设的脚本是安全的，建议你使用预设类型。执行函数具有高度控制能力，请务必注意确保函数安全。","message":"(function(){writeTextToClipboard(API.text);<br>            API.notification('已复制，去粘贴使用吧','success',3000);<br>        })();"}},{"type":"delimiter","data":{}},{"type":"paragraph","data":{"text":"<i>如果你编写了一些有趣的脚本，可以发送给我们，<b>经过验证后，</b>将作为预设方案供用户选择。</i>"}},{"type":"paragraph","data":{"text":"<a href=\"/release\">查看历史更新日志</a>"}}],"version":"2.19.0"}
};

export default class CreatePage extends Component{

  render() {
    const query = new URLSearchParams(window.location.search);

    let data = datas[query.get('id')] || '';
    return (
      <div className='page' data-pagenote='new'>
        <div className='editor_container'>
          <Editor data={data} readonly={true}></Editor>
        </div>
      </div>
    )
  }
}

CommonPage(CreatePage);
