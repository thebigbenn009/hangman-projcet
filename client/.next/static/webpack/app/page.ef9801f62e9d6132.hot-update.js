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

/***/ "(app-pages-browser)/./app/features/initialize/initialize.ts":
/*!***********************************************!*\
  !*** ./app/features/initialize/initialize.ts ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeHowToPlay: function() { return /* binding */ closeHowToPlay; },\n/* harmony export */   closeInitializeStart: function() { return /* binding */ closeInitializeStart; },\n/* harmony export */   initializeSlice: function() { return /* binding */ initializeSlice; },\n/* harmony export */   isHowToPlayMode: function() { return /* binding */ isHowToPlayMode; },\n/* harmony export */   isStartMode: function() { return /* binding */ isStartMode; },\n/* harmony export */   openHowToPlay: function() { return /* binding */ openHowToPlay; },\n/* harmony export */   openInitializeStart: function() { return /* binding */ openInitializeStart; },\n/* harmony export */   setNewCategory: function() { return /* binding */ setNewCategory; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    isHowToPlay: false,\n    isStart: false,\n    newCategory: false\n};\nconst initializeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"initilize\",\n    initialState,\n    reducers: {\n        openHowToPlay: (state)=>{\n            state.isHowToPlay = true;\n        },\n        closeHowToPlay: (state)=>{\n            state.isHowToPlay = false;\n        },\n        openInitializeStart: (state)=>{\n            state.isStart = true;\n        },\n        closeInitializeStart: (state)=>{\n            state.isStart = false;\n        },\n        setNewCategory: (state)=>{\n            state.newCategory = true;\n        }\n    }\n});\nconst { openHowToPlay, closeHowToPlay, closeInitializeStart, setNewCategory, openInitializeStart } = initializeSlice.actions;\nconst isHowToPlayMode = (state)=>state.initialize.isHowToPlay;\nconst isStartMode = (state)=>state.initialize.isStart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (initializeSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9mZWF0dXJlcy9pbml0aWFsaXplL2luaXRpYWxpemUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQytDO0FBTy9DLE1BQU1DLGVBQTZCO0lBQ2pDQyxhQUFhO0lBQ2JDLFNBQVM7SUFDVEMsYUFBYTtBQUNmO0FBQ08sTUFBTUMsa0JBQWtCTCw2REFBV0EsQ0FBQztJQUN6Q00sTUFBTTtJQUNOTDtJQUNBTSxVQUFVO1FBQ1JDLGVBQWUsQ0FBQ0M7WUFDZEEsTUFBTVAsV0FBVyxHQUFHO1FBQ3RCO1FBQ0FRLGdCQUFnQixDQUFDRDtZQUNmQSxNQUFNUCxXQUFXLEdBQUc7UUFDdEI7UUFDQVMscUJBQXFCLENBQUNGO1lBQ3BCQSxNQUFNTixPQUFPLEdBQUc7UUFDbEI7UUFDQVMsc0JBQXNCLENBQUNIO1lBQ3JCQSxNQUFNTixPQUFPLEdBQUc7UUFDbEI7UUFDQVUsZ0JBQWdCLENBQUNKO1lBQ2ZBLE1BQU1MLFdBQVcsR0FBRztRQUN0QjtJQUNGO0FBQ0YsR0FBRztBQUNJLE1BQU0sRUFDWEksYUFBYSxFQUNiRSxjQUFjLEVBQ2RFLG9CQUFvQixFQUNwQkMsY0FBYyxFQUNkRixtQkFBbUIsRUFDcEIsR0FBR04sZ0JBQWdCUyxPQUFPLENBQUM7QUFDckIsTUFBTUMsa0JBQWtCLENBQUNOLFFBQzlCQSxNQUFNTyxVQUFVLENBQUNkLFdBQVcsQ0FBQztBQUN4QixNQUFNZSxjQUFjLENBQUNSLFFBQXFCQSxNQUFNTyxVQUFVLENBQUNiLE9BQU8sQ0FBQztBQUMxRSwrREFBZUUsZ0JBQWdCYSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2ZlYXR1cmVzL2luaXRpYWxpemUvaW5pdGlhbGl6ZS50cz82OWExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJAL2FwcC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5pbnRlcmZhY2UgSW5pdGlhbFN0YXRlIHtcclxuICBpc0hvd1RvUGxheTogYm9vbGVhbjtcclxuICBpc1N0YXJ0OiBib29sZWFuO1xyXG4gIG5ld0NhdGVnb3J5OiBib29sZWFuO1xyXG59XHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzSG93VG9QbGF5OiBmYWxzZSxcclxuICBpc1N0YXJ0OiBmYWxzZSxcclxuICBuZXdDYXRlZ29yeTogZmFsc2UsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJpbml0aWxpemVcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIG9wZW5Ib3dUb1BsYXk6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0hvd1RvUGxheSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgY2xvc2VIb3dUb1BsYXk6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0hvd1RvUGxheSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIG9wZW5Jbml0aWFsaXplU3RhcnQ6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5pc1N0YXJ0ID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBjbG9zZUluaXRpYWxpemVTdGFydDogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzU3RhcnQgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzZXROZXdDYXRlZ29yeTogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLm5ld0NhdGVnb3J5ID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgb3Blbkhvd1RvUGxheSxcclxuICBjbG9zZUhvd1RvUGxheSxcclxuICBjbG9zZUluaXRpYWxpemVTdGFydCxcclxuICBzZXROZXdDYXRlZ29yeSxcclxuICBvcGVuSW5pdGlhbGl6ZVN0YXJ0LFxyXG59ID0gaW5pdGlhbGl6ZVNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBjb25zdCBpc0hvd1RvUGxheU1vZGUgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT5cclxuICBzdGF0ZS5pbml0aWFsaXplLmlzSG93VG9QbGF5O1xyXG5leHBvcnQgY29uc3QgaXNTdGFydE1vZGUgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuaW5pdGlhbGl6ZS5pc1N0YXJ0O1xyXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplU2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiaXNIb3dUb1BsYXkiLCJpc1N0YXJ0IiwibmV3Q2F0ZWdvcnkiLCJpbml0aWFsaXplU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJvcGVuSG93VG9QbGF5Iiwic3RhdGUiLCJjbG9zZUhvd1RvUGxheSIsIm9wZW5Jbml0aWFsaXplU3RhcnQiLCJjbG9zZUluaXRpYWxpemVTdGFydCIsInNldE5ld0NhdGVnb3J5IiwiYWN0aW9ucyIsImlzSG93VG9QbGF5TW9kZSIsImluaXRpYWxpemUiLCJpc1N0YXJ0TW9kZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/features/initialize/initialize.ts\n"));

/***/ })

});