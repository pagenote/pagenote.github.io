(self.webpackChunkpagenote_cn=self.webpackChunkpagenote_cn||[]).push([[153],{5186:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var a=n(3804),r=n.n(a),o=n(7196),c=n.n(o),l=n(9669),i=n.n(l);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v="https://cors-anywhere.herokuapp.com/",g=("https://github.com/login/oauth/authorize?scope=user%20public_repo&client_id=c4aae381097464aa1024&redirect_uri=".concat("https://pagenote.logike.cn"),function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(l,e);var t,n,a,o,c=(a=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(a);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),h(f(t=c.call(this,e)),"codeToToken",(function(){var e=window.location.search.match(/code=(.*)$/);e&&i()({method:"post",headers:{Accept:"application/json"},url:"".concat(v,"https://github.com/login/oauth/access_token"),data:{client_id:"c4aae381097464aa1024",client_secret:"ed40211bca3ccabd900586079b89fd0ec1ea48be",code:e[1]}}).then((function(e){var t=e.data.access_token;localStorage.setItem("token",t);var n=new URLSearchParams(location.search).get("comeback");window.location=n||"/"}))})),h(f(t),"checkLogin",(function(){var e=localStorage.getItem("token");e&&i()({method:"get",headers:{Accept:"application/json",Authorization:"token ".concat(e)},url:"".concat(v,"https://api.github.com/user")}).then((function(e){e.data&&t.setState({userInfo:e.data})})).catch((function(e){console.error(e)}))})),t.state={userInfo:{}},t}return t=l,(n=[{key:"componentDidMount",value:function(){this.codeToToken(),this.checkLogin()}},{key:"render",value:function(){var e=this.state.userInfo;return r().createElement("nav",null,r().createElement("style",{jsx:"true"},"\n                nav{\n                    // height: 40px;\n                    // line-height: 40px;\n                    font-size:14px;\n                    border-bottom: 1px solid rgba(30,35,42,.06);\n                    box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);\n                }\n                nav a{\n                    color: #0366d6;\n                    text-decoration: none;\n                    margin-right: 12px;\n                }\n                .header{\n                    display: flex;\n                    padding: 0 24px;\n                    padding: 10px 24px;\n                    margin: 0 auto;\n                    max-width: 1000px;\n                    justify-content: space-between;\n                    box-sizing: border-box;\n                }\n                .me-link{\n                    margin-right: 12px;\n                }\n                .user-avatar{\n                    width: 20px;\n                    height: 20px;\n                    border-radius: 10px;\n                    border-radius: 4px;\n                    overflow: hidden;\n                }\n                #login{\n                    padding: 0px 6px;\n                    background: #509ff5;\n                    border-radius: 6px;\n                    color: #fff;\n                }\n            "),r().createElement("section",{className:"header"},r().createElement("div",null,r().createElement("a",{href:"/"},"PAGENOTE 一页一记")),r().createElement("div",null,r().createElement("span",{className:"me-link"},e.name?r().createElement("a",{className:"user-avatar",href:"/me"},r().createElement("img",{width:20,height:20,src:"".concat(e.avatar_url,"&s=30"),alt:"".concat(e.name)})):r().createElement("a",{id:"login",href:"/me"},"我的")),r().createElement("a",{href:"/setting"},"设置"))))}}])&&u(t.prototype,n),l}(a.Component));function b(){return r().createElement("footer",null,r().createElement("style",{jsx:"true"},"\n                footer{\n                  // display:flex;\n                  // justify-content: space-around;\n                  max-width: 800px;\n                  margin:24px auto;\n                  \n                  font-size:12px;\n                }\n                \n                  .footer-links a{\n                    margin-right:12px;\n                    transition: color .2s;\n                    color: #586069;\n                    text-decoration: none;\n                    line-height: 1.4em;\n                  }\n                  .footer-links a:hover{\n                    text-decoration: underline;\n                    color: #0366d6;\n                  }\n                  \n                  .d-flex {display: flex!important;}\n                  .list-style-none {list-style: none!important;}\n                  .footer-links{\n                    justify-content: space-between;\n                    width: 100%;\n                    margin: 0;\n                    padding: 18px 0 12px 0;\n                    border-top: 1px solid #ececec;\n                  }\n              "),r().createElement("footer",null,r().createElement("div",{className:"position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between flex-sm-items-center pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light "},r().createElement("ul",{className:"list-style-none d-flex footer-links"},r().createElement("li",{className:"mr-3 mr-lg-0"},"© 2020 ",r().createElement("a",{href:"/"},"PAGENOTE")),r().createElement("li",{className:"mr-3 mr-lg-0"},r().createElement("p",null,r().createElement("a",{href:"/hello.html"},"产品介绍")),r().createElement("p",null,r().createElement("a",{href:"/page?id=why"},"常见问题")),r().createElement("p",null,r().createElement("a",{href:"/release"},"更新日志"))),r().createElement("li",{className:"mr-3 mr-lg-0"},r().createElement("p",null,r().createElement("a",{href:"/page?id=privacy"},"隐私协议"))),r().createElement("li",null,r().createElement("p",null,r().createElement("a",{href:"/page?id=donation"},"支持/贡献"))),r().createElement("li",null,r().createElement("p",null,r().createElement("a",{href:"/page?id=developer"},"开发者")),r().createElement("p",null,"用户群：769094377"))))))}function y(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=document.getElementById("app");c().render(r().createElement(r().Fragment,null,t&&r().createElement(g,null),r().createElement(e,null),n&&r().createElement(b,null)),a)}if(window.location.protocol.indexOf("https")>-1){var E=function(){dataLayer.push(arguments)};window.dataLayer=window.dataLayer||[],E("js",new Date),E("config","G-LBE869KVBS"),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then((function(e){console.log("Service Worker 注册成功!")})).catch((function(e){console.log(e)}))}},4651:(e,t,n)=>{"use strict";var a=n(3804),r=n.n(a),o=n(1614),c=n(516),l=n(4566);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=a.createElement("path",{d:"M682.667 568.889H341.333c-28.444 0-56.889-22.756-56.889-56.889 0-28.444 22.756-56.889 56.89-56.889h341.333c28.444 0 56.889 22.756 56.889 56.889s-22.756 56.889-56.89 56.889z",fill:"#545B68"}),u=a.createElement("path",{d:"M512 967.111c-250.311 0-455.111-204.8-455.111-455.111S261.689 56.889 512 56.889c68.267 0 136.533 17.067 199.111 45.511 28.445 11.378 39.822 45.511 28.445 73.956-11.378 28.444-45.512 39.822-73.956 28.444-51.2-22.756-102.4-34.133-153.6-34.133-187.733 0-341.333 153.6-341.333 341.333S324.267 853.333 512 853.333 853.333 699.733 853.333 512c0-22.756 0-45.511-5.689-68.267-5.688-28.444 11.378-62.577 45.512-68.266 28.444-5.69 62.577 11.377 68.266 45.51 0 28.445 5.69 62.579 5.69 91.023 0 250.311-204.8 455.111-455.112 455.111z",fill:"#545B68"}),p=a.createElement("path",{d:"M836.267 335.644c-17.067 0-34.134-5.688-45.511-22.755-5.69-11.378-17.067-17.067-22.756-28.445-22.756-22.755-17.067-56.888 5.689-79.644s56.889-17.067 79.644 5.689c11.378 11.378 22.756 22.755 28.445 39.822 17.066 22.756 11.378 62.578-11.378 79.645-11.378 0-22.756 5.688-34.133 5.688zM455.11 682.667V341.333c0-28.444 22.756-56.889 56.889-56.889 28.444 0 56.889 22.756 56.889 56.89v341.333c0 34.133-22.756 56.889-56.889 56.889s-56.889-22.756-56.889-56.89z",fill:"#545B68"});const m=function(e){return a.createElement("svg",i({viewBox:"0 0 1024 1024",width:24,height:24},e),s,u,p)};var f={copy:{icon:'<svg t="1603375965274" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3171" width="48" height="48"><path d="M832.19 128H432.84c-35.43 0-64.14 28.72-64.14 64.14V320h64V192.14v-0.06c0.02-0.03 0.06-0.06 0.09-0.09h399.47c0.03 0.02 0.06 0.06 0.09 0.09v399.48c-0.02 0.03-0.06 0.06-0.09 0.09H703.33v64h128.86c35.43 0 64.14-28.72 64.14-64.14V192.14c0-35.42-28.72-64.14-64.14-64.14z" fill="#FFEB76" p-id="3172"></path><path d="M592.19 368H192.84c-35.43 0-64.14 28.72-64.14 64.14V831.5c0 35.43 28.72 64.14 64.14 64.14h399.35c35.43 0 64.14-28.72 64.14-64.14V432.14c0-35.42-28.72-64.14-64.14-64.14zM512 724H271.99v-64H512v64z m0-120H271.99v-64H512v64z" fill="#FFEB76" p-id="3173"></path><path d="M592.19 432h0.06c0.03 0.02 0.06 0.06 0.09 0.09v399.47c-0.02 0.03-0.06 0.06-0.09 0.09H192.78c-0.03-0.02-0.06-0.06-0.09-0.09V432.14v-0.06c0.02-0.03 0.06-0.06 0.09-0.09h399.41m0-63.99H192.84c-35.43 0-64.14 28.72-64.14 64.14V831.5c0 35.43 28.72 64.14 64.14 64.14h399.35c35.43 0 64.14-28.72 64.14-64.14V432.14c0-35.42-28.72-64.14-64.14-64.14z" fill="#333333" p-id="3174"></path><path d="M512 540H271.99v64H512v-64zM512 660H271.99v64H512v-64zM832.19 128H432.84c-35.43 0-64.14 28.72-64.14 64.14V320h64V192.14v-0.06c0.02-0.03 0.06-0.06 0.09-0.09h399.47c0.03 0.02 0.06 0.06 0.09 0.09v399.48c-0.02 0.03-0.06 0.06-0.09 0.09H703.33v64h128.86c35.43 0 64.14-28.72 64.14-64.14V192.14c0-35.42-28.72-64.14-64.14-64.14z" fill="#333333" p-id="3175"></path></svg>',name:"复制",shortcut:"",clickScript:"(function(){writeTextToClipboard(API.text);\n                API.notification('已复制，去粘贴使用吧','success',3000);\n            })();"},baidu:{icon:'<svg t="1603457554872" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19431" width="48" height="48"><path d="M0 0h1024v1024H0z" fill="#FFFFFF" p-id="19432"></path><path d="M412.266496 352.396288c50.030592 0 90.456064-57.403392 90.456064-128.381952 0-70.91712-40.425472-128.304128-90.456064-128.304128-49.969152 0-90.502144 57.387008-90.502144 128.304128 0 70.97856 40.532992 128.381952 90.50112 128.381952M627.729408 360.882176c66.895872 8.64256 109.89568-62.502912 118.443008-116.424704 8.716288-53.829632-34.43712-116.40832-81.770496-127.16032-47.45728-10.841088-106.693632 64.91648-112.086016 114.318336-6.449152 60.38016 8.685568 120.684544 75.413504 129.266688M244.107264 533.393408c90.57792-19.408896 78.262272-127.328256 75.55072-150.936576-4.457472-36.374528-47.36512-99.9168-105.63584-94.908416-73.315328 6.551552-84.022272 112.134144-84.022272 112.134144-9.926656 48.820224 23.728128 153.119744 114.107392 133.710848M892.84096 451.418112c0-25.777152-21.476352-103.4752-101.210112-103.4752-79.885312 0-90.5472 73.315328-90.5472 125.144064 0 49.477632 4.182016 118.532096 103.384064 116.333568 99.233792-2.168832 88.373248-112.057344 88.373248-138.002432M340.296704 721.117184c-2.650112 7.588864-8.578048 26.998784-3.46112 43.902976 10.139648 37.902336 43.16672 39.612416 43.16672 39.612416h47.42656V689.01888H376.61696c-22.82496 6.795264-33.85344 24.49408-36.320256 32.099328" fill="#3388FF" p-id="19433"></path><path d="M701.000704 850.308096H565.492736c-52.496384-13.499392-54.992896-50.683904-54.992896-50.683904V650.2144l54.992896-0.88576v134.291456c3.354624 14.294016 21.200896 16.889856 21.200896 16.889856h55.852032V650.2144h58.45504V850.30912z m-219.33056 0.80896H363.931648c-50.85696-10.093568-71.108608-44.71296-73.68192-50.607104-2.527232-5.986304-16.91136-33.794048-9.283584-81.088512 21.982208-70.90176 84.666368-76.002304 84.666368-76.002304h62.683136v-76.796928l53.354496 0.80896V851.11808z m309.95456-173.247488S688.14848 598.065152 627.73248 511.81568c-81.862656-127.174656-198.191104-75.42272-237.085696-10.750976-38.724608 64.671744-99.095552 105.582592-107.70432 116.409344-8.670208 10.674176-124.952576 73.238528-99.141632 187.55584C209.6128 919.28576 300.26752 917.071872 300.26752 917.071872s66.820096 6.565888 144.362496-10.735616c77.51168-17.133568 144.300032 4.276224 144.300032 4.276224s181.126144 60.471296 230.66624-55.952384c49.52576-116.409344-27.971584-176.790528-27.971584-176.790528z" fill="#3388FF" p-id="19434"></path></svg>',name:"百度搜索",shortcut:"b",clickUrl:"https://www.baidu.com/s?wd=${keyword}"},fanyi:{icon:'<svg t="1603457616548" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21051" width="48" height="48"><path d="M955.733333 1024h-400.497777L291.271111 204.8h664.462222c37.701404 0 68.266667 30.565262 68.266667 68.266667v682.666666c0 37.701404-30.565262 68.266667-68.266667 68.266667z" fill="#D9D9D9" p-id="21052"></path><path d="M68.266667 0h400.497777l263.964445 828.302222H68.266667c-37.701404 0-68.266667-30.565262-68.266667-68.266666V68.266667C0 30.565262 30.565262 0 68.266667 0z" fill="#4F8BF5" p-id="21053"></path><path d="M555.235556 1024l177.493333-195.697778h-239.707022z" fill="#4252B8" p-id="21054"></path><path d="M756.954453 614.286222c32.768-39.207822 56.269938-82.120249 70.514916-128.73728h-203.671325l-10.922666-34.998044h93.5936V387.367822h58.481778v63.183076h194.910435v34.998044h-84.923733c-12.875093 53.812338-42.411804 107.597369-88.610134 161.355094 31.794062 33.66912 72.590222 72.480996 122.38848 116.440177-10.613191 11.377778-21.877191 22.345956-33.778346 32.904534-46.430436-43.945529-85.610951-83.244373-117.550649-117.891983-16.707129 17.03936-35.089067 34.074169-55.150365 51.108978 0 2.17088-4.983467-13.853582-14.941297-48.068835a500.258133 500.258133 0 0 0 40.79616-35.871858c-41.565298-48.3328-66.141298-85.77024-73.741654-112.303218h50.50368c6.398862 20.748516 23.765902 47.768462 52.10112 81.064391z" fill="#617D8B" p-id="21055"></path><path d="M1024 682.666667L546.133333 204.8h409.6c37.701404 0 68.266667 30.565262 68.266667 68.266667v409.6z" fill="#FFFFFF" opacity=".192" p-id="21056"></path><path d="M291.271111 445.048604V387.367822h145.439858V440.502044c-2.494009 36.445298-38.902898 130.025244-145.439858 130.025245-119.088924 0-159.002169-97.962667-159.002169-159.762205 0-61.804089 47.490844-152.293831 159.002169-152.293831 37.651342 0 71.356871 13.202773 101.112036 39.60832L347.7504 343.472356c-12.611129-13.726151-31.439076-20.589227-56.479289-20.589227-45.056 0-90.394169 33.901227-90.394169 91.272533 0 97.848889 135.877973 136.06912 171.677014 30.897494H291.271111z" fill="#FFFFFF" p-id="21057"></path></svg>',name:"谷歌翻译",shortcut:"t",clickUrl:"https://translate.google.cn/#view=home&op=translate&sl=auto&tl=auto&text=${keyword}"},record:{icon:'<svg t="1603689943505" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1288" width="32" height="32"><path d="M424.64 623.936l-153.6-164.544a57.728 57.728 0 0 1 0-77.568 48.768 48.768 0 0 1 72.384 0L460.8 507.584l219.84-235.456a48.768 48.768 0 0 1 72.384 0 57.728 57.728 0 0 1 0 77.568l-256 274.304A49.728 49.728 0 0 1 460.8 640a49.28 49.28 0 0 1-36.16-16.064z" fill="#4D94FF" p-id="1289"></path><path d="M896 128v712.32l-48.896-32.576a127.744 127.744 0 0 0-161.472 16l-45.632 45.632-38.272-38.272a127.552 127.552 0 0 0-90.496-37.504c-32 0-64.064 11.968-88.896 35.968l-41.28 39.808-41.792-43.456a128 128 0 0 0-163.2-17.664L128 840.32V128h768m64-128H64C28.736 0 0 28.672 0 64v895.936c0 23.616 12.992 45.248 33.792 56.512a64.576 64.576 0 0 0 65.792-3.264l147.52-98.368 86.336 89.6c11.84 12.096 28.032 19.264 44.992 19.52l2.24 0.064a61.44 61.44 0 0 0 43.392-18.048L511.232 921.6l83.52 83.52a63.808 63.808 0 0 0 90.496 0l90.88-90.88 148.352 98.88A64 64 0 0 0 1024 959.872V64a64 64 0 0 0-64-64z" fill="#4D94FF" p-id="1290"></path></svg>',name:"创建一个标记",shortcut:"",clickScript:'(function(){API.record({bg:"#e2e202"}); })();'},mailto:{icon:'<svg t="1603711839289" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3195" width="32" height="32"><path d="M960.9 405.7l-448 323.4-448-323.4 448-323.4z" fill="#5B79FB" p-id="3196"></path><path d="M187.3 139.1h651.2v795.4H187.3z" fill="#E5ECFF" p-id="3197"></path><path d="M335 222h355.7v73.9H335z" fill="#FF7E71" p-id="3198"></path><path d="M258.3 358h509.3v37H258.3zM258.3 420.7h509.3v37H258.3zM258.3 483.4h509.3v37H258.3zM258.3 546.1h509.3v37H258.3z" fill="#FFFFFF" p-id="3199"></path><path d="M64.9 934.5h896V405.7l-448 323.4-448-323.4z" fill="#5B79FB" p-id="3200"></path><path d="M64.9 934.5h896L594.6 670.1H431.2z" fill="#83A4FF" p-id="3201"></path></svg>',name:"发送信息到邮箱",clickScript:'(function () {\n          var targetInfo = API.targetInfo || {};\n          console.log(targetInfo);\n          var subject = encodeURIComponent("[PAGENOTE摘录]"+targetInfo.text);\n          var body = encodeURIComponent(targetInfo.pre+targetInfo.text+targetInfo.suffix+"----------来自"+API.href);\n          var mailTo = "mailto:xxx@gmail.com?cc=logikecn@gmail.com&bcc=&subject="+subject+"&body="+body;\n          var a = document.createElement(\'a\');\n          a.href=mailTo;\n          a.click();\n      })()'}};function d(e){var t=e.funItem,n=void 0===t?{name:"",shortcut:"",clickScript:"",clickUrl:"",icon:""}:t,o=e.groupIndex,c=e.itemIndex,l=e.onSave,i=(0,a.useRef)(null),s=(0,a.useRef)(null),u=(0,a.useRef)(null),p=(0,a.useRef)(null),m=(0,a.useRef)(null),d=o>-1&&c>-1;return r().createElement("div",{className:"function-setting-form"},r().createElement("h4",null,"按钮设置",d&&r().createElement("div",null,"使用预设：",r().createElement("select",{name:"",id:"",onChange:function(e){var t=e.target.value,n=f[t];n&&(i.current.value=n.name||"",u.current.value=n.shortcut||"",m.current.value=n.clickScript||"",p.current.value=n.clickUrl||"",s.current.value=n.icon||"")}},r().createElement("option",{value:"-"}),Object.keys(f).map((function(e){return r().createElement("option",{key:e,value:e},f[e].name)}))))),r().createElement("div",null,d?"":"选择一个功能按钮进行设置"),d&&r().createElement("div",null,r().createElement("div",null,r().createElement("div",{className:"label"},"按钮名称："),r().createElement("input",{placeholder:"取一个名字吧，不要重复",ref:i,type:"text",defaultValue:n.name})),r().createElement("div",null,r().createElement("div",{className:"label"},"按钮图标："),r().createElement("input",{placeholder:"svg图片或者网络https链接图片",ref:s,type:"text",defaultValue:n.icon})),r().createElement("div",null,r().createElement("div",{className:"label"},"快捷键："),r().createElement("input",{placeholder:"一个字母或数字",maxLength:1,ref:u,type:"text",defaultValue:n.shortcut})),r().createElement("div",null,r().createElement("div",{className:"label"},"跳转链接："),r().createElement("input",{placeholder:"链接里用${keyword}表示替换值",ref:p,type:"text",defaultValue:n.clickUrl})),r().createElement("div",null,r().createElement("div",{className:"label"},"执行函数："),r().createElement("textarea",{placeholder:"确保安全的一段执行脚本：(function(){})();",ref:m,type:"text",defaultValue:n.clickScript})),r().createElement("div",null,r().createElement("button",{onClick:function(){var e={name:i.current.value||"",shortcut:u.current.value||"",clickScript:m.current.value||"",clickUrl:p.current.value||"",icon:s.current.value||""};l(e,o,c)}},n.name?"修改":"新建"))))}var h=n(6901),v=n(425);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function x(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?I(e):t}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=h.Z.Panel,O=null;String.prototype.replaceCharAt=function(e,t){return this.substr(0,e)+t+this.substr(e+1,this.length-1-e)};var N=[{id:"theme-simple",label:"最简单",desc:"",colors:["#ffc106"]},{id:"theme-default",label:"默认色",desc:"默认有多色，有深浅，半透明色",colors:["#72D0FF","#ffbea9","#c8a6ff","#6fe2d5","#FFDE5D","#FBB5D6"]},{id:"theme-1",label:"七彩风",desc:"赤橙黄绿蓝靛紫，适用于显著地为标记做分类",colors:["#03a9f4","#f44336","#ff5722","#ffc107","#4caf50","#673ab7","#9c27b0"]},{id:"theme-2",label:"山水风",desc:"一套青色风，适用于重要程度区分",colors:["#00bcd4","#e0f7fa","#80deea","#26c6da","#00acc1","#00838f","#006064"]}],P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(u,e);var t,n,a,i,s=(a=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(a);if(i){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),F(I(t=s.call(this,e)),"addClickListener",(function(){document.addEventListener("click",(function(e){t.colorPart.current&&!t.colorPart.current.contains(e.target)&&t.setState({colorIndex:-1})}))})),F(I(t),"getSetting",(function(){O.sendMessage("get_setting",{},(function(e){var n=e.data,a=(e.type,n.data||{});t.setState({colors:a.colors||[],themeId:a.themeId||"",userActivity:a.userActivity||[],matchType:a.matchType,maxRecord:a.maxRecord,enableBookmark:a.enableBookmark||!1,enableCollectImage:a.enableCollectImage||!1,openInTab:a.openInTab,shortCuts:a.shortCuts||[],actionGroup:a.actionGroup||[]})}))})),F(I(t),"setIndex",(function(e,n){t.setState({colorIndex:e,modalPosition:{left:n.pageX,top:n.pageY}})})),F(I(t),"setShortKey",(function(e){var n=(e.key||"").toUpperCase();if(console.log(n),/[A-Z0-9\[\];',.`]/.test(n)){var a=t.state,r=a.shortCuts,o=a.colorIndex;r=r.replaceCharAt(o,n).substr(0,t.state.colors.length),t.setState({shortCuts:r},(function(){t.saveSetting()}))}else alert("仅支持字母、数字和部分标点符号")})),F(I(t),"setColor",(function(e,n){var a=t.state.colors,r=a.indexOf(e);r>-1&&r!==n||(a[n]=e.hex,t.setState({colors:a},(function(){t.saveSetting()})))})),F(I(t),"setColors",(function(e){t.setState({colors:y(e)},(function(){t.saveSetting()}))})),F(I(t),"toggleTabShow",(function(e){var n=e.target.checked;t.setState({openInTab:n},(function(){setTimeout((function(){t.saveSetting()}),100)}))})),F(I(t),"toggleBookmark",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"enableCollectImage",a=e.target.checked;t.setState(F({},n,a),(function(){setTimeout((function(){t.saveSetting()}),100)}))})),F(I(t),"changeLimit",(function(e){var n=e.target.value;t.setState({maxRecord:n},(function(){t.saveSetting()}))})),F(I(t),"saveSetting",(function(){var e=t.state,n=e.colors,a=e.maxRecord,r=e.openInTab,o=e.shortCuts,c={colors:n||[],maxRecord:a,enableBookmark:e.enableBookmark,enableCollectImage:e.enableCollectImage,openInTab:r,shortCuts:o||[],actionGroup:e.actionGroup};O.sendMessage("save_setting",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c)),setTimeout((function(){t.getSetting()}),3e3)})),F(I(t),"setIconFun",(function(e,n){t.setState({settingIndex:{groupIndex:e,itemIndex:n}})})),F(I(t),"deleteFun",(function(e,n){var a=t.state.actionGroup,r=a[e];r.length<=1?a.splice(e,1):r.splice(n,1),t.setState({settingIndex:{groupIndex:-1,itemIndex:-1},actionGroup:a},(function(){t.saveSetting()}))})),F(I(t),"saveFun",(function(e,n,a){var r=t.state.actionGroup;r[n][a]=e,t.setState({actionGroup:r},(function(){t.saveSetting()}))})),F(I(t),"addItem",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"item",n=arguments.length>1?arguments[1]:void 0,a=t.state.actionGroup;switch(e){case"item":if(a[n].length>4)return void alert("最多设置4个子按钮");a[n].push({name:"定义一个名称吧："+(new Date).toLocaleTimeString(),shortcut:"",clickScript:"",clickUrl:"",icon:""});break;case"group":if(a.length>5)return void alert("最多设置5组");a.push([{name:"定义一个名称吧："+(new Date).toLocaleTimeString(),shortcut:"",clickScript:"",clickUrl:"",icon:""}])}t.setState({actionGroup:a})})),F(I(t),"resetFuns",(function(){})),t.colorPart=r().createRef(),t.state={colors:[],themeId:"",userActivity:[],matchType:"smart",maxRecord:30,openInTab:!1,shortCuts:"PAGENOTE",enableBookmark:!0,enableCollectImage:!1,actionGroup:[],colorPickerPro:!1,colorIndex:-1,modalPosition:{left:0,top:0},settingIndex:{groupIndex:-1,itemIndex:-1}},t}return t=u,(n=[{key:"componentDidMount",value:function(){O=new c.Z(document.getElementById("messenger"),"page","extension"),this.getSetting(),this.addClickListener()}},{key:"render",value:function(){var e=this,t=this.state,n=t.colors,a=void 0===n?[]:n,c=t.shortCuts,i=void 0===c?[]:c,s=t.colorIndex,u=t.modalPosition,p=t.openInTab,f=t.maxRecord,g=t.enableBookmark,b=t.colorPickerPro,E=(t.enableCollectImage,t.actionGroup),x=t.settingIndex,w={};try{w=E[x.groupIndex][x.itemIndex]}catch(e){}return r().createElement("div",{className:"setting-page"},r().createElement("div",{className:"pagenote-bar"},r().createElement("div",{className:"pagenote setting-part"},r().createElement("div",{className:"tip"},"点击下方你想要个性化的模块进行设置。"),r().createElement("div",{className:"function-container"},r().createElement("div",{className:"function-area"},r().createElement("div",{className:"function-colors",ref:this.colorPart},a.map((function(t,n){var a=(0,l.oo)(n-1,35),o=a.x,c=a.y;return r().createElement("div",{key:t+n,onClick:function(t){e.setIndex(n,t)},className:"color-item ".concat(n===s?"active":""),style:{top:c/-1+"px",left:o/-1+"px",background:t,color:(0,l.iI)(t).textColor}},i[n])})),r().createElement("div",{className:"color-modal ".concat(s>=0?"show":""),style:{left:u.left,top:u.top}},r().createElement("div",null,r().createElement("div",{className:"setting-title"},"色块修改"),r().createElement("div",{className:"setting-item"},r().createElement("div",{className:"setting-label"},"选取高亮背景色："),b?r().createElement(o.nd,{onChangeComplete:function(t){e.setColor(t,s)},color:a[s]}):r().createElement(o.Ie,{onChangeComplete:function(t){e.setColor(t,s)},colors:[].concat(y(N[0].colors),y(N[1].colors),y(N[2].colors)),color:a[s]})),r().createElement("div",{className:"setting-item"},r().createElement("span",{className:"setting-label"},"快捷键："),r().createElement("input",{readOnly:!0,onKeyUp:this.setShortKey,value:i[s]}))),r().createElement("div",{className:"predefine-theme"},r().createElement("div",{className:"setting-title"},"一键设置"),r().createElement("div",null,N.map((function(t){return r().createElement("div",{key:t.label},r().createElement("button",{onClick:function(){return e.setColors(t.colors)}},t.label),t.colors.map((function(e){return r().createElement("span",{key:e,className:"set-color-item",style:{background:e}})})))})))))),r().createElement("div",{className:"function-custom"},E.map((function(t,n){return r().createElement("div",{key:n,className:"action-group"},t.map((function(t,a){var o=/^<svg/.test(t.icon)?"data:image/svg+xml;base64,".concat(window.btoa(t.icon)):t.icon;return r().createElement("div",{onClick:function(){e.setIconFun(n,a)},key:t.name+t.icon+a,className:"function-item ".concat(x.groupIndex===n&&x.itemIndex===a?"active":""),style:{backgroundImage:"url(".concat(o,")")}},r().createElement("svg",{onClick:function(){return e.deleteFun(n,a)},t:"1603522183404",className:"delete",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3421",width:"12",height:"12"},r().createElement("path",{d:"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z",fill:"#CCCCCC","p-id":"3422"}),r().createElement("path",{d:"M484.844 511.908L318.91 345.974c-8.331-8.331-8.331-21.839 0-30.17 8.331-8.331 21.839-8.331 30.17 0l165.934 165.934L680.95 315.804c8.33-8.331 21.838-8.331 30.17 0 8.33 8.331 8.33 21.839 0 30.17L545.184 511.908 711.12 677.843c8.33 8.33 8.33 21.838 0 30.17-8.332 8.33-21.84 8.33-30.17 0L515.014 542.078 349.08 708.013c-8.331 8.33-21.839 8.33-30.17 0-8.331-8.332-8.331-21.84 0-30.17l165.934-165.935z",fill:"#FFFFFF","p-id":"3423"})))})),r().createElement("div",{className:"function-item"},r().createElement(m,{onClick:function(){return e.addItem("item",n)}})))})),r().createElement("div",{className:"action-group"},r().createElement(m,{className:"function-item",onClick:function(){e.addItem("group")}})))),r().createElement(d,{key:x.groupIndex+"-"+x.itemIndex,onSave:this.saveFun,funItem:w,groupIndex:x.groupIndex,itemIndex:x.itemIndex}))),r().createElement("div",{className:"limit setting-part"},r().createElement("label",null,"单页面最大标记数 ",r().createElement("b",null,f),r().createElement("input",{type:"range",value:f,max:50,min:0,onChange:this.changeLimit}),r().createElement("div",{className:"tip"},0==f&&r().createElement("div",null,"当设置为0，等同于",r().createElement("b",null,"关闭 PAGENOTE")," ：不可进行标记、已有标记的页面也将无法使用 PAGENOTE 功能。",r().createElement("br",null),"你可以设置为0来关闭 PAGENOTE",r().createElement("br",null))))),r().createElement("div",{className:"tab setting-part"},r().createElement("label",null,r().createElement("input",{type:"checkbox",checked:p,onChange:this.toggleTabShow}),"新开页面打开 ",r().createElement("a",{href:"/me"},"PAGENOTE/ME"))),r().createElement("div",{className:"bookmark setting-part"},r().createElement("label",null,r().createElement("input",{id:"enable-bookmarks",type:"checkbox",checked:g,onChange:function(t){return e.toggleBookmark(t,"enableBookmark")}}),"启用智能书签",r().createElement("span",{className:"tip"},r().createElement("a",{href:"/auto_bookmark"},"了解什么是「智能书签」"))),r().createElement("div",{className:"tip"},g?"开启后请不要（也无法）手动操作 pagenote 书签文件夹（pagenote将根据标记自动重置）":"")),r().createElement(h.Z,{bordered:!1,defaultActiveKey:["1"],expandIcon:function(e){var t=e.isActive;return r().createElement(v.Z,{rotate:t?90:0})},className:"site-collapse-custom-collapse"},r().createElement(C,{header:"高级设置",key:"1",className:"site-collapse-custom-panel"},"开发中：支持webdav协议。")),r().createElement("div",{className:"setting-part"},r().createElement("div",{className:"tip"},"配置修改后，已打开的标签页刷新后生效。"))))}}])&&x(t.prototype,n),u}(a.Component);(0,n(5186).Z)(P)},4566:(e,t,n)=>{"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!e)return"#000000";var t=[],n=1;e.indexOf("rgb")>-1?(t=e.match(/\((.*)\)/)[1].split(","),void 0!==(t=[parseInt(t[0]),parseInt(t[1]),parseInt(t[2])])[3]&&(n=t[3])):(t=[(e=e.replace("#","")).substr(0,2),e.substr(2,2),e.substr(4,2),1],t=[parseInt(t[0],16),parseInt(t[1],16),parseInt(t[2],16)]);var a=t[0],r=t[1],o=t[2],c=(.3*a+.59*r+.11*o)*Math.min(n,1);return{rgb:t,textColor:c>=180?"#000000":"#ffffff"}}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=45,a=-2*Math.PI/360*n*e,r=Number.parseFloat(t*Math.sin(a)).toFixed(3),o=Number.parseFloat(t*Math.cos(a)).toFixed(3);return{x:-r,y:-o}}n.d(t,{iI:()=>a,oo:()=>r,sD:()=>o});var o=function(e,t){var n=document.createElement("a");n.download=t,n.style.display="none";var a=new Blob([e]);n.href=URL.createObjectURL(a),document.body.appendChild(n),n.click(),document.body.removeChild(n)}},516:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"extension";if(e){var a={};this.sendMessage=function(t,r,o){"function"==typeof o&&(a[t]=o),e.innerText=JSON.stringify({data:r,type:t});var c=document.createEvent("Event");c.initEvent("send_to_"+n,!0,!0),e.dispatchEvent(c)},this.addListener=function(e,t){a[e]=t},e.addEventListener("send_to_"+t,(function(t){var n=e.innerText,r={type:"",data:{}};try{r=JSON.parse(n)}catch(t){}var o=a[r.type];o&&o(r)}))}}},3804:e=>{"use strict";e.exports=React},7196:e=>{"use strict";e.exports=ReactDOM}},0,[[4651,666,216]]]);