/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./speed_node/card.js":
/*!****************************!*\
  !*** ./speed_node/card.js ***!
  \****************************/
/***/ ((module) => {

eval("class Card {\r\n  constructor(suit, value) {\r\n    this.suit = suit;\r\n    this.value = value;\r\n  };\r\n};\r\n\r\nCard.SUITS = ['♣', '♦', '♥', '♠'];\r\nCard.VALUES = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']\r\n\r\nmodule.exports = Card;\r\n\n\n//# sourceURL=webpack:///./speed_node/card.js?");

/***/ }),

/***/ "./speed_node/deck.js":
/*!****************************!*\
  !*** ./speed_node/deck.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Card = __webpack_require__(/*! ./card */ \"./speed_node/card.js\");\r\n\r\nclass Deck {\r\n  constructor() {\r\n    this.cards = [];\r\n    this.createDeck();\r\n    this.shuffleDeck();\r\n  };\r\n\r\n  createDeck() {\r\n    for (let i = 0; i < Card.SUITS.length; i++) {\r\n      for (let j = 0; j < Card.VALUES.length; j++) {\r\n        this.cards.push(new Card(Card.SUITS[i], Card.VALUES[j]));\r\n      };\r\n    };\r\n  };\r\n\r\n  shuffleDeck() {\r\n    for (let i = this.cards.length - 1; i > 0; i--) {\r\n      let j = Math.floor(Math.random() * i);\r\n      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];\r\n    };\r\n  };\r\n};\r\n\r\nmodule.exports = Deck;\r\n\r\n// let d = new Deck();\r\n// console.log(d);\r\n\n\n//# sourceURL=webpack:///./speed_node/deck.js?");

/***/ }),

/***/ "./speed_node/game.js":
/*!****************************!*\
  !*** ./speed_node/game.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Card = __webpack_require__(/*! ./card */ \"./speed_node/card.js\");\r\nconst Deck = __webpack_require__(/*! ./deck */ \"./speed_node/deck.js\");\r\n\r\nclass Game {\r\n  constructor() {\r\n    this.hand1 = [];\r\n    this.hand2 = [];\r\n    this.pile1 = [];\r\n    this.pile2 = [];\r\n    this.reserve1 = [];\r\n    this.reserve2 = [];\r\n    this.stack1 = [];\r\n    this.stack2 = [];\r\n    this.dealCards();\r\n  };\r\n\r\n  dealCards () {\r\n    let deck = new Deck().cards;\r\n    // this.hand1 = deck.splice(0, Game.MAX_HAND_SIZE);\r\n    // this.hand2 = deck.splice(0, Game.MAX_HAND_SIZE);\r\n    for (let i = 0; i < Game.MAX_HAND_SIZE; i++) {\r\n      this.hand1.push(deck.pop());\r\n      this.hand2.push(deck.pop());\r\n    };\r\n    for (let i = 0; i < Game.START_PILE_SIZE; i++) {\r\n      this.pile1.push(deck.pop());\r\n      this.pile2.push(deck.pop());\r\n    };\r\n    for (let i = 0; i < Game.START_RESERVE_SIZE; i++) {\r\n      this.reserve1.push(deck.pop());\r\n      this.reserve2.push(deck.pop());\r\n    };\r\n  };\r\n};\r\n\r\nGame.MAX_HAND_SIZE = 5;\r\nGame.START_PILE_SIZE = 15;\r\nGame.START_RESERVE_SIZE = 6;\r\n\r\nmodule.exports = Game;\r\n\r\n// let g = new Game();\r\n// console.log(g);\r\n\n\n//# sourceURL=webpack:///./speed_node/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ../speed_node/game */ \"./speed_node/game.js\");\r\nconst View = __webpack_require__(/*! ./view */ \"./src/view.js\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const game = new Game();\r\n  const board = document.querySelector('#board');\r\n  const view = new View(game, board);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ../speed_node/game */ \"./speed_node/game.js\");\r\n\r\nclass View {\r\n  constructor(game, board) {\r\n    this.game = game;\r\n    this.board = board;\r\n\r\n  };\r\n\r\n  bindEvents() {\r\n\r\n  };\r\n\r\n  \r\n};\r\n\r\nmodule.exports = View;\r\n\n\n//# sourceURL=webpack:///./src/view.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;