(self.webpackChunkpagenote_cn=self.webpackChunkpagenote_cn||[]).push([[375],{9648:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});var r=n(3804),a=n.n(r);const o=EditorJS;var i=n.n(o);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const l=function(){function e(t){var n=t.data,r=(t.config,t.api,t.readOnly);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=n,this.readOnly=r}var t,n,r;return t=e,r=[{key:"isReadOnlySupported",get:function(){return!0}}],(n=[{key:"render",value:function(){var e=document.createElement("h4");return e.classList="light-head",e.style.borderColor=this.data.color,e.innerHTML=this.data.text,e.contentEditable=!1,e}},{key:"save",value:function(){return{light:this.data.light}}}])&&c(t.prototype,n),r&&c(t,r),e}();var p=n(4919),s=n.n(p),u=n(2964),f=n.n(u),d=n(8092),h=n.n(d),y=n(6689),m=n.n(y),b=n(3058),g=n.n(b),v=n(3602),x=n.n(v),w=n(5547),E=n.n(w),k=n(3448),O=n.n(k);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?S(e):t}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(p,e);var t,n,r,o,c=(r=p,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function p(e){var t,n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.editor?t.editor&&t.editor.blocks.render({blocks:e}).then((function(){document.querySelector(".codex-editor__redactor").style.paddingBottom="30px"})):console.log("not ready")},(r="renderBlocks")in(n=S(t=c.call(this,e)))?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,t}return t=p,(n=[{key:"componentDidMount",value:function(){var e=this,t={header:{class:s(),inlineToolbar:!0},list:{class:f(),inlineToolbar:!0},image:{class:h(),inlineToolbar:!0},delimiter:{class:m(),inlineToolbar:!0},quote:{class:g(),inlineToolbar:!0},warning:x(),marker:{class:E(),shortcut:"CMD+SHIFT+M"},table:{class:O()},lightheader:{class:l}};this.props.tools&&Object.keys(t).forEach((function(n){e.props.tools.includes(n)||delete t[n]}));var n=Object.assign({time:(new Date).getTime(),blocks:[],version:""},this.props.data||{}),r=new(i())({holder:"pagenote-editor",readOnly:this.props.readonly,tools:t,data:n,onReady:function(){e.editor=r},onChange:function(t){e.editor.save().then((function(t){"function"==typeof e.props.onSave&&e.props.onSave(t)}))}})}},{key:"render",value:function(){return a().createElement("div",{className:"editor"},a().createElement("div",{id:"pagenote-editor"}))}}])&&j(t.prototype,n),p}(r.Component)},5186:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(3804),a=n.n(r),o=n(7196),i=n.n(o),c=n(9669),l=n.n(c);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m="https://cors-anywhere.herokuapp.com/",b=("https://github.com/login/oauth/authorize?scope=user%20public_repo&client_id=c4aae381097464aa1024&redirect_uri=".concat("https://pagenote.logike.cn"),function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),y(d(t=i.call(this,e)),"codeToToken",(function(){var e=window.location.search.match(/code=(.*)$/);e&&l()({method:"post",headers:{Accept:"application/json"},url:"".concat(m,"https://github.com/login/oauth/access_token"),data:{client_id:"c4aae381097464aa1024",client_secret:"ed40211bca3ccabd900586079b89fd0ec1ea48be",code:e[1]}}).then((function(e){var t=e.data.access_token;localStorage.setItem("token",t);var n=new URLSearchParams(location.search).get("comeback");window.location=n||"/"}))})),y(d(t),"checkLogin",(function(){var e=localStorage.getItem("token");e&&l()({method:"get",headers:{Accept:"application/json",Authorization:"token ".concat(e)},url:"".concat(m,"https://api.github.com/user")}).then((function(e){e.data&&t.setState({userInfo:e.data})})).catch((function(e){console.error(e)}))})),t.state={userInfo:{}},t}return t=c,(n=[{key:"componentDidMount",value:function(){this.codeToToken(),this.checkLogin()}},{key:"render",value:function(){var e=this.state.userInfo;return a().createElement("nav",null,a().createElement("style",{jsx:"true"},"\n                nav{\n                    // height: 40px;\n                    // line-height: 40px;\n                    font-size:14px;\n                    border-bottom: 1px solid rgba(30,35,42,.06);\n                    box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);\n                }\n                nav a{\n                    color: #0366d6;\n                    text-decoration: none;\n                    margin-right: 12px;\n                }\n                .header{\n                    display: flex;\n                    padding: 0 24px;\n                    padding: 10px 24px;\n                    margin: 0 auto;\n                    max-width: 1200px;\n                    justify-content: space-between;\n                    box-sizing: border-box;\n                }\n                .me-link{\n                    margin-right: 12px;\n                }\n                .user-avatar{\n                    width: 20px;\n                    height: 20px;\n                    border-radius: 10px;\n                    border-radius: 4px;\n                    overflow: hidden;\n                }\n                #login{\n                    padding: 0px 6px;\n                    background: #509ff5;\n                    border-radius: 6px;\n                    color: #fff;\n                }\n            "),a().createElement("section",{className:"header"},a().createElement("div",null,a().createElement("a",{href:"/"},"PAGENOTE 一页一记")),a().createElement("div",null,a().createElement("span",{className:"me-link"},e.name?a().createElement("a",{className:"user-avatar",href:"/me"},a().createElement("img",{width:20,height:20,src:"".concat(e.avatar_url,"&s=30"),alt:"".concat(e.name)})):a().createElement("a",{id:"login",href:"/me"},"我的")),a().createElement("a",{href:"/setting"},"设置"))))}}])&&s(t.prototype,n),c}(r.Component));function g(){return a().createElement("footer",null,a().createElement("style",{jsx:"true"},"\n                footer{\n                  // display:flex;\n                  // justify-content: space-around;\n                  max-width: 800px;\n                  margin:24px auto;\n                  \n                  font-size:12px;\n                }\n                \n                  .footer-links a{\n                    margin-right:12px;\n                    transition: color .2s;\n                    color: #586069;\n                    text-decoration: none;\n                    line-height: 1.4em;\n                  }\n                  .footer-links a:hover{\n                    text-decoration: underline;\n                    color: #0366d6;\n                  }\n                  \n                  .d-flex {display: flex!important;}\n                  .list-style-none {list-style: none!important;}\n                  .footer-links{\n                    justify-content: space-between;\n                    width: 100%;\n                    margin: 0;\n                    padding: 18px 0 12px 0;\n                    border-top: 1px solid #ececec;\n                  }\n              "),a().createElement("footer",null,a().createElement("div",{className:"position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between flex-sm-items-center pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light "},a().createElement("ul",{className:"list-style-none d-flex footer-links"},a().createElement("li",{className:"mr-3 mr-lg-0"},"© 2020 ",a().createElement("a",{href:"/"},"PAGENOTE")),a().createElement("li",{className:"mr-3 mr-lg-0"},a().createElement("p",null,a().createElement("a",{href:"/hello.html"},"产品介绍")),a().createElement("p",null,a().createElement("a",{href:"/page?id=why"},"常见问题")),a().createElement("p",null,a().createElement("a",{href:"/release"},"更新日志"))),a().createElement("li",{className:"mr-3 mr-lg-0"},a().createElement("p",null,a().createElement("a",{href:"/page?id=privacy"},"隐私协议"))),a().createElement("li",null,a().createElement("p",null,a().createElement("a",{href:"/donation"},"支持/贡献"))),a().createElement("li",null,a().createElement("p",null,a().createElement("a",{href:"/page?id=developer"},"开发者")),a().createElement("p",null,"用户群：769094377"))))))}function v(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=document.getElementById("app");i().render(a().createElement(a().Fragment,null,t&&a().createElement(b,null),a().createElement(e,null),n&&a().createElement(g,null)),r)}if(window.location.protocol.indexOf("https")>-1){var x=function(){dataLayer.push(arguments)};window.dataLayer=window.dataLayer||[],x("js",new Date),x("config","G-LBE869KVBS"),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then((function(e){console.log("Service Worker 注册成功!")})).catch((function(e){console.log(e)}))}},4390:(e,t,n)=>{"use strict";var r=n(3804),a=n.n(r),o=n(9648),i=n(5186);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d={why:{time:1604149594503,blocks:[{type:"header",data:{text:"Q: 怎么使用？",level:2}},{type:"paragraph",data:{text:'<a href="http://localhost:8080/why#how-to-use"></a>A: pagenote几乎没有学习成本，所有的功能，都可以从「勾选一段文本」开始。'}},{type:"header",data:{text:"Q: 会做pagenote自己的服务存储吗？",level:2}},{type:"paragraph",data:{text:'<a href="http://localhost:8080/why#why-no-server"></a>A: 搭建自己的服务器，有一定的经济成本，当使用用户较多时，会考虑。如果你有这方面的需求，请&nbsp;<a href="https://www.wjx.cn/jq/69876579.aspx">留言</a>'}},{type:"paragraph",data:{text:"正在规划支持 webdav 协议数据存储"}},{type:"header",data:{text:"Q: 怎么参与贡献？",level:2}},{type:"paragraph",data:{text:'<a href="http://localhost:8080/why#how-to-donation"></a>A:支持/贡献'}},{type:"header",data:{text:"Q: 加入用户群可以做什么？",level:2}},{type:"paragraph",data:{text:'<a href="http://localhost:8080/why#why-join-us"></a>A: 这是一个思想碰撞的地方，如果你有什么建议或点子，可以在这里分享，你的想法很可能被大家一起验证并出现在pagenote的功能中。当然作为早期的pagenote用户，加入用户群可以第一时间掌握最新功能动态和使用高级功能。'}}],version:"2.19.0"},privacy:{time:1604150080100,blocks:[{type:"paragraph",data:{text:"请您审慎阅读并选择接受或不接受本协议。<b>若您不同意本条款，请您立即停止使用或卸载本扩展应用</b>。"}},{type:"paragraph",data:{text:"本隐私政策包括以下内容："}},{type:"list",data:{style:"ordered",items:["我们如何收集您的个人信息","我们如何使用您的个人信息","我们如何共享、转让、公开披露您的个人信息","个人信息的存储","隐私政策的变更和通知"]}},{type:"paragraph",data:{text:"PAGENOTE无服务器端存储用户信息"}},{type:"list",data:{style:"ordered",items:["我们<b>不会收集你的个人身份信息</b>（指能够单独或者与其他信息结合识别特定自然人身份的信息，如姓名、手机号、邮件等）。但对每一个用户会生成一个随机字符串ID，用于标识当前用户。","日志记录 我们将对您在使用过程中产生的&nbsp;<b>部分关键行为进行记录</b>，<b>默认视为【参与改进计划】</b>，如启用、关闭扩展应用。这些记录是为了更好的帮助我们了解产品功能的使用频率，为后续的改进提供参考。我们<b>仅会记录功能使用的次数，而不会记录具体的使用数据</b>。例，我们并不会收集你访问了某个网站的URL。如果你不希望我们获取这些信息，你可以在设置页面中，关闭【参与改进计划】。<br>","授权登录 我们提供了使用GitHub账号授权的功能，授权后将可以通过本扩展调用GitHub API，如创建issue，获取账号信息等。授权信息仅存储在你的浏览器本地，我们不会收集这些授权信息。<br>","我们不会共享、转让、公开披露您的个人信息。如有需要，在此之前会再次征求您的同意。<br>","您的个人信息存储在你的浏览器本地。<br>","隐私政策发生改变时，我们再另行通知与您。<br>"]}}],version:"2.19.0"},donation:{time:1604150308403,blocks:[{type:"paragraph",data:{text:"PAGENOTE 不以盈利为目的，只为热爱：热爱产品，热爱技术。"}},{type:"paragraph",data:{text:"如果觉得 PAGENOTE 对你产生了一点点帮助。打赏让我们知道「自己的努力有了一些价值」。任意金额都是对我们的一种鼓励。"}},{type:"image",data:{url:"/qr.png",caption:"微信扫码打赏。如果愿意，支付时可以留下你的邮箱或QQ信息呀，方便我们回访。",withBorder:!1,withBackground:!0,stretched:!1}},{type:"header",data:{text:"感谢以下用户的支持",level:4}},{type:"paragraph",data:{text:'<mark class="cdx-marker">Liu*un</mark>、 <mark class="cdx-marker">a*e</mark>'}},{type:"paragraph",data:{text:"除了打赏外，你还可以参与产品的推广和改进。"}},{type:"list",data:{style:"ordered",items:["绘制 PAGENOTE 宣传插画、海报图片、视频， PAGENOTE icon等各类UI稿。","加入QQ用户群&nbsp;<b>769094377</b>&nbsp;提供你的反馈和idea。",'参与代码维护、功能开发。<a href="https://github.com/rowthan/pagenote">GitHub</a>。',"把 PAGENOTE 推荐给你的好友、在论坛内发帖推广。"]}}],version:"2.19.0"},developer:{time:1604150447136,blocks:[{type:"header",data:{text:"开发者",level:2}},{type:"paragraph",data:{text:"为你的网站接入 PAGENOTE 后，你的网站将具备以下功能："}},{type:"list",data:{style:"unordered",items:["用户不需要安装插件也能使用PAGENOTE的功能","PAGENOTE 提供了API，你可以将数据存储在你部署的服务器中","支持用户一键反馈、在网页上记录笔记、协同沟通、等功能","你还可以定制化你的需求"]}},{type:"paragraph",data:{text:'接入方式：<a href="https://github.com/rowthan/pagenote">https://github.com/rowthan/pagenote</a>'}},{type:"header",data:{text:"企业用户",level:4}},{type:"paragraph",data:{text:"接收付费定制服务。详情请联系 logikecn@gmai.com"}}],version:"2.19.0"},"0.12.0":{time:1604159658197,blocks:[{type:"header",data:{text:"PAGENOTE 0.12.0 自定义你的功能按钮",level:2}},{type:"paragraph",data:{text:"从现在起，你可以在设置页面内自定义功能按钮，甚至自己编写一段脚本。"}},{type:"image",data:{url:"/release/0.12.0.png",caption:"自定义你的功能按钮",withBorder:!1,withBackground:!0,stretched:!1}},{type:"header",data:{text:"使用方法：",level:2}},{type:"paragraph",data:{text:"横向\\纵向点击添加，在右侧使用「预设」方案，或自定义。其中你需要填写以下信息"}},{type:"list",data:{style:"ordered",items:["按钮名称：按钮中唯一的名称",'按钮图片：支持svg图片，你可以在网上搜索找到一些合适的svg格式图标。比如在<a href="https://www.iconfont.cn/">这里</a>',"快捷键：主要不要和其他快键键冲突即可","跳转链接：https://www.baidu.com/s?wd=<b>${keyword}&nbsp; </b>注意：${keyword} 会被替换为选中的文本","执行函数：与「跳转链接」互斥，优先级高于「跳转链接」"]}},{type:"warning",data:{title:"输入内容为一个匿名执行函数。例子如下。我们预设的脚本是安全的，建议你使用预设类型。执行函数具有高度控制能力，请务必注意确保函数安全。",message:"(function(){writeTextToClipboard(API.text);<br>            API.notification('已复制，去粘贴使用吧','success',3000);<br>        })();"}},{type:"delimiter",data:{}},{type:"paragraph",data:{text:"<i>如果你编写了一些有趣的脚本，可以发送给我们，<b>经过验证后，</b>将作为预设方案供用户选择。</i>"}},{type:"paragraph",data:{text:'<a href="/release">查看历史更新日志</a>'}}],version:"2.19.0"},future:{time:1604198024774,blocks:[{type:"header",data:{text:"功能预告",level:2}},{type:"header",data:{text:"在线笔记平台 0.12.+ 支持",level:3}},{type:"paragraph",data:{text:"即便不安装 PAGENOTE 浏览器扩展，你也可以在 pagenote.cn 网站上书写你的笔记，数据仍然存储在你本地。pagenote.cn 将作为独立的笔记网站运行，并同时天然兼容管理浏览器插件 PAGENOTE 的数据。"}},{type:"header",data:{text:"webdav 0.13.0 版本支持<br>",level:3}},{type:"paragraph",data:{text:'支持webdav协议网盘数据存储。使用此功能你可以将PAGENOTE数据存储到你的个人云端(<mark class="cdx-marker">非PAGENOTE提供</mark>，需要你自行提供)，以此来实现跨浏览器、跨设备的<b>数据同步</b>。'}},{type:"header",data:{text:"素材库抓取 0.14.+",level:3}},{type:"paragraph",data:{text:"你或许并不希望高亮一段文本，只是希望抓取一些文字、图片、视频进行收藏。你关注的点在于这些「素材」本身，而不是网页本身。素材库将允许你在网页上选中这些素材，进行收藏，同时并不会在网页上留下任何痕迹（例如高亮）。"}},{type:"paragraph",data:{text:"场景🌰：正在写一篇毕业论文，浏览多个网页，选中了多段素材、图片，加入到素材库后。pagenote.cn 将自动根据这些素材标签生成一篇文档。"}},{type:"header",data:{text:"开放API 支持用户个人数据库存储数据 ~~~<br>",level:3}},{type:"paragraph",data:{text:"webdav 允许将 PAGENOTE 数据存储在用户的个人网盘中，但该存储方式以文件系统存储，存在天然的缺陷：版本冲突管理、数据查找低效，索引困难、传输效率低等问题。支持数据库的管理方式，可以更有效的解决这些问题。<br>"}},{type:"delimiter",data:{}},{type:"paragraph",data:{text:"你期待的功能不在上面👆？进群反馈<i>769094377</i>，我们将根据用户心声调整优先级。你关心的，才是更好的用户体验。"}}],version:"2.19.0"}},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(h,e);var t,n,r,i,c=(r=h,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(i){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function h(){return l(this,h),c.apply(this,arguments)}return t=h,(n=[{key:"render",value:function(){var e=new URLSearchParams(window.location.search),t=d[e.get("id")]||"";return a().createElement("div",{className:"page","data-pagenote":"new"},a().createElement("div",{className:"editor_container"},a().createElement(o.Z,{data:t,readonly:!0})))}}])&&p(t.prototype,n),h}(r.Component);(0,i.Z)(h)},3804:e=>{"use strict";e.exports=React},7196:e=>{"use strict";e.exports=ReactDOM}},0,[[4390,666,216]]]);