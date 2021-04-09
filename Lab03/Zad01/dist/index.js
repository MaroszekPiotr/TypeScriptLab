/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  color: red;\n}\n\ndiv#root {\n  display: flex;\n}\n\ntable,\nth,\ntd {\n  border: 5px solid black;\n  text-align: center;\n  border-collapse: collapse;\n  background-color: bisque;\n}\n\ntd {\n  width: 5vw;\n  height: 5vw;\n  font-size: 3rem;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.scss"],"names":[],"mappings":"AACA;EACE,UAFW;AAEb;;AAEA;EACE,aAAA;AACF;;AACA;;;EAGE,uBAAA;EACA,kBAAA;EACA,yBAAA;EACA,wBAAA;AAEF;;AAAA;EACE,UAAA;EACA,WAAA;EACA,eAAA;EACA,eAAA;AAGF","sourcesContent":["$body-color: red;\r\nbody {\r\n  color: $body-color;\r\n}\r\ndiv#root {\r\n  display: flex;\r\n}\r\ntable,\r\nth,\r\ntd {\r\n  border: 5px solid black;\r\n  text-align: center;\r\n  border-collapse: collapse;\r\n  background-color: bisque;\r\n}\r\ntd {\r\n  width: 5vw;\r\n  height: 5vw;\r\n  font-size: 3rem;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/GameLibrary.ts":
/*!****************************!*\
  !*** ./src/GameLibrary.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.GameLibrary = void 0;
var availableGames_1 = __webpack_require__(/*! ./availableGames */ "./src/availableGames.ts");
var gameFactory_1 = __webpack_require__(/*! ./gameFactory */ "./src/gameFactory.ts");
var GameLibrary = /** @class */ (function () {
    function GameLibrary() {
        this.gameLibrary = [];
        this.init();
    }
    GameLibrary.prototype.init = function () {
        var menuContainer = document.createElement("div"); // kontener menu dostępnych gier
        this.gameContainer = document.createElement("div"); // kontener główny ekranu z grą
        var list = document.createElement("ul"); // lista pozycji w menu dostępnych gier
        this.GetGames();
        this.DrawGameList(list);
        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a
        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(this.gameContainer);
    };
    GameLibrary.prototype.GetGames = function () {
        var gameFactory = new gameFactory_1.GameFactory();
        for (var game in availableGames_1.AvailableGames) {
            if (!isNaN(Number(game))) {
                var newGame = gameFactory.GameCreator(availableGames_1.AvailableGames[game]);
                this.gameLibrary.push(newGame);
            }
        }
    };
    GameLibrary.prototype.DrawGameList = function (nodePath) {
        var _this = this;
        this.gameLibrary.forEach(function (game, index) {
            var gameName = document.createElement("li");
            gameName.addEventListener("click", function () { return _this.PlayGame(index); });
            gameName.textContent = game.name;
            nodePath.appendChild(gameName);
        });
    };
    GameLibrary.prototype.PlayGame = function (index) {
        this.gameContainer.textContent = null;
        this.gameContainer.appendChild(this.gameLibrary[index].DrawGameBoard());
    };
    return GameLibrary;
}());
exports.GameLibrary = GameLibrary;


/***/ }),

/***/ "./src/Games/Battleships/battleships.ts":
/*!**********************************************!*\
  !*** ./src/Games/Battleships/battleships.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.BattleShips = void 0;
var BattleShips = /** @class */ (function () {
    function BattleShips() {
        this.name = "Statki";
    }
    BattleShips.prototype.getGameElement = function () {
        var div = document.createElement("div");
        div.appendChild(document.createTextNode("Hello BattleShips"));
        return div;
    };
    BattleShips.prototype.DrawGameBoard = function () {
        return null;
    };
    return BattleShips;
}());
exports.BattleShips = BattleShips;


/***/ }),

/***/ "./src/Games/TicTacToe/cell.ts":
/*!*************************************!*\
  !*** ./src/Games/TicTacToe/cell.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
var Cell = /** @class */ (function () {
    function Cell(positionX, positionY) {
        this.cellValue = "";
        this.positionX = positionX;
        this.positionY = positionY;
    }
    Cell.prototype.printCell = function () {
        var value;
    };
    return Cell;
}());
exports.default = Cell;


/***/ }),

/***/ "./src/Games/TicTacToe/gameBoard.ts":
/*!******************************************!*\
  !*** ./src/Games/TicTacToe/gameBoard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.GameBoard = void 0;
var cell_1 = __webpack_require__(/*! ./cell */ "./src/Games/TicTacToe/cell.ts");
var player_1 = __webpack_require__(/*! ./player */ "./src/Games/TicTacToe/player.ts");
var GameBoard = /** @class */ (function () {
    function GameBoard(sizeX, sizeY) {
        if (sizeX === void 0) { sizeX = 3; }
        if (sizeY === void 0) { sizeY = sizeX; }
        this.name = "Kółko i krzyżyk";
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.boardArray = [];
        this.players = [new player_1["default"](this, "Human", 0), new player_1["default"](this, "Human", 1)];
        this.currentPlayerIndex = 0;
        this.lenghtRouteToWin = 3;
        this.moveNumber = 0;
    }
    GameBoard.prototype.getGameElement = function () {
        var div = document.createElement("div");
        div.appendChild(document.createTextNode("Hello TicTacToe"));
        return div;
    };
    GameBoard.prototype.DrawGameBoard = function () {
        var htmlBoard = document.createElement("table");
        htmlBoard.className = "GameBoard";
        this.CreateGameBoard(htmlBoard, this.sizeX, this.sizeY);
        return htmlBoard;
    };
    GameBoard.prototype.CreateGameBoard = function (htmlBoard, numberOfRows, numberOfCells) {
        if (numberOfRows === void 0) { numberOfRows = 1; }
        if (numberOfCells === void 0) { numberOfCells = 1; }
        for (var i = 0; i < numberOfRows; i++) {
            var row = document.createElement("tr");
            for (var j = 0; j < numberOfCells; j++) {
                this.AddCell(row, i, j);
            }
            htmlBoard.appendChild(row);
        }
    };
    GameBoard.prototype.AddCell = function (row, rowPosition, columnPosition) {
        var _this = this;
        if (columnPosition === void 0) { columnPosition = 1; }
        var boardElement = new cell_1["default"](rowPosition, columnPosition);
        this.boardArray.push(boardElement);
        var cell = document.createElement("td");
        cell.textContent = "";
        var functionReference = function () {
            return _this.GetMove(cell, boardElement, functionReference);
        };
        cell.addEventListener("click", functionReference);
        row.appendChild(cell);
    };
    GameBoard.prototype.GetMove = function (cell, boardElement, functionReference) {
        cell.textContent = this.players[this.currentPlayerIndex].playerSign;
        boardElement.playerId = this.currentPlayerIndex;
        this.moveNumber++;
        cell.removeEventListener("click", functionReference);
        if (this.CheckIfWin(this.currentPlayerIndex, boardElement))
            console.log("wygrana");
        this.SwitchPlayer();
    };
    GameBoard.prototype.SwitchPlayer = function () {
        if (this.currentPlayerIndex === this.players.length - 1)
            this.currentPlayerIndex = 0;
        else
            this.currentPlayerIndex++;
    };
    GameBoard.prototype.CheckIfWin = function (playerId, actualCell) {
        if (this.moveNumber >= this.lenghtRouteToWin * this.players.length - 1) {
            var playerPositions = this.boardArray.filter(function (cell) { return cell.playerId === playerId; });
            if (this.checkVertical(actualCell, playerPositions))
                return true;
            if (this.checkHorizontal(actualCell, playerPositions))
                return true;
            if (this.checkDiagonalLeft(actualCell, playerPositions))
                return true;
            if (this.checkDiagonalRight(actualCell, playerPositions))
                return true;
        }
        return false;
    };
    GameBoard.prototype.checkVertical = function (actualCell, playerPositions) {
        var counter = 1;
        var i;
        var checkCondition = function () {
            return playerPositions.findIndex(function (position) {
                return position.positionY === actualCell.positionY &&
                    position.positionX === i;
            });
        };
        for (i = actualCell.positionX - 1; i >= 0; i--) {
            if (checkCondition() >= 0)
                counter++;
            else
                break;
        }
        for (i = actualCell.positionX + 1; i >= 0; i++) {
            if (checkCondition() >= 0)
                counter++;
            else
                break;
        }
        if (counter >= this.lenghtRouteToWin)
            return true;
        return false;
    };
    GameBoard.prototype.checkHorizontal = function (actualCell, playerPositions) {
        var counter = 1;
        var i;
        var checkCondition = function () {
            return playerPositions.findIndex(function (position) {
                return position.positionX === actualCell.positionX &&
                    position.positionY === i;
            });
        };
        for (i = actualCell.positionY - 1; i >= 0; i--) {
            if (checkCondition() >= 0)
                counter++;
            else
                break;
        }
        for (i = actualCell.positionY + 1; i >= 0; i++) {
            if (checkCondition() >= 0)
                counter++;
            else
                break;
        }
        if (counter >= this.lenghtRouteToWin)
            return true;
        return false;
    };
    GameBoard.prototype.checkDiagonalLeft = function (actualCell, playerPositions) {
        var counter = 1;
        var i;
        var j;
        var checkCondition = function () {
            return playerPositions.findIndex(function (position) { return position.positionX === i && position.positionY === j; });
        };
        // prettier-ignore
        for (i = actualCell.positionX - 1, j = actualCell.positionY - 1; i >= 0; i--, j--) {
            if (checkCondition() >= 0)
                counter++;
            else
                break;
        }
        // prettier-ignore
        for (i = actualCell.positionX + 1, j = actualCell.positionY + 1; i >= 0; i++, j++) {
            if (checkCondition() >= 0)
                counter++;
            else
                break;
        }
        if (counter >= this.lenghtRouteToWin)
            return true;
        return false;
    };
    GameBoard.prototype.checkDiagonalRight = function (actualCell, playerPositions) {
        var counter = 1;
        var i;
        var j;
        var checkCondition = function () {
            return playerPositions.findIndex(function (position) { return position.positionX === i && position.positionY === j; });
        };
        // prettier-ignore
        for (i = actualCell.positionX + 1, j = actualCell.positionY - 1; j >= 0; i++, j--) {
            if (checkCondition() >= 0)
                counter++;
            else
                break;
        }
        // prettier-ignore
        for (i = actualCell.positionX - 1, j = actualCell.positionY + 1; i >= 0; i--, j++) {
            if (checkCondition() >= 0)
                counter++;
            else
                break;
        }
        if (counter >= this.lenghtRouteToWin)
            return true;
        return false;
    };
    return GameBoard;
}());
exports.GameBoard = GameBoard;


/***/ }),

/***/ "./src/Games/TicTacToe/player.ts":
/*!***************************************!*\
  !*** ./src/Games/TicTacToe/player.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
var Player = /** @class */ (function () {
    function Player(gameBoard, playerType, playerNumber) {
        this.playerSignAvailable = ["O", "X"];
        this.gameBoard = gameBoard;
        this.playerType = playerType;
        this.playerSign = this.playerSignAvailable[playerNumber];
    }
    return Player;
}());
exports.default = Player;


/***/ }),

/***/ "./src/availableGames.ts":
/*!*******************************!*\
  !*** ./src/availableGames.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.AvailableGames = void 0;
var AvailableGames;
(function (AvailableGames) {
    AvailableGames[AvailableGames["TicTacToe"] = 0] = "TicTacToe";
    AvailableGames[AvailableGames["BattleShips"] = 1] = "BattleShips";
})(AvailableGames = exports.AvailableGames || (exports.AvailableGames = {}));


/***/ }),

/***/ "./src/gameFactory.ts":
/*!****************************!*\
  !*** ./src/gameFactory.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.GameFactory = void 0;
var gameBoard_1 = __webpack_require__(/*! ./Games/TicTacToe/gameBoard */ "./src/Games/TicTacToe/gameBoard.ts");
var battleships_1 = __webpack_require__(/*! ./Games/Battleships/battleships */ "./src/Games/Battleships/battleships.ts");
var GameFactory = /** @class */ (function () {
    function GameFactory() {
    }
    GameFactory.prototype.GameCreator = function (gameName) {
        switch (gameName) {
            case "TicTacToe":
                return new gameBoard_1.GameBoard();
            case "BattleShips":
                return new battleships_1.BattleShips();
            default:
                console.error("nie ma takiej gry");
        }
    };
    return GameFactory;
}());
exports.GameFactory = GameFactory;


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

exports.__esModule = true;
__webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
var GameLibrary_1 = __webpack_require__(/*! ./GameLibrary */ "./src/GameLibrary.ts");
new GameLibrary_1.GameLibrary();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2Nzcz8yMDNiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZUxpYnJhcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVzL0JhdHRsZXNoaXBzL2JhdHRsZXNoaXBzLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lcy9UaWNUYWNUb2UvY2VsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZXMvVGljVGFjVG9lL2dhbWVCb2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZXMvVGljVGFjVG9lL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXZhaWxhYmxlR2FtZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVGYWN0b3J5LnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIl0sIm5hbWVzIjpbXSwi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anMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuZGl2I3Jvb3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxudGFibGUsXFxudGgsXFxudGQge1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbn1cXG5cXG50ZCB7XFxuICB3aWR0aDogNXZ3O1xcbiAgaGVpZ2h0OiA1dnc7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxVQUZXO0FBRWI7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0E7OztFQUdFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBR0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJvZHktY29sb3I6IHJlZDtcXHJcXG5ib2R5IHtcXHJcXG4gIGNvbG9yOiAkYm9keS1jb2xvcjtcXHJcXG59XFxyXFxuZGl2I3Jvb3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxudGFibGUsXFxyXFxudGgsXFxyXFxudGQge1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcclxcbn1cXHJcXG50ZCB7XFxyXFxuICB3aWR0aDogNXZ3O1xcclxcbiAgaGVpZ2h0OiA1dnc7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuR2FtZUxpYnJhcnkgPSB2b2lkIDA7XHJcbnZhciBhdmFpbGFibGVHYW1lc18xID0gcmVxdWlyZShcIi4vYXZhaWxhYmxlR2FtZXNcIik7XHJcbnZhciBnYW1lRmFjdG9yeV8xID0gcmVxdWlyZShcIi4vZ2FtZUZhY3RvcnlcIik7XHJcbnZhciBHYW1lTGlicmFyeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVMaWJyYXJ5KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUxpYnJhcnkgPSBbXTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuICAgIEdhbWVMaWJyYXJ5LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8ga29udGVuZXIgbWVudSBkb3N0xJlwbnljaCBnaWVyXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8ga29udGVuZXIgZ8WCw7N3bnkgZWtyYW51IHogZ3LEhVxyXG4gICAgICAgIHZhciBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpOyAvLyBsaXN0YSBwb3p5Y2ppIHcgbWVudSBkb3N0xJlwbnljaCBnaWVyXHJcbiAgICAgICAgdGhpcy5HZXRHYW1lcygpO1xyXG4gICAgICAgIHRoaXMuRHJhd0dhbWVMaXN0KGxpc3QpO1xyXG4gICAgICAgIC8vIFRPRE86IFphaW1wbGVtZW50dWogd3pvcnplYyBmYWJyeWtpL21ldG9keSBmYWJyeWt1asSFY2VqLCB0YWsgYWJ5IG5hIHBvZHN0YXdpZSBrb25rcmV0bmVqIHdhcnRvxZtjaSB6IGVudW1cclxuICAgICAgICAvLyB6d3LDs2NpxIcgb2JpZWt0IGdyeS4gWiB0ZWdvIG9iaWVrdHUgbW/FvG5hIG5hc3TEmXBuaWUgcG9icmHEhyBuYXp3xJkgZ3J5IGkgZG9kYcSHIGRvIG1lbnUgb3JheiBtZXRvZMSZIHp3cmFjYWrEhWPEhVxyXG4gICAgICAgIC8vIHNhbcSFIGdyxJkgaSBwbyBrbGlrbmnEmWNpdSB3IHd5YnJhbnkgZWxlbWVudCBsaXN0eSB3eXdvxYJ5d2HEhyBqxIUsIGFieSBkb2tsZWphxIcgemF3YXJ0b8WbxIcgZG8gZ2FtZUNvbnRhaW5lci5cclxuICAgICAgICAvLyBBYnkgd3nFm3dpZXRsacSHIG1lbnUgbmFsZcW8eSBuYXBpc2HEhyBwxJl0bMSZLCBrdMOzdGEgcHJ6ZWl0ZXJ1amUgcG8gd3N6eXN0a2ljaCB3YXJ0b8WbY2lhY2ggZW51bSdhXHJcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nYW1lQ29udGFpbmVyKTtcclxuICAgIH07XHJcbiAgICBHYW1lTGlicmFyeS5wcm90b3R5cGUuR2V0R2FtZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGdhbWVGYWN0b3J5ID0gbmV3IGdhbWVGYWN0b3J5XzEuR2FtZUZhY3RvcnkoKTtcclxuICAgICAgICBmb3IgKHZhciBnYW1lIGluIGF2YWlsYWJsZUdhbWVzXzEuQXZhaWxhYmxlR2FtZXMpIHtcclxuICAgICAgICAgICAgaWYgKCFpc05hTihOdW1iZXIoZ2FtZSkpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3R2FtZSA9IGdhbWVGYWN0b3J5LkdhbWVDcmVhdG9yKGF2YWlsYWJsZUdhbWVzXzEuQXZhaWxhYmxlR2FtZXNbZ2FtZV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTGlicmFyeS5wdXNoKG5ld0dhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdhbWVMaWJyYXJ5LnByb3RvdHlwZS5EcmF3R2FtZUxpc3QgPSBmdW5jdGlvbiAobm9kZVBhdGgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZ2FtZUxpYnJhcnkuZm9yRWFjaChmdW5jdGlvbiAoZ2FtZSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgdmFyIGdhbWVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICBnYW1lTmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuUGxheUdhbWUoaW5kZXgpOyB9KTtcclxuICAgICAgICAgICAgZ2FtZU5hbWUudGV4dENvbnRlbnQgPSBnYW1lLm5hbWU7XHJcbiAgICAgICAgICAgIG5vZGVQYXRoLmFwcGVuZENoaWxkKGdhbWVOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBHYW1lTGlicmFyeS5wcm90b3R5cGUuUGxheUdhbWUgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmdhbWVDb250YWluZXIudGV4dENvbnRlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmdhbWVMaWJyYXJ5W2luZGV4XS5EcmF3R2FtZUJvYXJkKCkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lTGlicmFyeTtcclxufSgpKTtcclxuZXhwb3J0cy5HYW1lTGlicmFyeSA9IEdhbWVMaWJyYXJ5O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5CYXR0bGVTaGlwcyA9IHZvaWQgMDtcclxudmFyIEJhdHRsZVNoaXBzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQmF0dGxlU2hpcHMoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJTdGF0a2lcIjtcclxuICAgIH1cclxuICAgIEJhdHRsZVNoaXBzLnByb3RvdHlwZS5nZXRHYW1lRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIZWxsbyBCYXR0bGVTaGlwc1wiKSk7XHJcbiAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH07XHJcbiAgICBCYXR0bGVTaGlwcy5wcm90b3R5cGUuRHJhd0dhbWVCb2FyZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQmF0dGxlU2hpcHM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQmF0dGxlU2hpcHMgPSBCYXR0bGVTaGlwcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciBDZWxsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2VsbChwb3NpdGlvblgsIHBvc2l0aW9uWSkge1xyXG4gICAgICAgIHRoaXMuY2VsbFZhbHVlID0gXCJcIjtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWCA9IHBvc2l0aW9uWDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWSA9IHBvc2l0aW9uWTtcclxuICAgIH1cclxuICAgIENlbGwucHJvdG90eXBlLnByaW50Q2VsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENlbGw7XHJcbn0oKSk7XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ2VsbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuR2FtZUJvYXJkID0gdm9pZCAwO1xyXG52YXIgY2VsbF8xID0gcmVxdWlyZShcIi4vY2VsbFwiKTtcclxudmFyIHBsYXllcl8xID0gcmVxdWlyZShcIi4vcGxheWVyXCIpO1xyXG52YXIgR2FtZUJvYXJkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZUJvYXJkKHNpemVYLCBzaXplWSkge1xyXG4gICAgICAgIGlmIChzaXplWCA9PT0gdm9pZCAwKSB7IHNpemVYID0gMzsgfVxyXG4gICAgICAgIGlmIChzaXplWSA9PT0gdm9pZCAwKSB7IHNpemVZID0gc2l6ZVg7IH1cclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkvDs8WCa28gaSBrcnp5xbx5a1wiO1xyXG4gICAgICAgIHRoaXMuc2l6ZVggPSBzaXplWDtcclxuICAgICAgICB0aGlzLnNpemVZID0gc2l6ZVk7XHJcbiAgICAgICAgdGhpcy5ib2FyZEFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gW25ldyBwbGF5ZXJfMVtcImRlZmF1bHRcIl0odGhpcywgXCJIdW1hblwiLCAwKSwgbmV3IHBsYXllcl8xW1wiZGVmYXVsdFwiXSh0aGlzLCBcIkh1bWFuXCIsIDEpXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5sZW5naHRSb3V0ZVRvV2luID0gMztcclxuICAgICAgICB0aGlzLm1vdmVOdW1iZXIgPSAwO1xyXG4gICAgfVxyXG4gICAgR2FtZUJvYXJkLnByb3RvdHlwZS5nZXRHYW1lRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIZWxsbyBUaWNUYWNUb2VcIikpO1xyXG4gICAgICAgIHJldHVybiBkaXY7XHJcbiAgICB9O1xyXG4gICAgR2FtZUJvYXJkLnByb3RvdHlwZS5EcmF3R2FtZUJvYXJkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBodG1sQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgaHRtbEJvYXJkLmNsYXNzTmFtZSA9IFwiR2FtZUJvYXJkXCI7XHJcbiAgICAgICAgdGhpcy5DcmVhdGVHYW1lQm9hcmQoaHRtbEJvYXJkLCB0aGlzLnNpemVYLCB0aGlzLnNpemVZKTtcclxuICAgICAgICByZXR1cm4gaHRtbEJvYXJkO1xyXG4gICAgfTtcclxuICAgIEdhbWVCb2FyZC5wcm90b3R5cGUuQ3JlYXRlR2FtZUJvYXJkID0gZnVuY3Rpb24gKGh0bWxCb2FyZCwgbnVtYmVyT2ZSb3dzLCBudW1iZXJPZkNlbGxzKSB7XHJcbiAgICAgICAgaWYgKG51bWJlck9mUm93cyA9PT0gdm9pZCAwKSB7IG51bWJlck9mUm93cyA9IDE7IH1cclxuICAgICAgICBpZiAobnVtYmVyT2ZDZWxscyA9PT0gdm9pZCAwKSB7IG51bWJlck9mQ2VsbHMgPSAxOyB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZlJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG51bWJlck9mQ2VsbHM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BZGRDZWxsKHJvdywgaSwgaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaHRtbEJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdhbWVCb2FyZC5wcm90b3R5cGUuQWRkQ2VsbCA9IGZ1bmN0aW9uIChyb3csIHJvd1Bvc2l0aW9uLCBjb2x1bW5Qb3NpdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGNvbHVtblBvc2l0aW9uID09PSB2b2lkIDApIHsgY29sdW1uUG9zaXRpb24gPSAxOyB9XHJcbiAgICAgICAgdmFyIGJvYXJkRWxlbWVudCA9IG5ldyBjZWxsXzFbXCJkZWZhdWx0XCJdKHJvd1Bvc2l0aW9uLCBjb2x1bW5Qb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5ib2FyZEFycmF5LnB1c2goYm9hcmRFbGVtZW50KTtcclxuICAgICAgICB2YXIgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB2YXIgZnVuY3Rpb25SZWZlcmVuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5HZXRNb3ZlKGNlbGwsIGJvYXJkRWxlbWVudCwgZnVuY3Rpb25SZWZlcmVuY2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb25SZWZlcmVuY2UpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgIH07XHJcbiAgICBHYW1lQm9hcmQucHJvdG90eXBlLkdldE1vdmUgPSBmdW5jdGlvbiAoY2VsbCwgYm9hcmRFbGVtZW50LCBmdW5jdGlvblJlZmVyZW5jZSkge1xyXG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSB0aGlzLnBsYXllcnNbdGhpcy5jdXJyZW50UGxheWVySW5kZXhdLnBsYXllclNpZ247XHJcbiAgICAgICAgYm9hcmRFbGVtZW50LnBsYXllcklkID0gdGhpcy5jdXJyZW50UGxheWVySW5kZXg7XHJcbiAgICAgICAgdGhpcy5tb3ZlTnVtYmVyKys7XHJcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb25SZWZlcmVuY2UpO1xyXG4gICAgICAgIGlmICh0aGlzLkNoZWNrSWZXaW4odGhpcy5jdXJyZW50UGxheWVySW5kZXgsIGJvYXJkRWxlbWVudCkpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3lncmFuYVwiKTtcclxuICAgICAgICB0aGlzLlN3aXRjaFBsYXllcigpO1xyXG4gICAgfTtcclxuICAgIEdhbWVCb2FyZC5wcm90b3R5cGUuU3dpdGNoUGxheWVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCA9PT0gdGhpcy5wbGF5ZXJzLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllckluZGV4ID0gMDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllckluZGV4Kys7XHJcbiAgICB9O1xyXG4gICAgR2FtZUJvYXJkLnByb3RvdHlwZS5DaGVja0lmV2luID0gZnVuY3Rpb24gKHBsYXllcklkLCBhY3R1YWxDZWxsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZU51bWJlciA+PSB0aGlzLmxlbmdodFJvdXRlVG9XaW4gKiB0aGlzLnBsYXllcnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICB2YXIgcGxheWVyUG9zaXRpb25zID0gdGhpcy5ib2FyZEFycmF5LmZpbHRlcihmdW5jdGlvbiAoY2VsbCkgeyByZXR1cm4gY2VsbC5wbGF5ZXJJZCA9PT0gcGxheWVySWQ7IH0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1ZlcnRpY2FsKGFjdHVhbENlbGwsIHBsYXllclBvc2l0aW9ucykpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tIb3Jpem9udGFsKGFjdHVhbENlbGwsIHBsYXllclBvc2l0aW9ucykpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tEaWFnb25hbExlZnQoYWN0dWFsQ2VsbCwgcGxheWVyUG9zaXRpb25zKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja0RpYWdvbmFsUmlnaHQoYWN0dWFsQ2VsbCwgcGxheWVyUG9zaXRpb25zKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgR2FtZUJvYXJkLnByb3RvdHlwZS5jaGVja1ZlcnRpY2FsID0gZnVuY3Rpb24gKGFjdHVhbENlbGwsIHBsYXllclBvc2l0aW9ucykge1xyXG4gICAgICAgIHZhciBjb3VudGVyID0gMTtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICB2YXIgY2hlY2tDb25kaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJQb3NpdGlvbnMuZmluZEluZGV4KGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uLnBvc2l0aW9uWSA9PT0gYWN0dWFsQ2VsbC5wb3NpdGlvblkgJiZcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5wb3NpdGlvblggPT09IGk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yIChpID0gYWN0dWFsQ2VsbC5wb3NpdGlvblggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tDb25kaXRpb24oKSA+PSAwKVxyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChpID0gYWN0dWFsQ2VsbC5wb3NpdGlvblggKyAxOyBpID49IDA7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tDb25kaXRpb24oKSA+PSAwKVxyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvdW50ZXIgPj0gdGhpcy5sZW5naHRSb3V0ZVRvV2luKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgR2FtZUJvYXJkLnByb3RvdHlwZS5jaGVja0hvcml6b250YWwgPSBmdW5jdGlvbiAoYWN0dWFsQ2VsbCwgcGxheWVyUG9zaXRpb25zKSB7XHJcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAxO1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIHZhciBjaGVja0NvbmRpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBsYXllclBvc2l0aW9ucy5maW5kSW5kZXgoZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zaXRpb24ucG9zaXRpb25YID09PSBhY3R1YWxDZWxsLnBvc2l0aW9uWCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnBvc2l0aW9uWSA9PT0gaTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGkgPSBhY3R1YWxDZWxsLnBvc2l0aW9uWSAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja0NvbmRpdGlvbigpID49IDApXHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGkgPSBhY3R1YWxDZWxsLnBvc2l0aW9uWSArIDE7IGkgPj0gMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja0NvbmRpdGlvbigpID49IDApXHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY291bnRlciA+PSB0aGlzLmxlbmdodFJvdXRlVG9XaW4pXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBHYW1lQm9hcmQucHJvdG90eXBlLmNoZWNrRGlhZ29uYWxMZWZ0ID0gZnVuY3Rpb24gKGFjdHVhbENlbGwsIHBsYXllclBvc2l0aW9ucykge1xyXG4gICAgICAgIHZhciBjb3VudGVyID0gMTtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICB2YXIgajtcclxuICAgICAgICB2YXIgY2hlY2tDb25kaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJQb3NpdGlvbnMuZmluZEluZGV4KGZ1bmN0aW9uIChwb3NpdGlvbikgeyByZXR1cm4gcG9zaXRpb24ucG9zaXRpb25YID09PSBpICYmIHBvc2l0aW9uLnBvc2l0aW9uWSA9PT0gajsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICBmb3IgKGkgPSBhY3R1YWxDZWxsLnBvc2l0aW9uWCAtIDEsIGogPSBhY3R1YWxDZWxsLnBvc2l0aW9uWSAtIDE7IGkgPj0gMDsgaS0tLCBqLS0pIHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrQ29uZGl0aW9uKCkgPj0gMClcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgICAgIGZvciAoaSA9IGFjdHVhbENlbGwucG9zaXRpb25YICsgMSwgaiA9IGFjdHVhbENlbGwucG9zaXRpb25ZICsgMTsgaSA+PSAwOyBpKyssIGorKykge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tDb25kaXRpb24oKSA+PSAwKVxyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvdW50ZXIgPj0gdGhpcy5sZW5naHRSb3V0ZVRvV2luKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgR2FtZUJvYXJkLnByb3RvdHlwZS5jaGVja0RpYWdvbmFsUmlnaHQgPSBmdW5jdGlvbiAoYWN0dWFsQ2VsbCwgcGxheWVyUG9zaXRpb25zKSB7XHJcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAxO1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIHZhciBqO1xyXG4gICAgICAgIHZhciBjaGVja0NvbmRpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBsYXllclBvc2l0aW9ucy5maW5kSW5kZXgoZnVuY3Rpb24gKHBvc2l0aW9uKSB7IHJldHVybiBwb3NpdGlvbi5wb3NpdGlvblggPT09IGkgJiYgcG9zaXRpb24ucG9zaXRpb25ZID09PSBqOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgICAgIGZvciAoaSA9IGFjdHVhbENlbGwucG9zaXRpb25YICsgMSwgaiA9IGFjdHVhbENlbGwucG9zaXRpb25ZIC0gMTsgaiA+PSAwOyBpKyssIGotLSkge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tDb25kaXRpb24oKSA+PSAwKVxyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgZm9yIChpID0gYWN0dWFsQ2VsbC5wb3NpdGlvblggLSAxLCBqID0gYWN0dWFsQ2VsbC5wb3NpdGlvblkgKyAxOyBpID49IDA7IGktLSwgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja0NvbmRpdGlvbigpID49IDApXHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY291bnRlciA+PSB0aGlzLmxlbmdodFJvdXRlVG9XaW4pXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZUJvYXJkO1xyXG59KCkpO1xyXG5leHBvcnRzLkdhbWVCb2FyZCA9IEdhbWVCb2FyZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciBQbGF5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQbGF5ZXIoZ2FtZUJvYXJkLCBwbGF5ZXJUeXBlLCBwbGF5ZXJOdW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBsYXllclNpZ25BdmFpbGFibGUgPSBbXCJPXCIsIFwiWFwiXTtcclxuICAgICAgICB0aGlzLmdhbWVCb2FyZCA9IGdhbWVCb2FyZDtcclxuICAgICAgICB0aGlzLnBsYXllclR5cGUgPSBwbGF5ZXJUeXBlO1xyXG4gICAgICAgIHRoaXMucGxheWVyU2lnbiA9IHRoaXMucGxheWVyU2lnbkF2YWlsYWJsZVtwbGF5ZXJOdW1iZXJdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBsYXllcjtcclxufSgpKTtcclxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBQbGF5ZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkF2YWlsYWJsZUdhbWVzID0gdm9pZCAwO1xyXG52YXIgQXZhaWxhYmxlR2FtZXM7XHJcbihmdW5jdGlvbiAoQXZhaWxhYmxlR2FtZXMpIHtcclxuICAgIEF2YWlsYWJsZUdhbWVzW0F2YWlsYWJsZUdhbWVzW1wiVGljVGFjVG9lXCJdID0gMF0gPSBcIlRpY1RhY1RvZVwiO1xyXG4gICAgQXZhaWxhYmxlR2FtZXNbQXZhaWxhYmxlR2FtZXNbXCJCYXR0bGVTaGlwc1wiXSA9IDFdID0gXCJCYXR0bGVTaGlwc1wiO1xyXG59KShBdmFpbGFibGVHYW1lcyA9IGV4cG9ydHMuQXZhaWxhYmxlR2FtZXMgfHwgKGV4cG9ydHMuQXZhaWxhYmxlR2FtZXMgPSB7fSkpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5HYW1lRmFjdG9yeSA9IHZvaWQgMDtcclxudmFyIGdhbWVCb2FyZF8xID0gcmVxdWlyZShcIi4vR2FtZXMvVGljVGFjVG9lL2dhbWVCb2FyZFwiKTtcclxudmFyIGJhdHRsZXNoaXBzXzEgPSByZXF1aXJlKFwiLi9HYW1lcy9CYXR0bGVzaGlwcy9iYXR0bGVzaGlwc1wiKTtcclxudmFyIEdhbWVGYWN0b3J5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZUZhY3RvcnkoKSB7XHJcbiAgICB9XHJcbiAgICBHYW1lRmFjdG9yeS5wcm90b3R5cGUuR2FtZUNyZWF0b3IgPSBmdW5jdGlvbiAoZ2FtZU5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKGdhbWVOYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJUaWNUYWNUb2VcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgZ2FtZUJvYXJkXzEuR2FtZUJvYXJkKCk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCYXR0bGVTaGlwc1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBiYXR0bGVzaGlwc18xLkJhdHRsZVNoaXBzKCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibmllIG1hIHRha2llaiBncnlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lRmFjdG9yeTtcclxufSgpKTtcclxuZXhwb3J0cy5HYW1lRmFjdG9yeSA9IEdhbWVGYWN0b3J5O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnJlcXVpcmUoXCIuL3N0eWxlcy9zdHlsZXMuc2Nzc1wiKTtcclxudmFyIEdhbWVMaWJyYXJ5XzEgPSByZXF1aXJlKFwiLi9HYW1lTGlicmFyeVwiKTtcclxubmV3IEdhbWVMaWJyYXJ5XzEuR2FtZUxpYnJhcnkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==