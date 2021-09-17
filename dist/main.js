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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: cursive;\n  font-weight: 500;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: #f1f1f1;\n  color: #333;\n}\n\nul {\n  list-style: none;\n}\n\nmain {\n  height: 100%;\n  position: relative;\n}\n\nimg {\n  width: 300px;\n  height: 400px;\n}\n\n.header {\n  background-color: #095e61;\n  padding: 1rem 2rem;\n}\n\n.navbar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 14px;\n  width: 70%;\n  margin: 0 auto;\n}\n\n.logo {\n  align-self: flex-start;\n  border-radius: 50%;\n  border: 2px solid #f1f1f1;\n  padding: 0.5rem;\n  font-family: cursive;\n  margin-bottom: 1rem;\n}\n\n.links {\n  color: #f1f1f1;\n  text-decoration: none;\n}\n\n.logo a:hover {\n  text-decoration: underline;\n}\n\n.nav-list {\n  display: flex;\n}\n\n.like-wrap {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  column-gap: 2rem;\n}\n\n.shows-list {\n  display: grid;\n  grid-template-columns: 1fr;\n  width: 90%;\n  margin: 2rem auto;\n}\n\nfooter div {\n  width: 75%;\n  margin: 25px auto;\n}\n\n.shows-list > div {\n  margin: 1rem 0;\n  text-align: center;\n  justify-content: center;\n}\n\n.comment-popup {\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  background-color: #095e61;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-family: cursive;\n  color: #f1f1f1;\n}\n\nfooter {\n  background-color: #095e61;\n  margin-top: auto;\n  padding-left: 50px;\n  color: #f1f1f1;\n}\n\n.underlined {\n  text-decoration: underline;\n  font-style: italic;\n}\n\n.items-title {\n  color: white;\n  font-weight: bold;\n}\n\n.container {\n  display: none;\n  background-color: rgb(0, 0, 0, 1);\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n}\n\n.modal-wrapper {\n  background-color: #f1f1f1;\n  height: 80%;\n  width: 80%;\n  margin: 5rem auto 0;\n  padding: 1rem;\n  overflow: auto;\n}\n\n.wrapper {\n  width: 95%;\n  margin: 0 auto;\n}\n\n.img-wrapper {\n  padding: 1rem;\n  text-align: center;\n}\n\n.number {\n  margin: 1rem 0;\n  text-align: center;\n}\n\n.close {\n  font-size: 35px;\n  display: flex;\n  justify-content: flex-end;\n  cursor: pointer;\n  padding-right: 1rem;\n}\n\n.close:hover {\n  color: cadetblue;\n}\n\n.detail-wrap {\n  width: 100%;\n  margin: 2rem auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: space-between;\n  row-gap: 1rem;\n  column-gap: 1rem;\n}\n\n.list-item {\n  margin-bottom: 3rem;\n}\n\n.comment-para {\n  margin-bottom: 1rem;\n}\n\n.summary {\n  text-align: left;\n  width: 100%;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  row-gap: 1rem;\n}\n\n.user-name {\n  height: 40px;\n  width: 150px;\n  padding: 0 1rem;\n  border: none;\n}\n\n.user-msg {\n  height: 80px;\n  width: 200px;\n  padding: 1rem;\n  border: none;\n}\n\n.user-name:hover {\n  padding: 0 1.1rem;\n}\n\n.user-msg:hover {\n  padding: 1.5rem;\n}\n\n.user-name:focus,\n.user-msg:focus {\n  outline: none;\n  border: 1px solid #095e61;\n}\n\n.error-msg {\n  background-color: rgb(173, 10, 10);\n  color: #fff;\n  width: 60%;\n  padding: 0.5rem;\n}\n\n.comment-btn {\n  margin-bottom: 2rem;\n  width: 150px;\n  height: 40px;\n  background-color: #095e61;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-family: cursive;\n  color: #f1f1f1;\n}\n\n.comment-btn:hover,\n.comment-popup:hover {\n  background-color: cadetblue;\n  cursor: pointer;\n}\n\n.bx:hover {\n  color: cadetblue;\n}\n\n@media (min-width: 728px) {\n  .navbar {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .logo {\n    margin-bottom: 0;\n    align-self: center;\n    justify-self: center;\n  }\n\n  .shows-list {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .detail-wrap {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (min-width: 1100px) {\n  .shows-list {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n  }\n\n  .navbar {\n    width: 87%;\n  }\n\n  .wrapper {\n    width: 70%;\n    margin: 0 auto;\n  }\n\n  .user-name {\n    width: 200px;\n  }\n\n  .user-msg {\n    width: 300px;\n  }\n\n  .comment-btn {\n    width: 200px;\n  }\n\n  footer div {\n    width: 95%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: cursive;\n  font-weight: 500;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: #f1f1f1;\n  color: #333;\n}\n\nul {\n  list-style: none;\n}\n\nmain {\n  height: 100%;\n  position: relative;\n}\n\nimg {\n  width: 300px;\n  height: 400px;\n}\n\n.header {\n  background-color: #095e61;\n  padding: 1rem 2rem;\n}\n\n.navbar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 14px;\n  width: 70%;\n  margin: 0 auto;\n}\n\n.logo {\n  align-self: flex-start;\n  border-radius: 50%;\n  border: 2px solid #f1f1f1;\n  padding: 0.5rem;\n  font-family: cursive;\n  margin-bottom: 1rem;\n}\n\n.links {\n  color: #f1f1f1;\n  text-decoration: none;\n}\n\n.logo a:hover {\n  text-decoration: underline;\n}\n\n.nav-list {\n  display: flex;\n}\n\n.like-wrap {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  column-gap: 2rem;\n}\n\n.shows-list {\n  display: grid;\n  grid-template-columns: 1fr;\n  width: 90%;\n  margin: 2rem auto;\n}\n\nfooter div {\n  width: 75%;\n  margin: 25px auto;\n}\n\n.shows-list > div {\n  margin: 1rem 0;\n  text-align: center;\n  justify-content: center;\n}\n\n.comment-popup {\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  background-color: #095e61;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-family: cursive;\n  color: #f1f1f1;\n}\n\nfooter {\n  background-color: #095e61;\n  margin-top: auto;\n  padding-left: 50px;\n  color: #f1f1f1;\n}\n\n.underlined {\n  text-decoration: underline;\n  font-style: italic;\n}\n\n.items-title {\n  color: white;\n  font-weight: bold;\n}\n\n.container {\n  display: none;\n  background-color: rgb(0, 0, 0, 1);\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n}\n\n.modal-wrapper {\n  background-color: #f1f1f1;\n  height: 80%;\n  width: 80%;\n  margin: 5rem auto 0;\n  padding: 1rem;\n  overflow: auto;\n}\n\n.wrapper {\n  width: 95%;\n  margin: 0 auto;\n}\n\n.img-wrapper {\n  padding: 1rem;\n  text-align: center;\n}\n\n.number {\n  margin: 1rem 0;\n  text-align: center;\n}\n\n.close {\n  font-size: 35px;\n  display: flex;\n  justify-content: flex-end;\n  cursor: pointer;\n  padding-right: 1rem;\n}\n\n.close:hover {\n  color: cadetblue;\n}\n\n.detail-wrap {\n  width: 100%;\n  margin: 2rem auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: space-between;\n  row-gap: 1rem;\n  column-gap: 1rem;\n}\n\n.list-item {\n  margin-bottom: 3rem;\n}\n\n.comment-para {\n  margin-bottom: 1rem;\n}\n\n.summary {\n  text-align: left;\n  width: 100%;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  row-gap: 1rem;\n}\n\n.user-name {\n  height: 40px;\n  width: 150px;\n  padding: 0 1rem;\n  border: none;\n}\n\n.user-msg {\n  height: 80px;\n  width: 200px;\n  padding: 1rem;\n  border: none;\n}\n\n.user-name:hover {\n  padding: 0 1.1rem;\n}\n\n.user-msg:hover {\n  padding: 1.5rem;\n}\n\n.user-name:focus,\n.user-msg:focus {\n  outline: none;\n  border: 1px solid #095e61;\n}\n\n.error-msg {\n  background-color: rgb(173, 10, 10);\n  color: #fff;\n  width: 60%;\n  padding: 0.5rem;\n}\n\n.comment-btn {\n  margin-bottom: 2rem;\n  width: 150px;\n  height: 40px;\n  background-color: #095e61;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-family: cursive;\n  color: #f1f1f1;\n}\n\n.comment-btn:hover,\n.comment-popup:hover {\n  background-color: cadetblue;\n  cursor: pointer;\n}\n\n.bx:hover {\n  color: cadetblue;\n}\n\n@media (min-width: 728px) {\n  .navbar {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .logo {\n    margin-bottom: 0;\n    align-self: center;\n    justify-self: center;\n  }\n\n  .shows-list {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .detail-wrap {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (min-width: 1100px) {\n  .shows-list {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n  }\n\n  .navbar {\n    width: 87%;\n  }\n\n  .wrapper {\n    width: 70%;\n    margin: 0 auto;\n  }\n\n  .user-name {\n    width: 200px;\n  }\n\n  .user-msg {\n    width: 300px;\n  }\n\n  .comment-btn {\n    width: 200px;\n  }\n\n  footer div {\n    width: 95%;\n  }\n}\n"],"sourceRoot":""}]);
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

  itemsTitle.innerHTML = `MOVIES (${(0,_modules_counters_js__WEBPACK_IMPORTED_MODULE_2__.showsCount)(sixShows)})`;
  await (0,_modules_buildShows_js__WEBPACK_IMPORTED_MODULE_1__["default"])(sixShows, allShowsContainer);

  const commentPopup = [...document.querySelectorAll('.comment-popup')];
  (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__["default"])(commentPopup, sixShows);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FB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O1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFaUI7QUFDNEI7QUFDRTtBQUNOO0FBQ0c7O0FBRWhEO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsZ0VBQVE7QUFDOUI7O0FBRUEsb0NBQW9DLGdFQUFVLFdBQVc7QUFDekQsUUFBUSxrRUFBVTs7QUFFbEI7QUFDQSxFQUFFLDZEQUFjO0FBQ2hCLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2thbmJhbi1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvYnVpbGRTaG93cy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL3NyYy9tb2R1bGVzL2NvdW50ZXJzLmpzIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZ2V0SW52b2x2ZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9zcmMvbW9kdWxlcy9nZXRTaG93cy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL3NyYy9tb2R1bGVzL21vZGFsLmpzIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvcG9zdEludm9sdmVtZW50LmpzIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubWFpbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTVlNjE7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmxvZ28ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMWYxZjE7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5saW5rcyB7XFxuICBjb2xvcjogI2YxZjFmMTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmxvZ28gYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5saWtlLXdyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2x1bW4tZ2FwOiAycmVtO1xcbn1cXG5cXG4uc2hvd3MtbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxufVxcblxcbmZvb3RlciBkaXYge1xcbiAgd2lkdGg6IDc1JTtcXG4gIG1hcmdpbjogMjVweCBhdXRvO1xcbn1cXG5cXG4uc2hvd3MtbGlzdCA+IGRpdiB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudC1wb3B1cCB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NWU2MTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1ZTYxO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIGNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG4udW5kZXJsaW5lZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLml0ZW1zLXRpdGxlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tb2RhbC13cmFwcGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDVyZW0gYXV0byAwO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5pbWctd3JhcHBlciB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubnVtYmVyIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIge1xcbiAgY29sb3I6IGNhZGV0Ymx1ZTtcXG59XFxuXFxuLmRldGFpbC13cmFwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICByb3ctZ2FwOiAxcmVtO1xcbiAgY29sdW1uLWdhcDogMXJlbTtcXG59XFxuXFxuLmxpc3QtaXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uY29tbWVudC1wYXJhIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5zdW1tYXJ5IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHJvdy1nYXA6IDFyZW07XFxufVxcblxcbi51c2VyLW5hbWUge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udXNlci1tc2cge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnVzZXItbmFtZTpob3ZlciB7XFxuICBwYWRkaW5nOiAwIDEuMXJlbTtcXG59XFxuXFxuLnVzZXItbXNnOmhvdmVyIHtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuLnVzZXItbmFtZTpmb2N1cyxcXG4udXNlci1tc2c6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOTVlNjE7XFxufVxcblxcbi5lcnJvci1tc2cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMTAsIDEwKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDYwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmNvbW1lbnQtYnRuIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1ZTYxO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICBjb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuLmNvbW1lbnQtYnRuOmhvdmVyLFxcbi5jb21tZW50LXBvcHVwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ4OmhvdmVyIHtcXG4gIGNvbG9yOiBjYWRldGJsdWU7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MjhweCkge1xcbiAgLm5hdmJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5sb2dvIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5zaG93cy1saXN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcblxcbiAgLmRldGFpbC13cmFwIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7XFxuICAuc2hvd3MtbGlzdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgfVxcblxcbiAgLm5hdmJhciB7XFxuICAgIHdpZHRoOiA4NyU7XFxuICB9XFxuXFxuICAud3JhcHBlciB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcblxcbiAgLnVzZXItbmFtZSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gIH1cXG5cXG4gIC51c2VyLW1zZyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG5cXG4gIC5jb21tZW50LWJ0biB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gIH1cXG5cXG4gIGZvb3RlciBkaXYge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxv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eUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NWU2MTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2YxZjFmMTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmxpbmtzIHtcXG4gIGNvbG9yOiAjZjFmMWYxO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubG9nbyBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxpa2Utd3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbHVtbi1nYXA6IDJyZW07XFxufVxcblxcbi5zaG93cy1saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDJyZW0gYXV0bztcXG59XFxuXFxuZm9vdGVyIGRpdiB7XFxuICB3aWR0aDogNzUlO1xcbiAgbWFyZ2luOiAyNXB4IGF1dG87XFxufVxcblxcbi5zaG93cy1saXN0ID4gZGl2IHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50LXBvcHVwIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1ZTYxO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICBjb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTVlNjE7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbi51bmRlcmxpbmVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uaXRlbXMtdGl0bGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAxKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1vZGFsLXdyYXBwZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogNXJlbSBhdXRvIDA7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmltZy13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5udW1iZXIge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZSB7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi5jbG9zZTpob3ZlciB7XFxuICBjb2xvcjogY2FkZXRibHVlO1xcbn1cXG5cXG4uZGV0YWlsLXdyYXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDJyZW0gYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHJvdy1nYXA6IDFyZW07XFxuICBjb2x1bW4tZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubGlzdC1pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbi5jb21tZW50LXBhcmEge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnN1bW1hcnkge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcm93LWdhcDogMXJlbTtcXG59XFxuXFxuLnVzZXItbmFtZSB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi51c2VyLW1zZyB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udXNlci1uYW1lOmhvdmVyIHtcXG4gIHBhZGRpbmc6IDAgMS4xcmVtO1xcbn1cXG5cXG4udXNlci1tc2c6aG92ZXIge1xcbiAgcGFkZGluZzogMS41cmVtO1xcbn1cXG5cXG4udXNlci1uYW1lOmZvY3VzLFxcbi51c2VyLW1zZzpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzA5NWU2MTtcXG59XFxuXFxuLmVycm9yLW1zZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAxMCwgMTApO1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aWR0aDogNjAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTVlNjE7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gIGNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG4uY29tbWVudC1idG46aG92ZXIsXFxuLmNvbW1lbnQtcG9wdXA6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYng6aG92ZXIge1xcbiAgY29sb3I6IGNhZGV0Ymx1ZTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcyOHB4KSB7XFxuICAubmF2YmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmxvZ28ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgLnNob3dzLWxpc3Qge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxuXFxuICAuZGV0YWlsLXdyYXAge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcXG4gIC5zaG93cy1saXN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICB9XFxuXFxuICAubmF2YmFyIHtcXG4gICAgd2lkdGg6IDg3JTtcXG4gIH1cXG5cXG4gIC53cmFwcGVyIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuXFxuICAudXNlci1uYW1lIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgfVxcblxcbiAgLnVzZXItbXNnIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtYnRuIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgfVxcblxcbiAgZm9vdGVyIGRpdiB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1hd2FpdC1pbi1sb29wICovXG5cbmltcG9ydCB7IGdldExpa2VzIH0gZnJvbSAnLi9nZXRJbnZvbHZlbWVudC5qcyc7XG5pbXBvcnQgeyBwb3N0TGlrZXMgfSBmcm9tICcuL3Bvc3RJbnZvbHZlbWVudC5qcyc7XG5pbXBvcnQgeyBnZXRMaWtlc0NvdW50IH0gZnJvbSAnLi9jb3VudGVycy5qcyc7XG5cbmNvbnN0IGJ1aWxkU2hvd3MgPSBhc3luYyAoc2hvd3NMaXN0LCBjb250YWluZXIpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc2hvd3NMaXN0Lmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNob3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaG93Q29udGFpbmVyLmlkID0gYG1vdmllXyR7c2hvd3NMaXN0W2ldLmlkfWA7XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gc2hvd3NMaXN0W2ldLmltYWdlLm1lZGl1bTtcbiAgICBpbWcuc3R5bGUud2lkdGggPSAnMjByZW0nO1xuICAgIHNob3dDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIGNvbnN0IHRpdGxlTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlTGlrZS5jbGFzc0xpc3QuYWRkKCdsaWtlLXdyYXAnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgbGlrZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBjb25zdCBsaWtlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBsaWtlRGlzcGxheS5pbm5lckhUTUwgPSAnMCBsaWtlcyc7XG5cbiAgICBsaWtlQnRuLmNsYXNzTGlzdC5hZGQoJ2J4Jyk7XG4gICAgbGlrZUJ0bi5jbGFzc0xpc3QuYWRkKCdieC1oZWFydCcpO1xuICAgIGxpa2VCdG4uY2xhc3NMaXN0LmFkZCgnYngtc20nKTtcbiAgICBsaWtlQnRuLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICBsaWtlQnRuLmlkID0gYCR7c2hvd0NvbnRhaW5lci5pZH1gO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7c2hvd3NMaXN0W2ldLm5hbWV9YDtcblxuICAgIHRpdGxlTGlrZS5zdHlsZS5tYXJnaW4gPSAnNXB4JztcbiAgICB0aXRsZUxpa2Uuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG5cbiAgICB0aXRsZUxpa2UuYXBwZW5kQ2hpbGQobGlrZUJ0bik7XG4gICAgdGl0bGVMaWtlLmFwcGVuZENoaWxkKGxpa2VEaXNwbGF5KTtcbiAgICBzaG93Q29udGFpbmVyLmFwcGVuZCh0aXRsZSwgdGl0bGVMaWtlKTtcblxuICAgIGNvbnN0IGNvbW1lbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21tZW50QnRuLmlubmVySFRNTCA9ICc8YnV0dG9uIGNsYXNzPVwiY29tbWVudC1wb3B1cFwiPkNvbW1lbnQ8L2J1dHRvbj4nO1xuICAgIHNob3dDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudEJ0bik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNob3dDb250YWluZXIpO1xuXG4gICAgY29uc3QgbGlzdE9mTGlrZXMgPSBhd2FpdCBnZXRMaWtlcygpO1xuICAgIGdldExpa2VzQ291bnQobGlrZUJ0biwgbGlzdE9mTGlrZXMsIGxpa2VEaXNwbGF5KTtcblxuICAgIGxpa2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgYXdhaXQgcG9zdExpa2VzKGUudGFyZ2V0LmlkKTtcbiAgICAgIGNvbnN0IGdldFJlcSA9IGF3YWl0IGdldExpa2VzKCk7XG5cbiAgICAgIGdldExpa2VzQ291bnQoZS50YXJnZXQsIGdldFJlcSwgbGlrZURpc3BsYXkpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWlsZFNob3dzOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuXG5jb25zdCBnZXRMaWtlc0NvdW50ID0gKHRhcmdldCwgbGlrZXNBcnJheSwgbGlrZXNDb250YWluZXIpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGlrZXNBcnJheS5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICBpZiAobGlrZXNBcnJheVtpXS5pdGVtX2lkID09PSB0YXJnZXQuaWQpIHtcbiAgICAgIGxpa2VzQ29udGFpbmVyLmlubmVySFRNTCA9IGAke2xpa2VzQXJyYXlbaV0ubGlrZXN9IGxpa2VzYDtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHNob3dzQ291bnQgPSAoc2hvd3NMaXN0KSA9PiBzaG93c0xpc3QubGVuZ3RoO1xuXG5jb25zdCBnZXRDb21tZW50Q291bnQgPSAoc2VjdGlvbiwgbGlzdHMpID0+IHtcbiAgc2VjdGlvbi50ZXh0Q29udGVudCA9ICcnO1xuICBsaXN0cy5sZW5ndGggPj0gMVxuICAgID8gKHNlY3Rpb24udGV4dENvbnRlbnQgPSBgQ29tbWVudHMgKCR7bGlzdHMubGVuZ3RofSlgKVxuICAgIDogKHNlY3Rpb24udGV4dENvbnRlbnQgPSAnQ29tbWVudHMgKDApJyk7XG59O1xuXG5leHBvcnQgeyBnZXRMaWtlc0NvdW50LCBzaG93c0NvdW50LCBnZXRDb21tZW50Q291bnQgfTsiLCJjb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZXZISHZ1SXYzV09qSkNKNHlIMlAvbGlrZXMnKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGJ1dHRvbikgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ldkhIdnVJdjNXT2pKQ0o0eUgyUC9jb21tZW50cz9pdGVtX2lkPSR7YnV0dG9ufWApO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuZXhwb3J0IHsgZ2V0TGlrZXMsIGdldENvbW1lbnRzIH07XG4iLCJjb25zdCBnZXRTaG93cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnIGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFNob3dzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5cbmltcG9ydCB7IGdldENvbW1lbnRDb3VudCB9IGZyb20gJy4vY291bnRlcnMuanMnO1xuaW1wb3J0IHsgZ2V0Q29tbWVudHMgfSBmcm9tICcuL2dldEludm9sdmVtZW50LmpzJztcbmltcG9ydCB7IHBvc3RDb21tZW50cyB9IGZyb20gJy4vcG9zdEludm9sdmVtZW50LmpzJztcbmltcG9ydCByZW5kZXJDb21tZW50cyBmcm9tICcuL3JlbmRlckNvbW1lbnRzLmpzJztcblxuY29uc3QgbW9kYWxTdHJ1Y3R1cmUgPSBhc3luYyAoYnV0dG9ucywgc2hvd3NMaXN0KSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtb2RhbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICBtb2RhbFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgICBtb2RhbFNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGNvbnN0IG1vZGFsV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbW9kYWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdyYXBwZXInKTtcbiAgICAgIGNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBtb2RhbERpdi5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG5cbiAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICAgICAgY2xvc2UudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWxTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGltZ1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGltZ1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW1nLXdyYXBwZXInKTtcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc2hvd3NMaXN0W2ldLmltYWdlLm1lZGl1bSk7XG4gICAgICBjb25zdCBpdGVtTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIGl0ZW1OdW1iZXIuY2xhc3NMaXN0LmFkZCgnbnVtYmVyJyk7XG4gICAgICBpdGVtTnVtYmVyLnRleHRDb250ZW50ID0gYCR7c2hvd3NMaXN0W2ldLm5hbWV9YDtcbiAgICAgIGNvbnN0IGRldGFpbFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRldGFpbFdyYXAuY2xhc3NMaXN0LmFkZCgnZGV0YWlsLXdyYXAnKTtcbiAgICAgIGNvbnN0IGRldGFpbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgZGV0YWlsMS50ZXh0Q29udGVudCA9IGBMYW5ndWFnZTogJHtzaG93c0xpc3RbaV0ubGFuZ3VhZ2V9YDtcblxuICAgICAgY29uc3QgZGV0YWlsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBkZXRhaWwyLnRleHRDb250ZW50ID0gJ01vdmllIGdlbnJlczogJztcbiAgICAgIGNvbnN0IHsgZ2VucmVzIH0gPSBzaG93c0xpc3RbaV07XG4gICAgICBnZW5yZXMuZm9yRWFjaCgoZ2VucmUpID0+IHtcbiAgICAgICAgZGV0YWlsMi50ZXh0Q29udGVudCArPSBgJHtnZW5yZX0sIGA7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRldGFpbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgZGV0YWlsMy5pbm5lckhUTUwgPSBgRXN0aW1hdGVkIHRpbWU6ICR7c2hvd3NMaXN0W2ldLnJ1bnRpbWV9YDtcblxuICAgICAgY29uc3QgZGV0YWlsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBkZXRhaWw0LnRleHRDb250ZW50ID0gYFJhdGluZzogJHtzaG93c0xpc3RbaV0ucmF0aW5nLmF2ZXJhZ2V9YDtcblxuICAgICAgY29uc3QgZGV0YWlsNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBkZXRhaWw1LmlubmVySFRNTCA9IGBTdW1tYXJ5OiAke3Nob3dzTGlzdFtpXS5zdW1tYXJ5fWA7XG4gICAgICBkZXRhaWw1LmNsYXNzTGlzdC5hZGQoJ3N1bW1hcnknKTtcblxuICAgICAgY29uc3QgZGV0YWlsNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBkZXRhaWw2LmlubmVySFRNTCA9IGA8YSBocmVmPVwiJHtzaG93c0xpc3RbaV0udXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPldhdGNoIGhlcmU8L2E+YDtcbiAgICAgIGRldGFpbDYuc3R5bGUubWFyZ2luVG9wID0gJzFyZW0nO1xuICAgICAgZGV0YWlsNi5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMXJlbSc7XG4gICAgICBkZXRhaWw2LmNsYXNzTGlzdC5hZGQoJ3N1bW1hcnknKTtcblxuICAgICAgY29uc3QgY29tbWVudFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgY29tbWVudFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbnVtYmVyJyk7XG4gICAgICBjb25zdCBhZGRDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIGFkZENvbW1lbnQudGV4dENvbnRlbnQgPSAnQWRkIGEgY29tbWVudCc7XG4gICAgICBhZGRDb21tZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxcmVtJztcbiAgICAgIGFkZENvbW1lbnQuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICBjb25zdCBjb21tZW50Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgIGNvbW1lbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcbiAgICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIHVzZXJOYW1lLmNsYXNzTGlzdC5hZGQoJ3VzZXItbmFtZScpO1xuICAgICAgdXNlck5hbWUucGxhY2Vob2xkZXIgPSAnWW91ciBuYW1lJztcbiAgICAgIGNvbnN0IHVzZXJNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgdXNlck1zZy5jbGFzc0xpc3QuYWRkKCd1c2VyLW1zZycpO1xuICAgICAgdXNlck1zZy5wbGFjZWhvbGRlciA9ICdZb3VyIGluc2lnaHRzJztcbiAgICAgIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbW1lbnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tbWVudC1idG4nKTtcbiAgICAgIGNvbW1lbnRCdXR0b24udGV4dENvbnRlbnQgPSAnQ29tbWVudCc7XG4gICAgICBjb21tZW50QnV0dG9uLmlkID0gYG1vdmllX2NtdF8ke3Nob3dzTGlzdFtpXS5pZH1gO1xuXG4gICAgICBjb25zdCBjb21tZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb21tZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScpO1xuXG4gICAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzKGNvbW1lbnRCdXR0b24uaWQpO1xuXG4gICAgICByZW5kZXJDb21tZW50cyhjb21tZW50RGl2LCBjb21tZW50cyk7XG4gICAgICBjb21tZW50cy5sZW5ndGggPj0gMVxuICAgICAgICA/IChjb21tZW50U2VjdGlvbi50ZXh0Q29udGVudCA9IGBDb21tZW50cyAoJHtjb21tZW50cy5sZW5ndGh9KWApXG4gICAgICAgIDogKGNvbW1lbnRTZWN0aW9uLnRleHRDb250ZW50ID0gJ0NvbW1lbnRzICgwKScpO1xuXG4gICAgICBjb21tZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgaWYgKHVzZXJOYW1lLnZhbHVlID09PSAnJyB8fCB1c2VyTXNnLnZhbHVlID09PSAnJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjb25zdCBlcnJvck1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICBlcnJvck1zZy5jbGFzc0xpc3QuYWRkKCdlcnJvci1tc2cnKTtcbiAgICAgICAgICBlcnJvck1zZy5pbm5lclRleHQgPSAnUGxlYXNlIGFkZCB5b3VyIG5hbWUgYW5kIGNvbW1lbnQnO1xuICAgICAgICAgIGNvbW1lbnRCdXR0b24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZXJyb3JNc2csIGNvbW1lbnRCdXR0b24pO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29tbWVudEZvcm0ucmVtb3ZlQ2hpbGQoZXJyb3JNc2cpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBhd2FpdCBwb3N0Q29tbWVudHMoY29tbWVudEJ1dHRvbi5pZCwgdXNlck5hbWUsIHVzZXJNc2cpO1xuICAgICAgICAgIGNvbnN0IGdldENtdHMgPSBhd2FpdCBnZXRDb21tZW50cyhjb21tZW50QnV0dG9uLmlkKTtcbiAgICAgICAgICBnZXRDb21tZW50Q291bnQoY29tbWVudFNlY3Rpb24sIGdldENtdHMpO1xuICAgICAgICAgIHJlbmRlckNvbW1lbnRzKGNvbW1lbnREaXYsIGdldENtdHMpO1xuICAgICAgICAgIHVzZXJOYW1lLnZhbHVlID0gJyc7XG4gICAgICAgICAgdXNlck1zZy52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxTZWN0aW9uKTtcbiAgICAgIG1vZGFsU2VjdGlvbi5hcHBlbmRDaGlsZChtb2RhbFdyYXBwZXIpO1xuICAgICAgbW9kYWxXcmFwcGVyLmFwcGVuZENoaWxkKG1vZGFsRGl2KTtcbiAgICAgIG1vZGFsRGl2LmFwcGVuZChcbiAgICAgICAgY2xvc2UsIGltZ1dyYXBwZXIsIGl0ZW1OdW1iZXIsXG4gICAgICAgIGRldGFpbFdyYXAsIGRldGFpbDUsIGRldGFpbDYsIGNvbW1lbnRTZWN0aW9uLFxuICAgICAgICBjb21tZW50RGl2LCBhZGRDb21tZW50LCBjb21tZW50Rm9ybSxcbiAgICAgICk7XG4gICAgICBkZXRhaWxXcmFwLmFwcGVuZChkZXRhaWwxLCBkZXRhaWwyLCBkZXRhaWwzLCBkZXRhaWw0KTtcbiAgICAgIGltZ1dyYXBwZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgICAgY29tbWVudEZvcm0uYXBwZW5kKHVzZXJOYW1lLCB1c2VyTXNnLCBjb21tZW50QnV0dG9uKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kYWxTdHJ1Y3R1cmU7IiwiY29uc3QgcG9zdExpa2VzID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZXZISHZ1SXYzV09qSkNKNHlIMlAvbGlrZXMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpdGVtIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgQ2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbn07XG5cbmNvbnN0IHBvc3RDb21tZW50cyA9IGFzeW5jIChidXR0b24sIHVzZXJOYW1lLCBjb21tZW50KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2V2SEh2dUl2M1dPakpDSjR5SDJQL2NvbW1lbnRzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGJ1dHRvbixcbiAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZS52YWx1ZSxcbiAgICAgIGNvbW1lbnQ6IGNvbW1lbnQudmFsdWUsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBDaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xufTtcblxuZXhwb3J0IHsgcG9zdExpa2VzLCBwb3N0Q29tbWVudHMgfTsiLCJjb25zdCByZW5kZXJDb21tZW50cyA9IChjb21tZW50Q29udGFpbmVyLCBsaXN0KSA9PiB7XG4gIGlmIChsaXN0Lmxlbmd0aCA+PSAxKSB7XG4gICAgY29tbWVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsaXN0Lmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29tbWVudHNQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY29tbWVudHNQYXJhLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtcGFyYScpO1xuICAgICAgY29tbWVudHNQYXJhLmlubmVySFRNTCA9IGAke2xpc3RbaV0uY3JlYXRpb25fZGF0ZX0gJHtsaXN0W2ldLnVzZXJuYW1lfTogJHtsaXN0W2ldLmNvbW1lbnR9YDtcbiAgICAgIGNvbW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudHNQYXJhKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNvbW1lbnRzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vIGltcG9ydCAnYm9vdHN0cmFwJztcbi8vIGltcG9ydCBQaWN0dXJlcyBmcm9tICcuL2FwaS9nZXRNb3ZpZXMuanMnO1xuLy8gaW1wb3J0IGRpc3BsYXlQaWN0dXJlcyBmcm9tICcuL2FwaS9kaXBsYXlNb3ZpZXMuanMnO1xuXG4vLyBjb25zdCB1cGNvbWluZyA9IG5ldyBQaWN0dXJlcygndXBjb21pbmcnKTtcbi8vIHVwY29taW5nLmdldERhdGEoKS50aGVuKCgpID0+IHtcbi8vICAgZGlzcGxheVBpY3R1cmVzKHVwY29taW5nLmRhdGEsICd1cGNvbWluZycpO1xuLy8gfSk7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGJ1aWxkU2hvd3MgZnJvbSAnLi9tb2R1bGVzL2J1aWxkU2hvd3MuanMnO1xuaW1wb3J0IHsgc2hvd3NDb3VudCB9IGZyb20gJy4vbW9kdWxlcy9jb3VudGVycy5qcyc7XG5pbXBvcnQgZ2V0U2hvd3MgZnJvbSAnLi9tb2R1bGVzL2dldFNob3dzLmpzJztcbmltcG9ydCBtb2RhbFN0cnVjdHVyZSBmcm9tICcuL21vZHVsZXMvbW9kYWwuanMnO1xuXG5jb25zdCBpdGVtc1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zLXRpdGxlJyk7XG5jb25zdCBhbGxTaG93c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93cy1saXN0Jyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBzaG93cyA9IGF3YWl0IGdldFNob3dzKCk7XG4gIGNvbnN0IHNpeFNob3dzID0gc2hvd3Muc2xpY2UoMCwgMjApO1xuXG4gIGl0ZW1zVGl0bGUuaW5uZXJIVE1MID0gYE1PVklFUyAoJHtzaG93c0NvdW50KHNpeFNob3dzKX0pYDtcbiAgYXdhaXQgYnVpbGRTaG93cyhzaXhTaG93cywgYWxsU2hvd3NDb250YWluZXIpO1xuXG4gIGNvbnN0IGNvbW1lbnRQb3B1cCA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1wb3B1cCcpXTtcbiAgbW9kYWxTdHJ1Y3R1cmUoY29tbWVudFBvcHVwLCBzaXhTaG93cyk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=