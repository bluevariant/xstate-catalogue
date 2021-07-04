module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/views/[id]": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/views/[id].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/GlobalState.ts":
/*!****************************!*\
  !*** ./lib/GlobalState.ts ***!
  \****************************/
/*! exports provided: globalStateMachine, globalStateService, useLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalStateMachine", function() { return globalStateMachine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalStateService", function() { return globalStateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayout", function() { return useLayout; });
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xstate/react */ "@xstate/react");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_xstate_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstate */ "xstate");
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xstate__WEBPACK_IMPORTED_MODULE_1__);


const localStorage = false ? undefined : undefined;
const globalStateMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_1__["createMachine"])({
  type: 'parallel',
  states: {
    layout: {
      initial: 'checking',
      states: {
        checking: {
          always: [{
            cond: 'isVerticalLayout',
            target: 'vertical'
          }, {
            cond: 'isHorizontalLayout',
            target: 'horizontal'
          }, {
            target: 'blog'
          }]
        },
        blog: {
          entry: ['saveBlogLayoutToLocalStorage'],
          on: {
            TOGGLE_LAYOUT: 'horizontal'
          }
        },
        horizontal: {
          entry: ['saveHorizontalLayoutToLocalStorage'],
          on: {
            TOGGLE_LAYOUT: 'vertical'
          }
        },
        vertical: {
          entry: ['saveVerticalLayoutToLocalStorage'],
          on: {
            TOGGLE_LAYOUT: 'blog'
          }
        }
      }
    }
  }
}, {
  guards: {
    isVerticalLayout: () => {
      return (localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem('XSTATE_CATALOGUE_LAYOUT')) === 'vertical';
    },
    isHorizontalLayout: () => {
      return (localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem('XSTATE_CATALOGUE_LAYOUT')) === 'horizontal';
    }
  },
  actions: {
    saveBlogLayoutToLocalStorage: () => {
      localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem('XSTATE_CATALOGUE_LAYOUT', 'blog');
    },
    saveHorizontalLayoutToLocalStorage: () => {
      localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem('XSTATE_CATALOGUE_LAYOUT', 'horizontal');
    },
    saveVerticalLayoutToLocalStorage: () => {
      localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem('XSTATE_CATALOGUE_LAYOUT', 'vertical');
    }
  }
});
let globalStateService = undefined;

if (false) {}

const useLayout = () => {
  if (!globalStateService) return null;
  const layout = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(globalStateService, state => {
    if (state.matches('layout.blog')) {
      return 'blog';
    }

    if (state.matches('layout.vertical')) {
      return 'vertical';
    }

    if (state.matches('layout.horizontal')) {
      return 'horizontal';
    }

    return null;
  });
  return layout;
};

/***/ }),

/***/ "./lib/MachineHelpers.tsx":
/*!********************************!*\
  !*** ./lib/MachineHelpers.tsx ***!
  \********************************/
/*! exports provided: MachineHelpersContext, State, Event, Action, Guard, Context, WholeContext, Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineHelpersContext", function() { return MachineHelpersContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guard", function() { return Guard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WholeContext", function() { return WholeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xstate/react */ "@xstate/react");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xstate_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\dccxx\\Projects\\js\\xstate-catalogue\\lib\\MachineHelpers.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const MachineHelpersContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});
const State = props => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(MachineHelpersContext);
  const [state] = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_1__["useService"])(context.service);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: `font-mono inline-flex flex-wrap font-bold text-sm `,
    children: props.children.split('.').map((a, index, array) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: `transition-colors py-1 ${index === 0 && 'pl-2'} ${index === array.length - 1 && 'pr-2'} ${state.matches(props.children) ? `bg-green-100 text-green-800` : 'bg-gray-100 text-gray-600'}`,
      children: [a, index !== array.length - 1 && '.']
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};
const Event = props => {
  var _context$metadata, _context$metadata$eve;

  const context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(MachineHelpersContext);
  const [state, send] = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_1__["useService"])(context.service);

  const {
    children
  } = props,
        event = _objectWithoutProperties(props, ["children"]);

  const defaultEvent = ((_context$metadata = context.metadata) === null || _context$metadata === void 0 ? void 0 : (_context$metadata$eve = _context$metadata.eventPayloads) === null || _context$metadata$eve === void 0 ? void 0 : _context$metadata$eve[props.children]) || {};
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "text-left",
    onClick: () => {
      send(_objectSpread(_objectSpread(_objectSpread({}, defaultEvent), event), {}, {
        type: props.children
      }));
    } // To override prose
    ,
    style: {
      margin: 0
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: `font-mono inline-flex flex-wrap font-bold text-sm `,
      children: props.children.split('.').map((a, index, array) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: `transition-colors py-1 ${index === 0 && 'pl-2'} ${index === array.length - 1 && 'pr-2'} ${state.nextEvents.includes(props.children) ? `bg-yellow-100 text-yellow-800` : 'bg-gray-100 text-gray-600'}`,
        children: [a, index !== array.length - 1 && '.']
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, undefined);
};
const Action = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: `bg-gray-100 text-gray-600 font-mono font-bold text-sm px-2 py-1 transition-colors`,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, undefined);
};
const Guard = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: `bg-gray-100 text-gray-600 font-mono font-bold text-sm px-2 py-1 transition-colors`,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }, undefined);
};
const Context = props => {
  var _state$context$props$;

  const context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(MachineHelpersContext);
  const [state] = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_1__["useService"])(context.service);

  let transform = entry => entry;

  if (props.stringify) {
    transform = entry => JSON.stringify(entry, null, 2);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: `bg-gray-100 text-gray-600 font-mono inline-flex flex-wrap font-bold text-sm px-2 py-1 transition-colors ${state.context[props.children] ? `bg-yellow-100 text-yellow-800` : ''}`,
    children: [props.children, ":", ' ', transform((_state$context$props$ = state.context[props.children]) !== null && _state$context$props$ !== void 0 ? _state$context$props$ : 'undefined')]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }, undefined);
};
const WholeContext = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(MachineHelpersContext);
  const jsonContext = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(context.service, state => {
    return JSON.stringify(state.context, null, 2);
  });
  const jsonContextRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    // @ts-ignore
    const hljs = window.hljs;

    if (hljs) {
      hljs.highlightBlock(jsonContextRef.current);
    }
  }, [jsonContextRef, jsonContext]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
      ref: jsonContextRef,
      className: "json",
      children: jsonContext
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 5
  }, undefined);
};
const Service = props => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(MachineHelpersContext);
  const isCurrentlyInvoked = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(context.service, state => {
    const nodesWhichInvokeThisService = state.configuration.filter(node => {
      return node.invoke.some(invoke => invoke.src === props.children);
    });
    const isCurrentlyInvoked = nodesWhichInvokeThisService.some(node => state.matches(node.path));
    return isCurrentlyInvoked;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: `font-mono inline-flex flex-wrap font-bold text-sm px-2 py-1 transition-colors relative ${isCurrentlyInvoked ? `bg-blue-100 text-blue-800` : `bg-gray-100 text-gray-600`}`,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./lib/machines lazy recursive ^\\.\\/.*\\.machine\\.ts$":
/*!******************************************************************!*\
  !*** ./lib/machines lazy ^\.\/.*\.machine\.ts$ namespace object ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./authentication.machine.ts": [
		"./lib/machines/authentication.machine.ts",
		0
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./lib/machines lazy recursive ^\\.\\/.*\\.machine\\.ts$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./lib/machines lazy recursive ^\\.\\/.*\\.mdx$":
/*!**********************************************************!*\
  !*** ./lib/machines lazy ^\.\/.*\.mdx$ namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./authentication.mdx": [
		"./lib/machines/authentication.mdx",
		1
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./lib/machines lazy recursive ^\\.\\/.*\\.mdx$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./lib/metadata.ts":
/*!*************************!*\
  !*** ./lib/metadata.ts ***!
  \*************************/
/*! exports provided: metadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
const metadata = {
  authentication: {
    title: 'Authentication',
    icon: 'LockOpenOutlined',
    version: '0.0.0'
  },
  'confirmation-dialog': {
    title: 'Confirmation Dialog',
    icon: 'PlaylistAddCheckOutlined',
    version: '0.0.0'
  },
  'create-or-update-form': {
    title: 'Create Or Update Form',
    icon: 'ContactSupportOutlined',
    version: '0.0.0'
  },
  debounce: {
    title: 'Debounce',
    icon: 'ReplyOutlined',
    version: '0.0.0'
  },
  deduplication: {
    title: 'Deduplication',
    icon: 'ReplyAllOutlined',
    version: '0.0.0'
  },
  'drag-and-drop': {
    title: 'Drag And Drop',
    icon: 'PanToolOutlined',
    version: '0.1.0'
  },
  'form-input': {
    title: 'Form Input',
    icon: 'EditOutlined',
    version: '0.0.0'
  },
  'infinite-scroll': {
    title: 'Infinite Scroll',
    icon: 'AllInclusiveOutlined',
    version: '0.0.0'
  },
  'multi-step-form': {
    title: 'Multi-Step Form',
    icon: 'DynamicFeedOutlined',
    version: '0.1.0'
  },
  'multi-step-form-with-validation': {
    title: 'Multi-Step Form With Validation',
    icon: 'DynamicFeedOutlined',
    version: '0.1.0'
  },
  'multi-step-timer': {
    title: 'Multi-Step Timer',
    icon: 'AvTimerOutlined',
    version: '0.0.0'
  },
  'netflix-style-video-hover': {
    title: 'Netflix-style Video Hover',
    icon: 'MovieFilterOutlined',
    version: '0.1.0'
  },
  pagination: {
    title: 'Pagination',
    icon: 'LastPageOutlined',
    version: '0.0.0'
  },
  queue: {
    title: 'Offline Queue',
    icon: 'BackupOutlined',
    version: '0.0.0'
  },
  'simple-data-fetch': {
    title: 'Simple Data Fetch',
    icon: 'KeyboardReturnOutlined',
    version: '0.0.0'
  },
  'with-local-cache': {
    title: 'Data fetch with local cache',
    icon: 'KeyboardReturnOutlined',
    version: '0.0.3'
  },
  'tab-focus': {
    title: 'Tab Focus',
    icon: 'TabOutlined',
    version: '0.1.0'
  } // "video-audio-controls": {
  //   title: "Video / Audio Controls",
  //   icon: "PlayCircleOutlineOutlined",
  //   version: "0.0.0",
  // },
  // "circuit-breaker": {
  //   title: "With Circuit Breaker",
  //   icon: "BatteryAlertOutlined",
  //   version: "0.0.0",
  // },

};

/***/ }),

/***/ "./pages/views/[id].tsx":
/*!******************************!*\
  !*** ./pages/views/[id].tsx ***!
  \******************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _xstate_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xstate/inspect */ "@xstate/inspect");
/* harmony import */ var _xstate_inspect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xstate_inspect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @xstate/react */ "@xstate/react");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_xstate_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_GlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/GlobalState */ "./lib/GlobalState.ts");
/* harmony import */ var _lib_MachineHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/MachineHelpers */ "./lib/MachineHelpers.tsx");
/* harmony import */ var _lib_metadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/metadata */ "./lib/metadata.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\dccxx\\Projects\\js\\xstate-catalogue\\pages\\views\\[id].tsx";









const useGetImports = (slug, deps) => {
  const {
    0: imports,
    1: setImports
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])();

  const getMachine = async () => {
    setImports(undefined);
    const machineImport = await __webpack_require__("./lib/machines lazy recursive ^\\.\\/.*\\.machine\\.ts$")(`./${slug}.machine.ts`);
    const mdxDoc = await __webpack_require__("./lib/machines lazy recursive ^\\.\\/.*\\.mdx$")(`./${slug}.mdx`);
    setImports({
      machine: machineImport.default,
      mdxDoc: mdxDoc.default,
      mdxMetadata: mdxDoc.metadata
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    getMachine();
  }, [slug, ...deps]);
  return imports;
};

const getStaticProps = async ({
  params
}) => {
  const fs = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! fs */ "fs", 7));
  const path = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! path */ "path", 7));
  const machinesPath = path.resolve(process.cwd(), "lib/machines", `${params.id}.machine.ts`);
  const meta = _lib_metadata__WEBPACK_IMPORTED_MODULE_7__["metadata"][params.id];

  if (!meta) {
    throw new Error(`Could not find metadata for ${params.id}. Go to lib/metadata.ts to fix.`);
  }

  return {
    props: {
      slug: params.id,
      fileText: fs.readFileSync(machinesPath).toString(),
      meta
    }
  };
};

const MachinePage = props => {
  const layout = Object(_lib_GlobalState__WEBPACK_IMPORTED_MODULE_5__["useLayout"])();
  const imports = useGetImports(props.slug, [layout]);
  const iframeRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  const _onLoad = () => {
    const $iframe = jquery__WEBPACK_IMPORTED_MODULE_8___default()('iframe[data-id="mod"]').contents();
    console.log($iframe);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    const {
      disconnect
    } = Object(_xstate_inspect__WEBPACK_IMPORTED_MODULE_1__["inspect"])({
      iframe: () => iframeRef.current,
      // url: "http://localhost:3000/api/inspect",
      url: "https://statecharts.io/inspect"
    });
    return () => {
      disconnect();
    };
  }, [layout, props.slug]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [props.meta.title, " | XState Catalogue"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Layout, {
      content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: imports && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowMachinePage, {
          slug: props.slug,
          machine: imports.machine,
          mdxDoc: imports.mdxDoc,
          fileText: props.fileText,
          meta: props.meta,
          mdxMetadata: imports.mdxMetadata
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 15
        }, undefined)
      }, void 0, false),
      iframe: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
        ref: iframeRef,
        className: "w-full h-full",
        "data-id": "mod",
        onLoad: _onLoad
      }, "iframe", false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

const Layout = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [props.content, props.iframe]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "hidden mb-16 bg-black md:block",
      style: {
        height: "calc(100vh - 50px)"
      },
      children: props.iframe
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: props.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 5
  }, undefined);
};

const ShowMachinePage = props => {
  const service = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_2__["useInterpret"])(props.machine, {
    devTools: true
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_lib_MachineHelpers__WEBPACK_IMPORTED_MODULE_6__["MachineHelpersContext"].Provider, {
    value: {
      service,
      metadata: props.mdxMetadata
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 10
  }, undefined);
};

const machinePathRegex = /\.machine\.ts$/;
const getStaticPaths = async () => {
  const fs = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! fs */ "fs", 7));
  const path = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! path */ "path", 7));
  const machinesPath = path.resolve(process.cwd(), "lib/machines");
  const machines = fs.readdirSync(machinesPath);
  return {
    fallback: false,
    paths: machines.filter(machine => machine.endsWith(".ts")).map(fileName => {
      return {
        params: {
          id: fileName.replace(machinePathRegex, "")
        }
      };
    })
  };
};
/* harmony default export */ __webpack_exports__["default"] = (MachinePage);

/***/ }),

/***/ "@mdx-js/react":
/*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "@xstate/inspect":
/*!**********************************!*\
  !*** external "@xstate/inspect" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@xstate/inspect");

/***/ }),

/***/ "@xstate/react":
/*!********************************!*\
  !*** external "@xstate/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@xstate/react");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "xstate":
/*!*************************!*\
  !*** external "xstate" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xstate");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0dsb2JhbFN0YXRlLnRzIiwid2VicGFjazovLy8uL2xpYi9NYWNoaW5lSGVscGVycy50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL21hY2hpbmVzIGxhenkgXlxcLlxcLy4qXFwubWFjaGluZVxcLnRzJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2xpYi9tYWNoaW5lcyBsYXp5IF5cXC5cXC8uKlxcLm1keCQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9saWIvbWV0YWRhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdmlld3MvLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWR4LWpzL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHhzdGF0ZS9pbnNwZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHhzdGF0ZS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieHN0YXRlXCIiXSwibmFtZXMiOlsibG9jYWxTdG9yYWdlIiwid2luZG93IiwidW5kZWZpbmVkIiwiZ2xvYmFsU3RhdGVNYWNoaW5lIiwiY3JlYXRlTWFjaGluZSIsInR5cGUiLCJzdGF0ZXMiLCJsYXlvdXQiLCJpbml0aWFsIiwiY2hlY2tpbmciLCJhbHdheXMiLCJjb25kIiwidGFyZ2V0IiwiYmxvZyIsImVudHJ5Iiwib24iLCJUT0dHTEVfTEFZT1VUIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwiZ3VhcmRzIiwiaXNWZXJ0aWNhbExheW91dCIsImdldEl0ZW0iLCJpc0hvcml6b250YWxMYXlvdXQiLCJhY3Rpb25zIiwic2F2ZUJsb2dMYXlvdXRUb0xvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzYXZlSG9yaXpvbnRhbExheW91dFRvTG9jYWxTdG9yYWdlIiwic2F2ZVZlcnRpY2FsTGF5b3V0VG9Mb2NhbFN0b3JhZ2UiLCJnbG9iYWxTdGF0ZVNlcnZpY2UiLCJ1c2VMYXlvdXQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibWF0Y2hlcyIsIk1hY2hpbmVIZWxwZXJzQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIlN0YXRlIiwicHJvcHMiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVNlcnZpY2UiLCJzZXJ2aWNlIiwiY2hpbGRyZW4iLCJzcGxpdCIsIm1hcCIsImEiLCJpbmRleCIsImFycmF5IiwibGVuZ3RoIiwiRXZlbnQiLCJzZW5kIiwiZXZlbnQiLCJkZWZhdWx0RXZlbnQiLCJtZXRhZGF0YSIsImV2ZW50UGF5bG9hZHMiLCJtYXJnaW4iLCJuZXh0RXZlbnRzIiwiaW5jbHVkZXMiLCJBY3Rpb24iLCJHdWFyZCIsIkNvbnRleHQiLCJ0cmFuc2Zvcm0iLCJzdHJpbmdpZnkiLCJKU09OIiwiV2hvbGVDb250ZXh0IiwianNvbkNvbnRleHQiLCJqc29uQ29udGV4dFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImhsanMiLCJoaWdobGlnaHRCbG9jayIsImN1cnJlbnQiLCJTZXJ2aWNlIiwiaXNDdXJyZW50bHlJbnZva2VkIiwibm9kZXNXaGljaEludm9rZVRoaXNTZXJ2aWNlIiwiY29uZmlndXJhdGlvbiIsImZpbHRlciIsIm5vZGUiLCJpbnZva2UiLCJzb21lIiwic3JjIiwicGF0aCIsImF1dGhlbnRpY2F0aW9uIiwidGl0bGUiLCJpY29uIiwidmVyc2lvbiIsImRlYm91bmNlIiwiZGVkdXBsaWNhdGlvbiIsInBhZ2luYXRpb24iLCJxdWV1ZSIsInVzZUdldEltcG9ydHMiLCJzbHVnIiwiZGVwcyIsImltcG9ydHMiLCJzZXRJbXBvcnRzIiwidXNlU3RhdGUiLCJnZXRNYWNoaW5lIiwibWFjaGluZUltcG9ydCIsIm1keERvYyIsIm1hY2hpbmUiLCJkZWZhdWx0IiwibWR4TWV0YWRhdGEiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsImZzIiwibWFjaGluZXNQYXRoIiwicmVzb2x2ZSIsInByb2Nlc3MiLCJjd2QiLCJpZCIsIm1ldGEiLCJFcnJvciIsImZpbGVUZXh0IiwicmVhZEZpbGVTeW5jIiwidG9TdHJpbmciLCJNYWNoaW5lUGFnZSIsImlmcmFtZVJlZiIsIl9vbkxvYWQiLCIkaWZyYW1lIiwiJCIsImNvbnRlbnRzIiwiY29uc29sZSIsImxvZyIsImRpc2Nvbm5lY3QiLCJpbnNwZWN0IiwiaWZyYW1lIiwidXJsIiwiTGF5b3V0IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvd1kiLCJjb250ZW50IiwiaGVpZ2h0IiwiU2hvd01hY2hpbmVQYWdlIiwidXNlSW50ZXJwcmV0IiwiZGV2VG9vbHMiLCJtYWNoaW5lUGF0aFJlZ2V4IiwiZ2V0U3RhdGljUGF0aHMiLCJtYWNoaW5lcyIsInJlYWRkaXJTeW5jIiwiZmFsbGJhY2siLCJwYXRocyIsImVuZHNXaXRoIiwiZmlsZU5hbWUiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQTtRQUNBLHNDQUFzQztRQUN0QztRQUNBO1FBQ0E7UUFDQTtRQUNBLGtCQUFrQixxQkFBcUI7UUFDdkM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFD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QUFZRCxDQXBCTTtBQXNCUXRCLDBFQUFmLEU7Ozs7Ozs7Ozs7O0FDaExBLDBDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLG1DIiwiZmlsZSI6InBhZ2VzL3ZpZXdzL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy92aWV3cy9baWRdXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi8uLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3ZpZXdzL1tpZF0udHN4XCIpO1xuIiwiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdAeHN0YXRlL3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlTWFjaGluZSwgaW50ZXJwcmV0LCBJbnRlcnByZXRlciB9IGZyb20gJ3hzdGF0ZSc7XHJcblxyXG5pbnRlcmZhY2UgR2xvYmFsU3RhdGVDb250ZXh0IHt9XHJcblxyXG5leHBvcnQgdHlwZSBHbG9iYWxTdGF0ZUV2ZW50ID0ge1xyXG4gIHR5cGU6ICdUT0dHTEVfTEFZT1VUJztcclxufTtcclxuXHJcbmNvbnN0IGxvY2FsU3RvcmFnZSA9XHJcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYWxTdG9yYWdlIDogdW5kZWZpbmVkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdsb2JhbFN0YXRlTWFjaGluZSA9IGNyZWF0ZU1hY2hpbmU8XHJcbiAgR2xvYmFsU3RhdGVDb250ZXh0LFxyXG4gIEdsb2JhbFN0YXRlRXZlbnRcclxuPihcclxuICB7XHJcbiAgICB0eXBlOiAncGFyYWxsZWwnLFxyXG4gICAgc3RhdGVzOiB7XHJcbiAgICAgIGxheW91dDoge1xyXG4gICAgICAgIGluaXRpYWw6ICdjaGVja2luZycsXHJcbiAgICAgICAgc3RhdGVzOiB7XHJcbiAgICAgICAgICBjaGVja2luZzoge1xyXG4gICAgICAgICAgICBhbHdheXM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25kOiAnaXNWZXJ0aWNhbExheW91dCcsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICd2ZXJ0aWNhbCcsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25kOiAnaXNIb3Jpem9udGFsTGF5b3V0JyxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogJ2hvcml6b250YWwnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnYmxvZycsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBibG9nOiB7XHJcbiAgICAgICAgICAgIGVudHJ5OiBbJ3NhdmVCbG9nTGF5b3V0VG9Mb2NhbFN0b3JhZ2UnXSxcclxuICAgICAgICAgICAgb246IHtcclxuICAgICAgICAgICAgICBUT0dHTEVfTEFZT1VUOiAnaG9yaXpvbnRhbCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaG9yaXpvbnRhbDoge1xyXG4gICAgICAgICAgICBlbnRyeTogWydzYXZlSG9yaXpvbnRhbExheW91dFRvTG9jYWxTdG9yYWdlJ10sXHJcbiAgICAgICAgICAgIG9uOiB7XHJcbiAgICAgICAgICAgICAgVE9HR0xFX0xBWU9VVDogJ3ZlcnRpY2FsJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2ZXJ0aWNhbDoge1xyXG4gICAgICAgICAgICBlbnRyeTogWydzYXZlVmVydGljYWxMYXlvdXRUb0xvY2FsU3RvcmFnZSddLFxyXG4gICAgICAgICAgICBvbjoge1xyXG4gICAgICAgICAgICAgIFRPR0dMRV9MQVlPVVQ6ICdibG9nJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBndWFyZHM6IHtcclxuICAgICAgaXNWZXJ0aWNhbExheW91dDogKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U/LmdldEl0ZW0oJ1hTVEFURV9DQVRBTE9HVUVfTEFZT1VUJykgPT09ICd2ZXJ0aWNhbCc7XHJcbiAgICAgIH0sXHJcbiAgICAgIGlzSG9yaXpvbnRhbExheW91dDogKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2U/LmdldEl0ZW0oJ1hTVEFURV9DQVRBTE9HVUVfTEFZT1VUJykgPT09ICdob3Jpem9udGFsJ1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICBzYXZlQmxvZ0xheW91dFRvTG9jYWxTdG9yYWdlOiAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlPy5zZXRJdGVtKCdYU1RBVEVfQ0FUQUxPR1VFX0xBWU9VVCcsICdibG9nJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNhdmVIb3Jpem9udGFsTGF5b3V0VG9Mb2NhbFN0b3JhZ2U6ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2U/LnNldEl0ZW0oJ1hTVEFURV9DQVRBTE9HVUVfTEFZT1VUJywgJ2hvcml6b250YWwnKTtcclxuICAgICAgfSxcclxuICAgICAgc2F2ZVZlcnRpY2FsTGF5b3V0VG9Mb2NhbFN0b3JhZ2U6ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2U/LnNldEl0ZW0oJ1hTVEFURV9DQVRBTE9HVUVfTEFZT1VUJywgJ3ZlcnRpY2FsJyk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbik7XHJcblxyXG5leHBvcnQgbGV0IGdsb2JhbFN0YXRlU2VydmljZSA9IHVuZGVmaW5lZCBhcyBJbnRlcnByZXRlcjxcclxuICBHbG9iYWxTdGF0ZUNvbnRleHQsXHJcbiAgYW55LFxyXG4gIEdsb2JhbFN0YXRlRXZlbnRcclxuPjtcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gIGdsb2JhbFN0YXRlU2VydmljZSA9IGludGVycHJldChnbG9iYWxTdGF0ZU1hY2hpbmUpLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VMYXlvdXQgPSAoKSA9PiB7XHJcbiAgaWYgKCFnbG9iYWxTdGF0ZVNlcnZpY2UpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGxheW91dCA9IHVzZVNlbGVjdG9yKGdsb2JhbFN0YXRlU2VydmljZSwgKHN0YXRlKSA9PiB7XHJcbiAgICBpZiAoc3RhdGUubWF0Y2hlcygnbGF5b3V0LmJsb2cnKSkge1xyXG4gICAgICByZXR1cm4gJ2Jsb2cnO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0YXRlLm1hdGNoZXMoJ2xheW91dC52ZXJ0aWNhbCcpKSB7XHJcbiAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0YXRlLm1hdGNoZXMoJ2xheW91dC5ob3Jpem9udGFsJykpIHtcclxuICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0pO1xyXG4gIHJldHVybiBsYXlvdXQ7XHJcbn07XHJcbiIsImltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VTZXJ2aWNlIH0gZnJvbSAnQHhzdGF0ZS9yZWFjdCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW50ZXJwcmV0ZXIgfSBmcm9tICd4c3RhdGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1hY2hpbmVIZWxwZXJzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8e1xyXG4gIHNlcnZpY2U6IEludGVycHJldGVyPGFueSwgYW55LCBhbnk+O1xyXG4gIG1ldGFkYXRhPzogTURYTWV0YWRhdGE7XHJcbn0+KHt9IGFzIGFueSk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1EWE1ldGFkYXRhIHtcclxuICBldmVudFBheWxvYWRzPzoge1xyXG4gICAgW2V2ZW50VHlwZTogc3RyaW5nXTogYW55O1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTdGF0ZSA9IChwcm9wczogeyBjaGlsZHJlbjogc3RyaW5nIH0pID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChNYWNoaW5lSGVscGVyc0NvbnRleHQpO1xyXG4gIGNvbnN0IFtzdGF0ZV0gPSB1c2VTZXJ2aWNlKGNvbnRleHQuc2VydmljZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT17YGZvbnQtbW9ubyBpbmxpbmUtZmxleCBmbGV4LXdyYXAgZm9udC1ib2xkIHRleHQtc20gYH0+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbi5zcGxpdCgnLicpLm1hcCgoYSwgaW5kZXgsIGFycmF5KSA9PiAoXHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLWNvbG9ycyBweS0xICR7aW5kZXggPT09IDAgJiYgJ3BsLTInfSAke1xyXG4gICAgICAgICAgICBpbmRleCA9PT0gYXJyYXkubGVuZ3RoIC0gMSAmJiAncHItMidcclxuICAgICAgICAgIH0gJHtcclxuICAgICAgICAgICAgc3RhdGUubWF0Y2hlcyhwcm9wcy5jaGlsZHJlbilcclxuICAgICAgICAgICAgICA/IGBiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi04MDBgXHJcbiAgICAgICAgICAgICAgOiAnYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCdcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHthfVxyXG4gICAgICAgICAge2luZGV4ICE9PSBhcnJheS5sZW5ndGggLSAxICYmICcuJ31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICkpfVxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRXZlbnQgPSAocHJvcHM6IHsgY2hpbGRyZW46IHN0cmluZyB9KSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoTWFjaGluZUhlbHBlcnNDb250ZXh0KTtcclxuICBjb25zdCBbc3RhdGUsIHNlbmRdID0gdXNlU2VydmljZShjb250ZXh0LnNlcnZpY2UpO1xyXG5cclxuICBjb25zdCB7IGNoaWxkcmVuLCAuLi5ldmVudCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGRlZmF1bHRFdmVudCA9IGNvbnRleHQubWV0YWRhdGE/LmV2ZW50UGF5bG9hZHM/Lltwcm9wcy5jaGlsZHJlbl0gfHwge307XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBzZW5kKHtcclxuICAgICAgICAgIC4uLmRlZmF1bHRFdmVudCxcclxuICAgICAgICAgIC4uLmV2ZW50LFxyXG4gICAgICAgICAgdHlwZTogcHJvcHMuY2hpbGRyZW4sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH19XHJcbiAgICAgIC8vIFRvIG92ZXJyaWRlIHByb3NlXHJcbiAgICAgIHN0eWxlPXt7IG1hcmdpbjogMCB9fVxyXG4gICAgPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Bmb250LW1vbm8gaW5saW5lLWZsZXggZmxleC13cmFwIGZvbnQtYm9sZCB0ZXh0LXNtIGB9PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbi5zcGxpdCgnLicpLm1hcCgoYSwgaW5kZXgsIGFycmF5KSA9PiAoXHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLWNvbG9ycyBweS0xICR7aW5kZXggPT09IDAgJiYgJ3BsLTInfSAke1xyXG4gICAgICAgICAgICAgIGluZGV4ID09PSBhcnJheS5sZW5ndGggLSAxICYmICdwci0yJ1xyXG4gICAgICAgICAgICB9ICR7XHJcbiAgICAgICAgICAgICAgc3RhdGUubmV4dEV2ZW50cy5pbmNsdWRlcyhwcm9wcy5jaGlsZHJlbilcclxuICAgICAgICAgICAgICAgID8gYGJnLXllbGxvdy0xMDAgdGV4dC15ZWxsb3ctODAwYFxyXG4gICAgICAgICAgICAgICAgOiAnYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCdcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHthfVxyXG4gICAgICAgICAgICB7aW5kZXggIT09IGFycmF5Lmxlbmd0aCAtIDEgJiYgJy4nfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGlvbiA9IChwcm9wczogeyBjaGlsZHJlbjogc3RyaW5nIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW5cclxuICAgICAgY2xhc3NOYW1lPXtgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCBmb250LW1vbm8gZm9udC1ib2xkIHRleHQtc20gcHgtMiBweS0xIHRyYW5zaXRpb24tY29sb3JzYH1cclxuICAgID5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgR3VhcmQgPSAocHJvcHM6IHsgY2hpbGRyZW46IHN0cmluZyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuXHJcbiAgICAgIGNsYXNzTmFtZT17YGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDAgZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXNtIHB4LTIgcHktMSB0cmFuc2l0aW9uLWNvbG9yc2B9XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSAocHJvcHM6IHsgY2hpbGRyZW46IHN0cmluZzsgc3RyaW5naWZ5PzogYm9vbGVhbiB9KSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoTWFjaGluZUhlbHBlcnNDb250ZXh0KTtcclxuICBjb25zdCBbc3RhdGVdID0gdXNlU2VydmljZShjb250ZXh0LnNlcnZpY2UpO1xyXG5cclxuICBsZXQgdHJhbnNmb3JtID0gKGVudHJ5OiBzdHJpbmcpID0+IGVudHJ5O1xyXG5cclxuICBpZiAocHJvcHMuc3RyaW5naWZ5KSB7XHJcbiAgICB0cmFuc2Zvcm0gPSAoZW50cnkpID0+IEpTT04uc3RyaW5naWZ5KGVudHJ5LCBudWxsLCAyKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuXHJcbiAgICAgIGNsYXNzTmFtZT17YGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDAgZm9udC1tb25vIGlubGluZS1mbGV4IGZsZXgtd3JhcCBmb250LWJvbGQgdGV4dC1zbSBweC0yIHB5LTEgdHJhbnNpdGlvbi1jb2xvcnMgJHtcclxuICAgICAgICBzdGF0ZS5jb250ZXh0W3Byb3BzLmNoaWxkcmVuXSA/IGBiZy15ZWxsb3ctMTAwIHRleHQteWVsbG93LTgwMGAgOiAnJ1xyXG4gICAgICB9YH1cclxuICAgID5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufTp7JyAnfVxyXG4gICAgICB7dHJhbnNmb3JtKHN0YXRlLmNvbnRleHRbcHJvcHMuY2hpbGRyZW5dID8/ICd1bmRlZmluZWQnKX1cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdob2xlQ29udGV4dCA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChNYWNoaW5lSGVscGVyc0NvbnRleHQpO1xyXG4gIGNvbnN0IGpzb25Db250ZXh0ID0gdXNlU2VsZWN0b3IoY29udGV4dC5zZXJ2aWNlLCAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzdGF0ZS5jb250ZXh0LCBudWxsLCAyKTtcclxuICB9KTtcclxuICBjb25zdCBqc29uQ29udGV4dFJlZiA9IHVzZVJlZihudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgY29uc3QgaGxqczogYW55ID0gd2luZG93LmhsanM7XHJcbiAgICBpZiAoaGxqcykge1xyXG4gICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKGpzb25Db250ZXh0UmVmLmN1cnJlbnQpO1xyXG4gICAgfVxyXG4gIH0sIFtqc29uQ29udGV4dFJlZiwganNvbkNvbnRleHRdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHByZT5cclxuICAgICAgPGNvZGUgcmVmPXtqc29uQ29udGV4dFJlZn0gY2xhc3NOYW1lPVwianNvblwiPlxyXG4gICAgICAgIHtqc29uQ29udGV4dH1cclxuICAgICAgPC9jb2RlPlxyXG4gICAgPC9wcmU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXJ2aWNlID0gKHByb3BzOiB7IGNoaWxkcmVuOiBzdHJpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KE1hY2hpbmVIZWxwZXJzQ29udGV4dCk7XHJcbiAgY29uc3QgaXNDdXJyZW50bHlJbnZva2VkID0gdXNlU2VsZWN0b3IoY29udGV4dC5zZXJ2aWNlLCAoc3RhdGUpID0+IHtcclxuICAgIGNvbnN0IG5vZGVzV2hpY2hJbnZva2VUaGlzU2VydmljZSA9IHN0YXRlLmNvbmZpZ3VyYXRpb24uZmlsdGVyKChub2RlKSA9PiB7XHJcbiAgICAgIHJldHVybiBub2RlLmludm9rZS5zb21lKChpbnZva2UpID0+IGludm9rZS5zcmMgPT09IHByb3BzLmNoaWxkcmVuKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGlzQ3VycmVudGx5SW52b2tlZCA9IG5vZGVzV2hpY2hJbnZva2VUaGlzU2VydmljZS5zb21lKChub2RlKSA9PlxyXG4gICAgICBzdGF0ZS5tYXRjaGVzKG5vZGUucGF0aCksXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGlzQ3VycmVudGx5SW52b2tlZDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuXHJcbiAgICAgIGNsYXNzTmFtZT17YGZvbnQtbW9ubyBpbmxpbmUtZmxleCBmbGV4LXdyYXAgZm9udC1ib2xkIHRleHQtc20gcHgtMiBweS0xIHRyYW5zaXRpb24tY29sb3JzIHJlbGF0aXZlICR7XHJcbiAgICAgICAgaXNDdXJyZW50bHlJbnZva2VkXHJcbiAgICAgICAgICA/IGBiZy1ibHVlLTEwMCB0ZXh0LWJsdWUtODAwYFxyXG4gICAgICAgICAgOiBgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMGBcclxuICAgICAgfWB9XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXV0aGVudGljYXRpb24ubWFjaGluZS50c1wiOiBbXG5cdFx0XCIuL2xpYi9tYWNoaW5lcy9hdXRoZW50aWNhdGlvbi5tYWNoaW5lLnRzXCIsXG5cdFx0MFxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vbGliL21hY2hpbmVzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLm1hY2hpbmVcXFxcLnRzJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsInZhciBtYXAgPSB7XG5cdFwiLi9hdXRoZW50aWNhdGlvbi5tZHhcIjogW1xuXHRcdFwiLi9saWIvbWFjaGluZXMvYXV0aGVudGljYXRpb24ubWR4XCIsXG5cdFx0MVxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vbGliL21hY2hpbmVzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLm1keCRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJpbXBvcnQgKiBhcyBJY29ucyBmcm9tICcuL0ljb25zJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFJdGVtIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGljb246IGtleW9mIHR5cGVvZiBJY29ucztcclxuICB2ZXJzaW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhZGF0YTogUmVjb3JkPHN0cmluZywgTWV0YWRhdGFJdGVtPiA9IHtcclxuICBhdXRoZW50aWNhdGlvbjoge1xyXG4gICAgdGl0bGU6ICdBdXRoZW50aWNhdGlvbicsXHJcbiAgICBpY29uOiAnTG9ja09wZW5PdXRsaW5lZCcsXHJcbiAgICB2ZXJzaW9uOiAnMC4wLjAnLFxyXG4gIH0sXHJcbiAgJ2NvbmZpcm1hdGlvbi1kaWFsb2cnOiB7XHJcbiAgICB0aXRsZTogJ0NvbmZpcm1hdGlvbiBEaWFsb2cnLFxyXG4gICAgaWNvbjogJ1BsYXlsaXN0QWRkQ2hlY2tPdXRsaW5lZCcsXHJcbiAgICB2ZXJzaW9uOiAnMC4wLjAnLFxyXG4gIH0sXHJcbiAgJ2NyZWF0ZS1vci11cGRhdGUtZm9ybSc6IHtcclxuICAgIHRpdGxlOiAnQ3JlYXRlIE9yIFVwZGF0ZSBGb3JtJyxcclxuICAgIGljb246ICdDb250YWN0U3VwcG9ydE91dGxpbmVkJyxcclxuICAgIHZlcnNpb246ICcwLjAuMCcsXHJcbiAgfSxcclxuICBkZWJvdW5jZToge1xyXG4gICAgdGl0bGU6ICdEZWJvdW5jZScsXHJcbiAgICBpY29uOiAnUmVwbHlPdXRsaW5lZCcsXHJcbiAgICB2ZXJzaW9uOiAnMC4wLjAnLFxyXG4gIH0sXHJcbiAgZGVkdXBsaWNhdGlvbjoge1xyXG4gICAgdGl0bGU6ICdEZWR1cGxpY2F0aW9uJyxcclxuICAgIGljb246ICdSZXBseUFsbE91dGxpbmVkJyxcclxuICAgIHZlcnNpb246ICcwLjAuMCcsXHJcbiAgfSxcclxuICAnZHJhZy1hbmQtZHJvcCc6IHtcclxuICAgIHRpdGxlOiAnRHJhZyBBbmQgRHJvcCcsXHJcbiAgICBpY29uOiAnUGFuVG9vbE91dGxpbmVkJyxcclxuICAgIHZlcnNpb246ICcwLjEuMCcsXHJcbiAgfSxcclxuICAnZm9ybS1pbnB1dCc6IHtcclxuICAgIHRpdGxlOiAnRm9ybSBJbnB1dCcsXHJcbiAgICBpY29uOiAnRWRpdE91dGxpbmVkJyxcclxuICAgIHZlcnNpb246ICcwLjAuMCcsXHJcbiAgfSxcclxuICAnaW5maW5pdGUtc2Nyb2xsJzoge1xyXG4gICAgdGl0bGU6ICdJbmZpbml0ZSBTY3JvbGwnLFxyXG4gICAgaWNvbjogJ0FsbEluY2x1c2l2ZU91dGxpbmVkJyxcclxuICAgIHZlcnNpb246ICcwLjAuMCcsXHJcbiAgfSxcclxuICAnbXVsdGktc3RlcC1mb3JtJzoge1xyXG4gICAgdGl0bGU6ICdNdWx0aS1TdGVwIEZvcm0nLFxyXG4gICAgaWNvbjogJ0R5bmFtaWNGZWVkT3V0bGluZWQnLFxyXG4gICAgdmVyc2lvbjogJzAuMS4wJyxcclxuICB9LFxyXG4gICdtdWx0aS1zdGVwLWZvcm0td2l0aC12YWxpZGF0aW9uJzoge1xyXG4gICAgdGl0bGU6ICdNdWx0aS1TdGVwIEZvcm0gV2l0aCBWYWxpZGF0aW9uJyxcclxuICAgIGljb246ICdEeW5hbWljRmVlZE91dGxpbmVkJyxcclxuICAgIHZlcnNpb246ICcwLjEuMCcsXHJcbiAgfSxcclxuICAnbXVsdGktc3RlcC10aW1lcic6IHtcclxuICAgIHRpdGxlOiAnTXVsdGktU3RlcCBUaW1lcicsXHJcbiAgICBpY29uOiAnQXZUaW1lck91dGxpbmVkJyxcclxuICAgIHZlcnNpb246ICcwLjAuMCcsXHJcbiAgfSxcclxuICAnbmV0ZmxpeC1zdHlsZS12aWRlby1ob3Zlcic6IHtcclxuICAgIHRpdGxlOiAnTmV0ZmxpeC1zdHlsZSBWaWRlbyBIb3ZlcicsXHJcbiAgICBpY29uOiAnTW92aWVGaWx0ZXJPdXRsaW5lZCcsXHJcbiAgICB2ZXJzaW9uOiAnMC4xLjAnLFxyXG4gIH0sXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgdGl0bGU6ICdQYWdpbmF0aW9uJyxcclxuICAgIGljb246ICdMYXN0UGFnZU91dGxpbmVkJyxcclxuICAgIHZlcnNpb246ICcwLjAuMCcsXHJcbiAgfSxcclxuICBxdWV1ZToge1xyXG4gICAgdGl0bGU6ICdPZmZsaW5lIFF1ZXVlJyxcclxuICAgIGljb246ICdCYWNrdXBPdXRsaW5lZCcsXHJcbiAgICB2ZXJzaW9uOiAnMC4wLjAnLFxyXG4gIH0sXHJcbiAgJ3NpbXBsZS1kYXRhLWZldGNoJzoge1xyXG4gICAgdGl0bGU6ICdTaW1wbGUgRGF0YSBGZXRjaCcsXHJcbiAgICBpY29uOiAnS2V5Ym9hcmRSZXR1cm5PdXRsaW5lZCcsXHJcbiAgICB2ZXJzaW9uOiAnMC4wLjAnLFxyXG4gIH0sXHJcbiAgJ3dpdGgtbG9jYWwtY2FjaGUnOiB7XHJcbiAgICB0aXRsZTogJ0RhdGEgZmV0Y2ggd2l0aCBsb2NhbCBjYWNoZScsXHJcbiAgICBpY29uOiAnS2V5Ym9hcmRSZXR1cm5PdXRsaW5lZCcsXHJcbiAgICB2ZXJzaW9uOiAnMC4wLjMnLFxyXG4gIH0sXHJcbiAgJ3RhYi1mb2N1cyc6IHtcclxuICAgIHRpdGxlOiAnVGFiIEZvY3VzJyxcclxuICAgIGljb246ICdUYWJPdXRsaW5lZCcsXHJcbiAgICB2ZXJzaW9uOiAnMC4xLjAnLFxyXG4gIH0sXHJcbiAgLy8gXCJ2aWRlby1hdWRpby1jb250cm9sc1wiOiB7XHJcbiAgLy8gICB0aXRsZTogXCJWaWRlbyAvIEF1ZGlvIENvbnRyb2xzXCIsXHJcbiAgLy8gICBpY29uOiBcIlBsYXlDaXJjbGVPdXRsaW5lT3V0bGluZWRcIixcclxuICAvLyAgIHZlcnNpb246IFwiMC4wLjBcIixcclxuICAvLyB9LFxyXG4gIC8vIFwiY2lyY3VpdC1icmVha2VyXCI6IHtcclxuICAvLyAgIHRpdGxlOiBcIldpdGggQ2lyY3VpdCBCcmVha2VyXCIsXHJcbiAgLy8gICBpY29uOiBcIkJhdHRlcnlBbGVydE91dGxpbmVkXCIsXHJcbiAgLy8gICB2ZXJzaW9uOiBcIjAuMC4wXCIsXHJcbiAgLy8gfSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zcGVjdCB9IGZyb20gXCJAeHN0YXRlL2luc3BlY3RcIjtcbmltcG9ydCB7IHVzZUludGVycHJldCB9IGZyb20gXCJAeHN0YXRlL3JlYWN0XCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGUsIE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gXCJ4c3RhdGVcIjtcbmltcG9ydCB7IHVzZUxheW91dCB9IGZyb20gXCIuLi8uLi9saWIvR2xvYmFsU3RhdGVcIjtcbmltcG9ydCB7IE1hY2hpbmVIZWxwZXJzQ29udGV4dCwgTURYTWV0YWRhdGEgfSBmcm9tIFwiLi4vLi4vbGliL01hY2hpbmVIZWxwZXJzXCI7XG5pbXBvcnQgeyBtZXRhZGF0YSwgTWV0YWRhdGFJdGVtIH0gZnJvbSBcIi4uLy4uL2xpYi9tZXRhZGF0YVwiO1xuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG5jb25zdCB1c2VHZXRJbXBvcnRzID0gKHNsdWc6IHN0cmluZywgZGVwczogYW55W10pID0+IHtcbiAgY29uc3QgW2ltcG9ydHMsIHNldEltcG9ydHNdID0gdXNlU3RhdGU8e1xuICAgIG1hY2hpbmU6IFN0YXRlTWFjaGluZTxhbnksIGFueSwgYW55PjtcbiAgICBtZHhEb2M6IGFueTtcbiAgICBtZHhNZXRhZGF0YT86IE1EWE1ldGFkYXRhO1xuICB9PigpO1xuXG4gIGNvbnN0IGdldE1hY2hpbmUgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0SW1wb3J0cyh1bmRlZmluZWQpO1xuICAgIGNvbnN0IG1hY2hpbmVJbXBvcnQ6IHtcbiAgICAgIGRlZmF1bHQ6IFN0YXRlTWFjaGluZTxhbnksIGFueSwgYW55PjtcbiAgICB9ID0gYXdhaXQgaW1wb3J0KGAuLi8uLi9saWIvbWFjaGluZXMvJHtzbHVnfS5tYWNoaW5lLnRzYCk7XG5cbiAgICBjb25zdCBtZHhEb2MgPSBhd2FpdCBpbXBvcnQoYC4uLy4uL2xpYi9tYWNoaW5lcy8ke3NsdWd9Lm1keGApO1xuXG4gICAgc2V0SW1wb3J0cyh7XG4gICAgICBtYWNoaW5lOiBtYWNoaW5lSW1wb3J0LmRlZmF1bHQsXG4gICAgICBtZHhEb2M6IG1keERvYy5kZWZhdWx0LFxuICAgICAgbWR4TWV0YWRhdGE6IG1keERvYy5tZXRhZGF0YSxcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE1hY2hpbmUoKTtcbiAgfSwgW3NsdWcsIC4uLmRlcHNdKTtcblxuICByZXR1cm4gaW1wb3J0cztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGZzID0gYXdhaXQgaW1wb3J0KFwiZnNcIik7XG4gIGNvbnN0IHBhdGggPSBhd2FpdCBpbXBvcnQoXCJwYXRoXCIpO1xuXG4gIGNvbnN0IG1hY2hpbmVzUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBcImxpYi9tYWNoaW5lc1wiLCBgJHtwYXJhbXMuaWR9Lm1hY2hpbmUudHNgKTtcblxuICBjb25zdCBtZXRhID0gbWV0YWRhdGFbcGFyYW1zLmlkXTtcblxuICBpZiAoIW1ldGEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIG1ldGFkYXRhIGZvciAke3BhcmFtcy5pZH0uIEdvIHRvIGxpYi9tZXRhZGF0YS50cyB0byBmaXguYCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzbHVnOiBwYXJhbXMuaWQgYXMgc3RyaW5nLFxuICAgICAgZmlsZVRleHQ6IGZzLnJlYWRGaWxlU3luYyhtYWNoaW5lc1BhdGgpLnRvU3RyaW5nKCksXG4gICAgICBtZXRhLFxuICAgIH0sXG4gIH07XG59O1xuXG5jb25zdCBNYWNoaW5lUGFnZTogTmV4dFBhZ2U8SW5mZXJHZXRTdGF0aWNQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPj4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgbGF5b3V0ID0gdXNlTGF5b3V0KCk7XG4gIGNvbnN0IGltcG9ydHMgPSB1c2VHZXRJbXBvcnRzKHByb3BzLnNsdWcsIFtsYXlvdXRdKTtcbiAgY29uc3QgaWZyYW1lUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IF9vbkxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgJGlmcmFtZSA9ICQoJ2lmcmFtZVtkYXRhLWlkPVwibW9kXCJdJykuY29udGVudHMoKTtcblxuICAgIGNvbnNvbGUubG9nKCRpZnJhbWUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBkaXNjb25uZWN0IH0gPSBpbnNwZWN0KHtcbiAgICAgIGlmcmFtZTogKCkgPT4gaWZyYW1lUmVmLmN1cnJlbnQsXG4gICAgICAvLyB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9pbnNwZWN0XCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9zdGF0ZWNoYXJ0cy5pby9pbnNwZWN0XCIsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGlzY29ubmVjdCgpO1xuICAgIH07XG4gIH0sIFtsYXlvdXQsIHByb3BzLnNsdWddKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwcm9wcy5tZXRhLnRpdGxlfSB8IFhTdGF0ZSBDYXRhbG9ndWU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dFxuICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2ltcG9ydHMgJiYgKFxuICAgICAgICAgICAgICA8U2hvd01hY2hpbmVQYWdlXG4gICAgICAgICAgICAgICAgc2x1Zz17cHJvcHMuc2x1Z31cbiAgICAgICAgICAgICAgICBtYWNoaW5lPXtpbXBvcnRzLm1hY2hpbmV9XG4gICAgICAgICAgICAgICAgbWR4RG9jPXtpbXBvcnRzLm1keERvY31cbiAgICAgICAgICAgICAgICBmaWxlVGV4dD17cHJvcHMuZmlsZVRleHR9XG4gICAgICAgICAgICAgICAgbWV0YT17cHJvcHMubWV0YX1cbiAgICAgICAgICAgICAgICBtZHhNZXRhZGF0YT17aW1wb3J0cy5tZHhNZXRhZGF0YX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgIH1cbiAgICAgICAgaWZyYW1lPXtcbiAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICBrZXk9XCJpZnJhbWVcIlxuICAgICAgICAgICAgcmVmPXtpZnJhbWVSZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCJcbiAgICAgICAgICAgIGRhdGEtaWQ9e1wibW9kXCJ9XG4gICAgICAgICAgICBvbkxvYWQ9e19vbkxvYWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IExheW91dCA9IChwcm9wczogeyBjb250ZW50OiBSZWFjdC5SZWFjdE5vZGU7IGlmcmFtZTogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcImF1dG9cIjtcbiAgICB9O1xuICB9LCBbcHJvcHMuY29udGVudCwgcHJvcHMuaWZyYW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWItMTYgYmctYmxhY2sgbWQ6YmxvY2tcIiBzdHlsZT17eyBoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDUwcHgpXCIgfX0+XG4gICAgICAgIHtwcm9wcy5pZnJhbWV9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+e3Byb3BzLmNvbnRlbnR9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBTaG93TWFjaGluZVBhZ2UgPSAocHJvcHM6IHtcbiAgbWFjaGluZTogU3RhdGVNYWNoaW5lPGFueSwgYW55LCBhbnk+O1xuICBtZHhEb2M6IGFueTtcbiAgZmlsZVRleHQ6IHN0cmluZztcbiAgc2x1Zzogc3RyaW5nO1xuICBtZXRhOiBNZXRhZGF0YUl0ZW07XG4gIG1keE1ldGFkYXRhPzogTURYTWV0YWRhdGE7XG59KSA9PiB7XG4gIGNvbnN0IHNlcnZpY2UgPSB1c2VJbnRlcnByZXQocHJvcHMubWFjaGluZSwge1xuICAgIGRldlRvb2xzOiB0cnVlLFxuICB9KTtcblxuICByZXR1cm4gPE1hY2hpbmVIZWxwZXJzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzZXJ2aWNlLCBtZXRhZGF0YTogcHJvcHMubWR4TWV0YWRhdGEgfX0gLz47XG59O1xuXG5jb25zdCBtYWNoaW5lUGF0aFJlZ2V4ID0gL1xcLm1hY2hpbmVcXC50cyQvO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBmcyA9IGF3YWl0IGltcG9ydChcImZzXCIpO1xuICBjb25zdCBwYXRoID0gYXdhaXQgaW1wb3J0KFwicGF0aFwiKTtcblxuICBjb25zdCBtYWNoaW5lc1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgXCJsaWIvbWFjaGluZXNcIik7XG5cbiAgY29uc3QgbWFjaGluZXMgPSBmcy5yZWFkZGlyU3luYyhtYWNoaW5lc1BhdGgpO1xuXG4gIHJldHVybiB7XG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgIHBhdGhzOiBtYWNoaW5lc1xuICAgICAgLmZpbHRlcigobWFjaGluZSkgPT4gbWFjaGluZS5lbmRzV2l0aChcIi50c1wiKSlcbiAgICAgIC5tYXAoKGZpbGVOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBpZDogZmlsZU5hbWUucmVwbGFjZShtYWNoaW5lUGF0aFJlZ2V4LCBcIlwiKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWNoaW5lUGFnZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtZHgtanMvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHhzdGF0ZS9pbnNwZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB4c3RhdGUvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ4c3RhdGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==