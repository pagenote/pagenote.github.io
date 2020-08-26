webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ranronghua/Desktop/pagenoter/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n // import PageNote from '../lib/pagenote';\n\n\n\nvar Index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Index, _Component);\n\n  var _super = _createSuper(Index);\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, null, [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                return _context.abrupt(\"return\", {\n                  showFooter: false\n                });\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  function Index(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Index);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var script = document.createElement('script');\n      script.src = '/pagenote.js';\n      document.body.appendChild(script);\n\n      script.onload = function () {\n        var pagenote = new PageNote('pagenote-home', {\n          functionColors: [{\n            icon: '/icons/search.png',\n            bgColor: '#fff',\n            name: 'search',\n            shortcut: 's',\n            onclick: function onclick(e) {\n              var text = pagenote.target ? pagenote.target.text : '';\n\n              if (text) {\n                window.getSelection().removeAllRanges();\n                window.open(\"https://www.baidu.com/s?wd=\".concat(text));\n              }\n            }\n          }]\n        });\n        pagenote.init();\n        setTimeout(function () {\n          var _this2 = this;\n\n          tipUser();\n          this.timer = setInterval(function () {\n            if (pagenote.recordedSteps.length > 1) {\n              clearInterval(_this2.timer);\n            } else {\n              tipUser();\n            }\n          }, 5000);\n        }, 1000);\n\n        function tipUser() {\n          var target = document.getElementById('range');\n          var selection = window.getSelection();\n          var range = document.createRange();\n          range.selectNode(target);\n          selection.addRange(range);\n          var position = target.getBoundingClientRect();\n          pagenote.target.x = position.x + 200;\n          pagenote.target.y = position.y + 20;\n          pagenote.status = pagenote.CONSTANT.WAITING;\n        }\n      };\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        className: \"index-page\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 13\n        }\n      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 17\n        }\n      }, __jsx(\"title\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 21\n        }\n      }, \"\\u5C0F\\u800C\\u7F8E\\u7684\\u7F51\\u9875\\u6807\\u8BB0\\u5DE5\\u5177\")), __jsx(\"section\", {\n        className: \"points fl\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        className: \"point\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 21\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 23\n        }\n      }, __jsx(\"h2\", {\n        id: \"range\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 25\n        }\n      }, \"\\u6536\\u5F55\\u91CD\\u70B9\"), __jsx(\"article\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 25\n        }\n      }, \"PAGENOTE \\u53EA\\u9700\\u8981\\u4E00\\u4E2A\\u7B80\\u5355\\u7684\\u70B9\\u51FB\\uFF0C\\u5373\\u53EF\\u6807\\u8BB0\\u4F60\\u7684\\u91CD\\u70B9\\u3001\\u7F51\\u9875\\u3002\", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 27\n        }\n      }), \"\\u5E76\\u667A\\u80FD\\u5730\\u4FE1\\u606F\\u7BA1\\u7406\\u3001\\u4E66\\u7B7E\\u540C\\u6B65\\u66F4\\u65B0\\u3002\"))), __jsx(\"div\", {\n        className: \"point\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 19\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 21\n        }\n      }, __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 23\n        }\n      }, \"\\u6807\\u6CE8\"), __jsx(\"article\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 23\n        }\n      }, \"PAGENOTE \\u80FD\\u5FEB\\u6377\\u5730\\u4E3A\\u7F51\\u9875\\u6DFB\\u52A0\\u6807\\u6CE8\\u3002\", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 25\n        }\n      }), \"\\u7B14\\u8BB0\\u7559\\u5728\\u7F51\\u9875\\u91CC\\uFF0C\\u968F\\u65F6\\u53EF\\u89C1\\u63D0\\u9192\\u4F60\\u3002\"))), __jsx(\"div\", {\n        className: \"point\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 19\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 21\n        }\n      }, __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 23\n        }\n      }, \"\\u7BA1\\u7406\"), __jsx(\"article\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 23\n        }\n      }, \"\\u9AD8\\u6548\\u5730\\u7BA1\\u7406\\u4F60\\u7684\\u77E5\\u8BC6\\uFF0C\\u62E5\\u6709\\u4F60\\u4E2A\\u4EBA\\u7684\\u77E5\\u8BC6\\u661F\\u7403\\u3002\")))));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Iiwic2hvd0Zvb3RlciIsInByb3BzIiwic3RhdGUiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJvbmxvYWQiLCJwYWdlbm90ZSIsIlBhZ2VOb3RlIiwiZnVuY3Rpb25Db2xvcnMiLCJpY29uIiwiYmdDb2xvciIsIm5hbWUiLCJzaG9ydGN1dCIsIm9uY2xpY2siLCJlIiwidGV4dCIsInRhcmdldCIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsIm9wZW4iLCJpbml0Iiwic2V0VGltZW91dCIsInRpcFVzZXIiLCJ0aW1lciIsInNldEludGVydmFsIiwicmVjb3JkZWRTdGVwcyIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJnZXRFbGVtZW50QnlJZCIsInNlbGVjdGlvbiIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3ROb2RlIiwiYWRkUmFuZ2UiLCJwb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJ5Iiwic3RhdHVzIiwiQ09OU1RBTlQiLCJXQUlUSU5HIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBOztJQUNxQkEsSzs7Ozs7Ozs7Ozs7OztpREFFVjtBQUNMQyw0QkFBVSxFQUFFO0FBRFAsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlQLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQVcsRUFBWDtBQUZlO0FBSWxCOzs7O3dDQUVtQjtBQUNsQixVQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0FGLFlBQU0sQ0FBQ0csR0FBUCxHQUFhLGNBQWI7QUFDQUYsY0FBUSxDQUFDRyxJQUFULENBQWNDLFdBQWQsQ0FBMEJMLE1BQTFCOztBQUNBQSxZQUFNLENBQUNNLE1BQVAsR0FBZ0IsWUFBWTtBQUMxQixZQUFNQyxRQUFRLEdBQUcsSUFBSUMsUUFBSixDQUFhLGVBQWIsRUFBNkI7QUFDNUNDLHdCQUFjLEVBQUMsQ0FDYjtBQUNFQyxnQkFBSSxFQUFDLG1CQURQO0FBRUVDLG1CQUFPLEVBQUMsTUFGVjtBQUdFQyxnQkFBSSxFQUFDLFFBSFA7QUFJRUMsb0JBQVEsRUFBQyxHQUpYO0FBS0VDLG1CQUFPLEVBQUUsaUJBQVVDLENBQVYsRUFBYTtBQUNwQixrQkFBTUMsSUFBSSxHQUFHVCxRQUFRLENBQUNVLE1BQVQsR0FBa0JWLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQkQsSUFBbEMsR0FBeUMsRUFBdEQ7O0FBQ0Esa0JBQUdBLElBQUgsRUFBUTtBQUNORSxzQkFBTSxDQUFDQyxZQUFQLEdBQXNCQyxlQUF0QjtBQUNBRixzQkFBTSxDQUFDRyxJQUFQLHNDQUEwQ0wsSUFBMUM7QUFDRDtBQUNGO0FBWEgsV0FEYTtBQUQ2QixTQUE3QixDQUFqQjtBQWlCQVQsZ0JBQVEsQ0FBQ2UsSUFBVDtBQUNBQyxrQkFBVSxDQUFDLFlBQVk7QUFBQTs7QUFDckJDLGlCQUFPO0FBQ1AsZUFBS0MsS0FBTCxHQUFhQyxXQUFXLENBQUMsWUFBSTtBQUMzQixnQkFBR25CLFFBQVEsQ0FBQ29CLGFBQVQsQ0FBdUJDLE1BQXZCLEdBQThCLENBQWpDLEVBQW1DO0FBQ2pDQywyQkFBYSxDQUFDLE1BQUksQ0FBQ0osS0FBTixDQUFiO0FBQ0QsYUFGRCxNQUVLO0FBQ0hELHFCQUFPO0FBQ1I7QUFDRixXQU51QixFQU10QixJQU5zQixDQUF4QjtBQU9ELFNBVFMsRUFTUixJQVRRLENBQVY7O0FBWUEsaUJBQVNBLE9BQVQsR0FBbUI7QUFDakIsY0FBTVAsTUFBTSxHQUFHaEIsUUFBUSxDQUFDNkIsY0FBVCxDQUF3QixPQUF4QixDQUFmO0FBQ0EsY0FBSUMsU0FBUyxHQUFHYixNQUFNLENBQUNDLFlBQVAsRUFBaEI7QUFDQSxjQUFJYSxLQUFLLEdBQUcvQixRQUFRLENBQUNnQyxXQUFULEVBQVo7QUFDQUQsZUFBSyxDQUFDRSxVQUFOLENBQWlCakIsTUFBakI7QUFDQWMsbUJBQVMsQ0FBQ0ksUUFBVixDQUFtQkgsS0FBbkI7QUFDQSxjQUFNSSxRQUFRLEdBQUduQixNQUFNLENBQUNvQixxQkFBUCxFQUFqQjtBQUNBOUIsa0JBQVEsQ0FBQ1UsTUFBVCxDQUFnQnFCLENBQWhCLEdBQW9CRixRQUFRLENBQUNFLENBQVQsR0FBVyxHQUEvQjtBQUNBL0Isa0JBQVEsQ0FBQ1UsTUFBVCxDQUFnQnNCLENBQWhCLEdBQW9CSCxRQUFRLENBQUNHLENBQVQsR0FBVyxFQUEvQjtBQUNBaEMsa0JBQVEsQ0FBQ2lDLE1BQVQsR0FBa0JqQyxRQUFRLENBQUNrQyxRQUFULENBQWtCQyxPQUFwQztBQUNEO0FBQ0YsT0ExQ0Q7QUEyQ0Q7Ozs2QkFHUTtBQUNMLGFBQ0k7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0VBREosQ0FESixFQUtJO0FBQVMsaUJBQVMsRUFBQyxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLFVBQUUsRUFBQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdLQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixxR0FKRixDQURGLENBREosRUEwQkU7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4RkFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYscUdBSkYsQ0FERixDQTFCRixFQXdDRTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBJQUpGLENBREYsQ0F4Q0YsQ0FMSixDQURKO0FBNkZIOzs7O0VBNUo4QkMsK0MiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vLyBpbXBvcnQgUGFnZU5vdGUgZnJvbSAnLi4vbGliL3BhZ2Vub3RlJztcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd0Zvb3RlcjogZmFsc2UsXG4gICAgfVxuICB9XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuc3JjID0gJy9wYWdlbm90ZS5qcyc7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBwYWdlbm90ZSA9IG5ldyBQYWdlTm90ZSgncGFnZW5vdGUtaG9tZScse1xuICAgICAgICAgIGZ1bmN0aW9uQ29sb3JzOltcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjonL2ljb25zL3NlYXJjaC5wbmcnLFxuICAgICAgICAgICAgICBiZ0NvbG9yOicjZmZmJyxcbiAgICAgICAgICAgICAgbmFtZTonc2VhcmNoJyxcbiAgICAgICAgICAgICAgc2hvcnRjdXQ6J3MnLFxuICAgICAgICAgICAgICBvbmNsaWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBwYWdlbm90ZS50YXJnZXQgPyBwYWdlbm90ZS50YXJnZXQudGV4dCA6ICcnO1xuICAgICAgICAgICAgICAgIGlmKHRleHQpe1xuICAgICAgICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oYGh0dHBzOi8vd3d3LmJhaWR1LmNvbS9zP3dkPSR7dGV4dH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgICAgcGFnZW5vdGUuaW5pdCgpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aXBVc2VyKCk7XG4gICAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICBpZihwYWdlbm90ZS5yZWNvcmRlZFN0ZXBzLmxlbmd0aD4xKXtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICB0aXBVc2VyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSw1MDAwKVxuICAgICAgICB9LDEwMDApO1xuXG5cbiAgICAgICAgZnVuY3Rpb24gdGlwVXNlcigpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZ2UnKTtcbiAgICAgICAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZSh0YXJnZXQpO1xuICAgICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgcGFnZW5vdGUudGFyZ2V0LnggPSBwb3NpdGlvbi54KzIwMDtcbiAgICAgICAgICBwYWdlbm90ZS50YXJnZXQueSA9IHBvc2l0aW9uLnkrMjA7XG4gICAgICAgICAgcGFnZW5vdGUuc3RhdHVzID0gcGFnZW5vdGUuQ09OU1RBTlQuV0FJVElORztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luZGV4LXBhZ2UnPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+5bCP6ICM576O55qE572R6aG15qCH6K6w5bel5YW3PC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BvaW50cyBmbCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb2ludCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBpZD0ncmFuZ2UnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICDmlLblvZXph43ngrlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUEFHRU5PVEUg5Y+q6ZyA6KaB5LiA5Liq566A5Y2V55qE54K55Ye777yM5Y2z5Y+v5qCH6K6w5L2g55qE6YeN54K544CB572R6aG144CCXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIOW5tuaZuuiDveWcsOS/oeaBr+euoeeQhuOAgeS5puetvuWQjOatpeabtOaWsOOAglxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YnIvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YnIvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YnIvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IHN0eWxlPXt7cGFkZGluZzonNDBweCcsZm9udFNpemU6JzE4cHgnLGZvbnRXZWlnaHQ6J2JvbGQnfX0+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgUEFHRU5PVEUqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxici8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxici8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxici8+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPiovfVxuICAgICAgICAgICAgICAgICAgICAgIHsvKiAgLyEqPGltZyBzcmM9XCIvZnVuY3Rpb25zL21hcmsucG5nXCIgYWx0PVwiXCIvPiohLyovfVxuICAgICAgICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb2ludCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAg5qCH5rOoXG4gICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBBR0VOT1RFIOiDveW/q+aNt+WcsOS4uue9kemhtea3u+WKoOagh+azqOOAglxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz7nrJTorrDnlZnlnKjnvZHpobXph4zvvIzpmo/ml7blj6/op4Hmj5DphpLkvaDjgIJcbiAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICB7LyogIDxpbWcgc3JjPVwiL2Z1bmN0aW9ucy9ub3RlLnBuZ1wiIGFsdD1cIlwiLz4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb2ludCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAg566h55CGXG4gICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIOmrmOaViOWcsOeuoeeQhuS9oOeahOefpeivhu+8jOaLpeacieS9oOS4quS6uueahOefpeivhuaYn+eQg+OAglxuICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxkaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKiAgLyEqPGltZyBzcmM9XCJodHRwczovL3d3dy5kaWlnby5jb20vaW1hZ2VzL3Y2L2hvbWVwYWdlL2Fubm90YXRvci5naWZcIiBhbHQ9XCJcIi8+KiEvKi99XG4gICAgICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIHsvKjxzZWN0aW9uIGNsYXNzTmFtZT0ncG9pbnRzIHNsJz4qL31cbiAgICAgICAgICAgICAgICB7LyogIDxkaXYgY2xhc3NOYW1lPSdwb2ludCc+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgIDxkaXY+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgPGgyPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAg5qCH5rOoKi99XG4gICAgICAgICAgICAgICAgey8qICAgICAgPC9oMj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICA8YXJ0aWNsZT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIFBBR0VOT1RFIOiDveW/q+aNt+WcsOS4uue9kemhtea3u+WKoOagh+azqOOAgiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGJyLz7nrJTorrDnlZnlnKjnvZHpobXph4zvvIzpmo/ml7blj6/op4Hmj5DphpLkvaDjgIIqL31cbiAgICAgICAgICAgICAgICB7LyogICAgICA8L2FydGljbGU+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAvISo8ZGl2PiohLyovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAvISogIDxpbWcgc3JjPVwiL2Z1bmN0aW9ucy9ub3RlLnBuZ1wiIGFsdD1cIlwiLz4qIS8qL31cbiAgICAgICAgICAgICAgICB7LyogICAgLyEqPC9kaXY+KiEvKi99XG4gICAgICAgICAgICAgICAgey8qICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8L3NlY3Rpb24+Ki99XG4gICAgICAgICAgICAgICAgey8qPHNlY3Rpb24gY2xhc3NOYW1lPSdwb2ludHMgZmwnPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgPGRpdiBjbGFzc05hbWU9J3BvaW50Jz4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPGRpdj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICA8aDI+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICDnrqHnkIYqL31cbiAgICAgICAgICAgICAgICB7LyogICAgICA8L2gyPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgIDxhcnRpY2xlPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAg6auY5pWI5Zyw566h55CG5L2g55qE55+l6K+G77yM5oul5pyJ5L2g5Liq5Lq655qE55+l6K+G5pif55CD44CCKi99XG4gICAgICAgICAgICAgICAgey8qICAgICAgPC9hcnRpY2xlPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgLyEqPGRpdj4qIS8qL31cbiAgICAgICAgICAgICAgICB7LyogICAgLyEqICAvISo8aW1nIHNyYz1cImh0dHBzOi8vd3d3LmRpaWdvLmNvbS9pbWFnZXMvdjYvaG9tZXBhZ2UvYW5ub3RhdG9yLmdpZlwiIGFsdD1cIlwiLz4qIS8qIS8qL31cbiAgICAgICAgICAgICAgICB7LyogICAgLyEqPC9kaXY+KiEvKi99XG4gICAgICAgICAgICAgICAgey8qICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8L3NlY3Rpb24+Ki99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})