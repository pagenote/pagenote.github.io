(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"8oxB":function(t,e){var n,r,a=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var s,u=[],l=!1,h=-1;function f(){l&&s&&(l=!1,s.length?u=s.concat(u):h=-1,u.length&&p())}function p(){if(!l){var t=c(f);l=!0;for(var e=u.length;e;){for(s=u,u=[];++h<e;)s&&s[h].run();h=-1,e=u.length}s=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new d(t,e)),1!==u.length||l||c(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=y,a.addListener=y,a.once=y,a.off=y,a.removeListener=y,a.removeAllListeners=y,a.emit=y,a.prependListener=y,a.prependOnceListener=y,a.listeners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},"HaE+":function(t,e,n){"use strict";function r(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function c(t){r(i,a,o,c,s,"next",t)}function s(t){r(i,a,o,c,s,"throw",t)}c(void 0)}))}}n.d(e,"a",(function(){return a}))},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return a}))},Pnnx:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var r=n("rePB"),a=n("o0o1"),o=n.n(a),i=n("HaE+"),c=n("1OyB"),s=n("vuIU"),u=n("Ji7U"),l=n("md7G"),h=n("foSv"),f=n("q1tI"),p=n.n(f),d=n("vDqi"),y=n.n(d),m=(n("K4WV"),p.a.createElement);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var a=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var w=0,k="https://pagenote.logike.cn/login?comeback=https://pagenote.logike.cn/share",O=function(t){Object(u.a)(n,t);var e=g(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).state={copied:!1,show:!0,activeTab:"share",markdown:"",showShare:!0,user:null,token:"",creating:!1,shareData:{},shareType:"all",errorMsg:"",snapshot:"",shareLink:"",shareStatus:""},r}return Object(s.a)(n,null,[{key:"getInitialProps",value:function(){var t=Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{showHeader:!1,showFooter:!1});case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.fetchData(),this.getUserFormServer(!1)}},{key:"fetchData",value:function(){if(window){var t=this;window.addEventListener("message",(function(e){"sync_shareInfo"===e.data.type&&(t.setState({shareData:e.data.shareData||{}}),console.log(e))}),!1),!t.state.shareData.title&&window.opener&&window.opener.postMessage({type:"get_share_data"},"*")}}},{key:"getUserFormServer",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=localStorage.getItem("token");if(this.setState({token:n}),!(++w>8)){var r="https://cors-anywhere.herokuapp.com/";y()({method:"get",headers:{Accept:"application/json",Authorization:"token ".concat(n)},url:"".concat(e?r:"","https://api.github.com/user")}).then((function(e){if(e.data){var n=e.data;t.setState({user:n})}})).catch((function(n){setTimeout((function(){t.getUserFormServer(!e)}),4e3)}))}}},{key:"changeTab",value:function(t){this.setState({activeTab:t})}},{key:"changeShareType",value:function(t){this.setState({shareType:t})}},{key:"copyMd",value:function(){var t=this,e=this.state.markdown+"\n\n[\u4f7f\u7528pagenote\u751f\u6210](https://pagenote.logike.cn)";try{navigator.clipboard.writeText(e).then((function(){t.setState({copied:!0})}))}catch(r){var n=document.createElement("textarea");n.textContent=e,document.body.appendChild(n),n.select(),document.execCommand("Copy",!1,null),document.body.removeChild(n)}this.setState({copied:!0})}},{key:"changeTitle",value:function(t){this.setState({shareData:b(b({},this.state.shareData),{},{title:t.target.value})})}},{key:"toggleShow",value:function(){this.setState({show:!this.state.show})}},{key:"close",value:function(){window&&window.close()}},{key:"doShare",value:function(){var t=this,e=this.state,n=e.token,r=e.shareData;this.setState({shareStatus:0});var a=JSON.parse(JSON.stringify(r));delete a.snapshot,delete a.images,"all"===this.state.shareType?delete a.markdown:delete a.html,y()({method:"post",headers:{Accept:"application/json",Authorization:"token ".concat(n)},url:"https://api.github.com/repos/rowthan/pagenote/issues",data:{title:a.title,body:JSON.stringify(a),labels:["pagenote"]}}).then((function(e){var n=a.url.indexOf("https")>-1?"https":"http";t.setState({errorMsg:(e.errors||[{}])[0].message,shareStatus:1,data:e.data,shareLink:"".concat(n,"://pagenote.logike.cn/snapshot?pagenote=").concat(e.data.number)})})).catch((function(e){t.setState({shareStatus:-1,data:e.data,errorMsg:(e.errors||[{}])[0].message||"\u521b\u5efa\u5206\u4eab\u94fe\u63a5\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u540e\u91cd\u8bd5\u6216\u5c1d\u8bd5\u300c\u4ec5\u5206\u4eab\u6807\u8bb0\u300d\u3002",shareLink:""})}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.activeTab,r=e.shareType,a=e.user,o=e.show,i=e.copied,c=e.shareLink,s=e.shareStatus,u=e.errorMsg,l=this.state.shareData,h=l.markdown,f=l.title,p=l.snapshot,d=l.html,y="all"===r;return m("div",{className:"share"},m("div",{className:"mask"},m("div",{className:"snapshot",style:{backgroundImage:"url(".concat(p,")"),display:y?"block":"none"}}),m("div",{className:"container",style:{display:o?"block":"none"}},m("a",{className:"close",onClick:this.close},"\u5173\u95ed"),m("div",{className:"tabs"},m("span",{onClick:function(){return t.changeTab("share")},className:"tab ".concat("share"===n?"active":"")},"\u5206\u4eab&\u5bfc\u51fa"),m("span",{onClick:function(){return t.changeTab("ground")},className:"tab ".concat("ground"===n?"active":"")},"pagenote \u5e7f\u573a"),m("div",{className:"tab-border"})),m("div",{className:"contents"},m("section",{className:"tab-content ".concat("share"===n?"active":"")},m("div",null,m("label",null,m("input",{onChange:function(){return t.changeShareType("only-light")},name:"share-type",type:"radio",checked:!y}),"\u4ec5\u5206\u4eab\u6807\u8bb0"),m("label",null,m("input",{onChange:function(){return t.changeShareType("all")},name:"share-type",type:"radio",checked:y}),"\u5206\u4eab\u6807\u8bb0&\u7f51\u9875")),m("div",{className:y?"hide":"show"},m("textarea",{className:"markdown-content",value:h,readOnly:!0})),m("div",{className:y?"show":"hide"},m("input",{className:"share-title",onChange:this.changeTitle.bind(this),type:"text",placeholder:"\u5206\u4eab\u6807\u9898\uff0c\u4e00\u53e5\u8bdd\u603b\u7ed3\u5427\uff0c\u8ba9\u4f60\u7684\u5206\u4eab\u66f4\u6709\u5438\u5f15\u529b",value:f}),m("div",{className:"tip"},"\u82e5\u5206\u4eab\u9875\u4e2d\u542b\u6709\u654f\u611f\u4fe1\u606f\u65f6\uff0c\u8bf7\u6ce8\u610f\u4fdd\u5bc6\u3002\u8c28\u614e\u5206\u4eab\u3002")),0===s&&m("div",null,"\u751f\u6210\u94fe\u63a5\u4e2d..."),-1===s&&m("div",null,u),1!==s&&m("div",null,m("div",{id:"buttons",className:""},!y&&d&&m("button",{className:"copy-button",onClick:this.copyMd.bind(this)},i?"\u5df2\u590d\u5236":"\u590d\u5236MD"),f&&d?a?m("button",{onClick:this.doShare.bind(this)},"\u4e00\u952e\u5206\u4eab"):m("button",null,m("a",{href:k},"\u767b\u5f55\u540e\u5206\u4eab")):m("span",null,"\u672a\u68c0\u6d4b\u5230\u5206\u4eab\u5185\u5bb9\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u8bd5"))),1===s&&m("p",{className:"sharelink"},"\u5206\u4eab\u6210\u529f\uff1a",m("a",{href:c},c)),m("div",{className:"why-pagenote"},m("p",null,a?m("span",null,"hi ",a.name):"","\u5206\u4eab\u5185\u5bb9\u5c06",m("strong",null,"\u516c\u5f00\uff0c\u6240\u6709\u4eba\u53ef\u89c1 ",m("a",{target:"_blank",href:"https://pagenote.logike.cn/why"},"why?")),"\u3002"),m("strong",null,"\u4e86\u89e3pagenote\u5feb\u7167\u7684\u4f18\u70b9"),m("ul",null,m("li",null,"\u3010\u5feb\u7167\u3011\u5373\u4fbf\u539f\u6765\u7f51\u9875\u53d1\u751f\u53d8\u5316\u4e86\uff0c\u5feb\u7167\u9875\u4ecd\u7136\u4e0d\u53d7\u5f71\u54cd\uff0c\u4fdd\u8bc1\u4e0e\u5206\u4eab\u65f6\u4e00\u81f4\u3002"),m("li",null,"\u3010\u6743\u9650\u3011\u9700\u8981\u767b\u5f55\u624d\u80fd\u770b\u5230\u7684\u5185\u5bb9\uff0c\u901a\u8fc7\u5206\u4eab\u94fe\u63a5\uff0c\u5728\u4efb\u610f\u8bbe\u5907\u4e0d\u9700\u8981\u767b\u5f55\u4e5f\u53ef\u4ee5\u8bbf\u95ee\u3002"),m("li",null,"\u3010\u91cd\u70b9\u3011\u4f60\u53ef\u4ee5\u52fe\u9009\u91cd\u70b9\uff0c\u7559\u4e0b\u7b14\u8bb0\u540e\u5206\u4eab\uff0c\u901a\u8fc7\u5206\u4eab\u94fe\u63a5\u6253\u5f00\u53ef\u4ee5\u76f4\u63a5\u5b9a\u4f4d\u5230\u91cd\u70b9\u4f4d\u7f6e\u3002"),m("li",null,"\u3010\u9ad8\u6548\u3011\u5206\u4eab\u7f51\u9875\u7684\u4f53\u79ef\u8f83\u539f\u7f51\u9875\u4f1a\u5927\u5e45\u51cf\u5c11\uff0c\u9875\u9762\u52a0\u8f7d\u7684\u901f\u5ea6\u4f1a\u66f4\u5feb\u3002")))),m("section",{className:"tab-content ".concat("ground"===n?"active":"")},a?m("span",null,"hi ",a.name):m("button",null,m("a",{href:k},"\u8bf7\u767b\u5f55")),m("div",null,"\u66f4\u591a\u5185\u5bb9\u8bf7\u8bbf\u95ee ",m("a",{target:"_blank",href:"https://pagenote.logike.cn"},"pagenote\u4e3b\u9875")))))))}}]),n}(f.Component)},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}));var a=n("JX7q");function o(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(a.a)(t):e}},"s+YS":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/share",function(){return n("Pnnx")}])},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return a}))}},[["s+YS",0,1,3,5,2]]]);