webpackHotUpdate("static/development/pages/me.js",{

/***/ "./utils/index_new.js":
/*!****************************!*\
  !*** ./utils/index_new.js ***!
  \****************************/
/*! exports provided: connectServerNew, groupPagesNew, savePageNew, importData, getGroups, getGroupAndPages, getPageDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectServerNew\", function() { return connectServerNew; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"groupPagesNew\", function() { return groupPagesNew; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"savePageNew\", function() { return savePageNew; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"importData\", function() { return importData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGroups\", function() { return getGroups; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGroupAndPages\", function() { return getGroupAndPages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPageDetail\", function() { return getPageDetail; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _extensionBridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extensionBridge */ \"./utils/extensionBridge.js\");\n\n\nvar bridgeCli = null;\nvar connectServerNew = function connectServerNew(callback) {\n  bridgeCli = new _extensionBridge__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.getElementById('messenger'), 'page', 'extension');\n  bridgeCli.addListener('get_data', function (_ref) {\n    var type = _ref.type,\n        data = _ref.data;\n    var pages = [];\n    var pageObject = {};\n    Object.keys(data).forEach(function (key) {\n      var currentPage = data[key];\n\n      try {\n        var tempData = currentPage.plainData || {};\n        tempData.keys = data[key].keys;\n        pages.push(tempData);\n        pageObject[key] = tempData;\n      } catch (e) {\n        console.error(e);\n      }\n    });\n    callback({\n      connected: true,\n      pages: pages,\n      data: pageObject,\n      originData: data\n    });\n  });\n  bridgeCli.sendMessage('get_data');\n  document.addEventListener('visibilitychange', function () {\n    bridgeCli.sendMessage('get_data');\n  });\n};\nvar groupPagesNew = function groupPagesNew(groupType, pages) {\n  var categories = new Map();\n\n  var groupBy = function groupBy(fn) {\n    var groupPagesObject = {};\n    var selectedGroupsKey = new Set();\n    pages.forEach(function (page) {\n      categories.set(page.category || 'default', {\n        label: page.category || 'default',\n        desc: ''\n      });\n      var groupKey = fn(page);\n      var tempPages = groupPagesObject[groupKey] ? groupPagesObject[groupKey].pages : [];\n      groupPagesObject[groupKey] = {\n        name: groupKey,\n        pages: tempPages,\n        matched: tempPages.length\n      };\n      groupPagesObject[groupKey].pages.push(page);\n      groupPagesObject[groupKey].matched = groupPagesObject[groupKey].pages.length;\n      selectedGroupsKey.add(groupKey);\n    });\n\n    var arr = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(categories.values());\n\n    return {\n      groupPagesObject: groupPagesObject,\n      categories: arr,\n      groupKeys: Array.from(selectedGroupsKey)\n    };\n  };\n\n  var result = {};\n\n  switch (groupType) {\n    case 0:\n      result = groupBy(function (page) {\n        return page.keys[0] || 'default';\n      });\n      break;\n\n    case 1:\n      result = groupBy(function (page) {\n        var groupKey = 'unknow';\n\n        try {\n          groupKey = new Date(page.lastModified).toLocaleDateString();\n        } catch (e) {}\n\n        return groupKey;\n      });\n      break;\n\n    case 2:\n      result = groupBy(function (page) {\n        return page.category || 'default';\n      });\n      break;\n\n    default:\n      result = groupBy(function (page) {\n        return page.keys[0] || 'default';\n      });\n  }\n\n  return result;\n};\nvar savePageNew = function savePageNew(page) {\n  var saveData = {\n    key: page.url || page.key,\n    keys: page.keys,\n    plainData: page.plainData\n  };\n  bridgeCli.sendMessage('save_data', saveData);\n};\nvar importData = function importData(datas, callback) {\n  bridgeCli.sendMessage('import_datas', datas, function (result) {\n    callback(result);\n  });\n}; // 新版API模式，支持切换为serverAPI，为云端版本做准备\n// 返回所有的分组\n\nvar getGroups = function getGroups() {\n  var groupType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tag';\n}; // 根据分组返回，分组后的pages\n\nvar getGroupAndPages = function getGroupAndPages() {\n  var groupType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var groupKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;\n}; // 获取page详情\n\nvar getPageDetail = function getPageDetail() {};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9pbmRleF9uZXcuanM/MTRjOSJdLCJuYW1lcyI6WyJicmlkZ2VDbGkiLCJjb25uZWN0U2VydmVyTmV3IiwiY2FsbGJhY2siLCJCcmlkZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkTGlzdGVuZXIiLCJ0eXBlIiwiZGF0YSIsInBhZ2VzIiwicGFnZU9iamVjdCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiY3VycmVudFBhZ2UiLCJ0ZW1wRGF0YSIsInBsYWluRGF0YSIsInB1c2giLCJlIiwiY29uc29sZSIsImVycm9yIiwiY29ubmVjdGVkIiwib3JpZ2luRGF0YSIsInNlbmRNZXNzYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdyb3VwUGFnZXNOZXciLCJncm91cFR5cGUiLCJjYXRlZ29yaWVzIiwiTWFwIiwiZ3JvdXBCeSIsImZuIiwiZ3JvdXBQYWdlc09iamVjdCIsInNlbGVjdGVkR3JvdXBzS2V5IiwiU2V0IiwicGFnZSIsInNldCIsImNhdGVnb3J5IiwibGFiZWwiLCJkZXNjIiwiZ3JvdXBLZXkiLCJ0ZW1wUGFnZXMiLCJuYW1lIiwibWF0Y2hlZCIsImxlbmd0aCIsImFkZCIsImFyciIsInZhbHVlcyIsImdyb3VwS2V5cyIsIkFycmF5IiwiZnJvbSIsInJlc3VsdCIsIkRhdGUiLCJsYXN0TW9kaWZpZWQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzYXZlUGFnZU5ldyIsInNhdmVEYXRhIiwidXJsIiwiaW1wb3J0RGF0YSIsImRhdGFzIiwiZ2V0R3JvdXBzIiwiZ2V0R3JvdXBBbmRQYWdlcyIsInNpemUiLCJnZXRQYWdlRGV0YWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBSUEsU0FBUyxHQUFHLElBQWhCO0FBRU8sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFTQyxRQUFULEVBQWtCO0FBQzlDRixXQUFTLEdBQUcsSUFBSUcsd0RBQUosQ0FB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LENBQVVwQixJQUFWLEVBQWdCO0FBQ3ZDLE1BQU1xQixRQUFRLEdBQUc7QUFDYjFDLE9BQUcsRUFBRXFCLElBQUksQ0FBQ3NCLEdBQUwsSUFBVXRCLElBQUksQ0FBQ3JCLEdBRFA7QUFFYkYsUUFBSSxFQUFFdUIsSUFBSSxDQUFDdkIsSUFGRTtBQUdiSyxhQUFTLEVBQUVrQixJQUFJLENBQUNsQjtBQUhILEdBQWpCO0FBS0FqQixXQUFTLENBQUN3QixXQUFWLENBQXNCLFdBQXRCLEVBQWtDZ0MsUUFBbEM7QUFDSCxDQVBNO0FBU0EsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBVUMsS0FBVixFQUFnQnpELFFBQWhCLEVBQTBCO0FBQ2hERixXQUFTLENBQUN3QixXQUFWLENBQXNCLGNBQXRCLEVBQXFDbUMsS0FBckMsRUFBMkMsVUFBVVIsTUFBVixFQUFrQjtBQUN6RGpELFlBQVEsQ0FBQ2lELE1BQUQsQ0FBUjtBQUNILEdBRkQ7QUFHSCxDQUpNLEMsQ0FPUDtBQUVBOztBQUNPLElBQU1TLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQTJCO0FBQUEsTUFBakJqQyxTQUFpQix1RUFBUCxLQUFPO0FBRW5ELENBRk0sQyxDQUlQOztBQUNPLElBQU1rQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQTZDO0FBQUEsTUFBbkNsQyxTQUFtQyx1RUFBekIsRUFBeUI7QUFBQSxNQUF0QmEsUUFBc0IsdUVBQWIsRUFBYTtBQUFBLE1BQVZzQixJQUFVLHVFQUFMLEVBQUs7QUFFNUUsQ0FGTSxDLENBSVA7O0FBQ08sSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFVLENBRXRDLENBRk0iLCJmaWxlIjoiLi91dGlscy9pbmRleF9uZXcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnJpZGdlIGZyb20gXCIuL2V4dGVuc2lvbkJyaWRnZVwiO1xuXG5sZXQgYnJpZGdlQ2xpID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RTZXJ2ZXJOZXcgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgYnJpZGdlQ2xpID0gbmV3IEJyaWRnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2VuZ2VyJyksJ3BhZ2UnLCdleHRlbnNpb24nKTtcblxuICAgIGJyaWRnZUNsaS5hZGRMaXN0ZW5lcignZ2V0X2RhdGEnLGZ1bmN0aW9uICh7dHlwZSxkYXRhfSkge1xuICAgICAgICBjb25zdCBwYWdlcyA9IFtdO1xuICAgICAgICBjb25zdCBwYWdlT2JqZWN0ID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBEYXRhID0gY3VycmVudFBhZ2UucGxhaW5EYXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgIHRlbXBEYXRhLmtleXMgPSBkYXRhW2tleV0ua2V5cztcbiAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKHRlbXBEYXRhKTtcbiAgICAgICAgICAgICAgICBwYWdlT2JqZWN0W2tleV0gPSB0ZW1wRGF0YTtcbiAgICAgICAgICAgIH1jYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICAgIGNvbm5lY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgIHBhZ2VzOiBwYWdlcyxcbiAgICAgICAgICAgIGRhdGE6IHBhZ2VPYmplY3QsXG4gICAgICAgICAgICBvcmlnaW5EYXRhOiBkYXRhLFxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGJyaWRnZUNsaS5zZW5kTWVzc2FnZSgnZ2V0X2RhdGEnKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCAoKT0+IHtcbiAgICAgICAgYnJpZGdlQ2xpLnNlbmRNZXNzYWdlKCdnZXRfZGF0YScpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdyb3VwUGFnZXNOZXcgPSBmdW5jdGlvbiAoZ3JvdXBUeXBlLHBhZ2VzKSB7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBncm91cEJ5ID0gKGZuKT0+e1xuICAgICAgICBjb25zdCBncm91cFBhZ2VzT2JqZWN0ID0ge307XG4gICAgICAgIGxldCBzZWxlY3RlZEdyb3Vwc0tleSA9IG5ldyBTZXQoKTtcbiAgICAgICAgcGFnZXMuZm9yRWFjaCgocGFnZSk9PntcbiAgICAgICAgICAgIGNhdGVnb3JpZXMuc2V0KHBhZ2UuY2F0ZWdvcnl8fCdkZWZhdWx0Jyx7XG4gICAgICAgICAgICAgICAgbGFiZWw6cGFnZS5jYXRlZ29yeXx8J2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgIGRlc2M6JycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwS2V5ID0gZm4ocGFnZSk7XG4gICAgICAgICAgICBjb25zdCB0ZW1wUGFnZXMgPSBncm91cFBhZ2VzT2JqZWN0W2dyb3VwS2V5XT9ncm91cFBhZ2VzT2JqZWN0W2dyb3VwS2V5XS5wYWdlcyA6IFtdO1xuXG4gICAgICAgICAgICBncm91cFBhZ2VzT2JqZWN0W2dyb3VwS2V5XSA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBncm91cEtleSxcbiAgICAgICAgICAgICAgICBwYWdlczogdGVtcFBhZ2VzLFxuICAgICAgICAgICAgICAgIG1hdGNoZWQ6IHRlbXBQYWdlcy5sZW5ndGgsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ3JvdXBQYWdlc09iamVjdFtncm91cEtleV0ucGFnZXMucHVzaChwYWdlKTtcbiAgICAgICAgICAgIGdyb3VwUGFnZXNPYmplY3RbZ3JvdXBLZXldLm1hdGNoZWQgPSBncm91cFBhZ2VzT2JqZWN0W2dyb3VwS2V5XS5wYWdlcy5sZW5ndGg7XG4gICAgICAgICAgICBzZWxlY3RlZEdyb3Vwc0tleS5hZGQoZ3JvdXBLZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYXJyID0gWy4uLmNhdGVnb3JpZXMudmFsdWVzKCldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ3JvdXBQYWdlc09iamVjdDpncm91cFBhZ2VzT2JqZWN0LFxuICAgICAgICAgICAgY2F0ZWdvcmllczogYXJyLFxuICAgICAgICAgICAgZ3JvdXBLZXlzOiBBcnJheS5mcm9tKHNlbGVjdGVkR3JvdXBzS2V5KSxcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgcmVzdWx0ID0ge307XG5cbiAgICBzd2l0Y2ggKGdyb3VwVHlwZSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXN1bHQgPSBncm91cEJ5KGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2Uua2V5c1swXXx8J2RlZmF1bHQnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmVzdWx0ID0gZ3JvdXBCeShmdW5jdGlvbiAocGFnZSkge1xuICAgICAgICAgICAgICAgIGxldCBncm91cEtleSA9ICd1bmtub3cnO1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBLZXkgPSBuZXcgRGF0ZShwYWdlLmxhc3RNb2RpZmllZCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfWNhdGNoIChlKSB7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwS2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmVzdWx0ID0gZ3JvdXBCeShmdW5jdGlvbiAocGFnZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYWdlLmNhdGVnb3J5IHx8ICdkZWZhdWx0JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXN1bHQgPSBncm91cEJ5KGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2Uua2V5c1swXXx8J2RlZmF1bHQnO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgY29uc3Qgc2F2ZVBhZ2VOZXcgPSBmdW5jdGlvbiAocGFnZSkge1xuICAgIGNvbnN0IHNhdmVEYXRhID0ge1xuICAgICAgICBrZXk6IHBhZ2UudXJsfHxwYWdlLmtleSxcbiAgICAgICAga2V5czogcGFnZS5rZXlzLFxuICAgICAgICBwbGFpbkRhdGE6IHBhZ2UucGxhaW5EYXRhLFxuICAgIH07XG4gICAgYnJpZGdlQ2xpLnNlbmRNZXNzYWdlKCdzYXZlX2RhdGEnLHNhdmVEYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbXBvcnREYXRhID0gZnVuY3Rpb24gKGRhdGFzLGNhbGxiYWNrKSB7XG4gICAgYnJpZGdlQ2xpLnNlbmRNZXNzYWdlKCdpbXBvcnRfZGF0YXMnLGRhdGFzLGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgY2FsbGJhY2socmVzdWx0KVxuICAgIH0pXG59O1xuXG5cbi8vIOaWsOeJiEFQSeaooeW8j++8jOaUr+aMgeWIh+aNouS4unNlcnZlckFQSe+8jOS4uuS6keerr+eJiOacrOWBmuWHhuWkh1xuXG4vLyDov5Tlm57miYDmnInnmoTliIbnu4RcbmV4cG9ydCBjb25zdCBnZXRHcm91cHMgPSBmdW5jdGlvbiAoZ3JvdXBUeXBlPSd0YWcnKSB7XG5cbn07XG5cbi8vIOagueaNruWIhue7hOi/lOWbnu+8jOWIhue7hOWQjueahHBhZ2VzXG5leHBvcnQgY29uc3QgZ2V0R3JvdXBBbmRQYWdlcyA9IGZ1bmN0aW9uIChncm91cFR5cGU9JycsZ3JvdXBLZXk9Jycsc2l6ZT0xMCwpIHtcblxufTtcblxuLy8g6I635Y+WcGFnZeivpuaDhVxuZXhwb3J0IGNvbnN0IGdldFBhZ2VEZXRhaWwgPSBmdW5jdGlvbigpe1xuXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/index_new.js\n");

/***/ })

})