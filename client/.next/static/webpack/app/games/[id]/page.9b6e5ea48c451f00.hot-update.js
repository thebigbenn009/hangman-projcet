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

/***/ "(app-pages-browser)/./app/features/gameSlice.ts":
/*!***********************************!*\
  !*** ./app/features/gameSlice.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkForCorrectAnswer: function() { return /* binding */ checkForCorrectAnswer; },\n/* harmony export */   gamePuzzle: function() { return /* binding */ gamePuzzle; },\n/* harmony export */   gameSlice: function() { return /* binding */ gameSlice; },\n/* harmony export */   loadGameData: function() { return /* binding */ loadGameData; },\n/* harmony export */   updateAnswer: function() { return /* binding */ updateAnswer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    category: null,\n    numOfTriesLeft: 8,\n    game: null,\n    missingWords: null,\n    correctWords: null,\n    userOption: null,\n    isCorrect: null,\n    alphabets: [\n        \"a\",\n        \"b\",\n        \"c\",\n        \"d\",\n        \"e\",\n        \"f\",\n        \"g\",\n        \"h\",\n        \"i\",\n        \"j\",\n        \"k\",\n        \"l\",\n        \"m\",\n        \"n\",\n        \"o\",\n        \"p\",\n        \"q\",\n        \"r\",\n        \"s\",\n        \"t\",\n        \"u\",\n        \"v\",\n        \"w\",\n        \"x\",\n        \"y\",\n        \"z\"\n    ]\n};\nconst gameSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"game\",\n    initialState,\n    reducers: {\n        loadGameData: (state, action)=>{\n            state.category = action.payload;\n            state.game = action.payload.items[0];\n        },\n        gamePuzzle: (state)=>{\n            if (state.game) {\n                const actualWord = state.game.name.split(\"\");\n                state.correctWords = actualWord;\n                const missingCharacters = Math.floor(actualWord.length * 0.5);\n                let missingWordsArray = [\n                    ...actualWord\n                ];\n                let removedWords = 0;\n                while(removedWords < missingCharacters){\n                    const randomIndex = Math.floor(Math.random() * actualWord.length);\n                    if (missingWordsArray[randomIndex] !== \"\" && missingWordsArray[randomIndex] !== \" \") {\n                        missingWordsArray[randomIndex] = \"\";\n                        removedWords++;\n                    }\n                }\n                state.missingWords = missingWordsArray;\n            }\n        },\n        updateAnswer: (state, action)=>{\n            state.userOption = action.payload;\n        },\n        checkForCorrectAnswer: (state, action)=>{\n            const { index, value } = action.payload;\n            if (!state.correctWords) {\n                return;\n            }\n            const correctWordMatch = state.correctWords[index];\n            if (value === \"\") {\n                return;\n            }\n            if (correctWordMatch.toLowerCase() !== value.toLowerCase()) {\n                state.isCorrect = false;\n                state.numOfTriesLeft--;\n            } else if (correctWordMatch.toLowerCase() === value.toLowerCase()) {\n                state.isCorrect = true;\n            }\n        }\n    }\n});\nconst { loadGameData, gamePuzzle, updateAnswer, checkForCorrectAnswer } = gameSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9mZWF0dXJlcy9nYW1lU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThEO0FBd0I5RCxNQUFNQyxlQUE2QjtJQUNqQ0MsVUFBVTtJQUNWQyxnQkFBZ0I7SUFDaEJDLE1BQU07SUFDTkMsY0FBYztJQUNkQyxjQUFjO0lBQ2RDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxXQUFXO1FBQ1Q7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0FBQ0g7QUFDTyxNQUFNQyxZQUFZViw2REFBV0EsQ0FBQztJQUNuQ1csTUFBTTtJQUNOVjtJQUNBVyxVQUFVO1FBQ1JDLGNBQWMsQ0FBQ0MsT0FBT0M7WUFDcEJELE1BQU1aLFFBQVEsR0FBR2EsT0FBT0MsT0FBTztZQUMvQkYsTUFBTVYsSUFBSSxHQUFHVyxPQUFPQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxFQUFFO1FBQ3RDO1FBQ0FDLFlBQVksQ0FBQ0o7WUFDWCxJQUFJQSxNQUFNVixJQUFJLEVBQUU7Z0JBQ2QsTUFBTWUsYUFBYUwsTUFBTVYsSUFBSSxDQUFDTyxJQUFJLENBQUNTLEtBQUssQ0FBQztnQkFFekNOLE1BQU1SLFlBQVksR0FBR2E7Z0JBQ3JCLE1BQU1FLG9CQUFvQkMsS0FBS0MsS0FBSyxDQUFDSixXQUFXSyxNQUFNLEdBQUc7Z0JBQ3pELElBQUlDLG9CQUFvQjt1QkFBSU47aUJBQVc7Z0JBQ3ZDLElBQUlPLGVBQWU7Z0JBQ25CLE1BQU9BLGVBQWVMLGtCQUFtQjtvQkFDdkMsTUFBTU0sY0FBY0wsS0FBS0MsS0FBSyxDQUFDRCxLQUFLTSxNQUFNLEtBQUtULFdBQVdLLE1BQU07b0JBQ2hFLElBQ0VDLGlCQUFpQixDQUFDRSxZQUFZLEtBQUssTUFDbkNGLGlCQUFpQixDQUFDRSxZQUFZLEtBQUssS0FDbkM7d0JBQ0FGLGlCQUFpQixDQUFDRSxZQUFZLEdBQUc7d0JBQ2pDRDtvQkFDRjtnQkFDRjtnQkFFQVosTUFBTVQsWUFBWSxHQUFHb0I7WUFDdkI7UUFDRjtRQUNBSSxjQUFjLENBQUNmLE9BQU9DO1lBQ3BCRCxNQUFNUCxVQUFVLEdBQUdRLE9BQU9DLE9BQU87UUFDbkM7UUFDQWMsdUJBQXVCLENBQ3JCaEIsT0FDQUM7WUFFQSxNQUFNLEVBQUVnQixLQUFLLEVBQUVDLEtBQUssRUFBRSxHQUFHakIsT0FBT0MsT0FBTztZQUN2QyxJQUFJLENBQUNGLE1BQU1SLFlBQVksRUFBRTtnQkFDdkI7WUFDRjtZQUNBLE1BQU0yQixtQkFBbUJuQixNQUFNUixZQUFZLENBQUN5QixNQUFNO1lBQ2xELElBQUlDLFVBQVUsSUFBSTtnQkFDaEI7WUFDRjtZQUNBLElBQUlDLGlCQUFpQkMsV0FBVyxPQUFPRixNQUFNRSxXQUFXLElBQUk7Z0JBQzFEcEIsTUFBTU4sU0FBUyxHQUFHO2dCQUNsQk0sTUFBTVgsY0FBYztZQUN0QixPQUFPLElBQUk4QixpQkFBaUJDLFdBQVcsT0FBT0YsTUFBTUUsV0FBVyxJQUFJO2dCQUNqRXBCLE1BQU1OLFNBQVMsR0FBRztZQUNwQjtRQUNGO0lBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTSxFQUFFSyxZQUFZLEVBQUVLLFVBQVUsRUFBRVcsWUFBWSxFQUFFQyxxQkFBcUIsRUFBRSxHQUM1RXBCLFVBQVV5QixPQUFPLENBQUM7QUFDcEIsK0RBQWV6QixVQUFVMEIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9mZWF0dXJlcy9nYW1lU2xpY2UudHM/MDA4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuaW50ZXJmYWNlIEdhbWVEYXRhIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgX2lkOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeURhdGEge1xyXG4gIF9pZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBpdGVtczogR2FtZURhdGFbXTtcclxufVxyXG5pbnRlcmZhY2UgSW5pdGlhbFN0YXRlIHtcclxuICBudW1PZlRyaWVzTGVmdDogbnVtYmVyO1xyXG4gIGNhdGVnb3J5OiBDYXRlZ29yeURhdGEgfCBudWxsO1xyXG4gIGdhbWU6IEdhbWVEYXRhIHwgbnVsbDtcclxuICBtaXNzaW5nV29yZHM6IHN0cmluZ1tdIHwgbnVsbDtcclxuICBhbHBoYWJldHM6IHN0cmluZ1tdO1xyXG4gIHVzZXJPcHRpb246IHN0cmluZ1tdIHwgbnVsbDtcclxuICBjb3JyZWN0V29yZHM6IHN0cmluZ1tdIHwgbnVsbDtcclxuICBpc0NvcnJlY3Q6IGJvb2xlYW4gfCBudWxsO1xyXG4gIGNvcnJlY3RJbmRpY2VzOiBzdHJpbmdbXTtcclxufVxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEluaXRpYWxTdGF0ZSA9IHtcclxuICBjYXRlZ29yeTogbnVsbCxcclxuICBudW1PZlRyaWVzTGVmdDogOCxcclxuICBnYW1lOiBudWxsLFxyXG4gIG1pc3NpbmdXb3JkczogbnVsbCxcclxuICBjb3JyZWN0V29yZHM6IG51bGwsXHJcbiAgdXNlck9wdGlvbjogbnVsbCxcclxuICBpc0NvcnJlY3Q6IG51bGwsXHJcbiAgYWxwaGFiZXRzOiBbXHJcbiAgICBcImFcIixcclxuICAgIFwiYlwiLFxyXG4gICAgXCJjXCIsXHJcbiAgICBcImRcIixcclxuICAgIFwiZVwiLFxyXG4gICAgXCJmXCIsXHJcbiAgICBcImdcIixcclxuICAgIFwiaFwiLFxyXG4gICAgXCJpXCIsXHJcbiAgICBcImpcIixcclxuICAgIFwia1wiLFxyXG4gICAgXCJsXCIsXHJcbiAgICBcIm1cIixcclxuICAgIFwiblwiLFxyXG4gICAgXCJvXCIsXHJcbiAgICBcInBcIixcclxuICAgIFwicVwiLFxyXG4gICAgXCJyXCIsXHJcbiAgICBcInNcIixcclxuICAgIFwidFwiLFxyXG4gICAgXCJ1XCIsXHJcbiAgICBcInZcIixcclxuICAgIFwid1wiLFxyXG4gICAgXCJ4XCIsXHJcbiAgICBcInlcIixcclxuICAgIFwielwiLFxyXG4gIF0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBnYW1lU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJnYW1lXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBsb2FkR2FtZURhdGE6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPENhdGVnb3J5RGF0YT4pID0+IHtcclxuICAgICAgc3RhdGUuY2F0ZWdvcnkgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgc3RhdGUuZ2FtZSA9IGFjdGlvbi5wYXlsb2FkLml0ZW1zWzBdO1xyXG4gICAgfSxcclxuICAgIGdhbWVQdXp6bGU6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBpZiAoc3RhdGUuZ2FtZSkge1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbFdvcmQgPSBzdGF0ZS5nYW1lLm5hbWUuc3BsaXQoXCJcIik7XHJcblxyXG4gICAgICAgIHN0YXRlLmNvcnJlY3RXb3JkcyA9IGFjdHVhbFdvcmQ7XHJcbiAgICAgICAgY29uc3QgbWlzc2luZ0NoYXJhY3RlcnMgPSBNYXRoLmZsb29yKGFjdHVhbFdvcmQubGVuZ3RoICogMC41KTtcclxuICAgICAgICBsZXQgbWlzc2luZ1dvcmRzQXJyYXkgPSBbLi4uYWN0dWFsV29yZF07XHJcbiAgICAgICAgbGV0IHJlbW92ZWRXb3JkcyA9IDA7XHJcbiAgICAgICAgd2hpbGUgKHJlbW92ZWRXb3JkcyA8IG1pc3NpbmdDaGFyYWN0ZXJzKSB7XHJcbiAgICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFjdHVhbFdvcmQubGVuZ3RoKTtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgbWlzc2luZ1dvcmRzQXJyYXlbcmFuZG9tSW5kZXhdICE9PSBcIlwiICYmXHJcbiAgICAgICAgICAgIG1pc3NpbmdXb3Jkc0FycmF5W3JhbmRvbUluZGV4XSAhPT0gXCIgXCJcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBtaXNzaW5nV29yZHNBcnJheVtyYW5kb21JbmRleF0gPSBcIlwiO1xyXG4gICAgICAgICAgICByZW1vdmVkV29yZHMrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRlLm1pc3NpbmdXb3JkcyA9IG1pc3NpbmdXb3Jkc0FycmF5O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlQW5zd2VyOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmdbXT4pID0+IHtcclxuICAgICAgc3RhdGUudXNlck9wdGlvbiA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIGNoZWNrRm9yQ29ycmVjdEFuc3dlcjogKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgaW5kZXg6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9PlxyXG4gICAgKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaW5kZXgsIHZhbHVlIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgaWYgKCFzdGF0ZS5jb3JyZWN0V29yZHMpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgY29ycmVjdFdvcmRNYXRjaCA9IHN0YXRlLmNvcnJlY3RXb3Jkc1tpbmRleF07XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29ycmVjdFdvcmRNYXRjaC50b0xvd2VyQ2FzZSgpICE9PSB2YWx1ZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgc3RhdGUuaXNDb3JyZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUubnVtT2ZUcmllc0xlZnQtLTtcclxuICAgICAgfSBlbHNlIGlmIChjb3JyZWN0V29yZE1hdGNoLnRvTG93ZXJDYXNlKCkgPT09IHZhbHVlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICBzdGF0ZS5pc0NvcnJlY3QgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgbG9hZEdhbWVEYXRhLCBnYW1lUHV6emxlLCB1cGRhdGVBbnN3ZXIsIGNoZWNrRm9yQ29ycmVjdEFuc3dlciB9ID1cclxuICBnYW1lU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgZ2FtZVNsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImNhdGVnb3J5IiwibnVtT2ZUcmllc0xlZnQiLCJnYW1lIiwibWlzc2luZ1dvcmRzIiwiY29ycmVjdFdvcmRzIiwidXNlck9wdGlvbiIsImlzQ29ycmVjdCIsImFscGhhYmV0cyIsImdhbWVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImxvYWRHYW1lRGF0YSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsIml0ZW1zIiwiZ2FtZVB1enpsZSIsImFjdHVhbFdvcmQiLCJzcGxpdCIsIm1pc3NpbmdDaGFyYWN0ZXJzIiwiTWF0aCIsImZsb29yIiwibGVuZ3RoIiwibWlzc2luZ1dvcmRzQXJyYXkiLCJyZW1vdmVkV29yZHMiLCJyYW5kb21JbmRleCIsInJhbmRvbSIsInVwZGF0ZUFuc3dlciIsImNoZWNrRm9yQ29ycmVjdEFuc3dlciIsImluZGV4IiwidmFsdWUiLCJjb3JyZWN0V29yZE1hdGNoIiwidG9Mb3dlckNhc2UiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/features/gameSlice.ts\n"));

/***/ })

});