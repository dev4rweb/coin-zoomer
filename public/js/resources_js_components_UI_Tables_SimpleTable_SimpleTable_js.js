"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_UI_Tables_SimpleTable_SimpleTable_js"],{

/***/ "./resources/js/components/UI/Tables/SimpleTable/SimpleTable.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/UI/Tables/SimpleTable/SimpleTable.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var _sass_components_UI_Tables_SimpleTable_SimpleTable_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../sass/components/UI/Tables/SimpleTable/SimpleTable.module.scss */ "./resources/sass/components/UI/Tables/SimpleTable/SimpleTable.module.scss");
/* harmony import */ var _SimpleTableItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleTableItem */ "./resources/js/components/UI/Tables/SimpleTable/SimpleTableItem.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var SimpleTable = function SimpleTable() {
  var coins = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.coinGecko.coinsMarkets;
  });
  var coinsMarketCap = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.leaderCoins.leadersMarketCap;
  });
  var tableData = [{
    id: 1,
    name: 'Coins name long name',
    symbol: 'NameSymbol',
    isUp: true,
    dynamicValue: 12.993,
    marketCap: 897.755,
    launchDate: 14,
    upVotes: 87946
  }, {
    id: 2,
    name: 'Coins name long name',
    symbol: 'NameSymbol',
    isUp: true,
    dynamicValue: 12.993,
    marketCap: 897.755,
    launchDate: 14,
    upVotes: 87946
  }, {
    id: 3,
    name: 'Coins name long name',
    symbol: 'NameSymbol',
    isUp: true,
    dynamicValue: 12.993,
    marketCap: 897.755,
    launchDate: 14,
    upVotes: 87946
  }, {
    id: 4,
    name: 'Coins name long name',
    symbol: 'NameSymbol',
    isUp: true,
    dynamicValue: 12.993,
    marketCap: 897.755,
    launchDate: 14,
    upVotes: 87946
  }, {
    id: 5,
    name: 'Coins name long name',
    symbol: 'NameSymbol',
    isUp: true,
    dynamicValue: 12.993,
    marketCap: 897.755,
    launchDate: 14,
    upVotes: 87946
  }];
  /* useEffect(() => {
       console.log('Simple Table', coins)
   }, [coins]);*/

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {// console.log('Simple Table', coinsMarketCap)
  }, [coinsMarketCap]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _sass_components_UI_Tables_SimpleTable_SimpleTable_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].simpleTable,
    striped: true,
    hover: true,
    responsive: true,
    variant: "dark",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          className: _sass_components_UI_Tables_SimpleTable_SimpleTable_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].coinsCol,
          children: "Coins"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          children: "Symbol"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          children: "1h"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          style: {
            minWidth: '120px'
          },
          children: "Price"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          style: {
            minWidth: '130px'
          },
          children: "Market Cap"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          style: {
            minWidth: '90px'
          },
          children: "Launch"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          children: "Upvotes"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
      children:
      /*tableData.map((i, index) =>
          <SimpleTableItem key={i.id} data={i} index={index}/>)*/

      /*coins.map((i, index) =>
          <SimpleTableItem key={i.id} data={i} index={index}/>)*/
      coinsMarketCap && coinsMarketCap.data.map(function (i, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SimpleTableItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          data: i,
          index: index
        }, i.id);
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleTable);

/***/ })

}]);