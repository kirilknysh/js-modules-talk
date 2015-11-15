/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _cyclicCyclicModuleA = __webpack_require__(1);

	setTimeout(function () {
	  (0, _cyclicCyclicModuleA.mainFunctionA)();
	}, 2000);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.mainFunctionA = mainFunctionA;
	exports.functionA = functionA;

	var _cyclicModuleB = __webpack_require__(2);

	console.log('initial execution module A');
	var bValue = (0, _cyclicModuleB.functionB)();

	function mainFunctionA() {
		console.log('main function A');
		bValue = (0, _cyclicModuleB.functionB)();
	}

	function functionA() {
		console.log('function A');
		console.log('type of bValue: ' + typeof bValue);
		if (Math.random() > 0.5) {
			(0, _cyclicModuleB.functionB)();
		}
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.functionB = functionB;

	var _cyclicModuleA = __webpack_require__(1);

	function functionB() {
		console.log('function B');
		(0, _cyclicModuleA.functionA)();

		return 1;
	}

/***/ }
/******/ ]);