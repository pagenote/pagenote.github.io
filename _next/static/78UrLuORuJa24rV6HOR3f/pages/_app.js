(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1TCz":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return N}));var a=n("o0o1"),r=n.n(a),o=n("HaE+"),i=n("1OyB"),c=n("vuIU"),s=n("Ji7U"),u=n("md7G"),l=n("foSv"),p=n("8Bbg"),f=n.n(p),d=n("8Kt/"),h=n.n(d),m=n("q1tI"),x=n.n(m),v=n("MX0m"),g=n.n(v),b=x.a.createElement;function w(){return b("footer",{className:"jsx-1700987020"},b(g.a,{id:"1700987020"},["footer.jsx-1700987020{max-width:800px;margin:0 auto;padding:12px 0;font-size:12px;}",".footer-content.jsx-1700987020{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-bottom:14px;padding:0 24px;margin-bottom:14px;}",".col-items.jsx-1700987020{margin-right:24px;}",".item-details.jsx-1700987020{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".item.jsx-1700987020{width:200px;margin-bottom:14px;}","@media screen and (max-width:700px){.item.jsx-1700987020{width:100px;}}",".item.jsx-1700987020:last-child{margin-bottom:0;}","a.jsx-1700987020{margin-right:12px;-webkit-transition:color .2s;transition:color .2s;color:rgba(103,103,103,1);}","a.jsx-1700987020:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#ff4e50;}"]),b("div",{className:"jsx-1700987020 footer-content"},b("div",{className:"jsx-1700987020 col-items"},b("h4",{className:"jsx-1700987020"},"\u5173\u4e8e"),b("div",{className:"jsx-1700987020 item-details"},b("div",{className:"jsx-1700987020 col-5"},b("div",{className:"jsx-1700987020 item"},b("a",{href:"/hello",className:"jsx-1700987020"},"pagenote \u4ecb\u7ecd")),b("div",{className:"jsx-1700987020 item"},b("a",{href:"/why",className:"jsx-1700987020"},"\u4e00\u4e9b\u5e38\u89c1\u95ee\u9898"))),b("div",{className:"jsx-1700987020 col-5"},b("div",{className:"jsx-1700987020 item"},b("a",{href:"/privacy",className:"jsx-1700987020"},"\u9690\u79c1\u653f\u7b56")),b("div",{className:"jsx-1700987020 item"},b("a",{href:"/release",className:"jsx-1700987020"},"\u66f4\u65b0\u65e5\u5fd7"))),b("div",{className:"jsx-1700987020 col-5"},b("div",{className:"jsx-1700987020 item"},b("a",{href:"/public",className:"jsx-1700987020"},"\u7b14\u8bb0\u5e7f\u573a")),b("div",{className:"jsx-1700987020 item"},b("a",{className:"jsx-1700987020"},"QQ\u7fa4: 769094377")))))))}var j=n("b0oO"),y=x.a.createElement;function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(u.a)(this,n)}}var N=function(t){Object(s.a)(n,t);var e=k(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidCatch",value:function(t){console.log(t)}},{key:"componentDidMount",value:function(){function t(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],t("js",new Date),t("config","UA-162459604-2"),this.firefoxPv()}},{key:"firefoxPv",value:function(){window.navigator.userAgent.indexOf("Firefox")>-1&&this.sendEvent("","","","","pageview")}},{key:"sendEvent",value:function(t,e,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"event",o=new XMLHttpRequest,i="UA-162459604-2",c=localStorage.getItem("cid")||Math.random(),s="v=1&tid="+i+"&cid= "+c+"&aip=1&ds=add-on&t="+r+"&ec="+t+"&ea="+e+"&el="+n+"&ev="+a+"&dp=firefox/"+window.location.pathname;s=encodeURI(s);var u="https://cors-anywhere.herokuapp.com/";o.open("POST",u+"https://www.google-analytics.com/collect",!0),o.send(s),localStorage.setItem("cid",c)}},{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps,a=!1!==n.showHeader,r=!1!==n.showFooter;return y(x.a.Fragment,null,a&&y(j.a,null),y(h.a,null,y("title",null,"pagenote \u5c0f\u800c\u7f8e\u7684\u7f51\u9875\u6807\u8bb0\u5de5\u5177"),y("meta",{name:"viewport",content:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"}),y("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-162459604-2"})),y(e,n),y("div",{id:"bridge",style:{display:"none"}}),r&&y(w,null))}}],[{key:"getInitialProps",value:function(){var t=Object(o.a)(r.a.mark((function t(e){var n,a,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,a=e.ctx,o={},!n.getInitialProps){t.next=6;break}return t.next=5,n.getInitialProps(a);case 5:o=t.sent;case 6:return t.abrupt("return",{pageProps:o});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),n}(f.a)},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},B5Ud:function(t,e,n){"use strict";var a=n("vJKn"),r=n("/GRZ"),o=n("i2R6"),i=n("48fX"),c=n("tCBg"),s=n("T0f4"),u=n("qVT1");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=s(t);if(e){var r=s(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return c(this,n)}}var p=n("AroE");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=v,e.default=void 0;var f=p(n("q1tI")),d=n("g/15");function h(t){return m.apply(this,arguments)}function m(){return(m=u(a.mark((function t(e){var n,r,o;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,r=e.ctx,t.next=3,(0,d.loadGetInitialProps)(n,r);case 3:return o=t.sent,t.abrupt("return",{pageProps:o});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=d.AppInitialProps;var x=function(t){i(n,t);var e=l(n);function n(){return r(this,n),e.apply(this,arguments)}return o(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,a=t.pageProps,r=t.__N_SSG,o=t.__N_SSP;return(f.default.createElement(n,Object.assign({},a,r||o?{}:{url:v(e)})))}}]),n}(f.default.Component);function v(t){var e=t.pathname,n=t.asPath,a=t.query;return{get query(){return a},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var a=n?e:"",r=n||e;return t.push(a,r)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var a=n?e:"",r=n||e;return t.replace(a,r)}}}e.default=x,x.origGetInitialProps=h,x.getInitialProps=h},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},"HaE+":function(t,e,n){"use strict";function a(t,e,n,a,r,o,i){try{var c=t[o](i),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(a,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){a(i,r,o,c,s,"next",t)}function s(t){a(i,r,o,c,s,"throw",t)}c(void 0)}))}}n.d(e,"a",(function(){return r}))},b0oO:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var a=n("1OyB"),r=n("vuIU"),o=n("JX7q"),i=n("Ji7U"),c=n("md7G"),s=n("foSv"),u=n("rePB"),l=n("MX0m"),p=n.n(l),f=n("q1tI"),d=n.n(f),h=n("vDqi"),m=n.n(h),x=d.a.createElement;function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(s.a)(t);if(e){var r=Object(s.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(c.a)(this,n)}}var g="https://cors-anywhere.herokuapp.com/",b=("https://github.com/login/oauth/authorize?scope=user%20public_repo&client_id=c4aae381097464aa1024&redirect_uri=".concat("https://pagenote.logike.cn"),function(t){Object(i.a)(n,t);var e=v(n);function n(t){var r;return Object(a.a)(this,n),r=e.call(this,t),Object(u.a)(Object(o.a)(r),"codeToToken",(function(){var t=window.location.search.match(/code=(.*)$/);t&&m()({method:"post",headers:{Accept:"application/json"},url:"".concat(g,"https://github.com/login/oauth/access_token"),data:{client_id:"c4aae381097464aa1024",client_secret:"ed40211bca3ccabd900586079b89fd0ec1ea48be",code:t[1]}}).then((function(t){var e=t.data.access_token;localStorage.setItem("token",e);var n=new URLSearchParams(location.search).get("comeback");window.location=n||"/"}))})),Object(u.a)(Object(o.a)(r),"checkLogin",(function(){var t=localStorage.getItem("token");t&&m()({method:"get",headers:{Accept:"application/json",Authorization:"token ".concat(t)},url:"".concat(g,"https://api.github.com/user")}).then((function(t){t.data&&r.setState({userInfo:t.data})})).catch((function(t){console.error(t)}))})),r.state={userInfo:{}},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.codeToToken(),this.checkLogin()}},{key:"render",value:function(){var t=this.state.userInfo;return x("nav",{className:"jsx-862963267"},x(p.a,{id:"862963267"},["nav.jsx-862963267{font-size:14px;border-bottom:1px solid rgba(30,35,42,.06);box-shadow:0 1px 3px 0 rgba(0,34,77,.05);}","nav.jsx-862963267 a.jsx-862963267{color:#0366d6;-webkit-text-decoration:none;text-decoration:none;}",".header.jsx-862963267{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 24px;padding:10px 24px;margin:0 auto;max-width:1000px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;box-sizing:border-box;}",".user-avatar.jsx-862963267{width:20px;height:20px;border-radius:10px;border-radius:4px;overflow:hidden;}","#login.jsx-862963267{padding:0px 6px;background:#509ff5;border-radius:6px;color:#fff;}"]),x("section",{className:"jsx-862963267 header"},x("div",{className:"jsx-862963267"},x("a",{href:"/",className:"jsx-862963267"},"PAGENOTE \u4e00\u9875\u4e00\u8bb0")),t.name?x("a",{href:"https://pagenote.logike.cn/me",className:"jsx-862963267 user-avatar"},x("img",{width:20,height:20,src:"".concat(t.avatar_url,"&s=30"),alt:"".concat(t.name),className:"jsx-862963267"})):x("a",{id:"login",href:"/me",className:"jsx-862963267"},"\u6211\u7684")))}}]),n}(f.Component))},o0o1:function(t,e,n){t.exports=n("ls82")}},[[0,0,1,3,4,5,6]]]);