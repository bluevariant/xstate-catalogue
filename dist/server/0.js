exports.ids = [0];
exports.modules = {

/***/ "./lib/machines/authentication.machine.ts":
/*!************************************************!*\
  !*** ./lib/machines/authentication.machine.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ "xstate");
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xstate__WEBPACK_IMPORTED_MODULE_0__);

const authenticationMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_0__["createMachine"])({
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
    checkIfLoggedIn: () => async (send) => {// Perform some async check here
      // if (isLoggedIn) {
      //   send({
      //     type: "REPORT_IS_LOGGED_IN",
      //     userDetails: {
      //       username: "mpocock1",
      //     },
      //   });
      // } else {
      //   send({
      //     type: "REPORT_IS_LOGGED_OUT",
      //   });
      // }
    }
  },
  actions: {
    navigateToAuthPage: () => {// When the user is logged out, we
      // should take them to the /auth route
    },
    assignUserDetailsToContext: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])((context, event) => {
      if (event.type !== 'REPORT_IS_LOGGED_IN') {
        return {};
      }

      return {
        userDetails: event.userDetails
      };
    }),
    clearUserDetailsFromContext: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      userDetails: undefined
    })
  }
});
/* harmony default export */ __webpack_exports__["default"] = (authenticationMachine);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbWFjaGluZXMvYXV0aGVudGljYXRpb24ubWFjaGluZS50cyJdLCJuYW1lcyI6WyJhdXRoZW50aWNhdGlvbk1hY2hpbmUiLCJjcmVhdGVNYWNoaW5lIiwiaWQiLCJpbml0aWFsIiwic3RhdGVzIiwiY2hlY2tpbmdJZkxvZ2dlZEluIiwiaW52b2tlIiwic3JjIiwib25FcnJvciIsInRhcmdldCIsIm9uIiwiUkVQT1JUX0lTX0xPR0dFRF9JTiIsImFjdGlvbnMiLCJSRVBPUlRfSVNfTE9HR0VEX09VVCIsImxvZ2dlZEluIiwiTE9HX09VVCIsImxvZ2dlZE91dCIsImVudHJ5IiwiTE9HX0lOIiwic2VydmljZXMiLCJjaGVja0lmTG9nZ2VkSW4iLCJzZW5kIiwibmF2aWdhdGVUb0F1dGhQYWdlIiwiYXNzaWduVXNlckRldGFpbHNUb0NvbnRleHQiLCJhc3NpZ24iLCJjb250ZXh0IiwiZXZlbnQiLCJ0eXBlIiwidXNlckRldGFpbHMiLCJjbGVhclVzZXJEZXRhaWxzRnJvbUNvbnRleHQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEwQkEsTUFBTUEscUJBQXFCLEdBQUdDLDREQUFhLENBSXpDO0FBQ0VDLElBQUUsRUFBRSxnQkFETjtBQUVFQyxTQUFPLEVBQUUsb0JBRlg7QUFHRUMsUUFBTSxFQUFFO0FBQ05DLHNCQUFrQixFQUFFO0FBQ2xCQyxZQUFNLEVBQUU7QUFDTkMsV0FBRyxFQUFFLGlCQURDO0FBRU5DLGVBQU8sRUFBRTtBQUNQQyxnQkFBTSxFQUFFO0FBREQ7QUFGSCxPQURVO0FBT2xCQyxRQUFFLEVBQUU7QUFDRkMsMkJBQW1CLEVBQUU7QUFDbkJGLGdCQUFNLEVBQUUsVUFEVztBQUVuQkcsaUJBQU8sRUFBRTtBQUZVLFNBRG5CO0FBS0ZDLDRCQUFvQixFQUFFO0FBTHBCO0FBUGMsS0FEZDtBQWdCTkMsWUFBUSxFQUFFO0FBQ1JKLFFBQUUsRUFBRTtBQUNGSyxlQUFPLEVBQUU7QUFDUE4sZ0JBQU0sRUFBRTtBQUREO0FBRFA7QUFESSxLQWhCSjtBQXVCTk8sYUFBUyxFQUFFO0FBQ1RDLFdBQUssRUFBRSxDQUFDLG9CQUFELEVBQXVCLDZCQUF2QixDQURFO0FBRVRQLFFBQUUsRUFBRTtBQUNGUSxjQUFNLEVBQUU7QUFDTlQsZ0JBQU0sRUFBRSxVQURGO0FBRU5HLGlCQUFPLEVBQUU7QUFGSDtBQUROO0FBRks7QUF2Qkw7QUFIVixDQUp5QyxFQXlDekM7QUFDRU8sVUFBUSxFQUFFO0FBQ1JDLG1CQUFlLEVBQUUsTUFBTSxPQUNyQkMsSUFEcUIsS0FFbEIsQ0FDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBakJPLEdBRFo7QUFvQkVULFNBQU8sRUFBRTtBQUNQVSxzQkFBa0IsRUFBRSxNQUFNLENBQ3hCO0FBQ0E7QUFDRCxLQUpNO0FBS1BDLDhCQUEwQixFQUFFQyxxREFBTSxDQUFDLENBQUNDLE9BQUQsRUFBVUMsS0FBVixLQUFvQjtBQUNyRCxVQUFJQSxLQUFLLENBQUNDLElBQU4sS0FBZSxxQkFBbkIsRUFBMEM7QUFDeEMsZUFBTyxFQUFQO0FBQ0Q7O0FBQ0QsYUFBTztBQUNMQyxtQkFBVyxFQUFFRixLQUFLLENBQUNFO0FBRGQsT0FBUDtBQUdELEtBUGlDLENBTDNCO0FBYVBDLCtCQUEyQixFQUFFTCxxREFBTSxDQUFDO0FBQ2xDSSxpQkFBVyxFQUFFRTtBQURxQixLQUFEO0FBYjVCO0FBcEJYLENBekN5QyxDQUEzQztBQWlGZTlCLG9GQUFmLEUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzc2lnbiwgY3JlYXRlTWFjaGluZSwgU2VuZGVyIH0gZnJvbSAneHN0YXRlJztcclxuXHJcbmV4cG9ydCB0eXBlIEF1dGhlbnRpY2F0aW9uTWFjaGluZUNvbnRleHQgPSB7XHJcbiAgdXNlckRldGFpbHM/OiBVc2VyRGV0YWlscztcclxufTtcclxuXHJcbmludGVyZmFjZSBVc2VyRGV0YWlscyB7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQXV0aGVudGljYXRpb25NYWNoaW5lRXZlbnQgPVxyXG4gIHwge1xyXG4gICAgICB0eXBlOiAnUkVQT1JUX0lTX0xPR0dFRF9JTic7XHJcbiAgICAgIHVzZXJEZXRhaWxzOiBVc2VyRGV0YWlscztcclxuICAgIH1cclxuICB8IHtcclxuICAgICAgdHlwZTogJ1JFUE9SVF9JU19MT0dHRURfT1VUJztcclxuICAgIH1cclxuICB8IHtcclxuICAgICAgdHlwZTogJ0xPR19PVVQnO1xyXG4gICAgfVxyXG4gIHwge1xyXG4gICAgICB0eXBlOiAnTE9HX0lOJztcclxuICAgICAgdXNlckRldGFpbHM6IFVzZXJEZXRhaWxzO1xyXG4gICAgfTtcclxuXHJcbmNvbnN0IGF1dGhlbnRpY2F0aW9uTWFjaGluZSA9IGNyZWF0ZU1hY2hpbmU8XHJcbiAgQXV0aGVudGljYXRpb25NYWNoaW5lQ29udGV4dCxcclxuICBBdXRoZW50aWNhdGlvbk1hY2hpbmVFdmVudFxyXG4+KFxyXG4gIHtcclxuICAgIGlkOiAnYXV0aGVudGljYXRpb24nLFxyXG4gICAgaW5pdGlhbDogJ2NoZWNraW5nSWZMb2dnZWRJbicsXHJcbiAgICBzdGF0ZXM6IHtcclxuICAgICAgY2hlY2tpbmdJZkxvZ2dlZEluOiB7XHJcbiAgICAgICAgaW52b2tlOiB7XHJcbiAgICAgICAgICBzcmM6ICdjaGVja0lmTG9nZ2VkSW4nLFxyXG4gICAgICAgICAgb25FcnJvcjoge1xyXG4gICAgICAgICAgICB0YXJnZXQ6ICdsb2dnZWRPdXQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uOiB7XHJcbiAgICAgICAgICBSRVBPUlRfSVNfTE9HR0VEX0lOOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogJ2xvZ2dlZEluJyxcclxuICAgICAgICAgICAgYWN0aW9uczogJ2Fzc2lnblVzZXJEZXRhaWxzVG9Db250ZXh0JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBSRVBPUlRfSVNfTE9HR0VEX09VVDogJ2xvZ2dlZE91dCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgbG9nZ2VkSW46IHtcclxuICAgICAgICBvbjoge1xyXG4gICAgICAgICAgTE9HX09VVDoge1xyXG4gICAgICAgICAgICB0YXJnZXQ6ICdsb2dnZWRPdXQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBsb2dnZWRPdXQ6IHtcclxuICAgICAgICBlbnRyeTogWyduYXZpZ2F0ZVRvQXV0aFBhZ2UnLCAnY2xlYXJVc2VyRGV0YWlsc0Zyb21Db250ZXh0J10sXHJcbiAgICAgICAgb246IHtcclxuICAgICAgICAgIExPR19JTjoge1xyXG4gICAgICAgICAgICB0YXJnZXQ6ICdsb2dnZWRJbicsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6ICdhc3NpZ25Vc2VyRGV0YWlsc1RvQ29udGV4dCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2VydmljZXM6IHtcclxuICAgICAgY2hlY2tJZkxvZ2dlZEluOiAoKSA9PiBhc3luYyAoXHJcbiAgICAgICAgc2VuZDogU2VuZGVyPEF1dGhlbnRpY2F0aW9uTWFjaGluZUV2ZW50PixcclxuICAgICAgKSA9PiB7XHJcbiAgICAgICAgLy8gUGVyZm9ybSBzb21lIGFzeW5jIGNoZWNrIGhlcmVcclxuICAgICAgICAvLyBpZiAoaXNMb2dnZWRJbikge1xyXG4gICAgICAgIC8vICAgc2VuZCh7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6IFwiUkVQT1JUX0lTX0xPR0dFRF9JTlwiLFxyXG4gICAgICAgIC8vICAgICB1c2VyRGV0YWlsczoge1xyXG4gICAgICAgIC8vICAgICAgIHVzZXJuYW1lOiBcIm1wb2NvY2sxXCIsXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgc2VuZCh7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6IFwiUkVQT1JUX0lTX0xPR0dFRF9PVVRcIixcclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIG5hdmlnYXRlVG9BdXRoUGFnZTogKCkgPT4ge1xyXG4gICAgICAgIC8vIFdoZW4gdGhlIHVzZXIgaXMgbG9nZ2VkIG91dCwgd2VcclxuICAgICAgICAvLyBzaG91bGQgdGFrZSB0aGVtIHRvIHRoZSAvYXV0aCByb3V0ZVxyXG4gICAgICB9LFxyXG4gICAgICBhc3NpZ25Vc2VyRGV0YWlsc1RvQ29udGV4dDogYXNzaWduKChjb250ZXh0LCBldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC50eXBlICE9PSAnUkVQT1JUX0lTX0xPR0dFRF9JTicpIHtcclxuICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHVzZXJEZXRhaWxzOiBldmVudC51c2VyRGV0YWlscyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KSxcclxuICAgICAgY2xlYXJVc2VyRGV0YWlsc0Zyb21Db250ZXh0OiBhc3NpZ24oe1xyXG4gICAgICAgIHVzZXJEZXRhaWxzOiB1bmRlZmluZWQsXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9LFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aGVudGljYXRpb25NYWNoaW5lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9