(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1OyB":function(t,e,n){"use strict";function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return l}))},"8oxB":function(t,e){var n,l,i=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function o(t){if(n===setTimeout)return setTimeout(t,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(t){n=a}try{l="function"===typeof clearTimeout?clearTimeout:c}catch(t){l=c}}();var r,s=[],d=!1,u=-1;function p(){d&&r&&(d=!1,r.length?s=r.concat(s):u=-1,s.length&&h())}function h(){if(!d){var t=o(p);d=!0;for(var e=s.length;e;){for(r=s,s=[];++u<e;)r&&r[u].run();u=-1,e=s.length}r=null,d=!1,function(t){if(l===clearTimeout)return clearTimeout(t);if((l===c||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function v(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new f(t,e)),1!==s.length||d||o(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"HaE+":function(t,e,n){"use strict";function l(t,e,n,l,i,a,c){try{var o=t[a](c),r=o.value}catch(s){return void n(s)}o.done?e(r):Promise.resolve(r).then(l,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var c=t.apply(e,n);function o(t){l(c,i,a,o,r,"next",t)}function r(t){l(c,i,a,o,r,"throw",t)}o(void 0)}))}}n.d(e,"a",(function(){return i}))},JX7q:function(t,e,n){"use strict";function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return l}))},Ji7U:function(t,e,n){"use strict";function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}n.d(e,"a",(function(){return i}))},RNiq:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return F}));var l=n("o0o1"),i=n.n(l),a=n("HaE+"),c=n("1OyB"),o=n("vuIU"),r=n("Ji7U"),s=n("md7G"),d=n("foSv"),u=n("q1tI"),p=n.n(u),h=n("8Kt/"),f=n.n(h),v=n("MX0m"),m=n.n(v),w=p.a.createElement;function M(){return w("span",{className:"jsx-1218824996"},w(m.a,{id:"1218824996"},[".install-btns.jsx-1218824996{margin:12px 0;}","a.browser-install-btn.jsx-1218824996{display:inline-block;margin-right:12px;padding:6px 20px;font-size:1em;line-height:20px;border-radius:24px;box-shadow:0 4px 10px 0 rgba(39,43,49,0.2);background-color:#00bdb8;color:#fff;font-weight:bolder;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;}","a.browser-install-btn.offline.jsx-1218824996{background:#7e8281;}","a.browser-install-btn.ee.jsx-1218824996{background-color:#1976d2;}","a.browser-install-btn.firefox.jsx-1218824996{background-color:#FF5722;}"]),w("span",{className:"jsx-1218824996 install-btns"},w("a",{href:"/download/0.10.0.zip",className:"jsx-1218824996 browser-install-btn offline"},"Beta:\u79bb\u7ebf\u5305\u5b89\u88c5"),w("a",{href:"https://addons.mozilla.org/addon/page-note?src=external-release",className:"jsx-1218824996 browser-install-btn firefox"},"FireFox"),w("a",{href:"https://chrome.google.com/webstore/detail/pagenotehighlight-and-tak/hpekbddiphlmlfjebppjhemobaopekmp?utm_source=blog",className:"jsx-1218824996 browser-install-btn chrome"},"Chrome"),w("a",{href:"https://ext.chrome.360.cn/webstore/detail/eaaeiopfadilknclflglmdimpgdgcdmm",className:"jsx-1218824996 browser-install-btn ee"},"360")))}n("Gpft");var g=p.a.createElement;function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,l=Object(d.a)(t);if(e){var i=Object(d.a)(this).constructor;n=Reflect.construct(l,arguments,i)}else n=l.apply(this,arguments);return Object(s.a)(this,n)}}var F=function(t){Object(r.a)(n,t);var e=y(n);function n(t){var l;return Object(c.a)(this,n),(l=e.call(this,t)).state={},l}return Object(o.a)(n,null,[{key:"getInitialProps",value:function(){var t=Object(a.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{showFooter:!0});case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=document.createElement("script");t.src="/pagenote.js",document.body.appendChild(t),t.onload=function(){var t=new PageNote("pagenote-home",{functionColors:[{icon:"/icons/search.png",bgColor:"#fff",name:"search",shortcut:"s",onclick:function(e){var n=t.target?t.target.text:"";n&&(window.getSelection().removeAllRanges(),window.open("https://www.baidu.com/s?wd=".concat(n)))}}]});function e(){var e=document.getElementById("range"),n=window.getSelection(),l=document.createRange();l.selectNode(e),n.addRange(l);var i=e.getBoundingClientRect();t.target.x=i.x+200,t.target.y=i.y+20,t.status=t.CONSTANT.WAITING}t.init("JTdCJTIyc3RlcHMlMjI6JTVCJTVCNzMwLDg3LCUyMmRpdi5wb2ludC5ub3RlJTIyLCUyMiVFNiVBMCU4NyVFNiVCMyVBOCVFNyVBQyU5NCVFOCVBRSVCMCUyMiwlMjIlRTUlOEYlQUYlRTQlQkIlQTUlRTUlOUMlQTglRTUlQkQlOTMlRTUlODklOEQlRTklQTElQjUlRTglQUYlOTUlRTglQUYlOTUlMjIsJTIycmdiYSgxMTQsMjA4LDI1NSwwLjg4KSUyMiwxNTk4NDM3MTE2OTExLGZhbHNlLDE2MCwzNCwzMDAlNUQlNUQsJTIyc2V0dGluZyUyMjolN0IlMjJiYXJJbmZvJTIyOiU3QiUyMnJpZ2h0JTIyOjUzLCUyMnRvcCUyMjo2MiwlMjJzdGF0dXMlMjI6JTIyZm9sZCUyMiU3RCU3RCwlMjJ1cmwlMjI6JTIyaHR0cDovLzAuMC4wLjA6MzAwMC8lMjIsJTIybGFzdE1vZGlmaWVkJTIyOjE1OTg0MzcyMTE5NjEsJTIyaWNvbiUyMjolMjJodHRwOi8vMC4wLjAuMDozMDAwL2Zhdmljb24uaWNvJTIyLCUyMnRpdGxlJTIyOiUyMiVFNSVCMCU4RiVFOCU4MCU4QyVFNyVCRSU4RSVFNyU5QSU4NCVFNyVCRCU5MSVFOSVBMSVCNSVFNiVBMCU4NyVFOCVBRSVCMCVFNSVCNyVBNSVFNSU4NSVCNyUyMiwlMjJpbWFnZXMlMjI6JTVCJTVELCUyMnNuYXBzaG90cyUyMjolNUIlNUQsJTIydmVyc2lvbiUyMjoxLCUyMmNhdGVnb3J5JTIyOiUyMlBBR0VOT1RFJTIyLCUyMm5vdGUlMjI6JTIyJTIyJTdE"),setTimeout((function(){var n=this;e(),this.timer=setInterval((function(){t.recordedSteps.length>1?clearInterval(n.timer):e()}),5e3)}),1e3)}}},{key:"render",value:function(){return g("div",{className:"index-page"},g(f.a,null,g("title",null,"\u5c0f\u800c\u7f8e\u7684\u7f51\u9875\u6807\u8bb0\u5de5\u5177")),g("section",{className:"points fl"},g("div",{className:"point main"},g("div",null,g("h2",{id:"range"},"\u6536\u5f55\u91cd\u70b9"),g("article",null,"\u53ea\u9700\u8981\u4e00\u4e2a\u7b80\u5355\u7684\u70b9\u51fb\uff0c\u5373\u53ef\u6807\u8bb0\u6536\u96c6\u4f60\u7684\u91cd\u70b9\u3001\u7f51\u9875\u3002"))),g("div",{className:"point note"},g("div",null,g("h2",null,"\u6807\u6ce8\u7b14\u8bb0"),g("article",null,"\u5feb\u6377\u5730\u4e3a\u7f51\u9875\u6dfb\u52a0\u6807\u6ce8\u3002",g("br",null),"\u4e00\u4e2a\u7f51\u9875\u4e00\u5904\u7b14\u8bb0\uff0c\u628a\u7b14\u8bb0\u7559\u5728\u7f51\u9875\u91cc\u3002"))),g("div",{className:"point manage"},g("div",null,g("h2",null,"\u8f7b\u677e\u7ba1\u7406"),g("article",null,"\u9ad8\u6548\u5730\u7ba1\u7406\u4f60\u7684\u6807\u8bb0\uff0c\u667a\u80fd\u5173\u8054\u4e66\u7b7e\u3001\u5206\u7c7b\u3002\u62e5\u6709\u4e2a\u4eba\u77e5\u8bc6\u661f\u7403\u3002")))),g("section",{className:"install"},g(M,null)),g("section",{className:"glance-title"},"PAGENOTE \u529f\u80fd\u4e00\u89c8\u8868"),g("section",{className:"glances"},g("div",{className:"glance-item"},g("svg",{t:"1598435903334",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"28831",width:"48",height:"48"},g("path",{d:"M512 526.5m-327.6 0a327.6 327.6 0 1 0 655.2 0 327.6 327.6 0 1 0-655.2 0Z",fill:"#F98F8F","p-id":"28832"}),g("path",{d:"M512 526.5m-327.6 0a327.6 327.6 0 1 0 655.2 0 327.6 327.6 0 1 0-655.2 0Z",fill:"#F7776D","p-id":"28833"}),g("path",{d:"M256.408 742.597L726.135 272.87l29.698 29.698-469.726 469.727z",fill:"#FFFFFF","p-id":"28834"}),g("path",{d:"M644.3 486.3H379.7c-9.8 0-17.8-8-17.8-17.8s8-17.8 17.8-17.8h264.7c9.8 0 17.8 8 17.8 17.8s-8.1 17.8-17.9 17.8z",fill:"#FFFFFF","p-id":"28835"}),g("path",{d:"M486.2 481.1L374.5 369.4c-6.9-6.9-6.9-18.3 0-25.2 6.9-6.9 18.3-6.9 25.2 0l111.7 111.7c6.9 6.9 6.9 18.3 0 25.2-6.9 6.9-18.3 6.9-25.2 0z",fill:"#FFFFFF","p-id":"28836"}),g("path",{d:"M542.4 481.1l111.7-111.7c6.9-6.9 6.9-18.3 0-25.2-6.9-6.9-18.3-6.9-25.2 0L517.2 455.9c-6.9 6.9-6.9 18.3 0 25.2 6.9 6.9 18.3 6.9 25.2 0zM644.3 604.9H379.7c-9.8 0-17.8-8-17.8-17.8s8-17.8 17.8-17.8h264.7c9.8 0 17.8 8 17.8 17.8s-8.1 17.8-17.9 17.8z",fill:"#FFFFFF","p-id":"28837"}),g("path",{d:"M494.2 705V487.7c0-9.8 8-17.8 17.8-17.8s17.8 8 17.8 17.8V705c0 9.8-8 17.8-17.8 17.8s-17.8-8-17.8-17.8z",fill:"#FFFFFF","p-id":"28838"})),g("h3",null,"\u514d\u8d39\u65e0\u5e7f\u544a"),g("div",null,"\u514d\u8d39\u65e0\u5e7f\u544a\uff0c\u7b80\u6d01\u65e0\u6253\u6270\u3002")),g("div",{className:"glance-item"},g("svg",{t:"1598434148416",className:"icon",viewBox:"0 0 1339 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"10075",width:"48",height:"48"},g("path",{d:"M1269.602462 545.319385L1018.092308 346.584615a142.178462 142.178462 0 0 0-196.292923 19.849847l75.382153 60.100923a47.261538 47.261538 0 0 1 61.833847-3.702154l251.510153 198.813538c13.390769 10.948923 17.171692 24.260923 17.959385 32.846769a49.624615 49.624615 0 0 1-9.058461 35.997539l-111.064616 146.353231a45.607385 45.607385 0 0 1-32.059077 18.35323 46.788923 46.788923 0 0 1-35.131077-9.216l-251.588923-198.813538a47.497846 47.497846 0 0 1-17.959384-32.846769c-0.472615-5.750154-1.260308-14.414769 2.756923-23.236923l-76.484923-60.49477c-38.439385 63.015385-25.048615 146.825846 33.792 193.299693l251.588923 198.813538a141.469538 141.469538 0 0 0 200.546461-25.757538l111.064616-146.432c47.970462-63.330462 36.627692-155.963077-25.206154-205.193846M514.363077 447.960615a46.867692 46.867692 0 0 1-43.795692 36.548923l-317.597539 14.257231a45.922462 45.922462 0 0 1-33.713231-12.839384 50.727385 50.727385 0 0 1-15.517538-33.949539l-7.876923-185.107692a48.836923 48.836923 0 0 1 45.686154-50.412308l317.755077-14.178461a45.922462 45.922462 0 0 1 33.71323 12.839384c4.568615 3.938462 11.342769 12.918154 14.729847 25.363693l95.783384-3.938462c-7.325538-76.484923-72.310154-135.246769-148.086154-132.332308L137.058462 118.941538C58.446769 122.092308-2.993231 190.464 0 270.966154l7.876923 184.950154c3.150769 80.423385 69.947077 143.36 148.48 140.20923l318.779077-13.863384c73.728-3.072 132.489846-64.196923 136.664615-138.870154l-97.437538 4.647385z",fill:"#d81e06","p-id":"10076"}),g("path",{d:"M587.933538 323.347692c17.644308-8.900923 37.336615-10.712615 55.926154-15.044923a175.104 175.104 0 0 0-19.534769-16.226461l-344.379077 15.36c-25.206154 0.236308-43.953231 22.606769-43.716923 48.364307a46.316308 46.316308 0 0 0 47.340308 44.740923l342.488615-15.438769c14.808615-8.664615 28.829538-16.856615 42.535385-25.993846-26.387692-9.137231-53.720615-13.863385-79.950769-25.127385-3.938462-2.205538-4.726154-8.822154-0.708924-10.633846M775.876923 498.609231c-13.154462-1.024-25.836308-3.308308-39.384615-5.277539l291.76123 212.755693c20.007385 14.966154 48.285538 10.318769 62.54277-11.027693a45.764923 45.764923 0 0 0-10.791385-63.960615L787.298462 415.822769c1.575385 8.192 2.835692 15.675077 3.544615 24.339693-0.157538 4.017231-5.12 6.301538-8.270769 5.671384-15.281231-6.144-29.144615-15.911385-44.898462-22.843077 13.705846 22.843077 32.295385 43.401846 45.922462 66.244923 1.732923 4.253538-2.914462 9.294769-7.719385 9.452308M936.093538 218.584615l-68.765538-40.093538-44.504615 80.738461 7.325538 37.651693zM740.588308 185.344L704.354462 0 617.550769 17.880615l82.392616 188.573539z",fill:"#d81e06","p-id":"10077"})),g("h3",null,"\u79bb\u7ebf\u3001\u5b89\u5168"),g("div",null,"\u6ca1\u6709\u70e6\u4eba\u7684\u5f3a\u5236\u767b\u5f55\uff0c\u5b89\u88c5\u5373\u53ef\u4f7f\u7528\u3002\u6570\u636e\u5b58\u50a8\u5728\u672c\u5730\uff0c\u4fdd\u8bc1\u6570\u636e\u7edd\u5bf9\u5b89\u5168\u3002")),g("div",{className:"glance-item"},g("svg",{t:"1598435670464",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"25799",width:"48",height:"48"},g("path",{d:"M407.990857 654.226286l-170.075428-96.786286a34.139429 34.139429 0 0 0-33.792 59.318857l170.075428 96.804572a34.139429 34.139429 0 0 0 33.792-59.337143zM613.723429 654.226286l170.075428-96.786286a34.139429 34.139429 0 0 1 33.792 59.318857l-170.075428 96.804572a34.139429 34.139429 0 0 1-33.792-59.337143z",fill:"#4C84FF","p-id":"25800"}),g("path",{d:"M804.48 370.998857a34.139429 34.139429 0 0 0-33.718857-59.355428L504.32 463.286857 237.897143 311.68a34.139429 34.139429 0 0 0-33.773714 59.318857l270.226285 153.782857v328.557715a34.139429 34.139429 0 1 0 68.260572 0V523.392c0-1.042286-0.512-1.974857-0.603429-3.035429l262.473143-149.357714z",fill:"#252B3A","p-id":"25801"}),g("path",{d:"M900.571429 213.851429L559.140571 13.988571a102.034286 102.034286 0 0 0-103.076571 0L114.834286 213.851429A103.076571 103.076571 0 0 0 64 302.811429v424.173714a103.04 103.04 0 0 0 51.986286 89.6L457.325714 1010.651429a101.888 101.888 0 0 0 100.790857 0l341.339429-194.048a103.021714 103.021714 0 0 0 52.004571-89.6V302.829714a103.076571 103.076571 0 0 0-50.889142-88.978285z m-17.371429 513.152c0 12.361143-6.619429 23.789714-17.334857 29.860571L524.525714 950.912a33.901714 33.901714 0 0 1-33.590857 0L149.613714 756.864a34.340571 34.340571 0 0 1-17.353143-29.860571V302.829714c0-12.214857 6.454857-23.515429 16.969143-29.659428l341.211429-199.862857c10.605714-6.217143 23.716571-6.217143 34.322286 0l341.467428 199.899428c10.514286 6.107429 16.969143 17.408 16.969143 29.622857v424.173715z",fill:"#252B3A","p-id":"25802"})),g("h3",null,"\u53ef\u6269\u5c55\u6027"),g("div",null,"\u652f\u6301\u81ea\u5b9a\u4e49\u6269\u5c55\uff0c\u52a0\u5165\u4f60\u7684\u81ea\u5b9a\u4e49\u529f\u80fd\uff0c\u5982Google\u641c\u7d22\uff0c\u66f4\u591a\u529f\u80fd\u5f85\u63a2\u7d22")),g("div",{className:"glance-item"},g("svg",{t:"1598436246662",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"29845",width:"48",height:"48"},g("path",{d:"M512 960c-300.8 0-448-147.2-448-448s147.2-448 448-448 448 147.2 448 448-147.2 448-448 448z",fill:"#F29637","p-id":"29846"}),g("path",{d:"M684.8 249.6L960 524.8s19.2 377.6-326.4 422.4L204.8 473.6l480-224z",fill:"#D28336","p-id":"29847"}),g("path",{d:"M819.2 396.8c-12.8-19.2-102.4-121.6-140.8-160-12.8-12.8-19.2-19.2-32-19.2H364.8c-6.4 0-19.2 0-38.4 19.2-32 38.4-108.8 128-134.4 160-19.2 19.2-19.2 51.2 0 83.2 44.8 51.2 160 185.6 281.6 326.4 19.2 19.2 25.6 19.2 32 19.2 6.4 0 19.2 0 32-19.2 115.2-134.4 230.4-268.8 281.6-326.4 12.8-19.2 19.2-57.6 0-83.2m-313.6 288c-32-44.8-140.8-179.2-166.4-217.6-6.4-6.4-12.8-6.4-25.6-6.4v-32H384l128 160 128-160h70.4v25.6c-12.8 0-12.8 0-19.2 6.4-51.2 44.8-153.6 179.2-185.6 224",fill:"#FFFFFF","p-id":"29848"})),g("h3",null,"\u4eba\u4eba\u90fd\u662f\u4ea7\u54c1\u7ecf\u7406"),g("div",null,"\u52a0\u5165\u7528\u6237\u53cd\u9988\u7fa4769094377\uff0c\u6700\u5feb\u7684\u901f\u5ea6\u54cd\u5e94\u4f60\u7684\u95ee\u9898\u3002\u4e00\u8d77\u6539\u8fdb\u4ea7\u54c1\u3002")),g("div",{className:"glance-item"},g("div",null,g("svg",{t:"1598433823979",className:"icon",viewBox:"0 0 1050 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2967",width:"48",height:"48"},g("path",{d:"M0 1024v-196.923077h1050.25641v196.923077H0z",fill:"#FFEC60","p-id":"2968"}),g("path",{d:"M310.482051 781.784615h-196.923077l121.435898-114.871794 65.641025-248.123077 278.317949 278.317948-236.307692 53.169231zM787.692308 20.348718l185.764102 185.764103a65.641026 65.641026 0 0 1 3.938462 88.615384L623.589744 651.815385 345.271795 373.497436 701.702564 16.410256A65.641026 65.641026 0 0 1 787.692308 20.348718z",fill:"#555555","p-id":"2969"}))),g("h3",null,"\u6587\u672c\u9ad8\u4eae"),g("div",null,"\u9ad8\u4eae\u7f51\u9875\u91cc\u7684\u5173\u952e\u5185\u5bb9\u3002\u652f\u6301\u591a\u79cd\u989c\u8272\uff0c\u53ef\u951a\u70b9\u5b9a\u4f4d\u3002")),g("div",{className:"glance-item"},g("svg",{t:"1598433972824",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3887",width:"48",height:"48"},g("path",{d:"M528 680.9m-279.4 0a279.4 279.4 0 1 0 558.8 0 279.4 279.4 0 1 0-558.8 0Z",fill:"#FFDC48","p-id":"3888"}),g("path",{d:"M504.9 775.2c-5 1.7-21.8 6.4-76.1 16-3.2 0.6-6.5-0.5-8.8-2.8-2.3-2.3-3.4-5.7-3-9 8.1-57.2 12.4-75.3 14-80.6l376.1-387.2c0.6 0.3 1.1 0.7 1.5 1.2l71.5 73.6c0.5 0.5 0.8 1 1.1 1.6L504.9 775.2z m404.3-419l-71.5-73.6c-16.8-17.3-42.9-18.6-58.1-2.9L399.3 671.3c-5.6 5.8-10.1 10.4-23.1 101.9-2.1 15.2 2.2 30.6 11.9 42.2 9.7 11.6 23.8 18.3 38.7 18.4 3 0 6-0.3 8.9-0.8 86.1-15.2 90.7-19.9 95.9-25.4L912 416c15.2-15.6 14-42.5-2.8-59.8z",fill:"#171900","p-id":"3889"}),g("path",{d:"M786.7 606.3c-7.3 0-14.3 3-19.4 8.3-5.2 5.3-8.1 12.5-8.1 20v170.3c0 54.3-47.8 98.5-106.5 98.5H249.5c-58.7 0-106.5-44.2-106.5-98.5v-589c0-54.3 47.8-98.5 106.5-98.5h403.3c52.8 0 98.1 36.5 105.5 84.9 1.4 10.1 8 18.5 17.2 22.2 9.2 3.7 19.6 2 27.3-4.4 7.7-6.4 11.4-16.5 9.8-26.6-5.6-36.7-25-70.5-54.6-95-29.9-24.5-67-37.8-105.2-37.7H249.5c-89 0-161.5 69.6-161.5 155.1v589C88 890.4 160.4 960 249.5 960h403.3c89 0 161.5-69.6 161.5-155.1V634.6c0-7.5-2.9-14.7-8.1-20-5.2-5.4-12.2-8.3-19.5-8.3z",fill:"#171900","p-id":"3890"}),g("path",{d:"M228.4 420.4c-14 0-25.4 11.8-25.4 26.4 0 14.6 11.4 26.4 25.4 26.4h279.1c14 0 25.4-11.8 25.4-26.4 0-14.6-11.4-26.4-25.4-26.4H228.4z m279.2-132H228.4c-14 0-25.4 11.8-25.4 26.4 0 14.6 11.4 26.4 25.4 26.4h279.1c14 0 25.4-11.8 25.4-26.4 0.1-14.5-11.3-26.4-25.3-26.4z",fill:"#171900","p-id":"3891"})),g("h3",null,"\u7f51\u9875\u7b14\u8bb0"),g("div",null,"\u4e00\u9875\u4e00\u8bb0\uff1a\u628a\u7b14\u8bb0\u7559\u5728\u7f51\u9875\u91cc\uff0c\u4e0d\u7528\u5355\u72ec\u5728\u8bb0\u4e8b\u672c\u5b58\u50a8\u3002\u4e0b\u6b21\u6253\u5f00\u7b14\u8bb0\u81ea\u52a8\u51fa\u73b0\u3002")),g("div",{className:"glance-item"},g("svg",{t:"1598434825989",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"24915",width:"48",height:"48"},g("path",{d:"M198.826667 995.555556c-23.608889 0-45.226667-9.955556-60.871111-28.16-15.928889-18.488889-24.462222-43.52-23.893334-70.542223C113.777778 854.471111 113.777778 598.186667 114.062222 113.777778c0-22.755556 8.817778-44.088889 25.031111-60.302222C155.022222 37.262222 176.64 28.444444 199.395556 28.444444H824.888889c22.755556 0 44.373333 8.817778 60.302222 25.031112 16.213333 15.928889 25.031111 37.546667 25.031111 60.302222v783.644444c0 27.022222-8.817778 52.053333-24.746666 70.257778-22.471111 25.884444-58.595556 33.848889-90.453334 22.471111l-3.128889-1.137778-280.462222-139.093333-282.453333 139.377778c-8.533333 3.128889-18.488889 6.257778-30.151111 6.257778z m0.568889-910.222223a28.16 28.16 0 0 0-28.444445 28.444445C170.666667 598.186667 170.666667 854.186667 170.951111 897.137778c-0.284444 13.653333 3.413333 25.6 10.24 33.28 4.835556 5.404444 10.808889 8.248889 17.635556 8.248889 1.422222 0 3.697778-0.284444 9.386666-2.275556L512 786.204444l304.071111 150.755556c9.671111 2.844444 19.626667 1.422222 26.737778-6.826667 6.826667-7.68 10.808889-19.911111 10.808889-32.995555V113.777778c0-7.68-2.844444-14.791111-8.248889-20.195556-5.688889-5.404444-12.8-8.248889-20.48-8.248889H199.395556z",fill:"#71B3FF","p-id":"24916"}),g("path",{d:"M378.311111 682.666667l21.333333-162.417778L284.444444 402.488889l162.986667-30.151111L525.084444 227.555556l79.36 143.928888 163.271112 28.444445-114.062223 118.897778 23.324445 162.133333-151.04-69.688889L378.311111 682.666667z m21.617778-243.768889l60.017778 61.155555-11.093334 85.333334 77.084445-37.262223 80.497778 37.262223-12.231112-85.902223 59.164445-62.008888-85.048889-14.791112-42.097778-76.231111-41.244444 76.8-85.048889 15.644445z",fill:"#71B3FF","p-id":"24917"})),g("h3",null,"\u667a\u80fd\u4e66\u7b7e"),g("div",null,"\u6839\u636e\u6807\u8bb0\u667a\u80fd\u521b\u5efa\u3001\u5220\u9664\u4e66\u7b7e\u3002\u8fd8\u53ef\u4e3a\u7f51\u9875\u6dfb\u52a0\u6807\u7b7e\uff0c\u65b9\u4fbf\u7ba1\u7406\u3001\u67e5\u627e\u3002")),g("div",{className:"glance-item"},g("svg",{t:"1598434094792",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"9095",width:"48",height:"48"},g("path",{d:"M778.63619 966.73729H56.94217V56.94217h692.903035v223.929882a28.790985 28.790985 0 0 0 56.94217 0V28.790985a28.790985 28.790985 0 0 0-28.151185-28.790985H28.790985A28.790985 28.790985 0 0 0 0 28.790985v966.097491a28.790985 28.790985 0 0 0 28.790985 28.790984h749.845205a28.790985 28.790985 0 1 0 0-56.94217z",fill:"#1296db","p-id":"9096"}),g("path",{d:"M786.313785 413.310582A236.725875 236.725875 0 1 0 1023.67946 650.676257a237.365675 237.365675 0 0 0-237.365675-237.365675z m180.423505 236.725875a180.423505 180.423505 0 1 1-180.423505-179.783705 180.423505 180.423505 0 0 1 180.423505 180.423505zM669.870247 204.735892a28.790985 28.790985 0 0 0-30.070584-28.151185H138.836527a28.790985 28.790985 0 1 0 0 56.94217H639.799663a28.790985 28.790985 0 0 0 30.070584-28.790985zM436.34337 420.348378a28.790985 28.790985 0 0 0-28.790985-28.790984h-268.715858a28.790985 28.790985 0 1 0 0 56.94217h268.715858a28.790985 28.790985 0 0 0 28.790985-28.151186zM305.184439 606.53008h-166.347912a28.790985 28.790985 0 1 0 0 56.94217h166.347912a28.790985 28.790985 0 1 0 0-56.94217zM305.184439 822.142567h-166.347912a28.790985 28.790985 0 1 0 0 56.94217h166.347912a28.790985 28.790985 0 1 0 0-56.94217z",fill:"#1296db","p-id":"9097"}),g("path",{d:"M807.427174 532.953119a28.790985 28.790985 0 0 0-56.94217 0v137.556928a28.790985 28.790985 0 0 0 28.151186 28.790984h143.954924a28.790985 28.790985 0 0 0 0-56.94217H806.147575z",fill:"#1296db","p-id":"9098"})),g("h3",null,"\u7f51\u9875\u5feb\u7167"),g("div",null,"\u5bf9\u7f51\u9875\u8fdb\u884c\u5feb\u7167\u4fdd\u5b58\u3002\u523b\u4e0b\u5f53\u524d\u8bbf\u95ee\u5185\u5bb9\uff0c\u7f51\u9875\u5185\u5bb9\u53d8\u4e86\u4e5f\u80fd\u67e5\u770b\u5386\u53f2\u8bb0\u5f55\u3002")),g("div",{className:"glance-item"},g("svg",{t:"1598434385049",className:"icon",viewBox:"0 0 1510 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"16712",width:"48",height:"48"},g("path",{d:"M1049.015601 37.402728v454.789483c0 19.435964 15.627209 35.189879 35.070715 35.435752l160.694767 2.336539-358.92953 467.828247c-20.666833 26.946376-63.73367 12.304164-63.73367-21.532665V37.402728c0-19.564179 15.871572-35.556425 35.554917-35.556425h155.905541c19.565688 0 35.43726 15.874589 35.43726 35.556425z",fill:"#FF5C5C","p-id":"16713"}),g("path",{d:"M634.562719 30.171373v943.661667c0 16.052583-13.034238 28.961622-29.083804 28.961622H441.001036c-16.049566 0-29.083804-13.034238-29.083805-28.961622V511.174141c0-16.174764-13.275585-29.326659-29.560464-28.960114l-162.308775 2.773981L582.550964 12.547019c16.775115-21.959547 52.011755-10.135059 52.011755 17.624354z",fill:"#76DCFF","p-id":"16714"}),g("path",{d:"M617.952022 59.774073L625.299526 42.235699h-60.004862l-0.003016 3.538748L243.669816 469.117944H446.491676l118.664214-283.29746L564.480119 886.949682h-134.461874v67.264876c0 13.444528 11.0024 24.448436 24.551009 24.448436h138.849861c13.548609 0 24.551009-10.899827 24.551008-24.448436V886.949682h-0.814545l0.796444-827.175609z",fill:"#FFFFFF","p-id":"16715"}),g("path",{d:"M413.674538 480.250067V546.047253h-0.588283v432.615741H440.458005V546.047253h83.536179v-65.797186z",fill:"#2B8FB2","p-id":"16716"}),g("path",{d:"M1047.11047 457.69017V124.586262h-24.303629v333.103908h-88.901621v67.091408h113.44358v-67.091408z",fill:"#D82A2A","p-id":"16717"})),g("h3",null,"\u5bfc\u5165\u5bfc\u51fa"),g("div",null,"\u652f\u6301\u5907\u4efd\u3001\u8fd8\u539f\uff0c\u8fd8\u53ef\u5bfc\u51fa\u591a\u79cd\u683c\u5f0f\uff1aJSON\u3001Markdown")),g("div",{className:"glance-item"},g("svg",{t:"1598434302103",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"14509",width:"48",height:"48"},g("path",{d:"M502.613333 571.392m-308.224 0a308.224 308.224 0 1 0 616.448 0 308.224 308.224 0 1 0-616.448 0Z",fill:"#EDF4FF","p-id":"14510"}),g("path",{d:"M802.133333 497.322667a307.2 307.2 0 0 0-535.04-123.904 304.810667 304.810667 0 0 1 123.733334-63.317334 307.2 307.2 0 0 1 309.76 497.322667A308.053333 308.053333 0 0 0 802.133333 497.322667z",fill:"#FCFEFF","p-id":"14511"}),g("path",{d:"M756.053333 747.178667a308.394667 308.394667 0 1 1-428.373333-429.568 308.394667 308.394667 0 0 0 428.373333 429.568z",fill:"#D8E3F0","p-id":"14512"}),g("path",{d:"M332.629333 666.282667m-56.661333 0a56.661333 56.661333 0 1 0 113.322667 0 56.661333 56.661333 0 1 0-113.322667 0Z",fill:"#D8E3F0","p-id":"14513"}),g("path",{d:"M619.690667 463.701333m-49.152 0a49.152 49.152 0 1 0 98.304 0 49.152 49.152 0 1 0-98.304 0Z",fill:"#D8E3F0","p-id":"14514"}),g("path",{d:"M683.008 553.642667m-25.770667 0a25.770667 25.770667 0 1 0 51.541334 0 25.770667 25.770667 0 1 0-51.541334 0Z",fill:"#D8E3F0","p-id":"14515"}),g("path",{d:"M353.621333 398.336m-35.498666 0a35.498667 35.498667 0 1 0 70.997333 0 35.498667 35.498667 0 1 0-70.997333 0Z",fill:"#D8E3F0","p-id":"14516"}),g("path",{d:"M247.978667 397.994667m-84.650667 0a84.650667 84.650667 0 1 0 169.301333 0 84.650667 84.650667 0 1 0-169.301333 0Z",fill:"#69BAF9","p-id":"14517"}),g("path",{d:"M290.133333 470.869333a85.333333 85.333333 0 0 0-115.712-116.053333 83.114667 83.114667 0 0 1 52.565334-39.082667 85.333333 85.333333 0 0 1 63.146666 155.136z",fill:"#96DDFF","p-id":"14518"}),g("path",{d:"M581.632 808.448m-24.234667 0a24.234667 24.234667 0 1 0 48.469334 0 24.234667 24.234667 0 1 0-48.469334 0Z",fill:"#D8E3F0","p-id":"14519"}),g("path",{d:"M931.157333 237.397333L802.133333 147.285333a17.066667 17.066667 0 0 0-27.306666 14.336v44.032a250.197333 250.197333 0 0 0-238.933334 176.298667 402.773333 402.773333 0 0 1 238.933334-74.922667v34.133334a17.066667 17.066667 0 0 0 27.306666 14.336l129.365334-90.112a17.066667 17.066667 0 0 0-0.341334-27.989334z",fill:"#FFC670","p-id":"14520"}),g("path",{d:"M419.328 745.472c-7.68 0-15.189333 1.365333-22.528 1.877333a17.066667 17.066667 0 0 0 1.024 34.133334h1.194667l23.552-2.048a17.066667 17.066667 0 1 0-3.242667-34.133334zM109.568 415.061333a17.066667 17.066667 0 0 0 17.066667-17.066666 121.685333 121.685333 0 0 1 68.266666-109.397334 17.066667 17.066667 0 1 0-14.506666-30.890666 156.16 156.16 0 0 0-88.576 140.288 17.066667 17.066667 0 0 0 17.749333 17.066666zM133.973333 521.216A24.405333 24.405333 0 1 0 109.568 546.133333a24.234667 24.234667 0 0 0 24.405333-24.917333z",fill:"#3D3D63","p-id":"14521"}),g("path",{d:"M284.672 240.810667m-24.234667 0a24.234667 24.234667 0 1 0 48.469334 0 24.234667 24.234667 0 1 0-48.469334 0Z",fill:"#3D3D63","p-id":"14522"}),g("path",{d:"M940.885333 223.402667l-129.365333-90.112a34.133333 34.133333 0 0 0-54.101333 28.330666v27.648a265.898667 265.898667 0 0 0-107.178667 30.037334 381.098667 381.098667 0 0 0-176.298667-28.842667 17.066667 17.066667 0 0 0 2.56 34.133333 351.914667 351.914667 0 0 1 137.557334 17.066667 244.736 244.736 0 0 0-20.48 17.066667 326.826667 326.826667 0 0 0-90.794667-12.8 322.218667 322.218667 0 0 0-198.144 68.266666 102.4 102.4 0 0 0-114.517333 168.277334 307.2 307.2 0 0 0-7.168 29.525333C119.466667 564.224 90.112 620.544 102.4 670.549333s65.194667 86.869333 145.749333 102.4A324.266667 324.266667 0 0 0 822.272 631.466667c63.317333-51.2 93.354667-108.032 80.725333-158.890667a104.618667 104.618667 0 0 0-34.133333-53.418667 17.066667 17.066667 0 0 0-22.186667 24.576A73.386667 73.386667 0 0 1 870.4 480.597333c7.338667 29.696-8.533333 64.682667-42.325333 99.328v-8.533333a326.656 326.656 0 0 0-109.738667-243.370667c12.970667-1.706667 25.941333-3.072 39.082667-3.584v17.066667a34.133333 34.133333 0 0 0 54.101333 28.16l129.365333-90.112a34.133333 34.133333 0 0 0 0-56.490667z m-692.906666 106.837333a68.266667 68.266667 0 1 1-68.266667 68.266667 68.266667 68.266667 0 0 1 68.266667-68.266667zM135.509333 662.357333c-7.168-29.184 8.192-64.170667 42.154667-99.328v8.362667a324.266667 324.266667 0 0 0 42.154667 159.573333c-46.762667-14.165333-76.8-38.570667-84.309334-68.608z m658.432-90.965333a297.130667 297.130667 0 0 1-3.242666 41.130667 533.845333 533.845333 0 0 1-85.333334 51.2 65.706667 65.706667 0 0 0-116.736 41.472v4.778666c-16.042667 4.949333-32.426667 9.557333-48.810666 13.653334s-31.573333 7.338667-47.274667 10.410666a17.066667 17.066667 0 0 0 3.242667 34.133334 9.386667 9.386667 0 0 0 3.072 0c17.066667-3.072 32.938667-6.656 49.152-10.752s34.133333-9.216 51.2-14.506667a65.877333 65.877333 0 0 0 119.466666-37.034667 67.072 67.072 0 0 0-1.024-10.24 640.341333 640.341333 0 0 0 59.392-34.133333 290.133333 290.133333 0 0 1-477.866666 118.442667c14.165333 1.194667 28.842667 2.048 44.032 2.218666a17.066667 17.066667 0 0 0 17.066666-17.066666 17.066667 17.066667 0 0 0-17.066666-17.066667 512 512 0 0 1-77.653334-6.485333 290.133333 290.133333 0 0 1-55.978666-170.666667 294.058667 294.058667 0 0 1 12.288-74.752 96.085333 96.085333 0 0 0 26.453333 3.584 102.4 102.4 0 0 0 81.749333-162.304 290.133333 290.133333 0 0 1 237.056-50.005333 268.629333 268.629333 0 0 0-47.445333 89.6 17.066667 17.066667 0 0 0 16.213333 22.016 17.066667 17.066667 0 0 0 10.24-3.242667 360.448 360.448 0 0 1 128.682667-59.562667 292.693333 292.693333 0 0 1 119.125333 235.178667z m-107.52 134.656a31.744 31.744 0 1 1-31.573333-31.744 31.573333 31.573333 0 0 1 31.573333 31.744zM921.6 251.904L791.552 341.333333v-34.133333a17.066667 17.066667 0 0 0-17.066667-17.066667 431.957333 431.957333 0 0 0-201.216 48.298667 231.082667 231.082667 0 0 1 201.216-115.370667 17.066667 17.066667 0 0 0 17.066667-17.066666V161.450667L921.6 251.392z",fill:"#3D3D63","p-id":"14523"})),g("h3",null,"\u5206\u4eab"),g("div",null,"\u8ba9\u597d\u53cb\u4e00\u773c\u5c31\u77e5\u9053\u4f60\u7684\u5206\u4eab\u91cd\u70b9\u3002\u53ef\u533a\u5206\u4ec5\u5206\u4eab\u6807\u8bb0\u6216\u5206\u4eab\u6574\u4e2a\u7f51\u9875\u3002")),g("div",{className:"glance-item"},g("svg",{t:"1598434239796",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"12311",width:"48",height:"48"},g("path",{d:"M787.2 659.2m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0Z",fill:"#1B8AFE","p-id":"12312"}),g("path",{d:"M947.2 921.6c0-83.2-70.4-153.6-160-153.6s-153.6 70.4-160 153.6h320z",fill:"#1B8AFE","p-id":"12313"}),g("path",{d:"M851.2 761.6c32-19.2 57.6-57.6 57.6-102.4 0-64-51.2-121.6-121.6-121.6s-121.6 51.2-121.6 121.6c0 44.8 25.6 76.8 57.6 102.4-64 25.6-108.8 83.2-108.8 160v32H960v-32c0-70.4-44.8-134.4-108.8-160z m-153.6-102.4c0-44.8 38.4-89.6 89.6-89.6 44.8 0 89.6 38.4 89.6 89.6s-38.4 89.6-89.6 89.6c-51.2 0-89.6-38.4-89.6-89.6z m-51.2 262.4c0-76.8 64-140.8 140.8-140.8 76.8 0 140.8 64 140.8 140.8h-281.6z",fill:"#383546","p-id":"12314"}),g("path",{d:"M83.2 230.4h32v38.4h-32z",fill:"#383546","p-id":"12315"}),g("path",{d:"M825.6 179.2H467.2V102.4c0-19.2-12.8-32-32-32h-320c-19.2 0-32 12.8-32 32V192h32V102.4h313.6v108.8h390.4v89.6H83.2v620.8c0 19.2 12.8 32 32 32H192v-32H115.2V332.8h742.4V211.2c0-12.8-12.8-32-32-32zM256 921.6h256v32H256z",fill:"#383546","p-id":"12316"})),g("h3",null,"\u4e2a\u4eba\u4e3b\u9875"),g("div",null,"\u62e5\u6709\u81ea\u5df1\u7684\u79c1\u4eba\u7f51\u9875\u7ba1\u7406\u4e3b\u9875\u3002\u7ba1\u7406\u4f60\u81ea\u5df1\u7684\u77e5\u8bc6\u661f\u7403\u3002"))))}}]),n}(u.Component)},foSv:function(t,e,n){"use strict";function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return l}))},md7G:function(t,e,n){"use strict";function l(t){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return a}));var i=n("JX7q");function a(t,e){return!e||"object"!==l(e)&&"function"!==typeof e?Object(i.a)(t):e}},o0o1:function(t,e,n){t.exports=n("ls82")},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},vuIU:function(t,e,n){"use strict";function l(t,e){for(var n=0;n<e.length;n++){var l=e[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function i(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}n.d(e,"a",(function(){return i}))}},[["vlRD",0,1,3,5,2]]]);