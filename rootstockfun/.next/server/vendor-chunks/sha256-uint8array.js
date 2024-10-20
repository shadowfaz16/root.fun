"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/sha256-uint8array";
exports.ids = ["vendor-chunks/sha256-uint8array"];
exports.modules = {

/***/ "(ssr)/./node_modules/sha256-uint8array/dist/sha256-uint8array.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/sha256-uint8array/dist/sha256-uint8array.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Hash: () => (/* binding */ Hash),\n/* harmony export */   createHash: () => (/* binding */ createHash)\n/* harmony export */ });\n/**\n * sha256-uint8array.ts\n */\n// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311\nconst K = [\n    0x428a2f98 | 0, 0x71374491 | 0, 0xb5c0fbcf | 0, 0xe9b5dba5 | 0,\n    0x3956c25b | 0, 0x59f111f1 | 0, 0x923f82a4 | 0, 0xab1c5ed5 | 0,\n    0xd807aa98 | 0, 0x12835b01 | 0, 0x243185be | 0, 0x550c7dc3 | 0,\n    0x72be5d74 | 0, 0x80deb1fe | 0, 0x9bdc06a7 | 0, 0xc19bf174 | 0,\n    0xe49b69c1 | 0, 0xefbe4786 | 0, 0x0fc19dc6 | 0, 0x240ca1cc | 0,\n    0x2de92c6f | 0, 0x4a7484aa | 0, 0x5cb0a9dc | 0, 0x76f988da | 0,\n    0x983e5152 | 0, 0xa831c66d | 0, 0xb00327c8 | 0, 0xbf597fc7 | 0,\n    0xc6e00bf3 | 0, 0xd5a79147 | 0, 0x06ca6351 | 0, 0x14292967 | 0,\n    0x27b70a85 | 0, 0x2e1b2138 | 0, 0x4d2c6dfc | 0, 0x53380d13 | 0,\n    0x650a7354 | 0, 0x766a0abb | 0, 0x81c2c92e | 0, 0x92722c85 | 0,\n    0xa2bfe8a1 | 0, 0xa81a664b | 0, 0xc24b8b70 | 0, 0xc76c51a3 | 0,\n    0xd192e819 | 0, 0xd6990624 | 0, 0xf40e3585 | 0, 0x106aa070 | 0,\n    0x19a4c116 | 0, 0x1e376c08 | 0, 0x2748774c | 0, 0x34b0bcb5 | 0,\n    0x391c0cb3 | 0, 0x4ed8aa4a | 0, 0x5b9cca4f | 0, 0x682e6ff3 | 0,\n    0x748f82ee | 0, 0x78a5636f | 0, 0x84c87814 | 0, 0x8cc70208 | 0,\n    0x90befffa | 0, 0xa4506ceb | 0, 0xbef9a3f7 | 0, 0xc67178f2 | 0,\n];\nconst algorithms = {\n    sha256: 1,\n};\nfunction createHash(algorithm) {\n    if (algorithm && !algorithms[algorithm] && !algorithms[algorithm.toLowerCase()]) {\n        throw new Error(\"Digest method not supported\");\n    }\n    return new Hash();\n}\nclass Hash {\n    constructor() {\n        // first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19\n        this.A = 0x6a09e667 | 0;\n        this.B = 0xbb67ae85 | 0;\n        this.C = 0x3c6ef372 | 0;\n        this.D = 0xa54ff53a | 0;\n        this.E = 0x510e527f | 0;\n        this.F = 0x9b05688c | 0;\n        this.G = 0x1f83d9ab | 0;\n        this.H = 0x5be0cd19 | 0;\n        this._size = 0;\n        this._sp = 0; // surrogate pair\n        if (!sharedBuffer || sharedOffset >= 8000 /* N.allocTotal */) {\n            sharedBuffer = new ArrayBuffer(8000 /* N.allocTotal */);\n            sharedOffset = 0;\n        }\n        this._byte = new Uint8Array(sharedBuffer, sharedOffset, 80 /* N.allocBytes */);\n        this._word = new Int32Array(sharedBuffer, sharedOffset, 20 /* N.allocWords */);\n        sharedOffset += 80 /* N.allocBytes */;\n    }\n    update(data) {\n        // data: string\n        if (\"string\" === typeof data) {\n            return this._utf8(data);\n        }\n        // data: undefined\n        if (data == null) {\n            throw new TypeError(\"Invalid type: \" + typeof data);\n        }\n        const byteOffset = data.byteOffset;\n        const length = data.byteLength;\n        let blocks = (length / 64 /* N.inputBytes */) | 0;\n        let offset = 0;\n        // longer than 1 block\n        if (blocks && !(byteOffset & 3) && !(this._size % 64 /* N.inputBytes */)) {\n            const block = new Int32Array(data.buffer, byteOffset, blocks * 16 /* N.inputWords */);\n            while (blocks--) {\n                this._int32(block, offset >> 2);\n                offset += 64 /* N.inputBytes */;\n            }\n            this._size += offset;\n        }\n        // data: TypedArray | DataView\n        const BYTES_PER_ELEMENT = data.BYTES_PER_ELEMENT;\n        if (BYTES_PER_ELEMENT !== 1 && data.buffer) {\n            const rest = new Uint8Array(data.buffer, byteOffset + offset, length - offset);\n            return this._uint8(rest);\n        }\n        // no more bytes\n        if (offset === length)\n            return this;\n        // data: Uint8Array | Int8Array\n        return this._uint8(data, offset);\n    }\n    _uint8(data, offset) {\n        const { _byte, _word } = this;\n        const length = data.length;\n        offset = offset | 0;\n        while (offset < length) {\n            const start = this._size % 64 /* N.inputBytes */;\n            let index = start;\n            while (offset < length && index < 64 /* N.inputBytes */) {\n                _byte[index++] = data[offset++];\n            }\n            if (index >= 64 /* N.inputBytes */) {\n                this._int32(_word);\n            }\n            this._size += index - start;\n        }\n        return this;\n    }\n    _utf8(text) {\n        const { _byte, _word } = this;\n        const length = text.length;\n        let surrogate = this._sp;\n        for (let offset = 0; offset < length;) {\n            const start = this._size % 64 /* N.inputBytes */;\n            let index = start;\n            while (offset < length && index < 64 /* N.inputBytes */) {\n                let code = text.charCodeAt(offset++) | 0;\n                if (code < 0x80) {\n                    // ASCII characters\n                    _byte[index++] = code;\n                }\n                else if (code < 0x800) {\n                    // 2 bytes\n                    _byte[index++] = 0xC0 | (code >>> 6);\n                    _byte[index++] = 0x80 | (code & 0x3F);\n                }\n                else if (code < 0xD800 || code > 0xDFFF) {\n                    // 3 bytes\n                    _byte[index++] = 0xE0 | (code >>> 12);\n                    _byte[index++] = 0x80 | ((code >>> 6) & 0x3F);\n                    _byte[index++] = 0x80 | (code & 0x3F);\n                }\n                else if (surrogate) {\n                    // 4 bytes - surrogate pair\n                    code = ((surrogate & 0x3FF) << 10) + (code & 0x3FF) + 0x10000;\n                    _byte[index++] = 0xF0 | (code >>> 18);\n                    _byte[index++] = 0x80 | ((code >>> 12) & 0x3F);\n                    _byte[index++] = 0x80 | ((code >>> 6) & 0x3F);\n                    _byte[index++] = 0x80 | (code & 0x3F);\n                    surrogate = 0;\n                }\n                else {\n                    surrogate = code;\n                }\n            }\n            if (index >= 64 /* N.inputBytes */) {\n                this._int32(_word);\n                _word[0] = _word[16 /* N.inputWords */];\n            }\n            this._size += index - start;\n        }\n        this._sp = surrogate;\n        return this;\n    }\n    _int32(data, offset) {\n        let { A, B, C, D, E, F, G, H } = this;\n        let i = 0;\n        offset = offset | 0;\n        while (i < 16 /* N.inputWords */) {\n            W[i++] = swap32(data[offset++]);\n        }\n        for (i = 16 /* N.inputWords */; i < 64 /* N.workWords */; i++) {\n            W[i] = (gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16]) | 0;\n        }\n        for (i = 0; i < 64 /* N.workWords */; i++) {\n            const T1 = (H + sigma1(E) + ch(E, F, G) + K[i] + W[i]) | 0;\n            const T2 = (sigma0(A) + maj(A, B, C)) | 0;\n            H = G;\n            G = F;\n            F = E;\n            E = (D + T1) | 0;\n            D = C;\n            C = B;\n            B = A;\n            A = (T1 + T2) | 0;\n        }\n        this.A = (A + this.A) | 0;\n        this.B = (B + this.B) | 0;\n        this.C = (C + this.C) | 0;\n        this.D = (D + this.D) | 0;\n        this.E = (E + this.E) | 0;\n        this.F = (F + this.F) | 0;\n        this.G = (G + this.G) | 0;\n        this.H = (H + this.H) | 0;\n    }\n    digest(encoding) {\n        const { _byte, _word } = this;\n        let i = (this._size % 64 /* N.inputBytes */) | 0;\n        _byte[i++] = 0x80;\n        // pad 0 for current word\n        while (i & 3) {\n            _byte[i++] = 0;\n        }\n        i >>= 2;\n        if (i > 14 /* N.highIndex */) {\n            while (i < 16 /* N.inputWords */) {\n                _word[i++] = 0;\n            }\n            i = 0;\n            this._int32(_word);\n        }\n        // pad 0 for rest words\n        while (i < 16 /* N.inputWords */) {\n            _word[i++] = 0;\n        }\n        // input size\n        const bits64 = this._size * 8;\n        const low32 = (bits64 & 0xffffffff) >>> 0;\n        const high32 = (bits64 - low32) / 0x100000000;\n        if (high32)\n            _word[14 /* N.highIndex */] = swap32(high32);\n        if (low32)\n            _word[15 /* N.lowIndex */] = swap32(low32);\n        this._int32(_word);\n        return (encoding === \"hex\") ? this._hex() : this._bin();\n    }\n    _hex() {\n        const { A, B, C, D, E, F, G, H } = this;\n        return hex32(A) + hex32(B) + hex32(C) + hex32(D) + hex32(E) + hex32(F) + hex32(G) + hex32(H);\n    }\n    _bin() {\n        const { A, B, C, D, E, F, G, H, _byte, _word } = this;\n        _word[0] = swap32(A);\n        _word[1] = swap32(B);\n        _word[2] = swap32(C);\n        _word[3] = swap32(D);\n        _word[4] = swap32(E);\n        _word[5] = swap32(F);\n        _word[6] = swap32(G);\n        _word[7] = swap32(H);\n        return _byte.slice(0, 32);\n    }\n}\nconst W = new Int32Array(64 /* N.workWords */);\nlet sharedBuffer;\nlet sharedOffset = 0;\nconst hex32 = num => (num + 0x100000000).toString(16).substr(-8);\nconst swapLE = (c => (((c << 24) & 0xff000000) | ((c << 8) & 0xff0000) | ((c >> 8) & 0xff00) | ((c >> 24) & 0xff)));\nconst swapBE = (c => c);\nconst swap32 = isBE() ? swapBE : swapLE;\nconst ch = (x, y, z) => (z ^ (x & (y ^ z)));\nconst maj = (x, y, z) => ((x & y) | (z & (x | y)));\nconst sigma0 = x => ((x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10));\nconst sigma1 = x => ((x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7));\nconst gamma0 = x => ((x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ (x >>> 3));\nconst gamma1 = x => ((x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ (x >>> 10));\nfunction isBE() {\n    const buf = new Uint8Array(new Uint16Array([0xFEFF]).buffer); // BOM\n    return (buf[0] === 0xFE);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2hhMjU2LXVpbnQ4YXJyYXkvZGlzdC9zaGEyNTYtdWludDhhcnJheS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTtBQUNBLDZCQUE2QixnQkFBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5QkFBeUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QywwQkFBMEI7QUFDbEU7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdUNBQXVDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb290c3RvY2tmdW4vLi9ub2RlX21vZHVsZXMvc2hhMjU2LXVpbnQ4YXJyYXkvZGlzdC9zaGEyNTYtdWludDhhcnJheS5tanM/ZjM5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHNoYTI1Ni11aW50OGFycmF5LnRzXG4gKi9cbi8vIGZpcnN0IDMyIGJpdHMgb2YgdGhlIGZyYWN0aW9uYWwgcGFydHMgb2YgdGhlIGN1YmUgcm9vdHMgb2YgdGhlIGZpcnN0IDY0IHByaW1lcyAyLi4zMTFcbmNvbnN0IEsgPSBbXG4gICAgMHg0MjhhMmY5OCB8IDAsIDB4NzEzNzQ0OTEgfCAwLCAweGI1YzBmYmNmIHwgMCwgMHhlOWI1ZGJhNSB8IDAsXG4gICAgMHgzOTU2YzI1YiB8IDAsIDB4NTlmMTExZjEgfCAwLCAweDkyM2Y4MmE0IHwgMCwgMHhhYjFjNWVkNSB8IDAsXG4gICAgMHhkODA3YWE5OCB8IDAsIDB4MTI4MzViMDEgfCAwLCAweDI0MzE4NWJlIHwgMCwgMHg1NTBjN2RjMyB8IDAsXG4gICAgMHg3MmJlNWQ3NCB8IDAsIDB4ODBkZWIxZmUgfCAwLCAweDliZGMwNmE3IHwgMCwgMHhjMTliZjE3NCB8IDAsXG4gICAgMHhlNDliNjljMSB8IDAsIDB4ZWZiZTQ3ODYgfCAwLCAweDBmYzE5ZGM2IHwgMCwgMHgyNDBjYTFjYyB8IDAsXG4gICAgMHgyZGU5MmM2ZiB8IDAsIDB4NGE3NDg0YWEgfCAwLCAweDVjYjBhOWRjIHwgMCwgMHg3NmY5ODhkYSB8IDAsXG4gICAgMHg5ODNlNTE1MiB8IDAsIDB4YTgzMWM2NmQgfCAwLCAweGIwMDMyN2M4IHwgMCwgMHhiZjU5N2ZjNyB8IDAsXG4gICAgMHhjNmUwMGJmMyB8IDAsIDB4ZDVhNzkxNDcgfCAwLCAweDA2Y2E2MzUxIHwgMCwgMHgxNDI5Mjk2NyB8IDAsXG4gICAgMHgyN2I3MGE4NSB8IDAsIDB4MmUxYjIxMzggfCAwLCAweDRkMmM2ZGZjIHwgMCwgMHg1MzM4MGQxMyB8IDAsXG4gICAgMHg2NTBhNzM1NCB8IDAsIDB4NzY2YTBhYmIgfCAwLCAweDgxYzJjOTJlIHwgMCwgMHg5MjcyMmM4NSB8IDAsXG4gICAgMHhhMmJmZThhMSB8IDAsIDB4YTgxYTY2NGIgfCAwLCAweGMyNGI4YjcwIHwgMCwgMHhjNzZjNTFhMyB8IDAsXG4gICAgMHhkMTkyZTgxOSB8IDAsIDB4ZDY5OTA2MjQgfCAwLCAweGY0MGUzNTg1IHwgMCwgMHgxMDZhYTA3MCB8IDAsXG4gICAgMHgxOWE0YzExNiB8IDAsIDB4MWUzNzZjMDggfCAwLCAweDI3NDg3NzRjIHwgMCwgMHgzNGIwYmNiNSB8IDAsXG4gICAgMHgzOTFjMGNiMyB8IDAsIDB4NGVkOGFhNGEgfCAwLCAweDViOWNjYTRmIHwgMCwgMHg2ODJlNmZmMyB8IDAsXG4gICAgMHg3NDhmODJlZSB8IDAsIDB4NzhhNTYzNmYgfCAwLCAweDg0Yzg3ODE0IHwgMCwgMHg4Y2M3MDIwOCB8IDAsXG4gICAgMHg5MGJlZmZmYSB8IDAsIDB4YTQ1MDZjZWIgfCAwLCAweGJlZjlhM2Y3IHwgMCwgMHhjNjcxNzhmMiB8IDAsXG5dO1xuY29uc3QgYWxnb3JpdGhtcyA9IHtcbiAgICBzaGEyNTY6IDEsXG59O1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhhc2goYWxnb3JpdGhtKSB7XG4gICAgaWYgKGFsZ29yaXRobSAmJiAhYWxnb3JpdGhtc1thbGdvcml0aG1dICYmICFhbGdvcml0aG1zW2FsZ29yaXRobS50b0xvd2VyQ2FzZSgpXSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaWdlc3QgbWV0aG9kIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgSGFzaCgpO1xufVxuZXhwb3J0IGNsYXNzIEhhc2gge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBmaXJzdCAzMiBiaXRzIG9mIHRoZSBmcmFjdGlvbmFsIHBhcnRzIG9mIHRoZSBzcXVhcmUgcm9vdHMgb2YgdGhlIGZpcnN0IDggcHJpbWVzIDIuLjE5XG4gICAgICAgIHRoaXMuQSA9IDB4NmEwOWU2NjcgfCAwO1xuICAgICAgICB0aGlzLkIgPSAweGJiNjdhZTg1IHwgMDtcbiAgICAgICAgdGhpcy5DID0gMHgzYzZlZjM3MiB8IDA7XG4gICAgICAgIHRoaXMuRCA9IDB4YTU0ZmY1M2EgfCAwO1xuICAgICAgICB0aGlzLkUgPSAweDUxMGU1MjdmIHwgMDtcbiAgICAgICAgdGhpcy5GID0gMHg5YjA1Njg4YyB8IDA7XG4gICAgICAgIHRoaXMuRyA9IDB4MWY4M2Q5YWIgfCAwO1xuICAgICAgICB0aGlzLkggPSAweDViZTBjZDE5IHwgMDtcbiAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuX3NwID0gMDsgLy8gc3Vycm9nYXRlIHBhaXJcbiAgICAgICAgaWYgKCFzaGFyZWRCdWZmZXIgfHwgc2hhcmVkT2Zmc2V0ID49IDgwMDAgLyogTi5hbGxvY1RvdGFsICovKSB7XG4gICAgICAgICAgICBzaGFyZWRCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoODAwMCAvKiBOLmFsbG9jVG90YWwgKi8pO1xuICAgICAgICAgICAgc2hhcmVkT2Zmc2V0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9ieXRlID0gbmV3IFVpbnQ4QXJyYXkoc2hhcmVkQnVmZmVyLCBzaGFyZWRPZmZzZXQsIDgwIC8qIE4uYWxsb2NCeXRlcyAqLyk7XG4gICAgICAgIHRoaXMuX3dvcmQgPSBuZXcgSW50MzJBcnJheShzaGFyZWRCdWZmZXIsIHNoYXJlZE9mZnNldCwgMjAgLyogTi5hbGxvY1dvcmRzICovKTtcbiAgICAgICAgc2hhcmVkT2Zmc2V0ICs9IDgwIC8qIE4uYWxsb2NCeXRlcyAqLztcbiAgICB9XG4gICAgdXBkYXRlKGRhdGEpIHtcbiAgICAgICAgLy8gZGF0YTogc3RyaW5nXG4gICAgICAgIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3V0ZjgoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGF0YTogdW5kZWZpbmVkXG4gICAgICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHR5cGU6IFwiICsgdHlwZW9mIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ5dGVPZmZzZXQgPSBkYXRhLmJ5dGVPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGRhdGEuYnl0ZUxlbmd0aDtcbiAgICAgICAgbGV0IGJsb2NrcyA9IChsZW5ndGggLyA2NCAvKiBOLmlucHV0Qnl0ZXMgKi8pIHwgMDtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIC8vIGxvbmdlciB0aGFuIDEgYmxvY2tcbiAgICAgICAgaWYgKGJsb2NrcyAmJiAhKGJ5dGVPZmZzZXQgJiAzKSAmJiAhKHRoaXMuX3NpemUgJSA2NCAvKiBOLmlucHV0Qnl0ZXMgKi8pKSB7XG4gICAgICAgICAgICBjb25zdCBibG9jayA9IG5ldyBJbnQzMkFycmF5KGRhdGEuYnVmZmVyLCBieXRlT2Zmc2V0LCBibG9ja3MgKiAxNiAvKiBOLmlucHV0V29yZHMgKi8pO1xuICAgICAgICAgICAgd2hpbGUgKGJsb2Nrcy0tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faW50MzIoYmxvY2ssIG9mZnNldCA+PiAyKTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNjQgLyogTi5pbnB1dEJ5dGVzICovO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fc2l6ZSArPSBvZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGF0YTogVHlwZWRBcnJheSB8IERhdGFWaWV3XG4gICAgICAgIGNvbnN0IEJZVEVTX1BFUl9FTEVNRU5UID0gZGF0YS5CWVRFU19QRVJfRUxFTUVOVDtcbiAgICAgICAgaWYgKEJZVEVTX1BFUl9FTEVNRU5UICE9PSAxICYmIGRhdGEuYnVmZmVyKSB7XG4gICAgICAgICAgICBjb25zdCByZXN0ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5idWZmZXIsIGJ5dGVPZmZzZXQgKyBvZmZzZXQsIGxlbmd0aCAtIG9mZnNldCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdWludDgocmVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbm8gbW9yZSBieXRlc1xuICAgICAgICBpZiAob2Zmc2V0ID09PSBsZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgLy8gZGF0YTogVWludDhBcnJheSB8IEludDhBcnJheVxuICAgICAgICByZXR1cm4gdGhpcy5fdWludDgoZGF0YSwgb2Zmc2V0KTtcbiAgICB9XG4gICAgX3VpbnQ4KGRhdGEsIG9mZnNldCkge1xuICAgICAgICBjb25zdCB7IF9ieXRlLCBfd29yZCB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gZGF0YS5sZW5ndGg7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gICAgICAgIHdoaWxlIChvZmZzZXQgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fc2l6ZSAlIDY0IC8qIE4uaW5wdXRCeXRlcyAqLztcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHN0YXJ0O1xuICAgICAgICAgICAgd2hpbGUgKG9mZnNldCA8IGxlbmd0aCAmJiBpbmRleCA8IDY0IC8qIE4uaW5wdXRCeXRlcyAqLykge1xuICAgICAgICAgICAgICAgIF9ieXRlW2luZGV4KytdID0gZGF0YVtvZmZzZXQrK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gNjQgLyogTi5pbnB1dEJ5dGVzICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faW50MzIoX3dvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fc2l6ZSArPSBpbmRleCAtIHN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBfdXRmOCh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IHsgX2J5dGUsIF93b3JkIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcbiAgICAgICAgbGV0IHN1cnJvZ2F0ZSA9IHRoaXMuX3NwO1xuICAgICAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBsZW5ndGg7KSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuX3NpemUgJSA2NCAvKiBOLmlucHV0Qnl0ZXMgKi87XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBzdGFydDtcbiAgICAgICAgICAgIHdoaWxlIChvZmZzZXQgPCBsZW5ndGggJiYgaW5kZXggPCA2NCAvKiBOLmlucHV0Qnl0ZXMgKi8pIHtcbiAgICAgICAgICAgICAgICBsZXQgY29kZSA9IHRleHQuY2hhckNvZGVBdChvZmZzZXQrKykgfCAwO1xuICAgICAgICAgICAgICAgIGlmIChjb2RlIDwgMHg4MCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBU0NJSSBjaGFyYWN0ZXJzXG4gICAgICAgICAgICAgICAgICAgIF9ieXRlW2luZGV4KytdID0gY29kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29kZSA8IDB4ODAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIDIgYnl0ZXNcbiAgICAgICAgICAgICAgICAgICAgX2J5dGVbaW5kZXgrK10gPSAweEMwIHwgKGNvZGUgPj4+IDYpO1xuICAgICAgICAgICAgICAgICAgICBfYnl0ZVtpbmRleCsrXSA9IDB4ODAgfCAoY29kZSAmIDB4M0YpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb2RlIDwgMHhEODAwIHx8IGNvZGUgPiAweERGRkYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gMyBieXRlc1xuICAgICAgICAgICAgICAgICAgICBfYnl0ZVtpbmRleCsrXSA9IDB4RTAgfCAoY29kZSA+Pj4gMTIpO1xuICAgICAgICAgICAgICAgICAgICBfYnl0ZVtpbmRleCsrXSA9IDB4ODAgfCAoKGNvZGUgPj4+IDYpICYgMHgzRik7XG4gICAgICAgICAgICAgICAgICAgIF9ieXRlW2luZGV4KytdID0gMHg4MCB8IChjb2RlICYgMHgzRik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN1cnJvZ2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyA0IGJ5dGVzIC0gc3Vycm9nYXRlIHBhaXJcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9ICgoc3Vycm9nYXRlICYgMHgzRkYpIDw8IDEwKSArIChjb2RlICYgMHgzRkYpICsgMHgxMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgX2J5dGVbaW5kZXgrK10gPSAweEYwIHwgKGNvZGUgPj4+IDE4KTtcbiAgICAgICAgICAgICAgICAgICAgX2J5dGVbaW5kZXgrK10gPSAweDgwIHwgKChjb2RlID4+PiAxMikgJiAweDNGKTtcbiAgICAgICAgICAgICAgICAgICAgX2J5dGVbaW5kZXgrK10gPSAweDgwIHwgKChjb2RlID4+PiA2KSAmIDB4M0YpO1xuICAgICAgICAgICAgICAgICAgICBfYnl0ZVtpbmRleCsrXSA9IDB4ODAgfCAoY29kZSAmIDB4M0YpO1xuICAgICAgICAgICAgICAgICAgICBzdXJyb2dhdGUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vycm9nYXRlID0gY29kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gNjQgLyogTi5pbnB1dEJ5dGVzICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faW50MzIoX3dvcmQpO1xuICAgICAgICAgICAgICAgIF93b3JkWzBdID0gX3dvcmRbMTYgLyogTi5pbnB1dFdvcmRzICovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3NpemUgKz0gaW5kZXggLSBzdGFydDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zcCA9IHN1cnJvZ2F0ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIF9pbnQzMihkYXRhLCBvZmZzZXQpIHtcbiAgICAgICAgbGV0IHsgQSwgQiwgQywgRCwgRSwgRiwgRywgSCB9ID0gdGhpcztcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICAgICAgICB3aGlsZSAoaSA8IDE2IC8qIE4uaW5wdXRXb3JkcyAqLykge1xuICAgICAgICAgICAgV1tpKytdID0gc3dhcDMyKGRhdGFbb2Zmc2V0KytdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAxNiAvKiBOLmlucHV0V29yZHMgKi87IGkgPCA2NCAvKiBOLndvcmtXb3JkcyAqLzsgaSsrKSB7XG4gICAgICAgICAgICBXW2ldID0gKGdhbW1hMShXW2kgLSAyXSkgKyBXW2kgLSA3XSArIGdhbW1hMChXW2kgLSAxNV0pICsgV1tpIC0gMTZdKSB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDY0IC8qIE4ud29ya1dvcmRzICovOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IFQxID0gKEggKyBzaWdtYTEoRSkgKyBjaChFLCBGLCBHKSArIEtbaV0gKyBXW2ldKSB8IDA7XG4gICAgICAgICAgICBjb25zdCBUMiA9IChzaWdtYTAoQSkgKyBtYWooQSwgQiwgQykpIHwgMDtcbiAgICAgICAgICAgIEggPSBHO1xuICAgICAgICAgICAgRyA9IEY7XG4gICAgICAgICAgICBGID0gRTtcbiAgICAgICAgICAgIEUgPSAoRCArIFQxKSB8IDA7XG4gICAgICAgICAgICBEID0gQztcbiAgICAgICAgICAgIEMgPSBCO1xuICAgICAgICAgICAgQiA9IEE7XG4gICAgICAgICAgICBBID0gKFQxICsgVDIpIHwgMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkEgPSAoQSArIHRoaXMuQSkgfCAwO1xuICAgICAgICB0aGlzLkIgPSAoQiArIHRoaXMuQikgfCAwO1xuICAgICAgICB0aGlzLkMgPSAoQyArIHRoaXMuQykgfCAwO1xuICAgICAgICB0aGlzLkQgPSAoRCArIHRoaXMuRCkgfCAwO1xuICAgICAgICB0aGlzLkUgPSAoRSArIHRoaXMuRSkgfCAwO1xuICAgICAgICB0aGlzLkYgPSAoRiArIHRoaXMuRikgfCAwO1xuICAgICAgICB0aGlzLkcgPSAoRyArIHRoaXMuRykgfCAwO1xuICAgICAgICB0aGlzLkggPSAoSCArIHRoaXMuSCkgfCAwO1xuICAgIH1cbiAgICBkaWdlc3QoZW5jb2RpbmcpIHtcbiAgICAgICAgY29uc3QgeyBfYnl0ZSwgX3dvcmQgfSA9IHRoaXM7XG4gICAgICAgIGxldCBpID0gKHRoaXMuX3NpemUgJSA2NCAvKiBOLmlucHV0Qnl0ZXMgKi8pIHwgMDtcbiAgICAgICAgX2J5dGVbaSsrXSA9IDB4ODA7XG4gICAgICAgIC8vIHBhZCAwIGZvciBjdXJyZW50IHdvcmRcbiAgICAgICAgd2hpbGUgKGkgJiAzKSB7XG4gICAgICAgICAgICBfYnl0ZVtpKytdID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpID4+PSAyO1xuICAgICAgICBpZiAoaSA+IDE0IC8qIE4uaGlnaEluZGV4ICovKSB7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IDE2IC8qIE4uaW5wdXRXb3JkcyAqLykge1xuICAgICAgICAgICAgICAgIF93b3JkW2krK10gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICB0aGlzLl9pbnQzMihfd29yZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGFkIDAgZm9yIHJlc3Qgd29yZHNcbiAgICAgICAgd2hpbGUgKGkgPCAxNiAvKiBOLmlucHV0V29yZHMgKi8pIHtcbiAgICAgICAgICAgIF93b3JkW2krK10gPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlucHV0IHNpemVcbiAgICAgICAgY29uc3QgYml0czY0ID0gdGhpcy5fc2l6ZSAqIDg7XG4gICAgICAgIGNvbnN0IGxvdzMyID0gKGJpdHM2NCAmIDB4ZmZmZmZmZmYpID4+PiAwO1xuICAgICAgICBjb25zdCBoaWdoMzIgPSAoYml0czY0IC0gbG93MzIpIC8gMHgxMDAwMDAwMDA7XG4gICAgICAgIGlmIChoaWdoMzIpXG4gICAgICAgICAgICBfd29yZFsxNCAvKiBOLmhpZ2hJbmRleCAqL10gPSBzd2FwMzIoaGlnaDMyKTtcbiAgICAgICAgaWYgKGxvdzMyKVxuICAgICAgICAgICAgX3dvcmRbMTUgLyogTi5sb3dJbmRleCAqL10gPSBzd2FwMzIobG93MzIpO1xuICAgICAgICB0aGlzLl9pbnQzMihfd29yZCk7XG4gICAgICAgIHJldHVybiAoZW5jb2RpbmcgPT09IFwiaGV4XCIpID8gdGhpcy5faGV4KCkgOiB0aGlzLl9iaW4oKTtcbiAgICB9XG4gICAgX2hleCgpIHtcbiAgICAgICAgY29uc3QgeyBBLCBCLCBDLCBELCBFLCBGLCBHLCBIIH0gPSB0aGlzO1xuICAgICAgICByZXR1cm4gaGV4MzIoQSkgKyBoZXgzMihCKSArIGhleDMyKEMpICsgaGV4MzIoRCkgKyBoZXgzMihFKSArIGhleDMyKEYpICsgaGV4MzIoRykgKyBoZXgzMihIKTtcbiAgICB9XG4gICAgX2JpbigpIHtcbiAgICAgICAgY29uc3QgeyBBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBfYnl0ZSwgX3dvcmQgfSA9IHRoaXM7XG4gICAgICAgIF93b3JkWzBdID0gc3dhcDMyKEEpO1xuICAgICAgICBfd29yZFsxXSA9IHN3YXAzMihCKTtcbiAgICAgICAgX3dvcmRbMl0gPSBzd2FwMzIoQyk7XG4gICAgICAgIF93b3JkWzNdID0gc3dhcDMyKEQpO1xuICAgICAgICBfd29yZFs0XSA9IHN3YXAzMihFKTtcbiAgICAgICAgX3dvcmRbNV0gPSBzd2FwMzIoRik7XG4gICAgICAgIF93b3JkWzZdID0gc3dhcDMyKEcpO1xuICAgICAgICBfd29yZFs3XSA9IHN3YXAzMihIKTtcbiAgICAgICAgcmV0dXJuIF9ieXRlLnNsaWNlKDAsIDMyKTtcbiAgICB9XG59XG5jb25zdCBXID0gbmV3IEludDMyQXJyYXkoNjQgLyogTi53b3JrV29yZHMgKi8pO1xubGV0IHNoYXJlZEJ1ZmZlcjtcbmxldCBzaGFyZWRPZmZzZXQgPSAwO1xuY29uc3QgaGV4MzIgPSBudW0gPT4gKG51bSArIDB4MTAwMDAwMDAwKS50b1N0cmluZygxNikuc3Vic3RyKC04KTtcbmNvbnN0IHN3YXBMRSA9IChjID0+ICgoKGMgPDwgMjQpICYgMHhmZjAwMDAwMCkgfCAoKGMgPDwgOCkgJiAweGZmMDAwMCkgfCAoKGMgPj4gOCkgJiAweGZmMDApIHwgKChjID4+IDI0KSAmIDB4ZmYpKSk7XG5jb25zdCBzd2FwQkUgPSAoYyA9PiBjKTtcbmNvbnN0IHN3YXAzMiA9IGlzQkUoKSA/IHN3YXBCRSA6IHN3YXBMRTtcbmNvbnN0IGNoID0gKHgsIHksIHopID0+ICh6IF4gKHggJiAoeSBeIHopKSk7XG5jb25zdCBtYWogPSAoeCwgeSwgeikgPT4gKCh4ICYgeSkgfCAoeiAmICh4IHwgeSkpKTtcbmNvbnN0IHNpZ21hMCA9IHggPT4gKCh4ID4+PiAyIHwgeCA8PCAzMCkgXiAoeCA+Pj4gMTMgfCB4IDw8IDE5KSBeICh4ID4+PiAyMiB8IHggPDwgMTApKTtcbmNvbnN0IHNpZ21hMSA9IHggPT4gKCh4ID4+PiA2IHwgeCA8PCAyNikgXiAoeCA+Pj4gMTEgfCB4IDw8IDIxKSBeICh4ID4+PiAyNSB8IHggPDwgNykpO1xuY29uc3QgZ2FtbWEwID0geCA9PiAoKHggPj4+IDcgfCB4IDw8IDI1KSBeICh4ID4+PiAxOCB8IHggPDwgMTQpIF4gKHggPj4+IDMpKTtcbmNvbnN0IGdhbW1hMSA9IHggPT4gKCh4ID4+PiAxNyB8IHggPDwgMTUpIF4gKHggPj4+IDE5IHwgeCA8PCAxMykgXiAoeCA+Pj4gMTApKTtcbmZ1bmN0aW9uIGlzQkUoKSB7XG4gICAgY29uc3QgYnVmID0gbmV3IFVpbnQ4QXJyYXkobmV3IFVpbnQxNkFycmF5KFsweEZFRkZdKS5idWZmZXIpOyAvLyBCT01cbiAgICByZXR1cm4gKGJ1ZlswXSA9PT0gMHhGRSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/sha256-uint8array/dist/sha256-uint8array.mjs\n");

/***/ })

};
;