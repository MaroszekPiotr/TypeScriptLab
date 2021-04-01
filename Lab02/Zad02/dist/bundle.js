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

eval("\r\nexports.__esModule = true;\r\nvar gameBoard_1 = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.ts\");\r\nvar root = document.getElementById(\"root\");\r\nroot.appendChild(new gameBoard_1[\"default\"](3, 3).DrawGameBoard());\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/cell.ts":
/*!*********************!*\
  !*** ./src/cell.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar Cell = /** @class */ (function () {\r\n    function Cell(positionX, positionY) {\r\n        this.cellValue = \"\";\r\n        this.positionX = positionX;\r\n        this.positionY = positionY;\r\n    }\r\n    Cell.prototype.printCell = function () {\r\n        var value;\r\n    };\r\n    return Cell;\r\n}());\r\nexports.default = Cell;\r\n\n\n//# sourceURL=webpack:///./src/cell.ts?");

/***/ }),

/***/ "./src/gameBoard.ts":
/*!**************************!*\
  !*** ./src/gameBoard.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar cell_1 = __webpack_require__(/*! ./cell */ \"./src/cell.ts\");\r\nvar player_1 = __webpack_require__(/*! ./player */ \"./src/player.ts\");\r\nvar GameBoard = /** @class */ (function () {\r\n    function GameBoard(sizeX, sizeY) {\r\n        if (sizeX === void 0) { sizeX = 3; }\r\n        if (sizeY === void 0) { sizeY = sizeX; }\r\n        this.sizeX = sizeX;\r\n        this.sizeY = sizeY;\r\n        this.boardArray = [];\r\n        this.players = [new player_1[\"default\"](this, \"Human\", 0), new player_1[\"default\"](this, \"Human\", 1)];\r\n        this.currentPlayerIndex = 0;\r\n        this.lenghtRouteToWin = 3;\r\n        this.moveNumber = 0;\r\n    }\r\n    GameBoard.prototype.DrawGameBoard = function () {\r\n        var htmlBoard = document.createElement(\"table\");\r\n        htmlBoard.className = \"GameBoard\";\r\n        this.CreateGameBoard(htmlBoard, this.sizeX, this.sizeY);\r\n        return htmlBoard;\r\n    };\r\n    GameBoard.prototype.CreateGameBoard = function (htmlBoard, numberOfRows, numberOfCells) {\r\n        if (numberOfRows === void 0) { numberOfRows = 1; }\r\n        if (numberOfCells === void 0) { numberOfCells = 1; }\r\n        for (var i = 0; i < numberOfRows; i++) {\r\n            var row = document.createElement(\"tr\");\r\n            for (var j = 0; j < numberOfCells; j++) {\r\n                this.AddCell(row, i, j);\r\n            }\r\n            htmlBoard.appendChild(row);\r\n        }\r\n    };\r\n    GameBoard.prototype.AddCell = function (row, rowPosition, columnPosition) {\r\n        var _this = this;\r\n        if (columnPosition === void 0) { columnPosition = 1; }\r\n        var boardElement = new cell_1[\"default\"](rowPosition, columnPosition);\r\n        this.boardArray.push(boardElement);\r\n        var cell = document.createElement(\"td\");\r\n        cell.textContent = \"\";\r\n        var functionReference = function () {\r\n            return _this.GetMove(cell, boardElement, functionReference);\r\n        };\r\n        cell.addEventListener(\"click\", functionReference);\r\n        row.appendChild(cell);\r\n    };\r\n    GameBoard.prototype.GetMove = function (cell, boardElement, functionReference) {\r\n        cell.textContent = this.players[this.currentPlayerIndex].playerSign;\r\n        boardElement.playerId = this.currentPlayerIndex;\r\n        this.moveNumber++;\r\n        cell.removeEventListener(\"click\", functionReference);\r\n        if (this.CheckIfWin(this.currentPlayerIndex, boardElement))\r\n            console.log(\"wygrana\");\r\n        this.SwitchPlayer();\r\n    };\r\n    GameBoard.prototype.SwitchPlayer = function () {\r\n        if (this.currentPlayerIndex === this.players.length - 1)\r\n            this.currentPlayerIndex = 0;\r\n        else\r\n            this.currentPlayerIndex++;\r\n    };\r\n    GameBoard.prototype.CheckIfWin = function (playerId, actualCell) {\r\n        if (this.moveNumber >= this.lenghtRouteToWin * this.players.length - 1) {\r\n            var playerPositions = this.boardArray.filter(function (cell) { return cell.playerId === playerId; });\r\n            if (this.checkVertical(actualCell, playerPositions))\r\n                return true;\r\n            if (this.checkHorizontal(actualCell, playerPositions))\r\n                return true;\r\n            if (this.checkDiagonalLeft(actualCell, playerPositions))\r\n                return true;\r\n            if (this.checkDiagonalRight(actualCell, playerPositions))\r\n                return true;\r\n        }\r\n        return false;\r\n    };\r\n    GameBoard.prototype.checkVertical = function (actualCell, playerPositions) {\r\n        var counter = 1;\r\n        var i;\r\n        var checkCondition = function () {\r\n            return playerPositions.findIndex(function (position) {\r\n                return position.positionY === actualCell.positionY &&\r\n                    position.positionX === i;\r\n            });\r\n        };\r\n        for (i = actualCell.positionX - 1; i >= 0; i--) {\r\n            if (checkCondition() >= 0)\r\n                counter++;\r\n            else\r\n                break;\r\n        }\r\n        for (i = actualCell.positionX + 1; i >= 0; i++) {\r\n            if (checkCondition() >= 0)\r\n                counter++;\r\n            else\r\n                break;\r\n        }\r\n        if (counter >= this.lenghtRouteToWin)\r\n            return true;\r\n        return false;\r\n    };\r\n    GameBoard.prototype.checkHorizontal = function (actualCell, playerPositions) {\r\n        var counter = 1;\r\n        var i;\r\n        var checkCondition = function () {\r\n            return playerPositions.findIndex(function (position) {\r\n                return position.positionX === actualCell.positionX &&\r\n                    position.positionY === i;\r\n            });\r\n        };\r\n        for (i = actualCell.positionY - 1; i >= 0; i--) {\r\n            if (checkCondition() >= 0)\r\n                counter++;\r\n            else\r\n                break;\r\n        }\r\n        for (i = actualCell.positionY + 1; i >= 0; i++) {\r\n            if (checkCondition() >= 0)\r\n                counter++;\r\n            else\r\n                break;\r\n        }\r\n        if (counter >= this.lenghtRouteToWin)\r\n            return true;\r\n        return false;\r\n    };\r\n    GameBoard.prototype.checkDiagonalLeft = function (actualCell, playerPositions) {\r\n        var counter = 1;\r\n        var i;\r\n        var j;\r\n        var checkCondition = function () {\r\n            return playerPositions.findIndex(function (position) { return position.positionX === i && position.positionY === j; });\r\n        };\r\n        // prettier-ignore\r\n        for (i = actualCell.positionX - 1, j = actualCell.positionY - 1; i >= 0; i--, j--) {\r\n            if (checkCondition() >= 0)\r\n                counter++;\r\n            else\r\n                break;\r\n        }\r\n        // prettier-ignore\r\n        for (i = actualCell.positionX + 1, j = actualCell.positionY + 1; i >= 0; i++, j++) {\r\n            if (checkCondition() >= 0)\r\n                counter++;\r\n            else\r\n                break;\r\n        }\r\n        if (counter >= this.lenghtRouteToWin)\r\n            return true;\r\n        return false;\r\n    };\r\n    GameBoard.prototype.checkDiagonalRight = function (actualCell, playerPositions) {\r\n        var counter = 1;\r\n        var i;\r\n        var j;\r\n        var checkCondition = function () {\r\n            return playerPositions.findIndex(function (position) { return position.positionX === i && position.positionY === j; });\r\n        };\r\n        // prettier-ignore\r\n        for (i = actualCell.positionX + 1, j = actualCell.positionY - 1; j >= 0; i++, j--) {\r\n            if (checkCondition() >= 0)\r\n                counter++;\r\n            else\r\n                break;\r\n        }\r\n        // prettier-ignore\r\n        for (i = actualCell.positionX - 1, j = actualCell.positionY + 1; i >= 0; i--, j++) {\r\n            if (checkCondition() >= 0)\r\n                counter++;\r\n            else\r\n                break;\r\n        }\r\n        if (counter >= this.lenghtRouteToWin)\r\n            return true;\r\n        return false;\r\n    };\r\n    return GameBoard;\r\n}());\r\nexports.default = GameBoard;\r\n\n\n//# sourceURL=webpack:///./src/gameBoard.ts?");

/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar Player = /** @class */ (function () {\r\n    function Player(gameBoard, playerType, playerNumber) {\r\n        this.playerSignAvailable = [\"O\", \"X\"];\r\n        this.gameBoard = gameBoard;\r\n        this.playerType = playerType;\r\n        this.playerSign = this.playerSignAvailable[playerNumber];\r\n    }\r\n    return Player;\r\n}());\r\nexports.default = Player;\r\n\n\n//# sourceURL=webpack:///./src/player.ts?");

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