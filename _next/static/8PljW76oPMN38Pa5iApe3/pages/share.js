(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Pnnx:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a("rePB"),o=a("1OyB"),s=a("vuIU"),r=a("Ji7U"),c=a("md7G"),i=a("foSv"),l=a("q1tI"),u=a.n(l),h=a("vDqi"),p=a.n(h),d=(a("K4WV"),u.a.createElement);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(i.a)(e);if(t){var o=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return Object(c.a)(this,a)}}var b=0,m=function(e){Object(r.a)(a,e);var t=v(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={copied:!1,show:!0,activeTab:"share",markdown:"",showShare:!0,user:null,token:"",creating:!1,shareData:{},shareType:"all",errorMsg:"",snapshot:"",shareLink:"",shareStatus:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getUserFormServer(!1)}},{key:"fetchData",value:function(){if(window){var e=this;window.addEventListener("message",(function(t){"sync_shareInfo"===t.data.type&&(e.setState({shareData:t.data.shareData||{}}),console.log(t))}),!1),!e.state.shareData.title&&window.opener&&window.opener.postMessage({type:"get_share_data"},"*")}}},{key:"getUserFormServer",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=localStorage.getItem("token");if(this.setState({token:a}),!(++b>8)){var n="https://cors-anywhere.herokuapp.com/";p()({method:"get",headers:{Accept:"application/json",Authorization:"token ".concat(a)},url:"".concat(t?n:"","https://api.github.com/user")}).then((function(t){if(t.data){var a=t.data;e.setState({user:a})}})).catch((function(a){setTimeout((function(){e.getUserFormServer(!t)}),4e3)}))}}},{key:"changeTab",value:function(e){this.setState({activeTab:e})}},{key:"changeShareType",value:function(e){this.setState({shareType:e})}},{key:"copyMd",value:function(){var e=this,t=this.state.markdown+"\n\n[\u4f7f\u7528pagenote\u751f\u6210](https://pagenote.logike.cn)";try{navigator.clipboard.writeText(t).then((function(){e.setState({copied:!0})}))}catch(n){var a=document.createElement("textarea");a.textContent=t,document.body.appendChild(a),a.select(),document.execCommand("Copy",!1,null),document.body.removeChild(a)}this.setState({copied:!0})}},{key:"changeTitle",value:function(e){this.setState({shareData:g(g({},this.state.shareData),{},{title:e.target.value})})}},{key:"toggleShow",value:function(){this.setState({show:!this.state.show})}},{key:"close",value:function(){window&&window.close()}},{key:"doShare",value:function(){var e=this,t=this.state,a=t.token,n=t.shareData;this.setState({shareStatus:0});var o=JSON.parse(JSON.stringify(n));delete o.snapshot,delete o.images,"all"===this.state.shareType?delete o.markdown:delete o.html,console.log(o),p()({method:"post",headers:{Accept:"application/json",Authorization:"token ".concat(a)},url:"https://api.github.com/repos/rowthan/pagenote/issues",data:{title:o.title,body:JSON.stringify(o),labels:["pagenote"]}}).then((function(t){e.setState({errorMsg:(t.errors||[{}])[0].message,shareStatus:1,data:t.data,shareLink:"https://pagenote.logike.cn/snapshot?pagenote=".concat(t.data.number)})})).catch((function(t){e.setState({shareStatus:-1,data:t.data,errorMsg:(t.errors||[{}])[0].message||"\u521b\u5efa\u5206\u4eab\u94fe\u63a5\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u540e\u91cd\u8bd5\u6216\u5c1d\u8bd5\u300c\u4ec5\u5206\u4eab\u6807\u8bb0\u300d\u3002",shareLink:""})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.activeTab,n=t.shareType,o=t.user,s=t.show,r=t.copied,c=t.shareLink,i=t.shareStatus,l=t.errorMsg,u=this.state.shareData,h=u.markdown,p=u.title,f=u.snapshot,g=u.html,v="all"===n,b="https://pagenote.logike.cn/login?comeback=".concat(void 0!==window?window.location.href:"/");return d("div",{className:"share"},d("div",{className:"mask"},d("div",{className:"snapshot",style:{backgroundImage:"url(".concat(f,")"),display:v?"block":"none"}}),d("div",{className:"container",style:{display:s?"block":"none"}},d("a",{className:"close",onClick:this.close},"\u5173\u95ed"),d("div",{className:"tabs"},d("span",{onClick:function(){return e.changeTab("share")},className:"tab ".concat("share"===a?"active":"")},"\u5206\u4eab&\u5bfc\u51fa"),d("span",{onClick:function(){return e.changeTab("ground")},className:"tab ".concat("ground"===a?"active":"")},"pagenote \u5e7f\u573a"),d("div",{className:"tab-border"})),d("div",{className:"contents"},d("section",{className:"tab-content ".concat("share"===a?"active":"")},d("p",null,o?d("span",null,"hi ",o.name):"","\u5206\u4eab\u5185\u5bb9\u5c06",d("strong",null,"\u516c\u5f00\uff0c\u6240\u6709\u4eba\u53ef\u89c1 ",d("a",{target:"_blank",href:"https://pagenote.logike.cn/why"},"why?")),"\u3002"),d("div",null,d("label",null,d("input",{onChange:function(){return e.changeShareType("only-light")},name:"share-type",type:"radio",checked:!v}),"\u4ec5\u5206\u4eab\u6807\u8bb0"),d("label",null,d("input",{onChange:function(){return e.changeShareType("all")},name:"share-type",type:"radio",checked:v}),"\u5206\u4eab\u6807\u8bb0&\u7f51\u9875")),d("div",{className:v?"hide":"show"},d("textarea",{className:"markdown-content",value:h,readOnly:!0})),d("div",{className:v?"show":"hide"},d("input",{className:"share-title",onChange:this.changeTitle.bind(this),type:"text",placeholder:"\u5206\u4eab\u6807\u9898\uff0c\u4e00\u53e5\u8bdd\u603b\u7ed3\u5427\uff0c\u8ba9\u4f60\u7684\u5206\u4eab\u66f4\u6709\u5438\u5f15\u529b",value:p}),d("div",{className:"tip"},"\u6807\u8bb0\u3001\u4ee5\u53ca\u7f51\u9875\u5185\u5bb9\u88ab\u5206\u4eab\u540e\u516c\u5f00\u53ef\u89c1\u3002",d("br",null),"\u5f53\u524d\u9875\u6709\u654f\u611f\u4fe1\u606f\uff0c\u5982\u8d26\u6237\u4fe1\u606f\u65f6\uff0c\u8bf7\u6ce8\u610f\u4fdd\u5bc6\u3002\u8c28\u614e\u5206\u4eab\u3002")),0===i&&d("div",null,"\u751f\u6210\u94fe\u63a5\u4e2d..."),-1===i&&d("div",null,l),1!==i&&d("div",null,d("div",{id:"buttons",className:""},!v&&d("button",{className:"copy-button",onClick:this.copyMd.bind(this)},r?"\u5df2\u590d\u5236":"\u590d\u5236MD"),p&&g?o?d("button",{onClick:this.doShare.bind(this)},"\u4e00\u952e\u5206\u4eab"):d("button",null,d("a",{href:b},"\u767b\u5f55\u540e\u5206\u4eab")):d("span",null,"\u672a\u68c0\u6d4b\u5230\u5206\u4eab\u5185\u5bb9\uff0c\u8bf7\u5237\u65b0"),d("button",null,"\u53d6\u6d88"))),1===i&&d("p",{className:"sharelink"},"\u5206\u4eab\u6210\u529f\uff1a",d("a",{href:c},c))),d("section",{className:"tab-content ".concat("ground"===a?"active":"")},o?d("span",null,"hi ",o.name):d("button",null,d("a",{href:b},"\u8bf7\u767b\u5f55")),d("div",null,"\u66f4\u591a\u5185\u5bb9\u8bf7\u8bbf\u95ee ",d("a",{target:"_blank",href:"https://pagenote.logike.cn"},"pagenote\u4e3b\u9875")))))))}}]),a}(l.Component)},rePB:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},"s+YS":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/share",function(){return a("Pnnx")}])}},[["s+YS",0,1,3,2]]]);