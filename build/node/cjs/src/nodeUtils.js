"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCryptoDriver = exports.CryptoDriver = exports.Arweave = exports.Transaction = exports.deepHash = exports.concatBuffers = exports.stringToBuffer = void 0;
var utils_1 = require("arweave/node/lib/utils");
Object.defineProperty(exports, "stringToBuffer", { enumerable: true, get: function () { return utils_1.stringToBuffer; } });
Object.defineProperty(exports, "concatBuffers", { enumerable: true, get: function () { return utils_1.concatBuffers; } });
var deepHash_1 = require("./deepHash");
Object.defineProperty(exports, "deepHash", { enumerable: true, get: function () { return deepHash_1.deepHash; } });
const node_driver_1 = __importDefault(require("arweave/node/lib/crypto/node-driver"));
const crypto_1 = require("crypto");
var transaction_1 = require("arweave/node/lib/transaction");
Object.defineProperty(exports, "Transaction", { enumerable: true, get: function () { return __importDefault(transaction_1).default; } });
var node_1 = require("arweave/node");
Object.defineProperty(exports, "Arweave", { enumerable: true, get: function () { return __importDefault(node_1).default; } });
const driver = node_driver_1.default["default"] ? node_driver_1.default["default"] : node_driver_1.default;
class CryptoDriver extends driver {
    getPublicKey(jwk) {
        return (0, crypto_1.createPublicKey)({
            key: this.jwkToPem(jwk),
            type: "pkcs1",
            format: "pem",
        })
            .export({
            format: "pem",
            type: "pkcs1",
        })
            .toString();
    }
}
exports.CryptoDriver = CryptoDriver;
let driverInstance;
function getCryptoDriver() {
    return (driverInstance !== null && driverInstance !== void 0 ? driverInstance : (driverInstance = new CryptoDriver()));
}
exports.getCryptoDriver = getCryptoDriver;
//# sourceMappingURL=nodeUtils.js.map