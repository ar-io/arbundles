import { verify } from "@noble/ed25519";
import { SignatureConfig, SIG_CONFIG } from "../../constants.js";
export default class MultiSignatureAptosSigner {
    _publicKey;
    ownerLength = SIG_CONFIG[SignatureConfig.MULTIAPTOS].pubLength;
    signatureLength = SIG_CONFIG[SignatureConfig.MULTIAPTOS].sigLength;
    signatureType = SignatureConfig.MULTIAPTOS;
    collectSignatures;
    provider;
    constructor(publicKey, collectSignatures) {
        this._publicKey = publicKey;
        this.collectSignatures = collectSignatures;
    }
    get publicKey() {
        return this._publicKey;
    }
    async sign(message) {
        const { signatures, bitmap: bits } = await this.collectSignatures(message);
        // Bits are read from left to right. e.g. 0b10000000 represents the first bit is set in one byte.
        // The decimal value of 0b10000000 is 128.
        const firstBitInByte = 128;
        const bitmap = new Uint8Array([0, 0, 0, 0]);
        // Check if duplicates exist in bits
        const dupCheckSet = new Set();
        bits.forEach((bit) => {
            if (bit >= 32) {
                throw new Error(`Invalid bit value ${bit}.`);
            }
            if (dupCheckSet.has(bit)) {
                throw new Error("Duplicated bits detected.");
            }
            dupCheckSet.add(bit);
            const byteOffset = Math.floor(bit / 8);
            let byte = bitmap[byteOffset];
            byte |= firstBitInByte >> bit % 8;
            bitmap[byteOffset] = byte;
        });
        const signature = Buffer.alloc(this.signatureLength);
        let sigPos = 0;
        for (let i = 0; i < 32; i++) {
            if (bits.includes(i)) {
                signature.set(signatures[sigPos++], i * 64);
            }
        }
        signature.set(bitmap, this.signatureLength - 4);
        return signature;
    }
    static async verify(pk, message, signature) {
        const signatureLength = SIG_CONFIG[SignatureConfig.MULTIAPTOS].sigLength;
        const bitmapPos = signatureLength - 4;
        const signatures = signature.slice(0, bitmapPos);
        const encodedBitmap = signature.slice(bitmapPos);
        let oneFalse = false;
        for (let i = 0; i < 32; i++) {
            // check bitmap
            const bucket = Math.floor(i / 8);
            const bucketPos = i - bucket * 8;
            const sigIncluded = (encodedBitmap[bucket] & (128 >> bucketPos)) !== 0;
            if (sigIncluded) {
                const signature = signatures.slice(i * 64, (i + 1) * 64);
                const pubkey = pk.slice(i * 32, (i + 1) * 32);
                if (!(await verify(Buffer.from(signature), Buffer.from(message), Buffer.from(pubkey))))
                    oneFalse = true;
            }
        }
        return !oneFalse;
    }
}
//# sourceMappingURL=multiSignatureAptos.js.map