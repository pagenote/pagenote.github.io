(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(u.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},u=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,u=t.hasQuery;return n||o&&(void 0!==u&&u)}},"/GRZ":function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"48fX":function(t,e,n){var r=n("qhzo");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"5fIB":function(t,e,n){var r=n("7eYB");t.exports=function(t){if(Array.isArray(t))return r(t)}},"7eYB":function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r=c(n("q1tI")),o=c(n("Xuae")),u=n("lwAK"),i=n("FYa8"),a=n("/0+H");function c(t){return t&&t.__esModule?t:{default:t}}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function s(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var l=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(s,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var u=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);t.has(i)?u=!1:t.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?u=!1:e.add(o.type);break;case"meta":for(var a=0,c=l.length;a<c;a++){var f=l[a];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?u=!1:n.add(f);else{var s=o.props[f],p=r[f]||new Set;p.has(s)?u=!1:(p.add(s),r[f]=p)}}}return u}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var d=(0,o.default)();function y(t){var e=t.children;return(r.default.createElement(u.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,a.isInAmpMode)(t)},e)}))})))}y.rewind=d.rewind;var v=y;e.default=v},BGza:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var r=n("1OyB"),o=n("vuIU"),u=n("Ji7U"),i=n("md7G"),a=n("foSv"),c=n("q1tI"),f=n.n(c),s=n("8Kt/"),l=n.n(s),p=(n("8SJN"),f.a.createElement);function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(a.a)(t);if(e){var o=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var y=function(t){Object(u.a)(n,t);var e=d(n);function n(t){var o;return Object(r.a)(this,n),(o=e.call(this,t)).state={showCode:!1},o}return Object(o.a)(n,[{key:"showDS",value:function(){this.setState({showCode:!0})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return p("div",{className:"why"},p(l.a,null,p("title",null,"why?--pagenote")),p("div",{className:"problem"},p("div",{className:"question"},p("a",{href:"#how-to-use"},"Q: \u600e\u4e48\u4f7f\u7528\uff1f")),p("div",null,"A: pagenote\u51e0\u4e4e\u6ca1\u6709\u5b66\u4e60\u6210\u672c\uff0c\u6240\u6709\u7684\u529f\u80fd\uff0c\u90fd\u53ef\u4ee5\u4ece\u300c\u52fe\u9009\u4e00\u6bb5\u6587\u672c\u300d\u5f00\u59cb\u3002")),p("div",{className:"problem"},p("div",{className:"question"},p("a",{href:"#why-github"},"Q: \u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528GitHub\u767b\u5f55\uff1f")),p("div",null,"A: pagenote\u76ee\u524d\u8fd8\u6ca1\u6709\u81ea\u5df1\u7684\u670d\u52a1\u5668\uff0c\u6240\u6709\u7684\u6570\u636e\u90fd\u5b58\u50a8\u5728\u7528\u6237\u672c\u5730\u3002\u5982\u679c\u8981\u5206\u4eab\uff0c\u9700\u8981\u501f\u52a9\u5176\u4ed6\u5e73\u53f0\u6765\u5b58\u50a8\u6570\u636e\u3002GitHub\u662f\u76ee\u524d\u7684\u9009\u62e9\u3002")),p("div",{className:"problem"},p("div",{className:"question"},p("a",{href:"#why-error"},"Q: \u4e3a\u4ec0\u4e48\u5206\u4eab\u4f1a\u5931\u8d25\uff1f")),p("div",null,"A: \u53ef\u80fd\u6709\u51e0\u4e2a\u539f\u56e0\uff1a",p("ul",null,p("li",null,"\u64cd\u4f5c\u592a\u9891\u7e41\uff0cGitHub\u5bf9\u670d\u52a1\u6709\u9891\u63a7\u9650\u5236\uff0c\u5982\u679c\u5931\u8d25\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528\u5176\u4ed6\u6d4f\u89c8\u5668\u6216\u7a0d\u540e\u518d\u8bd5"),p("li",null,"\u7f51\u9875\u5185\u5bb9\u592a\u591a\uff0c\u5b58\u50a8\u4f53\u79ef\u592a\u5927\u3002\u5efa\u8bae\u9009\u62e9\u300c\u4ec5\u5206\u4eab\u6807\u8bb0\u300d\u518d\u8bd5")))),p("div",{className:"problem"},p("div",{className:"question"},p("a",{href:"#why-public"},"Q: \u4e3a\u4ec0\u4e48\u5206\u4eab\u6570\u636e\u662f\u516c\u5f00\u7684\uff1f\u600e\u4e48\u5220\u9664\uff1f")),p("div",null,"A: \u901a\u8fc7GitHub\u5b58\u50a8\u6570\u636e\uff0c\u672c\u8d28\u662f\u5728pagenote\u4ed3\u5e93\u4e0b\u521b\u5efa\u4e00\u4e2a issue\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b issue \u662f\u516c\u5f00\u53ef\u89c1\u7684\u3002\u6240\u4ee5\u8bf7\u6ce8\u610f\u4e2a\u4eba\u4fe1\u606f\u4fdd\u62a4\u3002 \u5982\u679c\u9700\u8981\u5220\u9664\uff0c\u53ef\u4ee5\u5728 ",p("a",{href:"https://github.com/rowthan/pagenote/issues"},"issue")," \u4e2d\u627e\u5230\u4f60\u7684\u5206\u4eab\uff0c\u5c06\u5176\u5220\u9664\u3002")),p("div",{className:"problem"},p("div",{className:"question"},p("a",{href:"#why-no-server"},"Q: \u4f1a\u505apagenote\u81ea\u5df1\u7684\u670d\u52a1\u5b58\u50a8\u5417\uff1f")),p("div",null,"A: \u642d\u5efa\u81ea\u5df1\u7684\u670d\u52a1\u5668\uff0c\u6709\u4e00\u5b9a\u7684\u7ecf\u6d4e\u6210\u672c\uff0c\u5f53\u4f7f\u7528\u7528\u6237\u8f83\u591a\u65f6\uff0c\u4f1a\u8003\u8651\u3002\u5982\u679c\u4f60\u6709\u8fd9\u65b9\u9762\u7684\u9700\u6c42\uff0c\u8bf7 ",p("a",{href:"https://www.wjx.cn/jq/69876579.aspx"},"\u7559\u8a00"))),p("div",{className:"problem"},p("div",{className:"question"},p("a",{href:"#why-not-same"},"Q: \u6709\u7684\u7f51\u7ad9\u5feb\u7167\u4e0d\u80fd\u767e\u5206\u767e\u8fd8\u539f\u6837\u5f0f\uff1f")),p("div",null,"A: \u5feb\u7167\u5206\u4eab\u7f51\u9875\u4e3b\u8981\u662f\u4fdd\u8bc1\u7f51\u9875\u5185\u5bb9\u5b8c\u5168\u88ab\u7f13\u5b58\uff08\u6587\u672c\u5185\u5bb9\uff09\uff0c\u800c\u5b58\u50a8\u6837\u5f0f\u9700\u8981\u66f4\u591a\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u6743\u8861\u4e4b\u4e0b\uff0c\u6837\u5f0f\u4f7f\u7528\u4e86\u539f\u7f51\u7ad9\u7684\u76f8\u5bf9\u94fe\u63a5\u5730\u5740\uff0c\u6ca1\u6709\u5b8c\u5168\u7f13\u5b58\u3002\u5f53\u539f\u7f51\u7ad9\u6837\u5f0f\u6587\u4ef6\uff08CSS\uff09\u53d1\u751f\u6539\u53d8\u540e\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5feb\u7167\u7f51\u9875\u6837\u5f0f\u9519\u4e71\u3002")),p("div",{className:"problem"},p("div",{className:"question"},p("a",{href:"#how-to-donation"},"Q: \u600e\u4e48\u53c2\u4e0e\u8d21\u732e\uff1f")),p("div",null,"A:",p("ul",null,p("li",null,"\u529f\u80fd\u652f\u6301\uff1a\u76ee\u524d pagenote \u6709\u7ffb\u8bd1\u9700\u6c42\u3001UI\u8bbe\u8ba1\u9700\u6c42\uff0c\u5ba3\u4f20\u89c6\u9891\u5236\u4f5c\u7b49\uff0c\u5982\u679c\u4f60\u6709\u4ee5\u4e0a\u6280\u80fd\u53ef\u4ee5\u52a0\u5165QQ\u7528\u6237\u7fa4 769094377\uff0c\u53c2\u4e0e\u8d21\u732e\u3002"),p("li",null,"\u5176\u4ed6\uff1a\u5982\u679c\u4f60\u89c9\u5f97pagenote\u5f88\u5927\u7a0b\u5ea6\u4e0a\u5e2e\u52a9\u4e86\u4f60\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9 ",p("button",{onClick:this.showDS.bind(this)},"\u6253\u8d4f"),p("div",null,p("img",{width:300,src:"https://pagenote.logike.cn/qr.png",alt:"\u6253\u8d4f"})))))),p("div",{className:"problem"},p("div",{className:"question"},p("a",{href:"#why-join-us"},"Q: \u52a0\u5165\u7528\u6237\u7fa4\u53ef\u4ee5\u505a\u4ec0\u4e48\uff1f")),p("div",null,"A: \u8fd9\u662f\u4e00\u4e2a\u601d\u60f3\u78b0\u649e\u7684\u5730\u65b9\uff0c\u5982\u679c\u4f60\u6709\u4ec0\u4e48\u5efa\u8bae\u6216\u70b9\u5b50\uff0c\u53ef\u4ee5\u5728\u8fd9\u91cc\u5206\u4eab\uff0c\u4f60\u7684\u60f3\u6cd5\u5f88\u53ef\u80fd\u88ab\u5927\u5bb6\u4e00\u8d77\u9a8c\u8bc1\u5e76\u51fa\u73b0\u5728pagenote\u7684\u529f\u80fd\u4e2d\u3002\u5f53\u7136\u4f5c\u4e3a\u65e9\u671f\u7684pagenote\u7528\u6237\uff0c\u52a0\u5165\u7528\u6237\u7fa4\u53ef\u4ee5\u7b2c\u4e00\u65f6\u95f4\u638c\u63e1\u6700\u65b0\u529f\u80fd\u52a8\u6001\u548c\u4f7f\u7528\u9ad8\u7ea7\u529f\u80fd\u3002")))}}]),n}(c.Component)},"C+bE":function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);e.HeadManagerContext=o},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},KckH:function(t,e,n){var r=n("7eYB");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},T0f4:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},Xuae:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),u=n("i2R6"),i=n("48fX"),a=n("tCBg"),c=n("T0f4"),f=n("mPvQ");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}e.__esModule=!0,e.default=void 0;var l=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(a){i(f,a);var c=s(f);function f(t){var u;return r(this,f),u=c.call(this,t),p&&(e.add(o(u)),n(o(u))),u}return u(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),u(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(l.Component))}},aXxY:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/why",function(){return n("BGza")}])},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},i2R6:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},mPvQ:function(t,e,n){var r=n("5fIB"),o=n("rlHP"),u=n("KckH"),i=n("kG2m");t.exports=function(t){return r(t)||o(t)||u(t)||i()}},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return u}));var o=n("JX7q");function u(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(o.a)(t):e}},qXWd:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},qhzo:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},tCBg:function(t,e,n){var r=n("C+bE"),o=n("qXWd");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}},[["aXxY",0,1,2]]]);