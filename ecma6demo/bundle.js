/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/***/ function(module, exports) {

	/**
	 * Created by HUQ on 9/5/15.
	 */
	
	"use strict";
	
	var reporter = regeneratorRuntime.mark(function reporter() {
	  return regeneratorRuntime.wrap(function reporter$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        context$1$0.next = 2;
	        return 12;
	
	      case 2:
	        context$1$0.next = 4;
	        return 24;
	
	      case 4:
	        context$1$0.next = 6;
	        return 42;
	
	      case 6:
	        context$1$0.next = 8;
	        return 84;
	
	      case 8:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, reporter, this);
	});
	
	console.log(reporter());

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map