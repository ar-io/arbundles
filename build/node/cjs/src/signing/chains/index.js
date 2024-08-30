"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KyveSigner = exports.ArconnectSigner = exports.TypedEthereumSigner = exports.MultiSignatureAptosSigner = exports.InjectedAptosSigner = exports.AptosSigner = exports.HexSolanaSigner = exports.HexInjectedSolanaSigner = exports.AlgorandSigner = exports.EthereumSigner = exports.NearSigner = exports.PolygonSigner = exports.SolanaSigner = exports.InjectedSolanaSigner = exports.ArweaveSigner = void 0;
var ArweaveSigner_1 = require("./ArweaveSigner");
Object.defineProperty(exports, "ArweaveSigner", { enumerable: true, get: function () { return __importDefault(ArweaveSigner_1).default; } });
var injectedSolanaSigner_1 = require("./injectedSolanaSigner");
Object.defineProperty(exports, "InjectedSolanaSigner", { enumerable: true, get: function () { return __importDefault(injectedSolanaSigner_1).default; } });
__exportStar(require("./injectedEthereumSigner"), exports);
var SolanaSigner_1 = require("./SolanaSigner");
Object.defineProperty(exports, "SolanaSigner", { enumerable: true, get: function () { return __importDefault(SolanaSigner_1).default; } });
var PolygonSigner_1 = require("./PolygonSigner");
Object.defineProperty(exports, "PolygonSigner", { enumerable: true, get: function () { return __importDefault(PolygonSigner_1).default; } });
var NearSigner_1 = require("./NearSigner");
Object.defineProperty(exports, "NearSigner", { enumerable: true, get: function () { return __importDefault(NearSigner_1).default; } });
var ethereumSigner_1 = require("./ethereumSigner");
Object.defineProperty(exports, "EthereumSigner", { enumerable: true, get: function () { return __importDefault(ethereumSigner_1).default; } });
var AlgorandSigner_1 = require("./AlgorandSigner");
Object.defineProperty(exports, "AlgorandSigner", { enumerable: true, get: function () { return __importDefault(AlgorandSigner_1).default; } });
var HexInjectedSolanaSigner_1 = require("./HexInjectedSolanaSigner");
Object.defineProperty(exports, "HexInjectedSolanaSigner", { enumerable: true, get: function () { return __importDefault(HexInjectedSolanaSigner_1).default; } });
var HexSolanaSigner_1 = require("./HexSolanaSigner");
Object.defineProperty(exports, "HexSolanaSigner", { enumerable: true, get: function () { return __importDefault(HexSolanaSigner_1).default; } });
var AptosSigner_1 = require("./AptosSigner");
Object.defineProperty(exports, "AptosSigner", { enumerable: true, get: function () { return __importDefault(AptosSigner_1).default; } });
var InjectedAptosSigner_1 = require("./InjectedAptosSigner");
Object.defineProperty(exports, "InjectedAptosSigner", { enumerable: true, get: function () { return __importDefault(InjectedAptosSigner_1).default; } });
var multiSignatureAptos_1 = require("./multiSignatureAptos");
Object.defineProperty(exports, "MultiSignatureAptosSigner", { enumerable: true, get: function () { return __importDefault(multiSignatureAptos_1).default; } });
var TypedEthereumSigner_1 = require("./TypedEthereumSigner");
Object.defineProperty(exports, "TypedEthereumSigner", { enumerable: true, get: function () { return __importDefault(TypedEthereumSigner_1).default; } });
__exportStar(require("./InjectedTypedEthereumSigner"), exports);
var arconnectSigner_1 = require("./arconnectSigner");
Object.defineProperty(exports, "ArconnectSigner", { enumerable: true, get: function () { return __importDefault(arconnectSigner_1).default; } });
var KyveSigner_1 = require("./KyveSigner");
Object.defineProperty(exports, "KyveSigner", { enumerable: true, get: function () { return __importDefault(KyveSigner_1).default; } });
//# sourceMappingURL=index.js.map