/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MyLibrary"] = factory();
	else
		root["MyLibrary"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Calculator.ts":
/*!***************************!*\
  !*** ./src/Calculator.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n//Refoktoriserar \"calculator att använda map för operations istället för if else (första försöket var med switch, didnt like it).\"\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Calculator {\n    // varför är detta här? De ser ut att vara temporära under tiden metoden anropas och behöver därför ingen storing.\n    //ska jag implementera möjligheten att utföra flera operationer efter varandra?..\n    /*  this.valOne = 0;\n      this.valTwo = 0;\n  } */\n    constructor() {\n        this.lastResult = 0; //init\n        this.operations = {\n            \"+\": (x, y) => x + y,\n            \"-\": (x, y) => x - y,\n            \"*\": (x, y) => x * y,\n            \"/\": (x, y) => x / y,\n            \"^\": (x, y) => Math.pow(x, y),\n            \"%\": (x, y) => x % y,\n            \"circle\": (x, _) => this.calculateAreaOfCircle(x),\n            \"sumLoop\": (x, _) => this.sumUpTo(x)\n        };\n    }\n    calculate(x, y, operation) {\n        const operationFunc = this.operations[operation];\n        if (operationFunc) {\n            this.lastResult = operationFunc(x, y);\n        }\n        else {\n            this.lastResult = 0;\n        }\n        return this.lastResult;\n    }\n    calculateAreaOfCircle(radius) {\n        return Math.PI * Math.pow(radius, 2);\n    }\n    sumUpTo(n) {\n        return Array.from({ length: n + 1 }, (_, i) => i).reduce((acc, val) => acc + val, 0);\n    }\n    getLastResult() {\n        return this.lastResult;\n    }\n}\nexports[\"default\"] = Calculator;\n\n\n//# sourceURL=webpack://MyLibrary/./src/Calculator.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Calculator_1 = __importDefault(__webpack_require__(/*! ./Calculator */ \"./src/Calculator.ts\"));\nconst calculator = new Calculator_1.default();\nfunction performCalculation() {\n    const valOne = parseFloat(document.getElementById('valOne').value);\n    const valTwo = parseFloat(document.getElementById('valTwo').value);\n    const operation = document.getElementById('operation').value;\n    const result = calculator.calculate(valOne, isNaN(valTwo) ? 0 : valTwo, operation);\n    const resultDiv = document.getElementById('result');\n    if (resultDiv) {\n        resultDiv.textContent = `Result: ${result}`;\n    }\n}\nwindow.performCalculation = performCalculation;\n\n\n//# sourceURL=webpack://MyLibrary/./src/index.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});