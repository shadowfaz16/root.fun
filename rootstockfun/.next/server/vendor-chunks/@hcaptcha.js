"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@hcaptcha";
exports.ids = ["vendor-chunks/@hcaptcha"];
exports.modules = {

/***/ "(ssr)/./node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"(ssr)/./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"(ssr)/./node_modules/@babel/runtime/helpers/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"(ssr)/./node_modules/@hcaptcha/react-hcaptcha/dist/esm/utils.js\");\n\n\n\n\nvar SCRIPT_ID = 'hcaptcha-api-script-id';\nvar HCAPTCHA_LOAD_FN_NAME = 'hcaptchaOnLoad'; // Prevent loading API script multiple times\n\nvar resolveFn;\nvar rejectFn;\nvar mountPromise = new Promise(function (resolve, reject) {\n  resolveFn = resolve;\n  rejectFn = reject;\n}); // Generate hCaptcha API script\n\nvar mountCaptchaScript = function mountCaptchaScript(params) {\n  if (params === void 0) {\n    params = {};\n  }\n\n  if (document.getElementById(SCRIPT_ID)) {\n    // API was already requested\n    return mountPromise;\n  } // Create global onload callback\n\n\n  window[HCAPTCHA_LOAD_FN_NAME] = resolveFn;\n  var domain = params.apihost || \"https://js.hcaptcha.com\";\n  delete params.apihost;\n  var script = document.createElement(\"script\");\n  script.id = SCRIPT_ID;\n  script.src = domain + \"/1/api.js?render=explicit&onload=\" + HCAPTCHA_LOAD_FN_NAME;\n  script.async = true;\n\n  script.onerror = function (event) {\n    return rejectFn('script-error');\n  };\n\n  var query = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.generateQuery)(params);\n  script.src += query !== \"\" ? \"&\" + query : \"\";\n  document.head.appendChild(script);\n  return mountPromise;\n};\n\nvar HCaptcha = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(HCaptcha, _React$Component);\n\n  function HCaptcha(props) {\n    var _this;\n\n    _this = _React$Component.call(this, props) || this; // API Methods\n\n    _this.renderCaptcha = _this.renderCaptcha.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.resetCaptcha = _this.resetCaptcha.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.removeCaptcha = _this.removeCaptcha.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.isReady = _this.isReady.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this)); // Event Handlers\n\n    _this.loadCaptcha = _this.loadCaptcha.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.handleOnLoad = _this.handleOnLoad.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.handleExpire = _this.handleExpire.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.handleError = _this.handleError.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.handleOpen = _this.handleOpen.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.handleClose = _this.handleClose.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    _this.handleChallengeExpired = _this.handleChallengeExpired.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));\n    var isApiReady = typeof hcaptcha !== 'undefined';\n    _this.ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createRef();\n    _this.apiScriptRequested = false;\n    _this.state = {\n      isApiReady: isApiReady,\n      isRemoved: false,\n      elementId: props.id,\n      captchaId: ''\n    };\n    return _this;\n  }\n\n  var _proto = HCaptcha.prototype;\n\n  _proto.componentDidMount = function componentDidMount() {\n    // Once captcha is mounted intialize hCaptcha - hCaptcha\n    var isApiReady = this.state.isApiReady;\n    /*\n     * Check if hCaptcha has already been loaded,\n     * If Yes, render the captcha\n     * If No, create script tag and wait to render the captcha\n     */\n\n    if (isApiReady) {\n      this.renderCaptcha();\n      return;\n    }\n\n    this.loadCaptcha();\n  };\n\n  _proto.componentWillUnmount = function componentWillUnmount() {\n    var captchaId = this.state.captchaId;\n\n    if (!this.isReady()) {\n      return;\n    } // Reset any stored variables / timers when unmounting\n\n\n    hcaptcha.reset(captchaId);\n    hcaptcha.remove(captchaId);\n  };\n\n  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {\n    // Prevent component re-rendering when these internal state variables are updated\n    if (this.state.isApiReady !== nextState.isApiReady || this.state.isRemoved !== nextState.isRemoved) {\n      return false;\n    }\n\n    return true;\n  };\n\n  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {\n    var _this2 = this;\n\n    // Prop Keys that could change\n    var keys = ['sitekey', 'size', 'theme', 'tabindex', 'languageOverride', 'endpoint']; // See if any props changed during component update\n\n    var match = keys.every(function (key) {\n      return prevProps[key] === _this2.props[key];\n    }); // If they have changed, remove current captcha and render a new one\n\n    if (!match) {\n      this.removeCaptcha(function () {\n        _this2.renderCaptcha();\n      });\n    }\n  };\n\n  _proto.loadCaptcha = function loadCaptcha() {\n    if (this.apiScriptRequested) {\n      return;\n    }\n\n    var _this$props = this.props,\n        apihost = _this$props.apihost,\n        assethost = _this$props.assethost,\n        endpoint = _this$props.endpoint,\n        host = _this$props.host,\n        imghost = _this$props.imghost,\n        hl = _this$props.languageOverride,\n        reCaptchaCompat = _this$props.reCaptchaCompat,\n        reportapi = _this$props.reportapi,\n        sentry = _this$props.sentry,\n        custom = _this$props.custom;\n    var mountParams = {\n      apihost: apihost,\n      assethost: assethost,\n      endpoint: endpoint,\n      hl: hl,\n      host: host,\n      imghost: imghost,\n      recaptchacompat: reCaptchaCompat === false ? \"off\" : null,\n      reportapi: reportapi,\n      sentry: sentry,\n      custom: custom\n    };\n    mountCaptchaScript(mountParams).then(this.handleOnLoad)[\"catch\"](this.handleError);\n    this.apiScriptRequested = true;\n  };\n\n  _proto.renderCaptcha = function renderCaptcha(onReady) {\n    var isApiReady = this.state.isApiReady;\n    if (!isApiReady) return;\n    var renderParams = Object.assign({\n      \"open-callback\": this.handleOpen,\n      \"close-callback\": this.handleClose,\n      \"error-callback\": this.handleError,\n      \"chalexpired-callback\": this.handleChallengeExpired,\n      \"expired-callback\": this.handleExpire,\n      \"callback\": this.handleSubmit\n    }, this.props, {\n      hl: this.props.hl || this.props.languageOverride,\n      languageOverride: undefined\n    }); //Render hCaptcha widget and provide necessary callbacks - hCaptcha\n\n    var captchaId = hcaptcha.render(this.ref.current, renderParams);\n    this.setState({\n      isRemoved: false,\n      captchaId: captchaId\n    }, function () {\n      onReady && onReady();\n    });\n  };\n\n  _proto.resetCaptcha = function resetCaptcha() {\n    var captchaId = this.state.captchaId;\n\n    if (!this.isReady()) {\n      return;\n    } // Reset captcha state, removes stored token and unticks checkbox\n\n\n    hcaptcha.reset(captchaId);\n  };\n\n  _proto.removeCaptcha = function removeCaptcha(callback) {\n    var captchaId = this.state.captchaId;\n\n    if (!this.isReady()) {\n      return;\n    }\n\n    this.setState({\n      isRemoved: true\n    }, function () {\n      hcaptcha.remove(captchaId);\n      callback && callback();\n    });\n  };\n\n  _proto.handleOnLoad = function handleOnLoad() {\n    var _this3 = this;\n\n    this.setState({\n      isApiReady: true\n    }, function () {\n      // render captcha and wait for captcha id\n      _this3.renderCaptcha(function () {\n        // trigger onLoad if it exists\n        var onLoad = _this3.props.onLoad;\n        if (onLoad) onLoad();\n      });\n    });\n  };\n\n  _proto.handleSubmit = function handleSubmit(event) {\n    var onVerify = this.props.onVerify;\n    var _this$state = this.state,\n        isRemoved = _this$state.isRemoved,\n        captchaId = _this$state.captchaId;\n    if (typeof hcaptcha === 'undefined' || isRemoved) return;\n    var token = hcaptcha.getResponse(captchaId); //Get response token from hCaptcha widget\n\n    var ekey = hcaptcha.getRespKey(captchaId); //Get current challenge session id from hCaptcha widget\n\n    onVerify(token, ekey); //Dispatch event to verify user response\n  };\n\n  _proto.handleExpire = function handleExpire() {\n    var onExpire = this.props.onExpire;\n    var captchaId = this.state.captchaId;\n\n    if (!this.isReady()) {\n      return;\n    }\n\n    hcaptcha.reset(captchaId); // If hCaptcha runs into error, reset captcha - hCaptcha\n\n    if (onExpire) onExpire();\n  };\n\n  _proto.handleError = function handleError(event) {\n    var onError = this.props.onError;\n    var captchaId = this.state.captchaId;\n\n    if (this.isReady()) {\n      // If hCaptcha runs into error, reset captcha - hCaptcha\n      hcaptcha.reset(captchaId);\n    }\n\n    if (onError) onError(event);\n  };\n\n  _proto.isReady = function isReady() {\n    var _this$state2 = this.state,\n        isApiReady = _this$state2.isApiReady,\n        isRemoved = _this$state2.isRemoved;\n    return isApiReady && !isRemoved;\n  };\n\n  _proto.handleOpen = function handleOpen() {\n    if (!this.isReady() || !this.props.onOpen) {\n      return;\n    }\n\n    this.props.onOpen();\n  };\n\n  _proto.handleClose = function handleClose() {\n    if (!this.isReady() || !this.props.onClose) {\n      return;\n    }\n\n    this.props.onClose();\n  };\n\n  _proto.handleChallengeExpired = function handleChallengeExpired() {\n    if (!this.isReady() || !this.props.onChalExpired) {\n      return;\n    }\n\n    this.props.onChalExpired();\n  };\n\n  _proto.execute = function execute(opts) {\n    if (opts === void 0) {\n      opts = null;\n    }\n\n    var captchaId = this.state.captchaId;\n\n    if (!this.isReady()) {\n      return;\n    }\n\n    if (opts && typeof opts !== \"object\") {\n      opts = null;\n    }\n\n    return hcaptcha.execute(captchaId, opts);\n  };\n\n  _proto.setData = function setData(data) {\n    var captchaId = this.state.captchaId;\n\n    if (!this.isReady()) {\n      return;\n    }\n\n    if (data && typeof data !== \"object\") {\n      data = null;\n    }\n\n    hcaptcha.setData(captchaId, data);\n  };\n\n  _proto.getResponse = function getResponse() {\n    return hcaptcha.getResponse(this.state.captchaId);\n  };\n\n  _proto.getRespKey = function getRespKey() {\n    return hcaptcha.getRespKey(this.state.captchaId);\n  };\n\n  _proto.render = function render() {\n    var elementId = this.state.elementId;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n      ref: this.ref,\n      id: elementId\n    });\n  };\n\n  return HCaptcha;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HCaptcha);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGhjYXB0Y2hhL3JlYWN0LWhjYXB0Y2hhL2Rpc3QvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtGO0FBQ2hCO0FBQ25DO0FBQ1k7QUFDM0M7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEdBQUc7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWMsd0RBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDJFQUFjOztBQUVoQjtBQUNBOztBQUVBLHdEQUF3RDs7QUFFeEQsbURBQW1ELG1GQUFzQjtBQUN6RSxpREFBaUQsbUZBQXNCO0FBQ3ZFLG1EQUFtRCxtRkFBc0I7QUFDekUsdUNBQXVDLG1GQUFzQixVQUFVOztBQUV2RSwrQ0FBK0MsbUZBQXNCO0FBQ3JFLGlEQUFpRCxtRkFBc0I7QUFDdkUsaURBQWlELG1GQUFzQjtBQUN2RSxpREFBaUQsbUZBQXNCO0FBQ3ZFLCtDQUErQyxtRkFBc0I7QUFDckUsNkNBQTZDLG1GQUFzQjtBQUNuRSwrQ0FBK0MsbUZBQXNCO0FBQ3JFLHFFQUFxRSxtRkFBc0I7QUFDM0Y7QUFDQSw2QkFBNkIsNENBQWU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5RkFBeUY7O0FBRXpGO0FBQ0E7QUFDQSxLQUFLLEdBQUc7O0FBRVI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpELCtDQUErQzs7QUFFL0MsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCOztBQUUvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFtQjtBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLDRDQUFlOztBQUVqQixpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9vdHN0b2NrZnVuLy4vbm9kZV9tb2R1bGVzL0BoY2FwdGNoYS9yZWFjdC1oY2FwdGNoYS9kaXN0L2VzbS9pbmRleC5qcz9iZWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdlbmVyYXRlUXVlcnkgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xudmFyIFNDUklQVF9JRCA9ICdoY2FwdGNoYS1hcGktc2NyaXB0LWlkJztcbnZhciBIQ0FQVENIQV9MT0FEX0ZOX05BTUUgPSAnaGNhcHRjaGFPbkxvYWQnOyAvLyBQcmV2ZW50IGxvYWRpbmcgQVBJIHNjcmlwdCBtdWx0aXBsZSB0aW1lc1xuXG52YXIgcmVzb2x2ZUZuO1xudmFyIHJlamVjdEZuO1xudmFyIG1vdW50UHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgcmVzb2x2ZUZuID0gcmVzb2x2ZTtcbiAgcmVqZWN0Rm4gPSByZWplY3Q7XG59KTsgLy8gR2VuZXJhdGUgaENhcHRjaGEgQVBJIHNjcmlwdFxuXG52YXIgbW91bnRDYXB0Y2hhU2NyaXB0ID0gZnVuY3Rpb24gbW91bnRDYXB0Y2hhU2NyaXB0KHBhcmFtcykge1xuICBpZiAocGFyYW1zID09PSB2b2lkIDApIHtcbiAgICBwYXJhbXMgPSB7fTtcbiAgfVxuXG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTQ1JJUFRfSUQpKSB7XG4gICAgLy8gQVBJIHdhcyBhbHJlYWR5IHJlcXVlc3RlZFxuICAgIHJldHVybiBtb3VudFByb21pc2U7XG4gIH0gLy8gQ3JlYXRlIGdsb2JhbCBvbmxvYWQgY2FsbGJhY2tcblxuXG4gIHdpbmRvd1tIQ0FQVENIQV9MT0FEX0ZOX05BTUVdID0gcmVzb2x2ZUZuO1xuICB2YXIgZG9tYWluID0gcGFyYW1zLmFwaWhvc3QgfHwgXCJodHRwczovL2pzLmhjYXB0Y2hhLmNvbVwiO1xuICBkZWxldGUgcGFyYW1zLmFwaWhvc3Q7XG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICBzY3JpcHQuaWQgPSBTQ1JJUFRfSUQ7XG4gIHNjcmlwdC5zcmMgPSBkb21haW4gKyBcIi8xL2FwaS5qcz9yZW5kZXI9ZXhwbGljaXQmb25sb2FkPVwiICsgSENBUFRDSEFfTE9BRF9GTl9OQU1FO1xuICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXG4gIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuIHJlamVjdEZuKCdzY3JpcHQtZXJyb3InKTtcbiAgfTtcblxuICB2YXIgcXVlcnkgPSBnZW5lcmF0ZVF1ZXJ5KHBhcmFtcyk7XG4gIHNjcmlwdC5zcmMgKz0gcXVlcnkgIT09IFwiXCIgPyBcIiZcIiArIHF1ZXJ5IDogXCJcIjtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICByZXR1cm4gbW91bnRQcm9taXNlO1xufTtcblxudmFyIEhDYXB0Y2hhID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEhDYXB0Y2hhLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBIQ2FwdGNoYShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzOyAvLyBBUEkgTWV0aG9kc1xuXG4gICAgX3RoaXMucmVuZGVyQ2FwdGNoYSA9IF90aGlzLnJlbmRlckNhcHRjaGEuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMucmVzZXRDYXB0Y2hhID0gX3RoaXMucmVzZXRDYXB0Y2hhLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnJlbW92ZUNhcHRjaGEgPSBfdGhpcy5yZW1vdmVDYXB0Y2hhLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmlzUmVhZHkgPSBfdGhpcy5pc1JlYWR5LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpOyAvLyBFdmVudCBIYW5kbGVyc1xuXG4gICAgX3RoaXMubG9hZENhcHRjaGEgPSBfdGhpcy5sb2FkQ2FwdGNoYS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVPbkxvYWQgPSBfdGhpcy5oYW5kbGVPbkxvYWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlU3VibWl0ID0gX3RoaXMuaGFuZGxlU3VibWl0LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZUV4cGlyZSA9IF90aGlzLmhhbmRsZUV4cGlyZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVFcnJvciA9IF90aGlzLmhhbmRsZUVycm9yLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZU9wZW4gPSBfdGhpcy5oYW5kbGVPcGVuLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZUNsb3NlID0gX3RoaXMuaGFuZGxlQ2xvc2UuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlQ2hhbGxlbmdlRXhwaXJlZCA9IF90aGlzLmhhbmRsZUNoYWxsZW5nZUV4cGlyZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgdmFyIGlzQXBpUmVhZHkgPSB0eXBlb2YgaGNhcHRjaGEgIT09ICd1bmRlZmluZWQnO1xuICAgIF90aGlzLnJlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBfdGhpcy5hcGlTY3JpcHRSZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQXBpUmVhZHk6IGlzQXBpUmVhZHksXG4gICAgICBpc1JlbW92ZWQ6IGZhbHNlLFxuICAgICAgZWxlbWVudElkOiBwcm9wcy5pZCxcbiAgICAgIGNhcHRjaGFJZDogJydcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBIQ2FwdGNoYS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gT25jZSBjYXB0Y2hhIGlzIG1vdW50ZWQgaW50aWFsaXplIGhDYXB0Y2hhIC0gaENhcHRjaGFcbiAgICB2YXIgaXNBcGlSZWFkeSA9IHRoaXMuc3RhdGUuaXNBcGlSZWFkeTtcbiAgICAvKlxuICAgICAqIENoZWNrIGlmIGhDYXB0Y2hhIGhhcyBhbHJlYWR5IGJlZW4gbG9hZGVkLFxuICAgICAqIElmIFllcywgcmVuZGVyIHRoZSBjYXB0Y2hhXG4gICAgICogSWYgTm8sIGNyZWF0ZSBzY3JpcHQgdGFnIGFuZCB3YWl0IHRvIHJlbmRlciB0aGUgY2FwdGNoYVxuICAgICAqL1xuXG4gICAgaWYgKGlzQXBpUmVhZHkpIHtcbiAgICAgIHRoaXMucmVuZGVyQ2FwdGNoYSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9hZENhcHRjaGEoKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB2YXIgY2FwdGNoYUlkID0gdGhpcy5zdGF0ZS5jYXB0Y2hhSWQ7XG5cbiAgICBpZiAoIXRoaXMuaXNSZWFkeSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBSZXNldCBhbnkgc3RvcmVkIHZhcmlhYmxlcyAvIHRpbWVycyB3aGVuIHVubW91bnRpbmdcblxuXG4gICAgaGNhcHRjaGEucmVzZXQoY2FwdGNoYUlkKTtcbiAgICBoY2FwdGNoYS5yZW1vdmUoY2FwdGNoYUlkKTtcbiAgfTtcblxuICBfcHJvdG8uc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgLy8gUHJldmVudCBjb21wb25lbnQgcmUtcmVuZGVyaW5nIHdoZW4gdGhlc2UgaW50ZXJuYWwgc3RhdGUgdmFyaWFibGVzIGFyZSB1cGRhdGVkXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNBcGlSZWFkeSAhPT0gbmV4dFN0YXRlLmlzQXBpUmVhZHkgfHwgdGhpcy5zdGF0ZS5pc1JlbW92ZWQgIT09IG5leHRTdGF0ZS5pc1JlbW92ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgLy8gUHJvcCBLZXlzIHRoYXQgY291bGQgY2hhbmdlXG4gICAgdmFyIGtleXMgPSBbJ3NpdGVrZXknLCAnc2l6ZScsICd0aGVtZScsICd0YWJpbmRleCcsICdsYW5ndWFnZU92ZXJyaWRlJywgJ2VuZHBvaW50J107IC8vIFNlZSBpZiBhbnkgcHJvcHMgY2hhbmdlZCBkdXJpbmcgY29tcG9uZW50IHVwZGF0ZVxuXG4gICAgdmFyIG1hdGNoID0ga2V5cy5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gcHJldlByb3BzW2tleV0gPT09IF90aGlzMi5wcm9wc1trZXldO1xuICAgIH0pOyAvLyBJZiB0aGV5IGhhdmUgY2hhbmdlZCwgcmVtb3ZlIGN1cnJlbnQgY2FwdGNoYSBhbmQgcmVuZGVyIGEgbmV3IG9uZVxuXG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgdGhpcy5yZW1vdmVDYXB0Y2hhKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnJlbmRlckNhcHRjaGEoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ubG9hZENhcHRjaGEgPSBmdW5jdGlvbiBsb2FkQ2FwdGNoYSgpIHtcbiAgICBpZiAodGhpcy5hcGlTY3JpcHRSZXF1ZXN0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhcGlob3N0ID0gX3RoaXMkcHJvcHMuYXBpaG9zdCxcbiAgICAgICAgYXNzZXRob3N0ID0gX3RoaXMkcHJvcHMuYXNzZXRob3N0LFxuICAgICAgICBlbmRwb2ludCA9IF90aGlzJHByb3BzLmVuZHBvaW50LFxuICAgICAgICBob3N0ID0gX3RoaXMkcHJvcHMuaG9zdCxcbiAgICAgICAgaW1naG9zdCA9IF90aGlzJHByb3BzLmltZ2hvc3QsXG4gICAgICAgIGhsID0gX3RoaXMkcHJvcHMubGFuZ3VhZ2VPdmVycmlkZSxcbiAgICAgICAgcmVDYXB0Y2hhQ29tcGF0ID0gX3RoaXMkcHJvcHMucmVDYXB0Y2hhQ29tcGF0LFxuICAgICAgICByZXBvcnRhcGkgPSBfdGhpcyRwcm9wcy5yZXBvcnRhcGksXG4gICAgICAgIHNlbnRyeSA9IF90aGlzJHByb3BzLnNlbnRyeSxcbiAgICAgICAgY3VzdG9tID0gX3RoaXMkcHJvcHMuY3VzdG9tO1xuICAgIHZhciBtb3VudFBhcmFtcyA9IHtcbiAgICAgIGFwaWhvc3Q6IGFwaWhvc3QsXG4gICAgICBhc3NldGhvc3Q6IGFzc2V0aG9zdCxcbiAgICAgIGVuZHBvaW50OiBlbmRwb2ludCxcbiAgICAgIGhsOiBobCxcbiAgICAgIGhvc3Q6IGhvc3QsXG4gICAgICBpbWdob3N0OiBpbWdob3N0LFxuICAgICAgcmVjYXB0Y2hhY29tcGF0OiByZUNhcHRjaGFDb21wYXQgPT09IGZhbHNlID8gXCJvZmZcIiA6IG51bGwsXG4gICAgICByZXBvcnRhcGk6IHJlcG9ydGFwaSxcbiAgICAgIHNlbnRyeTogc2VudHJ5LFxuICAgICAgY3VzdG9tOiBjdXN0b21cbiAgICB9O1xuICAgIG1vdW50Q2FwdGNoYVNjcmlwdChtb3VudFBhcmFtcykudGhlbih0aGlzLmhhbmRsZU9uTG9hZClbXCJjYXRjaFwiXSh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB0aGlzLmFwaVNjcmlwdFJlcXVlc3RlZCA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlckNhcHRjaGEgPSBmdW5jdGlvbiByZW5kZXJDYXB0Y2hhKG9uUmVhZHkpIHtcbiAgICB2YXIgaXNBcGlSZWFkeSA9IHRoaXMuc3RhdGUuaXNBcGlSZWFkeTtcbiAgICBpZiAoIWlzQXBpUmVhZHkpIHJldHVybjtcbiAgICB2YXIgcmVuZGVyUGFyYW1zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBcIm9wZW4tY2FsbGJhY2tcIjogdGhpcy5oYW5kbGVPcGVuLFxuICAgICAgXCJjbG9zZS1jYWxsYmFja1wiOiB0aGlzLmhhbmRsZUNsb3NlLFxuICAgICAgXCJlcnJvci1jYWxsYmFja1wiOiB0aGlzLmhhbmRsZUVycm9yLFxuICAgICAgXCJjaGFsZXhwaXJlZC1jYWxsYmFja1wiOiB0aGlzLmhhbmRsZUNoYWxsZW5nZUV4cGlyZWQsXG4gICAgICBcImV4cGlyZWQtY2FsbGJhY2tcIjogdGhpcy5oYW5kbGVFeHBpcmUsXG4gICAgICBcImNhbGxiYWNrXCI6IHRoaXMuaGFuZGxlU3VibWl0XG4gICAgfSwgdGhpcy5wcm9wcywge1xuICAgICAgaGw6IHRoaXMucHJvcHMuaGwgfHwgdGhpcy5wcm9wcy5sYW5ndWFnZU92ZXJyaWRlLFxuICAgICAgbGFuZ3VhZ2VPdmVycmlkZTogdW5kZWZpbmVkXG4gICAgfSk7IC8vUmVuZGVyIGhDYXB0Y2hhIHdpZGdldCBhbmQgcHJvdmlkZSBuZWNlc3NhcnkgY2FsbGJhY2tzIC0gaENhcHRjaGFcblxuICAgIHZhciBjYXB0Y2hhSWQgPSBoY2FwdGNoYS5yZW5kZXIodGhpcy5yZWYuY3VycmVudCwgcmVuZGVyUGFyYW1zKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzUmVtb3ZlZDogZmFsc2UsXG4gICAgICBjYXB0Y2hhSWQ6IGNhcHRjaGFJZFxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uUmVhZHkgJiYgb25SZWFkeSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZXNldENhcHRjaGEgPSBmdW5jdGlvbiByZXNldENhcHRjaGEoKSB7XG4gICAgdmFyIGNhcHRjaGFJZCA9IHRoaXMuc3RhdGUuY2FwdGNoYUlkO1xuXG4gICAgaWYgKCF0aGlzLmlzUmVhZHkoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gUmVzZXQgY2FwdGNoYSBzdGF0ZSwgcmVtb3ZlcyBzdG9yZWQgdG9rZW4gYW5kIHVudGlja3MgY2hlY2tib3hcblxuXG4gICAgaGNhcHRjaGEucmVzZXQoY2FwdGNoYUlkKTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlQ2FwdGNoYSA9IGZ1bmN0aW9uIHJlbW92ZUNhcHRjaGEoY2FsbGJhY2spIHtcbiAgICB2YXIgY2FwdGNoYUlkID0gdGhpcy5zdGF0ZS5jYXB0Y2hhSWQ7XG5cbiAgICBpZiAoIXRoaXMuaXNSZWFkeSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1JlbW92ZWQ6IHRydWVcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBoY2FwdGNoYS5yZW1vdmUoY2FwdGNoYUlkKTtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZU9uTG9hZCA9IGZ1bmN0aW9uIGhhbmRsZU9uTG9hZCgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNBcGlSZWFkeTogdHJ1ZVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHJlbmRlciBjYXB0Y2hhIGFuZCB3YWl0IGZvciBjYXB0Y2hhIGlkXG4gICAgICBfdGhpczMucmVuZGVyQ2FwdGNoYShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHRyaWdnZXIgb25Mb2FkIGlmIGl0IGV4aXN0c1xuICAgICAgICB2YXIgb25Mb2FkID0gX3RoaXMzLnByb3BzLm9uTG9hZDtcbiAgICAgICAgaWYgKG9uTG9hZCkgb25Mb2FkKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgdmFyIG9uVmVyaWZ5ID0gdGhpcy5wcm9wcy5vblZlcmlmeTtcbiAgICB2YXIgX3RoaXMkc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICBpc1JlbW92ZWQgPSBfdGhpcyRzdGF0ZS5pc1JlbW92ZWQsXG4gICAgICAgIGNhcHRjaGFJZCA9IF90aGlzJHN0YXRlLmNhcHRjaGFJZDtcbiAgICBpZiAodHlwZW9mIGhjYXB0Y2hhID09PSAndW5kZWZpbmVkJyB8fCBpc1JlbW92ZWQpIHJldHVybjtcbiAgICB2YXIgdG9rZW4gPSBoY2FwdGNoYS5nZXRSZXNwb25zZShjYXB0Y2hhSWQpOyAvL0dldCByZXNwb25zZSB0b2tlbiBmcm9tIGhDYXB0Y2hhIHdpZGdldFxuXG4gICAgdmFyIGVrZXkgPSBoY2FwdGNoYS5nZXRSZXNwS2V5KGNhcHRjaGFJZCk7IC8vR2V0IGN1cnJlbnQgY2hhbGxlbmdlIHNlc3Npb24gaWQgZnJvbSBoQ2FwdGNoYSB3aWRnZXRcblxuICAgIG9uVmVyaWZ5KHRva2VuLCBla2V5KTsgLy9EaXNwYXRjaCBldmVudCB0byB2ZXJpZnkgdXNlciByZXNwb25zZVxuICB9O1xuXG4gIF9wcm90by5oYW5kbGVFeHBpcmUgPSBmdW5jdGlvbiBoYW5kbGVFeHBpcmUoKSB7XG4gICAgdmFyIG9uRXhwaXJlID0gdGhpcy5wcm9wcy5vbkV4cGlyZTtcbiAgICB2YXIgY2FwdGNoYUlkID0gdGhpcy5zdGF0ZS5jYXB0Y2hhSWQ7XG5cbiAgICBpZiAoIXRoaXMuaXNSZWFkeSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGNhcHRjaGEucmVzZXQoY2FwdGNoYUlkKTsgLy8gSWYgaENhcHRjaGEgcnVucyBpbnRvIGVycm9yLCByZXNldCBjYXB0Y2hhIC0gaENhcHRjaGFcblxuICAgIGlmIChvbkV4cGlyZSkgb25FeHBpcmUoKTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcihldmVudCkge1xuICAgIHZhciBvbkVycm9yID0gdGhpcy5wcm9wcy5vbkVycm9yO1xuICAgIHZhciBjYXB0Y2hhSWQgPSB0aGlzLnN0YXRlLmNhcHRjaGFJZDtcblxuICAgIGlmICh0aGlzLmlzUmVhZHkoKSkge1xuICAgICAgLy8gSWYgaENhcHRjaGEgcnVucyBpbnRvIGVycm9yLCByZXNldCBjYXB0Y2hhIC0gaENhcHRjaGFcbiAgICAgIGhjYXB0Y2hhLnJlc2V0KGNhcHRjaGFJZCk7XG4gICAgfVxuXG4gICAgaWYgKG9uRXJyb3IpIG9uRXJyb3IoZXZlbnQpO1xuICB9O1xuXG4gIF9wcm90by5pc1JlYWR5ID0gZnVuY3Rpb24gaXNSZWFkeSgpIHtcbiAgICB2YXIgX3RoaXMkc3RhdGUyID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgaXNBcGlSZWFkeSA9IF90aGlzJHN0YXRlMi5pc0FwaVJlYWR5LFxuICAgICAgICBpc1JlbW92ZWQgPSBfdGhpcyRzdGF0ZTIuaXNSZW1vdmVkO1xuICAgIHJldHVybiBpc0FwaVJlYWR5ICYmICFpc1JlbW92ZWQ7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZU9wZW4gPSBmdW5jdGlvbiBoYW5kbGVPcGVuKCkge1xuICAgIGlmICghdGhpcy5pc1JlYWR5KCkgfHwgIXRoaXMucHJvcHMub25PcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbk9wZW4oKTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiBoYW5kbGVDbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNSZWFkeSgpIHx8ICF0aGlzLnByb3BzLm9uQ2xvc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlQ2hhbGxlbmdlRXhwaXJlZCA9IGZ1bmN0aW9uIGhhbmRsZUNoYWxsZW5nZUV4cGlyZWQoKSB7XG4gICAgaWYgKCF0aGlzLmlzUmVhZHkoKSB8fCAhdGhpcy5wcm9wcy5vbkNoYWxFeHBpcmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYWxFeHBpcmVkKCk7XG4gIH07XG5cbiAgX3Byb3RvLmV4ZWN1dGUgPSBmdW5jdGlvbiBleGVjdXRlKG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY2FwdGNoYUlkID0gdGhpcy5zdGF0ZS5jYXB0Y2hhSWQ7XG5cbiAgICBpZiAoIXRoaXMuaXNSZWFkeSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9wdHMgJiYgdHlwZW9mIG9wdHMgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIG9wdHMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBoY2FwdGNoYS5leGVjdXRlKGNhcHRjaGFJZCwgb3B0cyk7XG4gIH07XG5cbiAgX3Byb3RvLnNldERhdGEgPSBmdW5jdGlvbiBzZXREYXRhKGRhdGEpIHtcbiAgICB2YXIgY2FwdGNoYUlkID0gdGhpcy5zdGF0ZS5jYXB0Y2hhSWQ7XG5cbiAgICBpZiAoIXRoaXMuaXNSZWFkeSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRhdGEgJiYgdHlwZW9mIGRhdGEgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGRhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIGhjYXB0Y2hhLnNldERhdGEoY2FwdGNoYUlkLCBkYXRhKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0UmVzcG9uc2UgPSBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICByZXR1cm4gaGNhcHRjaGEuZ2V0UmVzcG9uc2UodGhpcy5zdGF0ZS5jYXB0Y2hhSWQpO1xuICB9O1xuXG4gIF9wcm90by5nZXRSZXNwS2V5ID0gZnVuY3Rpb24gZ2V0UmVzcEtleSgpIHtcbiAgICByZXR1cm4gaGNhcHRjaGEuZ2V0UmVzcEtleSh0aGlzLnN0YXRlLmNhcHRjaGFJZCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgZWxlbWVudElkID0gdGhpcy5zdGF0ZS5lbGVtZW50SWQ7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIHJlZjogdGhpcy5yZWYsXG4gICAgICBpZDogZWxlbWVudElkXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEhDYXB0Y2hhO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBIQ2FwdGNoYTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@hcaptcha/react-hcaptcha/dist/esm/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@hcaptcha/react-hcaptcha/dist/esm/utils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateQuery: () => (/* binding */ generateQuery)\n/* harmony export */ });\nfunction generateQuery(params) {\n  return Object.entries(params).filter(function (_ref) {\n    var key = _ref[0],\n        value = _ref[1];\n    return value || value === false;\n  }).map(function (_ref2) {\n    var key = _ref2[0],\n        value = _ref2[1];\n    return encodeURIComponent(key) + \"=\" + encodeURIComponent(value);\n  }).join(\"&\");\n}\n\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGhjYXB0Y2hhL3JlYWN0LWhjYXB0Y2hhL2Rpc3QvZXNtL3V0aWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jvb3RzdG9ja2Z1bi8uL25vZGVfbW9kdWxlcy9AaGNhcHRjaGEvcmVhY3QtaGNhcHRjaGEvZGlzdC9lc20vdXRpbHMuanM/ZmNkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZW5lcmF0ZVF1ZXJ5KHBhcmFtcykge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMocGFyYW1zKS5maWx0ZXIoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIga2V5ID0gX3JlZlswXSxcbiAgICAgICAgdmFsdWUgPSBfcmVmWzFdO1xuICAgIHJldHVybiB2YWx1ZSB8fCB2YWx1ZSA9PT0gZmFsc2U7XG4gIH0pLm1hcChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICB2YXIga2V5ID0gX3JlZjJbMF0sXG4gICAgICAgIHZhbHVlID0gX3JlZjJbMV07XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICB9KS5qb2luKFwiJlwiKTtcbn1cblxuO1xuZXhwb3J0IHsgZ2VuZXJhdGVRdWVyeSB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@hcaptcha/react-hcaptcha/dist/esm/utils.js\n");

/***/ })

};
;