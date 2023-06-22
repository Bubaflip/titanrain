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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_logo_animated_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/logo_animated.gif */ \"./public/logo_animated.gif\");\n/* harmony import */ var vanta_dist_vanta_net_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vanta/dist/vanta.net.min.js */ \"./node_modules/vanta/dist/vanta.net.min.js\");\n/* harmony import */ var vanta_dist_vanta_net_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vanta_dist_vanta_net_min_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0), vantaEffect = ref[0], setVantaEffect = ref[1];\n    var vantaRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    // text effect\n    var letters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n    var originalTexts = [\n        \"Building tomorrow's internet.\",\n        \"One dream at a time.\"\n    ];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(originalTexts), text = ref1[0], setText = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    // vantaEffect\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!vantaEffect) {\n            setVantaEffect(vanta_dist_vanta_net_min_js__WEBPACK_IMPORTED_MODULE_3___default()({\n                el: vantaRef.current,\n                THREE: three__WEBPACK_IMPORTED_MODULE_5__,\n                minHeight: 200.00,\n                minWidth: 200.00,\n                scale: 1.00,\n                scaleMobile: 1.00,\n                color: 0x3f82ff,\n                backgroundColor: 0x0\n            }));\n        }\n        return function() {\n            if (vantaEffect) vantaEffect.destroy();\n        };\n    }, [\n        vantaEffect\n    ]);\n    // text effect\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var iterations = [\n            0,\n            0\n        ];\n        var interval;\n        var handleMouseOver = function() {\n            interval = setInterval(function() {\n                setText(function(oldTexts) {\n                    return oldTexts.map(function(oldText, i) {\n                        return oldText.split(\"\").map(function(letter, index) {\n                            if (index < iterations[i]) {\n                                return originalTexts[i][index];\n                            }\n                            return letters[Math.floor(Math.random() * 26)];\n                        }).join(\"\");\n                    });\n                });\n                for(var i = 0; i < originalTexts.length; i++){\n                    if (iterations[i] < originalTexts[i].length) {\n                        iterations[i] += 1 / 3;\n                        break;\n                    }\n                }\n                if (iterations[0] >= originalTexts[0].length && iterations[1] >= originalTexts[1].length) {\n                    clearInterval(interval);\n                }\n            }, 30);\n        };\n        if (ref2.current) {\n            ref2.current.addEventListener(\"mouseover\", handleMouseOver);\n        }\n        // clean up function\n        return function() {\n            if (ref2.current) {\n                ref2.current.removeEventListener(\"mouseover\", handleMouseOver);\n            }\n            clearInterval(interval);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().bg),\n                ref: vantaRef\n            }, void 0, false, {\n                fileName: \"/Users/martinminvielle/Desktop/_react-app/titanrain/pages/index.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().topSection),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().topText),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Building tomorrow's internet.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/martinminvielle/Desktop/_react-app/titanrain/pages/index.js\",\n                                lineNumber: 94,\n                                columnNumber: 44\n                            }, this),\n                            \"One dream at a time.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/martinminvielle/Desktop/_react-app/titanrain/pages/index.js\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/martinminvielle/Desktop/_react-app/titanrain/pages/index.js\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/martinminvielle/Desktop/_react-app/titanrain/pages/index.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().section),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().subSection),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"/Users/martinminvielle/Desktop/_react-app/titanrain/pages/index.js\",\n                            lineNumber: 150,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"martin.m@titanrain.xyz\"\n                        }, void 0, false, {\n                            fileName: \"/Users/martinminvielle/Desktop/_react-app/titanrain/pages/index.js\",\n                            lineNumber: 151,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"martin.b@titanrain.xyz\"\n                        }, void 0, false, {\n                            fileName: \"/Users/martinminvielle/Desktop/_react-app/titanrain/pages/index.js\",\n                            lineNumber: 152,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/martinminvielle/Desktop/_react-app/titanrain/pages/index.js\",\n                    lineNumber: 149,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/martinminvielle/Desktop/_react-app/titanrain/pages/index.js\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/martinminvielle/Desktop/_react-app/titanrain/pages/index.js\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"Xjkz92JXzNu7osCOJzDOt/VR5G0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBQ0MsU0FBUyxFQUFFN0MsMkVBQWlCOztzQ0FDL0IsOERBQUNrRCxJQUFFO3NDQUFDLFNBQU87Ozs7O2dDQUFLO3NDQUNoQiw4REFBQ0ksR0FBQztzQ0FBQyx3QkFBc0I7Ozs7O2dDQUFJO3NDQUM3Qiw4REFBQ0EsR0FBQztzQ0FBQyx3QkFBc0I7Ozs7O2dDQUFJOzs7Ozs7d0JBQ3pCOzs7OztvQkFDRjs7Ozs7O1lBQ0YsQ0FDUDtDQUNGO0dBckp1Qi9DLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IGNlbG9nbyBmcm9tICcuLi9wdWJsaWMvbG9nb19hbmltYXRlZC5naWYnXG5pbXBvcnQgSEFMTyBmcm9tICd2YW50YS9kaXN0L3ZhbnRhLm5ldC5taW4uanMnXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW3ZhbnRhRWZmZWN0LCBzZXRWYW50YUVmZmVjdF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgdmFudGFSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgLy8gdGV4dCBlZmZlY3RcbiAgY29uc3QgbGV0dGVycyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcbiAgY29uc3Qgb3JpZ2luYWxUZXh0cyA9IFtcIkJ1aWxkaW5nIHRvbW9ycm93J3MgaW50ZXJuZXQuXCIsIFwiT25lIGRyZWFtIGF0IGEgdGltZS5cIl07XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKG9yaWdpbmFsVGV4dHMpO1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cblxuICAvLyB2YW50YUVmZmVjdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdmFudGFFZmZlY3QpIHtcbiAgICAgIHNldFZhbnRhRWZmZWN0KFxuICAgICAgICBIQUxPKHtcbiAgICAgICAgICBlbDogdmFudGFSZWYuY3VycmVudCxcbiAgICAgICAgICBUSFJFRSxcbiAgICAgICAgICBtaW5IZWlnaHQ6IDIwMC4wMCxcbiAgICAgICAgICBtaW5XaWR0aDogMjAwLjAwLFxuICAgICAgICAgIHNjYWxlOiAxLjAwLFxuICAgICAgICAgIHNjYWxlTW9iaWxlOiAxLjAwLFxuICAgICAgICAgIGNvbG9yOiAweDNmODJmZixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MFxuICAgICAgICB9KVxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHZhbnRhRWZmZWN0KSB2YW50YUVmZmVjdC5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSwgW3ZhbnRhRWZmZWN0XSlcblxuICAvLyB0ZXh0IGVmZmVjdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpdGVyYXRpb25zID0gWzAsIDBdO1xuICAgIGxldCBpbnRlcnZhbDtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlT3ZlciA9ICgpID0+IHtcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRUZXh0KG9sZFRleHRzID0+IHtcbiAgICAgICAgICByZXR1cm4gb2xkVGV4dHMubWFwKChvbGRUZXh0LCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2xkVGV4dC5zcGxpdChcIlwiKVxuICAgICAgICAgICAgICAubWFwKChsZXR0ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgaXRlcmF0aW9uc1tpXSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsVGV4dHNbaV1baW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNildO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuam9pbihcIlwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmlnaW5hbFRleHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGl0ZXJhdGlvbnNbaV0gPCBvcmlnaW5hbFRleHRzW2ldLmxlbmd0aCkge1xuICAgICAgICAgICAgaXRlcmF0aW9uc1tpXSArPSAxIC8gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVyYXRpb25zWzBdID49IG9yaWdpbmFsVGV4dHNbMF0ubGVuZ3RoICYmIGl0ZXJhdGlvbnNbMV0gPj0gb3JpZ2luYWxUZXh0c1sxXS5sZW5ndGgpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgfSwgMzApO1xuICAgIH1cblxuICAgIGlmIChyZWYuY3VycmVudCkge1xuICAgICAgcmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlTW91c2VPdmVyKTtcbiAgICB9XG5cbiAgICAvLyBjbGVhbiB1cCBmdW5jdGlvblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlTW91c2VPdmVyKTtcbiAgICAgIH1cbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cbiAgfSwgW10pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnfSByZWY9e3ZhbnRhUmVmfT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BTZWN0aW9ufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BUZXh0fT5cbiAgICAgICAgICA8aDE+QnVpbGRpbmcgdG9tb3Jyb3cncyBpbnRlcm5ldC48YnI+PC9icj5PbmUgZHJlYW0gYXQgYSB0aW1lLjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBpbmZvcyAxICovfVxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJTZWN0aW9ufT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvblRpdGxlc30+QWR2ZW50dXJlcnMgb2YgdGhlIEN5YmVyLVNwYWNlPC9oMT5cbiAgICAgICAgICA8cD5XZSBhcmUgYSBkaWdpdGFsIGNvbnRlbnQgc3R1ZGlvIHNwZWNpYWxpc2luZyBpbiBHYW1lIERldmVsb3BtZW50IGFuZCBCbG9ja2NoYWluLlxuICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICBPdXIgdGVjaCBzdGFjayBleHRlbmRzIGZyb20gVW5pdHkgdG8gZnJvbnQtZW5kIHRvIFNtYXJ0LUNvbnRyYWN0cyBkZXZlbG9wbWVudCBhbmQgZGVwbG95bWVudC5cbiAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgV2Ugd3JhcCBpbWFnZXMsIHNvdW5kIGFuZCBsb2dpYyBpbnRvIG1lYW5pbmdmdWwgYWR2ZW50dXJlcy4gPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAqL31cblxuICAgICAgey8qIGluZm9zIDIgKi99XG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YlNlY3Rpb259PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uVGl0bGVzfT5IeXBlcmdhbWlmaWNhdGlvbjwvaDE+XG4gICAgICAgICAgPHA+R2FtZXMgYXJlIGV2ZXJ5dGhpbmcuIE91ciBleHRlbnNpdmUga25vd2xlZGdlIG9mIGdhbWUgbG9vcHMgYW5kIHVzZXIgZXhwZXJpZW5jZSBhbGxvd3MgdXMgdG8gY3JhZnRcbiAgICAgICAgICAgIHVuaXF1ZSBleHBlcmllbmNlcyBkcml2aW5nIGZ1biBhbmQgZW5nYWdlbWVudC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuXG4gICAgICB7LyogcHJvamVjdHMgKi99XG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YlNlY3Rpb259PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uVGl0bGVzfT5Xb3JrczwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0Q2FyZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RDYXJkVGV4dH0+XG4gICAgICAgICAgICAgIDxoMj5DZWwgTWF0ZXM8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJpZ0ltYWdlfT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17Y2Vsb2dvfSBoZWlnaHQ9ezMwMH0gd2lkdGg9ezMwMH0+PC9JbWFnZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RDYXJkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0Q2FyZFRleHR9PlxuICAgICAgICAgICAgICAgIDxoMj5Nb2pvPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmlnSW1hZ2V9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e21vam9Mb2dvfSBoZWlnaHQ9ezMwMH0gd2lkdGg9ezMwMH0+PC9JbWFnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG5cbiAgICAgIHsvKiBjb250YWN0ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YlNlY3Rpb259PlxuICAgICAgICAgIDxoMT5Db250YWN0PC9oMT5cbiAgICAgICAgICA8cD5tYXJ0aW4ubUB0aXRhbnJhaW4ueHl6PC9wPlxuICAgICAgICAgIDxwPm1hcnRpbi5iQHRpdGFucmFpbi54eXo8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsImNlbG9nbyIsIkhBTE8iLCJUSFJFRSIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiSG9tZSIsInZhbnRhRWZmZWN0Iiwic2V0VmFudGFFZmZlY3QiLCJ2YW50YVJlZiIsImxldHRlcnMiLCJvcmlnaW5hbFRleHRzIiwidGV4dCIsInNldFRleHQiLCJyZWYiLCJlbCIsImN1cnJlbnQiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsInNjYWxlIiwic2NhbGVNb2JpbGUiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImRlc3Ryb3kiLCJpdGVyYXRpb25zIiwiaW50ZXJ2YWwiLCJoYW5kbGVNb3VzZU92ZXIiLCJzZXRJbnRlcnZhbCIsIm9sZFRleHRzIiwibWFwIiwib2xkVGV4dCIsImkiLCJzcGxpdCIsImxldHRlciIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiam9pbiIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImJnIiwidG9wU2VjdGlvbiIsInRvcFRleHQiLCJoMSIsImJyIiwic2VjdGlvbiIsInN1YlNlY3Rpb24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});