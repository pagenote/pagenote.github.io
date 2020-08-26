webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ranronghua/Desktop/pagenoter/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n // import PageNote from '../lib/pagenote';\n\n\n\nvar Index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Index, _Component);\n\n  var _super = _createSuper(Index);\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, null, [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                return _context.abrupt(\"return\", {\n                  showFooter: false\n                });\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  function Index(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Index);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var script = document.createElement('script');\n      script.src = '/pagenote.js';\n      document.body.appendChild(script);\n\n      script.onload = function () {\n        var pagenote = new PageNote('pagenote-home', {\n          functionColors: [{\n            icon: '/icons/search.png',\n            bgColor: '#fff',\n            name: 'search',\n            shortcut: 's',\n            onclick: function onclick(e) {\n              var text = pagenote.target ? pagenote.target.text : '';\n\n              if (text) {\n                window.getSelection().removeAllRanges();\n                window.open(\"https://www.baidu.com/s?wd=\".concat(text));\n              }\n            }\n          }]\n        });\n        pagenote.init();\n        setTimeout(function () {\n          var target = document.getElementById('range'); // const range1 = document.createRange();\n          // range1.setStart(target, 0);\n          // range1.setEnd(target, 1);\n\n          var selection = window.getSelection();\n          var range = document.createRange();\n          range.selectNode(target);\n          selection.addRange(range);\n        }, 1000);\n      };\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        className: \"index-page\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }\n      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 17\n        }\n      }, __jsx(\"title\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }\n      }, \"\\u5C0F\\u800C\\u7F8E\\u7684\\u7F51\\u9875\\u6807\\u8BB0\\u5DE5\\u5177\")), __jsx(\"section\", {\n        className: \"points fl\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        className: \"point\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 23\n        }\n      }, __jsx(\"h2\", {\n        id: \"range\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 25\n        }\n      }, \"\\u6536\\u5F55\\u91CD\\u70B9\"), __jsx(\"article\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 25\n        }\n      }, \"PAGENOTE \\u53EA\\u9700\\u8981\\u4E00\\u4E2A\\u7B80\\u5355\\u7684\\u70B9\\u51FB\\uFF0C\\u5373\\u53EF\\u6807\\u8BB0\\u4F60\\u7684\\u91CD\\u70B9\\u3001\\u7F51\\u9875\\u3002\", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 27\n        }\n      }), \"\\u5E76\\u667A\\u80FD\\u5730\\u4FE1\\u606F\\u7BA1\\u7406\\u3001\\u4E66\\u7B7E\\u540C\\u6B65\\u66F4\\u65B0\\u3002\")))), __jsx(\"section\", {\n        className: \"points sl\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        className: \"point\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 19\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 21\n        }\n      }, __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 23\n        }\n      }, \"\\u6807\\u6CE8\"), __jsx(\"article\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 23\n        }\n      }, \"PAGENOTE \\u80FD\\u5FEB\\u6377\\u5730\\u4E3A\\u7F51\\u9875\\u6DFB\\u52A0\\u6807\\u6CE8\\u3002\", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 25\n        }\n      }), \"\\u7B14\\u8BB0\\u7559\\u5728\\u7F51\\u9875\\u91CC\\uFF0C\\u968F\\u65F6\\u53EF\\u89C1\\u63D0\\u9192\\u4F60\\u3002\")))), __jsx(\"section\", {\n        className: \"points fl\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        className: \"point\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 19\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 21\n        }\n      }, __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 23\n        }\n      }, \"\\u7BA1\\u7406\"), __jsx(\"article\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 23\n        }\n      }, \"\\u9AD8\\u6548\\u5730\\u7BA1\\u7406\\u4F60\\u7684\\u77E5\\u8BC6\\uFF0C\\u62E5\\u6709\\u4F60\\u4E2A\\u4EBA\\u7684\\u77E5\\u8BC6\\u661F\\u7403\\u3002\")))));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Iiwic2hvd0Zvb3RlciIsInByb3BzIiwic3RhdGUiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJvbmxvYWQiLCJwYWdlbm90ZSIsIlBhZ2VOb3RlIiwiZnVuY3Rpb25Db2xvcnMiLCJpY29uIiwiYmdDb2xvciIsIm5hbWUiLCJzaG9ydGN1dCIsIm9uY2xpY2siLCJlIiwidGV4dCIsInRhcmdldCIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsIm9wZW4iLCJpbml0Iiwic2V0VGltZW91dCIsImdldEVsZW1lbnRCeUlkIiwic2VsZWN0aW9uIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGUiLCJhZGRSYW5nZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7aURBRVY7QUFDTEMsNEJBQVUsRUFBRTtBQURQLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUCxpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFXLEVBQVg7QUFGZTtBQUlsQjs7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBRixZQUFNLENBQUNHLEdBQVAsR0FBYSxjQUFiO0FBQ0FGLGNBQVEsQ0FBQ0csSUFBVCxDQUFjQyxXQUFkLENBQTBCTCxNQUExQjs7QUFDQUEsWUFBTSxDQUFDTSxNQUFQLEdBQWdCLFlBQVk7QUFDMUIsWUFBTUMsUUFBUSxHQUFHLElBQUlDLFFBQUosQ0FBYSxlQUFiLEVBQTZCO0FBQzVDQyx3QkFBYyxFQUFD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LCtDIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy8gaW1wb3J0IFBhZ2VOb3RlIGZyb20gJy4uL2xpYi9wYWdlbm90ZSc7XG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zY3NzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnR7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxuICAgIH1cbiAgfVxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LnNyYyA9ICcvcGFnZW5vdGUuanMnO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgcGFnZW5vdGUgPSBuZXcgUGFnZU5vdGUoJ3BhZ2Vub3RlLWhvbWUnLHtcbiAgICAgICAgICBmdW5jdGlvbkNvbG9yczpbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246Jy9pY29ucy9zZWFyY2gucG5nJyxcbiAgICAgICAgICAgICAgYmdDb2xvcjonI2ZmZicsXG4gICAgICAgICAgICAgIG5hbWU6J3NlYXJjaCcsXG4gICAgICAgICAgICAgIHNob3J0Y3V0OidzJyxcbiAgICAgICAgICAgICAgb25jbGljazogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gcGFnZW5vdGUudGFyZ2V0ID8gcGFnZW5vdGUudGFyZ2V0LnRleHQgOiAnJztcbiAgICAgICAgICAgICAgICBpZih0ZXh0KXtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGBodHRwczovL3d3dy5iYWlkdS5jb20vcz93ZD0ke3RleHR9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgICAgIHBhZ2Vub3RlLmluaXQoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5nZScpO1xuICAgICAgICAgIC8vIGNvbnN0IHJhbmdlMSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgLy8gcmFuZ2UxLnNldFN0YXJ0KHRhcmdldCwgMCk7XG4gICAgICAgICAgLy8gcmFuZ2UxLnNldEVuZCh0YXJnZXQsIDEpO1xuICAgICAgICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuICAgICAgICAgIHJhbmdlLnNlbGVjdE5vZGUodGFyZ2V0KTtcbiAgICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgICAgICB9LDEwMDApXG4gICAgICB9XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5kZXgtcGFnZSc+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT7lsI/ogIznvo7nmoTnvZHpobXmoIforrDlt6Xlhbc8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncG9pbnRzIGZsJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BvaW50Jz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGlkPSdyYW5nZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIOaUtuW9lemHjeeCuVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBQQUdFTk9URSDlj6rpnIDopoHkuIDkuKrnroDljZXnmoTngrnlh7vvvIzljbPlj6/moIforrDkvaDnmoTph43ngrnjgIHnvZHpobXjgIJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAg5bm25pm66IO95Zyw5L+h5oGv566h55CG44CB5Lmm562+5ZCM5q2l5pu05paw44CCXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxici8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxici8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxici8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgc3R5bGU9e3twYWRkaW5nOic0MHB4Jyxmb250U2l6ZTonMThweCcsZm9udFdlaWdodDonYm9sZCd9fT4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICBQQUdFTk9URSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGJyLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGJyLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGJyLz4qL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgey8qICA8aW1nIHNyYz1cIi9mdW5jdGlvbnMvbWFyay5wbmdcIiBhbHQ9XCJcIi8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BvaW50cyBzbCc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9pbnQnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOagh+azqFxuICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICBQQUdFTk9URSDog73lv6vmjbflnLDkuLrnvZHpobXmt7vliqDmoIfms6jjgIJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+56yU6K6w55WZ5Zyo572R6aG16YeM77yM6ZqP5pe25Y+v6KeB5o+Q6YaS5L2g44CCXG4gICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qPGRpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qICA8aW1nIHNyYz1cIi9mdW5jdGlvbnMvbm90ZS5wbmdcIiBhbHQ9XCJcIi8+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncG9pbnRzIGZsJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb2ludCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAg566h55CGXG4gICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIOmrmOaViOWcsOeuoeeQhuS9oOeahOefpeivhu+8jOaLpeacieS9oOS4quS6uueahOefpeivhuaYn+eQg+OAglxuICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxkaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKiAgLyEqPGltZyBzcmM9XCJodHRwczovL3d3dy5kaWlnby5jb20vaW1hZ2VzL3Y2L2hvbWVwYWdlL2Fubm90YXRvci5naWZcIiBhbHQ9XCJcIi8+KiEvKi99XG4gICAgICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})