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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_svg_shape_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/images/svg/shape.svg */ \"./public/images/svg/shape.svg\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles_whyus_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/whyus.module.css */ \"./styles/whyus.module.css\");\n/* harmony import */ var _styles_whyus_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_whyus_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant */ \"./constant/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar WhyUs = function() {\n    _s();\n    var _s1 = $RefreshSig$();\n    var yearsCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var animationYearsCount = function() {\n        var count = +yearsCount.current.innerText;\n        (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.animate)(0, 15, {\n            duration: 1,\n            onUpdate: function(v) {\n                yearsCount.current.innerText = Math.floor(v);\n            }\n        });\n    };\n    var SuccessCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var animationSuccessCount = function() {\n        var count = +SuccessCount.current.innerText;\n        (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.animate)(0, 80, {\n            duration: 1,\n            onUpdate: function(v) {\n                SuccessCount.current.innerText = Math.floor(v);\n            }\n        });\n    };\n    var horoscopeCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var animationHoroscopeCount = function() {\n        var count = +horoscopeCount.current.innerText;\n        (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.animate)(0, 800, {\n            duration: 1,\n            onUpdate: function(v) {\n                horoscopeCount.current.innerText = Math.floor(v);\n            }\n        });\n    };\n    var clientCount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    clientCount.current = _constant__WEBPACK_IMPORTED_MODULE_4__.whyUs.map(_s1(function(ref, index) {\n        _s1();\n        console.log(\"ref\", ref);\n        clientCount.current[index] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(ref.value);\n    }, \"J9pzIsEOVEZ74gjFtMkCj+5Po7s=\"));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"eff\", clientCount.current.value);\n    }, []);\n    // const animationClientCount = (value,index) => {\n    //   // const count = value;\n    //   animate(0, value, {\n    //     duration: 3,\n    //     onUpdate: (v) => {\n    //       clientCount[index].current.innerText = Math.floor(v);\n    //     },\n    //   });\n    // };\n    // useEffect(() => {\n    // animationYearsCount();\n    //   console.log('count', whyUs[0].value);\n    // },[whyUs]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-[1240px] bg-[#031d2e] text-white grid grid-cols-12 justify-self-end py-12 md:py-16 mx-auto px-2 md:px-10 xl:px-0 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pr-0 lg:pr-[46px] col-span-full md:col-span-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-center xl:text-justify md:text-4xl sm:text-4xl text-4xl font-bold md:py-2 font-thin font-normal serif\",\n                            children: \"Why Choose Us?\"\n                        }, void 0, false, {\n                            fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                            className: \" mx-auto xl:mx-0 w-24 text-center my-6 border-[#ff7010] border-t-4 rounded-r-full\"\n                        }, void 0, false, {\n                            fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-bold text-gray-400 text-center md:text-justify\",\n                            children: \"Our astrological advice are based on the ancient system of Vedic astrology, which is the most authentic, time-tested, and trustworthy astrological system in the world.\"\n                        }, void 0, false, {\n                            fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inline-grid grid-cols-12 col-span-full md:col-span-8 gap-2 pt-8 md:pt-0\",\n                    children: _constant__WEBPACK_IMPORTED_MODULE_4__.whyUs.map(function(client, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center col-span-6 md:col-span-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_whyus_module_css__WEBPACK_IMPORTED_MODULE_6___default().as_number),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_styles_whyus_module_css__WEBPACK_IMPORTED_MODULE_6___default().as_whychoose_box_span),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.span, {\n                                                    ref: clientCount.current[index],\n                                                    whileInView: function() {\n                                                        animationClientCount(client.value, index);\n                                                    },\n                                                    children: client.value\n                                                }, void 0, false, {\n                                                    fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                \"+\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: _public_images_svg_shape_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                            alt: \"astrological logo\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: (_styles_whyus_module_css__WEBPACK_IMPORTED_MODULE_6___default().as_whychoose_box_h4),\n                                    children: client.text\n                                }, void 0, false, {\n                                    fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/uday/Documents/RJK/components/WhyUs.js\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(WhyUs, \"xJDyNAW4QjLYXAyPQuthx2Fcvy0=\");\n_c = WhyUs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WhyUs);\nvar _c;\n$RefreshReg$(_c, \"WhyUs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaHlVcy5qcz82MzM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZix1c2VFZmZlY3QsIFJlYWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc2hhcGUgZnJvbSBcIi4uL3B1YmxpYy9pbWFnZXMvc3ZnL3NoYXBlLnN2Z1wiO1xuaW1wb3J0IHsgYW5pbWF0ZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3doeXVzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB3aHlVcyB9IGZyb20gXCIuLi9jb25zdGFudFwiO1xuXG5cbmNvbnN0IFdoeVVzID0gKCkgPT4ge1xuICBjb25zdCB5ZWFyc0NvdW50ID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGFuaW1hdGlvblllYXJzQ291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSAreWVhcnNDb3VudC5jdXJyZW50LmlubmVyVGV4dDtcbiAgICBhbmltYXRlKDAsIDE1LCB7XG4gICAgICBkdXJhdGlvbjogMSxcbiAgICAgIG9uVXBkYXRlOiAodikgPT4ge1xuICAgICAgICB5ZWFyc0NvdW50LmN1cnJlbnQuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcih2KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgU3VjY2Vzc0NvdW50ID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGFuaW1hdGlvblN1Y2Nlc3NDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb3VudCA9ICtTdWNjZXNzQ291bnQuY3VycmVudC5pbm5lclRleHQ7XG4gICAgYW5pbWF0ZSgwLCA4MCwge1xuICAgICAgZHVyYXRpb246IDEsXG4gICAgICBvblVwZGF0ZTogKHYpID0+IHtcbiAgICAgICAgU3VjY2Vzc0NvdW50LmN1cnJlbnQuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcih2KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaG9yb3Njb3BlQ291bnQgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgYW5pbWF0aW9uSG9yb3Njb3BlQ291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSAraG9yb3Njb3BlQ291bnQuY3VycmVudC5pbm5lclRleHQ7XG4gICAgYW5pbWF0ZSgwLCA4MDAsIHtcbiAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgb25VcGRhdGU6ICh2KSA9PiB7XG4gICAgICAgIGhvcm9zY29wZUNvdW50LmN1cnJlbnQuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcih2KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2xpZW50Q291bnQgPSB1c2VSZWYoW10pO1xuICBcblxuICBjbGllbnRDb3VudC5jdXJyZW50ID0gd2h5VXMubWFwKFxuICAgIChyZWYsIGluZGV4KSA9PiAgIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVmXCIscmVmKVxuICAgICAgY2xpZW50Q291bnQuY3VycmVudFtpbmRleF0gPSB1c2VSZWYocmVmLnZhbHVlKVxuICAgIH1cbiAgICApXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJlZmZcIixjbGllbnRDb3VudC5jdXJyZW50LnZhbHVlKTtcbiAgICB9LFtdKTtcblxuICAvLyBjb25zdCBhbmltYXRpb25DbGllbnRDb3VudCA9ICh2YWx1ZSxpbmRleCkgPT4ge1xuICAvLyAgIC8vIGNvbnN0IGNvdW50ID0gdmFsdWU7XG4gIC8vICAgYW5pbWF0ZSgwLCB2YWx1ZSwge1xuICAvLyAgICAgZHVyYXRpb246IDMsXG4gIC8vICAgICBvblVwZGF0ZTogKHYpID0+IHtcbiAgLy8gICAgICAgY2xpZW50Q291bnRbaW5kZXhdLmN1cnJlbnQuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcih2KTtcbiAgLy8gICAgIH0sXG4gIC8vICAgfSk7XG4gIC8vIH07XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBhbmltYXRpb25ZZWFyc0NvdW50KCk7XG4gIC8vICAgY29uc29sZS5sb2coJ2NvdW50Jywgd2h5VXNbMF0udmFsdWUpO1xuICAvLyB9LFt3aHlVc10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzEyNDBweF0gYmctWyMwMzFkMmVdIHRleHQtd2hpdGUgZ3JpZCBncmlkLWNvbHMtMTIganVzdGlmeS1zZWxmLWVuZCBweS0xMiBtZDpweS0xNiBteC1hdXRvIHB4LTIgbWQ6cHgtMTAgeGw6cHgtMCBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwci0wIGxnOnByLVs0NnB4XSBjb2wtc3Bhbi1mdWxsIG1kOmNvbC1zcGFuLTRcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgeGw6dGV4dC1qdXN0aWZ5IG1kOnRleHQtNHhsIHNtOnRleHQtNHhsIHRleHQtNHhsIGZvbnQtYm9sZCBtZDpweS0yIGZvbnQtdGhpbiBmb250LW5vcm1hbCBzZXJpZlwiPlxuICAgICAgICAgICAgV2h5IENob29zZSBVcz9cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCIgbXgtYXV0byB4bDpteC0wIHctMjQgdGV4dC1jZW50ZXIgbXktNiBib3JkZXItWyNmZjcwMTBdIGJvcmRlci10LTQgcm91bmRlZC1yLWZ1bGxcIiAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwIHRleHQtY2VudGVyIG1kOnRleHQtanVzdGlmeVwiPlxuICAgICAgICAgICAgT3VyIGFzdHJvbG9naWNhbCBhZHZpY2UgYXJlIGJhc2VkIG9uIHRoZSBhbmNpZW50IHN5c3RlbSBvZiBWZWRpY1xuICAgICAgICAgICAgYXN0cm9sb2d5LCB3aGljaCBpcyB0aGUgbW9zdCBhdXRoZW50aWMsIHRpbWUtdGVzdGVkLCBhbmQgdHJ1c3R3b3J0aHlcbiAgICAgICAgICAgIGFzdHJvbG9naWNhbCBzeXN0ZW0gaW4gdGhlIHdvcmxkLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWdyaWQgZ3JpZC1jb2xzLTEyIGNvbC1zcGFuLWZ1bGwgbWQ6Y29sLXNwYW4tOCBnYXAtMiBwdC04IG1kOnB0LTBcIj5cblxuICAgICAgICB7d2h5VXMubWFwKChjbGllbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGNvbC1zcGFuLTYgbWQ6Y29sLXNwYW4tM1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hc19udW1iZXJ9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmFzX3doeWNob29zZV9ib3hfc3Bhbn0+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLnNwYW4gcmVmPXtjbGllbnRDb3VudC5jdXJyZW50W2luZGV4XX0gd2hpbGVJblZpZXc9eygpPT5cbiAgICAgICAgICAgICAgICAgICAge2FuaW1hdGlvbkNsaWVudENvdW50KGNsaWVudC52YWx1ZSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICB7Y2xpZW50LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17c2hhcGV9IGFsdD1cImFzdHJvbG9naWNhbCBsb2dvXCIgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5hc193aHljaG9vc2VfYm94X2g0fT5cbiAgICAgICAgICAgICAgICB7Y2xpZW50LnRleHR9XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdoeVVzO1xuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZUVmZmVjdCIsIlJlYWN0Iiwic2hhcGUiLCJhbmltYXRlIiwibW90aW9uIiwic3R5bGVzIiwiSW1hZ2UiLCJ3aHlVcyIsIldoeVVzIiwieWVhcnNDb3VudCIsImFuaW1hdGlvblllYXJzQ291bnQiLCJjb3VudCIsImN1cnJlbnQiLCJpbm5lclRleHQiLCJkdXJhdGlvbiIsIm9uVXBkYXRlIiwidiIsIk1hdGgiLCJmbG9vciIsIlN1Y2Nlc3NDb3VudCIsImFuaW1hdGlvblN1Y2Nlc3NDb3VudCIsImhvcm9zY29wZUNvdW50IiwiYW5pbWF0aW9uSG9yb3Njb3BlQ291bnQiLCJjbGllbnRDb3VudCIsIm1hcCIsInJlZiIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJociIsInAiLCJjbGllbnQiLCJzcGFuIiwiYXNfbnVtYmVyIiwiYXNfd2h5Y2hvb3NlX2JveF9zcGFuIiwid2hpbGVJblZpZXciLCJhbmltYXRpb25DbGllbnRDb3VudCIsInNyYyIsImFsdCIsImg0IiwiYXNfd2h5Y2hvb3NlX2JveF9oNCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/WhyUs.js\n"));

/***/ })

});