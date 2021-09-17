/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  \n  body {\n    font-family: cursive;\n    font-weight: 500;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    background-color: #f1f1f1;\n    color: #333;\n  }\n  \n  ul {\n    list-style: none;\n  }\n  \n  main {\n    height: 100%;\n    position: relative;\n  }\n  \n  img {\n    width: 300px;\n    height: 400px;\n  }\n  \n  .header {\n    background-color: #095e61;\n    padding: 1rem 2rem;\n  }\n  \n  .navbar {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 14px;\n    width: 70%;\n    margin: 0 auto;\n  }\n  \n  .logo {\n    align-self: flex-start;\n    border-radius: 50%;\n    border: 2px solid #f1f1f1;\n    padding: 0.5rem;\n    font-family: cursive;\n    margin-bottom: 1rem;\n  }\n  \n  .links {\n    color: #f1f1f1;\n    text-decoration: none;\n  }\n  \n  .logo a:hover {\n    text-decoration: underline;\n  }\n  \n  .nav-list {\n    display: flex;\n  }\n  \n  .like-wrap {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    column-gap: 2rem;\n  }\n  \n  .shows-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    width: 90%;\n    margin: 2rem auto;\n  }\n  \n  footer div {\n    width: 75%;\n    margin: 25px auto;\n  }\n  \n  .shows-list > div {\n    margin: 1rem 0;\n    text-align: center;\n    justify-content: center;\n  }\n  \n  .comment-popup {\n    margin: 1rem 0;\n    padding: 0.5rem 1rem;\n    background-color: #095e61;\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    text-transform: uppercase;\n    font-weight: 600;\n    font-family: cursive;\n    color: #f1f1f1;\n  }\n  \n  footer {\n    background-color: #095e61;\n    margin-top: auto;\n    padding-left: 50px;\n    color: #f1f1f1;\n  }\n  \n  .underlined {\n    text-decoration: underline;\n    font-style: italic;\n  }\n  \n  .items-title {\n    color: white;\n    font-weight: bold;\n  }\n  \n  .container {\n    display: none;\n    background-color: rgb(0, 0, 0, 1);\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n  }\n  \n  .modal-wrapper {\n    background-color: #f1f1f1;\n    height: 80%;\n    width: 80%;\n    margin: 5rem auto 0;\n    padding: 1rem;\n    overflow: auto;\n  }\n  \n  .wrapper {\n    width: 95%;\n    margin: 0 auto;\n  }\n  \n  .img-wrapper {\n    padding: 1rem;\n    text-align: center;\n  }\n  \n  .number {\n    margin: 1rem 0;\n    text-align: center;\n  }\n  \n  .close {\n    font-size: 35px;\n    display: flex;\n    justify-content: flex-end;\n    cursor: pointer;\n    padding-right: 1rem;\n  }\n  \n  .close:hover {\n    color: cadetblue;\n  }\n  \n  .detail-wrap {\n    width: 100%;\n    margin: 2rem auto;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-content: space-between;\n    row-gap: 1rem;\n    column-gap: 1rem;\n  }\n  \n  .list-item {\n    margin-bottom: 3rem;\n  }\n  \n  .comment-para {\n    margin-bottom: 1rem;\n  }\n  \n  .summary {\n    text-align: left;\n    width: 100%;\n  }\n  \n  .form {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    row-gap: 1rem;\n  }\n  \n  .user-name {\n    height: 40px;\n    width: 150px;\n    padding: 0 1rem;\n    border: none;\n  }\n  \n  .user-msg {\n    height: 80px;\n    width: 200px;\n    padding: 1rem;\n    border: none;\n  }\n  \n  .user-name:hover {\n    padding: 0 1.1rem;\n  }\n  \n  .user-msg:hover {\n    padding: 1.5rem;\n  }\n  \n  .user-name:focus,\n  .user-msg:focus {\n    outline: none;\n    border: 1px solid #095e61;\n  }\n  \n  .error-msg {\n    background-color: rgb(173, 10, 10);\n    color: #fff;\n    width: 60%;\n    padding: 0.5rem;\n  }\n  \n  .comment-btn {\n    margin-bottom: 2rem;\n    width: 150px;\n    height: 40px;\n    background-color: #095e61;\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    text-transform: uppercase;\n    font-weight: 600;\n    font-family: cursive;\n    color: #f1f1f1;\n  }\n  \n  .comment-btn:hover,\n  .comment-popup:hover {\n    background-color: cadetblue;\n    cursor: pointer;\n  }\n  \n  .bx:hover {\n    color: cadetblue;\n  }\n  \n  @media (min-width: 728px) {\n    .navbar {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n    }\n  \n    .logo {\n      margin-bottom: 0;\n      align-self: center;\n      justify-self: center;\n    }\n  \n    .shows-list {\n      grid-template-columns: 1fr 1fr;\n    }\n  \n    .detail-wrap {\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n  \n  @media (min-width: 1100px) {\n    .shows-list {\n      grid-template-columns: 1fr 1fr 1fr 1fr;\n    }\n  \n    .navbar {\n      width: 87%;\n    }\n  \n    .wrapper {\n      width: 70%;\n      margin: 0 auto;\n    }\n  \n    .user-name {\n      width: 200px;\n    }\n  \n    .user-msg {\n      width: 300px;\n    }\n  \n    .comment-btn {\n      width: 200px;\n    }\n  \n    footer div {\n      width: 95%;\n    }\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  \n  body {\n    font-family: cursive;\n    font-weight: 500;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    background-color: #f1f1f1;\n    color: #333;\n  }\n  \n  ul {\n    list-style: none;\n  }\n  \n  main {\n    height: 100%;\n    position: relative;\n  }\n  \n  img {\n    width: 300px;\n    height: 400px;\n  }\n  \n  .header {\n    background-color: #095e61;\n    padding: 1rem 2rem;\n  }\n  \n  .navbar {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 14px;\n    width: 70%;\n    margin: 0 auto;\n  }\n  \n  .logo {\n    align-self: flex-start;\n    border-radius: 50%;\n    border: 2px solid #f1f1f1;\n    padding: 0.5rem;\n    font-family: cursive;\n    margin-bottom: 1rem;\n  }\n  \n  .links {\n    color: #f1f1f1;\n    text-decoration: none;\n  }\n  \n  .logo a:hover {\n    text-decoration: underline;\n  }\n  \n  .nav-list {\n    display: flex;\n  }\n  \n  .like-wrap {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    column-gap: 2rem;\n  }\n  \n  .shows-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    width: 90%;\n    margin: 2rem auto;\n  }\n  \n  footer div {\n    width: 75%;\n    margin: 25px auto;\n  }\n  \n  .shows-list > div {\n    margin: 1rem 0;\n    text-align: center;\n    justify-content: center;\n  }\n  \n  .comment-popup {\n    margin: 1rem 0;\n    padding: 0.5rem 1rem;\n    background-color: #095e61;\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    text-transform: uppercase;\n    font-weight: 600;\n    font-family: cursive;\n    color: #f1f1f1;\n  }\n  \n  footer {\n    background-color: #095e61;\n    margin-top: auto;\n    padding-left: 50px;\n    color: #f1f1f1;\n  }\n  \n  .underlined {\n    text-decoration: underline;\n    font-style: italic;\n  }\n  \n  .items-title {\n    color: white;\n    font-weight: bold;\n  }\n  \n  .container {\n    display: none;\n    background-color: rgb(0, 0, 0, 1);\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n  }\n  \n  .modal-wrapper {\n    background-color: #f1f1f1;\n    height: 80%;\n    width: 80%;\n    margin: 5rem auto 0;\n    padding: 1rem;\n    overflow: auto;\n  }\n  \n  .wrapper {\n    width: 95%;\n    margin: 0 auto;\n  }\n  \n  .img-wrapper {\n    padding: 1rem;\n    text-align: center;\n  }\n  \n  .number {\n    margin: 1rem 0;\n    text-align: center;\n  }\n  \n  .close {\n    font-size: 35px;\n    display: flex;\n    justify-content: flex-end;\n    cursor: pointer;\n    padding-right: 1rem;\n  }\n  \n  .close:hover {\n    color: cadetblue;\n  }\n  \n  .detail-wrap {\n    width: 100%;\n    margin: 2rem auto;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-content: space-between;\n    row-gap: 1rem;\n    column-gap: 1rem;\n  }\n  \n  .list-item {\n    margin-bottom: 3rem;\n  }\n  \n  .comment-para {\n    margin-bottom: 1rem;\n  }\n  \n  .summary {\n    text-align: left;\n    width: 100%;\n  }\n  \n  .form {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    row-gap: 1rem;\n  }\n  \n  .user-name {\n    height: 40px;\n    width: 150px;\n    padding: 0 1rem;\n    border: none;\n  }\n  \n  .user-msg {\n    height: 80px;\n    width: 200px;\n    padding: 1rem;\n    border: none;\n  }\n  \n  .user-name:hover {\n    padding: 0 1.1rem;\n  }\n  \n  .user-msg:hover {\n    padding: 1.5rem;\n  }\n  \n  .user-name:focus,\n  .user-msg:focus {\n    outline: none;\n    border: 1px solid #095e61;\n  }\n  \n  .error-msg {\n    background-color: rgb(173, 10, 10);\n    color: #fff;\n    width: 60%;\n    padding: 0.5rem;\n  }\n  \n  .comment-btn {\n    margin-bottom: 2rem;\n    width: 150px;\n    height: 40px;\n    background-color: #095e61;\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    text-transform: uppercase;\n    font-weight: 600;\n    font-family: cursive;\n    color: #f1f1f1;\n  }\n  \n  .comment-btn:hover,\n  .comment-popup:hover {\n    background-color: cadetblue;\n    cursor: pointer;\n  }\n  \n  .bx:hover {\n    color: cadetblue;\n  }\n  \n  @media (min-width: 728px) {\n    .navbar {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n    }\n  \n    .logo {\n      margin-bottom: 0;\n      align-self: center;\n      justify-self: center;\n    }\n  \n    .shows-list {\n      grid-template-columns: 1fr 1fr;\n    }\n  \n    .detail-wrap {\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n  \n  @media (min-width: 1100px) {\n    .shows-list {\n      grid-template-columns: 1fr 1fr 1fr 1fr;\n    }\n  \n    .navbar {\n      width: 87%;\n    }\n  \n    .wrapper {\n      width: 70%;\n      margin: 0 auto;\n    }\n  \n    .user-name {\n      width: 200px;\n    }\n  \n    .user-msg {\n      width: 300px;\n    }\n  \n    .comment-btn {\n      width: 200px;\n    }\n  \n    footer div {\n      width: 95%;\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/buildShows.js":
/*!***********************************!*\
  !*** ./src/modules/buildShows.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getInvolvement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getInvolvement.js */ "./src/modules/getInvolvement.js");
/* harmony import */ var _postInvolvement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postInvolvement.js */ "./src/modules/postInvolvement.js");
/* harmony import */ var _counters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counters.js */ "./src/modules/counters.js");
/* eslint-disable no-await-in-loop */





const buildShows = async (showsList, container) => {
  for (let i = 0; i <= showsList.length - 1; i += 1) {
    const showContainer = document.createElement('div');
    showContainer.id = `movie_${showsList[i].id}`;

    const img = document.createElement('img');
    img.src = showsList[i].image.medium;
    img.style.width = '20rem';
    showContainer.appendChild(img);

    const titleLike = document.createElement('div');
    titleLike.classList.add('like-wrap');
    const title = document.createElement('h3');
    const likeBtn = document.createElement('i');
    const likeDisplay = document.createElement('span');
    likeDisplay.innerHTML = '0 likes';

    likeBtn.classList.add('bx');
    likeBtn.classList.add('bx-heart');
    likeBtn.classList.add('bx-sm');
    likeBtn.style.cursor = 'pointer';
    likeBtn.id = `${showContainer.id}`;
    title.textContent = `${showsList[i].name}`;

    titleLike.style.margin = '5px';
    titleLike.style.textAlign = 'center';

    titleLike.appendChild(likeBtn);
    titleLike.appendChild(likeDisplay);
    showContainer.append(title, titleLike);

    const commentBtn = document.createElement('div');
    commentBtn.innerHTML = '<button class="comment-popup">Comment</button>';
    showContainer.appendChild(commentBtn);
    container.appendChild(showContainer);

    const listOfLikes = await (0,_getInvolvement_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();
    (0,_counters_js__WEBPACK_IMPORTED_MODULE_2__.getLikesCount)(likeBtn, listOfLikes, likeDisplay);

    likeBtn.addEventListener('click', async (e) => {
      await (0,_postInvolvement_js__WEBPACK_IMPORTED_MODULE_1__.postLikes)(e.target.id);
      const getReq = await (0,_getInvolvement_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();

      (0,_counters_js__WEBPACK_IMPORTED_MODULE_2__.getLikesCount)(e.target, getReq, likeDisplay);
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildShows);

/***/ }),

/***/ "./src/modules/counters.js":
/*!*********************************!*\
  !*** ./src/modules/counters.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikesCount": () => (/* binding */ getLikesCount),
/* harmony export */   "showsCount": () => (/* binding */ showsCount),
/* harmony export */   "getCommentCount": () => (/* binding */ getCommentCount)
/* harmony export */ });
/* eslint-disable no-unused-expressions */

const getLikesCount = (target, likesArray, likesContainer) => {
  for (let i = 0; i <= likesArray.length - 1; i += 1) {
    if (likesArray[i].item_id === target.id) {
      likesContainer.innerHTML = `${likesArray[i].likes} likes`;
    }
  }
};

const showsCount = (showsList) => showsList.length;

const getCommentCount = (section, lists) => {
  section.textContent = '';
  lists.length >= 1
    ? (section.textContent = `Comments (${lists.length})`)
    : (section.textContent = 'Comments (0)');
};



/***/ }),

/***/ "./src/modules/getInvolvement.js":
/*!***************************************!*\
  !*** ./src/modules/getInvolvement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "getComments": () => (/* binding */ getComments)
/* harmony export */ });
const getLikes = async () => {
 const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/evHHvuIv3WOjJCJ4yH2P/likes');
  return response.json();
};

const getComments = async (button) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/evHHvuIv3WOjJCJ4yH2P/comments?item_id=${button}`);
  return response.json();
};




/***/ }),

/***/ "./src/modules/getShows.js":
/*!*********************************!*\
  !*** ./src/modules/getShows.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getShows = async () => {
  const response = await fetch(' https://api.tvmaze.com/shows');
  return response.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShows);


/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _counters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counters.js */ "./src/modules/counters.js");
/* harmony import */ var _getInvolvement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getInvolvement.js */ "./src/modules/getInvolvement.js");
/* harmony import */ var _postInvolvement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postInvolvement.js */ "./src/modules/postInvolvement.js");
/* harmony import */ var _renderComments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderComments.js */ "./src/modules/renderComments.js");
/* eslint-disable no-unused-expressions */






const modalStructure = async (buttons, showsList) => {
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', async () => {
      const modalSection = document.createElement('section');
      modalSection.classList.add('container');
      modalSection.style.display = 'flex';
      const modalWrapper = document.createElement('div');
      modalWrapper.classList.add('modal-wrapper');
      const modalDiv = document.createElement('div');
      modalDiv.classList.add('wrapper');

      const close = document.createElement('div');
      close.classList.add('close');
      close.textContent = 'X';
      close.addEventListener('click', () => {
        modalSection.style.display = 'none';
      });
      const imgWrapper = document.createElement('div');
      imgWrapper.classList.add('img-wrapper');
      const img = document.createElement('img');
      img.setAttribute('src', showsList[i].image.medium);
      const itemNumber = document.createElement('h2');
      itemNumber.classList.add('number');
      itemNumber.textContent = `${showsList[i].name}`;
      const detailWrap = document.createElement('div');
      detailWrap.classList.add('detail-wrap');
      const detail1 = document.createElement('h4');
      detail1.textContent = `Language: ${showsList[i].language}`;

      const detail2 = document.createElement('h4');
      detail2.textContent = 'Movie genres: ';
      const { genres } = showsList[i];
      genres.forEach((genre) => {
        detail2.textContent += `${genre}, `;
      });
      const detail3 = document.createElement('h4');
      detail3.innerHTML = `Estimated time: ${showsList[i].runtime}`;

      const detail4 = document.createElement('h4');
      detail4.textContent = `Rating: ${showsList[i].rating.average}`;

      const detail5 = document.createElement('h4');
      detail5.innerHTML = `Summary: ${showsList[i].summary}`;
      detail5.classList.add('summary');

      const detail6 = document.createElement('h4');
      detail6.innerHTML = `<a href="${showsList[i].url}" target="_blank">Watch here</a>`;
      detail6.style.marginTop = '1rem';
      detail6.style.marginBottom = '1rem';
      detail6.classList.add('summary');

      const commentSection = document.createElement('h3');
      commentSection.classList.add('number');
      const addComment = document.createElement('h3');
      addComment.textContent = 'Add a comment';
      addComment.style.marginBottom = '1rem';
      addComment.style.textAlign = 'center';
      const commentForm = document.createElement('form');
      commentForm.classList.add('form');
      const userName = document.createElement('input');
      userName.classList.add('user-name');
      userName.placeholder = 'Your name';
      const userMsg = document.createElement('textarea');
      userMsg.classList.add('user-msg');
      userMsg.placeholder = 'Your insights';
      const commentButton = document.createElement('button');
      commentButton.classList.add('comment-btn');
      commentButton.textContent = 'Comment';
      commentButton.id = `movie_cmt_${showsList[i].id}`;

      const commentDiv = document.createElement('div');
      commentDiv.classList.add('list-item');

      const comments = await (0,_getInvolvement_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(commentButton.id);

      (0,_renderComments_js__WEBPACK_IMPORTED_MODULE_3__["default"])(commentDiv, comments);
      comments.length >= 1
        ? (commentSection.textContent = `Comments (${comments.length})`)
        : (commentSection.textContent = 'Comments (0)');

      commentButton.addEventListener('click', async (e) => {
        if (userName.value === '' || userMsg.value === '') {
          e.preventDefault();
          const errorMsg = document.createElement('p');
          errorMsg.classList.add('error-msg');
          errorMsg.innerText = 'Please add your name and comment';
          commentButton.parentNode.insertBefore(errorMsg, commentButton);
          setTimeout(() => {
            commentForm.removeChild(errorMsg);
          }, 2000);
        } else {
          e.preventDefault();
          await (0,_postInvolvement_js__WEBPACK_IMPORTED_MODULE_2__.postComments)(commentButton.id, userName, userMsg);
          const getCmts = await (0,_getInvolvement_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(commentButton.id);
          (0,_counters_js__WEBPACK_IMPORTED_MODULE_0__.getCommentCount)(commentSection, getCmts);
          (0,_renderComments_js__WEBPACK_IMPORTED_MODULE_3__["default"])(commentDiv, getCmts);
          userName.value = '';
          userMsg.value = '';
        }
      });
      document.body.appendChild(modalSection);
      modalSection.appendChild(modalWrapper);
      modalWrapper.appendChild(modalDiv);
      modalDiv.append(
        close, imgWrapper, itemNumber,
        detailWrap, detail5, detail6, commentSection,
        commentDiv, addComment, commentForm,
      );
      detailWrap.append(detail1, detail2, detail3, detail4);
      imgWrapper.appendChild(img);

      commentForm.append(userName, userMsg, commentButton);
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalStructure);

/***/ }),

/***/ "./src/modules/postInvolvement.js":
/*!****************************************!*\
  !*** ./src/modules/postInvolvement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postLikes": () => (/* binding */ postLikes),
/* harmony export */   "postComments": () => (/* binding */ postComments)
/* harmony export */ });
const postLikes = async (item) => {
  console.log(item)
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/evHHvuIv3WOjJCJ4yH2P/likes', {
    method: 'POST',
    body: JSON.stringify({ item_id: item }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });

  return response.text();
};

const postComments = async (button, userName, comment) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/evHHvuIv3WOjJCJ4yH2P/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: button,
      username: userName.value,
      comment: comment.value,
    }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });

  return response.text();
};



/***/ }),

/***/ "./src/modules/renderComments.js":
/*!***************************************!*\
  !*** ./src/modules/renderComments.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderComments = (commentContainer, list) => {
  if (list.length >= 1) {
    commentContainer.innerHTML = '';
    for (let i = 0; i <= list.length - 1; i += 1) {
      const commentsPara = document.createElement('p');
      commentsPara.classList.add('comment-para');
      commentsPara.innerHTML = `${list[i].creation_date} ${list[i].username}: ${list[i].comment}`;
      commentContainer.appendChild(commentsPara);
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderComments);

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_buildShows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/buildShows.js */ "./src/modules/buildShows.js");
/* harmony import */ var _modules_counters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/counters.js */ "./src/modules/counters.js");
/* harmony import */ var _modules_getShows_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getShows.js */ "./src/modules/getShows.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ "./src/modules/modal.js");
// import './style.css';
// import 'bootstrap';
// import Pictures from './api/getMovies.js';
// import displayPictures from './api/diplayMovies.js';

// const upcoming = new Pictures('upcoming');
// upcoming.getData().then(() => {
//   displayPictures(upcoming.data, 'upcoming');
// });







const itemsTitle = document.querySelector('.items-title');
const allShowsContainer = document.querySelector('.shows-list');

window.addEventListener('load', async () => {
  const shows = await (0,_modules_getShows_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const sixShows = shows.slice(0, 20);

  itemsTitle.innerHTML = `TV SHOWS (${(0,_modules_counters_js__WEBPACK_IMPORTED_MODULE_2__.showsCount)(sixShows)})`;
  await (0,_modules_buildShows_js__WEBPACK_IMPORTED_MODULE_1__["default"])(sixShows, allShowsContainer);

  const commentPopup = [...document.querySelectorAll('.comment-popup')];
  (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__["default"])(commentPopup, sixShows);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFV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QTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFaUI7QUFDNEI7QUFDRTtBQUNOO0FBQ0c7O0FBRWhEO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsZ0VBQVE7QUFDOUI7O0FBRUEsc0NBQXNDLGdFQUFVLFdBQVc7QUFDM0QsUUFBUSxrRUFBVTs7QUFFbEI7QUFDQSxFQUFFLDZEQUFjO0FBQ2hCLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2thbmJhbi1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvYnVpbGRTaG93cy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL3NyYy9tb2R1bGVzL2NvdW50ZXJzLmpzIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZ2V0SW52b2x2ZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9zcmMvbW9kdWxlcy9nZXRTaG93cy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL3NyYy9tb2R1bGVzL21vZGFsLmpzIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvcG9zdEludm9sdmVtZW50LmpzIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICBcXG4gIGJvZHkge1xcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgfVxcbiAgXFxuICB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB9XFxuICBcXG4gIG1haW4ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gIFxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgfVxcbiAgXFxuICAuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5NWU2MTtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgfVxcbiAgXFxuICAubmF2YmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuICBcXG4gIC5sb2dvIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjFmMWYxO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgfVxcbiAgXFxuICAubGlua3Mge1xcbiAgICBjb2xvcjogI2YxZjFmMTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgfVxcbiAgXFxuICAubG9nbyBhOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxuICBcXG4gIC5uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICBcXG4gIC5saWtlLXdyYXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMnJlbTtcXG4gIH1cXG4gIFxcbiAgLnNob3dzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XFxuICB9XFxuICBcXG4gIGZvb3RlciBkaXYge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBtYXJnaW46IDI1cHggYXV0bztcXG4gIH1cXG4gIFxcbiAgLnNob3dzLWxpc3QgPiBkaXYge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLmNvbW1lbnQtcG9wdXAge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTVlNjE7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gICAgY29sb3I6ICNmMWYxZjE7XFxuICB9XFxuICBcXG4gIGZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTVlNjE7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgY29sb3I6ICNmMWYxZjE7XFxuICB9XFxuICBcXG4gIC51bmRlcmxpbmVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIH1cXG4gIFxcbiAgLml0ZW1zLXRpdGxlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIFxcbiAgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAxKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgLm1vZGFsLXdyYXBwZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiA1cmVtIGF1dG8gMDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICB9XFxuICBcXG4gIC53cmFwcGVyIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuICBcXG4gIC5pbWctd3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLm51bWJlciB7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5jbG9zZSB7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgfVxcbiAgXFxuICAuY2xvc2U6aG92ZXIge1xcbiAgICBjb2xvcjogY2FkZXRibHVlO1xcbiAgfVxcbiAgXFxuICAuZGV0YWlsLXdyYXAge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHJvdy1nYXA6IDFyZW07XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICB9XFxuICBcXG4gIC5saXN0LWl0ZW0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgfVxcbiAgXFxuICAuY29tbWVudC1wYXJhIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIH1cXG4gIFxcbiAgLnN1bW1hcnkge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcm93LWdhcDogMXJlbTtcXG4gIH1cXG4gIFxcbiAgLnVzZXItbmFtZSB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLnVzZXItbXNnIHtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLnVzZXItbmFtZTpob3ZlciB7XFxuICAgIHBhZGRpbmc6IDAgMS4xcmVtO1xcbiAgfVxcbiAgXFxuICAudXNlci1tc2c6aG92ZXIge1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICB9XFxuICBcXG4gIC51c2VyLW5hbWU6Zm9jdXMsXFxuICAudXNlci1tc2c6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDk1ZTYxO1xcbiAgfVxcbiAgXFxuICAuZXJyb3ItbXNnIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMTAsIDEwKTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gIH1cXG4gIFxcbiAgLmNvbW1lbnQtYnRuIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTVlNjE7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gICAgY29sb3I6ICNmMWYxZjE7XFxuICB9XFxuICBcXG4gIC5jb21tZW50LWJ0bjpob3ZlcixcXG4gIC5jb21tZW50LXBvcHVwOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcXG4gIC5ieDpob3ZlciB7XFxuICAgIGNvbG9yOiBjYWRldGJsdWU7XFxuICB9XFxuICBcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3MjhweCkge1xcbiAgICAubmF2YmFyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gIFxcbiAgICAubG9nbyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG4gIFxcbiAgICAuc2hvd3MtbGlzdCB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB9XFxuICBcXG4gICAgLmRldGFpbC13cmFwIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCkge1xcbiAgICAuc2hvd3MtbGlzdCB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIH1cXG4gIFxcbiAgICAubmF2YmFyIHtcXG4gICAgICB3aWR0aDogODclO1xcbiAgICB9XFxuICBcXG4gICAgLndyYXBwZXIge1xcbiAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIH1cXG4gIFxcbiAgICAudXNlci1uYW1lIHtcXG4gICAgICB3aWR0aDogMjAwcHg7XFxuICAgIH1cXG4gIFxcbiAgICAudXNlci1tc2cge1xcbiAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgfVxcbiAgXFxuICAgIC5jb21tZW50LWJ0biB7XFxuICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICB9XFxuICBcXG4gICAgZm9vdGVyIGRpdiB7XFxuICAgICAgd2lkdGg6IDk1JTtcXG4gICAgfVxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UseUJBQXlC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QUNuQiw4QkFBOEI7TUFDOUIsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixvQkFBb0I7SUFDdEI7O0lBRUE7TUFDRSw4QkFBOEI7SUFDaEM7O0lBRUE7TUFDRSw4QkFBOEI7SUFDaEM7RUFDRjs7RUFFQTtJQUNFO01BQ0Usc0NBQXNDO0lBQ3hDOztJQUVBO01BQ0UsVUFBVTtJQUNaOztJQUVBO01BQ0UsVUFBVTtNQUNWLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxVQUFVO0lBQ1o7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbiAgXFxuICBib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICBjb2xvcjogIzMzMztcXG4gIH1cXG4gIFxcbiAgdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgfVxcbiAgXFxuICBtYWluIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICBcXG4gIGltZyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gIH1cXG4gIFxcbiAgLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTVlNjE7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIH1cXG4gIFxcbiAgLm5hdmJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcbiAgXFxuICAubG9nbyB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2YxZjFmMTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIH1cXG4gIFxcbiAgLmxpbmtzIHtcXG4gICAgY29sb3I6ICNmMWYxZjE7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLmxvZ28gYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgfVxcbiAgXFxuICAubmF2LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgXFxuICAubGlrZS13cmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDJyZW07XFxuICB9XFxuICBcXG4gIC5zaG93cy1saXN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgfVxcbiAgXFxuICBmb290ZXIgZGl2IHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XFxuICB9XFxuICBcXG4gIC5zaG93cy1saXN0ID4gZGl2IHtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5jb21tZW50LXBvcHVwIHtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1ZTYxO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjZjFmMWYxO1xcbiAgfVxcbiAgXFxuICBmb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1ZTYxO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIGNvbG9yOiAjZjFmMWYxO1xcbiAgfVxcbiAgXFxuICAudW5kZXJsaW5lZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB9XFxuICBcXG4gIC5pdGVtcy10aXRsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBcXG4gIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICBcXG4gIC5tb2RhbC13cmFwcGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogNXJlbSBhdXRvIDA7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgfVxcbiAgXFxuICAud3JhcHBlciB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcbiAgXFxuICAuaW1nLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5udW1iZXIge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuY2xvc2Uge1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIH1cXG4gIFxcbiAgLmNsb3NlOmhvdmVyIHtcXG4gICAgY29sb3I6IGNhZGV0Ymx1ZTtcXG4gIH1cXG4gIFxcbiAgLmRldGFpbC13cmFwIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICByb3ctZ2FwOiAxcmVtO1xcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgfVxcbiAgXFxuICAubGlzdC1pdGVtIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIH1cXG4gIFxcbiAgLmNvbW1lbnQtcGFyYSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB9XFxuICBcXG4gIC5zdW1tYXJ5IHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBcXG4gIC5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHJvdy1nYXA6IDFyZW07XFxuICB9XFxuICBcXG4gIC51c2VyLW5hbWUge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuICBcXG4gIC51c2VyLW1zZyB7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuICBcXG4gIC51c2VyLW5hbWU6aG92ZXIge1xcbiAgICBwYWRkaW5nOiAwIDEuMXJlbTtcXG4gIH1cXG4gIFxcbiAgLnVzZXItbXNnOmhvdmVyIHtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgfVxcbiAgXFxuICAudXNlci1uYW1lOmZvY3VzLFxcbiAgLnVzZXItbXNnOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA5NWU2MTtcXG4gIH1cXG4gIFxcbiAgLmVycm9yLW1zZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDEwLCAxMCk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICB9XFxuICBcXG4gIC5jb21tZW50LWJ0biB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1ZTYxO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjZjFmMWYxO1xcbiAgfVxcbiAgXFxuICAuY29tbWVudC1idG46aG92ZXIsXFxuICAuY29tbWVudC1wb3B1cDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgXFxuICAuYng6aG92ZXIge1xcbiAgICBjb2xvcjogY2FkZXRibHVlO1xcbiAgfVxcbiAgXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzI4cHgpIHtcXG4gICAgLm5hdmJhciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuICBcXG4gICAgLmxvZ28ge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB9XFxuICBcXG4gICAgLnNob3dzLWxpc3Qge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgfVxcbiAgXFxuICAgIC5kZXRhaWwtd3JhcCB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcXG4gICAgLnNob3dzLWxpc3Qge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgICB9XFxuICBcXG4gICAgLm5hdmJhciB7XFxuICAgICAgd2lkdGg6IDg3JTtcXG4gICAgfVxcbiAgXFxuICAgIC53cmFwcGVyIHtcXG4gICAgICB3aWR0aDogNzAlO1xcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB9XFxuICBcXG4gICAgLnVzZXItbmFtZSB7XFxuICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICB9XFxuICBcXG4gICAgLnVzZXItbXNnIHtcXG4gICAgICB3aWR0aDogMzAwcHg7XFxuICAgIH1cXG4gIFxcbiAgICAuY29tbWVudC1idG4ge1xcbiAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgfVxcbiAgXFxuICAgIGZvb3RlciBkaXYge1xcbiAgICAgIHdpZHRoOiA5NSU7XFxuICAgIH1cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tYXdhaXQtaW4tbG9vcCAqL1xuXG5pbXBvcnQgeyBnZXRMaWtlcyB9IGZyb20gJy4vZ2V0SW52b2x2ZW1lbnQuanMnO1xuaW1wb3J0IHsgcG9zdExpa2VzIH0gZnJvbSAnLi9wb3N0SW52b2x2ZW1lbnQuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZXNDb3VudCB9IGZyb20gJy4vY291bnRlcnMuanMnO1xuXG5jb25zdCBidWlsZFNob3dzID0gYXN5bmMgKHNob3dzTGlzdCwgY29udGFpbmVyKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHNob3dzTGlzdC5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaG93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hvd0NvbnRhaW5lci5pZCA9IGBtb3ZpZV8ke3Nob3dzTGlzdFtpXS5pZH1gO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNyYyA9IHNob3dzTGlzdFtpXS5pbWFnZS5tZWRpdW07XG4gICAgaW1nLnN0eWxlLndpZHRoID0gJzIwcmVtJztcbiAgICBzaG93Q29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBjb25zdCB0aXRsZUxpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUxpa2UuY2xhc3NMaXN0LmFkZCgnbGlrZS13cmFwJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGxpa2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY29uc3QgbGlrZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGlrZURpc3BsYXkuaW5uZXJIVE1MID0gJzAgbGlrZXMnO1xuXG4gICAgbGlrZUJ0bi5jbGFzc0xpc3QuYWRkKCdieCcpO1xuICAgIGxpa2VCdG4uY2xhc3NMaXN0LmFkZCgnYngtaGVhcnQnKTtcbiAgICBsaWtlQnRuLmNsYXNzTGlzdC5hZGQoJ2J4LXNtJyk7XG4gICAgbGlrZUJ0bi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgbGlrZUJ0bi5pZCA9IGAke3Nob3dDb250YWluZXIuaWR9YDtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3Nob3dzTGlzdFtpXS5uYW1lfWA7XG5cbiAgICB0aXRsZUxpa2Uuc3R5bGUubWFyZ2luID0gJzVweCc7XG4gICAgdGl0bGVMaWtlLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuXG4gICAgdGl0bGVMaWtlLmFwcGVuZENoaWxkKGxpa2VCdG4pO1xuICAgIHRpdGxlTGlrZS5hcHBlbmRDaGlsZChsaWtlRGlzcGxheSk7XG4gICAgc2hvd0NvbnRhaW5lci5hcHBlbmQodGl0bGUsIHRpdGxlTGlrZSk7XG5cbiAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29tbWVudEJ0bi5pbm5lckhUTUwgPSAnPGJ1dHRvbiBjbGFzcz1cImNvbW1lbnQtcG9wdXBcIj5Db21tZW50PC9idXR0b24+JztcbiAgICBzaG93Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRCdG4pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaG93Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGxpc3RPZkxpa2VzID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgICBnZXRMaWtlc0NvdW50KGxpa2VCdG4sIGxpc3RPZkxpa2VzLCBsaWtlRGlzcGxheSk7XG5cbiAgICBsaWtlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgIGF3YWl0IHBvc3RMaWtlcyhlLnRhcmdldC5pZCk7XG4gICAgICBjb25zdCBnZXRSZXEgPSBhd2FpdCBnZXRMaWtlcygpO1xuXG4gICAgICBnZXRMaWtlc0NvdW50KGUudGFyZ2V0LCBnZXRSZXEsIGxpa2VEaXNwbGF5KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRTaG93czsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cblxuY29uc3QgZ2V0TGlrZXNDb3VudCA9ICh0YXJnZXQsIGxpa2VzQXJyYXksIGxpa2VzQ29udGFpbmVyKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGxpa2VzQXJyYXkubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgaWYgKGxpa2VzQXJyYXlbaV0uaXRlbV9pZCA9PT0gdGFyZ2V0LmlkKSB7XG4gICAgICBsaWtlc0NvbnRhaW5lci5pbm5lckhUTUwgPSBgJHtsaWtlc0FycmF5W2ldLmxpa2VzfSBsaWtlc2A7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzaG93c0NvdW50ID0gKHNob3dzTGlzdCkgPT4gc2hvd3NMaXN0Lmxlbmd0aDtcblxuY29uc3QgZ2V0Q29tbWVudENvdW50ID0gKHNlY3Rpb24sIGxpc3RzKSA9PiB7XG4gIHNlY3Rpb24udGV4dENvbnRlbnQgPSAnJztcbiAgbGlzdHMubGVuZ3RoID49IDFcbiAgICA/IChzZWN0aW9uLnRleHRDb250ZW50ID0gYENvbW1lbnRzICgke2xpc3RzLmxlbmd0aH0pYClcbiAgICA6IChzZWN0aW9uLnRleHRDb250ZW50ID0gJ0NvbW1lbnRzICgwKScpO1xufTtcblxuZXhwb3J0IHsgZ2V0TGlrZXNDb3VudCwgc2hvd3NDb3VudCwgZ2V0Q29tbWVudENvdW50IH07IiwiY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZXZISHZ1SXYzV09qSkNKNHlIMlAvbGlrZXMnKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGJ1dHRvbikgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ldkhIdnVJdjNXT2pKQ0o0eUgyUC9jb21tZW50cz9pdGVtX2lkPSR7YnV0dG9ufWApO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuZXhwb3J0IHsgZ2V0TGlrZXMsIGdldENvbW1lbnRzIH07XG4iLCJjb25zdCBnZXRTaG93cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnIGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFNob3dzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5cbmltcG9ydCB7IGdldENvbW1lbnRDb3VudCB9IGZyb20gJy4vY291bnRlcnMuanMnO1xuaW1wb3J0IHsgZ2V0Q29tbWVudHMgfSBmcm9tICcuL2dldEludm9sdmVtZW50LmpzJztcbmltcG9ydCB7IHBvc3RDb21tZW50cyB9IGZyb20gJy4vcG9zdEludm9sdmVtZW50LmpzJztcbmltcG9ydCByZW5kZXJDb21tZW50cyBmcm9tICcuL3JlbmRlckNvbW1lbnRzLmpzJztcblxuY29uc3QgbW9kYWxTdHJ1Y3R1cmUgPSBhc3luYyAoYnV0dG9ucywgc2hvd3NMaXN0KSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtb2RhbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICBtb2RhbFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgICBtb2RhbFNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGNvbnN0IG1vZGFsV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbW9kYWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdyYXBwZXInKTtcbiAgICAgIGNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBtb2RhbERpdi5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG5cbiAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICAgICAgY2xvc2UudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWxTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGltZ1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGltZ1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW1nLXdyYXBwZXInKTtcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc2hvd3NMaXN0W2ldLmltYWdlLm1lZGl1bSk7XG4gICAgICBjb25zdCBpdGVtTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIGl0ZW1OdW1iZXIuY2xhc3NMaXN0LmFkZCgnbnVtYmVyJyk7XG4gICAgICBpdGVtTnVtYmVyLnRleHRDb250ZW50ID0gYCR7c2hvd3NMaXN0W2ldLm5hbWV9YDtcbiAgICAgIGNvbnN0IGRldGFpbFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRldGFpbFdyYXAuY2xhc3NMaXN0LmFkZCgnZGV0YWlsLXdyYXAnKTtcbiAgICAgIGNvbnN0IGRldGFpbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgZGV0YWlsMS50ZXh0Q29udGVudCA9IGBMYW5ndWFnZTogJHtzaG93c0xpc3RbaV0ubGFuZ3VhZ2V9YDtcblxuICAgICAgY29uc3QgZGV0YWlsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBkZXRhaWwyLnRleHRDb250ZW50ID0gJ01vdmllIGdlbnJlczogJztcbiAgICAgIGNvbnN0IHsgZ2VucmVzIH0gPSBzaG93c0xpc3RbaV07XG4gICAgICBnZW5yZXMuZm9yRWFjaCgoZ2VucmUpID0+IHtcbiAgICAgICAgZGV0YWlsMi50ZXh0Q29udGVudCArPSBgJHtnZW5yZX0sIGA7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRldGFpbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgZGV0YWlsMy5pbm5lckhUTUwgPSBgRXN0aW1hdGVkIHRpbWU6ICR7c2hvd3NMaXN0W2ldLnJ1bnRpbWV9YDtcblxuICAgICAgY29uc3QgZGV0YWlsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBkZXRhaWw0LnRleHRDb250ZW50ID0gYFJhdGluZzogJHtzaG93c0xpc3RbaV0ucmF0aW5nLmF2ZXJhZ2V9YDtcblxuICAgICAgY29uc3QgZGV0YWlsNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBkZXRhaWw1LmlubmVySFRNTCA9IGBTdW1tYXJ5OiAke3Nob3dzTGlzdFtpXS5zdW1tYXJ5fWA7XG4gICAgICBkZXRhaWw1LmNsYXNzTGlzdC5hZGQoJ3N1bW1hcnknKTtcblxuICAgICAgY29uc3QgZGV0YWlsNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBkZXRhaWw2LmlubmVySFRNTCA9IGA8YSBocmVmPVwiJHtzaG93c0xpc3RbaV0udXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPldhdGNoIGhlcmU8L2E+YDtcbiAgICAgIGRldGFpbDYuc3R5bGUubWFyZ2luVG9wID0gJzFyZW0nO1xuICAgICAgZGV0YWlsNi5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMXJlbSc7XG4gICAgICBkZXRhaWw2LmNsYXNzTGlzdC5hZGQoJ3N1bW1hcnknKTtcblxuICAgICAgY29uc3QgY29tbWVudFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgY29tbWVudFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbnVtYmVyJyk7XG4gICAgICBjb25zdCBhZGRDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIGFkZENvbW1lbnQudGV4dENvbnRlbnQgPSAnQWRkIGEgY29tbWVudCc7XG4gICAgICBhZGRDb21tZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxcmVtJztcbiAgICAgIGFkZENvbW1lbnQuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICBjb25zdCBjb21tZW50Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgIGNvbW1lbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcbiAgICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIHVzZXJOYW1lLmNsYXNzTGlzdC5hZGQoJ3VzZXItbmFtZScpO1xuICAgICAgdXNlck5hbWUucGxhY2Vob2xkZXIgPSAnWW91ciBuYW1lJztcbiAgICAgIGNvbnN0IHVzZXJNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgdXNlck1zZy5jbGFzc0xpc3QuYWRkKCd1c2VyLW1zZycpO1xuICAgICAgdXNlck1zZy5wbGFjZWhvbGRlciA9ICdZb3VyIGluc2lnaHRzJztcbiAgICAgIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbW1lbnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tbWVudC1idG4nKTtcbiAgICAgIGNvbW1lbnRCdXR0b24udGV4dENvbnRlbnQgPSAnQ29tbWVudCc7XG4gICAgICBjb21tZW50QnV0dG9uLmlkID0gYG1vdmllX2NtdF8ke3Nob3dzTGlzdFtpXS5pZH1gO1xuXG4gICAgICBjb25zdCBjb21tZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb21tZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScpO1xuXG4gICAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzKGNvbW1lbnRCdXR0b24uaWQpO1xuXG4gICAgICByZW5kZXJDb21tZW50cyhjb21tZW50RGl2LCBjb21tZW50cyk7XG4gICAgICBjb21tZW50cy5sZW5ndGggPj0gMVxuICAgICAgICA/IChjb21tZW50U2VjdGlvbi50ZXh0Q29udGVudCA9IGBDb21tZW50cyAoJHtjb21tZW50cy5sZW5ndGh9KWApXG4gICAgICAgIDogKGNvbW1lbnRTZWN0aW9uLnRleHRDb250ZW50ID0gJ0NvbW1lbnRzICgwKScpO1xuXG4gICAgICBjb21tZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgaWYgKHVzZXJOYW1lLnZhbHVlID09PSAnJyB8fCB1c2VyTXNnLnZhbHVlID09PSAnJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjb25zdCBlcnJvck1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICBlcnJvck1zZy5jbGFzc0xpc3QuYWRkKCdlcnJvci1tc2cnKTtcbiAgICAgICAgICBlcnJvck1zZy5pbm5lclRleHQgPSAnUGxlYXNlIGFkZCB5b3VyIG5hbWUgYW5kIGNvbW1lbnQnO1xuICAgICAgICAgIGNvbW1lbnRCdXR0b24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZXJyb3JNc2csIGNvbW1lbnRCdXR0b24pO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29tbWVudEZvcm0ucmVtb3ZlQ2hpbGQoZXJyb3JNc2cpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBhd2FpdCBwb3N0Q29tbWVudHMoY29tbWVudEJ1dHRvbi5pZCwgdXNlck5hbWUsIHVzZXJNc2cpO1xuICAgICAgICAgIGNvbnN0IGdldENtdHMgPSBhd2FpdCBnZXRDb21tZW50cyhjb21tZW50QnV0dG9uLmlkKTtcbiAgICAgICAgICBnZXRDb21tZW50Q291bnQoY29tbWVudFNlY3Rpb24sIGdldENtdHMpO1xuICAgICAgICAgIHJlbmRlckNvbW1lbnRzKGNvbW1lbnREaXYsIGdldENtdHMpO1xuICAgICAgICAgIHVzZXJOYW1lLnZhbHVlID0gJyc7XG4gICAgICAgICAgdXNlck1zZy52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxTZWN0aW9uKTtcbiAgICAgIG1vZGFsU2VjdGlvbi5hcHBlbmRDaGlsZChtb2RhbFdyYXBwZXIpO1xuICAgICAgbW9kYWxXcmFwcGVyLmFwcGVuZENoaWxkKG1vZGFsRGl2KTtcbiAgICAgIG1vZGFsRGl2LmFwcGVuZChcbiAgICAgICAgY2xvc2UsIGltZ1dyYXBwZXIsIGl0ZW1OdW1iZXIsXG4gICAgICAgIGRldGFpbFdyYXAsIGRldGFpbDUsIGRldGFpbDYsIGNvbW1lbnRTZWN0aW9uLFxuICAgICAgICBjb21tZW50RGl2LCBhZGRDb21tZW50LCBjb21tZW50Rm9ybSxcbiAgICAgICk7XG4gICAgICBkZXRhaWxXcmFwLmFwcGVuZChkZXRhaWwxLCBkZXRhaWwyLCBkZXRhaWwzLCBkZXRhaWw0KTtcbiAgICAgIGltZ1dyYXBwZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgICAgY29tbWVudEZvcm0uYXBwZW5kKHVzZXJOYW1lLCB1c2VyTXNnLCBjb21tZW50QnV0dG9uKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kYWxTdHJ1Y3R1cmU7IiwiY29uc3QgcG9zdExpa2VzID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgY29uc29sZS5sb2coaXRlbSlcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZXZISHZ1SXYzV09qSkNKNHlIMlAvbGlrZXMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpdGVtIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgQ2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbn07XG5cbmNvbnN0IHBvc3RDb21tZW50cyA9IGFzeW5jIChidXR0b24sIHVzZXJOYW1lLCBjb21tZW50KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2V2SEh2dUl2M1dPakpDSjR5SDJQL2NvbW1lbnRzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGJ1dHRvbixcbiAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZS52YWx1ZSxcbiAgICAgIGNvbW1lbnQ6IGNvbW1lbnQudmFsdWUsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBDaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xufTtcblxuZXhwb3J0IHsgcG9zdExpa2VzLCBwb3N0Q29tbWVudHMgfTsiLCJjb25zdCByZW5kZXJDb21tZW50cyA9IChjb21tZW50Q29udGFpbmVyLCBsaXN0KSA9PiB7XG4gIGlmIChsaXN0Lmxlbmd0aCA+PSAxKSB7XG4gICAgY29tbWVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsaXN0Lmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29tbWVudHNQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY29tbWVudHNQYXJhLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtcGFyYScpO1xuICAgICAgY29tbWVudHNQYXJhLmlubmVySFRNTCA9IGAke2xpc3RbaV0uY3JlYXRpb25fZGF0ZX0gJHtsaXN0W2ldLnVzZXJuYW1lfTogJHtsaXN0W2ldLmNvbW1lbnR9YDtcbiAgICAgIGNvbW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudHNQYXJhKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNvbW1lbnRzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vIGltcG9ydCAnYm9vdHN0cmFwJztcbi8vIGltcG9ydCBQaWN0dXJlcyBmcm9tICcuL2FwaS9nZXRNb3ZpZXMuanMnO1xuLy8gaW1wb3J0IGRpc3BsYXlQaWN0dXJlcyBmcm9tICcuL2FwaS9kaXBsYXlNb3ZpZXMuanMnO1xuXG4vLyBjb25zdCB1cGNvbWluZyA9IG5ldyBQaWN0dXJlcygndXBjb21pbmcnKTtcbi8vIHVwY29taW5nLmdldERhdGEoKS50aGVuKCgpID0+IHtcbi8vICAgZGlzcGxheVBpY3R1cmVzKHVwY29taW5nLmRhdGEsICd1cGNvbWluZycpO1xuLy8gfSk7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGJ1aWxkU2hvd3MgZnJvbSAnLi9tb2R1bGVzL2J1aWxkU2hvd3MuanMnO1xuaW1wb3J0IHsgc2hvd3NDb3VudCB9IGZyb20gJy4vbW9kdWxlcy9jb3VudGVycy5qcyc7XG5pbXBvcnQgZ2V0U2hvd3MgZnJvbSAnLi9tb2R1bGVzL2dldFNob3dzLmpzJztcbmltcG9ydCBtb2RhbFN0cnVjdHVyZSBmcm9tICcuL21vZHVsZXMvbW9kYWwuanMnO1xuXG5jb25zdCBpdGVtc1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zLXRpdGxlJyk7XG5jb25zdCBhbGxTaG93c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93cy1saXN0Jyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBzaG93cyA9IGF3YWl0IGdldFNob3dzKCk7XG4gIGNvbnN0IHNpeFNob3dzID0gc2hvd3Muc2xpY2UoMCwgMjApO1xuXG4gIGl0ZW1zVGl0bGUuaW5uZXJIVE1MID0gYFRWIFNIT1dTICgke3Nob3dzQ291bnQoc2l4U2hvd3MpfSlgO1xuICBhd2FpdCBidWlsZFNob3dzKHNpeFNob3dzLCBhbGxTaG93c0NvbnRhaW5lcik7XG5cbiAgY29uc3QgY29tbWVudFBvcHVwID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LXBvcHVwJyldO1xuICBtb2RhbFN0cnVjdHVyZShjb21tZW50UG9wdXAsIHNpeFNob3dzKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==