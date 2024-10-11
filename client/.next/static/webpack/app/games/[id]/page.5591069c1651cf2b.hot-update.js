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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkForCorrectAnswer: function() { return /* binding */ checkForCorrectAnswer; },\n/* harmony export */   checkForWin: function() { return /* binding */ checkForWin; },\n/* harmony export */   gamePuzzle: function() { return /* binding */ gamePuzzle; },\n/* harmony export */   gameSlice: function() { return /* binding */ gameSlice; },\n/* harmony export */   loadGameData: function() { return /* binding */ loadGameData; },\n/* harmony export */   playAgain: function() { return /* binding */ playAgain; },\n/* harmony export */   saveCurrentCategory: function() { return /* binding */ saveCurrentCategory; },\n/* harmony export */   setGameStarted: function() { return /* binding */ setGameStarted; },\n/* harmony export */   updateAnswer: function() { return /* binding */ updateAnswer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    gameStarted: false,\n    category: null,\n    numOfTriesLeft: 8,\n    game: null,\n    missingWords: null,\n    correctWords: null,\n    userOption: null,\n    isCorrect: null,\n    alphabets: [\n        \"a\",\n        \"b\",\n        \"c\",\n        \"d\",\n        \"e\",\n        \"f\",\n        \"g\",\n        \"h\",\n        \"i\",\n        \"j\",\n        \"k\",\n        \"l\",\n        \"m\",\n        \"n\",\n        \"o\",\n        \"p\",\n        \"q\",\n        \"r\",\n        \"s\",\n        \"t\",\n        \"u\",\n        \"v\",\n        \"w\",\n        \"x\",\n        \"y\",\n        \"z\"\n    ],\n    incorrectIndices: [],\n    gameOver: false,\n    verdict: \"\"\n};\nconst gameSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"game\",\n    initialState,\n    reducers: {\n        saveCurrentCategory: (state, action)=>{\n            state.category = action.payload;\n        },\n        loadGameData: (state)=>{\n            if (!state.category) return;\n            const randomNumber = Math.floor(Math.random() * state.category.items.length);\n            state.game = state.category.items[0];\n        },\n        setGameStarted: (state, action)=>{\n            state.gameStarted = action.payload;\n        },\n        gamePuzzle: (state)=>{\n            if (state.game) {\n                const actualWord = state.game.name.split(\"\");\n                state.correctWords = actualWord;\n                const missingCharacters = Math.floor(actualWord.length * 0.5);\n                let missingWordsArray = [\n                    ...actualWord\n                ];\n                let removedWords = 0;\n                while(removedWords < missingCharacters){\n                    const randomIndex = Math.floor(Math.random() * actualWord.length);\n                    if (missingWordsArray[randomIndex] !== \"\" && missingWordsArray[randomIndex] !== \" \") {\n                        missingWordsArray[randomIndex] = \"\";\n                        removedWords++;\n                    }\n                }\n                state.missingWords = missingWordsArray;\n            }\n        },\n        updateAnswer: (state, action)=>{\n            state.userOption = action.payload;\n        },\n        checkForCorrectAnswer: (state, action)=>{\n            const { index, value } = action.payload;\n            if (!state.correctWords) {\n                return;\n            }\n            const correctWordMatch = state.correctWords[index];\n            if (value === \"\") {\n                return;\n            }\n            if (correctWordMatch.toLowerCase() !== value.toLowerCase()) {\n                state.isCorrect = false;\n                state.incorrectIndices.push(index);\n                state.numOfTriesLeft--;\n                if (state.numOfTriesLeft < 1) {\n                    state.numOfTriesLeft = 0;\n                    state.gameOver = true;\n                    state.verdict = \"you lose\";\n                    return;\n                }\n            } else if (correctWordMatch.toLowerCase() === value.toLowerCase()) {\n                state.isCorrect = true;\n                state.incorrectIndices = state.incorrectIndices.filter((i)=>i !== index);\n            }\n        },\n        checkForWin: (state)=>{\n            if (!state.correctWords || !state.userOption) {\n                return;\n            }\n            const isArrayEqual = state.userOption.every((value, index)=>value.toLowerCase() === state.correctWords[index].toLowerCase());\n            if (isArrayEqual) {\n                state.gameOver = true;\n                state.verdict = \"you win\";\n            }\n        },\n        playAgain: (state)=>{\n            if (!state.category) return;\n            const randomNumber = Math.floor(Math.random() * state.category.items.length);\n            state.game = state.category.items[randomNumber];\n            state.numOfTriesLeft = 8;\n            state.verdict = \"\";\n            state.missingWords = null;\n            state.correctWords = null;\n            state.userOption = null;\n            state.isCorrect = null;\n            state.incorrectIndices = [];\n            state.gameOver = false;\n            state.gameStarted = false;\n        }\n    }\n});\nconst { loadGameData, setGameStarted, saveCurrentCategory, gamePuzzle, updateAnswer, checkForCorrectAnswer, playAgain, checkForWin } = gameSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9mZWF0dXJlcy9nYW1lU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE4RDtBQTJCOUQsTUFBTUMsZUFBNkI7SUFDakNDLGFBQWE7SUFDYkMsVUFBVTtJQUNWQyxnQkFBZ0I7SUFDaEJDLE1BQU07SUFDTkMsY0FBYztJQUNkQyxjQUFjO0lBQ2RDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxXQUFXO1FBQ1Q7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBQ0RDLGtCQUFrQixFQUFFO0lBQ3BCQyxVQUFVO0lBQ1ZDLFNBQVM7QUFDWDtBQUNPLE1BQU1DLFlBQVlkLDZEQUFXQSxDQUFDO0lBQ25DZSxNQUFNO0lBQ05kO0lBQ0FlLFVBQVU7UUFDUkMscUJBQXFCLENBQUNDLE9BQU9DO1lBQzNCRCxNQUFNZixRQUFRLEdBQUdnQixPQUFPQyxPQUFPO1FBQ2pDO1FBQ0FDLGNBQWMsQ0FBQ0g7WUFDYixJQUFJLENBQUNBLE1BQU1mLFFBQVEsRUFBRTtZQUVyQixNQUFNbUIsZUFBZUMsS0FBS0MsS0FBSyxDQUM3QkQsS0FBS0UsTUFBTSxLQUFLUCxNQUFNZixRQUFRLENBQUN1QixLQUFLLENBQUNDLE1BQU07WUFFN0NULE1BQU1iLElBQUksR0FBR2EsTUFBTWYsUUFBUSxDQUFDdUIsS0FBSyxDQUFDLEVBQUU7UUFDdEM7UUFDQUUsZ0JBQWdCLENBQUNWLE9BQU9DO1lBQ3RCRCxNQUFNaEIsV0FBVyxHQUFHaUIsT0FBT0MsT0FBTztRQUNwQztRQUNBUyxZQUFZLENBQUNYO1lBQ1gsSUFBSUEsTUFBTWIsSUFBSSxFQUFFO2dCQUNkLE1BQU15QixhQUFhWixNQUFNYixJQUFJLENBQUNVLElBQUksQ0FBQ2dCLEtBQUssQ0FBQztnQkFFekNiLE1BQU1YLFlBQVksR0FBR3VCO2dCQUNyQixNQUFNRSxvQkFBb0JULEtBQUtDLEtBQUssQ0FBQ00sV0FBV0gsTUFBTSxHQUFHO2dCQUN6RCxJQUFJTSxvQkFBb0I7dUJBQUlIO2lCQUFXO2dCQUN2QyxJQUFJSSxlQUFlO2dCQUNuQixNQUFPQSxlQUFlRixrQkFBbUI7b0JBQ3ZDLE1BQU1HLGNBQWNaLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLSyxXQUFXSCxNQUFNO29CQUNoRSxJQUNFTSxpQkFBaUIsQ0FBQ0UsWUFBWSxLQUFLLE1BQ25DRixpQkFBaUIsQ0FBQ0UsWUFBWSxLQUFLLEtBQ25DO3dCQUNBRixpQkFBaUIsQ0FBQ0UsWUFBWSxHQUFHO3dCQUNqQ0Q7b0JBQ0Y7Z0JBQ0Y7Z0JBRUFoQixNQUFNWixZQUFZLEdBQUcyQjtZQUN2QjtRQUNGO1FBQ0FHLGNBQWMsQ0FBQ2xCLE9BQU9DO1lBQ3BCRCxNQUFNVixVQUFVLEdBQUdXLE9BQU9DLE9BQU87UUFDbkM7UUFDQWlCLHVCQUF1QixDQUNyQm5CLE9BQ0FDO1lBRUEsTUFBTSxFQUFFbUIsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBR3BCLE9BQU9DLE9BQU87WUFDdkMsSUFBSSxDQUFDRixNQUFNWCxZQUFZLEVBQUU7Z0JBQ3ZCO1lBQ0Y7WUFDQSxNQUFNaUMsbUJBQW1CdEIsTUFBTVgsWUFBWSxDQUFDK0IsTUFBTTtZQUNsRCxJQUFJQyxVQUFVLElBQUk7Z0JBQ2hCO1lBQ0Y7WUFDQSxJQUFJQyxpQkFBaUJDLFdBQVcsT0FBT0YsTUFBTUUsV0FBVyxJQUFJO2dCQUMxRHZCLE1BQU1ULFNBQVMsR0FBRztnQkFDbEJTLE1BQU1QLGdCQUFnQixDQUFDK0IsSUFBSSxDQUFDSjtnQkFDNUJwQixNQUFNZCxjQUFjO2dCQUNwQixJQUFJYyxNQUFNZCxjQUFjLEdBQUcsR0FBRztvQkFDNUJjLE1BQU1kLGNBQWMsR0FBRztvQkFDdkJjLE1BQU1OLFFBQVEsR0FBRztvQkFDakJNLE1BQU1MLE9BQU8sR0FBRztvQkFFaEI7Z0JBQ0Y7WUFDRixPQUFPLElBQUkyQixpQkFBaUJDLFdBQVcsT0FBT0YsTUFBTUUsV0FBVyxJQUFJO2dCQUNqRXZCLE1BQU1ULFNBQVMsR0FBRztnQkFDbEJTLE1BQU1QLGdCQUFnQixHQUFHTyxNQUFNUCxnQkFBZ0IsQ0FBQ2dDLE1BQU0sQ0FDcEQsQ0FBQ0MsSUFBTUEsTUFBTU47WUFFakI7UUFDRjtRQUNBTyxhQUFhLENBQUMzQjtZQUNaLElBQUksQ0FBQ0EsTUFBTVgsWUFBWSxJQUFJLENBQUNXLE1BQU1WLFVBQVUsRUFBRTtnQkFDNUM7WUFDRjtZQUNBLE1BQU1zQyxlQUFlNUIsTUFBTVYsVUFBVSxDQUFDdUMsS0FBSyxDQUN6QyxDQUFDUixPQUFPRCxRQUNOQyxNQUFNRSxXQUFXLE9BQU92QixNQUFNWCxZQUFZLENBQUUrQixNQUFNLENBQUNHLFdBQVc7WUFFbEUsSUFBSUssY0FBYztnQkFDaEI1QixNQUFNTixRQUFRLEdBQUc7Z0JBQ2pCTSxNQUFNTCxPQUFPLEdBQUc7WUFDbEI7UUFDRjtRQUNBbUMsV0FBVyxDQUFDOUI7WUFDVixJQUFJLENBQUNBLE1BQU1mLFFBQVEsRUFBRTtZQUNyQixNQUFNbUIsZUFBZUMsS0FBS0MsS0FBSyxDQUM3QkQsS0FBS0UsTUFBTSxLQUFLUCxNQUFNZixRQUFRLENBQUN1QixLQUFLLENBQUNDLE1BQU07WUFFN0NULE1BQU1iLElBQUksR0FBR2EsTUFBTWYsUUFBUSxDQUFDdUIsS0FBSyxDQUFDSixhQUFhO1lBQy9DSixNQUFNZCxjQUFjLEdBQUc7WUFDdkJjLE1BQU1MLE9BQU8sR0FBRztZQUNoQkssTUFBTVosWUFBWSxHQUFHO1lBQ3JCWSxNQUFNWCxZQUFZLEdBQUc7WUFDckJXLE1BQU1WLFVBQVUsR0FBRztZQUNuQlUsTUFBTVQsU0FBUyxHQUFHO1lBQ2xCUyxNQUFNUCxnQkFBZ0IsR0FBRyxFQUFFO1lBQzNCTyxNQUFNTixRQUFRLEdBQUc7WUFDakJNLE1BQU1oQixXQUFXLEdBQUc7UUFDdEI7SUFDRjtBQUNGLEdBQUc7QUFFSSxNQUFNLEVBQ1htQixZQUFZLEVBQ1pPLGNBQWMsRUFDZFgsbUJBQW1CLEVBQ25CWSxVQUFVLEVBQ1ZPLFlBQVksRUFDWkMscUJBQXFCLEVBQ3JCVyxTQUFTLEVBQ1RILFdBQVcsRUFDWixHQUFHL0IsVUFBVW1DLE9BQU8sQ0FBQztBQUN0QiwrREFBZW5DLFVBQVVvQyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2ZlYXR1cmVzL2dhbWVTbGljZS50cz8wMDg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5pbnRlcmZhY2UgR2FtZURhdGEge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzZWxlY3RlZDogYm9vbGVhbjtcclxuICBfaWQ6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5RGF0YSB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGl0ZW1zOiBHYW1lRGF0YVtdO1xyXG59XHJcbmludGVyZmFjZSBJbml0aWFsU3RhdGUge1xyXG4gIGdhbWVTdGFydGVkOiBib29sZWFuO1xyXG4gIG51bU9mVHJpZXNMZWZ0OiBudW1iZXI7XHJcbiAgY2F0ZWdvcnk6IENhdGVnb3J5RGF0YSB8IG51bGw7XHJcbiAgZ2FtZTogR2FtZURhdGEgfCBudWxsO1xyXG4gIG1pc3NpbmdXb3Jkczogc3RyaW5nW10gfCBudWxsO1xyXG4gIGFscGhhYmV0czogc3RyaW5nW107XHJcbiAgdXNlck9wdGlvbjogc3RyaW5nW10gfCBudWxsO1xyXG4gIGNvcnJlY3RXb3Jkczogc3RyaW5nW10gfCBudWxsO1xyXG4gIGlzQ29ycmVjdDogYm9vbGVhbiB8IG51bGw7XHJcbiAgaW5jb3JyZWN0SW5kaWNlczogbnVtYmVyW107XHJcbiAgZ2FtZU92ZXI6IGJvb2xlYW47XHJcbiAgdmVyZGljdDogXCJcIiB8IFwieW91IHdpblwiIHwgXCJ5b3UgbG9zZVwiO1xyXG59XHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pdGlhbFN0YXRlID0ge1xyXG4gIGdhbWVTdGFydGVkOiBmYWxzZSxcclxuICBjYXRlZ29yeTogbnVsbCxcclxuICBudW1PZlRyaWVzTGVmdDogOCxcclxuICBnYW1lOiBudWxsLFxyXG4gIG1pc3NpbmdXb3JkczogbnVsbCxcclxuICBjb3JyZWN0V29yZHM6IG51bGwsXHJcbiAgdXNlck9wdGlvbjogbnVsbCxcclxuICBpc0NvcnJlY3Q6IG51bGwsXHJcbiAgYWxwaGFiZXRzOiBbXHJcbiAgICBcImFcIixcclxuICAgIFwiYlwiLFxyXG4gICAgXCJjXCIsXHJcbiAgICBcImRcIixcclxuICAgIFwiZVwiLFxyXG4gICAgXCJmXCIsXHJcbiAgICBcImdcIixcclxuICAgIFwiaFwiLFxyXG4gICAgXCJpXCIsXHJcbiAgICBcImpcIixcclxuICAgIFwia1wiLFxyXG4gICAgXCJsXCIsXHJcbiAgICBcIm1cIixcclxuICAgIFwiblwiLFxyXG4gICAgXCJvXCIsXHJcbiAgICBcInBcIixcclxuICAgIFwicVwiLFxyXG4gICAgXCJyXCIsXHJcbiAgICBcInNcIixcclxuICAgIFwidFwiLFxyXG4gICAgXCJ1XCIsXHJcbiAgICBcInZcIixcclxuICAgIFwid1wiLFxyXG4gICAgXCJ4XCIsXHJcbiAgICBcInlcIixcclxuICAgIFwielwiLFxyXG4gIF0sXHJcbiAgaW5jb3JyZWN0SW5kaWNlczogW10sXHJcbiAgZ2FtZU92ZXI6IGZhbHNlLFxyXG4gIHZlcmRpY3Q6IFwiXCIsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBnYW1lU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJnYW1lXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzYXZlQ3VycmVudENhdGVnb3J5OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxDYXRlZ29yeURhdGE+KSA9PiB7XHJcbiAgICAgIHN0YXRlLmNhdGVnb3J5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgbG9hZEdhbWVEYXRhOiAoc3RhdGUpID0+IHtcclxuICAgICAgaWYgKCFzdGF0ZS5jYXRlZ29yeSkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihcclxuICAgICAgICBNYXRoLnJhbmRvbSgpICogc3RhdGUuY2F0ZWdvcnkuaXRlbXMubGVuZ3RoXHJcbiAgICAgICk7XHJcbiAgICAgIHN0YXRlLmdhbWUgPSBzdGF0ZS5jYXRlZ29yeS5pdGVtc1swXTtcclxuICAgIH0sXHJcbiAgICBzZXRHYW1lU3RhcnRlZDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pID0+IHtcclxuICAgICAgc3RhdGUuZ2FtZVN0YXJ0ZWQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBnYW1lUHV6emxlOiAoc3RhdGUpID0+IHtcclxuICAgICAgaWYgKHN0YXRlLmdhbWUpIHtcclxuICAgICAgICBjb25zdCBhY3R1YWxXb3JkID0gc3RhdGUuZ2FtZS5uYW1lLnNwbGl0KFwiXCIpO1xyXG5cclxuICAgICAgICBzdGF0ZS5jb3JyZWN0V29yZHMgPSBhY3R1YWxXb3JkO1xyXG4gICAgICAgIGNvbnN0IG1pc3NpbmdDaGFyYWN0ZXJzID0gTWF0aC5mbG9vcihhY3R1YWxXb3JkLmxlbmd0aCAqIDAuNSk7XHJcbiAgICAgICAgbGV0IG1pc3NpbmdXb3Jkc0FycmF5ID0gWy4uLmFjdHVhbFdvcmRdO1xyXG4gICAgICAgIGxldCByZW1vdmVkV29yZHMgPSAwO1xyXG4gICAgICAgIHdoaWxlIChyZW1vdmVkV29yZHMgPCBtaXNzaW5nQ2hhcmFjdGVycykge1xyXG4gICAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhY3R1YWxXb3JkLmxlbmd0aCk7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG1pc3NpbmdXb3Jkc0FycmF5W3JhbmRvbUluZGV4XSAhPT0gXCJcIiAmJlxyXG4gICAgICAgICAgICBtaXNzaW5nV29yZHNBcnJheVtyYW5kb21JbmRleF0gIT09IFwiIFwiXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgbWlzc2luZ1dvcmRzQXJyYXlbcmFuZG9tSW5kZXhdID0gXCJcIjtcclxuICAgICAgICAgICAgcmVtb3ZlZFdvcmRzKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZS5taXNzaW5nV29yZHMgPSBtaXNzaW5nV29yZHNBcnJheTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZUFuc3dlcjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nW10+KSA9PiB7XHJcbiAgICAgIHN0YXRlLnVzZXJPcHRpb24gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBjaGVja0ZvckNvcnJlY3RBbnN3ZXI6IChcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IGluZGV4OiBudW1iZXI7IHZhbHVlOiBzdHJpbmcgfT5cclxuICAgICkgPT4ge1xyXG4gICAgICBjb25zdCB7IGluZGV4LCB2YWx1ZSB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIGlmICghc3RhdGUuY29ycmVjdFdvcmRzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGNvcnJlY3RXb3JkTWF0Y2ggPSBzdGF0ZS5jb3JyZWN0V29yZHNbaW5kZXhdO1xyXG4gICAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvcnJlY3RXb3JkTWF0Y2gudG9Mb3dlckNhc2UoKSAhPT0gdmFsdWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIHN0YXRlLmlzQ29ycmVjdCA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmluY29ycmVjdEluZGljZXMucHVzaChpbmRleCk7XHJcbiAgICAgICAgc3RhdGUubnVtT2ZUcmllc0xlZnQtLTtcclxuICAgICAgICBpZiAoc3RhdGUubnVtT2ZUcmllc0xlZnQgPCAxKSB7XHJcbiAgICAgICAgICBzdGF0ZS5udW1PZlRyaWVzTGVmdCA9IDA7XHJcbiAgICAgICAgICBzdGF0ZS5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgICBzdGF0ZS52ZXJkaWN0ID0gXCJ5b3UgbG9zZVwiO1xyXG5cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoY29ycmVjdFdvcmRNYXRjaC50b0xvd2VyQ2FzZSgpID09PSB2YWx1ZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgc3RhdGUuaXNDb3JyZWN0ID0gdHJ1ZTtcclxuICAgICAgICBzdGF0ZS5pbmNvcnJlY3RJbmRpY2VzID0gc3RhdGUuaW5jb3JyZWN0SW5kaWNlcy5maWx0ZXIoXHJcbiAgICAgICAgICAoaSkgPT4gaSAhPT0gaW5kZXhcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2hlY2tGb3JXaW46IChzdGF0ZSkgPT4ge1xyXG4gICAgICBpZiAoIXN0YXRlLmNvcnJlY3RXb3JkcyB8fCAhc3RhdGUudXNlck9wdGlvbikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBpc0FycmF5RXF1YWwgPSBzdGF0ZS51c2VyT3B0aW9uLmV2ZXJ5KFxyXG4gICAgICAgICh2YWx1ZSwgaW5kZXgpID0+XHJcbiAgICAgICAgICB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBzdGF0ZS5jb3JyZWN0V29yZHMhW2luZGV4XS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChpc0FycmF5RXF1YWwpIHtcclxuICAgICAgICBzdGF0ZS5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgc3RhdGUudmVyZGljdCA9IFwieW91IHdpblwiO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGxheUFnYWluOiAoc3RhdGUpID0+IHtcclxuICAgICAgaWYgKCFzdGF0ZS5jYXRlZ29yeSkgcmV0dXJuO1xyXG4gICAgICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIE1hdGgucmFuZG9tKCkgKiBzdGF0ZS5jYXRlZ29yeS5pdGVtcy5sZW5ndGhcclxuICAgICAgKTtcclxuICAgICAgc3RhdGUuZ2FtZSA9IHN0YXRlLmNhdGVnb3J5Lml0ZW1zW3JhbmRvbU51bWJlcl07XHJcbiAgICAgIHN0YXRlLm51bU9mVHJpZXNMZWZ0ID0gODtcclxuICAgICAgc3RhdGUudmVyZGljdCA9IFwiXCI7XHJcbiAgICAgIHN0YXRlLm1pc3NpbmdXb3JkcyA9IG51bGw7XHJcbiAgICAgIHN0YXRlLmNvcnJlY3RXb3JkcyA9IG51bGw7XHJcbiAgICAgIHN0YXRlLnVzZXJPcHRpb24gPSBudWxsO1xyXG4gICAgICBzdGF0ZS5pc0NvcnJlY3QgPSBudWxsO1xyXG4gICAgICBzdGF0ZS5pbmNvcnJlY3RJbmRpY2VzID0gW107XHJcbiAgICAgIHN0YXRlLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLmdhbWVTdGFydGVkID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICBsb2FkR2FtZURhdGEsXHJcbiAgc2V0R2FtZVN0YXJ0ZWQsXHJcbiAgc2F2ZUN1cnJlbnRDYXRlZ29yeSxcclxuICBnYW1lUHV6emxlLFxyXG4gIHVwZGF0ZUFuc3dlcixcclxuICBjaGVja0ZvckNvcnJlY3RBbnN3ZXIsXHJcbiAgcGxheUFnYWluLFxyXG4gIGNoZWNrRm9yV2luLFxyXG59ID0gZ2FtZVNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJnYW1lU3RhcnRlZCIsImNhdGVnb3J5IiwibnVtT2ZUcmllc0xlZnQiLCJnYW1lIiwibWlzc2luZ1dvcmRzIiwiY29ycmVjdFdvcmRzIiwidXNlck9wdGlvbiIsImlzQ29ycmVjdCIsImFscGhhYmV0cyIsImluY29ycmVjdEluZGljZXMiLCJnYW1lT3ZlciIsInZlcmRpY3QiLCJnYW1lU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzYXZlQ3VycmVudENhdGVnb3J5Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwibG9hZEdhbWVEYXRhIiwicmFuZG9tTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaXRlbXMiLCJsZW5ndGgiLCJzZXRHYW1lU3RhcnRlZCIsImdhbWVQdXp6bGUiLCJhY3R1YWxXb3JkIiwic3BsaXQiLCJtaXNzaW5nQ2hhcmFjdGVycyIsIm1pc3NpbmdXb3Jkc0FycmF5IiwicmVtb3ZlZFdvcmRzIiwicmFuZG9tSW5kZXgiLCJ1cGRhdGVBbnN3ZXIiLCJjaGVja0ZvckNvcnJlY3RBbnN3ZXIiLCJpbmRleCIsInZhbHVlIiwiY29ycmVjdFdvcmRNYXRjaCIsInRvTG93ZXJDYXNlIiwicHVzaCIsImZpbHRlciIsImkiLCJjaGVja0ZvcldpbiIsImlzQXJyYXlFcXVhbCIsImV2ZXJ5IiwicGxheUFnYWluIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/features/gameSlice.ts\n"));

/***/ })

});