(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./lib/machines/authentication.machine.ts":
/*!************************************************!*\
  !*** ./lib/machines/authentication.machine.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_dccxx_Projects_js_xstate_catalogue_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_dccxx_Projects_js_xstate_catalogue_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_dccxx_Projects_js_xstate_catalogue_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_dccxx_Projects_js_xstate_catalogue_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");



var authenticationMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_2__["createMachine"])({
  id: 'authentication',
  initial: 'checkingIfLoggedIn',
  states: {
    checkingIfLoggedIn: {
      invoke: {
        src: 'checkIfLoggedIn',
        onError: {
          target: 'loggedOut'
        }
      },
      on: {
        REPORT_IS_LOGGED_IN: {
          target: 'loggedIn',
          actions: 'assignUserDetailsToContext'
        },
        REPORT_IS_LOGGED_OUT: 'loggedOut'
      }
    },
    loggedIn: {
      on: {
        LOG_OUT: {
          target: 'loggedOut'
        }
      }
    },
    loggedOut: {
      entry: ['navigateToAuthPage', 'clearUserDetailsFromContext'],
      on: {
        LOG_IN: {
          target: 'loggedIn',
          actions: 'assignUserDetailsToContext'
        }
      }
    }
  }
}, {
  services: {
    checkIfLoggedIn: function checkIfLoggedIn() {
      return /*#__PURE__*/function () {
        var _ref = Object(C_Users_dccxx_Projects_js_xstate_catalogue_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_dccxx_Projects_js_xstate_catalogue_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(send) {
          return C_Users_dccxx_Projects_js_xstate_catalogue_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    }
  },
  actions: {
    navigateToAuthPage: function navigateToAuthPage() {// When the user is logged out, we
      // should take them to the /auth route
    },
    assignUserDetailsToContext: Object(xstate__WEBPACK_IMPORTED_MODULE_2__["assign"])(function (context, event) {
      if (event.type !== 'REPORT_IS_LOGGED_IN') {
        return {};
      }

      return {
        userDetails: event.userDetails
      };
    }),
    clearUserDetailsFromContext: Object(xstate__WEBPACK_IMPORTED_MODULE_2__["assign"])({
      userDetails: undefined
    })
  }
});
/* harmony default export */ __webpack_exports__["default"] = (authenticationMachine);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL21hY2hpbmVzL2F1dGhlbnRpY2F0aW9uLm1hY2hpbmUudHMiXSwibmFtZXMiOlsiYXV0aGVudGljYXRpb25NYWNoaW5lIiwiY3JlYXRlTWFjaGluZSIsImlkIiwiaW5pdGlhbCIsInN0YXRlcyIsImNoZWNraW5nSWZMb2dnZWRJbiIsImludm9rZSIsInNyYyIsIm9uRXJyb3IiLCJ0YXJnZXQiLCJvbiIsIlJFUE9SVF9JU19MT0dHRURfSU4iLCJhY3Rpb25zIiwiUkVQT1JUX0lTX0xPR0dFRF9PVVQiLCJsb2dnZWRJbiIsIkxPR19PVVQiLCJsb2dnZWRPdXQiLCJlbnRyeSIsIkxPR19JTiIsInNlcnZpY2VzIiwiY2hlY2tJZkxvZ2dlZEluIiwic2VuZCIsIm5hdmlnYXRlVG9BdXRoUGFnZSIsImFzc2lnblVzZXJEZXRhaWxzVG9Db250ZXh0IiwiYXNzaWduIiwiY29udGV4dCIsImV2ZW50IiwidHlwZSIsInVzZXJEZXRhaWxzIiwiY2xlYXJVc2VyRGV0YWlsc0Zyb21Db250ZXh0IiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMEJBLElBQU1BLHFCQUFxQixHQUFHQyw0REFBYSxDQUl6QztBQUNFQyxJQUFFLEVBQUUsZ0JBRE47QUFFRUMsU0FBTyxFQUFFLG9CQUZYO0FBR0VDLFFBQU0sRUFBRTtBQUNOQyxzQkFBa0IsRUFBRTtBQUNsQkMsWUFBTSxFQUFFO0FBQ05DLFdBQUcsRUFBRSxpQkFEQztBQUVOQyxlQUFPLEVBQUU7QUFDUEMsZ0JBQU0sRUFBRTtBQUREO0FBRkgsT0FEVTtBQU9sQkMsUUFBRSxFQUFFO0FBQ0ZDLDJCQUFtQixFQUFFO0FBQ25CRixnQkFBTSxFQUFFLFVBRFc7QUFFbkJHLGlCQUFPLEVBQUU7QUFGVSxTQURuQjtBQUtGQyw0QkFBb0IsRUFBRTtBQUxwQjtBQVBjLEtBRGQ7QUFnQk5DLFlBQVEsRUFBRTtBQUNSSixRQUFFLEVBQUU7QUFDRkssZUFBTyxFQUFFO0FBQ1BOLGdCQUFNLEVBQUU7QUFERDtBQURQO0FBREksS0FoQko7QUF1Qk5PLGFBQVMsRUFBRTtBQUNUQyxXQUFLLEVBQUUsQ0FBQyxvQkFBRCxFQUF1Qiw2QkFBdkIsQ0FERTtBQUVUUCxRQUFFLEVBQUU7QUFDRlEsY0FBTSxFQUFFO0FBQ05ULGdCQUFNLEVBQUUsVUFERjtBQUVORyxpQkFBTyxFQUFFO0FBRkg7QUFETjtBQUZLO0FBdkJMO0FBSFYsQ0FKeUMsRUF5Q3pDO0FBQ0VPLFVBQVEsRUFBRTtBQUNSQyxtQkFBZSxFQUFFO0FBQUE7QUFBQSxzVkFBTSxpQkFDckJDLElBRHFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFQsR0FEWjtBQW9CRVQsU0FBTyxFQUFFO0FBQ1BVLHNCQUFrQixFQUFFLDhCQUFNLENBQ3hCO0FBQ0E7QUFDRCxLQUpNO0FBS1BDLDhCQUEwQixFQUFFQyxxREFBTSxDQUFDLFVBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFvQjtBQUNyRCxVQUFJQSxLQUFLLENBQUNDLElBQU4sS0FBZSxxQkFBbkIsRUFBMEM7QUFDeEMsZUFBTyxFQUFQO0FBQ0Q7O0FBQ0QsYUFBTztBQUNMQyxtQkFBVyxFQUFFRixLQUFLLENBQUNFO0FBRGQsT0FBUDtBQUdELEtBUGlDLENBTDNCO0FBYVBDLCtCQUEyQixFQUFFTCxxREFBTSxDQUFDO0FBQ2xDSSxpQkFBVyxFQUFFRTtBQURxQixLQUFEO0FBYjVCO0FBcEJYLENBekN5QyxDQUEzQztBQWlGZTlCLG9GQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzc2lnbiwgY3JlYXRlTWFjaGluZSwgU2VuZGVyIH0gZnJvbSAneHN0YXRlJztcclxuXHJcbmV4cG9ydCB0eXBlIEF1dGhlbnRpY2F0aW9uTWFjaGluZUNvbnRleHQgPSB7XHJcbiAgdXNlckRldGFpbHM/OiBVc2VyRGV0YWlscztcclxufTtcclxuXHJcbmludGVyZmFjZSBVc2VyRGV0YWlscyB7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQXV0aGVudGljYXRpb25NYWNoaW5lRXZlbnQgPVxyXG4gIHwge1xyXG4gICAgICB0eXBlOiAnUkVQT1JUX0lTX0xPR0dFRF9JTic7XHJcbiAgICAgIHVzZXJEZXRhaWxzOiBVc2VyRGV0YWlscztcclxuICAgIH1cclxuICB8IHtcclxuICAgICAgdHlwZTogJ1JFUE9SVF9JU19MT0dHRURfT1VUJztcclxuICAgIH1cclxuICB8IHtcclxuICAgICAgdHlwZTogJ0xPR19PVVQnO1xyXG4gICAgfVxyXG4gIHwge1xyXG4gICAgICB0eXBlOiAnTE9HX0lOJztcclxuICAgICAgdXNlckRldGFpbHM6IFVzZXJEZXRhaWxzO1xyXG4gICAgfTtcclxuXHJcbmNvbnN0IGF1dGhlbnRpY2F0aW9uTWFjaGluZSA9IGNyZWF0ZU1hY2hpbmU8XHJcbiAgQXV0aGVudGljYXRpb25NYWNoaW5lQ29udGV4dCxcclxuICBBdXRoZW50aWNhdGlvbk1hY2hpbmVFdmVudFxyXG4+KFxyXG4gIHtcclxuICAgIGlkOiAnYXV0aGVudGljYXRpb24nLFxyXG4gICAgaW5pdGlhbDogJ2NoZWNraW5nSWZMb2dnZWRJbicsXHJcbiAgICBzdGF0ZXM6IHtcclxuICAgICAgY2hlY2tpbmdJZkxvZ2dlZEluOiB7XHJcbiAgICAgICAgaW52b2tlOiB7XHJcbiAgICAgICAgICBzcmM6ICdjaGVja0lmTG9nZ2VkSW4nLFxyXG4gICAgICAgICAgb25FcnJvcjoge1xyXG4gICAgICAgICAgICB0YXJnZXQ6ICdsb2dnZWRPdXQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uOiB7XHJcbiAgICAgICAgICBSRVBPUlRfSVNfTE9HR0VEX0lOOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogJ2xvZ2dlZEluJyxcclxuICAgICAgICAgICAgYWN0aW9uczogJ2Fzc2lnblVzZXJEZXRhaWxzVG9Db250ZXh0JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBSRVBPUlRfSVNfTE9HR0VEX09VVDogJ2xvZ2dlZE91dCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgbG9nZ2VkSW46IHtcclxuICAgICAgICBvbjoge1xyXG4gICAgICAgICAgTE9HX09VVDoge1xyXG4gICAgICAgICAgICB0YXJnZXQ6ICdsb2dnZWRPdXQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBsb2dnZWRPdXQ6IHtcclxuICAgICAgICBlbnRyeTogWyduYXZpZ2F0ZVRvQXV0aFBhZ2UnLCAnY2xlYXJVc2VyRGV0YWlsc0Zyb21Db250ZXh0J10sXHJcbiAgICAgICAgb246IHtcclxuICAgICAgICAgIExPR19JTjoge1xyXG4gICAgICAgICAgICB0YXJnZXQ6ICdsb2dnZWRJbicsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6ICdhc3NpZ25Vc2VyRGV0YWlsc1RvQ29udGV4dCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2VydmljZXM6IHtcclxuICAgICAgY2hlY2tJZkxvZ2dlZEluOiAoKSA9PiBhc3luYyAoXHJcbiAgICAgICAgc2VuZDogU2VuZGVyPEF1dGhlbnRpY2F0aW9uTWFjaGluZUV2ZW50PixcclxuICAgICAgKSA9PiB7XHJcbiAgICAgICAgLy8gUGVyZm9ybSBzb21lIGFzeW5jIGNoZWNrIGhlcmVcclxuICAgICAgICAvLyBpZiAoaXNMb2dnZWRJbikge1xyXG4gICAgICAgIC8vICAgc2VuZCh7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6IFwiUkVQT1JUX0lTX0xPR0dFRF9JTlwiLFxyXG4gICAgICAgIC8vICAgICB1c2VyRGV0YWlsczoge1xyXG4gICAgICAgIC8vICAgICAgIHVzZXJuYW1lOiBcIm1wb2NvY2sxXCIsXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgc2VuZCh7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6IFwiUkVQT1JUX0lTX0xPR0dFRF9PVVRcIixcclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIG5hdmlnYXRlVG9BdXRoUGFnZTogKCkgPT4ge1xyXG4gICAgICAgIC8vIFdoZW4gdGhlIHVzZXIgaXMgbG9nZ2VkIG91dCwgd2VcclxuICAgICAgICAvLyBzaG91bGQgdGFrZSB0aGVtIHRvIHRoZSAvYXV0aCByb3V0ZVxyXG4gICAgICB9LFxyXG4gICAgICBhc3NpZ25Vc2VyRGV0YWlsc1RvQ29udGV4dDogYXNzaWduKChjb250ZXh0LCBldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC50eXBlICE9PSAnUkVQT1JUX0lTX0xPR0dFRF9JTicpIHtcclxuICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHVzZXJEZXRhaWxzOiBldmVudC51c2VyRGV0YWlscyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KSxcclxuICAgICAgY2xlYXJVc2VyRGV0YWlsc0Zyb21Db250ZXh0OiBhc3NpZ24oe1xyXG4gICAgICAgIHVzZXJEZXRhaWxzOiB1bmRlZmluZWQsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9LFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aGVudGljYXRpb25NYWNoaW5lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9