"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utils/functions/useOnScreen.tsx":
/*!*********************************************!*\
  !*** ./src/utils/functions/useOnScreen.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useOnScreen; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nfunction useOnScreen(ref) {\n  _s();\n\n  const {\n    0: isIntersecting,\n    1: setIntersecting\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const observer = new IntersectionObserver(_ref => {\n    let [entry] = _ref;\n    return setIntersecting(entry.isIntersecting);\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    observer.observe(ref.current); // Remove the observer as soon as the component is unmounted\n\n    return () => {\n      observer.disconnect();\n    };\n  }, []);\n  return isIntersecting;\n}\n\n_s(useOnScreen, \"+TWZGT8mxcpNH+JS7IkSFv1hR0A=\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZnVuY3Rpb25zL3VzZU9uU2NyZWVuLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0UsV0FBVCxDQUFxQkMsR0FBckIsRUFBMEI7RUFBQTs7RUFDdkMsTUFBTTtJQUFBLEdBQUNDLGNBQUQ7SUFBQSxHQUFpQkM7RUFBakIsSUFBb0NKLCtDQUFRLENBQUMsS0FBRCxDQUFsRDtFQUVBLE1BQU1LLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QjtJQUFBLElBQUMsQ0FBQ0MsS0FBRCxDQUFEO0lBQUEsT0FDeENILGVBQWUsQ0FBQ0csS0FBSyxDQUFDSixjQUFQLENBRHlCO0VBQUEsQ0FBekIsQ0FBakI7RUFJQUosZ0RBQVMsQ0FBQyxNQUFNO0lBQ2RNLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQk4sR0FBRyxDQUFDTyxPQUFyQixFQURjLENBRWQ7O0lBQ0EsT0FBTyxNQUFNO01BQ1hKLFFBQVEsQ0FBQ0ssVUFBVDtJQUNELENBRkQ7RUFHRCxDQU5RLEVBTU4sRUFOTSxDQUFUO0VBUUEsT0FBT1AsY0FBUDtBQUNEOztHQWhCdUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9mdW5jdGlvbnMvdXNlT25TY3JlZW4udHN4P2I3ZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU9uU2NyZWVuKHJlZikge1xuICBjb25zdCBbaXNJbnRlcnNlY3RpbmcsIHNldEludGVyc2VjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKFtlbnRyeV0pID0+XG4gICAgc2V0SW50ZXJzZWN0aW5nKGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShyZWYuY3VycmVudCk7XG4gICAgLy8gUmVtb3ZlIHRoZSBvYnNlcnZlciBhcyBzb29uIGFzIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGlzSW50ZXJzZWN0aW5nO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlT25TY3JlZW4iLCJyZWYiLCJpc0ludGVyc2VjdGluZyIsInNldEludGVyc2VjdGluZyIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyeSIsIm9ic2VydmUiLCJjdXJyZW50IiwiZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/functions/useOnScreen.tsx\n"));

/***/ })

});