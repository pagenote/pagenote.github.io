webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ranronghua/Desktop/pagenoter/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n // import PageNote from '../lib/pagenote';\n\n\n\nvar Index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Index, _Component);\n\n  var _super = _createSuper(Index);\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, null, [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                return _context.abrupt(\"return\", {\n                  showFooter: false\n                });\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  function Index(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Index);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var script = document.createElement('script');\n      script.src = '/pagenote.js';\n      document.body.appendChild(script);\n\n      script.onload = function () {\n        var pagenote = new PageNote('pagenote-home', {\n          functionColors: [{\n            icon: '/icons/search.png',\n            bgColor: '#fff',\n            name: 'search',\n            shortcut: 's',\n            onclick: function onclick(e) {\n              var text = pagenote.target ? pagenote.target.text : '';\n\n              if (text) {\n                window.getSelection().removeAllRanges();\n                window.open(\"https://www.baidu.com/s?wd=\".concat(text));\n              }\n            }\n          }]\n        });\n        pagenote.init();\n        setTimeout(function () {\n          var _this2 = this;\n\n          tipUser();\n          this.timer = setInterval(function () {\n            if (pagenote.recordedSteps.length > 1) {\n              clearInterval(_this2.timer);\n              return;\n            }\n          }, 3000);\n        }, 1000);\n\n        function tipUser() {\n          var target = document.getElementById('range'); // const range1 = document.createRange();\n          // range1.setStart(target, 0);\n          // range1.setEnd(target, 1);\n\n          var selection = window.getSelection();\n          var range = document.createRange();\n          range.selectNode(target);\n          selection.addRange(range);\n          var position = target.getBoundingClientRect();\n          pagenote.target.x = position.x + target.clientWidth;\n          pagenote.target.y = position.y + target.clientHeight;\n          pagenote.status = pagenote.CONSTANT.WAITING;\n        }\n      };\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        className: \"index-page\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 13\n        }\n      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 17\n        }\n      }, __jsx(\"title\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }\n      }, \"\\u5C0F\\u800C\\u7F8E\\u7684\\u7F51\\u9875\\u6807\\u8BB0\\u5DE5\\u5177\")), __jsx(\"section\", {\n        className: \"points fl\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        className: \"point\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 21\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 23\n        }\n      }, __jsx(\"h2\", {\n        id: \"range\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 25\n        }\n      }, \"\\u6536\\u5F55\\u91CD\\u70B9\"), __jsx(\"article\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 25\n        }\n      }, \"PAGENOTE \\u53EA\\u9700\\u8981\\u4E00\\u4E2A\\u7B80\\u5355\\u7684\\u70B9\\u51FB\\uFF0C\\u5373\\u53EF\\u6807\\u8BB0\\u4F60\\u7684\\u91CD\\u70B9\\u3001\\u7F51\\u9875\\u3002\", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 27\n        }\n      }), \"\\u5E76\\u667A\\u80FD\\u5730\\u4FE1\\u606F\\u7BA1\\u7406\\u3001\\u4E66\\u7B7E\\u540C\\u6B65\\u66F4\\u65B0\\u3002\")))), __jsx(\"section\", {\n        className: \"points sl\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        className: \"point\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 19\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 21\n        }\n      }, __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 23\n        }\n      }, \"\\u6807\\u6CE8\"), __jsx(\"article\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 23\n        }\n      }, \"PAGENOTE \\u80FD\\u5FEB\\u6377\\u5730\\u4E3A\\u7F51\\u9875\\u6DFB\\u52A0\\u6807\\u6CE8\\u3002\", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 25\n        }\n      }), \"\\u7B14\\u8BB0\\u7559\\u5728\\u7F51\\u9875\\u91CC\\uFF0C\\u968F\\u65F6\\u53EF\\u89C1\\u63D0\\u9192\\u4F60\\u3002\")))), __jsx(\"section\", {\n        className: \"points fl\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        className: \"point\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 19\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 21\n        }\n      }, __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 23\n        }\n      }, \"\\u7BA1\\u7406\"), __jsx(\"article\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 23\n        }\n      }, \"\\u9AD8\\u6548\\u5730\\u7BA1\\u7406\\u4F60\\u7684\\u77E5\\u8BC6\\uFF0C\\u62E5\\u6709\\u4F60\\u4E2A\\u4EBA\\u7684\\u77E5\\u8BC6\\u661F\\u7403\\u3002\")))));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Iiwic2hvd0Zvb3RlciIsInByb3BzIiwic3RhdGUiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJvbmxvYWQiLCJwYWdlbm90ZSIsIlBhZ2VOb3RlIiwiZnVuY3Rpb25Db2xvcnMiLCJpY29uIiwiYmdDb2xvciIsIm5hbWUiLCJzaG9ydGN1dCIsIm9uY2xpY2siLCJlIiwidGV4dCIsInRhcmdldCIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsIm9wZW4iLCJpbml0Iiwic2V0VGltZW91dCIsInRpcFVzZXIiLCJ0aW1lciIsInNldEludGVydmFsIiwicmVjb3JkZWRTdGVwcyIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJnZXRFbGVtZW50QnlJZCIsInNlbGVjdGlvbiIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3ROb2RlIiwiYWRkUmFuZ2UiLCJwb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJjbGllbnRXaWR0aCIsInkiLCJjbGllbnRIZWlnaHQiLCJzdGF0dXMiLCJDT05TVEFOVCIsIldBSVRJTkciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7O2lEQUVWO0FBQ0xDLDRCQUFVLEVBQUU7QUFEUCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVAsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBVyxFQUFYO0FBRmU7QUFJbEI7Ozs7d0NBRW1CO0FBQ2xCLFVBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFD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QUE7QUFBQSxnS0FFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYscUdBSkYsQ0FERixDQURKLENBTEosRUFnQ0k7QUFBUyxpQkFBUyxFQUFDLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhGQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixxR0FKRixDQURGLENBREYsQ0FoQ0osRUFnREk7QUFBUyxpQkFBUyxFQUFDLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBJQUpGLENBREYsQ0FERixDQWhESixDQURKO0FBa0VIOzs7O0VBcEk4QkMsK0MiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vLyBpbXBvcnQgUGFnZU5vdGUgZnJvbSAnLi4vbGliL3BhZ2Vub3RlJztcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXG4gICAgfVxuICB9XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuc3JjID0gJy9wYWdlbm90ZS5qcyc7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBwYWdlbm90ZSA9IG5ldyBQYWdlTm90ZSgncGFnZW5vdGUtaG9tZScse1xuICAgICAgICAgIGZ1bmN0aW9uQ29sb3JzOltcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjonL2ljb25zL3NlYXJjaC5wbmcnLFxuICAgICAgICAgICAgICBiZ0NvbG9yOicjZmZmJyxcbiAgICAgICAgICAgICAgbmFtZTonc2VhcmNoJyxcbiAgICAgICAgICAgICAgc2hvcnRjdXQ6J3MnLFxuICAgICAgICAgICAgICBvbmNsaWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBwYWdlbm90ZS50YXJnZXQgPyBwYWdlbm90ZS50YXJnZXQudGV4dCA6ICcnO1xuICAgICAgICAgICAgICAgIGlmKHRleHQpe1xuICAgICAgICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oYGh0dHBzOi8vd3d3LmJhaWR1LmNvbS9zP3dkPSR7dGV4dH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgICAgcGFnZW5vdGUuaW5pdCgpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aXBVc2VyKCk7XG4gICAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICBpZihwYWdlbm90ZS5yZWNvcmRlZFN0ZXBzLmxlbmd0aD4xKXtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sMzAwMClcbiAgICAgICAgfSwxMDAwKTtcblxuXG4gICAgICAgIGZ1bmN0aW9uIHRpcFVzZXIoKSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmdlJyk7XG4gICAgICAgICAgLy8gY29uc3QgcmFuZ2UxID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgICAvLyByYW5nZTEuc2V0U3RhcnQodGFyZ2V0LCAwKTtcbiAgICAgICAgICAvLyByYW5nZTEuc2V0RW5kKHRhcmdldCwgMSk7XG4gICAgICAgICAgbGV0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuXG4gICAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZSh0YXJnZXQpO1xuICAgICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgcGFnZW5vdGUudGFyZ2V0LnggPSBwb3NpdGlvbi54K3RhcmdldC5jbGllbnRXaWR0aDtcbiAgICAgICAgICBwYWdlbm90ZS50YXJnZXQueSA9IHBvc2l0aW9uLnkrdGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICAgICAgICBwYWdlbm90ZS5zdGF0dXMgPSBwYWdlbm90ZS5DT05TVEFOVC5XQUlUSU5HO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5kZXgtcGFnZSc+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT7lsI/ogIznvo7nmoTnvZHpobXmoIforrDlt6Xlhbc8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncG9pbnRzIGZsJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BvaW50Jz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGlkPSdyYW5nZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIOaUtuW9lemHjeeCuVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBQQUdFTk9URSDlj6rpnIDopoHkuIDkuKrnroDljZXnmoTngrnlh7vvvIzljbPlj6/moIforrDkvaDnmoTph43ngrnjgIHnvZHpobXjgIJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAg5bm25pm66IO95Zyw5L+h5oGv566h55CG44CB5Lmm562+5ZCM5q2l5pu05paw44CCXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxici8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxici8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxici8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgc3R5bGU9e3twYWRkaW5nOic0MHB4Jyxmb250U2l6ZTonMThweCcsZm9udFdlaWdodDonYm9sZCd9fT4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICBQQUdFTk9URSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGJyLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGJyLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGJyLz4qL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgey8qICA8aW1nIHNyYz1cIi9mdW5jdGlvbnMvbWFyay5wbmdcIiBhbHQ9XCJcIi8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BvaW50cyBzbCc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9pbnQnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOagh+azqFxuICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICBQQUdFTk9URSDog73lv6vmjbflnLDkuLrnvZHpobXmt7vliqDmoIfms6jjgIJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+56yU6K6w55WZ5Zyo572R6aG16YeM77yM6ZqP5pe25Y+v6KeB5o+Q6YaS5L2g44CCXG4gICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qPGRpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qICA8aW1nIHNyYz1cIi9mdW5jdGlvbnMvbm90ZS5wbmdcIiBhbHQ9XCJcIi8+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncG9pbnRzIGZsJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb2ludCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAg566h55CGXG4gICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIOmrmOaViOWcsOeuoeeQhuS9oOeahOefpeivhu+8jOaLpeacieS9oOS4quS6uueahOefpeivhuaYn+eQg+OAglxuICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxkaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKiAgLyEqPGltZyBzcmM9XCJodHRwczovL3d3dy5kaWlnby5jb20vaW1hZ2VzL3Y2L2hvbWVwYWdlL2Fubm90YXRvci5naWZcIiBhbHQ9XCJcIi8+KiEvKi99XG4gICAgICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})