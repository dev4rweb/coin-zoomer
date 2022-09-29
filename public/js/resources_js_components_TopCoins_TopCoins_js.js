"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_TopCoins_TopCoins_js"],{

/***/ "./resources/js/components/TopCoins/TopCoins.js":
/*!******************************************************!*\
  !*** ./resources/js/components/TopCoins/TopCoins.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _sass_components_TopCoins_TopCoins_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../sass/components/TopCoins/TopCoins.module.scss */ "./resources/sass/components/TopCoins/TopCoins.module.scss");
/* harmony import */ var _TopCoinsItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopCoinsItem */ "./resources/js/components/TopCoins/TopCoinsItem.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var TopCoins = function TopCoins(_ref) {
  var _ref$classBg = _ref.classBg,
      classBg = _ref$classBg === void 0 ? 'green' : _ref$classBg,
      title = _ref.title,
      data = _ref.data;
  var isClass = _sass_components_TopCoins_TopCoins_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].greenBg;

  switch (classBg) {
    case 'pink':
      isClass = _sass_components_TopCoins_TopCoins_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].pinkBg;
      break;

    case 'blue':
      isClass = _sass_components_TopCoins_TopCoins_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].blueBg;
      break;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "".concat(_sass_components_TopCoins_TopCoins_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].topCoins, " ").concat(isClass),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: _sass_components_TopCoins_TopCoins_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].contentWrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: _sass_components_TopCoins_TopCoins_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          children: "Top"
        }), " ", title]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
        className: _sass_components_TopCoins_TopCoins_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listContent,
        children: data && data.map(function (i, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TopCoinsItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: i,
            index: index
          }, index);
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopCoins);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/sass/components/TopCoins/TopCoins.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/sass/components/TopCoins/TopCoins.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_green_card_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/img/green-card.png */ "./resources/assets/img/green-card.png");
/* harmony import */ var _assets_img_pink_card_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/img/pink-card.png */ "./resources/assets/img/pink-card.png");
/* harmony import */ var _assets_img_blue_card_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/img/blue-card.png */ "./resources/assets/img/blue-card.png");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_img_green_card_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_img_pink_card_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_img_blue_card_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*@font-face {\n    font-family: NekstRegular;\n    src: url(../assets/fonts/Nekst-Regular.ttf);\n}*/\n* {\n  font-family: \"NekstMedium\", sans-serif;\n}\n\nbody {\n  background-color: #10112d;\n}\n\nmain {\n  overflow-x: hidden;\n  min-height: calc(100vh - 120px);\n}\n\nh1 {\n  color: white;\n  font-size: 48px;\n}\n\nh2 {\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n}\n\nh3 {\n  color: white;\n  font-size: 16px;\n}\n\nh4 {\n  color: white;\n  font-size: 14px;\n}\n\nh5 {\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n}\n\np {\n  font-size: 12px;\n  color: white;\n  font-family: \"NekstMedium\", sans-serif;\n}\n\n.RchjLSBwzGCs-kIA591tKA\\=\\= > :not(:first-child) {\n  border-top: none;\n}\n\n.RchjLSBwzGCs-kIA591tKA\\=\\= > thead {\n  height: 40px;\n  color: #a6b2c6;\n  font-weight: bold;\n  font-size: 12px;\n  text-align: center;\n}\n\ntd {\n  font-size: 12px;\n}\ntd > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 60px;\n}\n\n.Hh1vwLjnYamoIV8s2WPosA\\=\\= {\n  background-image: -ms-linear-gradient(-90deg, #2a3072 0%, #565fb0 100%);\n}\n\n.IF\\+ZwxG37VcC3u9MlG6Ypg\\=\\= {\n  background-image: -ms-linear-gradient(-38deg, #1c5163 0%, #2ef098 100%);\n}\n\n.F0Sa-uvV6Rhi9YuJoHxRQg\\=\\= {\n  background-image: -ms-linear-gradient(-38deg, #4b2d73 0%, #e0258c 100%);\n}\n\n.EGAPk7kiaEG9c8sZytxCEg\\=\\= {\n  background-image: -ms-linear-gradient(-38deg, #2e3a82 0%, #2871ab 100%);\n}\n\n.v7hmvlifw-4DXGkqgHml9Q\\=\\= {\n  width: 677px;\n  height: 649px;\n}\n\n.xFfTj\\+dvt\\+J7qLpDoytjTA\\=\\= {\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  color: white;\n}\n.xFfTj\\+dvt\\+J7qLpDoytjTA\\=\\= span {\n  color: #0dcaf0;\n  margin-right: 5px;\n}\n\n._5H2w5vWGYvytvmyE6tPnZA\\=\\= {\n  list-style: none;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.KBoI9zDeWUXpspsHfFItyw\\=\\= {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  position: absolute;\n  left: -120px;\n}\n@media screen and (max-width: 998px) {\n  .KBoI9zDeWUXpspsHfFItyw\\=\\= {\n    left: 55%;\n    transform: translate(-50%, 0);\n  }\n}\n@media screen and (max-width: 768px) {\n  .KBoI9zDeWUXpspsHfFItyw\\=\\= {\n    left: 58%;\n  }\n}\n.KBoI9zDeWUXpspsHfFItyw\\=\\= ._6A7bg6qBAxw\\+yoswWbvDKQ\\=\\= {\n  position: relative;\n  width: 355px;\n  height: 455px;\n  margin-left: 125px;\n  margin-top: 90px;\n}\n\n.gKKRpeDjYqpMWmHLx82EVA\\=\\= {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  position: absolute;\n  left: 47%;\n  transform: translate(-50%, 0);\n}\n@media screen and (max-width: 1200px) {\n  .gKKRpeDjYqpMWmHLx82EVA\\=\\= {\n    top: 500px;\n  }\n}\n@media screen and (max-width: 998px) {\n  .gKKRpeDjYqpMWmHLx82EVA\\=\\= {\n    left: 44%;\n  }\n}\n@media screen and (max-width: 480px) {\n  .gKKRpeDjYqpMWmHLx82EVA\\=\\= {\n    left: 41%;\n  }\n}\n.gKKRpeDjYqpMWmHLx82EVA\\=\\= ._6A7bg6qBAxw\\+yoswWbvDKQ\\=\\= {\n  position: relative;\n  width: 355px;\n  height: 455px;\n  margin-left: 200px;\n  margin-top: 90px;\n}\n\n.rb1qphFcdTDbyw1dd7gCmw\\=\\= {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  position: absolute;\n  right: -120px;\n}\n@media screen and (max-width: 998px) {\n  .rb1qphFcdTDbyw1dd7gCmw\\=\\= {\n    top: 1000px;\n    right: 0;\n    left: 44%;\n    transform: translate(-50%, 0);\n  }\n}\n@media screen and (max-width: 480px) {\n  .rb1qphFcdTDbyw1dd7gCmw\\=\\= {\n    left: 41%;\n  }\n}\n.rb1qphFcdTDbyw1dd7gCmw\\=\\= ._6A7bg6qBAxw\\+yoswWbvDKQ\\=\\= {\n  position: relative;\n  width: 355px;\n  height: 455px;\n  margin-left: 200px;\n  margin-top: 90px;\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"table": "RchjLSBwzGCs-kIA591tKA==",
	"gradient-purple": "Hh1vwLjnYamoIV8s2WPosA==",
	"gradient-green": "IF+ZwxG37VcC3u9MlG6Ypg==",
	"gradient-red": "F0Sa-uvV6Rhi9YuJoHxRQg==",
	"gradient-blue": "EGAPk7kiaEG9c8sZytxCEg==",
	"topCoins": "v7hmvlifw-4DXGkqgHml9Q==",
	"header": "xFfTj+dvt+J7qLpDoytjTA==",
	"listContent": "_5H2w5vWGYvytvmyE6tPnZA==",
	"greenBg": "KBoI9zDeWUXpspsHfFItyw==",
	"contentWrapper": "_6A7bg6qBAxw+yoswWbvDKQ==",
	"pinkBg": "gKKRpeDjYqpMWmHLx82EVA==",
	"blueBg": "rb1qphFcdTDbyw1dd7gCmw=="
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/assets/img/blue-card.png":
/*!********************************************!*\
  !*** ./resources/assets/img/blue-card.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/blue-card.png?946d26cc66b325ce3fdc6d601425b7cf");

/***/ }),

/***/ "./resources/assets/img/green-card.png":
/*!*********************************************!*\
  !*** ./resources/assets/img/green-card.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/green-card.png?b41aa0e994b0295ab4c4089b9b77f14e");

/***/ }),

/***/ "./resources/assets/img/pink-card.png":
/*!********************************************!*\
  !*** ./resources/assets/img/pink-card.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/pink-card.png?935b68a25430e71893b2ad7dc7a737b8");

/***/ }),

/***/ "./resources/sass/components/TopCoins/TopCoins.module.scss":
/*!*****************************************************************!*\
  !*** ./resources/sass/components/TopCoins/TopCoins.module.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_TopCoins_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./TopCoins.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/sass/components/TopCoins/TopCoins.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_TopCoins_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_TopCoins_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);