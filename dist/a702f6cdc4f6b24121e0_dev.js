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

/***/ "./src/button-styles.js":
/*!******************************!*\
  !*** ./src/button-styles.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"red\": () => (/* binding */ red),\n/* harmony export */   \"blue\": () => (/* binding */ blue),\n/* harmony export */   \"styleButton\": () => (/* binding */ styleButton)\n/* harmony export */ });\nconst red = `color: red`;\r\nconst blue = `color: blue`;\r\n\r\nconst styleButton = color => `color: ${color}`;\r\n\r\n\n\n//# sourceURL=webpack://webpack_lsns/./src/button-styles.js?");

/***/ }),

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeBtn\": () => (/* binding */ makeBtn)\n/* harmony export */ });\n// return btn and label\r\nconst makeBtn = btnName => {\r\n    const buttonLabel = `Button ${btnName}`;\r\n\r\n    let btn = document.createElement('button');\r\n    btn.innerHTML = buttonLabel;\r\n    return btn;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack_lsns/./src/button.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"top\": () => (/* binding */ top),\n/* harmony export */   \"bottom\": () => (/* binding */ bottom),\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\n/* harmony import */ var _button_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-styles.js */ \"./src/button-styles.js\");\n\r\n\r\nconst top = document.createElement('div');\r\ntop.innerHTML = \"Top footer\";\r\ntop.style = _button_styles_js__WEBPACK_IMPORTED_MODULE_0__.red;\r\nconst bottom = document.createElement('div');\r\nbottom.innerHTML = \"Bottom footer\";\r\nbottom.style = _button_styles_js__WEBPACK_IMPORTED_MODULE_0__.blue;\r\nconst footer = document.createElement('div');\r\nfooter.appendChild(top);\r\nfooter.appendChild(bottom);\r\n\r\n\r\n\r\n// const top = \"top\";\r\n// const bottom = \"bottom\";\r\n\r\n\r\n// export.top = top;\r\n// export.bottom = bottom;\n\n//# sourceURL=webpack://webpack_lsns/./src/footer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ \"./src/nav.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.js */ \"./src/button.js\");\n/* harmony import */ var _button_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-styles.js */ \"./src/button-styles.js\");\n\r\n\r\n\r\n\r\n\r\nconsole.log((0,_nav_js__WEBPACK_IMPORTED_MODULE_0__.default)(), _footer_js__WEBPACK_IMPORTED_MODULE_1__.footer, (0,_button_js__WEBPACK_IMPORTED_MODULE_2__.makeBtn)('BTN one'));\r\nconsole.log((0,_nav_js__WEBPACK_IMPORTED_MODULE_0__.default)(), _footer_js__WEBPACK_IMPORTED_MODULE_1__.footer, (0,_button_styles_js__WEBPACK_IMPORTED_MODULE_3__.styleButton)('cyan'));\r\n\r\nconst btnOne = (0,_button_js__WEBPACK_IMPORTED_MODULE_2__.makeBtn)('BTN one')\r\nbtnOne.style = (0,_button_styles_js__WEBPACK_IMPORTED_MODULE_3__.styleButton)('cyan');\r\ndocument.body.appendChild(btnOne);\r\ndocument.body.appendChild(_footer_js__WEBPACK_IMPORTED_MODULE_1__.footer);\n\n//# sourceURL=webpack://webpack_lsns/./src/index.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => 'nav');\r\n// export default \"nav\";\n\n//# sourceURL=webpack://webpack_lsns/./src/nav.js?");

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