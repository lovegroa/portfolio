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

/***/ "./src/components/radar-chart/radar-chart.component.tsx":
/*!**************************************************************!*\
  !*** ./src/components/radar-chart/radar-chart.component.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RadarChart\": function() { return /* binding */ RadarChart; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.mjs\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\Alex\\\\Projects\\\\portfolio\\\\src\\\\components\\\\radar-chart\\\\radar-chart.component.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.RadialLinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nconst RadarChart = _ref => {\n  _s();\n\n  let {\n    chartData,\n    width\n  } = _ref;\n  const {\n    0: fontSize,\n    1: setFontSize\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(14);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (window.outerWidth < 600) {\n      setFontSize(10);\n    }\n  }, []);\n  const data = {\n    labels: chartData.map(item => item[0]),\n    datasets: [{\n      label: 'Skills',\n      data: chartData.map(item => item[1]),\n      backgroundColor: 'rgba(0, 0, 132, 0.2)',\n      borderColor: 'rgba(0, 0, 255, 1)',\n      borderWidth: 3\n    }]\n  };\n  const options = {\n    color: '#ffffff',\n    maintainAspectRatio: true,\n    font: {\n      size: fontSize\n    },\n    plugins: {\n      legend: {\n        display: false\n      }\n    },\n    backgroundColor: '#000000',\n    scales: {\n      r: {\n        suggestedMin: 0,\n        suggestedMax: 10,\n        ticks: {\n          display: false\n        },\n        pointLabels: {\n          color: '#ffffff',\n          font: {\n            size: fontSize\n          }\n        }\n      }\n    }\n  }; //   return <></>;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Radar, {\n    style: {\n      width\n    },\n    data: data,\n    options: options\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 10\n  }, undefined);\n};\n\n_s(RadarChart, \"GXXU2WqA7Qonx0D1kQrduNWoQs4=\");\n\n_c = RadarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RadarChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"RadarChart\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9yYWRhci1jaGFydC9yYWRhci1jaGFydC5jb21wb25lbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBV0E7O0FBRUFJLG9EQUFBLENBQ0VDLHVEQURGLEVBRUVDLGtEQUZGLEVBR0VDLGlEQUhGLEVBSUVDLDRDQUpGLEVBS0VDLDZDQUxGLEVBTUVDLDRDQU5GO0FBV08sTUFBTUcsVUFBVSxHQUFHLFFBTXBCO0VBQUE7O0VBQUEsSUFOcUI7SUFDekJDLFNBRHlCO0lBRXpCQztFQUZ5QixDQU1yQjtFQUNKLE1BQU07SUFBQSxHQUFDQyxRQUFEO0lBQUEsR0FBV0M7RUFBWCxJQUEwQmYsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0VBRUFELGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQUlpQixNQUFNLENBQUNDLFVBQVAsR0FBb0IsR0FBeEIsRUFBNkI7TUFDM0JGLFdBQVcsQ0FBQyxFQUFELENBQVg7SUFDRDtFQUNGLENBSlEsRUFJTixFQUpNLENBQVQ7RUFNQSxNQUFNRyxJQUF3QixHQUFHO0lBQy9CQyxNQUFNLEVBQUVQLFNBQVMsQ0FBQ1EsR0FBVixDQUFjQyxJQUFJLElBQUlBLElBQUksQ0FBQyxDQUFELENBQTFCLENBRHVCO0lBRS9CQyxRQUFRLEVBQUUsQ0FDUjtNQUNFQyxLQUFLLEVBQUUsUUFEVDtNQUVFTCxJQUFJLEVBQUVOLFNBQVMsQ0FBQ1EsR0FBVixDQUFjQyxJQUFJLElBQUlBLElBQUksQ0FBQyxDQUFELENBQTFCLENBRlI7TUFHRUcsZUFBZSxFQUFFLHNCQUhuQjtNQUlFQyxXQUFXLEVBQUUsb0JBSmY7TUFLRUMsV0FBVyxFQUFFO0lBTGYsQ0FEUTtFQUZxQixDQUFqQztFQWFBLE1BQU1DLE9BQThCLEdBQUc7SUFDckNDLEtBQUssRUFBRSxTQUQ4QjtJQUVyQ0MsbUJBQW1CLEVBQUUsSUFGZ0I7SUFHckNDLElBQUksRUFBRTtNQUNKQyxJQUFJLEVBQUVqQjtJQURGLENBSCtCO0lBTXJDa0IsT0FBTyxFQUFFO01BQUNDLE1BQU0sRUFBRTtRQUFDQyxPQUFPLEVBQUU7TUFBVjtJQUFULENBTjRCO0lBT3JDVixlQUFlLEVBQUUsU0FQb0I7SUFTckNXLE1BQU0sRUFBRTtNQUNOQyxDQUFDLEVBQUU7UUFDREMsWUFBWSxFQUFFLENBRGI7UUFFREMsWUFBWSxFQUFFLEVBRmI7UUFHREMsS0FBSyxFQUFFO1VBQ0xMLE9BQU8sRUFBRTtRQURKLENBSE47UUFNRE0sV0FBVyxFQUFFO1VBQ1haLEtBQUssRUFBRSxTQURJO1VBRVhFLElBQUksRUFBRTtZQUFDQyxJQUFJLEVBQUVqQjtVQUFQO1FBRks7TUFOWjtJQURHO0VBVDZCLENBQXZDLENBdEJJLENBOENKOztFQUVBLG9CQUFPLDhEQUFDLGtEQUFEO0lBQU8sS0FBSyxFQUFFO01BQUNEO0lBQUQsQ0FBZDtJQUF1QixJQUFJLEVBQUVLLElBQTdCO0lBQW1DLE9BQU8sRUFBRVM7RUFBNUM7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQUFQO0FBQ0QsQ0F2RE07O0dBQU1oQjs7S0FBQUE7QUF5RGIsK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcmFkYXItY2hhcnQvcmFkYXItY2hhcnQuY29tcG9uZW50LnRzeD81NTk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIENoYXJ0IGFzIENoYXJ0SlMsXG4gIFJhZGlhbExpbmVhclNjYWxlLFxuICBQb2ludEVsZW1lbnQsXG4gIExpbmVFbGVtZW50LFxuICBGaWxsZXIsXG4gIFRvb2x0aXAsXG4gIExlZ2VuZCxcbiAgQ2hhcnRPcHRpb25zLFxuICBDaGFydERhdGEsXG59IGZyb20gJ2NoYXJ0LmpzJztcbmltcG9ydCB7UmFkYXJ9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5cbkNoYXJ0SlMucmVnaXN0ZXIoXG4gIFJhZGlhbExpbmVhclNjYWxlLFxuICBQb2ludEVsZW1lbnQsXG4gIExpbmVFbGVtZW50LFxuICBGaWxsZXIsXG4gIFRvb2x0aXAsXG4gIExlZ2VuZFxuKTtcblxuZXhwb3J0IHR5cGUgQ29tcENoYXJ0RGF0YSA9IFtzdHJpbmcsIG51bWJlcl1bXTtcblxuZXhwb3J0IGNvbnN0IFJhZGFyQ2hhcnQgPSAoe1xuICBjaGFydERhdGEsXG4gIHdpZHRoLFxufToge1xuICBjaGFydERhdGE6IENvbXBDaGFydERhdGE7XG4gIHdpZHRoOiBudW1iZXI7XG59KSA9PiB7XG4gIGNvbnN0IFtmb250U2l6ZSwgc2V0Rm9udFNpemVdID0gdXNlU3RhdGUoMTQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5vdXRlcldpZHRoIDwgNjAwKSB7XG4gICAgICBzZXRGb250U2l6ZSgxMCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgZGF0YTogQ2hhcnREYXRhPCdyYWRhcic+ID0ge1xuICAgIGxhYmVsczogY2hhcnREYXRhLm1hcChpdGVtID0+IGl0ZW1bMF0pLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnU2tpbGxzJyxcbiAgICAgICAgZGF0YTogY2hhcnREYXRhLm1hcChpdGVtID0+IGl0ZW1bMV0pLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDEzMiwgMC4yKScsXG4gICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAyNTUsIDEpJyxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDMsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgY29uc3Qgb3B0aW9uczogQ2hhcnRPcHRpb25zPCdyYWRhcic+ID0ge1xuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBmb250U2l6ZSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IHtsZWdlbmQ6IHtkaXNwbGF5OiBmYWxzZX19LFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxuXG4gICAgc2NhbGVzOiB7XG4gICAgICByOiB7XG4gICAgICAgIHN1Z2dlc3RlZE1pbjogMCxcbiAgICAgICAgc3VnZ2VzdGVkTWF4OiAxMCxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9pbnRMYWJlbHM6IHtcbiAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgIGZvbnQ6IHtzaXplOiBmb250U2l6ZX0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgLy8gICByZXR1cm4gPD48Lz47XG5cbiAgcmV0dXJuIDxSYWRhciBzdHlsZT17e3dpZHRofX0gZGF0YT17ZGF0YX0gb3B0aW9ucz17b3B0aW9uc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYWRhckNoYXJ0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaGFydCIsIkNoYXJ0SlMiLCJSYWRpYWxMaW5lYXJTY2FsZSIsIlBvaW50RWxlbWVudCIsIkxpbmVFbGVtZW50IiwiRmlsbGVyIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIlJhZGFyIiwicmVnaXN0ZXIiLCJSYWRhckNoYXJ0IiwiY2hhcnREYXRhIiwid2lkdGgiLCJmb250U2l6ZSIsInNldEZvbnRTaXplIiwid2luZG93Iiwib3V0ZXJXaWR0aCIsImRhdGEiLCJsYWJlbHMiLCJtYXAiLCJpdGVtIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJvcHRpb25zIiwiY29sb3IiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwiZm9udCIsInNpemUiLCJwbHVnaW5zIiwibGVnZW5kIiwiZGlzcGxheSIsInNjYWxlcyIsInIiLCJzdWdnZXN0ZWRNaW4iLCJzdWdnZXN0ZWRNYXgiLCJ0aWNrcyIsInBvaW50TGFiZWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/radar-chart/radar-chart.component.tsx\n"));

/***/ })

});