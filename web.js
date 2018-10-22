(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apps/app.js":
/*!*************************!*\
  !*** ./src/apps/app.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_loadBlockFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/loadBlockFunction */ \"./src/utils/loadBlockFunction.js\");\n/* harmony import */ var _lib_ErrorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/ErrorHandler */ \"./src/lib/ErrorHandler.js\");\n/* harmony import */ var _helpers_output__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/output */ \"./src/helpers/output.js\");\n/* harmony import */ var _startDoingBlockWork__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startDoingBlockWork */ \"./src/startDoingBlockWork/index.js\");\n\n\n\n\nObject(_helpers_output__WEBPACK_IMPORTED_MODULE_2__[\"setAppName\"])('app');\nvar block;\nObject(_utils_loadBlockFunction__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(function (data) {\n  block = data;\n  output('block loaded successfully');\n}).catch(function (e) {\n  return _lib_ErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadBlock(e);\n}).finally(function () {\n  return Object(_startDoingBlockWork__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(block);\n});\n\n//# sourceURL=webpack:///./src/apps/app.js?");

/***/ }),

/***/ "./src/helpers/output.js":
/*!*******************************!*\
  !*** ./src/helpers/output.js ***!
  \*******************************/
/*! exports provided: setAppName, output */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setAppName\", function() { return setAppName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"output\", function() { return output; });\nvar setAppName = function setAppName(name) {\n  return global.appName = name;\n};\nvar output = function output(text) {\n  return console.log(\"[\".concat(global.appName, \"] > \").concat(text));\n};\nglobal.output = output;\nglobal.appName = 'no-name';\n\n//# sourceURL=webpack:///./src/helpers/output.js?");

/***/ }),

/***/ "./src/lib/ErrorHandler.js":
/*!*********************************!*\
  !*** ./src/lib/ErrorHandler.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar errorHandler = function errorHandler(msg) {\n  return new Error(\"[\".concat(global.appName, \" > Error: \").concat(msg));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  verifyNewPerson: errorHandler('Error: verify new person'),\n  verifyNewArticle: errorHandler('Error: verify new article'),\n  verifyNewFriend: errorHandler('Error: verify new friend'),\n  saveBlock: function saveBlock(e) {\n    return errorHandler('Error: save block: ' + e);\n  },\n  loadBlock: function loadBlock(e) {\n    return errorHandler('Error: load block: ' + e);\n  }\n});\n\n//# sourceURL=webpack:///./src/lib/ErrorHandler.js?");

/***/ }),

/***/ "./src/lib/constants.js":
/*!******************************!*\
  !*** ./src/lib/constants.js ***!
  \******************************/
/*! exports provided: INITIAL_POINTS, BLOCK_FILE_NAME, BLOCK_FILE_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INITIAL_POINTS\", function() { return INITIAL_POINTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BLOCK_FILE_NAME\", function() { return BLOCK_FILE_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BLOCK_FILE_PATH\", function() { return BLOCK_FILE_PATH; });\nvar INITIAL_POINTS = 10;\nvar BLOCK_FILE_NAME = 'block.json';\nvar BLOCK_FILE_PATH = './';\n\n//# sourceURL=webpack:///./src/lib/constants.js?");

/***/ }),

/***/ "./src/startDoingBlockWork/index.js":
/*!******************************************!*\
  !*** ./src/startDoingBlockWork/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_verifiers_verifyNewBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifiers/verifyNewBlock */ \"./src/utils/verifiers/verifyNewBlock.js\");\n/* harmony import */ var _helpers_output__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/output */ \"./src/helpers/output.js\");\n\n\n\nvar initWork = function initWork(block) {\n  return Promise.all([Object(_utils_verifiers_verifyNewBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(block)]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (block) {\n  Object(_helpers_output__WEBPACK_IMPORTED_MODULE_1__[\"output\"])(\"I'm doing some block work!\");\n  initWork(block).then(function () {\n    Object(_helpers_output__WEBPACK_IMPORTED_MODULE_1__[\"output\"])('init completed');\n  });\n});\n\n//# sourceURL=webpack:///./src/startDoingBlockWork/index.js?");

/***/ }),

/***/ "./src/utils/loadBlockFunction.js":
/*!****************************************!*\
  !*** ./src/utils/loadBlockFunction.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/constants */ \"./src/lib/constants.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar readFile =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(path) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(path));\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function readFile(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar parseJson = function parseJson(data) {\n  return JSON.parse(data);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_asyncToGenerator(\n/*#__PURE__*/\nregeneratorRuntime.mark(function _callee2() {\n  var path,\n      _args2 = arguments;\n  return regeneratorRuntime.wrap(function _callee2$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          path = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : _lib_constants__WEBPACK_IMPORTED_MODULE_1__[\"BLOCK_FILE_PATH\"] + _lib_constants__WEBPACK_IMPORTED_MODULE_1__[\"BLOCK_FILE_NAME\"];\n          return _context2.abrupt(\"return\", readFile(path).then(function (data) {\n            return parseJson(data);\n          }));\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _callee2, this);\n})));\n\n//# sourceURL=webpack:///./src/utils/loadBlockFunction.js?");

/***/ }),

/***/ "./src/utils/verifiers/verifyNewBlock.js":
/*!***********************************************!*\
  !*** ./src/utils/verifiers/verifyNewBlock.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return true;\n});\n\n//# sourceURL=webpack:///./src/utils/verifiers/verifyNewBlock.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi @babel/polyfill ./src/apps/app.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/apps/app.js */\"./src/apps/app.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/apps/app.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ })

/******/ });
},{}]},{},[1]);
