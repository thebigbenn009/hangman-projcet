"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/games/[id]/page",{

/***/ "(app-pages-browser)/./app/components/game/Options.tsx":
/*!*****************************************!*\
  !*** ./app/components/game/Options.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_features_gameSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/features/gameSlice */ \"(app-pages-browser)/./app/features/gameSlice.ts\");\n/* harmony import */ var _app_features_initialize_initialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/features/initialize/initialize */ \"(app-pages-browser)/./app/features/initialize/initialize.ts\");\n/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/hooks */ \"(app-pages-browser)/./app/hooks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Options = ()=>{\n    _s();\n    const dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const handlePlayAgain = ()=>{\n        dispatch((0,_app_features_gameSlice__WEBPACK_IMPORTED_MODULE_1__.playAgain)());\n        dispatch((0,_app_features_gameSlice__WEBPACK_IMPORTED_MODULE_1__.loadGameData)());\n        dispatch((0,_app_features_gameSlice__WEBPACK_IMPORTED_MODULE_1__.gamePuzzle)());\n    };\n    const handleNewCategory = ()=>{\n        dispatch((0,_app_features_initialize_initialize__WEBPACK_IMPORTED_MODULE_2__.setNewCategory)());\n    };\n    const handleQuitGame = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"options\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handlePlayAgain,\n                className: \"option-1\",\n                children: \"play again\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\game\\\\Options.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleNewCategory,\n                className: \"option-1\",\n                children: \"new category\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\game\\\\Options.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"option-2\",\n                children: \"quit game\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\game\\\\Options.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\game\\\\Options.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Options, \"BJQ1DUn/XFEl2NsQ3DWyHAXfnkY=\", false, function() {\n    return [\n        _app_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = Options;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Options);\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQytFO0FBQ1Q7QUFDekI7QUFDbkI7QUFFMUIsTUFBTU0sVUFBVTs7SUFDZCxNQUFNQyxXQUFXSCwwREFBY0E7SUFDL0IsTUFBTUksa0JBQWtCO1FBQ3RCRCxTQUFTTCxrRUFBU0E7UUFDbEJLLFNBQVNOLHFFQUFZQTtRQUNyQk0sU0FBU1AsbUVBQVVBO0lBQ3JCO0lBQ0EsTUFBTVMsb0JBQW9CO1FBQ3hCRixTQUFTSixtRkFBY0E7SUFDekI7SUFDQSxNQUFNTyxpQkFBaUIsS0FBTztJQUM5QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFPQyxTQUFTTjtnQkFBaUJJLFdBQVU7MEJBQVc7Ozs7OzswQkFHdkQsOERBQUNDO2dCQUFPQyxTQUFTTDtnQkFBbUJHLFdBQVU7MEJBQVc7Ozs7OzswQkFHekQsOERBQUNDO2dCQUFPRCxXQUFVOzBCQUFXOzs7Ozs7Ozs7Ozs7QUFHbkM7R0F0Qk1OOztRQUNhRixzREFBY0E7OztLQUQzQkU7QUF3Qk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvZ2FtZS9PcHRpb25zLnRzeD81Njg1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBnYW1lUHV6emxlLCBsb2FkR2FtZURhdGEsIHBsYXlBZ2FpbiB9IGZyb20gXCJAL2FwcC9mZWF0dXJlcy9nYW1lU2xpY2VcIjtcclxuaW1wb3J0IHsgc2V0TmV3Q2F0ZWdvcnkgfSBmcm9tIFwiQC9hcHAvZmVhdHVyZXMvaW5pdGlhbGl6ZS9pbml0aWFsaXplXCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIkAvYXBwL2hvb2tzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE9wdGlvbnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGhhbmRsZVBsYXlBZ2FpbiA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHBsYXlBZ2FpbigpKTtcclxuICAgIGRpc3BhdGNoKGxvYWRHYW1lRGF0YSgpKTtcclxuICAgIGRpc3BhdGNoKGdhbWVQdXp6bGUoKSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVOZXdDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldE5ld0NhdGVnb3J5KCkpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUXVpdEdhbWUgPSAoKSA9PiB7fTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zXCI+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUGxheUFnYWlufSBjbGFzc05hbWU9XCJvcHRpb24tMVwiPlxyXG4gICAgICAgIHBsYXkgYWdhaW5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTmV3Q2F0ZWdvcnl9IGNsYXNzTmFtZT1cIm9wdGlvbi0xXCI+XHJcbiAgICAgICAgbmV3IGNhdGVnb3J5XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbi0yXCI+cXVpdCBnYW1lPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3B0aW9ucztcclxuIl0sIm5hbWVzIjpbImdhbWVQdXp6bGUiLCJsb2FkR2FtZURhdGEiLCJwbGF5QWdhaW4iLCJzZXROZXdDYXRlZ29yeSIsInVzZUFwcERpc3BhdGNoIiwiUmVhY3QiLCJPcHRpb25zIiwiZGlzcGF0Y2giLCJoYW5kbGVQbGF5QWdhaW4iLCJoYW5kbGVOZXdDYXRlZ29yeSIsImhhbmRsZVF1aXRHYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/game/Options.tsx\n"));

/***/ })

});