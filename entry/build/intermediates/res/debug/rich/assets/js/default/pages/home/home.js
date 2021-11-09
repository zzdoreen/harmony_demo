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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../zz_demos/entry/src/main/js/default/pages/home/home.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../zz_demos/entry/src/main/js/default/pages/home/home.hml?entry":
/*!***********************************************************************!*\
  !*** e:/zz_demos/entry/src/main/js/default/pages/home/home.hml?entry ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/loader.js!../../common/component/tabbar/tabbar.hml?name=tab-bar-com */ "./lib/loader.js!../../../../../zz_demos/entry/src/main/js/default/common/component/tabbar/tabbar.hml?name=tab-bar-com")
__webpack_require__(/*! !../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/loader.js!../../common/component/head/head.hml?name=head-com */ "./lib/loader.js!../../../../../zz_demos/entry/src/main/js/default/common/component/head/head.hml?name=head-com")
__webpack_require__(/*! !../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/loader.js!../home-page/home-page.hml?name=home-page */ "./lib/loader.js!../../../../../zz_demos/entry/src/main/js/default/pages/home-page/home-page.hml?name=home-page")
__webpack_require__(/*! !../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/loader.js!../demo/demo.hml?name=one-page */ "./lib/loader.js!../../../../../zz_demos/entry/src/main/js/default/pages/demo/demo.hml?name=one-page")
var $app_template$ = __webpack_require__(/*! !../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/template.js!./home.hml */ "./lib/json.js!./lib/template.js!../../../../../zz_demos/entry/src/main/js/default/pages/home/home.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/style.js!./home.css */ "./lib/json.js!./lib/style.js!../../../../../zz_demos/entry/src/main/js/default/pages/home/home.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/script.js!../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/babel-loader?presets[]=E:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./home.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../zz_demos/entry/src/main/js/default/pages/home/home.js")

$app_define$('@app-component/home', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/home',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../zz_demos/entry/src/main/js/default/common/component/head/head.css":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/style.js!e:/zz_demos/entry/src/main/js/default/common/component/head/head.css ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".head": {
    "width": "100%",
    "height": "50px",
    "position": "fixed",
    "top": "0px",
    "backgroundColor": "#efefef"
  },
  ".head-title": {
    "width": "100%",
    "textAlign": "center",
    "fontSize": "20px",
    "letterSpacing": "10px",
    "fontWeight": "500"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../zz_demos/entry/src/main/js/default/common/component/tabbar/tabbar.css":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/style.js!e:/zz_demos/entry/src/main/js/default/common/component/tabbar/tabbar.css ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../zz_demos/entry/src/main/js/default/pages/demo/demo.css":
/*!******************************************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/style.js!e:/zz_demos/entry/src/main/js/default/pages/demo/demo.css ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container_inner": {
    "paddingTop": "0%",
    "paddingRight": "20px",
    "paddingBottom": "0%",
    "paddingLeft": "20px",
    "width": "100%",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "textAlign": "center",
    "alignItems": "center"
  },
  ".image": {
    "width": "200px",
    "height": "200px",
    "marginBottom": "20px",
    "objectFit": "scale-down"
  },
  ".button": {
    "marginTop": "20px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../zz_demos/entry/src/main/js/default/pages/home-page/home-page.css":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/style.js!e:/zz_demos/entry/src/main/js/default/pages/home-page/home-page.css ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".item-css": {
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderTopStyle": "solid",
    "borderRightStyle": "solid",
    "borderBottomStyle": "solid",
    "borderLeftStyle": "solid",
    "borderTopColor": "#cccccc",
    "borderRightColor": "#cccccc",
    "borderBottomColor": "#cccccc",
    "borderLeftColor": "#cccccc",
    "flexDirection": "row",
    "height": "120px",
    "paddingTop": "5px",
    "paddingRight": "5px",
    "paddingBottom": "5px",
    "paddingLeft": "5px",
    "marginBottom": "5px",
    "borderBottomLeftRadius": "5px",
    "borderBottomRightRadius": "5px",
    "borderTopLeftRadius": "5px",
    "borderTopRightRadius": "5px"
  },
  ".image": {
    "width": "150px",
    "height": "100px",
    "objectFit": "cover"
  },
  ".title": {
    "paddingTop": "5px",
    "paddingLeft": "5px",
    "textOverflow": "ellipsis",
    "fontSize": "15px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../zz_demos/entry/src/main/js/default/pages/home/home.css":
/*!******************************************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/style.js!e:/zz_demos/entry/src/main/js/default/pages/home/home.css ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container_inner": {
    "marginTop": "5px",
    "paddingTop": "0px",
    "paddingRight": "10px",
    "paddingBottom": "0px",
    "paddingLeft": "10px",
    "width": "100%",
    "height": "98%",
    "marginBottom": "40px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../zz_demos/entry/src/main/js/default/common/component/head/head.hml":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/template.js!e:/zz_demos/entry/src/main/js/default/common/component/head/head.hml ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "common/component/head/head:1",
    "className": "head"
  },
  "type": "div",
  "classList": [
    "head"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "common/component/head/head:2",
        "className": "head-title"
      },
      "type": "text",
      "classList": [
        "head-title"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "common/component/head/head:3",
            "value": function () {return this.title}
          },
          "type": "span"
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../zz_demos/entry/src/main/js/default/common/component/tabbar/tabbar.hml":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/template.js!e:/zz_demos/entry/src/main/js/default/common/component/tabbar/tabbar.hml ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "common/component/tabbar/tabbar:1",
    "data": "hello"
  },
  "type": "toolbar",
  "style": {
    "position": "fixed",
    "bottom": "0px"
  },
  "children": [
    {
      "attr": {
        "debugLine": "common/component/tabbar/tabbar:2",
        "icon": function () {return this.image[0]},
        "value": "首页",
        "data": "1"
      },
      "type": "toolbar-item",
      "events": {
        "click": "handleClick"
      }
    },
    {
      "attr": {
        "debugLine": "common/component/tabbar/tabbar:3",
        "icon": function () {return this.image[1]},
        "value": "频道",
        "data": "2"
      },
      "type": "toolbar-item",
      "events": {
        "click": "handleClick"
      }
    },
    {
      "attr": {
        "debugLine": "common/component/tabbar/tabbar:4",
        "icon": function () {return this.image[2]},
        "value": "动态",
        "data": "3"
      },
      "type": "toolbar-item",
      "events": {
        "click": "handleClick"
      }
    },
    {
      "attr": {
        "debugLine": "common/component/tabbar/tabbar:5",
        "icon": function () {return this.image[3]},
        "value": "我的",
        "data": "4"
      },
      "type": "toolbar-item",
      "events": {
        "click": "handleClick"
      }
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../zz_demos/entry/src/main/js/default/pages/demo/demo.hml":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/template.js!e:/zz_demos/entry/src/main/js/default/pages/demo/demo.hml ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/demo/demo:2",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/demo/demo:4",
        "refreshing": function () {return this.refreshFlag},
        "type": "pulldown",
        "lasttime": "true",
        "friction": "64",
        "id": "refreshElement"
      },
      "type": "refresh",
      "id": "refreshElement",
      "style": {
        "borderTopWidth": "1px",
        "borderRightWidth": "1px",
        "borderBottomWidth": "1px",
        "borderLeftWidth": "1px",
        "borderTopStyle": "solid",
        "borderRightStyle": "solid",
        "borderBottomStyle": "solid",
        "borderLeftStyle": "solid",
        "borderTopColor": "#333333",
        "borderRightColor": "#333333",
        "borderBottomColor": "#333333",
        "borderLeftColor": "#333333"
      },
      "events": {
        "pulldown": "handlePullDown",
        "refresh": "handleRefresh"
      },
      "children": [
        {
          "attr": {
            "debugLine": "pages/demo/demo:13",
            "className": "container_inner"
          },
          "type": "div",
          "classList": [
            "container_inner"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/demo/demo:15",
                "show": function () {return ['1','3'].includes(this.compText)}
              },
              "type": "text",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/demo/demo:16",
                    "value": function () {return this.compText}
                  },
                  "type": "span"
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/demo/demo:18",
                "className": "image",
                "src": function () {return this.responseData?this.responseData.imgurl:'common/image.png'}
              },
              "type": "image",
              "classList": [
                "image"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/demo/demo:20"
              },
              "type": "text",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/demo/demo:21",
                    "value": function () {return this.responseData?this.responseData.wordfrom:'--'}
                  },
                  "type": "span",
                  "style": {
                    "fontSize": "25px"
                  }
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/demo/demo:26"
              },
              "type": "text",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/demo/demo:27",
                    "value": function () {return this.responseData?this.responseData.word:'--'}
                  },
                  "type": "span",
                  "style": {
                    "fontSize": "20px"
                  }
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/demo/demo:30",
                "className": "button",
                "type": "capsule",
                "value": "next page"
              },
              "type": "button",
              "classList": [
                "button"
              ],
              "events": {
                "click": "launch"
              }
            },
            {
              "attr": {
                "debugLine": "pages/demo/demo:31",
                "className": "button",
                "type": "capsule",
                "value": "next one"
              },
              "type": "button",
              "classList": [
                "button"
              ],
              "events": {
                "click": "getData"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../zz_demos/entry/src/main/js/default/pages/home-page/home-page.hml":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/template.js!e:/zz_demos/entry/src/main/js/default/pages/home-page/home-page.hml ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/home-page/home-page:1"
  },
  "type": "div",
  "children": [
    {
      "attr": {
        "debugLine": "pages/home-page/home-page:2",
        "scrolleffect": "fade"
      },
      "type": "list",
      "children": [
        {
          "attr": {
            "debugLine": "pages/home-page/home-page:3",
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
                "debugLine": "pages/home-page/home-page:4",
                "src": function () {return this.$item.url},
                "className": "image"
              },
              "type": "image",
              "classList": [
                "image"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/home-page/home-page:6"
              },
              "type": "div",
              "style": {
                "flexDirection": "column"
              },
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/home-page/home-page:7",
                    "className": "title"
                  },
                  "type": "text",
                  "classList": [
                    "title"
                  ],
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/home-page/home-page:8",
                        "value": function () {return this.$item.title}
                      },
                      "type": "span"
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/home-page/home-page:10",
                    "className": "title"
                  },
                  "type": "text",
                  "classList": [
                    "title"
                  ],
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/home-page/home-page:11",
                        "value": function () {return '作者：' + (this.$item.name)}
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
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../zz_demos/entry/src/main/js/default/pages/home/home.hml":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/template.js!e:/zz_demos/entry/src/main/js/default/pages/home/home.hml ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/home/home:9",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/home/home:10",
        "className": "app-bar",
        "title": function () {return this.compTitle}
      },
      "type": "head-com",
      "classList": [
        "app-bar"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/home/home:11"
      },
      "type": "stack",
      "children": [
        {
          "attr": {
            "debugLine": "pages/home/home:12",
            "refreshing": function () {return this.refreshFlag},
            "type": "pulldown",
            "lasttime": "true",
            "friction": "64",
            "id": "refreshElement"
          },
          "type": "refresh",
          "id": "refreshElement",
          "style": {
            "marginTop": "50px"
          },
          "events": {
            "refresh": "handleRefresh"
          },
          "children": [
            {
              "attr": {
                "debugLine": "pages/home/home:20",
                "className": "container_inner",
                "show": function () {return this.compText==='1'}
              },
              "type": "div",
              "classList": [
                "container_inner"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/home/home:21"
                  },
                  "type": "home-page"
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/home/home:23",
                "className": "container_inner",
                "show": function () {return this.compText==='2'}
              },
              "type": "div",
              "classList": [
                "container_inner"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/home/home:24"
                  },
                  "type": "one-page"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/home/home:28"
      },
      "type": "tab-bar-com",
      "events": {
        "get-item": "getTabbarItem"
      }
    }
  ]
}

/***/ }),

/***/ "./lib/loader.js!../../../../../zz_demos/entry/src/main/js/default/common/component/head/head.hml?name=head-com":
/*!********************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/loader.js!e:/zz_demos/entry/src/main/js/default/common/component/head/head.hml?name=head-com ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!../../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/template.js!./head.hml */ "./lib/json.js!./lib/template.js!../../../../../zz_demos/entry/src/main/js/default/common/component/head/head.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!../../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/style.js!./head.css */ "./lib/json.js!./lib/style.js!../../../../../zz_demos/entry/src/main/js/default/common/component/head/head.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/script.js!../../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/babel-loader?presets[]=e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./head.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=e:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=e:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../zz_demos/entry/src/main/js/default/common/component/head/head.js")

$app_define$('@app-component/head-com', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/loader.js!../../../../../zz_demos/entry/src/main/js/default/common/component/tabbar/tabbar.hml?name=tab-bar-com":
/*!***************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/loader.js!e:/zz_demos/entry/src/main/js/default/common/component/tabbar/tabbar.hml?name=tab-bar-com ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!../../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/template.js!./tabbar.hml */ "./lib/json.js!./lib/template.js!../../../../../zz_demos/entry/src/main/js/default/common/component/tabbar/tabbar.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!../../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/style.js!./tabbar.css */ "./lib/json.js!./lib/style.js!../../../../../zz_demos/entry/src/main/js/default/common/component/tabbar/tabbar.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/script.js!../../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/babel-loader?presets[]=e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./tabbar.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=e:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=e:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../zz_demos/entry/src/main/js/default/common/component/tabbar/tabbar.js")

$app_define$('@app-component/tab-bar-com', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/loader.js!../../../../../zz_demos/entry/src/main/js/default/pages/demo/demo.hml?name=one-page":
/*!*********************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/loader.js!e:/zz_demos/entry/src/main/js/default/pages/demo/demo.hml?name=one-page ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/template.js!./demo.hml */ "./lib/json.js!./lib/template.js!../../../../../zz_demos/entry/src/main/js/default/pages/demo/demo.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/style.js!./demo.css */ "./lib/json.js!./lib/style.js!../../../../../zz_demos/entry/src/main/js/default/pages/demo/demo.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/script.js!../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/babel-loader?presets[]=e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./demo.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=e:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=e:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../zz_demos/entry/src/main/js/default/pages/demo/demo.js")

$app_define$('@app-component/one-page', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/loader.js!../../../../../zz_demos/entry/src/main/js/default/pages/home-page/home-page.hml?name=home-page":
/*!********************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/loader.js!e:/zz_demos/entry/src/main/js/default/pages/home-page/home-page.hml?name=home-page ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/template.js!./home-page.hml */ "./lib/json.js!./lib/template.js!../../../../../zz_demos/entry/src/main/js/default/pages/home-page/home-page.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/json.js!../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/style.js!./home-page.css */ "./lib/json.js!./lib/style.js!../../../../../zz_demos/entry/src/main/js/default/pages/home-page/home-page.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/script.js!../../../../../../../../huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/babel-loader?presets[]=e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./home-page.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=e:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=e:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../zz_demos/entry/src/main/js/default/pages/home-page/home-page.js")

$app_define$('@app-component/home-page', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../zz_demos/entry/src/main/js/default/pages/home/home.js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/script.js!e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/babel-loader/lib?presets[]=E:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!e:/zz_demos/entry/src/main/js/default/pages/home/home.js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _default = {
  data: {
    compText: '1',
    compTitle: '首页',
    refreshFlag: false
  },
  getTabbarItem: function getTabbarItem(item) {
    this.compTitle = item.detail.title;
    this.compText = item.detail.idx;
  },
  handleRefresh: function handleRefresh(e) {
    var _this = this;

    this.refreshFlag = e.refreshing;
    new Promise(function (resolve) {
      var _this2 = this;

      (0, _newArrowCheck2["default"])(this, _this);
      setTimeout(function () {
        (0, _newArrowCheck2["default"])(this, _this2);
        this.refreshFlag = false;
      }.bind(this), 1000);
    }.bind(this));
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=e:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=e:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../zz_demos/entry/src/main/js/default/common/component/head/head.js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/script.js!e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/babel-loader/lib?presets[]=e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!e:/zz_demos/entry/src/main/js/default/common/component/head/head.js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: ['title']
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=e:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=e:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../zz_demos/entry/src/main/js/default/common/component/tabbar/tabbar.js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/script.js!e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/babel-loader/lib?presets[]=e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!e:/zz_demos/entry/src/main/js/default/common/component/tabbar/tabbar.js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _default = {
  props: ['barItem'],
  data: {
    image: ['common/Icon/shouye1-copy_active.png', 'common/Icon/pindao.png', 'common/Icon/dongtai.png', 'common/Icon/wodedangxuan.png']
  },
  handleClick: function handleClick(e) {
    this.barItem = e.target.attr.data;

    switch (this.barItem) {
      case '1':
        this.image = ['common/Icon/shouye1-copy_active.png', 'common/Icon/pindao.png', 'common/Icon/dongtai.png', 'common/Icon/wodedangxuan.png'];
        break;

      case '2':
        this.image = ['common/Icon/shouye1-copy.png', 'common/Icon/pindao_active.png', 'common/Icon/dongtai.png', 'common/Icon/wodedangxuan.png'];
        break;

      case '3':
        this.image = ['common/Icon/shouye1-copy.png', 'common/Icon/pindao.png', 'common/Icon/dongtai_active.png', 'common/Icon/wodedangxuan.png'];
        break;

      case '4':
        this.image = ['common/Icon/shouye1-copy.png', 'common/Icon/pindao.png', 'common/Icon/dongtai.png', 'common/Icon/wodedangxuan_active.png'];
        break;

      default:
        break;
    }

    this.$emit('getItem', {
      idx: this.barItem,
      title: e.target.attr.value
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=e:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=e:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../zz_demos/entry/src/main/js/default/pages/demo/demo.js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/script.js!e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/babel-loader/lib?presets[]=e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!e:/zz_demos/entry/src/main/js/default/pages/demo/demo.js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _system = _interopRequireDefault($app_require$("@app-module/system.app"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system3 = _interopRequireDefault(systemplugin.fetch);

var _this = void 0;

var _default = {
  launch: function launch() {
    _system2["default"].push({
      uri: 'pages/index/index'
    });
  },
  getTabbarItem: function getTabbarItem(item) {
    console.log('---- get item' + item.detail);
    this.compText = item.detail;
  },
  data: {
    compText: '',
    refreshFlag: null,
    url: 'https://api.tianapi.com/txapi/one/index?key=7764228bedff0b2310879d47173c4603&rand=1',
    datas: {
      code: 200,
      msg: "success",
      newslist: [{
        oneid: 2899,
        word: "人类不快乐的唯一原因是他不知道如何安静地呆在他的房间里。",
        wordfrom: "",
        imgurl: "http://image.wufazhuce.com/Fpakj8oCGttlfYWopQdp7vFY1aKQ",
        imgauthor: "",
        date: "2020-08-03"
      }]
    },
    responseData: null
  },
  touchstart: function touchstart(touchEvent) {
    console.log('-----' + touchEvent);
  },
  fetch: function fetch() {
    (0, _newArrowCheck2["default"])(this, _this);
  }.bind(void 0),
  handlePullDown: function handlePullDown(e) {
    var _this2 = this;

    var info = _system["default"].getInfo();

    if (e.state === 'start') {
      console.log('in' + this.url);

      _system3["default"].fetch({
        url: this.url,
        success: function success(res) {
          (0, _newArrowCheck2["default"])(this, _this2);
          console.log('success:----' + JSON.stringify(res.data));
        }.bind(this)
      });
    }
  },
  getData: function getData() {
    var _this3 = this;

    console.log('click');

    _system3["default"].fetch({
      url: this.url,
      success: function success(res) {
        (0, _newArrowCheck2["default"])(this, _this3);
        this.responseData = res.data.newslist[0];
        this.refreshFlag = false;
        console.log('------------------------' + JSON.stringify(res));
      }.bind(this),
      fail: function fail(error) {
        (0, _newArrowCheck2["default"])(this, _this3);
        this.refreshFlag = false;
        console.log(error);
      }.bind(this)
    });
  },
  requestData: function requestData() {
    this.getData();
  },
  handleRefresh: function handleRefresh(e) {
    this.refreshFlag = e.refreshing;
    this.requestData();
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=e:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=e:\\huaweiSDK\\js\\2.1.1.20\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../zz_demos/entry/src/main/js/default/pages/home-page/home-page.js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/lib/script.js!e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/babel-loader/lib?presets[]=e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=e:/huaweiSDK/js/2.1.1.20/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!e:/zz_demos/entry/src/main/js/default/pages/home-page/home-page.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: {
    todoList: [{
      url: 'hello',
      title: '一个标题',
      name: 'zzdoreen'
    }, {
      url: '../../common/image.png',
      title: '一个标题'
    }, {
      url: '../../common/image.png',
      title: '一个标题'
    }, {
      url: '../../common/image.png',
      title: '一个标题'
    }, {
      url: '../../common/image.png',
      title: '一个标题'
    }, {
      url: '../../common/image.png',
      title: '一个标题'
    }, {
      url: '../../common/image.png',
      title: '一个标题'
    }, {
      url: '../../common/image.png',
      title: '一个标题'
    }, {
      url: '../../common/image.png',
      title: '一个标题'
    }]
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/newArrowCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/newArrowCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

module.exports = _newArrowCheck;

/***/ })

/******/ });
//# sourceMappingURL=home.js.map