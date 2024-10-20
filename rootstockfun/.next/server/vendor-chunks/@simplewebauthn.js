"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@simplewebauthn";
exports.ids = ["vendor-chunks/@simplewebauthn"];
exports.modules = {

/***/ "(ssr)/./node_modules/@simplewebauthn/browser/dist/bundle/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@simplewebauthn/browser/dist/bundle/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WebAuthnAbortService: () => (/* binding */ WebAuthnAbortService),\n/* harmony export */   WebAuthnError: () => (/* binding */ WebAuthnError),\n/* harmony export */   base64URLStringToBuffer: () => (/* binding */ base64URLStringToBuffer),\n/* harmony export */   browserSupportsWebAuthn: () => (/* binding */ browserSupportsWebAuthn),\n/* harmony export */   browserSupportsWebAuthnAutofill: () => (/* binding */ browserSupportsWebAuthnAutofill),\n/* harmony export */   bufferToBase64URLString: () => (/* binding */ bufferToBase64URLString),\n/* harmony export */   platformAuthenticatorIsAvailable: () => (/* binding */ platformAuthenticatorIsAvailable),\n/* harmony export */   startAuthentication: () => (/* binding */ startAuthentication),\n/* harmony export */   startRegistration: () => (/* binding */ startRegistration)\n/* harmony export */ });\n/* [@simplewebauthn/browser@9.0.1] */\nfunction utf8StringToBuffer(value) {\n    return new TextEncoder().encode(value);\n}\n\nfunction bufferToBase64URLString(buffer) {\n    const bytes = new Uint8Array(buffer);\n    let str = '';\n    for (const charCode of bytes) {\n        str += String.fromCharCode(charCode);\n    }\n    const base64String = btoa(str);\n    return base64String.replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=/g, '');\n}\n\nfunction base64URLStringToBuffer(base64URLString) {\n    const base64 = base64URLString.replace(/-/g, '+').replace(/_/g, '/');\n    const padLength = (4 - (base64.length % 4)) % 4;\n    const padded = base64.padEnd(base64.length + padLength, '=');\n    const binary = atob(padded);\n    const buffer = new ArrayBuffer(binary.length);\n    const bytes = new Uint8Array(buffer);\n    for (let i = 0; i < binary.length; i++) {\n        bytes[i] = binary.charCodeAt(i);\n    }\n    return buffer;\n}\n\nfunction browserSupportsWebAuthn() {\n    return (window?.PublicKeyCredential !== undefined &&\n        typeof window.PublicKeyCredential === 'function');\n}\n\nfunction toPublicKeyCredentialDescriptor(descriptor) {\n    const { id } = descriptor;\n    return {\n        ...descriptor,\n        id: base64URLStringToBuffer(id),\n        transports: descriptor.transports,\n    };\n}\n\nfunction isValidDomain(hostname) {\n    return (hostname === 'localhost' ||\n        /^([a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,}$/i.test(hostname));\n}\n\nclass WebAuthnError extends Error {\n    constructor({ message, code, cause, name, }) {\n        super(message, { cause });\n        this.name = name ?? cause.name;\n        this.code = code;\n    }\n}\n\nfunction identifyRegistrationError({ error, options, }) {\n    const { publicKey } = options;\n    if (!publicKey) {\n        throw Error('options was missing required publicKey property');\n    }\n    if (error.name === 'AbortError') {\n        if (options.signal instanceof AbortSignal) {\n            return new WebAuthnError({\n                message: 'Registration ceremony was sent an abort signal',\n                code: 'ERROR_CEREMONY_ABORTED',\n                cause: error,\n            });\n        }\n    }\n    else if (error.name === 'ConstraintError') {\n        if (publicKey.authenticatorSelection?.requireResidentKey === true) {\n            return new WebAuthnError({\n                message: 'Discoverable credentials were required but no available authenticator supported it',\n                code: 'ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT',\n                cause: error,\n            });\n        }\n        else if (publicKey.authenticatorSelection?.userVerification === 'required') {\n            return new WebAuthnError({\n                message: 'User verification was required but no available authenticator supported it',\n                code: 'ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT',\n                cause: error,\n            });\n        }\n    }\n    else if (error.name === 'InvalidStateError') {\n        return new WebAuthnError({\n            message: 'The authenticator was previously registered',\n            code: 'ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED',\n            cause: error,\n        });\n    }\n    else if (error.name === 'NotAllowedError') {\n        return new WebAuthnError({\n            message: error.message,\n            code: 'ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY',\n            cause: error,\n        });\n    }\n    else if (error.name === 'NotSupportedError') {\n        const validPubKeyCredParams = publicKey.pubKeyCredParams.filter((param) => param.type === 'public-key');\n        if (validPubKeyCredParams.length === 0) {\n            return new WebAuthnError({\n                message: 'No entry in pubKeyCredParams was of type \"public-key\"',\n                code: 'ERROR_MALFORMED_PUBKEYCREDPARAMS',\n                cause: error,\n            });\n        }\n        return new WebAuthnError({\n            message: 'No available authenticator supported any of the specified pubKeyCredParams algorithms',\n            code: 'ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG',\n            cause: error,\n        });\n    }\n    else if (error.name === 'SecurityError') {\n        const effectiveDomain = window.location.hostname;\n        if (!isValidDomain(effectiveDomain)) {\n            return new WebAuthnError({\n                message: `${window.location.hostname} is an invalid domain`,\n                code: 'ERROR_INVALID_DOMAIN',\n                cause: error,\n            });\n        }\n        else if (publicKey.rp.id !== effectiveDomain) {\n            return new WebAuthnError({\n                message: `The RP ID \"${publicKey.rp.id}\" is invalid for this domain`,\n                code: 'ERROR_INVALID_RP_ID',\n                cause: error,\n            });\n        }\n    }\n    else if (error.name === 'TypeError') {\n        if (publicKey.user.id.byteLength < 1 || publicKey.user.id.byteLength > 64) {\n            return new WebAuthnError({\n                message: 'User ID was not between 1 and 64 characters',\n                code: 'ERROR_INVALID_USER_ID_LENGTH',\n                cause: error,\n            });\n        }\n    }\n    else if (error.name === 'UnknownError') {\n        return new WebAuthnError({\n            message: 'The authenticator was unable to process the specified options, or could not create a new credential',\n            code: 'ERROR_AUTHENTICATOR_GENERAL_ERROR',\n            cause: error,\n        });\n    }\n    return error;\n}\n\nclass BaseWebAuthnAbortService {\n    createNewAbortSignal() {\n        if (this.controller) {\n            const abortError = new Error('Cancelling existing WebAuthn API call for new one');\n            abortError.name = 'AbortError';\n            this.controller.abort(abortError);\n        }\n        const newController = new AbortController();\n        this.controller = newController;\n        return newController.signal;\n    }\n    cancelCeremony() {\n        if (this.controller) {\n            const abortError = new Error('Manually cancelling existing WebAuthn API call');\n            abortError.name = 'AbortError';\n            this.controller.abort(abortError);\n            this.controller = undefined;\n        }\n    }\n}\nconst WebAuthnAbortService = new BaseWebAuthnAbortService();\n\nconst attachments = ['cross-platform', 'platform'];\nfunction toAuthenticatorAttachment(attachment) {\n    if (!attachment) {\n        return;\n    }\n    if (attachments.indexOf(attachment) < 0) {\n        return;\n    }\n    return attachment;\n}\n\nasync function startRegistration(creationOptionsJSON) {\n    if (!browserSupportsWebAuthn()) {\n        throw new Error('WebAuthn is not supported in this browser');\n    }\n    const publicKey = {\n        ...creationOptionsJSON,\n        challenge: base64URLStringToBuffer(creationOptionsJSON.challenge),\n        user: {\n            ...creationOptionsJSON.user,\n            id: utf8StringToBuffer(creationOptionsJSON.user.id),\n        },\n        excludeCredentials: creationOptionsJSON.excludeCredentials?.map(toPublicKeyCredentialDescriptor),\n    };\n    const options = { publicKey };\n    options.signal = WebAuthnAbortService.createNewAbortSignal();\n    let credential;\n    try {\n        credential = (await navigator.credentials.create(options));\n    }\n    catch (err) {\n        throw identifyRegistrationError({ error: err, options });\n    }\n    if (!credential) {\n        throw new Error('Registration was not completed');\n    }\n    const { id, rawId, response, type } = credential;\n    let transports = undefined;\n    if (typeof response.getTransports === 'function') {\n        transports = response.getTransports();\n    }\n    let responsePublicKeyAlgorithm = undefined;\n    if (typeof response.getPublicKeyAlgorithm === 'function') {\n        try {\n            responsePublicKeyAlgorithm = response.getPublicKeyAlgorithm();\n        }\n        catch (error) {\n            warnOnBrokenImplementation('getPublicKeyAlgorithm()', error);\n        }\n    }\n    let responsePublicKey = undefined;\n    if (typeof response.getPublicKey === 'function') {\n        try {\n            const _publicKey = response.getPublicKey();\n            if (_publicKey !== null) {\n                responsePublicKey = bufferToBase64URLString(_publicKey);\n            }\n        }\n        catch (error) {\n            warnOnBrokenImplementation('getPublicKey()', error);\n        }\n    }\n    let responseAuthenticatorData;\n    if (typeof response.getAuthenticatorData === 'function') {\n        try {\n            responseAuthenticatorData = bufferToBase64URLString(response.getAuthenticatorData());\n        }\n        catch (error) {\n            warnOnBrokenImplementation('getAuthenticatorData()', error);\n        }\n    }\n    return {\n        id,\n        rawId: bufferToBase64URLString(rawId),\n        response: {\n            attestationObject: bufferToBase64URLString(response.attestationObject),\n            clientDataJSON: bufferToBase64URLString(response.clientDataJSON),\n            transports,\n            publicKeyAlgorithm: responsePublicKeyAlgorithm,\n            publicKey: responsePublicKey,\n            authenticatorData: responseAuthenticatorData,\n        },\n        type,\n        clientExtensionResults: credential.getClientExtensionResults(),\n        authenticatorAttachment: toAuthenticatorAttachment(credential.authenticatorAttachment),\n    };\n}\nfunction warnOnBrokenImplementation(methodName, cause) {\n    console.warn(`The browser extension that intercepted this WebAuthn API call incorrectly implemented ${methodName}. You should report this error to them.\\n`, cause);\n}\n\nfunction bufferToUTF8String(value) {\n    return new TextDecoder('utf-8').decode(value);\n}\n\nfunction browserSupportsWebAuthnAutofill() {\n    const globalPublicKeyCredential = window\n        .PublicKeyCredential;\n    if (globalPublicKeyCredential.isConditionalMediationAvailable === undefined) {\n        return new Promise((resolve) => resolve(false));\n    }\n    return globalPublicKeyCredential.isConditionalMediationAvailable();\n}\n\nfunction identifyAuthenticationError({ error, options, }) {\n    const { publicKey } = options;\n    if (!publicKey) {\n        throw Error('options was missing required publicKey property');\n    }\n    if (error.name === 'AbortError') {\n        if (options.signal instanceof AbortSignal) {\n            return new WebAuthnError({\n                message: 'Authentication ceremony was sent an abort signal',\n                code: 'ERROR_CEREMONY_ABORTED',\n                cause: error,\n            });\n        }\n    }\n    else if (error.name === 'NotAllowedError') {\n        return new WebAuthnError({\n            message: error.message,\n            code: 'ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY',\n            cause: error,\n        });\n    }\n    else if (error.name === 'SecurityError') {\n        const effectiveDomain = window.location.hostname;\n        if (!isValidDomain(effectiveDomain)) {\n            return new WebAuthnError({\n                message: `${window.location.hostname} is an invalid domain`,\n                code: 'ERROR_INVALID_DOMAIN',\n                cause: error,\n            });\n        }\n        else if (publicKey.rpId !== effectiveDomain) {\n            return new WebAuthnError({\n                message: `The RP ID \"${publicKey.rpId}\" is invalid for this domain`,\n                code: 'ERROR_INVALID_RP_ID',\n                cause: error,\n            });\n        }\n    }\n    else if (error.name === 'UnknownError') {\n        return new WebAuthnError({\n            message: 'The authenticator was unable to process the specified options, or could not create a new assertion signature',\n            code: 'ERROR_AUTHENTICATOR_GENERAL_ERROR',\n            cause: error,\n        });\n    }\n    return error;\n}\n\nasync function startAuthentication(requestOptionsJSON, useBrowserAutofill = false) {\n    if (!browserSupportsWebAuthn()) {\n        throw new Error('WebAuthn is not supported in this browser');\n    }\n    let allowCredentials;\n    if (requestOptionsJSON.allowCredentials?.length !== 0) {\n        allowCredentials = requestOptionsJSON.allowCredentials?.map(toPublicKeyCredentialDescriptor);\n    }\n    const publicKey = {\n        ...requestOptionsJSON,\n        challenge: base64URLStringToBuffer(requestOptionsJSON.challenge),\n        allowCredentials,\n    };\n    const options = {};\n    if (useBrowserAutofill) {\n        if (!(await browserSupportsWebAuthnAutofill())) {\n            throw Error('Browser does not support WebAuthn autofill');\n        }\n        const eligibleInputs = document.querySelectorAll('input[autocomplete$=\\'webauthn\\']');\n        if (eligibleInputs.length < 1) {\n            throw Error('No <input> with \"webauthn\" as the only or last value in its `autocomplete` attribute was detected');\n        }\n        options.mediation = 'conditional';\n        publicKey.allowCredentials = [];\n    }\n    options.publicKey = publicKey;\n    options.signal = WebAuthnAbortService.createNewAbortSignal();\n    let credential;\n    try {\n        credential = (await navigator.credentials.get(options));\n    }\n    catch (err) {\n        throw identifyAuthenticationError({ error: err, options });\n    }\n    if (!credential) {\n        throw new Error('Authentication was not completed');\n    }\n    const { id, rawId, response, type } = credential;\n    let userHandle = undefined;\n    if (response.userHandle) {\n        userHandle = bufferToUTF8String(response.userHandle);\n    }\n    return {\n        id,\n        rawId: bufferToBase64URLString(rawId),\n        response: {\n            authenticatorData: bufferToBase64URLString(response.authenticatorData),\n            clientDataJSON: bufferToBase64URLString(response.clientDataJSON),\n            signature: bufferToBase64URLString(response.signature),\n            userHandle,\n        },\n        type,\n        clientExtensionResults: credential.getClientExtensionResults(),\n        authenticatorAttachment: toAuthenticatorAttachment(credential.authenticatorAttachment),\n    };\n}\n\nfunction platformAuthenticatorIsAvailable() {\n    if (!browserSupportsWebAuthn()) {\n        return new Promise((resolve) => resolve(false));\n    }\n    return PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNpbXBsZXdlYmF1dGhuL2Jyb3dzZXIvZGlzdC9idW5kbGUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksS0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxHQUFHO0FBQzlDOztBQUVBO0FBQ0Esa0JBQWtCLDZCQUE2QjtBQUMvQyx5QkFBeUIsT0FBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsaUJBQWlCO0FBQ3RELFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBCQUEwQjtBQUN0RDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxnQkFBZ0I7QUFDdkQ7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMscUJBQXFCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0QkFBNEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwR0FBMEcsV0FBVztBQUNySDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsaUJBQWlCO0FBQ3hELFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZUFBZTtBQUN0RDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNEJBQTRCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb290c3RvY2tmdW4vLi9ub2RlX21vZHVsZXMvQHNpbXBsZXdlYmF1dGhuL2Jyb3dzZXIvZGlzdC9idW5kbGUvaW5kZXguanM/MGE3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBbQHNpbXBsZXdlYmF1dGhuL2Jyb3dzZXJAOS4wLjFdICovXG5mdW5jdGlvbiB1dGY4U3RyaW5nVG9CdWZmZXIodmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gYnVmZmVyVG9CYXNlNjRVUkxTdHJpbmcoYnVmZmVyKSB7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBmb3IgKGNvbnN0IGNoYXJDb2RlIG9mIGJ5dGVzKSB7XG4gICAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlKTtcbiAgICB9XG4gICAgY29uc3QgYmFzZTY0U3RyaW5nID0gYnRvYShzdHIpO1xuICAgIHJldHVybiBiYXNlNjRTdHJpbmcucmVwbGFjZSgvXFwrL2csICctJykucmVwbGFjZSgvXFwvL2csICdfJykucmVwbGFjZSgvPS9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFVSTFN0cmluZ1RvQnVmZmVyKGJhc2U2NFVSTFN0cmluZykge1xuICAgIGNvbnN0IGJhc2U2NCA9IGJhc2U2NFVSTFN0cmluZy5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xuICAgIGNvbnN0IHBhZExlbmd0aCA9ICg0IC0gKGJhc2U2NC5sZW5ndGggJSA0KSkgJSA0O1xuICAgIGNvbnN0IHBhZGRlZCA9IGJhc2U2NC5wYWRFbmQoYmFzZTY0Lmxlbmd0aCArIHBhZExlbmd0aCwgJz0nKTtcbiAgICBjb25zdCBiaW5hcnkgPSBhdG9iKHBhZGRlZCk7XG4gICAgY29uc3QgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJpbmFyeS5sZW5ndGgpO1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbmFyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICBieXRlc1tpXSA9IGJpbmFyeS5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVyO1xufVxuXG5mdW5jdGlvbiBicm93c2VyU3VwcG9ydHNXZWJBdXRobigpIHtcbiAgICByZXR1cm4gKHdpbmRvdz8uUHVibGljS2V5Q3JlZGVudGlhbCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3cuUHVibGljS2V5Q3JlZGVudGlhbCA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmZ1bmN0aW9uIHRvUHVibGljS2V5Q3JlZGVudGlhbERlc2NyaXB0b3IoZGVzY3JpcHRvcikge1xuICAgIGNvbnN0IHsgaWQgfSA9IGRlc2NyaXB0b3I7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGVzY3JpcHRvcixcbiAgICAgICAgaWQ6IGJhc2U2NFVSTFN0cmluZ1RvQnVmZmVyKGlkKSxcbiAgICAgICAgdHJhbnNwb3J0czogZGVzY3JpcHRvci50cmFuc3BvcnRzLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWREb21haW4oaG9zdG5hbWUpIHtcbiAgICByZXR1cm4gKGhvc3RuYW1lID09PSAnbG9jYWxob3N0JyB8fFxuICAgICAgICAvXihbYS16MC05XSsoLVthLXowLTldKykqXFwuKStbYS16XXsyLH0kL2kudGVzdChob3N0bmFtZSkpO1xufVxuXG5jbGFzcyBXZWJBdXRobkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHsgbWVzc2FnZSwgY29kZSwgY2F1c2UsIG5hbWUsIH0pIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSwgeyBjYXVzZSB9KTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZSA/PyBjYXVzZS5uYW1lO1xuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaWRlbnRpZnlSZWdpc3RyYXRpb25FcnJvcih7IGVycm9yLCBvcHRpb25zLCB9KSB7XG4gICAgY29uc3QgeyBwdWJsaWNLZXkgfSA9IG9wdGlvbnM7XG4gICAgaWYgKCFwdWJsaWNLZXkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ29wdGlvbnMgd2FzIG1pc3NpbmcgcmVxdWlyZWQgcHVibGljS2V5IHByb3BlcnR5Jyk7XG4gICAgfVxuICAgIGlmIChlcnJvci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2lnbmFsIGluc3RhbmNlb2YgQWJvcnRTaWduYWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV2ViQXV0aG5FcnJvcih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1JlZ2lzdHJhdGlvbiBjZXJlbW9ueSB3YXMgc2VudCBhbiBhYm9ydCBzaWduYWwnLFxuICAgICAgICAgICAgICAgIGNvZGU6ICdFUlJPUl9DRVJFTU9OWV9BQk9SVEVEJyxcbiAgICAgICAgICAgICAgICBjYXVzZTogZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChlcnJvci5uYW1lID09PSAnQ29uc3RyYWludEVycm9yJykge1xuICAgICAgICBpZiAocHVibGljS2V5LmF1dGhlbnRpY2F0b3JTZWxlY3Rpb24/LnJlcXVpcmVSZXNpZGVudEtleSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJBdXRobkVycm9yKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRGlzY292ZXJhYmxlIGNyZWRlbnRpYWxzIHdlcmUgcmVxdWlyZWQgYnV0IG5vIGF2YWlsYWJsZSBhdXRoZW50aWNhdG9yIHN1cHBvcnRlZCBpdCcsXG4gICAgICAgICAgICAgICAgY29kZTogJ0VSUk9SX0FVVEhFTlRJQ0FUT1JfTUlTU0lOR19ESVNDT1ZFUkFCTEVfQ1JFREVOVElBTF9TVVBQT1JUJyxcbiAgICAgICAgICAgICAgICBjYXVzZTogZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwdWJsaWNLZXkuYXV0aGVudGljYXRvclNlbGVjdGlvbj8udXNlclZlcmlmaWNhdGlvbiA9PT0gJ3JlcXVpcmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJBdXRobkVycm9yKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVXNlciB2ZXJpZmljYXRpb24gd2FzIHJlcXVpcmVkIGJ1dCBubyBhdmFpbGFibGUgYXV0aGVudGljYXRvciBzdXBwb3J0ZWQgaXQnLFxuICAgICAgICAgICAgICAgIGNvZGU6ICdFUlJPUl9BVVRIRU5USUNBVE9SX01JU1NJTkdfVVNFUl9WRVJJRklDQVRJT05fU1VQUE9SVCcsXG4gICAgICAgICAgICAgICAgY2F1c2U6IGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXJyb3IubmFtZSA9PT0gJ0ludmFsaWRTdGF0ZUVycm9yJykge1xuICAgICAgICByZXR1cm4gbmV3IFdlYkF1dGhuRXJyb3Ioe1xuICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBhdXRoZW50aWNhdG9yIHdhcyBwcmV2aW91c2x5IHJlZ2lzdGVyZWQnLFxuICAgICAgICAgICAgY29kZTogJ0VSUk9SX0FVVEhFTlRJQ0FUT1JfUFJFVklPVVNMWV9SRUdJU1RFUkVEJyxcbiAgICAgICAgICAgIGNhdXNlOiBlcnJvcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVycm9yLm5hbWUgPT09ICdOb3RBbGxvd2VkRXJyb3InKSB7XG4gICAgICAgIHJldHVybiBuZXcgV2ViQXV0aG5FcnJvcih7XG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgY29kZTogJ0VSUk9SX1BBU1NUSFJPVUdIX1NFRV9DQVVTRV9QUk9QRVJUWScsXG4gICAgICAgICAgICBjYXVzZTogZXJyb3IsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChlcnJvci5uYW1lID09PSAnTm90U3VwcG9ydGVkRXJyb3InKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkUHViS2V5Q3JlZFBhcmFtcyA9IHB1YmxpY0tleS5wdWJLZXlDcmVkUGFyYW1zLmZpbHRlcigocGFyYW0pID0+IHBhcmFtLnR5cGUgPT09ICdwdWJsaWMta2V5Jyk7XG4gICAgICAgIGlmICh2YWxpZFB1YktleUNyZWRQYXJhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFdlYkF1dGhuRXJyb3Ioe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdObyBlbnRyeSBpbiBwdWJLZXlDcmVkUGFyYW1zIHdhcyBvZiB0eXBlIFwicHVibGljLWtleVwiJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAnRVJST1JfTUFMRk9STUVEX1BVQktFWUNSRURQQVJBTVMnLFxuICAgICAgICAgICAgICAgIGNhdXNlOiBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgV2ViQXV0aG5FcnJvcih7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTm8gYXZhaWxhYmxlIGF1dGhlbnRpY2F0b3Igc3VwcG9ydGVkIGFueSBvZiB0aGUgc3BlY2lmaWVkIHB1YktleUNyZWRQYXJhbXMgYWxnb3JpdGhtcycsXG4gICAgICAgICAgICBjb2RlOiAnRVJST1JfQVVUSEVOVElDQVRPUl9OT19TVVBQT1JURURfUFVCS0VZQ1JFRFBBUkFNU19BTEcnLFxuICAgICAgICAgICAgY2F1c2U6IGVycm9yLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXJyb3IubmFtZSA9PT0gJ1NlY3VyaXR5RXJyb3InKSB7XG4gICAgICAgIGNvbnN0IGVmZmVjdGl2ZURvbWFpbiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAgICAgaWYgKCFpc1ZhbGlkRG9tYWluKGVmZmVjdGl2ZURvbWFpbikpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV2ViQXV0aG5FcnJvcih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lfSBpcyBhbiBpbnZhbGlkIGRvbWFpbmAsXG4gICAgICAgICAgICAgICAgY29kZTogJ0VSUk9SX0lOVkFMSURfRE9NQUlOJyxcbiAgICAgICAgICAgICAgICBjYXVzZTogZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwdWJsaWNLZXkucnAuaWQgIT09IGVmZmVjdGl2ZURvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJBdXRobkVycm9yKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgVGhlIFJQIElEIFwiJHtwdWJsaWNLZXkucnAuaWR9XCIgaXMgaW52YWxpZCBmb3IgdGhpcyBkb21haW5gLFxuICAgICAgICAgICAgICAgIGNvZGU6ICdFUlJPUl9JTlZBTElEX1JQX0lEJyxcbiAgICAgICAgICAgICAgICBjYXVzZTogZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChlcnJvci5uYW1lID09PSAnVHlwZUVycm9yJykge1xuICAgICAgICBpZiAocHVibGljS2V5LnVzZXIuaWQuYnl0ZUxlbmd0aCA8IDEgfHwgcHVibGljS2V5LnVzZXIuaWQuYnl0ZUxlbmd0aCA+IDY0KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFdlYkF1dGhuRXJyb3Ioe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVc2VyIElEIHdhcyBub3QgYmV0d2VlbiAxIGFuZCA2NCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAnRVJST1JfSU5WQUxJRF9VU0VSX0lEX0xFTkdUSCcsXG4gICAgICAgICAgICAgICAgY2F1c2U6IGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXJyb3IubmFtZSA9PT0gJ1Vua25vd25FcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBXZWJBdXRobkVycm9yKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgYXV0aGVudGljYXRvciB3YXMgdW5hYmxlIHRvIHByb2Nlc3MgdGhlIHNwZWNpZmllZCBvcHRpb25zLCBvciBjb3VsZCBub3QgY3JlYXRlIGEgbmV3IGNyZWRlbnRpYWwnLFxuICAgICAgICAgICAgY29kZTogJ0VSUk9SX0FVVEhFTlRJQ0FUT1JfR0VORVJBTF9FUlJPUicsXG4gICAgICAgICAgICBjYXVzZTogZXJyb3IsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3I7XG59XG5cbmNsYXNzIEJhc2VXZWJBdXRobkFib3J0U2VydmljZSB7XG4gICAgY3JlYXRlTmV3QWJvcnRTaWduYWwoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoJ0NhbmNlbGxpbmcgZXhpc3RpbmcgV2ViQXV0aG4gQVBJIGNhbGwgZm9yIG5ldyBvbmUnKTtcbiAgICAgICAgICAgIGFib3J0RXJyb3IubmFtZSA9ICdBYm9ydEVycm9yJztcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5hYm9ydChhYm9ydEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXdDb250cm9sbGVyO1xuICAgICAgICByZXR1cm4gbmV3Q29udHJvbGxlci5zaWduYWw7XG4gICAgfVxuICAgIGNhbmNlbENlcmVtb255KCkge1xuICAgICAgICBpZiAodGhpcy5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICBjb25zdCBhYm9ydEVycm9yID0gbmV3IEVycm9yKCdNYW51YWxseSBjYW5jZWxsaW5nIGV4aXN0aW5nIFdlYkF1dGhuIEFQSSBjYWxsJyk7XG4gICAgICAgICAgICBhYm9ydEVycm9yLm5hbWUgPSAnQWJvcnRFcnJvcic7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuYWJvcnQoYWJvcnRFcnJvcik7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5jb25zdCBXZWJBdXRobkFib3J0U2VydmljZSA9IG5ldyBCYXNlV2ViQXV0aG5BYm9ydFNlcnZpY2UoKTtcblxuY29uc3QgYXR0YWNobWVudHMgPSBbJ2Nyb3NzLXBsYXRmb3JtJywgJ3BsYXRmb3JtJ107XG5mdW5jdGlvbiB0b0F1dGhlbnRpY2F0b3JBdHRhY2htZW50KGF0dGFjaG1lbnQpIHtcbiAgICBpZiAoIWF0dGFjaG1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYXR0YWNobWVudHMuaW5kZXhPZihhdHRhY2htZW50KSA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gYXR0YWNobWVudDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRSZWdpc3RyYXRpb24oY3JlYXRpb25PcHRpb25zSlNPTikge1xuICAgIGlmICghYnJvd3NlclN1cHBvcnRzV2ViQXV0aG4oKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYkF1dGhuIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJyk7XG4gICAgfVxuICAgIGNvbnN0IHB1YmxpY0tleSA9IHtcbiAgICAgICAgLi4uY3JlYXRpb25PcHRpb25zSlNPTixcbiAgICAgICAgY2hhbGxlbmdlOiBiYXNlNjRVUkxTdHJpbmdUb0J1ZmZlcihjcmVhdGlvbk9wdGlvbnNKU09OLmNoYWxsZW5nZSksXG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgIC4uLmNyZWF0aW9uT3B0aW9uc0pTT04udXNlcixcbiAgICAgICAgICAgIGlkOiB1dGY4U3RyaW5nVG9CdWZmZXIoY3JlYXRpb25PcHRpb25zSlNPTi51c2VyLmlkKSxcbiAgICAgICAgfSxcbiAgICAgICAgZXhjbHVkZUNyZWRlbnRpYWxzOiBjcmVhdGlvbk9wdGlvbnNKU09OLmV4Y2x1ZGVDcmVkZW50aWFscz8ubWFwKHRvUHVibGljS2V5Q3JlZGVudGlhbERlc2NyaXB0b3IpLFxuICAgIH07XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgcHVibGljS2V5IH07XG4gICAgb3B0aW9ucy5zaWduYWwgPSBXZWJBdXRobkFib3J0U2VydmljZS5jcmVhdGVOZXdBYm9ydFNpZ25hbCgpO1xuICAgIGxldCBjcmVkZW50aWFsO1xuICAgIHRyeSB7XG4gICAgICAgIGNyZWRlbnRpYWwgPSAoYXdhaXQgbmF2aWdhdG9yLmNyZWRlbnRpYWxzLmNyZWF0ZShvcHRpb25zKSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgaWRlbnRpZnlSZWdpc3RyYXRpb25FcnJvcih7IGVycm9yOiBlcnIsIG9wdGlvbnMgfSk7XG4gICAgfVxuICAgIGlmICghY3JlZGVudGlhbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZ2lzdHJhdGlvbiB3YXMgbm90IGNvbXBsZXRlZCcpO1xuICAgIH1cbiAgICBjb25zdCB7IGlkLCByYXdJZCwgcmVzcG9uc2UsIHR5cGUgfSA9IGNyZWRlbnRpYWw7XG4gICAgbGV0IHRyYW5zcG9ydHMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHR5cGVvZiByZXNwb25zZS5nZXRUcmFuc3BvcnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRyYW5zcG9ydHMgPSByZXNwb25zZS5nZXRUcmFuc3BvcnRzKCk7XG4gICAgfVxuICAgIGxldCByZXNwb25zZVB1YmxpY0tleUFsZ29yaXRobSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodHlwZW9mIHJlc3BvbnNlLmdldFB1YmxpY0tleUFsZ29yaXRobSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2VQdWJsaWNLZXlBbGdvcml0aG0gPSByZXNwb25zZS5nZXRQdWJsaWNLZXlBbGdvcml0aG0oKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHdhcm5PbkJyb2tlbkltcGxlbWVudGF0aW9uKCdnZXRQdWJsaWNLZXlBbGdvcml0aG0oKScsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgcmVzcG9uc2VQdWJsaWNLZXkgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHR5cGVvZiByZXNwb25zZS5nZXRQdWJsaWNLZXkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IF9wdWJsaWNLZXkgPSByZXNwb25zZS5nZXRQdWJsaWNLZXkoKTtcbiAgICAgICAgICAgIGlmIChfcHVibGljS2V5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VQdWJsaWNLZXkgPSBidWZmZXJUb0Jhc2U2NFVSTFN0cmluZyhfcHVibGljS2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHdhcm5PbkJyb2tlbkltcGxlbWVudGF0aW9uKCdnZXRQdWJsaWNLZXkoKScsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgcmVzcG9uc2VBdXRoZW50aWNhdG9yRGF0YTtcbiAgICBpZiAodHlwZW9mIHJlc3BvbnNlLmdldEF1dGhlbnRpY2F0b3JEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZUF1dGhlbnRpY2F0b3JEYXRhID0gYnVmZmVyVG9CYXNlNjRVUkxTdHJpbmcocmVzcG9uc2UuZ2V0QXV0aGVudGljYXRvckRhdGEoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB3YXJuT25Ccm9rZW5JbXBsZW1lbnRhdGlvbignZ2V0QXV0aGVudGljYXRvckRhdGEoKScsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgcmF3SWQ6IGJ1ZmZlclRvQmFzZTY0VVJMU3RyaW5nKHJhd0lkKSxcbiAgICAgICAgcmVzcG9uc2U6IHtcbiAgICAgICAgICAgIGF0dGVzdGF0aW9uT2JqZWN0OiBidWZmZXJUb0Jhc2U2NFVSTFN0cmluZyhyZXNwb25zZS5hdHRlc3RhdGlvbk9iamVjdCksXG4gICAgICAgICAgICBjbGllbnREYXRhSlNPTjogYnVmZmVyVG9CYXNlNjRVUkxTdHJpbmcocmVzcG9uc2UuY2xpZW50RGF0YUpTT04pLFxuICAgICAgICAgICAgdHJhbnNwb3J0cyxcbiAgICAgICAgICAgIHB1YmxpY0tleUFsZ29yaXRobTogcmVzcG9uc2VQdWJsaWNLZXlBbGdvcml0aG0sXG4gICAgICAgICAgICBwdWJsaWNLZXk6IHJlc3BvbnNlUHVibGljS2V5LFxuICAgICAgICAgICAgYXV0aGVudGljYXRvckRhdGE6IHJlc3BvbnNlQXV0aGVudGljYXRvckRhdGEsXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGNsaWVudEV4dGVuc2lvblJlc3VsdHM6IGNyZWRlbnRpYWwuZ2V0Q2xpZW50RXh0ZW5zaW9uUmVzdWx0cygpLFxuICAgICAgICBhdXRoZW50aWNhdG9yQXR0YWNobWVudDogdG9BdXRoZW50aWNhdG9yQXR0YWNobWVudChjcmVkZW50aWFsLmF1dGhlbnRpY2F0b3JBdHRhY2htZW50KSxcbiAgICB9O1xufVxuZnVuY3Rpb24gd2Fybk9uQnJva2VuSW1wbGVtZW50YXRpb24obWV0aG9kTmFtZSwgY2F1c2UpIHtcbiAgICBjb25zb2xlLndhcm4oYFRoZSBicm93c2VyIGV4dGVuc2lvbiB0aGF0IGludGVyY2VwdGVkIHRoaXMgV2ViQXV0aG4gQVBJIGNhbGwgaW5jb3JyZWN0bHkgaW1wbGVtZW50ZWQgJHttZXRob2ROYW1lfS4gWW91IHNob3VsZCByZXBvcnQgdGhpcyBlcnJvciB0byB0aGVtLlxcbmAsIGNhdXNlKTtcbn1cblxuZnVuY3Rpb24gYnVmZmVyVG9VVEY4U3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBUZXh0RGVjb2RlcigndXRmLTgnKS5kZWNvZGUodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBicm93c2VyU3VwcG9ydHNXZWJBdXRobkF1dG9maWxsKCkge1xuICAgIGNvbnN0IGdsb2JhbFB1YmxpY0tleUNyZWRlbnRpYWwgPSB3aW5kb3dcbiAgICAgICAgLlB1YmxpY0tleUNyZWRlbnRpYWw7XG4gICAgaWYgKGdsb2JhbFB1YmxpY0tleUNyZWRlbnRpYWwuaXNDb25kaXRpb25hbE1lZGlhdGlvbkF2YWlsYWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZShmYWxzZSkpO1xuICAgIH1cbiAgICByZXR1cm4gZ2xvYmFsUHVibGljS2V5Q3JlZGVudGlhbC5pc0NvbmRpdGlvbmFsTWVkaWF0aW9uQXZhaWxhYmxlKCk7XG59XG5cbmZ1bmN0aW9uIGlkZW50aWZ5QXV0aGVudGljYXRpb25FcnJvcih7IGVycm9yLCBvcHRpb25zLCB9KSB7XG4gICAgY29uc3QgeyBwdWJsaWNLZXkgfSA9IG9wdGlvbnM7XG4gICAgaWYgKCFwdWJsaWNLZXkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ29wdGlvbnMgd2FzIG1pc3NpbmcgcmVxdWlyZWQgcHVibGljS2V5IHByb3BlcnR5Jyk7XG4gICAgfVxuICAgIGlmIChlcnJvci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2lnbmFsIGluc3RhbmNlb2YgQWJvcnRTaWduYWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV2ViQXV0aG5FcnJvcih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0F1dGhlbnRpY2F0aW9uIGNlcmVtb255IHdhcyBzZW50IGFuIGFib3J0IHNpZ25hbCcsXG4gICAgICAgICAgICAgICAgY29kZTogJ0VSUk9SX0NFUkVNT05ZX0FCT1JURUQnLFxuICAgICAgICAgICAgICAgIGNhdXNlOiBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGVycm9yLm5hbWUgPT09ICdOb3RBbGxvd2VkRXJyb3InKSB7XG4gICAgICAgIHJldHVybiBuZXcgV2ViQXV0aG5FcnJvcih7XG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgY29kZTogJ0VSUk9SX1BBU1NUSFJPVUdIX1NFRV9DQVVTRV9QUk9QRVJUWScsXG4gICAgICAgICAgICBjYXVzZTogZXJyb3IsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChlcnJvci5uYW1lID09PSAnU2VjdXJpdHlFcnJvcicpIHtcbiAgICAgICAgY29uc3QgZWZmZWN0aXZlRG9tYWluID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xuICAgICAgICBpZiAoIWlzVmFsaWREb21haW4oZWZmZWN0aXZlRG9tYWluKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJBdXRobkVycm9yKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgJHt3aW5kb3cubG9jYXRpb24uaG9zdG5hbWV9IGlzIGFuIGludmFsaWQgZG9tYWluYCxcbiAgICAgICAgICAgICAgICBjb2RlOiAnRVJST1JfSU5WQUxJRF9ET01BSU4nLFxuICAgICAgICAgICAgICAgIGNhdXNlOiBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHB1YmxpY0tleS5ycElkICE9PSBlZmZlY3RpdmVEb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV2ViQXV0aG5FcnJvcih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFRoZSBSUCBJRCBcIiR7cHVibGljS2V5LnJwSWR9XCIgaXMgaW52YWxpZCBmb3IgdGhpcyBkb21haW5gLFxuICAgICAgICAgICAgICAgIGNvZGU6ICdFUlJPUl9JTlZBTElEX1JQX0lEJyxcbiAgICAgICAgICAgICAgICBjYXVzZTogZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChlcnJvci5uYW1lID09PSAnVW5rbm93bkVycm9yJykge1xuICAgICAgICByZXR1cm4gbmV3IFdlYkF1dGhuRXJyb3Ioe1xuICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBhdXRoZW50aWNhdG9yIHdhcyB1bmFibGUgdG8gcHJvY2VzcyB0aGUgc3BlY2lmaWVkIG9wdGlvbnMsIG9yIGNvdWxkIG5vdCBjcmVhdGUgYSBuZXcgYXNzZXJ0aW9uIHNpZ25hdHVyZScsXG4gICAgICAgICAgICBjb2RlOiAnRVJST1JfQVVUSEVOVElDQVRPUl9HRU5FUkFMX0VSUk9SJyxcbiAgICAgICAgICAgIGNhdXNlOiBlcnJvcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBlcnJvcjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRBdXRoZW50aWNhdGlvbihyZXF1ZXN0T3B0aW9uc0pTT04sIHVzZUJyb3dzZXJBdXRvZmlsbCA9IGZhbHNlKSB7XG4gICAgaWYgKCFicm93c2VyU3VwcG9ydHNXZWJBdXRobigpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignV2ViQXV0aG4gaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKTtcbiAgICB9XG4gICAgbGV0IGFsbG93Q3JlZGVudGlhbHM7XG4gICAgaWYgKHJlcXVlc3RPcHRpb25zSlNPTi5hbGxvd0NyZWRlbnRpYWxzPy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgYWxsb3dDcmVkZW50aWFscyA9IHJlcXVlc3RPcHRpb25zSlNPTi5hbGxvd0NyZWRlbnRpYWxzPy5tYXAodG9QdWJsaWNLZXlDcmVkZW50aWFsRGVzY3JpcHRvcik7XG4gICAgfVxuICAgIGNvbnN0IHB1YmxpY0tleSA9IHtcbiAgICAgICAgLi4ucmVxdWVzdE9wdGlvbnNKU09OLFxuICAgICAgICBjaGFsbGVuZ2U6IGJhc2U2NFVSTFN0cmluZ1RvQnVmZmVyKHJlcXVlc3RPcHRpb25zSlNPTi5jaGFsbGVuZ2UpLFxuICAgICAgICBhbGxvd0NyZWRlbnRpYWxzLFxuICAgIH07XG4gICAgY29uc3Qgb3B0aW9ucyA9IHt9O1xuICAgIGlmICh1c2VCcm93c2VyQXV0b2ZpbGwpIHtcbiAgICAgICAgaWYgKCEoYXdhaXQgYnJvd3NlclN1cHBvcnRzV2ViQXV0aG5BdXRvZmlsbCgpKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0Jyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBXZWJBdXRobiBhdXRvZmlsbCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsaWdpYmxlSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbYXV0b2NvbXBsZXRlJD1cXCd3ZWJhdXRoblxcJ10nKTtcbiAgICAgICAgaWYgKGVsaWdpYmxlSW5wdXRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdObyA8aW5wdXQ+IHdpdGggXCJ3ZWJhdXRoblwiIGFzIHRoZSBvbmx5IG9yIGxhc3QgdmFsdWUgaW4gaXRzIGBhdXRvY29tcGxldGVgIGF0dHJpYnV0ZSB3YXMgZGV0ZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLm1lZGlhdGlvbiA9ICdjb25kaXRpb25hbCc7XG4gICAgICAgIHB1YmxpY0tleS5hbGxvd0NyZWRlbnRpYWxzID0gW107XG4gICAgfVxuICAgIG9wdGlvbnMucHVibGljS2V5ID0gcHVibGljS2V5O1xuICAgIG9wdGlvbnMuc2lnbmFsID0gV2ViQXV0aG5BYm9ydFNlcnZpY2UuY3JlYXRlTmV3QWJvcnRTaWduYWwoKTtcbiAgICBsZXQgY3JlZGVudGlhbDtcbiAgICB0cnkge1xuICAgICAgICBjcmVkZW50aWFsID0gKGF3YWl0IG5hdmlnYXRvci5jcmVkZW50aWFscy5nZXQob3B0aW9ucykpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IGlkZW50aWZ5QXV0aGVudGljYXRpb25FcnJvcih7IGVycm9yOiBlcnIsIG9wdGlvbnMgfSk7XG4gICAgfVxuICAgIGlmICghY3JlZGVudGlhbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F1dGhlbnRpY2F0aW9uIHdhcyBub3QgY29tcGxldGVkJyk7XG4gICAgfVxuICAgIGNvbnN0IHsgaWQsIHJhd0lkLCByZXNwb25zZSwgdHlwZSB9ID0gY3JlZGVudGlhbDtcbiAgICBsZXQgdXNlckhhbmRsZSA9IHVuZGVmaW5lZDtcbiAgICBpZiAocmVzcG9uc2UudXNlckhhbmRsZSkge1xuICAgICAgICB1c2VySGFuZGxlID0gYnVmZmVyVG9VVEY4U3RyaW5nKHJlc3BvbnNlLnVzZXJIYW5kbGUpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgcmF3SWQ6IGJ1ZmZlclRvQmFzZTY0VVJMU3RyaW5nKHJhd0lkKSxcbiAgICAgICAgcmVzcG9uc2U6IHtcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0b3JEYXRhOiBidWZmZXJUb0Jhc2U2NFVSTFN0cmluZyhyZXNwb25zZS5hdXRoZW50aWNhdG9yRGF0YSksXG4gICAgICAgICAgICBjbGllbnREYXRhSlNPTjogYnVmZmVyVG9CYXNlNjRVUkxTdHJpbmcocmVzcG9uc2UuY2xpZW50RGF0YUpTT04pLFxuICAgICAgICAgICAgc2lnbmF0dXJlOiBidWZmZXJUb0Jhc2U2NFVSTFN0cmluZyhyZXNwb25zZS5zaWduYXR1cmUpLFxuICAgICAgICAgICAgdXNlckhhbmRsZSxcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgY2xpZW50RXh0ZW5zaW9uUmVzdWx0czogY3JlZGVudGlhbC5nZXRDbGllbnRFeHRlbnNpb25SZXN1bHRzKCksXG4gICAgICAgIGF1dGhlbnRpY2F0b3JBdHRhY2htZW50OiB0b0F1dGhlbnRpY2F0b3JBdHRhY2htZW50KGNyZWRlbnRpYWwuYXV0aGVudGljYXRvckF0dGFjaG1lbnQpLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHBsYXRmb3JtQXV0aGVudGljYXRvcklzQXZhaWxhYmxlKCkge1xuICAgIGlmICghYnJvd3NlclN1cHBvcnRzV2ViQXV0aG4oKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUoZmFsc2UpKTtcbiAgICB9XG4gICAgcmV0dXJuIFB1YmxpY0tleUNyZWRlbnRpYWwuaXNVc2VyVmVyaWZ5aW5nUGxhdGZvcm1BdXRoZW50aWNhdG9yQXZhaWxhYmxlKCk7XG59XG5cbmV4cG9ydCB7IFdlYkF1dGhuQWJvcnRTZXJ2aWNlLCBXZWJBdXRobkVycm9yLCBiYXNlNjRVUkxTdHJpbmdUb0J1ZmZlciwgYnJvd3NlclN1cHBvcnRzV2ViQXV0aG4sIGJyb3dzZXJTdXBwb3J0c1dlYkF1dGhuQXV0b2ZpbGwsIGJ1ZmZlclRvQmFzZTY0VVJMU3RyaW5nLCBwbGF0Zm9ybUF1dGhlbnRpY2F0b3JJc0F2YWlsYWJsZSwgc3RhcnRBdXRoZW50aWNhdGlvbiwgc3RhcnRSZWdpc3RyYXRpb24gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@simplewebauthn/browser/dist/bundle/index.js\n");

/***/ })

};
;