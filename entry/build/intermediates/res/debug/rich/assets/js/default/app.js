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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../zz_demos/entry/src/main/js/default/app.js?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../zz_demos/entry/src/main/js/default/app.js?entry":
/*!**********************************************************!*\
  !*** e:/zz_demos/entry/src/main/js/default/app.js?entry ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_script$ = __webpack_require__(/*! !../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/script.js!../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/babel-loader?presets[]=E:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/manifest-loader.js?path=e:/zz_demos/entry/src/main/js/default/app.js!./app.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/manifest-loader.js?path=e:\\zz_demos\\entry\\src\\main\\js\\default\\app.js!../../../../../zz_demos/entry/src/main/js/default/app.js")

      $app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$) {
      
      $app_script$($app_module$, $app_exports$, $app_require$)
      if ($app_exports$.__esModule && $app_exports$.default) {
        $app_module$.exports = $app_exports$.default
      }
      
      })
      $app_bootstrap$('@app-application/app',undefined,undefined)

/***/ }),

/***/ "./lib/manifest-plugin.js!../../../../../zz_demos/entry/build/intermediates/res/debug/jsManifest/default/manifest.json":
/*!***************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/manifest-plugin.js!e:/zz_demos/entry/build/intermediates/res/debug/jsManifest/default/manifest.json ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: appID, appName, versionName, versionCode, minPlatformVersion, pages, deviceType, window, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"appID\":\"com.example.myapplication\",\"appName\":\"$string:app_name\",\"versionName\":\"1.0.0\",\"versionCode\":1000000,\"minPlatformVersion\":5,\"pages\":[\"pages/home/home\"],\"deviceType\":[\"phone\"],\"window\":{\"designWidth\":720,\"autoDesignWidth\":true}}");

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/manifest-loader.js?path=e:\\zz_demos\\entry\\src\\main\\js\\default\\app.js!../../../../../zz_demos/entry/src/main/js/default/app.js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/script.js!e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/babel-loader/lib?presets[]=E:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/manifest-loader.js?path=e:/zz_demos/entry/src/main/js/default/app.js!e:/zz_demos/entry/src/main/js/default/app.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  onCreate: function onCreate() {
    console.info('AceApplication onCreate');
  },
  onDestroy: function onDestroy() {
    console.info('AceApplication onDestroy');
  }
};
exports["default"] = _default;
;
(exports["default"] || module.exports).manifest = __webpack_require__(/*! !../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/manifest-plugin.js!../../../../build/intermediates/res/debug/jsManifest/default/manifest.json */ "./lib/manifest-plugin.js!../../../../../zz_demos/entry/build/intermediates/res/debug/jsManifest/default/manifest.json");}
/* generated by ace-loader */


/***/ })

/******/ });
//# sourceMappingURL=app.js.map