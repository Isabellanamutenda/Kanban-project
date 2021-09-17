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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FB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O1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQzRCO0FBQ0U7QUFDTjtBQUNHOztBQUVoRDtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGdFQUFRO0FBQzlCOztBQUVBLG9DQUFvQyxnRUFBVSxXQUFXO0FBQ3pELFFBQVEsa0VBQVU7O0FBRWxCO0FBQ0EsRUFBRSw2REFBYztBQUNoQixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL3NyYy9tb2R1bGVzL2J1aWxkU2hvd3MuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9zcmMvbW9kdWxlcy9jb3VudGVycy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL3NyYy9tb2R1bGVzL2dldEludm9sdmVtZW50LmpzIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZ2V0U2hvd3MuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9zcmMvbW9kdWxlcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL3NyYy9tb2R1bGVzL3Bvc3RJbnZvbHZlbWVudC5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC8uL3NyYy9tb2R1bGVzL3JlbmRlckNvbW1lbnRzLmpzIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rYW5iYW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2thbmJhbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va2FuYmFuLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1ZTYxO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5sb2dvIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZjFmMWYxO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgY29sb3I6ICNmMWYxZjE7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5sb2dvIGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5uYXYtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubGlrZS13cmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sdW1uLWdhcDogMnJlbTtcXG59XFxuXFxuLnNob3dzLWxpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbn1cXG5cXG5mb290ZXIgZGl2IHtcXG4gIHdpZHRoOiA3NSU7XFxuICBtYXJnaW46IDI1cHggYXV0bztcXG59XFxuXFxuLnNob3dzLWxpc3QgPiBkaXYge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1lbnQtcG9wdXAge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTVlNjE7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gIGNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NWU2MTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICBjb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuLnVuZGVybGluZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5pdGVtcy10aXRsZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDEpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubW9kYWwtd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiA1cmVtIGF1dG8gMDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uaW1nLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm51bWJlciB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gIGNvbG9yOiBjYWRldGJsdWU7XFxufVxcblxcbi5kZXRhaWwtd3JhcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcm93LWdhcDogMXJlbTtcXG4gIGNvbHVtbi1nYXA6IDFyZW07XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLmNvbW1lbnQtcGFyYSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uc3VtbWFyeSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICByb3ctZ2FwOiAxcmVtO1xcbn1cXG5cXG4udXNlci1uYW1lIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnVzZXItbXNnIHtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi51c2VyLW5hbWU6aG92ZXIge1xcbiAgcGFkZGluZzogMCAxLjFyZW07XFxufVxcblxcbi51c2VyLW1zZzpob3ZlciB7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbi51c2VyLW5hbWU6Zm9jdXMsXFxuLnVzZXItbXNnOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDk1ZTYxO1xcbn1cXG5cXG4uZXJyb3ItbXNnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDEwLCAxMCk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiA2MCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5jb21tZW50LWJ0biB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NWU2MTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbi5jb21tZW50LWJ0bjpob3ZlcixcXG4uY29tbWVudC1wb3B1cDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ieDpob3ZlciB7XFxuICBjb2xvcjogY2FkZXRibHVlO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzI4cHgpIHtcXG4gIC5uYXZiYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubG9nbyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuc2hvd3MtbGlzdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG5cXG4gIC5kZXRhaWwtd3JhcCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCkge1xcbiAgLnNob3dzLWxpc3Qge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIH1cXG5cXG4gIC5uYXZiYXIge1xcbiAgICB3aWR0aDogODclO1xcbiAgfVxcblxcbiAgLndyYXBwZXIge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG5cXG4gIC51c2VyLW5hbWUge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICB9XFxuXFxuICAudXNlci1tc2cge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxuXFxuICAuY29tbWVudC1idG4ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICB9XFxuXFxuICBmb290ZXIgZGl2IHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RC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QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLDhCQUE4QjtFQUNoQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubWFpbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTVlNjE7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmxvZ28ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMWYxZjE7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5saW5rcyB7XFxuICBjb2xvcjogI2YxZjFmMTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmxvZ28gYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5saWtlLXdyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2x1bW4tZ2FwOiAycmVtO1xcbn1cXG5cXG4uc2hvd3MtbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxufVxcblxcbmZvb3RlciBkaXYge1xcbiAgd2lkdGg6IDc1JTtcXG4gIG1hcmdpbjogMjVweCBhdXRvO1xcbn1cXG5cXG4uc2hvd3MtbGlzdCA+IGRpdiB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudC1wb3B1cCB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NWU2MTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1ZTYxO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIGNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG4udW5kZXJsaW5lZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLml0ZW1zLXRpdGxlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tb2RhbC13cmFwcGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDVyZW0gYXV0byAwO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5pbWctd3JhcHBlciB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubnVtYmVyIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIge1xcbiAgY29sb3I6IGNhZGV0Ymx1ZTtcXG59XFxuXFxuLmRldGFpbC13cmFwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICByb3ctZ2FwOiAxcmVtO1xcbiAgY29sdW1uLWdhcDogMXJlbTtcXG59XFxuXFxuLmxpc3QtaXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uY29tbWVudC1wYXJhIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5zdW1tYXJ5IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHJvdy1nYXA6IDFyZW07XFxufVxcblxcbi51c2VyLW5hbWUge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udXNlci1tc2cge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnVzZXItbmFtZTpob3ZlciB7XFxuICBwYWRkaW5nOiAwIDEuMXJlbTtcXG59XFxuXFxuLnVzZXItbXNnOmhvdmVyIHtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuLnVzZXItbmFtZTpmb2N1cyxcXG4udXNlci1tc2c6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOTVlNjE7XFxufVxcblxcbi5lcnJvci1tc2cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMTAsIDEwKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDYwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmNvbW1lbnQtYnRuIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1ZTYxO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICBjb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuLmNvbW1lbnQtYnRuOmhvdmVyLFxcbi5jb21tZW50LXBvcHVwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ4OmhvdmVyIHtcXG4gIGNvbG9yOiBjYWRldGJsdWU7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MjhweCkge1xcbiAgLm5hdmJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5sb2dvIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5zaG93cy1saXN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcblxcbiAgLmRldGFpbC13cmFwIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7XFxuICAuc2hvd3MtbGlzdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgfVxcblxcbiAgLm5hdmJhciB7XFxuICAgIHdpZHRoOiA4NyU7XFxuICB9XFxuXFxuICAud3JhcHBlciB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcblxcbiAgLnVzZXItbmFtZSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gIH1cXG5cXG4gIC51c2VyLW1zZyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG5cXG4gIC5jb21tZW50LWJ0biB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gIH1cXG5cXG4gIGZvb3RlciBkaXYge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tYXdhaXQtaW4tbG9vcCAqL1xuXG5pbXBvcnQgeyBnZXRMaWtlcyB9IGZyb20gJy4vZ2V0SW52b2x2ZW1lbnQuanMnO1xuaW1wb3J0IHsgcG9zdExpa2VzIH0gZnJvbSAnLi9wb3N0SW52b2x2ZW1lbnQuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZXNDb3VudCB9IGZyb20gJy4vY291bnRlcnMuanMnO1xuXG5jb25zdCBidWlsZFNob3dzID0gYXN5bmMgKHNob3dzTGlzdCwgY29udGFpbmVyKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHNob3dzTGlzdC5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaG93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hvd0NvbnRhaW5lci5pZCA9IGBtb3ZpZV8ke3Nob3dzTGlzdFtpXS5pZH1gO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNyYyA9IHNob3dzTGlzdFtpXS5pbWFnZS5tZWRpdW07XG4gICAgaW1nLnN0eWxlLndpZHRoID0gJzIwcmVtJztcbiAgICBzaG93Q29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBjb25zdCB0aXRsZUxpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUxpa2UuY2xhc3NMaXN0LmFkZCgnbGlrZS13cmFwJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGxpa2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY29uc3QgbGlrZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGlrZURpc3BsYXkuaW5uZXJIVE1MID0gJzAgbGlrZXMnO1xuXG4gICAgbGlrZUJ0bi5jbGFzc0xpc3QuYWRkKCdieCcpO1xuICAgIGxpa2VCdG4uY2xhc3NMaXN0LmFkZCgnYngtaGVhcnQnKTtcbiAgICBsaWtlQnRuLmNsYXNzTGlzdC5hZGQoJ2J4LXNtJyk7XG4gICAgbGlrZUJ0bi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgbGlrZUJ0bi5pZCA9IGAke3Nob3dDb250YWluZXIuaWR9YDtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3Nob3dzTGlzdFtpXS5uYW1lfWA7XG5cbiAgICB0aXRsZUxpa2Uuc3R5bGUubWFyZ2luID0gJzVweCc7XG4gICAgdGl0bGVMaWtlLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuXG4gICAgdGl0bGVMaWtlLmFwcGVuZENoaWxkKGxpa2VCdG4pO1xuICAgIHRpdGxlTGlrZS5hcHBlbmRDaGlsZChsaWtlRGlzcGxheSk7XG4gICAgc2hvd0NvbnRhaW5lci5hcHBlbmQodGl0bGUsIHRpdGxlTGlrZSk7XG5cbiAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29tbWVudEJ0bi5pbm5lckhUTUwgPSAnPGJ1dHRvbiBjbGFzcz1cImNvbW1lbnQtcG9wdXBcIj5Db21tZW50PC9idXR0b24+JztcbiAgICBzaG93Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRCdG4pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaG93Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGxpc3RPZkxpa2VzID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgICBnZXRMaWtlc0NvdW50KGxpa2VCdG4sIGxpc3RPZkxpa2VzLCBsaWtlRGlzcGxheSk7XG5cbiAgICBsaWtlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgIGF3YWl0IHBvc3RMaWtlcyhlLnRhcmdldC5pZCk7XG4gICAgICBjb25zdCBnZXRSZXEgPSBhd2FpdCBnZXRMaWtlcygpO1xuXG4gICAgICBnZXRMaWtlc0NvdW50KGUudGFyZ2V0LCBnZXRSZXEsIGxpa2VEaXNwbGF5KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRTaG93czsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cblxuY29uc3QgZ2V0TGlrZXNDb3VudCA9ICh0YXJnZXQsIGxpa2VzQXJyYXksIGxpa2VzQ29udGFpbmVyKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGxpa2VzQXJyYXkubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgaWYgKGxpa2VzQXJyYXlbaV0uaXRlbV9pZCA9PT0gdGFyZ2V0LmlkKSB7XG4gICAgICBsaWtlc0NvbnRhaW5lci5pbm5lckhUTUwgPSBgJHtsaWtlc0FycmF5W2ldLmxpa2VzfSBsaWtlc2A7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzaG93c0NvdW50ID0gKHNob3dzTGlzdCkgPT4gc2hvd3NMaXN0Lmxlbmd0aDtcblxuY29uc3QgZ2V0Q29tbWVudENvdW50ID0gKHNlY3Rpb24sIGxpc3RzKSA9PiB7XG4gIHNlY3Rpb24udGV4dENvbnRlbnQgPSAnJztcbiAgbGlzdHMubGVuZ3RoID49IDFcbiAgICA/IChzZWN0aW9uLnRleHRDb250ZW50ID0gYENvbW1lbnRzICgke2xpc3RzLmxlbmd0aH0pYClcbiAgICA6IChzZWN0aW9uLnRleHRDb250ZW50ID0gJ0NvbW1lbnRzICgwKScpO1xufTtcblxuZXhwb3J0IHsgZ2V0TGlrZXNDb3VudCwgc2hvd3NDb3VudCwgZ2V0Q29tbWVudENvdW50IH07IiwiY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2V2SEh2dUl2M1dPakpDSjR5SDJQL2xpa2VzJyk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChidXR0b24pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZXZISHZ1SXYzV09qSkNKNHlIMlAvY29tbWVudHM/aXRlbV9pZD0ke2J1dHRvbn1gKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmV4cG9ydCB7IGdldExpa2VzLCBnZXRDb21tZW50cyB9O1xuIiwiY29uc3QgZ2V0U2hvd3MgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJyBodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJyk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTaG93cztcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuXG5pbXBvcnQgeyBnZXRDb21tZW50Q291bnQgfSBmcm9tICcuL2NvdW50ZXJzLmpzJztcbmltcG9ydCB7IGdldENvbW1lbnRzIH0gZnJvbSAnLi9nZXRJbnZvbHZlbWVudC5qcyc7XG5pbXBvcnQgeyBwb3N0Q29tbWVudHMgfSBmcm9tICcuL3Bvc3RJbnZvbHZlbWVudC5qcyc7XG5pbXBvcnQgcmVuZGVyQ29tbWVudHMgZnJvbSAnLi9yZW5kZXJDb21tZW50cy5qcyc7XG5cbmNvbnN0IG1vZGFsU3RydWN0dXJlID0gYXN5bmMgKGJ1dHRvbnMsIHNob3dzTGlzdCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBidXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbW9kYWxTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgbW9kYWxTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgICAgbW9kYWxTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBjb25zdCBtb2RhbFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1vZGFsV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdtb2RhbC13cmFwcGVyJyk7XG4gICAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbW9kYWxEaXYuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuXG4gICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgICAgIGNsb3NlLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBpbWdXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpbWdXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ltZy13cmFwcGVyJyk7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNob3dzTGlzdFtpXS5pbWFnZS5tZWRpdW0pO1xuICAgICAgY29uc3QgaXRlbU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICBpdGVtTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ251bWJlcicpO1xuICAgICAgaXRlbU51bWJlci50ZXh0Q29udGVudCA9IGAke3Nob3dzTGlzdFtpXS5uYW1lfWA7XG4gICAgICBjb25zdCBkZXRhaWxXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkZXRhaWxXcmFwLmNsYXNzTGlzdC5hZGQoJ2RldGFpbC13cmFwJyk7XG4gICAgICBjb25zdCBkZXRhaWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgIGRldGFpbDEudGV4dENvbnRlbnQgPSBgTGFuZ3VhZ2U6ICR7c2hvd3NMaXN0W2ldLmxhbmd1YWdlfWA7XG5cbiAgICAgIGNvbnN0IGRldGFpbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgZGV0YWlsMi50ZXh0Q29udGVudCA9ICdNb3ZpZSBnZW5yZXM6ICc7XG4gICAgICBjb25zdCB7IGdlbnJlcyB9ID0gc2hvd3NMaXN0W2ldO1xuICAgICAgZ2VucmVzLmZvckVhY2goKGdlbnJlKSA9PiB7XG4gICAgICAgIGRldGFpbDIudGV4dENvbnRlbnQgKz0gYCR7Z2VucmV9LCBgO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBkZXRhaWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgIGRldGFpbDMuaW5uZXJIVE1MID0gYEVzdGltYXRlZCB0aW1lOiAke3Nob3dzTGlzdFtpXS5ydW50aW1lfWA7XG5cbiAgICAgIGNvbnN0IGRldGFpbDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgZGV0YWlsNC50ZXh0Q29udGVudCA9IGBSYXRpbmc6ICR7c2hvd3NMaXN0W2ldLnJhdGluZy5hdmVyYWdlfWA7XG5cbiAgICAgIGNvbnN0IGRldGFpbDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgZGV0YWlsNS5pbm5lckhUTUwgPSBgU3VtbWFyeTogJHtzaG93c0xpc3RbaV0uc3VtbWFyeX1gO1xuICAgICAgZGV0YWlsNS5jbGFzc0xpc3QuYWRkKCdzdW1tYXJ5Jyk7XG5cbiAgICAgIGNvbnN0IGRldGFpbDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgZGV0YWlsNi5pbm5lckhUTUwgPSBgPGEgaHJlZj1cIiR7c2hvd3NMaXN0W2ldLnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5XYXRjaCBoZXJlPC9hPmA7XG4gICAgICBkZXRhaWw2LnN0eWxlLm1hcmdpblRvcCA9ICcxcmVtJztcbiAgICAgIGRldGFpbDYuc3R5bGUubWFyZ2luQm90dG9tID0gJzFyZW0nO1xuICAgICAgZGV0YWlsNi5jbGFzc0xpc3QuYWRkKCdzdW1tYXJ5Jyk7XG5cbiAgICAgIGNvbnN0IGNvbW1lbnRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIGNvbW1lbnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ251bWJlcicpO1xuICAgICAgY29uc3QgYWRkQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICBhZGRDb21tZW50LnRleHRDb250ZW50ID0gJ0FkZCBhIGNvbW1lbnQnO1xuICAgICAgYWRkQ29tbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMXJlbSc7XG4gICAgICBhZGRDb21tZW50LnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgY29uc3QgY29tbWVudEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICBjb21tZW50Rm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG4gICAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICB1c2VyTmFtZS5jbGFzc0xpc3QuYWRkKCd1c2VyLW5hbWUnKTtcbiAgICAgIHVzZXJOYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgbmFtZSc7XG4gICAgICBjb25zdCB1c2VyTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIHVzZXJNc2cuY2xhc3NMaXN0LmFkZCgndXNlci1tc2cnKTtcbiAgICAgIHVzZXJNc2cucGxhY2Vob2xkZXIgPSAnWW91ciBpbnNpZ2h0cyc7XG4gICAgICBjb25zdCBjb21tZW50QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjb21tZW50QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtYnRuJyk7XG4gICAgICBjb21tZW50QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbW1lbnQnO1xuICAgICAgY29tbWVudEJ1dHRvbi5pZCA9IGBtb3ZpZV9jbXRfJHtzaG93c0xpc3RbaV0uaWR9YDtcblxuICAgICAgY29uc3QgY29tbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29tbWVudERpdi5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0nKTtcblxuICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50cyhjb21tZW50QnV0dG9uLmlkKTtcblxuICAgICAgcmVuZGVyQ29tbWVudHMoY29tbWVudERpdiwgY29tbWVudHMpO1xuICAgICAgY29tbWVudHMubGVuZ3RoID49IDFcbiAgICAgICAgPyAoY29tbWVudFNlY3Rpb24udGV4dENvbnRlbnQgPSBgQ29tbWVudHMgKCR7Y29tbWVudHMubGVuZ3RofSlgKVxuICAgICAgICA6IChjb21tZW50U2VjdGlvbi50ZXh0Q29udGVudCA9ICdDb21tZW50cyAoMCknKTtcblxuICAgICAgY29tbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGlmICh1c2VyTmFtZS52YWx1ZSA9PT0gJycgfHwgdXNlck1zZy52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgZXJyb3JNc2cuY2xhc3NMaXN0LmFkZCgnZXJyb3ItbXNnJyk7XG4gICAgICAgICAgZXJyb3JNc2cuaW5uZXJUZXh0ID0gJ1BsZWFzZSBhZGQgeW91ciBuYW1lIGFuZCBjb21tZW50JztcbiAgICAgICAgICBjb21tZW50QnV0dG9uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVycm9yTXNnLCBjb21tZW50QnV0dG9uKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbW1lbnRGb3JtLnJlbW92ZUNoaWxkKGVycm9yTXNnKTtcbiAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYXdhaXQgcG9zdENvbW1lbnRzKGNvbW1lbnRCdXR0b24uaWQsIHVzZXJOYW1lLCB1c2VyTXNnKTtcbiAgICAgICAgICBjb25zdCBnZXRDbXRzID0gYXdhaXQgZ2V0Q29tbWVudHMoY29tbWVudEJ1dHRvbi5pZCk7XG4gICAgICAgICAgZ2V0Q29tbWVudENvdW50KGNvbW1lbnRTZWN0aW9uLCBnZXRDbXRzKTtcbiAgICAgICAgICByZW5kZXJDb21tZW50cyhjb21tZW50RGl2LCBnZXRDbXRzKTtcbiAgICAgICAgICB1c2VyTmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICAgIHVzZXJNc2cudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsU2VjdGlvbik7XG4gICAgICBtb2RhbFNlY3Rpb24uYXBwZW5kQ2hpbGQobW9kYWxXcmFwcGVyKTtcbiAgICAgIG1vZGFsV3JhcHBlci5hcHBlbmRDaGlsZChtb2RhbERpdik7XG4gICAgICBtb2RhbERpdi5hcHBlbmQoXG4gICAgICAgIGNsb3NlLCBpbWdXcmFwcGVyLCBpdGVtTnVtYmVyLFxuICAgICAgICBkZXRhaWxXcmFwLCBkZXRhaWw1LCBkZXRhaWw2LCBjb21tZW50U2VjdGlvbixcbiAgICAgICAgY29tbWVudERpdiwgYWRkQ29tbWVudCwgY29tbWVudEZvcm0sXG4gICAgICApO1xuICAgICAgZGV0YWlsV3JhcC5hcHBlbmQoZGV0YWlsMSwgZGV0YWlsMiwgZGV0YWlsMywgZGV0YWlsNCk7XG4gICAgICBpbWdXcmFwcGVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICAgIGNvbW1lbnRGb3JtLmFwcGVuZCh1c2VyTmFtZSwgdXNlck1zZywgY29tbWVudEJ1dHRvbik7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGFsU3RydWN0dXJlOyIsImNvbnN0IHBvc3RMaWtlcyA9IGFzeW5jIChpdGVtKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2V2SEh2dUl2M1dPakpDSjR5SDJQL2xpa2VzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogaXRlbSB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IENoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG59O1xuXG5jb25zdCBwb3N0Q29tbWVudHMgPSBhc3luYyAoYnV0dG9uLCB1c2VyTmFtZSwgY29tbWVudCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ldkhIdnVJdjNXT2pKQ0o0eUgyUC9jb21tZW50cycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBidXR0b24sXG4gICAgICB1c2VybmFtZTogdXNlck5hbWUudmFsdWUsXG4gICAgICBjb21tZW50OiBjb21tZW50LnZhbHVlLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgQ2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbn07XG5cbmV4cG9ydCB7IHBvc3RMaWtlcywgcG9zdENvbW1lbnRzIH07IiwiY29uc3QgcmVuZGVyQ29tbWVudHMgPSAoY29tbWVudENvbnRhaW5lciwgbGlzdCkgPT4ge1xuICBpZiAobGlzdC5sZW5ndGggPj0gMSkge1xuICAgIGNvbW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGlzdC5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbW1lbnRzUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbW1lbnRzUGFyYS5jbGFzc0xpc3QuYWRkKCdjb21tZW50LXBhcmEnKTtcbiAgICAgIGNvbW1lbnRzUGFyYS5pbm5lckhUTUwgPSBgJHtsaXN0W2ldLmNyZWF0aW9uX2RhdGV9ICR7bGlzdFtpXS51c2VybmFtZX06ICR7bGlzdFtpXS5jb21tZW50fWA7XG4gICAgICBjb21tZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRzUGFyYSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb21tZW50czsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgYnVpbGRTaG93cyBmcm9tICcuL21vZHVsZXMvYnVpbGRTaG93cy5qcyc7XG5pbXBvcnQgeyBzaG93c0NvdW50IH0gZnJvbSAnLi9tb2R1bGVzL2NvdW50ZXJzLmpzJztcbmltcG9ydCBnZXRTaG93cyBmcm9tICcuL21vZHVsZXMvZ2V0U2hvd3MuanMnO1xuaW1wb3J0IG1vZGFsU3RydWN0dXJlIGZyb20gJy4vbW9kdWxlcy9tb2RhbC5qcyc7XG5cbmNvbnN0IGl0ZW1zVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbXMtdGl0bGUnKTtcbmNvbnN0IGFsbFNob3dzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dzLWxpc3QnKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHNob3dzID0gYXdhaXQgZ2V0U2hvd3MoKTtcbiAgY29uc3Qgc2l4U2hvd3MgPSBzaG93cy5zbGljZSgwLCAyMCk7XG5cbiAgaXRlbXNUaXRsZS5pbm5lckhUTUwgPSBgTU9WSUVTICgke3Nob3dzQ291bnQoc2l4U2hvd3MpfSlgO1xuICBhd2FpdCBidWlsZFNob3dzKHNpeFNob3dzLCBhbGxTaG93c0NvbnRhaW5lcik7XG5cbiAgY29uc3QgY29tbWVudFBvcHVwID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LXBvcHVwJyldO1xuICBtb2RhbFN0cnVjdHVyZShjb21tZW50UG9wdXAsIHNpeFNob3dzKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==