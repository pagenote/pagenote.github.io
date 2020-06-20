webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ranronghua/Desktop/nextjs-pagenote/components/Header.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar proxy = 'https://cors-anywhere.herokuapp.com/';\nvar host = 'https://pagenote.logike.cn';\nvar loginUrl = \"https://github.com/login/oauth/authorize?scope=user%20public_repo&client_id=c4aae381097464aa1024&redirect_uri=\".concat(host);\n\nvar Header = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Header, _Component);\n\n  var _super = _createSuper(Header);\n\n  function Header(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Header);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"codeToToken\", function () {\n      var search = window.location.search;\n      var code = search.match(/code=(.*)$/);\n\n      if (!code) {\n        return;\n      }\n\n      axios__WEBPACK_IMPORTED_MODULE_9___default()({\n        method: 'post',\n        headers: {\n          Accept: 'application/json'\n        },\n        url: \"\".concat(proxy, \"https://github.com/login/oauth/access_token\"),\n        data: {\n          client_id: 'c4aae381097464aa1024',\n          client_secret: 'ed40211bca3ccabd900586079b89fd0ec1ea48be',\n          code: code[1]\n        }\n      }).then(function (response) {\n        var token = response.data.access_token;\n        localStorage.setItem('token', token);\n        var a = new URLSearchParams(location.search);\n        var redirect = a.get('comeback');\n\n        if (redirect) {\n          window.location = redirect;\n        } else {\n          window.location = '/';\n        }\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"checkLogin\", function () {\n      var token = localStorage.getItem('token');\n\n      if (!token) {\n        return;\n      }\n\n      axios__WEBPACK_IMPORTED_MODULE_9___default()({\n        method: 'get',\n        headers: {\n          Accept: 'application/json',\n          Authorization: \"token \".concat(token)\n        },\n        url: \"\".concat(proxy, \"https://api.github.com/user\")\n      }).then(function (response) {\n        if (response.data) {\n          _this.setState({\n            userInfo: response.data\n          });\n        }\n      })[\"catch\"](function (e) {\n        console.error(e);\n      });\n    });\n\n    _this.state = {\n      userInfo: {}\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Header, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.codeToToken();\n      this.checkLogin();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var userInfo = this.state.userInfo;\n      return __jsx(\"nav\", {\n        className: \"jsx-4281493335\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 16\n        }\n      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        id: \"4281493335\",\n        __self: this\n      }, \".header.jsx-4281493335{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 24px;padding:10px 24px;margin:0 auto;max-width:800px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;box-sizing:border-box;}.user-avatar.jsx-4281493335{width:20px;height:20px;border-radius:10px;border-radius:4px;overflow:hidden;}#login.jsx-4281493335{padding:0px 6px;background:#509ff5;border-radius:6px;color:#fff;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5yb25naHVhL0Rlc2t0b3AvbmV4dGpzLXBhZ2Vub3RlL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFd0IsQUFRa0MsQUFTRixBQU9LLFdBTkosS0FPTyxPQU5BLFlBT0QsT0FOQSxXQU9QLE9BTkssSUFPcEIsVUFuQm1CLEVBYW5CLGFBWnNCLGtCQUNKLGNBQ0UsZ0JBQ2MsbUhBQ1Isc0JBQzFCIiwiZmlsZSI6Ii9Vc2Vycy9yYW5yb25naHVhL0Rlc2t0b3AvbmV4dGpzLXBhZ2Vub3RlL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5jb25zdCBwcm94eSA9ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8nO1xuY29uc3QgaG9zdCA9ICdodHRwczovL3BhZ2Vub3RlLmxvZ2lrZS5jbic7XG5jb25zdCBsb2dpblVybCA9IGBodHRwczovL2dpdGh1Yi5jb20vbG9naW4vb2F1dGgvYXV0aG9yaXplP3Njb3BlPXVzZXIlMjBwdWJsaWNfcmVwbyZjbGllbnRfaWQ9YzRhYWUzODEwOTc0NjRhYTEwMjQmcmVkaXJlY3RfdXJpPSR7aG9zdH1gXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgdXNlckluZm86e30sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb2RlVG9Ub2tlbigpO1xuICAgICAgICB0aGlzLmNoZWNrTG9naW4oKTtcbiAgICB9XG5cbiAgICBjb2RlVG9Ub2tlbj0oKT0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgICAgY29uc3QgY29kZSA9IHNlYXJjaC5tYXRjaCgvY29kZT0oLiopJC8pO1xuICAgICAgICBpZighY29kZSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cmw6IGAke3Byb3h5fWh0dHBzOi8vZ2l0aHViLmNvbS9sb2dpbi9vYXV0aC9hY2Nlc3NfdG9rZW5gLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGNsaWVudF9pZDogJ2M0YWFlMzgxMDk3NDY0YWExMDI0JyxcbiAgICAgICAgICAgICAgICBjbGllbnRfc2VjcmV0OiAnZWQ0MDIxMWJjYTNjY2FiZDkwMDU4NjA3OWI4OWZkMGVjMWVhNDhiZScsXG4gICAgICAgICAgICAgICAgY29kZTpjb2RlWzFdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbjtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsdG9rZW4pO1xuICAgICAgICAgICAgY29uc3QgYSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gYS5nZXQoJ2NvbWViYWNrJyk7XG4gICAgICAgICAgICBpZihyZWRpcmVjdCl7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gcmVkaXJlY3Q7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy8nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjaGVja0xvZ2luID0oKT0+e1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICBpZighdG9rZW4pe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7dG9rZW59YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybDogYCR7cHJveHl9aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2VyYCxcbiAgICAgICAgfSkudGhlbiggKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB1c2VySW5mbzogcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gPG5hdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBuYXZ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGluZS1oZWlnaHQ6IDQwcHg7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmhlYWRlcntcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC51c2VyLWF2YXRhcntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjbG9naW57XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA2cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1MDlmZjU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIFBBR0VOT1RFIOS4gOmhteS4gOiusFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlckluZm8ubmFtZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3VzZXItYXZhdGFyJyBocmVmPXt1c2VySW5mby5odG1sX3VybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD17MjB9IGhlaWdodD17MjB9IHNyYz17YCR7dXNlckluZm8uYXZhdGFyX3VybH0mcz0zMGB9IGFsdD17YCR7dXNlckluZm8ubmFtZX1gfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGlkPVwibG9naW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bG9naW5Vcmx9PkdpdEh1YuaOiOadg+eZu+W9lTwvYT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvbmF2PjtcbiAgICB9XG59Il19 */\\n/*@ sourceURL=/Users/ranronghua/Desktop/nextjs-pagenote/components/Header.js */\"), __jsx(\"section\", {\n        className: \"jsx-4281493335\" + \" \" + \"header\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 13\n        }\n      }, __jsx(\"div\", {\n        className: \"jsx-4281493335\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 17\n        }\n      }, \"PAGENOTE \\u4E00\\u9875\\u4E00\\u8BB0\"), userInfo.name ? __jsx(\"a\", {\n        href: userInfo.html_url,\n        className: \"jsx-4281493335\" + \" \" + 'user-avatar',\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 25\n        }\n      }, __jsx(\"img\", {\n        width: 20,\n        height: 20,\n        src: \"\".concat(userInfo.avatar_url, \"&s=30\"),\n        alt: \"\".concat(userInfo.name),\n        className: \"jsx-4281493335\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 29\n        }\n      })) : __jsx(\"a\", {\n        id: \"login\",\n        href: loginUrl,\n        className: \"jsx-4281493335\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 25\n        }\n      }, \"GitHub\\u6388\\u6743\\u767B\\u5F55\")));\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbInByb3h5IiwiaG9zdCIsImxvZ2luVXJsIiwiSGVhZGVyIiwicHJvcHMiLCJzZWFyY2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImNvZGUiLCJtYXRjaCIsImF4aW9zIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsInVybCIsImRhdGEiLCJjbGllbnRfaWQiLCJjbGllbnRfc2VjcmV0IiwidGhlbiIsInJlc3BvbnNlIiwidG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiYSIsIlVSTFNlYXJjaFBhcmFtcyIsInJlZGlyZWN0IiwiZ2V0IiwiZ2V0SXRlbSIsIkF1dGhvcml6YXRpb24iLCJzZXRTdGF0ZSIsInVzZXJJbmZvIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInN0YXRlIiwiY29kZVRvVG9rZW4iLCJjaGVja0xvZ2luIiwibmFtZSIsImh0bWxfdXJsIiwiYXZhdGFyX3VybCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLEtBQUssR0FBRyxzQ0FBZDtBQUNBLElBQU1DLElBQUksR0FBRyw0QkFBYjtBQUNBLElBQU1DLFFBQVEsMkhBQW9IRCxJQUFwSCxDQUFkOztJQUVxQkUsTTs7Ozs7QUFDakIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxzTkFZUCxZQUFLO0FBQ2IsVUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JGLE1BQS9CO0FBQ0EsVUFBTUcsSUFBSSxHQUFHSCxNQUFNLENBQUNJLEtBQVAsQ0FBYSxZQUFiLENBQWI7O0FBQ0EsVUFBRyxDQUFDRCxJQUFKLEVBQVM7QUFDTDtBQUNIOztBQUNERSxrREFBSyxDQUFDO0FBQ0ZDLGNBQU0sRUFBRSxNQUROO0FB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QyIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5jb25zdCBwcm94eSA9ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8nO1xuY29uc3QgaG9zdCA9ICdodHRwczovL3BhZ2Vub3RlLmxvZ2lrZS5jbic7XG5jb25zdCBsb2dpblVybCA9IGBodHRwczovL2dpdGh1Yi5jb20vbG9naW4vb2F1dGgvYXV0aG9yaXplP3Njb3BlPXVzZXIlMjBwdWJsaWNfcmVwbyZjbGllbnRfaWQ9YzRhYWUzODEwOTc0NjRhYTEwMjQmcmVkaXJlY3RfdXJpPSR7aG9zdH1gXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgdXNlckluZm86e30sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb2RlVG9Ub2tlbigpO1xuICAgICAgICB0aGlzLmNoZWNrTG9naW4oKTtcbiAgICB9XG5cbiAgICBjb2RlVG9Ub2tlbj0oKT0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgICAgY29uc3QgY29kZSA9IHNlYXJjaC5tYXRjaCgvY29kZT0oLiopJC8pO1xuICAgICAgICBpZighY29kZSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cmw6IGAke3Byb3h5fWh0dHBzOi8vZ2l0aHViLmNvbS9sb2dpbi9vYXV0aC9hY2Nlc3NfdG9rZW5gLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGNsaWVudF9pZDogJ2M0YWFlMzgxMDk3NDY0YWExMDI0JyxcbiAgICAgICAgICAgICAgICBjbGllbnRfc2VjcmV0OiAnZWQ0MDIxMWJjYTNjY2FiZDkwMDU4NjA3OWI4OWZkMGVjMWVhNDhiZScsXG4gICAgICAgICAgICAgICAgY29kZTpjb2RlWzFdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbjtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsdG9rZW4pO1xuICAgICAgICAgICAgY29uc3QgYSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gYS5nZXQoJ2NvbWViYWNrJyk7XG4gICAgICAgICAgICBpZihyZWRpcmVjdCl7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gcmVkaXJlY3Q7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy8nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjaGVja0xvZ2luID0oKT0+e1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICBpZighdG9rZW4pe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7dG9rZW59YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybDogYCR7cHJveHl9aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2VyYCxcbiAgICAgICAgfSkudGhlbiggKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB1c2VySW5mbzogcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gPG5hdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBuYXZ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGluZS1oZWlnaHQ6IDQwcHg7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmhlYWRlcntcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC51c2VyLWF2YXRhcntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjbG9naW57XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA2cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1MDlmZjU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIFBBR0VOT1RFIOS4gOmhteS4gOiusFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlckluZm8ubmFtZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3VzZXItYXZhdGFyJyBocmVmPXt1c2VySW5mby5odG1sX3VybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD17MjB9IGhlaWdodD17MjB9IHNyYz17YCR7dXNlckluZm8uYXZhdGFyX3VybH0mcz0zMGB9IGFsdD17YCR7dXNlckluZm8ubmFtZX1gfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGlkPVwibG9naW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bG9naW5Vcmx9PkdpdEh1YuaOiOadg+eZu+W9lTwvYT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvbmF2PjtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})