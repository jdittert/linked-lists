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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _linked_lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-lists */ \"./src/linked-lists.js\");\n\n\nconst list = new _linked_lists__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nlist.append('upon');\nlist.append('a');\nlist.append('time');\n\nlist.prepend('Once');\n\nconsole.log(list);\n\nconsole.log('size:', list.size(undefined));\nconsole.log('head:', list.listHead(undefined));\nconsole.log('tail:', list.listTail(undefined));\n\nconsole.log('index 0:', list.at(0));\nconsole.log('index 2:', list.at(2));\nconsole.log('index 3:', list.at(3));\nconsole.log('index 5:', list.at(5));\n\nconsole.log(list.pop(undefined));\n\n\n\n//# sourceURL=webpack://linked-lists/./src/index.js?");

/***/ }),

/***/ "./src/linked-lists.js":
/*!*****************************!*\
  !*** ./src/linked-lists.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LinkedList)\n/* harmony export */ });\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ \"./src/node.js\");\n/* eslint-disable no-restricted-syntax */\n/* eslint-disable guard-for-in */\n\n\nclass LinkedList {\n    constructor() {\n        this.head = null;\n    }\n\n    append(value) {\n        const node = new _node__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        node.value = value;\n        if (!this.head) this.head = node;\n        else if (!this.tail) {\n            this.head.next = node.value;\n            this.tail = node;\n        }\n        else {\n            const temp = this.tail.value;\n            this.tail.next = 'tail';\n            const tempNode = {[temp]:this.tail};\n            Object.assign(this, tempNode);            \n            delete this.tail;\n            this.tail = node;\n        }\n    }\n\n    prepend(value) {\n        const node = new _node__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        node.value = value;\n        if (!this.head) this.head = node;\n        else {\n            const temp = this.head.value;\n            node.next = temp;\n            this[temp] = this.head;\n            this.head = node;\n        }\n    }\n\n    size() {\n        const keys = Object.keys(this);\n        return keys.length;\n    }\n\n    listHead() {\n        return this.head;\n    }\n\n    listTail() {\n        return this.tail;\n    }\n\n    at(index) {\n        if (index === 0) return this.head;\n        if (index > Object.keys(this).length - 1) return undefined;\n        let temp = this.head.next;\n        let i = 0;\n        while (i < (index - 1)) {\n            temp = this[temp].next;\n            i++;\n        }\n        return this[temp];                \n    }\n\n    pop() {\n        let newTail;\n        let preTail;\n        for (const node in this) {\n            if (this[node].next === 'tail') {\n                newTail = this[node];\n            };            \n        }\n        for (const node in this) {\n            if (this[node].next === newTail.value) {\n                preTail = this[node];\n            }\n        }\n        preTail.next = 'tail';\n        newTail.next = null;\n        this.tail = newTail;\n        const {value} = newTail; \n        delete this[value];\n        return this;\n\n        // const newTail = this.tail.value;\n        // console.log(newTail);\n        // const newTailNode = this[newTail];\n        // const newPreTail = newTailNode.value;\n        // newPreTail.next = 'tail';\n        // newTailNode.next = null;\n        // delete this.tail;\n        // this.tail = newTailNode;\n        // return this;\n    }\n}\n\n//# sourceURL=webpack://linked-lists/./src/linked-lists.js?");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Node)\n/* harmony export */ });\nclass Node {\n    constructor() {\n        this.value = null;\n        this.next = null;\n    }\n};\n\n//# sourceURL=webpack://linked-lists/./src/node.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;