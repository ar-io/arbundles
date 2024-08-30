"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ed25519_1 = require("@noble/ed25519");
const constants_1 = require("../../constants");
class InjectedAptosSigner {
    constructor(provider, publicKey) {
        this.ownerLength = constants_1.SIG_CONFIG[constants_1.SignatureConfig.INJECTEDAPTOS].pubLength;
        this.signatureLength = constants_1.SIG_CONFIG[constants_1.SignatureConfig.INJECTEDAPTOS].sigLength;
        this.signatureType = constants_1.SignatureConfig.INJECTEDAPTOS;
        this.provider = provider;
        this._publicKey = publicKey;
    }
    get publicKey() {
        return this._publicKey;
    }
    /**
     * signMessage constructs a message and then signs it.
     * the format is "APTOS(\n)
     * message: <hexString>(\n)
     * nonce: bundlr"
     */
    sign(message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.provider.signMessage)
                throw new Error("Selected Wallet does not support message signing");
            const signingResponse = yield this.provider.signMessage({
                message: Buffer.from(message).toString("hex"),
                nonce: "bundlr",
            });
            const signature = signingResponse.signature;
            return typeof signature === "string" ? Buffer.from(signature, "hex") : signature.data.toUint8Array();
        });
    }
    static verify(pk, message, signature) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = pk;
            return (0, ed25519_1.verify)(Buffer.from(signature), Buffer.from(`APTOS\nmessage: ${Buffer.from(message).toString("hex")}\nnonce: bundlr`), // see comment above sign
            Buffer.from(p));
        });
    }
}
exports.default = InjectedAptosSigner;
//# sourceMappingURL=InjectedAptosSigner.js.map