"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/wagmi";
exports.ids = ["vendor-chunks/wagmi"];
exports.modules = {

/***/ "(ssr)/./node_modules/wagmi/dist/esm/context.js":
/*!************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/context.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WagmiContext: () => (/* binding */ WagmiContext),\n/* harmony export */   WagmiProvider: () => (/* binding */ WagmiProvider)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _hydrate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hydrate.js */ \"(ssr)/./node_modules/wagmi/dist/esm/hydrate.js\");\n/* __next_internal_client_entry_do_not_use__ WagmiContext,WagmiProvider auto */ \n\nconst WagmiContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);\nfunction WagmiProvider(parameters) {\n    const { children, config } = parameters;\n    const props = {\n        value: config\n    };\n    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_hydrate_js__WEBPACK_IMPORTED_MODULE_1__.Hydrate, parameters, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WagmiContext.Provider, props, children));\n} //# sourceMappingURL=context.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vY29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O2dGQUdvRDtBQUNkO0FBRS9CLE1BQU1HLDZCQUFlSCxvREFBQUEsQ0FFMUJJLFdBQVU7QUFRTixTQUFVQyxjQUNkQyxVQUF1RDtJQUV2RCxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFLEdBQUdGO0lBRTdCLE1BQU1HLFFBQVE7UUFBRUMsT0FBT0Y7SUFBTTtJQUM3QixxQkFBT1Asb0RBQUFBLENBQ0xDLGdEQUFBQSxFQUNBSSwwQkFDQUwsb0RBQUFBLENBQWNFLGFBQWFRLFFBQVEsRUFBRUYsT0FBT0Y7QUFFaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb290c3RvY2tmdW4vLi4vLi4vc3JjL2NvbnRleHQudHM/YmY2ZiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiY3JlYXRlRWxlbWVudCIsIkh5ZHJhdGUiLCJXYWdtaUNvbnRleHQiLCJ1bmRlZmluZWQiLCJXYWdtaVByb3ZpZGVyIiwicGFyYW1ldGVycyIsImNoaWxkcmVuIiwiY29uZmlnIiwicHJvcHMiLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/context.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wagmi/dist/esm/errors/base.js":
/*!****************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/errors/base.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BaseError: () => (/* binding */ BaseError)\n/* harmony export */ });\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wagmi/core */ \"(ssr)/./node_modules/@wagmi/core/dist/esm/errors/base.js\");\n/* harmony import */ var _utils_getVersion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getVersion.js */ \"(ssr)/./node_modules/wagmi/dist/esm/utils/getVersion.js\");\n\n\nclass BaseError extends _wagmi_core__WEBPACK_IMPORTED_MODULE_0__.BaseError {\n    constructor() {\n        super(...arguments);\n        Object.defineProperty(this, \"name\", {\n            enumerable: true,\n            configurable: true,\n            writable: true,\n            value: 'WagmiError'\n        });\n    }\n    get docsBaseUrl() {\n        return 'https://wagmi.sh/react';\n    }\n    get version() {\n        return (0,_utils_getVersion_js__WEBPACK_IMPORTED_MODULE_1__.getVersion)();\n    }\n}\n//# sourceMappingURL=base.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vZXJyb3JzL2Jhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBQ0Q7QUFDN0Msd0JBQXdCLGtEQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdFQUFVO0FBQ3pCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jvb3RzdG9ja2Z1bi8uL25vZGVfbW9kdWxlcy93YWdtaS9kaXN0L2VzbS9lcnJvcnMvYmFzZS5qcz84OGQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFcnJvciBhcyBDb3JlRXJyb3IgfSBmcm9tICdAd2FnbWkvY29yZSc7XG5pbXBvcnQgeyBnZXRWZXJzaW9uIH0gZnJvbSAnLi4vdXRpbHMvZ2V0VmVyc2lvbi5qcyc7XG5leHBvcnQgY2xhc3MgQmFzZUVycm9yIGV4dGVuZHMgQ29yZUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJ1dhZ21pRXJyb3InXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgZG9jc0Jhc2VVcmwoKSB7XG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly93YWdtaS5zaC9yZWFjdCc7XG4gICAgfVxuICAgIGdldCB2ZXJzaW9uKCkge1xuICAgICAgICByZXR1cm4gZ2V0VmVyc2lvbigpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2UuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/errors/base.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wagmi/dist/esm/errors/context.js":
/*!*******************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/errors/context.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WagmiProviderNotFoundError: () => (/* binding */ WagmiProviderNotFoundError)\n/* harmony export */ });\n/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ \"(ssr)/./node_modules/wagmi/dist/esm/errors/base.js\");\n\nclass WagmiProviderNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {\n    constructor() {\n        super('`useConfig` must be used within `WagmiProvider`.', {\n            docsPath: '/api/WagmiProvider',\n        });\n        Object.defineProperty(this, \"name\", {\n            enumerable: true,\n            configurable: true,\n            writable: true,\n            value: 'WagmiProviderNotFoundError'\n        });\n    }\n}\n//# sourceMappingURL=context.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vZXJyb3JzL2NvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0M7QUFDL0IseUNBQXlDLCtDQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jvb3RzdG9ja2Z1bi8uL25vZGVfbW9kdWxlcy93YWdtaS9kaXN0L2VzbS9lcnJvcnMvY29udGV4dC5qcz8wOGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFcnJvciB9IGZyb20gJy4vYmFzZS5qcyc7XG5leHBvcnQgY2xhc3MgV2FnbWlQcm92aWRlck5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBCYXNlRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignYHVzZUNvbmZpZ2AgbXVzdCBiZSB1c2VkIHdpdGhpbiBgV2FnbWlQcm92aWRlcmAuJywge1xuICAgICAgICAgICAgZG9jc1BhdGg6ICcvYXBpL1dhZ21pUHJvdmlkZXInLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJ1dhZ21pUHJvdmlkZXJOb3RGb3VuZEVycm9yJ1xuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250ZXh0LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/errors/context.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wagmi/dist/esm/hooks/useAccount.js":
/*!*********************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/hooks/useAccount.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAccount: () => (/* binding */ useAccount)\n/* harmony export */ });\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wagmi/core */ \"(ssr)/./node_modules/@wagmi/core/dist/esm/actions/watchAccount.js\");\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wagmi/core */ \"(ssr)/./node_modules/@wagmi/core/dist/esm/actions/getAccount.js\");\n/* harmony import */ var _useConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useConfig.js */ \"(ssr)/./node_modules/wagmi/dist/esm/hooks/useConfig.js\");\n/* harmony import */ var _useSyncExternalStoreWithTracked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useSyncExternalStoreWithTracked.js */ \"(ssr)/./node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js\");\n/* __next_internal_client_entry_do_not_use__ useAccount auto */ \n\n\n/** https://wagmi.sh/react/api/hooks/useAccount */ function useAccount(parameters = {}) {\n    const config = (0,_useConfig_js__WEBPACK_IMPORTED_MODULE_0__.useConfig)(parameters);\n    return (0,_useSyncExternalStoreWithTracked_js__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStoreWithTracked)((onChange)=>(0,_wagmi_core__WEBPACK_IMPORTED_MODULE_2__.watchAccount)(config, {\n            onChange\n        }), ()=>(0,_wagmi_core__WEBPACK_IMPORTED_MODULE_3__.getAccount)(config));\n} //# sourceMappingURL=useAccount.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vaG9va3MvdXNlQWNjb3VudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztnRUFRb0I7QUFHc0I7QUFDNEM7QUFRdEYsbURBQ00sU0FBVUksV0FDZEMsYUFBMkMsRUFBRTtJQUU3QyxNQUFNQyxTQUFTSix3REFBQUEsQ0FBVUc7SUFFekIsT0FBT0Ysb0dBQUFBLENBQ0wsQ0FBQ0ksV0FBYU4seURBQUFBLENBQWFLLFFBQVE7WUFBRUM7UUFBUSxJQUM3QyxJQUFNUCx1REFBQUEsQ0FBV007QUFFckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb290c3RvY2tmdW4vLi4vLi4vLi4vc3JjL2hvb2tzL3VzZUFjY291bnQudHM/NjhjYiJdLCJuYW1lcyI6WyJnZXRBY2NvdW50Iiwid2F0Y2hBY2NvdW50IiwidXNlQ29uZmlnIiwidXNlU3luY0V4dGVybmFsU3RvcmVXaXRoVHJhY2tlZCIsInVzZUFjY291bnQiLCJwYXJhbWV0ZXJzIiwiY29uZmlnIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/hooks/useAccount.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wagmi/dist/esm/hooks/useChainId.js":
/*!*********************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/hooks/useChainId.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useChainId: () => (/* binding */ useChainId)\n/* harmony export */ });\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wagmi/core */ \"(ssr)/./node_modules/@wagmi/core/dist/esm/actions/watchChainId.js\");\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wagmi/core */ \"(ssr)/./node_modules/@wagmi/core/dist/esm/actions/getChainId.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _useConfig_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConfig.js */ \"(ssr)/./node_modules/wagmi/dist/esm/hooks/useConfig.js\");\n/* __next_internal_client_entry_do_not_use__ useChainId auto */ \n\n\n/** https://wagmi.sh/react/api/hooks/useChainId */ function useChainId(parameters = {}) {\n    const config = (0,_useConfig_js__WEBPACK_IMPORTED_MODULE_1__.useConfig)(parameters);\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)((onChange)=>(0,_wagmi_core__WEBPACK_IMPORTED_MODULE_2__.watchChainId)(config, {\n            onChange\n        }), ()=>(0,_wagmi_core__WEBPACK_IMPORTED_MODULE_3__.getChainId)(config), ()=>(0,_wagmi_core__WEBPACK_IMPORTED_MODULE_3__.getChainId)(config));\n} //# sourceMappingURL=useChainId.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vaG9va3MvdXNlQ2hhaW5JZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztnRUFRb0I7QUFDd0I7QUFHRjtBQVExQyxtREFDTSxTQUFVSSxXQUNkQyxhQUEyQyxFQUFFO0lBRTdDLE1BQU1DLFNBQVNILHdEQUFBQSxDQUFVRTtJQUV6QixPQUFPSCwyREFBQUEsQ0FDTCxDQUFDSyxXQUFhTix5REFBQUEsQ0FBYUssUUFBUTtZQUFFQztRQUFRLElBQzdDLElBQU1QLHVEQUFBQSxDQUFXTSxTQUNqQixJQUFNTix1REFBQUEsQ0FBV007QUFFckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb290c3RvY2tmdW4vLi4vLi4vLi4vc3JjL2hvb2tzL3VzZUNoYWluSWQudHM/OGFjYyJdLCJuYW1lcyI6WyJnZXRDaGFpbklkIiwid2F0Y2hDaGFpbklkIiwidXNlU3luY0V4dGVybmFsU3RvcmUiLCJ1c2VDb25maWciLCJ1c2VDaGFpbklkIiwicGFyYW1ldGVycyIsImNvbmZpZyIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/hooks/useChainId.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wagmi/dist/esm/hooks/useConfig.js":
/*!********************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/hooks/useConfig.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useConfig: () => (/* binding */ useConfig)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context.js */ \"(ssr)/./node_modules/wagmi/dist/esm/context.js\");\n/* harmony import */ var _errors_context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors/context.js */ \"(ssr)/./node_modules/wagmi/dist/esm/errors/context.js\");\n/* __next_internal_client_entry_do_not_use__ useConfig auto */ \n\n\n/** https://wagmi.sh/react/api/hooks/useConfig */ function useConfig(parameters = {}) {\n    const config = parameters.config ?? (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_js__WEBPACK_IMPORTED_MODULE_1__.WagmiContext);\n    if (!config) throw new _errors_context_js__WEBPACK_IMPORTED_MODULE_2__.WagmiProviderNotFoundError();\n    return config;\n} //# sourceMappingURL=useConfig.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vaG9va3MvdXNlQ29uZmlnLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7K0RBR2tDO0FBRVU7QUFDcUI7QUFRakUsa0RBQ00sU0FBVUcsVUFDZEMsYUFBMEMsRUFBRTtJQUU1QyxNQUFNQyxTQUFTRCxXQUFXQyxNQUFNLElBQUlMLGlEQUFBQSxDQUFXQyxxREFBQUE7SUFDL0MsSUFBSSxDQUFDSSxRQUFRLE1BQU0sSUFBSUgsMEVBQUFBO0lBQ3ZCLE9BQU9HO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb290c3RvY2tmdW4vLi4vLi4vLi4vc3JjL2hvb2tzL3VzZUNvbmZpZy50cz9lYTZlIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJXYWdtaUNvbnRleHQiLCJXYWdtaVByb3ZpZGVyTm90Rm91bmRFcnJvciIsInVzZUNvbmZpZyIsInBhcmFtZXRlcnMiLCJjb25maWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/hooks/useConfig.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wagmi/dist/esm/hooks/useReadContract.js":
/*!**************************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/hooks/useReadContract.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useReadContract: () => (/* binding */ useReadContract)\n/* harmony export */ });\n/* harmony import */ var _wagmi_core_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wagmi/core/query */ \"(ssr)/./node_modules/@wagmi/core/dist/esm/query/readContract.js\");\n/* harmony import */ var _wagmi_core_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wagmi/core/query */ \"(ssr)/./node_modules/@wagmi/core/dist/esm/query/utils.js\");\n/* harmony import */ var _utils_query_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/query.js */ \"(ssr)/./node_modules/wagmi/dist/esm/utils/query.js\");\n/* harmony import */ var _useChainId_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useChainId.js */ \"(ssr)/./node_modules/wagmi/dist/esm/hooks/useChainId.js\");\n/* harmony import */ var _useConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useConfig.js */ \"(ssr)/./node_modules/wagmi/dist/esm/hooks/useConfig.js\");\n/* __next_internal_client_entry_do_not_use__ useReadContract auto */ \n\n\n\n/** https://wagmi.sh/react/api/hooks/useReadContract */ function useReadContract(parameters = {}) {\n    const { abi, address, functionName, query = {} } = parameters;\n    // @ts-ignore\n    const code = parameters.code;\n    const config = (0,_useConfig_js__WEBPACK_IMPORTED_MODULE_0__.useConfig)(parameters);\n    const chainId = (0,_useChainId_js__WEBPACK_IMPORTED_MODULE_1__.useChainId)({\n        config\n    });\n    const options = (0,_wagmi_core_query__WEBPACK_IMPORTED_MODULE_2__.readContractQueryOptions)(config, {\n        ...parameters,\n        chainId: parameters.chainId ?? chainId\n    });\n    const enabled = Boolean((address || code) && abi && functionName && (query.enabled ?? true));\n    return (0,_utils_query_js__WEBPACK_IMPORTED_MODULE_3__.useQuery)({\n        ...query,\n        ...options,\n        enabled,\n        structuralSharing: query.structuralSharing ?? _wagmi_core_query__WEBPACK_IMPORTED_MODULE_4__.structuralSharing\n    });\n} //# sourceMappingURL=useReadContract.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vaG9va3MvdXNlUmVhZENvbnRyYWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztxRUFlMEI7QUFJMkM7QUFDekI7QUFDRjtBQXdDMUMsd0RBQ00sU0FBVUssZ0JBT2RDLGFBTUksRUFBUztJQUViLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsUUFBUSxFQUFFLEVBQUUsR0FBR0o7SUFDbkQsYUFBYTtJQUNiLE1BQU1LLE9BQU9MLFdBQVdLLElBQXVCO0lBRS9DLE1BQU1DLFNBQVNSLHdEQUFBQSxDQUFVRTtJQUN6QixNQUFNTyxVQUFVViwwREFBQUEsQ0FBVztRQUFFUztJQUFNO0lBRW5DLE1BQU1FLFVBQVVkLDJFQUFBQSxDQUNkWSxRQUNBO1FBQUUsR0FBSU4sVUFBa0I7UUFBRU8sU0FBU1AsV0FBV08sT0FBTyxJQUFJQTtJQUFPO0lBRWxFLE1BQU1FLFVBQVVDLFFBQ2QsQ0FBQ1IsV0FBV0csSUFBQSxLQUFTSixPQUFPRSxnQkFBaUJDLENBQUFBLE1BQU1LLE9BQU8sSUFBSTtJQUdoRSxPQUFPYix5REFBQUEsQ0FBUztRQUNkLEdBQUdRLEtBQUs7UUFDUixHQUFHSSxPQUFPO1FBQ1ZDO1FBQ0FkLG1CQUFtQlMsTUFBTVQsaUJBQWlCLElBQUlBLGdFQUFBQTs7QUFFbEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb290c3RvY2tmdW4vLi4vLi4vLi4vc3JjL2hvb2tzL3VzZVJlYWRDb250cmFjdC50cz83NGIzIl0sIm5hbWVzIjpbInJlYWRDb250cmFjdFF1ZXJ5T3B0aW9ucyIsInN0cnVjdHVyYWxTaGFyaW5nIiwidXNlUXVlcnkiLCJ1c2VDaGFpbklkIiwidXNlQ29uZmlnIiwidXNlUmVhZENvbnRyYWN0IiwicGFyYW1ldGVycyIsImFiaSIsImFkZHJlc3MiLCJmdW5jdGlvbk5hbWUiLCJxdWVyeSIsImNvZGUiLCJjb25maWciLCJjaGFpbklkIiwib3B0aW9ucyIsImVuYWJsZWQiLCJCb29sZWFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/hooks/useReadContract.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js":
/*!******************************************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useSyncExternalStoreWithTracked: () => (/* binding */ useSyncExternalStoreWithTracked)\n/* harmony export */ });\n/* harmony import */ var _wagmi_core_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wagmi/core/internal */ \"(ssr)/./node_modules/@wagmi/core/dist/esm/utils/deepEqual.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-sync-external-store/shim/with-selector.js */ \"(ssr)/./node_modules/use-sync-external-store/shim/with-selector.js\");\n/* __next_internal_client_entry_do_not_use__ useSyncExternalStoreWithTracked auto */ \n\n\nconst isPlainObject = (obj)=>typeof obj === \"object\" && !Array.isArray(obj);\nfunction useSyncExternalStoreWithTracked(subscribe, getSnapshot, getServerSnapshot = getSnapshot, isEqual = _wagmi_core_internal__WEBPACK_IMPORTED_MODULE_2__.deepEqual) {\n    const trackedKeys = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);\n    const result = (0,use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStoreWithSelector)(subscribe, getSnapshot, getServerSnapshot, (x)=>x, (a, b)=>{\n        if (isPlainObject(a) && isPlainObject(b) && trackedKeys.current.length) {\n            for (const key of trackedKeys.current){\n                const equal = isEqual(a[key], b[key]);\n                if (!equal) return false;\n            }\n            return true;\n        }\n        return isEqual(a, b);\n    });\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{\n        if (isPlainObject(result)) {\n            const trackedResult = {\n                ...result\n            };\n            let properties = {};\n            for (const [key, value] of Object.entries(trackedResult)){\n                properties = {\n                    ...properties,\n                    [key]: {\n                        configurable: false,\n                        enumerable: true,\n                        get: ()=>{\n                            if (!trackedKeys.current.includes(key)) {\n                                trackedKeys.current.push(key);\n                            }\n                            return value;\n                        }\n                    }\n                };\n            }\n            Object.defineProperties(trackedResult, properties);\n            return trackedResult;\n        }\n        return result;\n    }, [\n        result\n    ]);\n} //# sourceMappingURL=useSyncExternalStoreWithTracked.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vaG9va3MvdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoVHJhY2tlZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O3FGQUVnRDtBQUNUO0FBQ3lEO0FBRWhHLE1BQU1JLGdCQUFnQixDQUFDQyxNQUNyQixPQUFPQSxRQUFRLFlBQVksQ0FBQ0MsTUFBTUMsT0FBTyxDQUFDRjtBQUV0QyxTQUFVRyxnQ0FJZEMsU0FBb0QsRUFDcERDLFdBQTJCLEVBQzNCQyxvQkFBeURELFdBQVcsRUFDcEVFLFVBQW1EWiwyREFBUztJQUU1RCxNQUFNYSxjQUFjWCw2Q0FBQUEsQ0FBaUIsRUFBRTtJQUN2QyxNQUFNWSxTQUFTWCwrR0FBQUEsQ0FDYk0sV0FDQUMsYUFDQUMsbUJBQ0EsQ0FBQ0ksSUFBTUEsR0FDUCxDQUFDQyxHQUFHQztRQUNGLElBQUliLGNBQWNZLE1BQU1aLGNBQWNhLE1BQU1KLFlBQVlLLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFO1lBQ3RFLEtBQUssTUFBTUMsT0FBT1AsWUFBWUssT0FBTyxDQUFFO2dCQUNyQyxNQUFNRyxRQUFRVCxRQUNYSSxDQUEyQixDQUFDSSxJQUFJLEVBQ2hDSCxDQUEyQixDQUFDRyxJQUFJO2dCQUVuQyxJQUFJLENBQUNDLE9BQU8sT0FBTztZQUNyQjtZQUNBLE9BQU87UUFDVDtRQUNBLE9BQU9ULFFBQVFJLEdBQUdDO0lBQ3BCO0lBR0YsT0FBT2hCLDhDQUFBQSxDQUFRO1FBQ2IsSUFBSUcsY0FBY1UsU0FBUztZQUN6QixNQUFNUSxnQkFBZ0I7Z0JBQUUsR0FBR1IsTUFBTTtZQUFBO1lBQ2pDLElBQUlTLGFBQWE7WUFDakIsS0FBSyxNQUFNLENBQUNILEtBQUtJLE1BQU0sSUFBSUMsT0FBT0MsT0FBTyxDQUN2Q0osZUFDQztnQkFDREMsYUFBYTtvQkFDWCxHQUFHQSxVQUFVO29CQUNiLENBQUNILElBQUksRUFBRTt3QkFDTE8sY0FBYzt3QkFDZEMsWUFBWTt3QkFDWkMsS0FBSzs0QkFDSCxJQUFJLENBQUNoQixZQUFZSyxPQUFPLENBQUNZLFFBQVEsQ0FBQ1YsTUFBTTtnQ0FDdENQLFlBQVlLLE9BQU8sQ0FBQ2EsSUFBSSxDQUFDWDs0QkFDM0I7NEJBQ0EsT0FBT0k7d0JBQ1Q7OztZQUdOO1lBQ0FDLE9BQU9PLGdCQUFnQixDQUFDVixlQUFlQztZQUN2QyxPQUFPRDtRQUNUO1FBRUEsT0FBT1I7SUFDVCxHQUFHO1FBQUNBO0tBQU87QUFDYiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jvb3RzdG9ja2Z1bi8uLi8uLi8uLi9zcmMvaG9va3MvdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoVHJhY2tlZC50cz9iYTg0Il0sIm5hbWVzIjpbImRlZXBFcXVhbCIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciIsImlzUGxhaW5PYmplY3QiLCJvYmoiLCJBcnJheSIsImlzQXJyYXkiLCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhUcmFja2VkIiwic3Vic2NyaWJlIiwiZ2V0U25hcHNob3QiLCJnZXRTZXJ2ZXJTbmFwc2hvdCIsImlzRXF1YWwiLCJ0cmFja2VkS2V5cyIsInJlc3VsdCIsIngiLCJhIiwiYiIsImN1cnJlbnQiLCJsZW5ndGgiLCJrZXkiLCJlcXVhbCIsInRyYWNrZWRSZXN1bHQiLCJwcm9wZXJ0aWVzIiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsImluY2x1ZGVzIiwicHVzaCIsImRlZmluZVByb3BlcnRpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wagmi/dist/esm/hydrate.js":
/*!************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/hydrate.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Hydrate: () => (/* binding */ Hydrate)\n/* harmony export */ });\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wagmi/core */ \"(ssr)/./node_modules/@wagmi/core/dist/esm/hydrate.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ Hydrate auto */ \n\nfunction Hydrate(parameters) {\n    const { children, config, initialState, reconnectOnMount = true } = parameters;\n    const { onMount } = (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_1__.hydrate)(config, {\n        initialState,\n        reconnectOnMount\n    });\n    // Hydrate for non-SSR\n    if (!config._internal.ssr) onMount();\n    // Hydrate for SSR\n    const active = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);\n    // biome-ignore lint/correctness/useExhaustiveDependencies: `queryKey` not required\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (!active.current) return;\n        if (!config._internal.ssr) return;\n        onMount();\n        return ()=>{\n            active.current = false;\n        };\n    }, []);\n    return children;\n} //# sourceMappingURL=hydrate.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vaHlkcmF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7NkRBRXdFO0FBQ1o7QUFRdEQsU0FBVUcsUUFBUUMsVUFBaUQ7SUFDdkUsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxtQkFBbUIsSUFBSSxFQUFFLEdBQUdKO0lBRXBFLE1BQU0sRUFBRUssT0FBTyxFQUFFLEdBQUdULG9EQUFBQSxDQUFRTSxRQUFRO1FBQ2xDQztRQUNBQzs7SUFHRixzQkFBc0I7SUFDdEIsSUFBSSxDQUFDRixPQUFPSSxTQUFTLENBQUNDLEdBQUcsRUFBRUY7SUFFM0Isa0JBQWtCO0lBQ2xCLE1BQU1HLFNBQVNWLDZDQUFBQSxDQUFPO0lBQ3RCLG1GQUFtRjtJQUNuRkQsZ0RBQUFBLENBQVU7UUFDUixJQUFJLENBQUNXLE9BQU9DLE9BQU8sRUFBRTtRQUNyQixJQUFJLENBQUNQLE9BQU9JLFNBQVMsQ0FBQ0MsR0FBRyxFQUFFO1FBQzNCRjtRQUNBLE9BQU87WUFDTEcsT0FBT0MsT0FBTyxHQUFHO1FBQ25CO0lBQ0YsR0FBRyxFQUFFO0lBRUwsT0FBT1I7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jvb3RzdG9ja2Z1bi8uLi8uLi9zcmMvaHlkcmF0ZS50cz8yNTNiIl0sIm5hbWVzIjpbImh5ZHJhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJIeWRyYXRlIiwicGFyYW1ldGVycyIsImNoaWxkcmVuIiwiY29uZmlnIiwiaW5pdGlhbFN0YXRlIiwicmVjb25uZWN0T25Nb3VudCIsIm9uTW91bnQiLCJfaW50ZXJuYWwiLCJzc3IiLCJhY3RpdmUiLCJjdXJyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/hydrate.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wagmi/dist/esm/utils/getVersion.js":
/*!*********************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/utils/getVersion.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getVersion: () => (/* binding */ getVersion)\n/* harmony export */ });\n/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../version.js */ \"(ssr)/./node_modules/wagmi/dist/esm/version.js\");\n\nconst getVersion = () => `wagmi@${_version_js__WEBPACK_IMPORTED_MODULE_0__.version}`;\n//# sourceMappingURL=getVersion.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vdXRpbHMvZ2V0VmVyc2lvbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QztBQUNqQyxrQ0FBa0MsZ0RBQU8sQ0FBQztBQUNqRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jvb3RzdG9ja2Z1bi8uL25vZGVfbW9kdWxlcy93YWdtaS9kaXN0L2VzbS91dGlscy9nZXRWZXJzaW9uLmpzP2MxZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3ZlcnNpb24uanMnO1xuZXhwb3J0IGNvbnN0IGdldFZlcnNpb24gPSAoKSA9PiBgd2FnbWlAJHt2ZXJzaW9ufWA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZXRWZXJzaW9uLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/utils/getVersion.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wagmi/dist/esm/utils/query.js":
/*!****************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/utils/query.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useInfiniteQuery: () => (/* binding */ useInfiniteQuery),\n/* harmony export */   useMutation: () => (/* reexport safe */ _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation),\n/* harmony export */   useQuery: () => (/* binding */ useQuery)\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/react-query */ \"(ssr)/./node_modules/@tanstack/react-query/build/modern/useMutation.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"(ssr)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"(ssr)/./node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js\");\n/* harmony import */ var _wagmi_core_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wagmi/core/query */ \"(ssr)/./node_modules/@wagmi/core/dist/esm/query/utils.js\");\n\n\n\n// Adding some basic customization.\n// Ideally we don't have this function, but `import('@tanstack/react-query').useQuery` currently has some quirks where it is super hard to\n// pass down the inferred `initialData` type because of it's discriminated overload in the on `useQuery`.\nfunction useQuery(parameters) {\n    const result = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({\n        ...parameters,\n        queryKeyHashFn: _wagmi_core_query__WEBPACK_IMPORTED_MODULE_2__.hashFn, // for bigint support\n    });\n    result.queryKey = parameters.queryKey;\n    return result;\n}\n// Adding some basic customization.\nfunction useInfiniteQuery(parameters) {\n    const result = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useInfiniteQuery)({\n        ...parameters,\n        queryKeyHashFn: _wagmi_core_query__WEBPACK_IMPORTED_MODULE_2__.hashFn, // for bigint support\n    });\n    result.queryKey = parameters.queryKey;\n    return result;\n}\n//# sourceMappingURL=query.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vdXRpbHMvcXVlcnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtSTtBQUN4RjtBQUNwQjtBQUN2QjtBQUNBO0FBQ0E7QUFDTztBQUNQLG1CQUFtQiwrREFBaUI7QUFDcEM7QUFDQSx3QkFBd0IscURBQU07QUFDOUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxtQkFBbUIsdUVBQXlCO0FBQzVDO0FBQ0Esd0JBQXdCLHFEQUFNO0FBQzlCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jvb3RzdG9ja2Z1bi8uL25vZGVfbW9kdWxlcy93YWdtaS9kaXN0L2VzbS91dGlscy9xdWVyeS5qcz9iMDJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUluZmluaXRlUXVlcnkgYXMgdGFuc3RhY2tfdXNlSW5maW5pdGVRdWVyeSwgdXNlUXVlcnkgYXMgdGFuc3RhY2tfdXNlUXVlcnksIHVzZU11dGF0aW9uLCB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBoYXNoRm4gfSBmcm9tICdAd2FnbWkvY29yZS9xdWVyeSc7XG5leHBvcnQgeyB1c2VNdXRhdGlvbiB9O1xuLy8gQWRkaW5nIHNvbWUgYmFzaWMgY3VzdG9taXphdGlvbi5cbi8vIElkZWFsbHkgd2UgZG9uJ3QgaGF2ZSB0aGlzIGZ1bmN0aW9uLCBidXQgYGltcG9ydCgnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JykudXNlUXVlcnlgIGN1cnJlbnRseSBoYXMgc29tZSBxdWlya3Mgd2hlcmUgaXQgaXMgc3VwZXIgaGFyZCB0b1xuLy8gcGFzcyBkb3duIHRoZSBpbmZlcnJlZCBgaW5pdGlhbERhdGFgIHR5cGUgYmVjYXVzZSBvZiBpdCdzIGRpc2NyaW1pbmF0ZWQgb3ZlcmxvYWQgaW4gdGhlIG9uIGB1c2VRdWVyeWAuXG5leHBvcnQgZnVuY3Rpb24gdXNlUXVlcnkocGFyYW1ldGVycykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRhbnN0YWNrX3VzZVF1ZXJ5KHtcbiAgICAgICAgLi4ucGFyYW1ldGVycyxcbiAgICAgICAgcXVlcnlLZXlIYXNoRm46IGhhc2hGbiwgLy8gZm9yIGJpZ2ludCBzdXBwb3J0XG4gICAgfSk7XG4gICAgcmVzdWx0LnF1ZXJ5S2V5ID0gcGFyYW1ldGVycy5xdWVyeUtleTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLy8gQWRkaW5nIHNvbWUgYmFzaWMgY3VzdG9taXphdGlvbi5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbmZpbml0ZVF1ZXJ5KHBhcmFtZXRlcnMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB0YW5zdGFja191c2VJbmZpbml0ZVF1ZXJ5KHtcbiAgICAgICAgLi4ucGFyYW1ldGVycyxcbiAgICAgICAgcXVlcnlLZXlIYXNoRm46IGhhc2hGbiwgLy8gZm9yIGJpZ2ludCBzdXBwb3J0XG4gICAgfSk7XG4gICAgcmVzdWx0LnF1ZXJ5S2V5ID0gcGFyYW1ldGVycy5xdWVyeUtleTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/utils/query.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wagmi/dist/esm/version.js":
/*!************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/version.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   version: () => (/* binding */ version)\n/* harmony export */ });\nconst version = '2.12.20';\n//# sourceMappingURL=version.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vdmVyc2lvbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jvb3RzdG9ja2Z1bi8uL25vZGVfbW9kdWxlcy93YWdtaS9kaXN0L2VzbS92ZXJzaW9uLmpzPzk2YmEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHZlcnNpb24gPSAnMi4xMi4yMCc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12ZXJzaW9uLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/version.js\n");

/***/ })

};
;