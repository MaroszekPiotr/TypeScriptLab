/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar gameBoard_1 = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.ts\");\r\nvar root = document.getElementById('root');\r\nroot.textContent = 'działa';\r\nconsole.log(new gameBoard_1[\"default\"](3, 3).DrawGameBoard());\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/gameBoard.ts":
/*!**************************!*\
  !*** ./src/gameBoard.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar GameBoard = /** @class */ (function () {\r\n    function GameBoard(sizeX, sizeY) {\r\n        if (sizeX === void 0) { sizeX = 3; }\r\n        if (sizeY === void 0) { sizeY = sizeX; }\r\n        this.sizeX = sizeX;\r\n        this.sizeY = sizeY;\r\n    }\r\n    GameBoard.prototype.DrawGameBoard = function () {\r\n        var _this = this;\r\n        var board = document.createElement('table');\r\n        var createGameBoard = function () {\r\n            for (var i = 0; i < _this.sizeX; i++) {\r\n                var row = document.createElement('tr');\r\n                for (var j = 0; j < _this.sizeY; j++) {\r\n                    row.appendChild(document.createElement('th'));\r\n                }\r\n                board.appendChild(row);\r\n            }\r\n        };\r\n        createGameBoard();\r\n        return board;\r\n    };\r\n    return GameBoard;\r\n}());\r\nexports.default = GameBoard;\r\n\n\n//# sourceURL=webpack:///./src/gameBoard.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;