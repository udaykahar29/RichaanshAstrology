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

/***/ "./components/WhyUs.js":
/*!*****************************!*\
  !*** ./components/WhyUs.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_svg_shape_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/images/svg/shape.svg */ \"./public/images/svg/shape.svg\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles_whyus_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/whyus.module.css */ \"./styles/whyus.module.css\");\n/* harmony import */ var _styles_whyus_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_whyus_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant */ \"./constant/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar WhyUs = function() {\n    _s();\n    var _s1 = $RefreshSig$();\n    var yearsCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var animationYearsCount = function() {\n        var count = +yearsCount.current.innerText;\n        (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.animate)(0, 15, {\n            duration: 1,\n            onUpdate: function(v) {\n                yearsCount.current.innerText = Math.floor(v);\n            }\n        });\n    };\n    var SuccessCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var animationSuccessCount = function() {\n        (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.animate)(0, 80, {\n            duration: 1,\n            onUpdate: function(v) {\n                SuccessCount.current.innerText = Math.floor(v);\n            }\n        });\n    };\n    var horoscopeCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var animationHoroscopeCount = function() {\n        var count = +horoscopeCount.current.innerText;\n        (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.animate)(0, 800, {\n            duration: 1,\n            onUpdate: function(v) {\n                horoscopeCount.current.innerText = Math.floor(v);\n            }\n        });\n    };\n    var clientCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    clientCount.current = _constant__WEBPACK_IMPORTED_MODULE_4__.whyUs.map(_s1(function(ref, index) {\n        _s1();\n        console.log(\"ref\", ref);\n        clientCount.current[index] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(ref.value);\n    }, \"J9pzIsEOVEZ74gjFtMkCj+5Po7s=\"));\n    console.log(clientCount.type());\n    var animationClientCount = function(value, index) {\n        // const count = value;\n        (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.animate)(0, value, {\n            duration: 3,\n            onUpdate: function(v) {\n                clientCount[index].current.innerText = Math.floor(v);\n            }\n        });\n    };\n    // useEffect(() => {\n    // animationYearsCount();\n    //   console.log('count', whyUs[0].value);\n    // },[whyUs]);how to use dynamic ref value in function in react\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-[1240px] bg-[#031d2e] text-white grid grid-cols-12 justify-self-end py-12 md:py-16 mx-auto px-2 md:px-10 xl:px-0 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pr-0 lg:pr-[46px] col-span-full md:col-span-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-center xl:text-justify md:text-4xl sm:text-4xl text-4xl font-bold md:py-2 font-thin font-normal serif\",\n                            children: \"Why Choose Us?\"\n                        }, void 0, false, {\n                            fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                            className: \" mx-auto xl:mx-0 w-24 text-center my-6 border-[#ff7010] border-t-4 rounded-r-full\"\n                        }, void 0, false, {\n                            fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-bold text-gray-400 text-center md:text-justify\",\n                            children: \"Our astrological advice are based on the ancient system of Vedic astrology, which is the most authentic, time-tested, and trustworthy astrological system in the world.\"\n                        }, void 0, false, {\n                            fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inline-grid grid-cols-12 col-span-full md:col-span-8 gap-2 pt-8 md:pt-0\",\n                    children: _constant__WEBPACK_IMPORTED_MODULE_4__.whyUs.map(function(client, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center col-span-6 md:col-span-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_whyus_module_css__WEBPACK_IMPORTED_MODULE_6___default().as_number),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_styles_whyus_module_css__WEBPACK_IMPORTED_MODULE_6___default().as_whychoose_box_span),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.span, {\n                                                    ref: clientCount.current[index],\n                                                    whileInView: function() {\n                                                        animationClientCount(client.value, index);\n                                                    },\n                                                    children: client.value\n                                                }, void 0, false, {\n                                                    fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                \"+\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: _public_images_svg_shape_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                            alt: \"astrological logo\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: (_styles_whyus_module_css__WEBPACK_IMPORTED_MODULE_6___default().as_whychoose_box_h4),\n                                    children: client.text\n                                }, void 0, false, {\n                                    fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(WhyUs, \"gCadGMCIgxk46mmXU/zh/oSr/B8=\");\n_c = WhyUs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WhyUs);\nvar _c;\n$RefreshReg$(_c, \"WhyUs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7R0F0R0t0QyxLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUF3R1gsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1doeVVzLmpzPzYzMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLHVzZUVmZmVjdCwgUmVhY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzaGFwZSBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9zdmcvc2hhcGUuc3ZnXCI7XG5pbXBvcnQgeyBhbmltYXRlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2h5dXMubW9kdWxlLmNzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHdoeVVzIH0gZnJvbSBcIi4uL2NvbnN0YW50XCI7XG5cblxuY29uc3QgV2h5VXMgPSAoKSA9PiB7XG4gIGNvbnN0IHllYXJzQ291bnQgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgYW5pbWF0aW9uWWVhcnNDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb3VudCA9ICt5ZWFyc0NvdW50LmN1cnJlbnQuaW5uZXJUZXh0O1xuICAgIGFuaW1hdGUoMCwgMTUsIHtcbiAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgb25VcGRhdGU6ICh2KSA9PiB7XG4gICAgICAgIHllYXJzQ291bnQuY3VycmVudC5pbm5lclRleHQgPSBNYXRoLmZsb29yKHYpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBTdWNjZXNzQ291bnQgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgYW5pbWF0aW9uU3VjY2Vzc0NvdW50ID0gKCkgPT4ge1xuICAgIGFuaW1hdGUoMCwgODAsIHtcbiAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgb25VcGRhdGU6ICh2KSA9PiB7XG4gICAgICAgIFN1Y2Nlc3NDb3VudC5jdXJyZW50LmlubmVyVGV4dCA9IE1hdGguZmxvb3Iodik7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhvcm9zY29wZUNvdW50ID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGFuaW1hdGlvbkhvcm9zY29wZUNvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gK2hvcm9zY29wZUNvdW50LmN1cnJlbnQuaW5uZXJUZXh0O1xuICAgIGFuaW1hdGUoMCwgODAwLCB7XG4gICAgICBkdXJhdGlvbjogMSxcbiAgICAgIG9uVXBkYXRlOiAodikgPT4ge1xuICAgICAgICBob3Jvc2NvcGVDb3VudC5jdXJyZW50LmlubmVyVGV4dCA9IE1hdGguZmxvb3Iodik7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsaWVudENvdW50ID0gdXNlUmVmKFtdKTtcbiAgXG5cbiAgY2xpZW50Q291bnQuY3VycmVudCA9IHdoeVVzLm1hcChcbiAgICAocmVmLCBpbmRleCkgPT4gICB7XG4gICAgICBjb25zb2xlLmxvZyhcInJlZlwiLHJlZilcbiAgICAgIGNsaWVudENvdW50LmN1cnJlbnRbaW5kZXhdID0gdXNlUmVmKHJlZi52YWx1ZSlcbiAgICB9XG4gIClcblxuICBjb25zb2xlLmxvZyhjbGllbnRDb3VudC50eXBlKCkpXG5cbiAgY29uc3QgYW5pbWF0aW9uQ2xpZW50Q291bnQgPSAodmFsdWUsaW5kZXgpID0+IHtcbiAgICAvLyBjb25zdCBjb3VudCA9IHZhbHVlO1xuICAgIGFuaW1hdGUoMCwgdmFsdWUsIHtcbiAgICAgIGR1cmF0aW9uOiAzLFxuICAgICAgb25VcGRhdGU6ICh2KSA9PiB7XG4gICAgICAgIGNsaWVudENvdW50W2luZGV4XS5jdXJyZW50LmlubmVyVGV4dCA9IE1hdGguZmxvb3Iodik7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gYW5pbWF0aW9uWWVhcnNDb3VudCgpO1xuICAvLyAgIGNvbnNvbGUubG9nKCdjb3VudCcsIHdoeVVzWzBdLnZhbHVlKTtcbiAgLy8gfSxbd2h5VXNdKTtob3cgdG8gdXNlIGR5bmFtaWMgcmVmIHZhbHVlIGluIGZ1bmN0aW9uIGluIHJlYWN0XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMTI0MHB4XSBiZy1bIzAzMWQyZV0gdGV4dC13aGl0ZSBncmlkIGdyaWQtY29scy0xMiBqdXN0aWZ5LXNlbGYtZW5kIHB5LTEyIG1kOnB5LTE2IG14LWF1dG8gcHgtMiBtZDpweC0xMCB4bDpweC0wIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByLTAgbGc6cHItWzQ2cHhdIGNvbC1zcGFuLWZ1bGwgbWQ6Y29sLXNwYW4tNFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB4bDp0ZXh0LWp1c3RpZnkgbWQ6dGV4dC00eGwgc206dGV4dC00eGwgdGV4dC00eGwgZm9udC1ib2xkIG1kOnB5LTIgZm9udC10aGluIGZvbnQtbm9ybWFsIHNlcmlmXCI+XG4gICAgICAgICAgICBXaHkgQ2hvb3NlIFVzP1xuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIiBteC1hdXRvIHhsOm14LTAgdy0yNCB0ZXh0LWNlbnRlciBteS02IGJvcmRlci1bI2ZmNzAxMF0gYm9yZGVyLXQtNCByb3VuZGVkLXItZnVsbFwiIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZ3JheS00MDAgdGV4dC1jZW50ZXIgbWQ6dGV4dC1qdXN0aWZ5XCI+XG4gICAgICAgICAgICBPdXIgYXN0cm9sb2dpY2FsIGFkdmljZSBhcmUgYmFzZWQgb24gdGhlIGFuY2llbnQgc3lzdGVtIG9mIFZlZGljXG4gICAgICAgICAgICBhc3Ryb2xvZ3ksIHdoaWNoIGlzIHRoZSBtb3N0IGF1dGhlbnRpYywgdGltZS10ZXN0ZWQsIGFuZCB0cnVzdHdvcnRoeVxuICAgICAgICAgICAgYXN0cm9sb2dpY2FsIHN5c3RlbSBpbiB0aGUgd29ybGQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZ3JpZCBncmlkLWNvbHMtMTIgY29sLXNwYW4tZnVsbCBtZDpjb2wtc3Bhbi04IGdhcC0yIHB0LTggbWQ6cHQtMFwiPlxuXG4gICAgICAgIHt3aHlVcy5tYXAoKGNsaWVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgY29sLXNwYW4tNiBtZDpjb2wtc3Bhbi0zXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmFzX251bWJlcn0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYXNfd2h5Y2hvb3NlX2JveF9zcGFufT5cbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uc3BhbiByZWY9e2NsaWVudENvdW50LmN1cnJlbnRbaW5kZXhdfSB3aGlsZUluVmlldz17KCk9PlxuICAgICAgICAgICAgICAgICAgICB7YW5pbWF0aW9uQ2xpZW50Q291bnQoY2xpZW50LnZhbHVlLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgIHtjbGllbnQudmFsdWV9XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzaGFwZX0gYWx0PVwiYXN0cm9sb2dpY2FsIGxvZ29cIiAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmFzX3doeWNob29zZV9ib3hfaDR9PlxuICAgICAgICAgICAgICAgIHtjbGllbnQudGV4dH1cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2h5VXM7XG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlRWZmZWN0IiwiUmVhY3QiLCJzaGFwZSIsImFuaW1hdGUiLCJtb3Rpb24iLCJzdHlsZXMiLCJJbWFnZSIsIndoeVVzIiwiV2h5VXMiLCJ5ZWFyc0NvdW50IiwiYW5pbWF0aW9uWWVhcnNDb3VudCIsImNvdW50IiwiY3VycmVudCIsImlubmVyVGV4dCIsImR1cmF0aW9uIiwib25VcGRhdGUiLCJ2IiwiTWF0aCIsImZsb29yIiwiU3VjY2Vzc0NvdW50IiwiYW5pbWF0aW9uU3VjY2Vzc0NvdW50IiwiaG9yb3Njb3BlQ291bnQiLCJhbmltYXRpb25Ib3Jvc2NvcGVDb3VudCIsImNsaWVudENvdW50IiwibWFwIiwicmVmIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJ0eXBlIiwiYW5pbWF0aW9uQ2xpZW50Q291bnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImhyIiwicCIsImNsaWVudCIsInNwYW4iLCJhc19udW1iZXIiLCJhc193aHljaG9vc2VfYm94X3NwYW4iLCJ3aGlsZUluVmlldyIsInNyYyIsImFsdCIsImg0IiwiYXNfd2h5Y2hvb3NlX2JveF9oNCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/WhyUs.js\n"));

/***/ })

});