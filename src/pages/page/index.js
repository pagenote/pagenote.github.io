import React, {Component} from 'react'
import Editor from '../../components/editor/Editor'
import './page.scss'
import CommonPage from "../CommonPage";


const datas = {
  why: {"time":1605359873500,"blocks":[{"type":"header","data":{"text":"Q: 怎么使用？","level":3}},{"type":"paragraph","data":{"text":"PAGENOTE 几乎没有学习成本，所有的功能，都可以从「勾选一段文本」开始。"}},{"type":"header","data":{"text":"Q: 会做 PAGENOTE 自己的服务存储吗？","level":3}},{"type":"paragraph","data":{"text":"<a href=\"/why#why-no-server\"></a>搭建自己的服务器，有一定的经济成本，当使用用户较多时，会考虑。如果你有这方面的需求，请在微信公众号中反馈。我们回根据用户的反馈情况，调整未来功能的开发优先级。"}},{"type":"paragraph","data":{"text":"正在规划支持 <b>webdav</b> 协议数据存储。"}},{"type":"header","data":{"text":"Q: 怎么参与贡献？","level":3}},{"type":"list","data":{"style":"unordered","items":["代码托管在GitHub中，你可以参与代码维护","<a href=\"/donation\">打赏支持我们</a>"]}},{"type":"header","data":{"text":"Q: 加入用户群可以做什么？","level":3}},{"type":"paragraph","data":{"text":"<a href=\"/why#why-join-us\"></a>如果你有什么建议或点子，可以在这里分享，你的想法很可能被大家一起验证并出现在pagenote的功能中。"}},{"type":"paragraph","data":{"text":"当然作为早期的 PAGENOTE 用户，加入用户群可以第一时间掌握最新功能动态和使用高级功能。"}},{"type":"header","data":{"text":"Q：和其他同类产品，PAGENOTE 有什么特别之处","level":3}},{"type":"paragraph","data":{"text":"PAGENOTE 支持高度的定制化，包括不限于颜色、功能按钮、侧边栏。"}},{"type":"paragraph","data":{"text":"使用没有限制，不需要登录，数据存储在你的本地。"}}],"version":"2.19.0"},
  developer:{"time":1604150447136,"blocks":[{"type":"header","data":{"text":"开发者","level":2}},{"type":"paragraph","data":{"text":"为你的网站接入 PAGENOTE 后，你的网站将具备以下功能："}},{"type":"list","data":{"style":"unordered","items":["用户不需要安装插件也能使用PAGENOTE的功能","PAGENOTE 提供了API，你可以将数据存储在你部署的服务器中","支持用户一键反馈、在网页上记录笔记、协同沟通、等功能","你还可以定制化你的需求"]}},{"type":"paragraph","data":{"text":"接入方式：<a href=\"https://github.com/rowthan/pagenote\">https://github.com/rowthan/pagenote</a>"}},{"type":"header","data":{"text":"企业用户","level":4}},{"type":"paragraph","data":{"text":"接收付费定制服务。详情请联系 logikecn@gmai.com"}}],"version":"2.19.0"},
  '0.12.0':{"time":1604159658197,"blocks":[{"type":"header","data":{"text":"PAGENOTE 0.12.0 自定义你的功能按钮","level":2}},{"type":"paragraph","data":{"text":"从现在起，你可以在设置页面内自定义功能按钮，甚至自己编写一段脚本。"}},{"type":"image","data":{"url":"/release_asset/0.12.0.png","caption":"自定义你的功能按钮","withBorder":false,"withBackground":true,"stretched":false}},{"type":"header","data":{"text":"使用方法：","level":2}},{"type":"paragraph","data":{"text":"横向\\纵向点击添加，在右侧使用「预设」方案，或自定义。其中你需要填写以下信息"}},{"type":"list","data":{"style":"ordered","items":["按钮名称：按钮中唯一的名称","按钮图片：支持svg图片，你可以在网上搜索找到一些合适的svg格式图标。比如在<a href=\"https://www.iconfont.cn/\">这里</a>","快捷键：主要不要和其他快键键冲突即可","跳转链接：https://www.baidu.com/s?wd=<b>${keyword}&nbsp; </b>注意：${keyword} 会被替换为选中的文本","执行函数：与「跳转链接」互斥，优先级高于「跳转链接」"]}},{"type":"warning","data":{"title":"输入内容为一个匿名执行函数。例子如下。我们预设的脚本是安全的，建议你使用预设类型。执行函数具有高度控制能力，请务必注意确保函数安全。","message":"(function(){writeTextToClipboard(API.text);<br>            API.notification('已复制，去粘贴使用吧','success',3000);<br>        })();"}},{"type":"delimiter","data":{}},{"type":"paragraph","data":{"text":"<i>如果你编写了一些有趣的脚本，可以发送给我们，<b>经过验证后，</b>将作为预设方案供用户选择。</i>"}},{"type":"paragraph","data":{"text":"<a href=\"/release\">查看历史更新日志</a>"}}],"version":"2.19.0"},
  future:{"time":1604198024774,"blocks":[{"type":"header","data":{"text":"功能预告","level":2}},{"type":"header","data":{"text":"在线笔记平台 0.12.+ 支持","level":3}},{"type":"paragraph","data":{"text":"即便不安装 PAGENOTE 浏览器扩展，你也可以在 pagenote.cn 网站上书写你的笔记，数据仍然存储在你本地。pagenote.cn 将作为独立的笔记网站运行，并同时天然兼容管理浏览器插件 PAGENOTE 的数据。"}},{"type":"header","data":{"text":"webdav 0.13.0 版本支持<br>","level":3}},{"type":"paragraph","data":{"text":"支持webdav协议网盘数据存储。使用此功能你可以将PAGENOTE数据存储到你的个人云端(<mark class=\"cdx-marker\">非PAGENOTE提供</mark>，需要你自行提供)，以此来实现跨浏览器、跨设备的<b>数据同步</b>。"}},{"type":"header","data":{"text":"素材库抓取 0.14.+","level":3}},{"type":"paragraph","data":{"text":"你或许并不希望高亮一段文本，只是希望抓取一些文字、图片、视频进行收藏。你关注的点在于这些「素材」本身，而不是网页本身。素材库将允许你在网页上选中这些素材，进行收藏，同时并不会在网页上留下任何痕迹（例如高亮）。"}},{"type":"paragraph","data":{"text":"场景🌰：正在写一篇毕业论文，浏览多个网页，选中了多段素材、图片，加入到素材库后。pagenote.cn 将自动根据这些素材标签生成一篇文档。"}},{"type":"header","data":{"text":"开放API 支持用户个人数据库存储数据 ~~~<br>","level":3}},{"type":"paragraph","data":{"text":"webdav 允许将 PAGENOTE 数据存储在用户的个人网盘中，但该存储方式以文件系统存储，存在天然的缺陷：版本冲突管理、数据查找低效，索引困难、传输效率低等问题。支持数据库的管理方式，可以更有效的解决这些问题。<br>"}},{"type":"delimiter","data":{}},{"type":"paragraph","data":{"text":"你期待的功能不在上面👆？进群反馈<i>769094377</i>，我们将根据用户心声调整优先级。你关心的，才是更好的用户体验。"}}],"version":"2.19.0"},
  why_track: {"time":1604667999328,"blocks":[{"type":"header","data":{"text":"参与用户改进计划的意义？","level":2}},{"type":"paragraph","data":{"text":"可以让我们知道你正在使用PAGENOTE的情况，如版本号信息，数据情况等。通过这些信息，我们可以更好的升级。如最新版本发生了不兼容的升级时，如果开启了「参与用户改进」，PAGENOTE 可以根据这些信息做自动升级，否则，可能会出现升级失败的情况。"}},{"type":"header","data":{"text":"会收集和使用用户隐私数据吗？","level":3}},{"type":"paragraph","data":{"text":"不会！"}}],"version":"2.19.0"},
  default:{"time":1605360254897,"blocks":[{"type":"header","data":{"text":"猜你想看？","level":3}},{"type":"list","data":{"style":"ordered","items":["<a href=\"/page?id=why\">常见问题</a>","<a href=\"/page?id=developer\">开发者</a>","<a href=\"/page?id=future\">功能规划</a>","<a href=\"/page?id=why_track\">用户体验计划</a>"]}}],"version":"2.19.0"}
};

export default class CreatePage extends Component{

  render() {
    const query = new URLSearchParams(window.location.search);

    let data = datas[query.get('id')] || datas.default;
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
