webpackHotUpdate("static/development/pages/me.js",{

/***/ "./components/notes/Notes.js":
/*!***********************************!*\
  !*** ./components/notes/Notes.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Notes; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_draw_selecte_one_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/draw/selecte_one.svg */ \"./assets/draw/selecte_one.svg\");\n/* harmony import */ var _assets_icon_notes_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icon/notes.svg */ \"./assets/icon/notes.svg\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageDetail */ \"./components/notes/PageDetail.js\");\nvar _jsxFileName = \"/Users/ranronghua/Desktop/pagenoter/components/notes/Notes.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Notes(_ref) {\n  var _this = this;\n\n  var selectedPagesKey = _ref.selectedPagesKey,\n      size = _ref.size,\n      categories = _ref.categories,\n      onSavePage = _ref.onSavePage,\n      data = _ref.data;\n  var alikePages = [];\n  var thisPage = data[selectedPagesKey];\n  Object.keys(data).forEach(function (key) {\n    var pageItem = data[key];\n\n    if (pageItem.keys.length && pageItem.keys.toString() === thisPage.keys.toString()) {\n      console.log(pageItem);\n      alikePages.push(pageItem);\n    }\n  });\n  return __jsx(\"section\", {\n    className: \"notes\",\n    style: {\n      width: \"calc(100% - \".concat(size, \")\")\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: \"logo-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 41\n    }\n  }, \"NOTES \", __jsx(_assets_icon_notes_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 51\n    }\n  }))), __jsx(\"div\", {\n    className: \"content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, selectedPagesKey.size === 0 && __jsx(\"div\", {\n    className: \"empty-tip\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, \"\\u5728\\u5DE6\\u4FA7\\u70B9\\u51FB\\u9009\\u4E2Dpage\\uFF0C\\u67E5\\u770B\\u8BE6\\u60C5\\u3001\\u7F16\\u8F91\"), __jsx(_assets_draw_selecte_one_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    width: 230,\n    height: 175,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  })), Array.from(selectedPagesKey).map(function (pageKey) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      key: pageKey,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 13\n      }\n    }, data[pageKey] && __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }\n    }, __jsx(_PageDetail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      categories: categories,\n      selectedPage: data[pageKey],\n      onSavePage: onSavePage,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 19\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 19\n      }\n    }, \"\\u76F8\\u4F3C\\u7F51\\u9875\", __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 21\n      }\n    }, alikePages.map(function (page) {\n      return __jsx(\"div\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 27\n        }\n      }, page.url);\n    })))));\n  })));\n}\n_c = Notes;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"Notes\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGVzL05vdGVzLmpzP2UwMjUiXSwibmFtZXMiOlsiTm90ZXMiLCJzZWxlY3RlZFBhZ2VzS2V5Iiwic2l6ZSIsImNhdGVnb3JpZXMiLCJvblNhdmVQYWdlIiwiZGF0YSIsImFsaWtlUGFnZXMiLCJ0aGlzUGFnZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicGFnZUl0ZW0iLCJsZW5ndGgiLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwid2lkdGgiLCJBcnJheSIsImZyb20iLCJtYXAiLCJwYWdlS2V5IiwicGFnZSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxLQUFULE9BQW1FO0FBQUE7O0FBQUEsTUFBbkRDLGdCQUFtRCxRQUFuREEsZ0JBQW1EO0FBQUEsTUFBbENDLElBQWtDLFFBQWxDQSxJQUFrQztBQUFBLE1BQTdCQyxVQUE2QixRQUE3QkEsVUFBNkI7QUFBQSxNQUFsQkMsVUFBa0IsUUFBbEJBLFVBQWtCO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBQ2hGLE1BQU1DLFVBQVUsR0FBRyxFQUFuQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsSUFBSSxDQUFDSixnQkFBRCxDQUFyQjtBQUNBTyxRQUFNLENBQUNDLElBQVAsQ0FBWUosSUFBWixFQUFrQkssT0FBbEIsQ0FBMEIsVUFBQ0MsR0FBRCxFQUFPO0FBQy9CLFFBQU1DLFFBQVEsR0FBR1AsSUFBSSxDQUFDTSxHQUFELENBQXJCOztBQUNBLFFBQUdDLFFBQVEsQ0FBQ0gsSUFBVCxDQUFjSSxNQUFkLElBQXdCRCxRQUFRLENBQUNILElBQVQsQ0FBY0ssUUFBZCxPQUEyQlAsUUFBUSxDQUFDRSxJQUFULENBQWNLLFFBQWQsRUFBdEQsRUFBK0U7QUFDN0VDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQ0FOLGdCQUFVLENBQUNXLElBQVgsQ0FBZ0JMLFFBQWhCO0FBQ0Q7QUFDRixHQU5EO0FBT0EsU0FDRTtBQUFTLGFBQVMsRUFBQyxPQUFuQjtBQUEyQixTQUFLLEVBQUU7QUFBQ00sV0FBSyx3QkFBZ0JoQixJQUFoQjtBQUFOLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDa0M7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNVLE1BQUMsOERBQUQ7QUFBVSxhQUFTLEVBQUMsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURWLENBRGxDLENBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSUQsZ0JBQWdCLENBQUNDLElBQWpCLEtBQTBCLENBQTFCLElBQ0E7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzR0FERixFQUlFLE1BQUMsb0VBQUQ7QUFBVyxTQUFLLEVBQUUsR0FBbEI7QUFBdUIsVUFBTSxFQUFFLEdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQUhKLEVBV0lpQixLQUFLLENBQUNDLElBQU4sQ0FBV25CLGdCQUFYLEVBQTZCb0IsR0FBN0IsQ0FBaUMsVUFBQ0MsT0FBRDtBQUFBLFdBQy9CLE1BQUMsOENBQUQ7QUFBVSxTQUFHLEVBQUVBLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJakIsSUFBSSxDQUFDaUIsT0FBRCxDQUFKLElBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsbURBQUQ7QUFBYSxnQkFBVSxFQUFFbkIsVUFBekI7QUFBcUMsa0JBQVksRUFBRUUsSUFBSSxDQUFDaUIsT0FBRCxDQUF2RDtBQUFrRSxnQkFBVSxFQUFFbEIsVUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUlFLFVBQVUsQ0FBQ2UsR0FBWCxDQUFlLFVBQUNFLElBQUQ7QUFBQSxhQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBTUEsSUFBSSxDQUFDQyxHQUFYLENBRGE7QUFBQSxLQUFmLENBRkosQ0FGRixDQUZGLENBSEosQ0FEK0I7QUFBQSxHQUFqQyxDQVhKLENBTkYsQ0FERjtBQTBDRDtLQXBEdUJ4QixLO0FBb0R2QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbm90ZXMvTm90ZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlbGVjdE9uZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2RyYXcvc2VsZWN0ZV9vbmUuc3ZnXCI7XG5pbXBvcnQgTm90ZUljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pY29uL25vdGVzLnN2Z1wiO1xuaW1wb3J0IFBhZ2VEZXRhaWwgZnJvbSBcIi4vUGFnZURldGFpbFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVzKHtzZWxlY3RlZFBhZ2VzS2V5LHNpemUsY2F0ZWdvcmllcyxvblNhdmVQYWdlLGRhdGF9KSB7XG4gIGNvbnN0IGFsaWtlUGFnZXMgPSBbXTtcbiAgY29uc3QgdGhpc1BhZ2UgPSBkYXRhW3NlbGVjdGVkUGFnZXNLZXldO1xuICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpPT57XG4gICAgY29uc3QgcGFnZUl0ZW0gPSBkYXRhW2tleV07XG4gICAgaWYocGFnZUl0ZW0ua2V5cy5sZW5ndGggJiYgcGFnZUl0ZW0ua2V5cy50b1N0cmluZygpPT09dGhpc1BhZ2Uua2V5cy50b1N0cmluZygpKXtcbiAgICAgIGNvbnNvbGUubG9nKHBhZ2VJdGVtKTtcbiAgICAgIGFsaWtlUGFnZXMucHVzaChwYWdlSXRlbSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J25vdGVzJyBzdHlsZT17e3dpZHRoOmBjYWxjKDEwMCUgLSAke3NpemV9KWB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsb2dvLXRpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9URVMgPE5vdGVJY29uIGNsYXNzTmFtZT0naWNvbicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkUGFnZXNLZXkuc2l6ZSA9PT0gMCAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbXB0eS10aXAnPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAg5Zyo5bem5L6n54K55Ye76YCJ5LitcGFnZe+8jOafpeeci+ivpuaDheOAgee8lui+kVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2VsZWN0T25lIHdpZHRoPXsyMzB9IGhlaWdodD17MTc1fS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIEFycmF5LmZyb20oc2VsZWN0ZWRQYWdlc0tleSkubWFwKChwYWdlS2V5KT0+KFxuICAgICAgICAgICAgPEZyYWdtZW50IGtleT17cGFnZUtleX0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhW3BhZ2VLZXldICYmXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxQYWdlRGV0YWlsICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSBzZWxlY3RlZFBhZ2U9e2RhdGFbcGFnZUtleV19IG9uU2F2ZVBhZ2U9e29uU2F2ZVBhZ2V9Lz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIOebuOS8vOe9kemhtVxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWtlUGFnZXMubWFwKChwYWdlKT0+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntwYWdlLnVybH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/notes/Notes.js\n");

/***/ })

})