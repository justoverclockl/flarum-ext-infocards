module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/formatNumber */ "flarum/utils/formatNumber");
/* harmony import */ var flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/AvatarEditor */ "flarum/components/AvatarEditor");
/* harmony import */ var flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_6__);
/*
 * This file is part of justoverclock/flarum-ext-infocards.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */







/* global m */

flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('justoverclock/flarum-ext-infocards', function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'view', function (vdom) {
    var user = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user;
    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user) if (vdom.children && vdom.children.splice) {
      var insert = m('div', {
        "class": 'containersocial'
      }, [m('div', {
        "class": 'card card-2'
      }, [m('h3', {
        "class": 'textone'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-infocards.forum.welcome_back')), m('div', {
        "class": 'avataric'
      }, flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_6___default.a.component({
        user: user
      })), m('p', {
        "class": 'textone'
      }, m('strong', flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(user))), m('p', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-infocards.forum.groups'), ':'), m('div', {
        "class": 'icocont'
      }, m('div', {
        "class": 'iconbadge'
      }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5___default()(user.badges().toArray())))]), m('div', {
        "class": 'card card-2'
      }, [m('h3', {
        "class": 'fontic2'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-infocards.forum.forumstats')), m('p', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-infocards.forum.totdisc'), ': ', m('b', flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4___default()(user.discussionCount()))), m('p', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-infocards.forum.totalpost'), ':'), m('div', {
        "class": 'numbercount'
      }, m('span', flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4___default()(user.commentCount())))]), m('div', {
        "class": 'card card-2'
      }, [m('h3', {
        "class": 'fontic3'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-infocards.forum.geninfo')), m('div', {
        "class": 'time',
        id: 'time'
      }), m('p', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-infocards.forum.wasviewed')), m('div', {
        "class": 'numbercount'
      }, m('span', {
        id: 'count'
      }), ' ', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-infocards.forum.times'))])]);
      vdom.children.splice(1, 0, insert);
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'oncreate', function () {
    var countVisit = document.getElementById('count');
    var apik = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('ApiKey');
    updateVisitCount();

    function updateVisitCount() {
      fetch(apik).then(function (res) {
        return res.json();
      }).then(function (res) {
        countVisit.innerHTML = res.value;
      });
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'oncreate', function () {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayNames = [flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-infocards.forum.sunday'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-infocards.forum.monday'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-infocards.forum.tuesday'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-infocards.forum.wednesday'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-infocards.forum.thursday'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-infocards.forum.friday'), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-infocards.forum.saturday')];

    function checkTime() {
      var date = new Date();
      var sufix = '';
      var hours = ('0' + date.getHours()).slice(-2);
      var minutes = ('0' + date.getMinutes()).slice(-2);
      var day = date.getDate();
      var month = monthNames[date.getMonth()];
      var weekday = dayNames[date.getDay()];
      if (day > 3 && day < 21) sufix = 'th';

      switch (day % 10) {
        case 1:
          sufix = 'st';

        case 2:
          sufix = 'nd';

        case 3:
          sufix = 'rd';

        default:
          sufix = 'th';
      }

      document.getElementById('time').innerHTML = "  It's <span class='hour'>" + hours + ':' + minutes + "</span><br/><span class='date'>" + month + ' ' + day + sufix + ', ' + weekday + '.';
    }

    setInterval(checkTime(), 1000);
  });
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/username":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/username']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/username'];

/***/ }),

/***/ "flarum/components/AvatarEditor":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/AvatarEditor']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AvatarEditor'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ }),

/***/ "flarum/utils/formatNumber":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/formatNumber']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/formatNumber'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map