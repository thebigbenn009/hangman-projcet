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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_features_gameSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/features/gameSlice */ \"(app-pages-browser)/./app/features/gameSlice.ts\");\n/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/hooks */ \"(app-pages-browser)/./app/hooks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Options = ()=>{\n    _s();\n    const dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const handlePlayAgain = ()=>{\n        dispatch((0,_app_features_gameSlice__WEBPACK_IMPORTED_MODULE_1__.playAgain)());\n        dispatch((0,_app_features_gameSlice__WEBPACK_IMPORTED_MODULE_1__.loadGameData)());\n        dispatch((0,_app_features_gameSlice__WEBPACK_IMPORTED_MODULE_1__.gamePuzzle)());\n    };\n    const handleNewCategory = ()=>{};\n    const handleQuitGame = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"options\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handlePlayAgain,\n                className: \"option-1\",\n                children: \"play again\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\game\\\\Options.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"option-1\",\n                children: \"new category\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\game\\\\Options.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"option-2\",\n                children: \"quit game\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\game\\\\Options.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\game\\\\Options.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Options, \"BJQ1DUn/XFEl2NsQ3DWyHAXfnkY=\", false, function() {\n    return [\n        _app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = Options;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Options);\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2dhbWUvT3B0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDK0U7QUFDbEM7QUFDbkI7QUFFMUIsTUFBTUssVUFBVTs7SUFDZCxNQUFNQyxXQUFXSCwwREFBY0E7SUFDL0IsTUFBTUksa0JBQWtCO1FBQ3RCRCxTQUFTSixrRUFBU0E7UUFDbEJJLFNBQVNMLHFFQUFZQTtRQUNyQkssU0FBU04sbUVBQVVBO0lBQ3JCO0lBQ0EsTUFBTVEsb0JBQW9CLEtBQU87SUFDakMsTUFBTUMsaUJBQWlCLEtBQU87SUFDOUIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBT0MsU0FBU047Z0JBQWlCSSxXQUFVOzBCQUFXOzs7Ozs7MEJBR3ZELDhEQUFDQztnQkFBT0QsV0FBVTswQkFBVzs7Ozs7OzBCQUM3Qiw4REFBQ0M7Z0JBQU9ELFdBQVU7MEJBQVc7Ozs7Ozs7Ozs7OztBQUduQztHQWxCTU47O1FBQ2FGLHNEQUFjQTs7O0tBRDNCRTtBQW9CTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9nYW1lL09wdGlvbnMudHN4PzU2ODUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IGdhbWVQdXp6bGUsIGxvYWRHYW1lRGF0YSwgcGxheUFnYWluIH0gZnJvbSBcIkAvYXBwL2ZlYXR1cmVzL2dhbWVTbGljZVwiO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gXCJAL2FwcC9ob29rc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBPcHRpb25zID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuICBjb25zdCBoYW5kbGVQbGF5QWdhaW4gPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChwbGF5QWdhaW4oKSk7XHJcbiAgICBkaXNwYXRjaChsb2FkR2FtZURhdGEoKSk7XHJcbiAgICBkaXNwYXRjaChnYW1lUHV6emxlKCkpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlTmV3Q2F0ZWdvcnkgPSAoKSA9PiB7fTtcclxuICBjb25zdCBoYW5kbGVRdWl0R2FtZSA9ICgpID0+IHt9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQbGF5QWdhaW59IGNsYXNzTmFtZT1cIm9wdGlvbi0xXCI+XHJcbiAgICAgICAgcGxheSBhZ2FpblxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb24tMVwiPm5ldyBjYXRlZ29yeTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbi0yXCI+cXVpdCBnYW1lPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3B0aW9ucztcclxuIl0sIm5hbWVzIjpbImdhbWVQdXp6bGUiLCJsb2FkR2FtZURhdGEiLCJwbGF5QWdhaW4iLCJ1c2VBcHBEaXNwYXRjaCIsIlJlYWN0IiwiT3B0aW9ucyIsImRpc3BhdGNoIiwiaGFuZGxlUGxheUFnYWluIiwiaGFuZGxlTmV3Q2F0ZWdvcnkiLCJoYW5kbGVRdWl0R2FtZSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/game/Options.tsx\n"));

/***/ })

});