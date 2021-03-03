"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMD5 = void 0;
const crypto = require("crypto-js");
const generateMD5 = (value) => {
    return crypto.MD5(value).toString();
};
exports.generateMD5 = generateMD5;
//# sourceMappingURL=generateHash.js.map