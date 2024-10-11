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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkForCorrectAnswer: function() { return /* binding */ checkForCorrectAnswer; },\n/* harmony export */   checkForWin: function() { return /* binding */ checkForWin; },\n/* harmony export */   gamePuzzle: function() { return /* binding */ gamePuzzle; },\n/* harmony export */   gameSlice: function() { return /* binding */ gameSlice; },\n/* harmony export */   loadGameData: function() { return /* binding */ loadGameData; },\n/* harmony export */   playAgain: function() { return /* binding */ playAgain; },\n/* harmony export */   saveCurrentCategory: function() { return /* binding */ saveCurrentCategory; },\n/* harmony export */   updateAnswer: function() { return /* binding */ updateAnswer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    gameStarted: false,\n    category: null,\n    numOfTriesLeft: 8,\n    game: null,\n    missingWords: null,\n    correctWords: null,\n    userOption: null,\n    isCorrect: null,\n    alphabets: [\n        \"a\",\n        \"b\",\n        \"c\",\n        \"d\",\n        \"e\",\n        \"f\",\n        \"g\",\n        \"h\",\n        \"i\",\n        \"j\",\n        \"k\",\n        \"l\",\n        \"m\",\n        \"n\",\n        \"o\",\n        \"p\",\n        \"q\",\n        \"r\",\n        \"s\",\n        \"t\",\n        \"u\",\n        \"v\",\n        \"w\",\n        \"x\",\n        \"y\",\n        \"z\"\n    ],\n    incorrectIndices: [],\n    gameOver: false,\n    verdict: \"\"\n};\nconst gameSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"game\",\n    initialState,\n    reducers: {\n        saveCurrentCategory: (state, action)=>{\n            state.category = action.payload;\n        },\n        loadGameData: (state)=>{\n            if (!state.category) return;\n            const randomNumber = Math.floor(Math.random() * state.category.items.length);\n            state.game = state.category.items[0];\n        },\n        gamePuzzle: (state)=>{\n            if (state.game) {\n                const actualWord = state.game.name.split(\"\");\n                state.correctWords = actualWord;\n                const missingCharacters = Math.floor(actualWord.length * 0.5);\n                let missingWordsArray = [\n                    ...actualWord\n                ];\n                let removedWords = 0;\n                while(removedWords < missingCharacters){\n                    const randomIndex = Math.floor(Math.random() * actualWord.length);\n                    if (missingWordsArray[randomIndex] !== \"\" && missingWordsArray[randomIndex] !== \" \") {\n                        missingWordsArray[randomIndex] = \"\";\n                        removedWords++;\n                    }\n                }\n                state.missingWords = missingWordsArray;\n            }\n        },\n        updateAnswer: (state, action)=>{\n            state.userOption = action.payload;\n        },\n        checkForCorrectAnswer: (state, action)=>{\n            const { index, value } = action.payload;\n            if (!state.correctWords) {\n                return;\n            }\n            const correctWordMatch = state.correctWords[index];\n            if (value === \"\") {\n                return;\n            }\n            if (correctWordMatch.toLowerCase() !== value.toLowerCase()) {\n                state.isCorrect = false;\n                state.incorrectIndices.push(index);\n                state.numOfTriesLeft--;\n                if (state.numOfTriesLeft < 1) {\n                    state.numOfTriesLeft = 0;\n                    state.gameOver = true;\n                    state.verdict = \"you lose\";\n                    return;\n                }\n            } else if (correctWordMatch.toLowerCase() === value.toLowerCase()) {\n                state.isCorrect = true;\n                state.incorrectIndices = state.incorrectIndices.filter((i)=>i !== index);\n            }\n        },\n        checkForWin: (state)=>{\n            if (!state.correctWords || !state.userOption) {\n                return;\n            }\n            const isArrayEqual = state.userOption.every((value, index)=>value.toLowerCase() === state.correctWords[index].toLowerCase());\n            if (isArrayEqual) {\n                state.gameOver = true;\n                state.verdict = \"you win\";\n            }\n        },\n        playAgain: (state)=>{\n            if (!state.category) return;\n            const randomNumber = Math.floor(Math.random() * state.category.items.length);\n            state.game = state.category.items[randomNumber];\n            state.numOfTriesLeft = 8;\n            state.verdict = \"\";\n            state.missingWords = null;\n            state.correctWords = null;\n            state.userOption = null;\n            state.isCorrect = null;\n            state.incorrectIndices = [];\n            state.gameOver = false;\n        }\n    }\n});\nconst { loadGameData, saveCurrentCategory, gamePuzzle, updateAnswer, checkForCorrectAnswer, playAgain, checkForWin } = gameSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9mZWF0dXJlcy9nYW1lU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThEO0FBMkI5RCxNQUFNQyxlQUE2QjtJQUNqQ0MsYUFBYTtJQUNiQyxVQUFVO0lBQ1ZDLGdCQUFnQjtJQUNoQkMsTUFBTTtJQUNOQyxjQUFjO0lBQ2RDLGNBQWM7SUFDZEMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLFdBQVc7UUFDVDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFDREMsa0JBQWtCLEVBQUU7SUFDcEJDLFVBQVU7SUFDVkMsU0FBUztBQUNYO0FBQ08sTUFBTUMsWUFBWWQsNkRBQVdBLENBQUM7SUFDbkNlLE1BQU07SUFDTmQ7SUFDQWUsVUFBVTtRQUNSQyxxQkFBcUIsQ0FBQ0MsT0FBT0M7WUFDM0JELE1BQU1mLFFBQVEsR0FBR2dCLE9BQU9DLE9BQU87UUFDakM7UUFDQUMsY0FBYyxDQUFDSDtZQUNiLElBQUksQ0FBQ0EsTUFBTWYsUUFBUSxFQUFFO1lBRXJCLE1BQU1tQixlQUFlQyxLQUFLQyxLQUFLLENBQzdCRCxLQUFLRSxNQUFNLEtBQUtQLE1BQU1mLFFBQVEsQ0FBQ3VCLEtBQUssQ0FBQ0MsTUFBTTtZQUU3Q1QsTUFBTWIsSUFBSSxHQUFHYSxNQUFNZixRQUFRLENBQUN1QixLQUFLLENBQUMsRUFBRTtRQUN0QztRQUNBRSxZQUFZLENBQUNWO1lBQ1gsSUFBSUEsTUFBTWIsSUFBSSxFQUFFO2dCQUNkLE1BQU13QixhQUFhWCxNQUFNYixJQUFJLENBQUNVLElBQUksQ0FBQ2UsS0FBSyxDQUFDO2dCQUV6Q1osTUFBTVgsWUFBWSxHQUFHc0I7Z0JBQ3JCLE1BQU1FLG9CQUFvQlIsS0FBS0MsS0FBSyxDQUFDSyxXQUFXRixN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QUM7QUFDdEIsK0RBQWVsQyxVQUFVbUMsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9mZWF0dXJlcy9nYW1lU2xpY2UudHM/MDA4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuaW50ZXJmYWNlIEdhbWVEYXRhIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgX2lkOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeURhdGEge1xyXG4gIF9pZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBpdGVtczogR2FtZURhdGFbXTtcclxufVxyXG5pbnRlcmZhY2UgSW5pdGlhbFN0YXRlIHtcclxuICBnYW1lU3RhcnRlZDogYm9vbGVhbjtcclxuICBudW1PZlRyaWVzTGVmdDogbnVtYmVyO1xyXG4gIGNhdGVnb3J5OiBDYXRlZ29yeURhdGEgfCBudWxsO1xyXG4gIGdhbWU6IEdhbWVEYXRhIHwgbnVsbDtcclxuICBtaXNzaW5nV29yZHM6IHN0cmluZ1tdIHwgbnVsbDtcclxuICBhbHBoYWJldHM6IHN0cmluZ1tdO1xyXG4gIHVzZXJPcHRpb246IHN0cmluZ1tdIHwgbnVsbDtcclxuICBjb3JyZWN0V29yZHM6IHN0cmluZ1tdIHwgbnVsbDtcclxuICBpc0NvcnJlY3Q6IGJvb2xlYW4gfCBudWxsO1xyXG4gIGluY29ycmVjdEluZGljZXM6IG51bWJlcltdO1xyXG4gIGdhbWVPdmVyOiBib29sZWFuO1xyXG4gIHZlcmRpY3Q6IFwiXCIgfCBcInlvdSB3aW5cIiB8IFwieW91IGxvc2VcIjtcclxufVxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEluaXRpYWxTdGF0ZSA9IHtcclxuICBnYW1lU3RhcnRlZDogZmFsc2UsXHJcbiAgY2F0ZWdvcnk6IG51bGwsXHJcbiAgbnVtT2ZUcmllc0xlZnQ6IDgsXHJcbiAgZ2FtZTogbnVsbCxcclxuICBtaXNzaW5nV29yZHM6IG51bGwsXHJcbiAgY29ycmVjdFdvcmRzOiBudWxsLFxyXG4gIHVzZXJPcHRpb246IG51bGwsXHJcbiAgaXNDb3JyZWN0OiBudWxsLFxyXG4gIGFscGhhYmV0czogW1xyXG4gICAgXCJhXCIsXHJcbiAgICBcImJcIixcclxuICAgIFwiY1wiLFxyXG4gICAgXCJkXCIsXHJcbiAgICBcImVcIixcclxuICAgIFwiZlwiLFxyXG4gICAgXCJnXCIsXHJcbiAgICBcImhcIixcclxuICAgIFwiaVwiLFxyXG4gICAgXCJqXCIsXHJcbiAgICBcImtcIixcclxuICAgIFwibFwiLFxyXG4gICAgXCJtXCIsXHJcbiAgICBcIm5cIixcclxuICAgIFwib1wiLFxyXG4gICAgXCJwXCIsXHJcbiAgICBcInFcIixcclxuICAgIFwiclwiLFxyXG4gICAgXCJzXCIsXHJcbiAgICBcInRcIixcclxuICAgIFwidVwiLFxyXG4gICAgXCJ2XCIsXHJcbiAgICBcIndcIixcclxuICAgIFwieFwiLFxyXG4gICAgXCJ5XCIsXHJcbiAgICBcInpcIixcclxuICBdLFxyXG4gIGluY29ycmVjdEluZGljZXM6IFtdLFxyXG4gIGdhbWVPdmVyOiBmYWxzZSxcclxuICB2ZXJkaWN0OiBcIlwiLFxyXG59O1xyXG5leHBvcnQgY29uc3QgZ2FtZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiZ2FtZVwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2F2ZUN1cnJlbnRDYXRlZ29yeTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Q2F0ZWdvcnlEYXRhPikgPT4ge1xyXG4gICAgICBzdGF0ZS5jYXRlZ29yeSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIGxvYWRHYW1lRGF0YTogKHN0YXRlKSA9PiB7XHJcbiAgICAgIGlmICghc3RhdGUuY2F0ZWdvcnkpIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgTWF0aC5yYW5kb20oKSAqIHN0YXRlLmNhdGVnb3J5Lml0ZW1zLmxlbmd0aFxyXG4gICAgICApO1xyXG4gICAgICBzdGF0ZS5nYW1lID0gc3RhdGUuY2F0ZWdvcnkuaXRlbXNbMF07XHJcbiAgICB9LFxyXG4gICAgZ2FtZVB1enpsZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgIGlmIChzdGF0ZS5nYW1lKSB7XHJcbiAgICAgICAgY29uc3QgYWN0dWFsV29yZCA9IHN0YXRlLmdhbWUubmFtZS5zcGxpdChcIlwiKTtcclxuXHJcbiAgICAgICAgc3RhdGUuY29ycmVjdFdvcmRzID0gYWN0dWFsV29yZDtcclxuICAgICAgICBjb25zdCBtaXNzaW5nQ2hhcmFjdGVycyA9IE1hdGguZmxvb3IoYWN0dWFsV29yZC5sZW5ndGggKiAwLjUpO1xyXG4gICAgICAgIGxldCBtaXNzaW5nV29yZHNBcnJheSA9IFsuLi5hY3R1YWxXb3JkXTtcclxuICAgICAgICBsZXQgcmVtb3ZlZFdvcmRzID0gMDtcclxuICAgICAgICB3aGlsZSAocmVtb3ZlZFdvcmRzIDwgbWlzc2luZ0NoYXJhY3RlcnMpIHtcclxuICAgICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWN0dWFsV29yZC5sZW5ndGgpO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBtaXNzaW5nV29yZHNBcnJheVtyYW5kb21JbmRleF0gIT09IFwiXCIgJiZcclxuICAgICAgICAgICAgbWlzc2luZ1dvcmRzQXJyYXlbcmFuZG9tSW5kZXhdICE9PSBcIiBcIlxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIG1pc3NpbmdXb3Jkc0FycmF5W3JhbmRvbUluZGV4XSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHJlbW92ZWRXb3JkcysrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGUubWlzc2luZ1dvcmRzID0gbWlzc2luZ1dvcmRzQXJyYXk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGVBbnN3ZXI6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZ1tdPikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyT3B0aW9uID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tGb3JDb3JyZWN0QW5zd2VyOiAoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBpbmRleDogbnVtYmVyOyB2YWx1ZTogc3RyaW5nIH0+XHJcbiAgICApID0+IHtcclxuICAgICAgY29uc3QgeyBpbmRleCwgdmFsdWUgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICBpZiAoIXN0YXRlLmNvcnJlY3RXb3Jkcykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBjb3JyZWN0V29yZE1hdGNoID0gc3RhdGUuY29ycmVjdFdvcmRzW2luZGV4XTtcclxuICAgICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb3JyZWN0V29yZE1hdGNoLnRvTG93ZXJDYXNlKCkgIT09IHZhbHVlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICBzdGF0ZS5pc0NvcnJlY3QgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5pbmNvcnJlY3RJbmRpY2VzLnB1c2goaW5kZXgpO1xyXG4gICAgICAgIHN0YXRlLm51bU9mVHJpZXNMZWZ0LS07XHJcbiAgICAgICAgaWYgKHN0YXRlLm51bU9mVHJpZXNMZWZ0IDwgMSkge1xyXG4gICAgICAgICAgc3RhdGUubnVtT2ZUcmllc0xlZnQgPSAwO1xyXG4gICAgICAgICAgc3RhdGUuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgc3RhdGUudmVyZGljdCA9IFwieW91IGxvc2VcIjtcclxuXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGNvcnJlY3RXb3JkTWF0Y2gudG9Mb3dlckNhc2UoKSA9PT0gdmFsdWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIHN0YXRlLmlzQ29ycmVjdCA9IHRydWU7XHJcbiAgICAgICAgc3RhdGUuaW5jb3JyZWN0SW5kaWNlcyA9IHN0YXRlLmluY29ycmVjdEluZGljZXMuZmlsdGVyKFxyXG4gICAgICAgICAgKGkpID0+IGkgIT09IGluZGV4XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNoZWNrRm9yV2luOiAoc3RhdGUpID0+IHtcclxuICAgICAgaWYgKCFzdGF0ZS5jb3JyZWN0V29yZHMgfHwgIXN0YXRlLnVzZXJPcHRpb24pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaXNBcnJheUVxdWFsID0gc3RhdGUudXNlck9wdGlvbi5ldmVyeShcclxuICAgICAgICAodmFsdWUsIGluZGV4KSA9PlxyXG4gICAgICAgICAgdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gc3RhdGUuY29ycmVjdFdvcmRzIVtpbmRleF0udG9Mb3dlckNhc2UoKVxyXG4gICAgICApO1xyXG4gICAgICBpZiAoaXNBcnJheUVxdWFsKSB7XHJcbiAgICAgICAgc3RhdGUuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIHN0YXRlLnZlcmRpY3QgPSBcInlvdSB3aW5cIjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsYXlBZ2FpbjogKHN0YXRlKSA9PiB7XHJcbiAgICAgIGlmICghc3RhdGUuY2F0ZWdvcnkpIHJldHVybjtcclxuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihcclxuICAgICAgICBNYXRoLnJhbmRvbSgpICogc3RhdGUuY2F0ZWdvcnkuaXRlbXMubGVuZ3RoXHJcbiAgICAgICk7XHJcbiAgICAgIHN0YXRlLmdhbWUgPSBzdGF0ZS5jYXRlZ29yeS5pdGVtc1tyYW5kb21OdW1iZXJdO1xyXG4gICAgICBzdGF0ZS5udW1PZlRyaWVzTGVmdCA9IDg7XHJcbiAgICAgIHN0YXRlLnZlcmRpY3QgPSBcIlwiO1xyXG4gICAgICBzdGF0ZS5taXNzaW5nV29yZHMgPSBudWxsO1xyXG4gICAgICBzdGF0ZS5jb3JyZWN0V29yZHMgPSBudWxsO1xyXG4gICAgICBzdGF0ZS51c2VyT3B0aW9uID0gbnVsbDtcclxuICAgICAgc3RhdGUuaXNDb3JyZWN0ID0gbnVsbDtcclxuICAgICAgc3RhdGUuaW5jb3JyZWN0SW5kaWNlcyA9IFtdO1xyXG4gICAgICBzdGF0ZS5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgbG9hZEdhbWVEYXRhLFxyXG4gIHNhdmVDdXJyZW50Q2F0ZWdvcnksXHJcbiAgZ2FtZVB1enpsZSxcclxuICB1cGRhdGVBbnN3ZXIsXHJcbiAgY2hlY2tGb3JDb3JyZWN0QW5zd2VyLFxyXG4gIHBsYXlBZ2FpbixcclxuICBjaGVja0ZvcldpbixcclxufSA9IGdhbWVTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBnYW1lU2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiZ2FtZVN0YXJ0ZWQiLCJjYXRlZ29yeSIsIm51bU9mVHJpZXNMZWZ0IiwiZ2FtZSIsIm1pc3NpbmdXb3JkcyIsImNvcnJlY3RXb3JkcyIsInVzZXJPcHRpb24iLCJpc0NvcnJlY3QiLCJhbHBoYWJldHMiLCJpbmNvcnJlY3RJbmRpY2VzIiwiZ2FtZU92ZXIiLCJ2ZXJkaWN0IiwiZ2FtZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2F2ZUN1cnJlbnRDYXRlZ29yeSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImxvYWRHYW1lRGF0YSIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIml0ZW1zIiwibGVuZ3RoIiwiZ2FtZVB1enpsZSIsImFjdHVhbFdvcmQiLCJzcGxpdCIsIm1pc3NpbmdDaGFyYWN0ZXJzIiwibWlzc2luZ1dvcmRzQXJyYXkiLCJyZW1vdmVkV29yZHMiLCJyYW5kb21JbmRleCIsInVwZGF0ZUFuc3dlciIsImNoZWNrRm9yQ29ycmVjdEFuc3dlciIsImluZGV4IiwidmFsdWUiLCJjb3JyZWN0V29yZE1hdGNoIiwidG9Mb3dlckNhc2UiLCJwdXNoIiwiZmlsdGVyIiwiaSIsImNoZWNrRm9yV2luIiwiaXNBcnJheUVxdWFsIiwiZXZlcnkiLCJwbGF5QWdhaW4iLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/features/gameSlice.ts\n"));

/***/ })

});