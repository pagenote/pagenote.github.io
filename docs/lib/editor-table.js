!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Table=e():t.Table=e()}(window,(function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=3)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=function(t,e){var o,n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(o=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),s=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[n].concat(s).concat([r]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o})).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),e.push(s))}},e}},function(t,e,o){var n,i,r={},s=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=n.apply(this,arguments)),i}),l=function(t){var e={};return function(t,o){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),a=null,c=0,h=[],d=o(6);function u(t,e){for(var o=0;o<t.length;o++){var n=t[o],i=r[n.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](n.parts[s]);for(;s<n.parts.length;s++)i.parts.push(g(n.parts[s],e))}else{var l=[];for(s=0;s<n.parts.length;s++)l.push(g(n.parts[s],e));r[n.id]={id:n.id,refs:1,parts:l}}}}function f(t,e){for(var o=[],n={},i=0;i<t.length;i++){var r=t[i],s=e.base?r[0]+e.base:r[0],l={css:r[1],media:r[2],sourceMap:r[3]};n[s]?n[s].parts.push(l):o.push(n[s]={id:s,parts:[l]})}return o}function p(t,e){var o=l(t.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=h[h.length-1];if("top"===t.insertAt)n?n.nextSibling?o.insertBefore(e,n.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),h.push(e);else if("bottom"===t.insertAt)o.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=l(t.insertAt.before,o);o.insertBefore(e,i)}}function _(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=h.indexOf(t);e>=0&&h.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=o.nc;n&&(t.attrs.nonce=n)}return v(e,t.attrs),p(t,e),e}function v(t,e){Object.keys(e).forEach((function(o){t.setAttribute(o,e[o])}))}function g(t,e){var o,n,i,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var s=c++;o=a||(a=b(e)),n=w.bind(null,o,s,!1),i=w.bind(null,o,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),p(t,e),e}(e),n=function(t,e,o){var n=o.css,i=o.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(n=d(n)),i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([n],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(s),l&&URL.revokeObjectURL(l)}.bind(null,o,e),i=function(){_(o),o.href&&URL.revokeObjectURL(o.href)}):(o=b(e),n=function(t,e){var o=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}.bind(null,o),i=function(){_(o)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=f(t,e);return u(o,e),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i];(l=r[s.id]).refs--,n.push(l)}for(t&&u(f(t,e),e),i=0;i<n.length;i++){var l;if(0===(l=n[i]).refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete r[l.id]}}}};var m,y=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function w(t,e,o,n){var i=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var r=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}},function(t,e){t.exports='<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#388AE5"></circle><path fill="#FFF" d="M10.9 9.1h3.7a.9.9 0 1 1 0 1.8h-3.7v3.7a.9.9 0 1 1-1.8 0v-3.7H5.4a.9.9 0 0 1 0-1.8h3.7V5.4a.9.9 0 0 1 1.8 0v3.7z"></path></svg>'},function(t,e,o){const n=o(12).TableConstructor,i=o(11);t.exports=class{static get isReadOnlySupported(){return!0}static get enableLineBreaks(){return!0}static get toolbox(){return{icon:i,title:"Table"}}constructor({data:t,config:e,api:o,readOnly:i}){this.api=o,this.readOnly=i,this._tableConstructor=new n(t,e,o,i)}render(){return this._tableConstructor.htmlElement}save(t){const e=[],o=t.querySelector("table").rows;for(let t=0;t<o.length;t++){const n=o[t],i=Array.from(n.cells).map((t=>t.querySelector(".tc-table__inp")));i.every(this._isEmpty)||e.push(i.map((t=>t.innerHTML)))}return{content:e}}_isEmpty(t){return!t.textContent.trim()}}},function(t,e,o){var n=o(5);"string"==typeof n&&(n=[[t.i,n,""]]),o(1)(n,{hmr:!0,transform:void 0,insertInto:void 0}),n.locals&&(t.exports=n.locals)},function(t,e,o){(t.exports=o(0)(!1)).push([t.i,".tc-editor{padding:10px;position:relative;box-sizing:content-box;width:100%;left:-10px}",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,n=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var i,r=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:n+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(t,e,o){var n=o(8);"string"==typeof n&&(n=[[t.i,n,""]]),o(1)(n,{hmr:!0,transform:void 0,insertInto:void 0}),n.locals&&(t.exports=n.locals)},function(t,e,o){(t.exports=o(0)(!1)).push([t.i,".tc-toolbar{background:#368be6;}.tc-toolbar--hidden{visibility:hidden}.tc-toolbar--hor{width:100%;height:21px;flex-direction:row;left:0;top:1px}.tc-toolbar--hor,.tc-toolbar--ver{display:flex;align-items:center;position:absolute;z-index:100}.tc-toolbar--ver{height:100%;width:21px;flex-direction:column;top:0;left:-1px}.tc-toolbar__plus{height:21px;width:21px;margin-top:0;}.tc-toolbar__plus--hor{margin-left:-10px}.tc-toolbar__plus--ver{margin-top:-10px}.tc-toolbar__shine-line--hor{min-height:1px;width:100%}.tc-toolbar__shine-line--ver{min-width:1px;height:100%}",""])},function(t,e,o){var n=o(10);"string"==typeof n&&(n=[[t.i,n,""]]),o(1)(n,{hmr:!0,transform:void 0,insertInto:void 0}),n.locals&&(t.exports=n.locals)},function(t,e,o){(t.exports=o(0)(!1)).push([t.i,".tc-table{width:100%;height:100%;border-collapse:collapse;table-layout:fixed;}.tc-table__wrap{border:1px solid #dbdbe2;border-radius:3px;position:relative;height:100%;width:100%;box-sizing:border-box}.tc-table__cell{border:1px solid #dbdbe2;padding:0;vertical-align:top}.tc-table__area{padding:10px;height:100%}.tc-table__inp{outline:none;flex-grow:100;min-height:1.5em;height:100%;overflow:hidden}.tc-table tbody tr:first-child td{border-top:none}.tc-table tbody tr:last-child td{border-bottom:none}.tc-table tbody tr td:last-child{border-right:none}.tc-table tbody tr td:first-child{border-left:none}",""])},function(t,e){t.exports='<svg width="18" height="14"><path d="M2.833 8v1.95a1.7 1.7 0 0 0 1.7 1.7h3.45V8h-5.15zm0-2h5.15V2.35h-3.45a1.7 1.7 0 0 0-1.7 1.7V6zm12.3 2h-5.15v3.65h3.45a1.7 1.7 0 0 0 1.7-1.7V8zm0-2V4.05a1.7 1.7 0 0 0-1.7-1.7h-3.45V6h5.15zM4.533.1h8.9a3.95 3.95 0 0 1 3.95 3.95v5.9a3.95 3.95 0 0 1-3.95 3.95h-8.9a3.95 3.95 0 0 1-3.95-3.95v-5.9A3.95 3.95 0 0 1 4.533.1z"></path></svg>'},function(t,e,o){"use strict";function n(t){return!(null==t)}function i(t,e=null,o=null,i=null){const r=document.createElement(t);if(n(e))for(let t=0;t<e.length;t++)n(e[t])&&r.classList.add(e[t]);if(n(o))for(let t in o)r.setAttribute(t,o[t]);if(n(i))for(let t=0;t<i.length;t++)n(i[t])&&r.appendChild(i[t]);return r}function r(t){const e=t.getBoundingClientRect();return{y1:Math.floor(e.top+window.pageYOffset),x1:Math.floor(e.left+window.pageXOffset),x2:Math.floor(e.right+window.pageXOffset),y2:Math.floor(e.bottom+window.pageYOffset)}}function s(t,e,o){let n;return e-t.x1>=-1&&e-t.x1<=11&&(n="left"),t.x2-e>=-1&&t.x2-e<=11&&(n="right"),o-t.y1>=-1&&o-t.y1<=11&&(n="top"),t.y2-o>=-1&&t.y2-o<=11&&(n="bottom"),n}o.r(e),o(4),o(7);var l=o(2),a=o.n(l);const c="tc-toolbar--hidden";class h{constructor(){this._plusButton=this._generatePlusButton(),this._highlightingLine=this._generateHighlightingLine(),this._toolbar=this._generateToolBar([this._plusButton,this._highlightingLine])}hide(){this._toolbar.classList.add(c)}show(){this._toolbar.classList.remove(c),this._highlightingLine.classList.remove(c)}hideLine(){this._highlightingLine.classList.add(c)}get htmlElement(){return this._toolbar}_generatePlusButton(){const t=i("div",["tc-toolbar__plus"]);return t.innerHTML=a.a,t.addEventListener("click",(t=>{t.stopPropagation();const e=new CustomEvent("click",{detail:{x:t.pageX,y:t.pageY},bubbles:!0});this._toolbar.dispatchEvent(e)})),t}_generateHighlightingLine(){const t=i("div",["tc-toolbar"]);return t.addEventListener("click",(t=>{t.stopPropagation();const e=new CustomEvent("click",{bubbles:!0});this._toolbar.dispatchEvent(e)})),t}_generateToolBar(t){const e=i("div",[c],null,t);return e.addEventListener("mouseleave",(t=>{this._recalcMousePos(t)})),e}_recalcMousePos(t){this.hide();const e=document.elementFromPoint(t.pageX,t.pageY);if(null!==e&&e.classList.contains("tc-table__area")){const o=new MouseEvent("mouseover",{clientX:t.pageX,clientY:t.pageY});e.dispatchEvent(o)}}}class d extends h{constructor(){super(),this._toolbar.classList.add("tc-toolbar--hor"),this._plusButton.classList.add("tc-toolbar__plus--hor"),this._highlightingLine.classList.add("tc-toolbar__shine-line--hor")}showIn(t){const e=Math.floor(Number.parseInt(window.getComputedStyle(this._toolbar).height)/2);this._toolbar.style.top=t-e+"px",this.show()}}class u extends h{constructor(){super(),this._toolbar.classList.add("tc-toolbar--ver"),this._plusButton.classList.add("tc-toolbar__plus--ver"),this._highlightingLine.classList.add("tc-toolbar__shine-line--ver")}showIn(t){const e=Math.floor(Number.parseInt(window.getComputedStyle(this._toolbar).width)/2);this._toolbar.style.left=t-e+"px",this.show()}}o(9);const f="tc-table__inp",p="tc-table__cell",_="tc-table__area";class b{constructor(t){this.readOnly=t,this._numberOfColumns=0,this._numberOfRows=0,this._element=this._createTableWrapper(),this._table=this._element.querySelector("table"),this.readOnly||this._hangEvents()}addColumn(t=-1){this._numberOfColumns++;const e=this._table.rows;for(let o=0;o<e.length;o++){const n=e[o].insertCell(t);this._fillCell(n)}}addRow(t=-1){this._numberOfRows++;const e=this._table.insertRow(t);return this._fillRow(e),e}get htmlElement(){return this._element}get body(){return this._table}get selectedCell(){return this._selectedCell}_createTableWrapper(){return i("div",["tc-table__wrap"],null,[i("table",["tc-table"])])}_createContenteditableArea(){return i("div",[f],{contenteditable:!this.readOnly})}_fillCell(t){t.classList.add(p);const e=this._createContenteditableArea();t.appendChild(i("div",[_],null,[e]))}_fillRow(t){for(let e=0;e<this._numberOfColumns;e++){const e=t.insertCell();this._fillCell(e)}}_hangEvents(){this._table.addEventListener("focus",(t=>{this._focusEditField(t)}),!0),this._table.addEventListener("blur",(t=>{this._blurEditField(t)}),!0),this._table.addEventListener("keydown",(t=>{this._pressedEnterInEditField(t)})),this._table.addEventListener("click",(t=>{this._clickedOnCell(t)})),this._table.addEventListener("mouseover",(t=>{this._mouseEnterInDetectArea(t),t.stopPropagation()}),!0)}_focusEditField(t){t.target.classList.contains(f)&&(this._selectedCell=t.target.closest("."+p))}_blurEditField(t){t.target.classList.contains(f)&&(this._selectedCell=null)}_pressedEnterInEditField(t){t.target.classList.contains(f)&&(13!==t.keyCode||t.shiftKey||t.preventDefault())}_clickedOnCell(t){t.target.classList.contains(p)&&t.target.querySelector(".tc-table__inp").focus()}_mouseEnterInDetectArea(t){if(!t.target.classList.contains(_))return;const e=s(r(t.target.closest("TD")),t.pageX,t.pageY);t.target.dispatchEvent(new CustomEvent("mouseInActivatingArea",{detail:{side:e},bubbles:!0}))}}o.d(e,"TableConstructor",(function(){return v}));class v{constructor(t,e,o,n){this.readOnly=n,this._table=new b(n);const r=this._resizeTable(t,e);this._fillTable(t,r),this._container=i("div",["tc-editor",o.styles.block],null,[this._table.htmlElement]),this._verticalToolBar=new u,this._horizontalToolBar=new d,this._table.htmlElement.appendChild(this._horizontalToolBar.htmlElement),this._table.htmlElement.appendChild(this._verticalToolBar.htmlElement),this._hoveredCell=null,this._activatedToolBar=null,this._hoveredCellSide=null,this._plusButDelay=null,this._toolbarShowDelay=null,this.readOnly||this._hangEvents()}get htmlElement(){return this._container}_fillTable(t,e){if(void 0!==t.content)for(let o=0;o<e.rows&&o<t.content.length;o++)for(let n=0;n<e.cols&&n<t.content[o].length;n++)this._table.body.rows[o].cells[n].querySelector(".tc-table__inp").innerHTML=t.content[o][n]}_resizeTable(t,e){const o=Array.isArray(t.content),n=!!o&&t.content.length,i=o?t.content.length:void 0,r=n?t.content[0].length:void 0,s=Number.parseInt(e.rows),l=Number.parseInt(e.cols),a=!isNaN(s)&&s>0?s:void 0,c=!isNaN(l)&&l>0?l:void 0,h=i||a||2,d=r||c||2;for(let t=0;t<h;t++)this._table.addRow();for(let t=0;t<d;t++)this._table.addColumn();return{rows:h,cols:d}}_showToolBar(t,e){this._hideToolBar(),this._activatedToolBar=t,t.showIn(e)}_hideToolBar(){null!==this._activatedToolBar&&this._activatedToolBar.hide()}_hangEvents(){this._container.addEventListener("mouseInActivatingArea",(t=>{this._toolbarCalling(t)})),this._container.addEventListener("click",(t=>{this._clickToolbar(t)})),this._container.addEventListener("input",(()=>{this._hideToolBar()})),this._container.addEventListener("keydown",(t=>{this._containerKeydown(t)})),this._container.addEventListener("mouseout",(t=>{this._leaveDetectArea(t)})),this._container.addEventListener("mouseover",(t=>{this._mouseEnterInDetectArea(t)}))}_mouseInActivatingAreaListener(t){this._hoveredCellSide=t.detail.side;const e=r(t.target),o=r(this._table.htmlElement);if(this._hoveredCell=t.target.closest("TD"),null===this._hoveredCell){const t=11;this._hoveredCell=this._container,e.x1+=t,e.y1+=t,e.x2-=t,e.y2-=t}"top"===this._hoveredCellSide&&this._showToolBar(this._horizontalToolBar,e.y1-o.y1-2),"bottom"===this._hoveredCellSide&&this._showToolBar(this._horizontalToolBar,e.y2-o.y1-1),"left"===this._hoveredCellSide&&this._showToolBar(this._verticalToolBar,e.x1-o.x1-2),"right"===this._hoveredCellSide&&this._showToolBar(this._verticalToolBar,e.x2-o.x1-1)}_isToolbar(t){return!(!t.closest(".tc-toolbar--hor")&&!t.closest(".tc-toolbar--ver"))}_leaveDetectArea(t){this._isToolbar(t.relatedTarget)||(clearTimeout(this._toolbarShowDelay),this._hideToolBar())}_toolbarCalling(t){this._isToolbar(t.target)||(clearTimeout(this._toolbarShowDelay),this._toolbarShowDelay=setTimeout((()=>{this._mouseInActivatingAreaListener(t)}),125))}_clickToolbar(t){if(!this._isToolbar(t.target))return;let e;if(this._activatedToolBar===this._horizontalToolBar?(this._addRow(),e="y"):(this._addColumn(),e="x"),isNaN(t.detail)&&null!==t.detail){const o=r(this._table.htmlElement);let n;n="x"===e?t.detail.x-o.x1:t.detail.y-o.y1,this._delayAddButtonForMultiClickingNearMouse(n)}else this._hideToolBar()}_containerKeydown(t){13===t.keyCode&&this._containerEnterPressed(t)}_delayAddButtonForMultiClickingNearMouse(t){this._showToolBar(this._activatedToolBar,t),this._activatedToolBar.hideLine(),clearTimeout(this._plusButDelay),this._plusButDelay=setTimeout((()=>{this._hideToolBar()}),500)}_getHoveredSideOfContainer(){return this._hoveredCell===this._container?this._isBottomOrRight()?0:-1:1}_isBottomOrRight(){return"bottom"===this._hoveredCellSide||"right"===this._hoveredCellSide}_addRow(){const t=this._hoveredCell.closest("TR");let e=this._getHoveredSideOfContainer();1===e&&(e=t.sectionRowIndex,e+=this._isBottomOrRight()),this._table.addRow(e)}_addColumn(){let t=this._getHoveredSideOfContainer();1===t&&(t=this._hoveredCell.cellIndex,t+=this._isBottomOrRight()),this._table.addColumn(t)}_containerEnterPressed(t){if(null===this._table.selectedCell||t.shiftKey)return;const e=this._table.selectedCell.closest("TR");let o=this._getHoveredSideOfContainer();1===o&&(o=e.sectionRowIndex+1),this._table.addRow(o).cells[0].click()}_mouseEnterInDetectArea(t){let e=s(r(this._container),t.pageX,t.pageY);t.target.dispatchEvent(new CustomEvent("mouseInActivatingArea",{detail:{side:e},bubbles:!0}))}}}])}));