"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/how to play/HowToPlay.tsx":
/*!**************************************************!*\
  !*** ./app/components/how to play/HowToPlay.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HowToPlayCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HowToPlayCard */ \"(app-pages-browser)/./app/components/how to play/HowToPlayCard.tsx\");\n\n\n\nconst howToPlayInfo = [\n    {\n        num: 1,\n        title: \"Choose a category\",\n        body: \"First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.\"\n    },\n    {\n        num: 2,\n        title: \"Guess letters\",\n        body: \"Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.\"\n    },\n    {\n        num: 3,\n        title: \"win or lose\",\n        body: \"You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.\"\n    }\n];\nconst HowToPlay = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"section-how-to-play\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"how-to-play-header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"how to play\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\how to play\\\\HowToPlay.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\how to play\\\\HowToPlay.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"how-to-play-wrapper\",\n                children: howToPlayInfo.map((el)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HowToPlayCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        ...el\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\how to play\\\\HowToPlay.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 18\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\how to play\\\\HowToPlay.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\BENEDICT\\\\Desktop\\\\hang\\\\client\\\\app\\\\components\\\\how to play\\\\HowToPlay.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_c = HowToPlay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HowToPlay);\nvar _c;\n$RefreshReg$(_c, \"HowToPlay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2hvdyB0byBwbGF5L0hvd1RvUGxheS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBQzBDO0FBSXBFLE1BQU1FLGdCQUFvQztJQUN4QztRQUNFQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUNBO1FBQ0VGLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxNQUFNO0lBQ1I7Q0FDRDtBQUNELE1BQU1DLFlBQVk7SUFDaEIscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNFOzhCQUFHOzs7Ozs7Ozs7OzswQkFFTiw4REFBQ0Q7Z0JBQUlELFdBQVU7MEJBQ1pOLGNBQWNTLEdBQUcsQ0FBQyxDQUFDQztvQkFDbEIscUJBQU8sOERBQUNYLHNEQUFhQTt3QkFBRSxHQUFHVyxFQUFFOzs7Ozs7Z0JBQzlCOzs7Ozs7Ozs7Ozs7QUFJUjtLQWJNTjtBQWVOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2hvdyB0byBwbGF5L0hvd1RvUGxheS50c3g/Nzk5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIb3dUb1BsYXlDYXJkLCB7IEhvd1RvUGxheUNhcmRQcm9wcyB9IGZyb20gXCIuL0hvd1RvUGxheUNhcmRcIjtcclxuaW50ZXJmYWNlIEhvd1RvUGxheUluZm9Qcm9wcyB7XHJcbiAgaW5mbzogW0hvd1RvUGxheUNhcmRQcm9wc107XHJcbn1cclxuY29uc3QgaG93VG9QbGF5SW5mbzogSG93VG9QbGF5SW5mb1Byb3BzID0gW1xyXG4gIHtcclxuICAgIG51bTogMSxcclxuICAgIHRpdGxlOiBcIkNob29zZSBhIGNhdGVnb3J5XCIsXHJcbiAgICBib2R5OiBcIkZpcnN0LCBjaG9vc2UgYSB3b3JkIGNhdGVnb3J5LCBsaWtlIGFuaW1hbHMgb3IgbW92aWVzLiBUaGUgY29tcHV0ZXIgdGhlbiByYW5kb21seSBzZWxlY3RzIGEgc2VjcmV0IHdvcmQgZnJvbSB0aGF0IHRvcGljIGFuZCBzaG93cyB5b3UgYmxhbmtzIGZvciBlYWNoIGxldHRlciBvZiB0aGUgd29yZC5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogMixcclxuICAgIHRpdGxlOiBcIkd1ZXNzIGxldHRlcnNcIixcclxuICAgIGJvZHk6IFwiVGFrZSB0dXJucyBndWVzc2luZyBsZXR0ZXJzLiBUaGUgY29tcHV0ZXIgZmlsbHMgaW4gdGhlIHJlbGV2YW50IGJsYW5rIHNwYWNlcyBpZiB5b3VyIGd1ZXNzIGlzIGNvcnJlY3QuIElmIGl04oCZcyB3cm9uZywgeW91IGxvc2Ugc29tZSBoZWFsdGgsIHdoaWNoIGVtcHRpZXMgYWZ0ZXIgZWlnaHQgaW5jb3JyZWN0IGd1ZXNzZXMuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06IDMsXHJcbiAgICB0aXRsZTogXCJ3aW4gb3IgbG9zZVwiLFxyXG4gICAgYm9keTogXCJZb3Ugd2luIGJ5IGd1ZXNzaW5nIGFsbCB0aGUgbGV0dGVycyBpbiB0aGUgd29yZCBiZWZvcmUgeW91ciBoZWFsdGggcnVucyBvdXQuIElmIHRoZSBoZWFsdGggYmFyIGVtcHRpZXMgYmVmb3JlIHlvdSBndWVzcyB0aGUgd29yZCwgeW91IGxvc2UuXCIsXHJcbiAgfSxcclxuXTtcclxuY29uc3QgSG93VG9QbGF5ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLWhvdy10by1wbGF5XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG93LXRvLXBsYXktaGVhZGVyXCI+XHJcbiAgICAgICAgPGgxPmhvdyB0byBwbGF5PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG93LXRvLXBsYXktd3JhcHBlclwiPlxyXG4gICAgICAgIHtob3dUb1BsYXlJbmZvLm1hcCgoZWwpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8SG93VG9QbGF5Q2FyZCB7Li4uZWx9IC8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG93VG9QbGF5O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIb3dUb1BsYXlDYXJkIiwiaG93VG9QbGF5SW5mbyIsIm51bSIsInRpdGxlIiwiYm9keSIsIkhvd1RvUGxheSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsIm1hcCIsImVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/how to play/HowToPlay.tsx\n"));

/***/ })

});