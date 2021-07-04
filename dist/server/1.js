exports.ids = [1];
exports.modules = {

/***/ "./lib/machines/authentication.mdx":
/*!*****************************************!*\
  !*** ./lib/machines/authentication.mdx ***!
  \*****************************************/
/*! exports provided: metadata, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "@mdx-js/react");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\dccxx\\Projects\\js\\xstate-catalogue\\lib\\machines\\authentication.mdx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* @jsxRuntime classic */

/* @jsx mdx */

const metadata = {
  title: "Authentication"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", _objectSpread(_objectSpread({}, props), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 14
    }
  }));
};

const State = makeShortcode("State");
const Event = makeShortcode("Event");
const Action = makeShortcode("Action");
const layoutProps = {
  metadata
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _objectSpread(_objectSpread(_objectSpread({}, layoutProps), props), {}, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, `Authentication`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, `This state machine handles authentication logic when using an external service, for instance AWS Amplify.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, `Initial Check`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, `We start off in `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(State, {
    mdxType: "State",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 28
    }
  }, `checkingIfLoggedIn`), `. This state fires off an service which goes and checks if the user is logged in or not, asynchronously.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, `If `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(Event, {
    mdxType: "Event",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 34
    }
  }, `REPORT_IS_LOGGED_OUT`), ` gets triggered, we end up in `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(State, {
    mdxType: "State",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 123
    }
  }, `loggedOut`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, `If `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(Event, {
    mdxType: "Event",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 34
    }
  }, `REPORT_IS_LOGGED_IN`), ` gets triggered, we end up in `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(State, {
    mdxType: "State",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 122
    }
  }, `loggedIn`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, `We also save some user details into context via `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(Action, {
    mdxType: "Action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 83
    }
  }, `assignUserDetailsToContext`))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, `Logged Out`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, `Once the user is `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(State, {
    mdxType: "State",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, `loggedOut`), `, we can log them back in with `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(Event, {
    mdxType: "Event",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 108
    }
  }, `LOG_IN`), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, `Any time the user enters `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(State, {
    mdxType: "State",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 37
    }
  }, `loggedOut`), `, we fire off `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(Action, {
    mdxType: "Action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 99
    }
  }, `navigateToAuthPage`), ` to send them to the login page.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, `Logged In`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, `In the initial check, if `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(Event, {
    mdxType: "Event",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 37
    }
  }, `REPORT_IS_LOGGED_IN`), ` gets triggered, we end up in `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(State, {
    mdxType: "State",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 125
    }
  }, `loggedIn`), `. From there the user can also log out with `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(Event, {
    mdxType: "Event",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 216
    }
  }, `LOG_OUT`), `.`));
}
;
MDXContent.isMDXComponent = true;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbWFjaGluZXMvYXV0aGVudGljYXRpb24ubWR4Il0sIm5hbWVzIjpbIm1ldGFkYXRhIiwidGl0bGUiLCJtYWtlU2hvcnRjb2RlIiwibmFtZSIsIk1EWERlZmF1bHRTaG9ydGNvZGUiLCJwcm9wcyIsImNvbnNvbGUiLCJ3YXJuIiwiU3RhdGUiLCJFdmVudCIsIkFjdGlvbiIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBOztBQUVPLE1BQU1BLFFBQVEsR0FBRztBQUN0QkMsT0FBSyxFQUFFO0FBRGUsQ0FBakI7O0FBR1AsTUFBTUMsYUFBYSxHQUFHQyxJQUFJLElBQUksU0FBU0MsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0FBQzVEQyxTQUFPLENBQUNDLElBQVIsQ0FBYSxlQUFlSixJQUFmLEdBQXNCLHlFQUFuQztBQUNBLFNBQU8saUdBQVNFLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQO0FBQ0QsQ0FITDs7QUFJQSxNQUFNRyxLQUFLLEdBQUdOLGFBQWEsQ0FBQyxPQUFELENBQTNCO0FBQ0EsTUFBTU8sS0FBSyxHQUFHUCxhQUFhLENBQUMsT0FBRCxDQUEzQjtBQUNBLE1BQU1RLE1BQU0sR0FBR1IsYUFBYSxDQUFDLFFBQUQsQ0FBNUI7QUFDQSxNQUFNUyxXQUFXLEdBQUc7QUFDbEJYO0FBRGtCLENBQXBCO0FBR0EsTUFBTVksU0FBUyxHQUFHLFNBQWxCO0FBQ2UsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFIZ0M7QUFDakNDO0FBRGlDLEdBR2hDO0FBQUEsTUFERVQsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQsZ0RBQWVNLFdBQWYsR0FBZ0NOLEtBQWhDO0FBQXVDLGNBQVUsRUFBRVMsVUFBbkQ7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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNLFdBQU4sQ0FqQkssRUFrQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLLDJCQUFMLEVBQWdDLDBEQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlCLHFCQUF6QixDQUFoQyxFQUF3RixnQ0FBeEYsRUFBd0gsMERBQUMsS0FBRDtBQUFPLFdBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUIsVUFBekIsQ0FBeEgsRUFBcUssOENBQXJLLEVBQW1OLDBEQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlCLFNBQXpCLENBQW5OLEVBQStQLEdBQS9QLENBbEJLLENBQVA7QUFvQkQ7QUFFRDtBQUNBRCxVQUFVLENBQUNFLGNBQVgsR0FBNEIsSUFBNUIsQyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuXG5leHBvcnQgY29uc3QgbWV0YWRhdGEgPSB7XG4gIHRpdGxlOiBcIkF1dGhlbnRpY2F0aW9uXCJcbn07XG5jb25zdCBtYWtlU2hvcnRjb2RlID0gbmFtZSA9PiBmdW5jdGlvbiBNRFhEZWZhdWx0U2hvcnRjb2RlKHByb3BzKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJDb21wb25lbnQgXCIgKyBuYW1lICsgXCIgd2FzIG5vdCBpbXBvcnRlZCwgZXhwb3J0ZWQsIG9yIHByb3ZpZGVkIGJ5IE1EWFByb3ZpZGVyIGFzIGdsb2JhbCBzY29wZVwiKVxuICAgICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfS8+XG4gICAgfTtcbmNvbnN0IFN0YXRlID0gbWFrZVNob3J0Y29kZShcIlN0YXRlXCIpO1xuY29uc3QgRXZlbnQgPSBtYWtlU2hvcnRjb2RlKFwiRXZlbnRcIik7XG5jb25zdCBBY3Rpb24gPSBtYWtlU2hvcnRjb2RlKFwiQWN0aW9uXCIpO1xuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFkYXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG4gICAgPGgxPntgQXV0aGVudGljYXRpb25gfTwvaDE+XG4gICAgPHA+e2BUaGlzIHN0YXRlIG1hY2hpbmUgaGFuZGxlcyBhdXRoZW50aWNhdGlvbiBsb2dpYyB3aGVuIHVzaW5nIGFuIGV4dGVybmFsIHNlcnZpY2UsIGZvciBpbnN0YW5jZSBBV1MgQW1wbGlmeS5gfTwvcD5cbiAgICA8aDI+e2BJbml0aWFsIENoZWNrYH08L2gyPlxuICAgIDxwPntgV2Ugc3RhcnQgb2ZmIGluIGB9PFN0YXRlIG1keFR5cGU9XCJTdGF0ZVwiPntgY2hlY2tpbmdJZkxvZ2dlZEluYH08L1N0YXRlPntgLiBUaGlzIHN0YXRlIGZpcmVzIG9mZiBhbiBzZXJ2aWNlIHdoaWNoIGdvZXMgYW5kIGNoZWNrcyBpZiB0aGUgdXNlciBpcyBsb2dnZWQgaW4gb3Igbm90LCBhc3luY2hyb25vdXNseS5gfTwvcD5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BJZiBgfTxFdmVudCBtZHhUeXBlPVwiRXZlbnRcIj57YFJFUE9SVF9JU19MT0dHRURfT1VUYH08L0V2ZW50PntgIGdldHMgdHJpZ2dlcmVkLCB3ZSBlbmQgdXAgaW4gYH08U3RhdGUgbWR4VHlwZT1cIlN0YXRlXCI+e2Bsb2dnZWRPdXRgfTwvU3RhdGU+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YElmIGB9PEV2ZW50IG1keFR5cGU9XCJFdmVudFwiPntgUkVQT1JUX0lTX0xPR0dFRF9JTmB9PC9FdmVudD57YCBnZXRzIHRyaWdnZXJlZCwgd2UgZW5kIHVwIGluIGB9PFN0YXRlIG1keFR5cGU9XCJTdGF0ZVwiPntgbG9nZ2VkSW5gfTwvU3RhdGU+XG4gICAgICAgIDx1bCBwYXJlbnROYW1lPVwibGlcIj5cbiAgICAgICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BXZSBhbHNvIHNhdmUgc29tZSB1c2VyIGRldGFpbHMgaW50byBjb250ZXh0IHZpYSBgfTxBY3Rpb24gbWR4VHlwZT1cIkFjdGlvblwiPntgYXNzaWduVXNlckRldGFpbHNUb0NvbnRleHRgfTwvQWN0aW9uPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPGgyPntgTG9nZ2VkIE91dGB9PC9oMj5cbiAgICA8cD57YE9uY2UgdGhlIHVzZXIgaXMgYH08U3RhdGUgbWR4VHlwZT1cIlN0YXRlXCI+e2Bsb2dnZWRPdXRgfTwvU3RhdGU+e2AsIHdlIGNhbiBsb2cgdGhlbSBiYWNrIGluIHdpdGggYH08RXZlbnQgbWR4VHlwZT1cIkV2ZW50XCI+e2BMT0dfSU5gfTwvRXZlbnQ+e2AuYH08L3A+XG4gICAgPHA+e2BBbnkgdGltZSB0aGUgdXNlciBlbnRlcnMgYH08U3RhdGUgbWR4VHlwZT1cIlN0YXRlXCI+e2Bsb2dnZWRPdXRgfTwvU3RhdGU+e2AsIHdlIGZpcmUgb2ZmIGB9PEFjdGlvbiBtZHhUeXBlPVwiQWN0aW9uXCI+e2BuYXZpZ2F0ZVRvQXV0aFBhZ2VgfTwvQWN0aW9uPntgIHRvIHNlbmQgdGhlbSB0byB0aGUgbG9naW4gcGFnZS5gfTwvcD5cbiAgICA8aDI+e2BMb2dnZWQgSW5gfTwvaDI+XG4gICAgPHA+e2BJbiB0aGUgaW5pdGlhbCBjaGVjaywgaWYgYH08RXZlbnQgbWR4VHlwZT1cIkV2ZW50XCI+e2BSRVBPUlRfSVNfTE9HR0VEX0lOYH08L0V2ZW50PntgIGdldHMgdHJpZ2dlcmVkLCB3ZSBlbmQgdXAgaW4gYH08U3RhdGUgbWR4VHlwZT1cIlN0YXRlXCI+e2Bsb2dnZWRJbmB9PC9TdGF0ZT57YC4gRnJvbSB0aGVyZSB0aGUgdXNlciBjYW4gYWxzbyBsb2cgb3V0IHdpdGggYH08RXZlbnQgbWR4VHlwZT1cIkV2ZW50XCI+e2BMT0dfT1VUYH08L0V2ZW50PntgLmB9PC9wPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==