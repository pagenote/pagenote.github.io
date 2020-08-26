webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ranronghua/Desktop/pagenoter/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n // import PageNote from '../lib/pagenote';\n\n\n\nvar Index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Index, _Component);\n\n  var _super = _createSuper(Index);\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, null, [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                return _context.abrupt(\"return\", {\n                  showFooter: false\n                });\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  function Index(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Index);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var script = document.createElement('script');\n      script.src = '/pagenote.js';\n      document.body.appendChild(script);\n\n      script.onload = function () {\n        var pagenote = new PageNote('pagenote-home', {\n          functionColors: [{\n            icon: '/icons/search.png',\n            bgColor: '#fff',\n            name: 'search',\n            shortcut: 's',\n            onclick: function onclick(e) {\n              var text = pagenote.target ? pagenote.target.text : '';\n\n              if (text) {\n                window.getSelection().removeAllRanges();\n                window.open(\"https://www.baidu.com/s?wd=\".concat(text));\n              }\n            }\n          }]\n        });\n        pagenote.init();\n        setTimeout(function () {\n          var target = document.getElementById('range'); // const range1 = document.createRange();\n          // range1.setStart(target, 0);\n          // range1.setEnd(target, 1);\n\n          var selection = window.getSelection();\n          var range = document.createRange();\n          range.selectNode(target);\n          range.setStart(target, 0);\n          range.setEnd(target, 1);\n          selection.addRange(range);\n          var position = target.getBoundingClientRect();\n          pagenote.target.x = position.x + target.clientWidth;\n          pagenote.target.y = position.y + target.clientHeight;\n          console.log(position);\n          pagenote.status = pagenote.CONSTANT.WAITING;\n        }, 1000);\n      };\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        className: \"index-page\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 13\n        }\n      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 17\n        }\n      }, __jsx(\"title\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 21\n        }\n      }, \"\\u5C0F\\u800C\\u7F8E\\u7684\\u7F51\\u9875\\u6807\\u8BB0\\u5DE5\\u5177\")), __jsx(\"section\", {\n        className: \"points fl\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        className: \"point\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 21\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 23\n        }\n      }, __jsx(\"h2\", {\n        id: \"range\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 25\n        }\n      }, \"\\u6536\\u5F55\\u91CD\\u70B9\"), __jsx(\"article\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 25\n        }\n      }, \"PAGENOTE \\u53EA\\u9700\\u8981\\u4E00\\u4E2A\\u7B80\\u5355\\u7684\\u70B9\\u51FB\\uFF0C\\u5373\\u53EF\\u6807\\u8BB0\\u4F60\\u7684\\u91CD\\u70B9\\u3001\\u7F51\\u9875\\u3002\", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 27\n        }\n      }), \"\\u5E76\\u667A\\u80FD\\u5730\\u4FE1\\u606F\\u7BA1\\u7406\\u3001\\u4E66\\u7B7E\\u540C\\u6B65\\u66F4\\u65B0\\u3002\")))), __jsx(\"section\", {\n        className: \"points sl\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        className: \"point\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 19\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 21\n        }\n      }, __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 23\n        }\n      }, \"\\u6807\\u6CE8\"), __jsx(\"article\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 23\n        }\n      }, \"PAGENOTE \\u80FD\\u5FEB\\u6377\\u5730\\u4E3A\\u7F51\\u9875\\u6DFB\\u52A0\\u6807\\u6CE8\\u3002\", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 25\n        }\n      }), \"\\u7B14\\u8BB0\\u7559\\u5728\\u7F51\\u9875\\u91CC\\uFF0C\\u968F\\u65F6\\u53EF\\u89C1\\u63D0\\u9192\\u4F60\\u3002\")))), __jsx(\"section\", {\n        className: \"points fl\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        className: \"point\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 19\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 21\n        }\n      }, __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 23\n        }\n      }, \"\\u7BA1\\u7406\"), __jsx(\"article\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 23\n        }\n      }, \"\\u9AD8\\u6548\\u5730\\u7BA1\\u7406\\u4F60\\u7684\\u77E5\\u8BC6\\uFF0C\\u62E5\\u6709\\u4F60\\u4E2A\\u4EBA\\u7684\\u77E5\\u8BC6\\u661F\\u7403\\u3002\")))));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Iiwic2hvd0Zvb3RlciIsInByb3BzIiwic3RhdGUiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJvbmxvYWQiLCJwYWdlbm90ZSIsIlBhZ2VOb3RlIiwiZnVuY3Rpb25Db2xvcnMiLCJpY29uIiwiYmdDb2xvciIsIm5hbWUiLCJzaG9ydGN1dCIsIm9uY2xpY2siLCJlIiwidGV4dCIsInRhcmdldCIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsIm9wZW4iLCJpbml0Iiwic2V0VGltZW91dCIsImdldEVsZW1lbnRCeUlkIiwic2VsZWN0aW9uIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGUiLCJzZXRTdGFydCIsInNldEVuZCIsImFkZFJhbmdlIiwicG9zaXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwiY2xpZW50V2lkdGgiLCJ5IiwiY2xpZW50SGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsIkNPTlNUQU5UIiwiV0FJVElORyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7aURBRVY7QUFDTEMsNEJBQVUsRUFBRTtBQURQLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUCxpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFXLEVBQVg7QUFGZTtBQUlsQjs7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBRixZQUFNLENBQUNHLEdBQVAsR0FBYSxjQUFiO0FBQ0FGLGNBQVEsQ0FBQ0csSUFBVCxDQUFjQyxXQUFkLENBQTBCTCxNQUExQjs7QUFDQUEsWUFBTSxDQUFDTSxNQUFQLEdBQWdCLFlBQVk7QUFDMUIsWUFBTUMsUUFBUSxHQUFHLElBQUlDLFFBQUosQ0FBYSxlQUFiLEVBQTZCO0FBQzVDQyx3QkFBYyxFQUFDLENBQ2I7QUFDRUMsZ0JBQUksRUFBQyxtQkFEUDtBQUVFQyxtQkFBTyxFQUFDLE1BRlY7QUFHRUMsZ0JBQUksRUFBQyxRQUhQO0FBSUVDLG9CQUFRLEVBQUMsR0FKWDtBQUtFQyxtQkFBTyxFQUFFLGlCQUFVQyxDQUFWLEVBQWE7QUFDcEIsa0JBQU1DLElBQUksR0FBR1QsUUFBUSxDQUFDVSxNQUFULEdBQWtCVixRQUFRLENBQUNVLE1BQVQsQ0FBZ0JELElBQWxDLEdBQXlDLEVBQXREOztBQUNBLGtCQUFHQSxJQUFILEVBQVE7QUFDTkUsc0JBQU0sQ0FBQ0MsWUFBUCxHQUFzQkMsZUFBdEI7QUFDQUYsc0JBQU0sQ0FBQ0csSUFBUCxzQ0FBMENMLElBQTFDO0FBQ0Q7QUFDRjtBQVhILFdBRGE7QUFENkIsU0FBN0IsQ0FBakI7QUFpQkFULGdCQUFRLENBQUNlLElBQVQ7QUFDQUMsa0JBQVUsQ0FBQyxZQUFJO0FBQ2IsY0FBTU4sTUFBTSxHQUFHaEIsUUFBUSxDQUFDdUIsY0FBVCxDQUF3QixPQUF4QixDQUFmLENBRGEsQ0FFYjtBQUNBO0FBQ0E7O0FBQ0EsY0FBSUMsU0FBUyxHQUFHUCxNQUFNLENBQUNDLFlBQVAsRUFBaEI7QUFDQSxjQUFJTyxLQUFLLEdBQUd6QixRQUFRLENBQUMwQixXQUFULEVBQVo7QUFFQUQsZUFBSyxDQUFDRSxVQUFOLENBQWlCWCxNQUFqQjtBQUNBUyxlQUFLLENBQUNHLFFBQU4sQ0FBZVosTUFBZixFQUF1QixDQUF2QjtBQUNBUyxlQUFLLENBQUNJLE1BQU4sQ0FBYWIsTUFBYixFQUFxQixDQUFyQjtBQUNBUSxtQkFBUyxDQUFDTSxRQUFWLENBQW1CTCxLQUFuQjtBQUNBLGNBQU1NLFFBQVEsR0FBR2YsTUFBTSxDQUFDZ0IscUJBQVAsRUFBakI7QUFDQTFCLGtCQUFRLENBQUNVLE1BQVQsQ0FBZ0JpQixDQUFoQixHQUFvQkYsUUFBUSxDQUFDRSxDQUFULEdBQVdqQixNQUFNLENBQUNrQixXQUF0QztBQUNBNUIsa0JBQVEsQ0FBQ1UsTUFBVCxDQUFnQm1CLENBQWhCLEdBQW9CSixRQUFRLENBQUNJLENBQVQsR0FBV25CLE1BQU0sQ0FBQ29CLFlBQXRDO0FBQ0FDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWVAsUUFBWjtBQUNBekIsa0JBQVEsQ0FBQ2lDLE1BQVQsR0FBa0JqQyxRQUFRLENBQUNrQyxRQUFULENBQWtCQyxPQUFwQztBQUNELFNBakJTLEVBaUJSLElBakJRLENBQVY7QUFrQkQsT0FyQ0Q7QUFzQ0Q7Ozs2QkFHUTtBQUNMLGFBQ0k7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0VBREosQ0FESixFQUtJO0FBQVMsaUJBQVMsRUFBQyxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLFVBQUUsRUFBQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdLQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixxR0FKRixDQURGLENBREosQ0FMSixFQWdDSTtBQUFTLGlCQUFTLEVBQUMsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEZBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLHFHQUpGLENBREYsQ0FERixDQWhDSixFQWdESTtBQUFTLGlCQUFTLEVBQUMsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMElBSkYsQ0FERixDQURGLENBaERKLENBREo7QUFrRUg7Ozs7RUE1SDhCQywrQyIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbi8vIGltcG9ydCBQYWdlTm90ZSBmcm9tICcuLi9saWIvcGFnZW5vdGUnO1xuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguc2NzcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50e1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93Rm9vdGVyOiBmYWxzZSxcbiAgICB9XG4gIH1cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5zcmMgPSAnL3BhZ2Vub3RlLmpzJztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2Vub3RlID0gbmV3IFBhZ2VOb3RlKCdwYWdlbm90ZS1ob21lJyx7XG4gICAgICAgICAgZnVuY3Rpb25Db2xvcnM6W1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOicvaWNvbnMvc2VhcmNoLnBuZycsXG4gICAgICAgICAgICAgIGJnQ29sb3I6JyNmZmYnLFxuICAgICAgICAgICAgICBuYW1lOidzZWFyY2gnLFxuICAgICAgICAgICAgICBzaG9ydGN1dDoncycsXG4gICAgICAgICAgICAgIG9uY2xpY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IHBhZ2Vub3RlLnRhcmdldCA/IHBhZ2Vub3RlLnRhcmdldC50ZXh0IDogJyc7XG4gICAgICAgICAgICAgICAgaWYodGV4dCl7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly93d3cuYmFpZHUuY29tL3M/d2Q9JHt0ZXh0fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgICBwYWdlbm90ZS5pbml0KCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZ2UnKTtcbiAgICAgICAgICAvLyBjb25zdCByYW5nZTEgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICAgIC8vIHJhbmdlMS5zZXRTdGFydCh0YXJnZXQsIDApO1xuICAgICAgICAgIC8vIHJhbmdlMS5zZXRFbmQodGFyZ2V0LCAxKTtcbiAgICAgICAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5cbiAgICAgICAgICByYW5nZS5zZWxlY3ROb2RlKHRhcmdldCk7XG4gICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQodGFyZ2V0LCAwKTtcbiAgICAgICAgICByYW5nZS5zZXRFbmQodGFyZ2V0LCAxKTtcbiAgICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHBhZ2Vub3RlLnRhcmdldC54ID0gcG9zaXRpb24ueCt0YXJnZXQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgcGFnZW5vdGUudGFyZ2V0LnkgPSBwb3NpdGlvbi55K3RhcmdldC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgY29uc29sZS5sb2cocG9zaXRpb24pXG4gICAgICAgICAgcGFnZW5vdGUuc3RhdHVzID0gcGFnZW5vdGUuQ09OU1RBTlQuV0FJVElORztcbiAgICAgICAgfSwxMDAwKVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luZGV4LXBhZ2UnPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+5bCP6ICM576O55qE572R6aG15qCH6K6w5bel5YW3PC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BvaW50cyBmbCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb2ludCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBpZD0ncmFuZ2UnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICDmlLblvZXph43ngrlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUEFHRU5PVEUg5Y+q6ZyA6KaB5LiA5Liq566A5Y2V55qE54K55Ye777yM5Y2z5Y+v5qCH6K6w5L2g55qE6YeN54K544CB572R6aG144CCXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIOW5tuaZuuiDveWcsOS/oeaBr+euoeeQhuOAgeS5puetvuWQjOatpeabtOaWsOOAglxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YnIvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YnIvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YnIvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IHN0eWxlPXt7cGFkZGluZzonNDBweCcsZm9udFNpemU6JzE4cHgnLGZvbnRXZWlnaHQ6J2JvbGQnfX0+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgUEFHRU5PVEUqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxici8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxici8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxici8+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgIHsvKiAgPGltZyBzcmM9XCIvZnVuY3Rpb25zL21hcmsucG5nXCIgYWx0PVwiXCIvPiovfVxuICAgICAgICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwb2ludHMgc2wnPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BvaW50Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgICAgICDmoIfms6hcbiAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgUEFHRU5PVEUg6IO95b+r5o235Zyw5Li6572R6aG15re75Yqg5qCH5rOo44CCXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPueslOiusOeVmeWcqOe9kemhtemHjO+8jOmaj+aXtuWPr+ingeaPkOmGkuS9oOOAglxuICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxkaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKiAgPGltZyBzcmM9XCIvZnVuY3Rpb25zL25vdGUucG5nXCIgYWx0PVwiXCIvPiovfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BvaW50cyBmbCc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9pbnQnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOeuoeeQhlxuICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICDpq5jmlYjlnLDnrqHnkIbkvaDnmoTnn6Xor4bvvIzmi6XmnInkvaDkuKrkurrnmoTnn6Xor4bmmJ/nkIPjgIJcbiAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICB7LyogIC8hKjxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuZGlpZ28uY29tL2ltYWdlcy92Ni9ob21lcGFnZS9hbm5vdGF0b3IuZ2lmXCIgYWx0PVwiXCIvPiohLyovfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})