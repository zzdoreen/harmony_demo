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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../zz_demos/entry/src/main/js/default/pages/my-page/my-page.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../zz_demos/entry/src/main/js/default/pages/my-page/my-page.hml?entry":
/*!*****************************************************************************!*\
  !*** E:/zz_demos/entry/src/main/js/default/pages/my-page/my-page.hml?entry ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/template.js!./my-page.hml */ "./lib/json.js!./lib/template.js!../../../../../zz_demos/entry/src/main/js/default/pages/my-page/my-page.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/style.js!./my-page.css */ "./lib/json.js!./lib/style.js!../../../../../zz_demos/entry/src/main/js/default/pages/my-page/my-page.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/script.js!../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/babel-loader?presets[]=E:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./my-page.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../zz_demos/entry/src/main/js/default/pages/my-page/my-page.js")

$app_define$('@app-component/my-page', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/my-page',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../zz_demos/entry/src/main/js/default/pages/my-page/my-page.css":
/*!****************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!E:/zz_demos/entry/src/main/js/default/pages/my-page/my-page.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column"
  },
  ".user_head": {
    "width": "100%",
    "height": "200px",
    "backgroundImage": "common/image/background.jpg",
    "backgroundSize": "100%",
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".avatar": {
    "marginTop": "20px",
    "backgroundColor": "#cccccc",
    "width": "100px",
    "height": "100px",
    "borderBottomLeftRadius": "100px",
    "borderBottomRightRadius": "100px",
    "borderTopLeftRadius": "100px",
    "borderTopRightRadius": "100px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderTopStyle": "solid",
    "borderRightStyle": "solid",
    "borderBottomStyle": "solid",
    "borderLeftStyle": "solid",
    "borderTopColor": "#FFFFFF",
    "borderRightColor": "#FFFFFF",
    "borderBottomColor": "#FFFFFF",
    "borderLeftColor": "#FFFFFF",
    "boxShadowH": "0px",
    "boxShadowV": "0px",
    "boxShadowBlur": "5px",
    "boxShadowColor": "#FFFFFF"
  },
  ".avatar image": {
    "borderBottomLeftRadius": "100px",
    "borderBottomRightRadius": "100px",
    "borderTopLeftRadius": "100px",
    "borderTopRightRadius": "100px"
  },
  ".name": {
    "marginTop": "10px",
    "fontSize": "20px",
    "color": "#FFFFFF"
  },
  ".user_info  text": {
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "fontSize": "20px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../zz_demos/entry/src/main/js/default/pages/my-page/my-page.hml":
/*!*******************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!E:/zz_demos/entry/src/main/js/default/pages/my-page/my-page.hml ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/my-page/my-page:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/my-page/my-page:2",
        "className": "user_head"
      },
      "type": "div",
      "classList": [
        "user_head"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/my-page/my-page:3",
            "className": "avatar"
          },
          "type": "div",
          "classList": [
            "avatar"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/my-page/my-page:4",
                "src": "common/image/avatar.jpg"
              },
              "type": "image",
              "events": {
                "click": "handleLogin"
              }
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/my-page/my-page:7",
            "className": "name"
          },
          "type": "text",
          "classList": [
            "name"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/my-page/my-page:8",
                "value": "name"
              },
              "type": "span"
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/my-page/my-page:11",
        "scrolleffect": "fade",
        "className": "user_info"
      },
      "type": "list",
      "classList": [
        "user_info"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/my-page/my-page:12",
            "className": "item-css"
          },
          "type": "list-item",
          "classList": [
            "item-css"
          ],
          "repeat": function () {return this.todoList},
          "children": [
            {
              "attr": {
                "debugLine": "pages/my-page/my-page:13"
              },
              "type": "text",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/my-page/my-page:14",
                    "value": function () {return (this.$item.name) + ' : ' + (this.$item.value)}
                  },
                  "type": "span"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../zz_demos/entry/src/main/js/default/pages/my-page/my-page.js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=E:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!E:/zz_demos/entry/src/main/js/default/pages/my-page/my-page.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system2 = _interopRequireDefault(systemplugin.geolocation);

var _default = {
  data: {
    todoList: [{
      name: '姓名',
      value: 'doreen'
    }, {
      name: '性别',
      value: '女'
    }]
  },
  handleLogin: function handleLogin() {
    _system2["default"].getLocation({
      success: function success(data) {
        console.log('success get location data. latitude:' + data.latitude);
      },
      fail: function fail(data, code) {
        console.log('fail to get location. code:' + code + ', data:' + data);
      }
    });
  }
};
exports["default"] = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ })

/******/ });