"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/features/gameSlice.ts":
/*!***********************************!*\
  !*** ./app/features/gameSlice.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkForCorrectAnswer: function() { return /* binding */ checkForCorrectAnswer; },\n/* harmony export */   gamePuzzle: function() { return /* binding */ gamePuzzle; },\n/* harmony export */   gameSlice: function() { return /* binding */ gameSlice; },\n/* harmony export */   loadGameData: function() { return /* binding */ loadGameData; },\n/* harmony export */   updateAnswer: function() { return /* binding */ updateAnswer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    category: null,\n    game: null,\n    missingWords: null,\n    correctWords: null,\n    userOption: null,\n    isCorrect: null,\n    alphabets: [\n        \"a\",\n        \"b\",\n        \"c\",\n        \"d\",\n        \"e\",\n        \"f\",\n        \"g\",\n        \"h\",\n        \"i\",\n        \"j\",\n        \"k\",\n        \"l\",\n        \"m\",\n        \"n\",\n        \"o\",\n        \"p\",\n        \"q\",\n        \"r\",\n        \"s\",\n        \"t\",\n        \"u\",\n        \"v\",\n        \"w\",\n        \"x\",\n        \"y\",\n        \"z\"\n    ]\n};\nconst gameSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"game\",\n    initialState,\n    reducers: {\n        loadGameData: (state, action)=>{\n            state.category = action.payload;\n            state.game = action.payload.items[0];\n        },\n        gamePuzzle: (state)=>{\n            if (state.game) {\n                const actualWord = state.game.name.split(\"\");\n                state.correctWords = actualWord;\n                const missingCharacters = Math.floor(actualWord.length * 0.5);\n                let missingWordsArray = [\n                    ...actualWord\n                ];\n                let removedWords = 0;\n                while(removedWords < missingCharacters){\n                    const randomIndex = Math.floor(Math.random() * actualWord.length);\n                    if (missingWordsArray[randomIndex] !== \"\" && missingWordsArray[randomIndex] !== \" \") {\n                        missingWordsArray[randomIndex] = \"\";\n                        removedWords++;\n                    }\n                }\n                state.missingWords = missingWordsArray;\n            }\n        },\n        updateAnswer: (state, action)=>{\n            state.userOption = action.payload;\n        },\n        checkForCorrectAnswer: (state, action)=>{\n        ///Goes here\n        }\n    }\n});\nconst { loadGameData, gamePuzzle, updateAnswer, checkForCorrectAnswer } = gameSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9mZWF0dXJlcy9nYW1lU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThEO0FBc0I5RCxNQUFNQyxlQUE2QjtJQUNqQ0MsVUFBVTtJQUNWQyxNQUFNO0lBQ05DLGNBQWM7SUFDZEMsY0FBYztJQUNkQyxZQUFZO0lBQ1pDLFdBQVc7SUFDWEMsV0FBVztRQUNUO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtBQUNIO0FBQ08sTUFBTUMsWUFBWVQsNkRBQVdBLENBQUM7SUFDbkNVLE1BQU07SUFDTlQ7SUFDQVUsVUFBVTtRQUNSQyxjQUFjLENBQUNDLE9BQU9DO1lBQ3BCRCxNQUFNWCxRQUFRLEdBQUdZLE9BQU9DLE9BQU87WUFDL0JGLE1BQU1WLElBQUksR0FBR1csT0FBT0MsT0FBTyxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUN0QztRQUNBQyxZQUFZLENBQUNKO1lBQ1gsSUFBSUEsTUFBTVYsSUFBSSxFQUFFO2dCQUNkLE1BQU1lLGFBQWFMLE1BQU1WLElBQUksQ0FBQ08sSUFBSSxDQUFDUyxLQUFLLENBQUM7Z0JBRXpDTixNQUFNUixZQUFZLEdBQUdhO2dCQUNyQixNQUFNRSxvQkFBb0JDLEtBQUtDLEtBQUssQ0FBQ0osV0FBV0ssTUFBTSxHQUFHO2dCQUN6RCxJQUFJQyxvQkFBb0I7dUJBQUlOO2lCQUFXO2dCQUN2QyxJQUFJTyxlQUFlO2dCQUNuQixNQUFPQSxlQUFlTCxrQkFBbUI7b0JBQ3ZDLE1BQU1NLGNBQWNMLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS00sTUFBTSxLQUFLVCxXQUFXSyxNQUFNO29CQUNoRSxJQUNFQyxpQkFBaUIsQ0FBQ0UsWUFBWSxLQUFLLE1BQ25DRixpQkFBaUIsQ0FBQ0UsWUFBWSxLQUFLLEtBQ25DO3dCQUNBRixpQkFBaUIsQ0FBQ0UsWUFBWSxHQUFHO3dCQUNqQ0Q7b0JBQ0Y7Z0JBQ0Y7Z0JBRUFaLE1BQU1ULFlBQVksR0FBR29CO1lBQ3ZCO1FBQ0Y7UUFDQUksY0FBYyxDQUNaZixPQUNBQztZQUVBRCxNQUFNUCxVQUFVLEdBQUdRLE9BQU9DLE9BQU87UUFDbkM7UUFDQWMsdUJBQXVCLENBQUNoQixPQUFPQztRQUM3QixZQUFZO1FBQ2Q7SUFDRjtBQUNGLEdBQUc7QUFFSSxNQUFNLEVBQUVGLFlBQVksRUFBRUssVUFBVSxFQUFFVyxZQUFZLEVBQUVDLHFCQUFxQixFQUFFLEdBQzVFcEIsVUFBVXFCLE9BQU8sQ0FBQztBQUNwQiwrREFBZXJCLFVBQVVzQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2ZlYXR1cmVzL2dhbWVTbGljZS50cz8wMDg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5pbnRlcmZhY2UgR2FtZURhdGEge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzZWxlY3RlZDogYm9vbGVhbjtcclxuICBfaWQ6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5RGF0YSB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGl0ZW1zOiBHYW1lRGF0YVtdO1xyXG59XHJcbmludGVyZmFjZSBJbml0aWFsU3RhdGUge1xyXG4gIGNhdGVnb3J5OiBDYXRlZ29yeURhdGEgfCBudWxsO1xyXG4gIGdhbWU6IEdhbWVEYXRhIHwgbnVsbDtcclxuICBtaXNzaW5nV29yZHM6IHN0cmluZ1tdIHwgbnVsbDtcclxuICBhbHBoYWJldHM6IHN0cmluZ1tdO1xyXG4gIHVzZXJPcHRpb246IHN0cmluZ1tdIHwgbnVsbDtcclxuICBjb3JyZWN0V29yZHM6IHN0cmluZ1tdIHwgbnVsbDtcclxuICBpc0NvcnJlY3Q6IGJvb2xlYW4gfCBudWxsO1xyXG59XHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pdGlhbFN0YXRlID0ge1xyXG4gIGNhdGVnb3J5OiBudWxsLFxyXG4gIGdhbWU6IG51bGwsXHJcbiAgbWlzc2luZ1dvcmRzOiBudWxsLFxyXG4gIGNvcnJlY3RXb3JkczogbnVsbCxcclxuICB1c2VyT3B0aW9uOiBudWxsLFxyXG4gIGlzQ29ycmVjdDogbnVsbCxcclxuICBhbHBoYWJldHM6IFtcclxuICAgIFwiYVwiLFxyXG4gICAgXCJiXCIsXHJcbiAgICBcImNcIixcclxuICAgIFwiZFwiLFxyXG4gICAgXCJlXCIsXHJcbiAgICBcImZcIixcclxuICAgIFwiZ1wiLFxyXG4gICAgXCJoXCIsXHJcbiAgICBcImlcIixcclxuICAgIFwialwiLFxyXG4gICAgXCJrXCIsXHJcbiAgICBcImxcIixcclxuICAgIFwibVwiLFxyXG4gICAgXCJuXCIsXHJcbiAgICBcIm9cIixcclxuICAgIFwicFwiLFxyXG4gICAgXCJxXCIsXHJcbiAgICBcInJcIixcclxuICAgIFwic1wiLFxyXG4gICAgXCJ0XCIsXHJcbiAgICBcInVcIixcclxuICAgIFwidlwiLFxyXG4gICAgXCJ3XCIsXHJcbiAgICBcInhcIixcclxuICAgIFwieVwiLFxyXG4gICAgXCJ6XCIsXHJcbiAgXSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGdhbWVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImdhbWVcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGxvYWRHYW1lRGF0YTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Q2F0ZWdvcnlEYXRhPikgPT4ge1xyXG4gICAgICBzdGF0ZS5jYXRlZ29yeSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICBzdGF0ZS5nYW1lID0gYWN0aW9uLnBheWxvYWQuaXRlbXNbMF07XHJcbiAgICB9LFxyXG4gICAgZ2FtZVB1enpsZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgIGlmIChzdGF0ZS5nYW1lKSB7XHJcbiAgICAgICAgY29uc3QgYWN0dWFsV29yZCA9IHN0YXRlLmdhbWUubmFtZS5zcGxpdChcIlwiKTtcclxuXHJcbiAgICAgICAgc3RhdGUuY29ycmVjdFdvcmRzID0gYWN0dWFsV29yZDtcclxuICAgICAgICBjb25zdCBtaXNzaW5nQ2hhcmFjdGVycyA9IE1hdGguZmxvb3IoYWN0dWFsV29yZC5sZW5ndGggKiAwLjUpO1xyXG4gICAgICAgIGxldCBtaXNzaW5nV29yZHNBcnJheSA9IFsuLi5hY3R1YWxXb3JkXTtcclxuICAgICAgICBsZXQgcmVtb3ZlZFdvcmRzID0gMDtcclxuICAgICAgICB3aGlsZSAocmVtb3ZlZFdvcmRzIDwgbWlzc2luZ0NoYXJhY3RlcnMpIHtcclxuICAgICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWN0dWFsV29yZC5sZW5ndGgpO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBtaXNzaW5nV29yZHNBcnJheVtyYW5kb21JbmRleF0gIT09IFwiXCIgJiZcclxuICAgICAgICAgICAgbWlzc2luZ1dvcmRzQXJyYXlbcmFuZG9tSW5kZXhdICE9PSBcIiBcIlxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIG1pc3NpbmdXb3Jkc0FycmF5W3JhbmRvbUluZGV4XSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHJlbW92ZWRXb3JkcysrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGUubWlzc2luZ1dvcmRzID0gbWlzc2luZ1dvcmRzQXJyYXk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGVBbnN3ZXI6IChcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IGluZGV4OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT5cclxuICAgICkgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyT3B0aW9uID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tGb3JDb3JyZWN0QW5zd2VyOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmdbXT4pID0+IHtcclxuICAgICAgLy8vR29lcyBoZXJlXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgbG9hZEdhbWVEYXRhLCBnYW1lUHV6emxlLCB1cGRhdGVBbnN3ZXIsIGNoZWNrRm9yQ29ycmVjdEFuc3dlciB9ID1cclxuICBnYW1lU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgZ2FtZVNsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImNhdGVnb3J5IiwiZ2FtZSIsIm1pc3NpbmdXb3JkcyIsImNvcnJlY3RXb3JkcyIsInVzZXJPcHRpb24iLCJpc0NvcnJlY3QiLCJhbHBoYWJldHMiLCJnYW1lU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJsb2FkR2FtZURhdGEiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJpdGVtcyIsImdhbWVQdXp6bGUiLCJhY3R1YWxXb3JkIiwic3BsaXQiLCJtaXNzaW5nQ2hhcmFjdGVycyIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsIm1pc3NpbmdXb3Jkc0FycmF5IiwicmVtb3ZlZFdvcmRzIiwicmFuZG9tSW5kZXgiLCJyYW5kb20iLCJ1cGRhdGVBbnN3ZXIiLCJjaGVja0ZvckNvcnJlY3RBbnN3ZXIiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/features/gameSlice.ts\n"));

/***/ })

});