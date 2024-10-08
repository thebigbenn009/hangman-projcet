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

/***/ "(app-pages-browser)/./app/components/game/Puzzle.tsx":
/*!****************************************!*\
  !*** ./app/components/game/Puzzle.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_features_gameSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/features/gameSlice */ \"(app-pages-browser)/./app/features/gameSlice.ts\");\n/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/hooks */ \"(app-pages-browser)/./app/hooks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Puzzle = ()=>{\n    _s();\n    const dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const [clickedIndex, setClickedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const missingWords = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.game.missingWords);\n    const [inputValues, setInputValues] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (missingWords) {\n            setInputValues(missingWords === null || missingWords === void 0 ? void 0 : missingWords.map((word)=>word !== null && word !== void 0 ? word : \"\"));\n        }\n        console.log(missingWords);\n    }, [\n        missingWords\n    ]);\n    const handleInputChange = (index, event)=>{\n        const newInputValues = [\n            ...inputValues\n        ];\n        newInputValues[index] = event.target.value;\n        console.log(index, event.target.value);\n        setInputValues(newInputValues);\n        dispatch((0,_app_features_gameSlice__WEBPACK_IMPORTED_MODULE_1__.updateAnswer)(newInputValues));\n        dispatch((0,_app_features_gameSlice__WEBPACK_IMPORTED_MODULE_1__.checkForCorrectAnswer)(newInputValues));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"words\",\n            children: inputValues.length > 0 ? inputValues.map((value, index)=>value === \" \" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"puzzle-whitespace\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\game\\\\Puzzle.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 15\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"puzzle \".concat(value === \"\" ? \"puzzle-space\" : \"\", \" \"),\n                    type: \"text\",\n                    value: value,\n                    onChange: (event)=>handleInputChange(index, event),\n                    readOnly: !!missingWords[index]\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\game\\\\Puzzle.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 15\n                }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\game\\\\Puzzle.tsx\",\n                lineNumber: 55,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\game\\\\Puzzle.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\game\\\\Puzzle.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Puzzle, \"364V9JzAGKLLDgqxOdDhF17UGvI=\", false, function() {\n    return [\n        _app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Puzzle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Puzzle);\nvar _c;\n$RefreshReg$(_c, \"Puzzle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2dhbWUvUHV6emxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMrRTtBQUNsQjtBQUVWO0FBRW5ELE1BQU1PLFNBQVM7O0lBQ2IsTUFBTUMsV0FBV04sMERBQWNBO0lBQy9CLE1BQU0sQ0FBQ08sY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFnQjtJQUVoRSxNQUFNSyxlQUFlUiwwREFBY0EsQ0FDakMsQ0FBQ1MsUUFBcUJBLE1BQU1DLElBQUksQ0FBQ0YsWUFBWTtJQUcvQyxNQUFNLENBQUNHLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQVcsRUFBRTtJQUMzREQsZ0RBQVNBLENBQUM7UUFDUixJQUFJTSxjQUFjO1lBQ2hCSSxlQUFlSix5QkFBQUEsbUNBQUFBLGFBQWNLLEdBQUcsQ0FBQyxDQUFDQyxPQUFTQSxpQkFBQUEsa0JBQUFBLE9BQVE7UUFDckQ7UUFDQUMsUUFBUUMsR0FBRyxDQUFDUjtJQUNkLEdBQUc7UUFBQ0E7S0FBYTtJQUVqQixNQUFNUyxvQkFBb0IsQ0FDeEJDLE9BQ0FDO1FBRUEsTUFBTUMsaUJBQWlCO2VBQUlUO1NBQVk7UUFDdkNTLGNBQWMsQ0FBQ0YsTUFBTSxHQUFHQyxNQUFNRSxNQUFNLENBQUNDLEtBQUs7UUFDMUNQLFFBQVFDLEdBQUcsQ0FBQ0UsT0FBT0MsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO1FBRXJDVixlQUFlUTtRQUNmZixTQUFTUCxxRUFBWUEsQ0FBQ3NCO1FBQ3RCZixTQUFTUiw4RUFBcUJBLENBQUN1QjtJQUNqQztJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNaYixZQUFZYyxNQUFNLEdBQUcsSUFDcEJkLFlBQVlFLEdBQUcsQ0FBQyxDQUFDUyxPQUFPSixRQUN0QkksVUFBVSxvQkFDUiw4REFBQ0k7b0JBQUtGLFdBQVU7Ozs7OzhDQUVoQiw4REFBQ0c7b0JBRUNILFdBQVcsVUFBNkMsT0FBbkNGLFVBQVUsS0FBSyxpQkFBaUIsSUFBRztvQkFDeERNLE1BQUs7b0JBQ0xOLE9BQU9BO29CQUNQTyxVQUFVLENBQUNWLFFBQVVGLGtCQUFrQkMsT0FBT0M7b0JBQzlDVyxVQUFVLENBQUMsQ0FBQ3RCLFlBQWEsQ0FBQ1UsTUFBTTttQkFMM0JBOzs7OytDQVVYLDhEQUFDYTswQkFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQUtiO0dBckRNM0I7O1FBQ2FMLHNEQUFjQTtRQUdWQyxzREFBY0E7OztLQUovQkk7QUF1RE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvZ2FtZS9QdXp6bGUudHN4P2E5NWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IGNoZWNrRm9yQ29ycmVjdEFuc3dlciwgdXBkYXRlQW5zd2VyIH0gZnJvbSBcIkAvYXBwL2ZlYXR1cmVzL2dhbWVTbGljZVwiO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9hcHAvaG9va3NcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIkAvYXBwL3N0b3JlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQdXp6bGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtjbGlja2VkSW5kZXgsIHNldENsaWNrZWRJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgbWlzc2luZ1dvcmRzID0gdXNlQXBwU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuZ2FtZS5taXNzaW5nV29yZHNcclxuICApO1xyXG5cclxuICBjb25zdCBbaW5wdXRWYWx1ZXMsIHNldElucHV0VmFsdWVzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtaXNzaW5nV29yZHMpIHtcclxuICAgICAgc2V0SW5wdXRWYWx1ZXMobWlzc2luZ1dvcmRzPy5tYXAoKHdvcmQpID0+IHdvcmQgPz8gXCJcIikpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cobWlzc2luZ1dvcmRzKTtcclxuICB9LCBbbWlzc2luZ1dvcmRzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKFxyXG4gICAgaW5kZXg6IG51bWJlcixcclxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgbmV3SW5wdXRWYWx1ZXMgPSBbLi4uaW5wdXRWYWx1ZXNdO1xyXG4gICAgbmV3SW5wdXRWYWx1ZXNbaW5kZXhdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coaW5kZXgsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgc2V0SW5wdXRWYWx1ZXMobmV3SW5wdXRWYWx1ZXMpO1xyXG4gICAgZGlzcGF0Y2godXBkYXRlQW5zd2VyKG5ld0lucHV0VmFsdWVzKSk7XHJcbiAgICBkaXNwYXRjaChjaGVja0ZvckNvcnJlY3RBbnN3ZXIobmV3SW5wdXRWYWx1ZXMpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3Jkc1wiPlxyXG4gICAgICAgIHtpbnB1dFZhbHVlcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgaW5wdXRWYWx1ZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgIHZhbHVlID09PSBcIiBcIiA/IChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdXp6bGUtd2hpdGVzcGFjZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwdXp6bGUgJHt2YWx1ZSA9PT0gXCJcIiA/IFwicHV6emxlLXNwYWNlXCIgOiBcIlwifSBgfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoaW5kZXgsIGV2ZW50KX0gLy9cclxuICAgICAgICAgICAgICAgIHJlYWRPbmx5PXshIW1pc3NpbmdXb3JkcyFbaW5kZXhdfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdXp6bGU7XHJcbiJdLCJuYW1lcyI6WyJjaGVja0ZvckNvcnJlY3RBbnN3ZXIiLCJ1cGRhdGVBbnN3ZXIiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlB1enpsZSIsImRpc3BhdGNoIiwiY2xpY2tlZEluZGV4Iiwic2V0Q2xpY2tlZEluZGV4IiwibWlzc2luZ1dvcmRzIiwic3RhdGUiLCJnYW1lIiwiaW5wdXRWYWx1ZXMiLCJzZXRJbnB1dFZhbHVlcyIsIm1hcCIsIndvcmQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJpbmRleCIsImV2ZW50IiwibmV3SW5wdXRWYWx1ZXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInJlYWRPbmx5IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/game/Puzzle.tsx\n"));

/***/ })

});