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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataItem = exports.MAX_TAG_BYTES = exports.MIN_BINARY_SIZE = void 0;
const utils_1 = require("./utils");
const base64url_1 = __importDefault(require("base64url"));
const buffer_1 = require("buffer");
const ar_data_bundle_1 = require("./ar-data-bundle");
const index_1 = require("./signing/index");
const ar_data_base_1 = __importDefault(require("./ar-data-base"));
const constants_1 = require("./constants");
const utils_2 = require("./nodeUtils.js");
const tags_1 = require("./tags");
const crypto_1 = require("crypto");
exports.MIN_BINARY_SIZE = 80;
exports.MAX_TAG_BYTES = 4096;
class DataItem {
    constructor(binary) {
        this.binary = binary;
    }
    static isDataItem(obj) {
        return obj.binary !== undefined;
    }
    get signatureType() {
        const signatureTypeVal = (0, utils_1.byteArrayToLong)(this.binary.subarray(0, 2));
        if ((constants_1.SignatureConfig === null || constants_1.SignatureConfig === void 0 ? void 0 : constants_1.SignatureConfig[signatureTypeVal]) !== undefined) {
            return signatureTypeVal;
        }
        throw new Error("Unknown signature type: " + signatureTypeVal);
    }
    isValid() {
        return __awaiter(this, void 0, void 0, function* () {
            return DataItem.verify(this.binary);
        });
    }
    get id() {
        return base64url_1.default.encode(this.rawId);
    }
    set id(id) {
        this._id = base64url_1.default.toBuffer(id);
    }
    get rawId() {
        return (0, crypto_1.createHash)("sha256").update(this.rawSignature).digest();
    }
    set rawId(id) {
        this._id = id;
    }
    get rawSignature() {
        return this.binary.subarray(2, 2 + this.signatureLength);
    }
    get signature() {
        return base64url_1.default.encode(this.rawSignature);
    }
    set rawOwner(pubkey) {
        if (pubkey.byteLength != this.ownerLength)
            throw new Error(`Expected raw owner (pubkey) to be ${this.ownerLength} bytes, got ${pubkey.byteLength} bytes.`);
        this.binary.set(pubkey, 2 + this.signatureLength);
    }
    get rawOwner() {
        return this.binary.subarray(2 + this.signatureLength, 2 + this.signatureLength + this.ownerLength);
    }
    get signatureLength() {
        return constants_1.SIG_CONFIG[this.signatureType].sigLength;
    }
    get owner() {
        return base64url_1.default.encode(this.rawOwner);
    }
    get ownerLength() {
        return constants_1.SIG_CONFIG[this.signatureType].pubLength;
    }
    get rawTarget() {
        const targetStart = this.getTargetStart();
        const isPresent = this.binary[targetStart] == 1;
        return isPresent ? this.binary.subarray(targetStart + 1, targetStart + 33) : buffer_1.Buffer.alloc(0);
    }
    get target() {
        return base64url_1.default.encode(this.rawTarget);
    }
    get rawAnchor() {
        const anchorStart = this.getAnchorStart();
        const isPresent = this.binary[anchorStart] == 1;
        return isPresent ? this.binary.subarray(anchorStart + 1, anchorStart + 33) : buffer_1.Buffer.alloc(0);
    }
    get anchor() {
        return base64url_1.default.encode(this.rawAnchor); /* .toString(); */
    }
    get rawTags() {
        const tagsStart = this.getTagsStart();
        const tagsSize = (0, utils_1.byteArrayToLong)(this.binary.subarray(tagsStart + 8, tagsStart + 16));
        return this.binary.subarray(tagsStart + 16, tagsStart + 16 + tagsSize);
    }
    get tags() {
        const tagsStart = this.getTagsStart();
        const tagsCount = (0, utils_1.byteArrayToLong)(this.binary.subarray(tagsStart, tagsStart + 8));
        if (tagsCount == 0) {
            return [];
        }
        const tagsSize = (0, utils_1.byteArrayToLong)(this.binary.subarray(tagsStart + 8, tagsStart + 16));
        return (0, tags_1.deserializeTags)(buffer_1.Buffer.from(this.binary.subarray(tagsStart + 16, tagsStart + 16 + tagsSize)));
    }
    get tagsB64Url() {
        const _tags = this.tags;
        return _tags.map((t) => ({
            name: base64url_1.default.encode(t.name),
            value: base64url_1.default.encode(t.value),
        }));
    }
    getStartOfData() {
        const tagsStart = this.getTagsStart();
        const numberOfTagBytesArray = this.binary.subarray(tagsStart + 8, tagsStart + 16);
        const numberOfTagBytes = (0, utils_1.byteArrayToLong)(numberOfTagBytesArray);
        return tagsStart + 16 + numberOfTagBytes;
    }
    get rawData() {
        const tagsStart = this.getTagsStart();
        const numberOfTagBytesArray = this.binary.subarray(tagsStart + 8, tagsStart + 16);
        const numberOfTagBytes = (0, utils_1.byteArrayToLong)(numberOfTagBytesArray);
        const dataStart = tagsStart + 16 + numberOfTagBytes;
        return this.binary.subarray(dataStart, this.binary.length);
    }
    get data() {
        return base64url_1.default.encode(this.rawData);
    }
    /**
     * UNSAFE!!
     * DO NOT MUTATE THE BINARY ARRAY. THIS WILL CAUSE UNDEFINED BEHAVIOUR.
     */
    getRaw() {
        return this.binary;
    }
    sign(signer) {
        return __awaiter(this, void 0, void 0, function* () {
            this._id = yield (0, ar_data_bundle_1.sign)(this, signer);
            return this.rawId;
        });
    }
    setSignature(signature) {
        return __awaiter(this, void 0, void 0, function* () {
            this.binary.set(signature, 2);
            this._id = buffer_1.Buffer.from(yield (0, utils_2.getCryptoDriver)().hash(signature));
        });
    }
    isSigned() {
        var _a, _b;
        return ((_b = (_a = this._id) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0;
    }
    /**
     * Returns a JSON representation of a DataItem
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    toJSON() {
        return {
            signature: this.signature,
            owner: this.owner,
            target: this.target,
            tags: this.tags.map((t) => ({
                name: base64url_1.default.encode(t.name),
                value: base64url_1.default.encode(t.value),
            })),
            data: this.data,
        };
    }
    /**
     * Verifies a `Buffer` and checks it fits the format of a DataItem
     *
     * A binary is valid iff:
     * - the tags are encoded correctly
     */
    static verify(buffer) {
        return __awaiter(this, void 0, void 0, function* () {
            if (buffer.byteLength < exports.MIN_BINARY_SIZE) {
                return false;
            }
            const item = new DataItem(buffer);
            const sigType = item.signatureType;
            const tagsStart = item.getTagsStart();
            const numberOfTags = (0, utils_1.byteArrayToLong)(buffer.subarray(tagsStart, tagsStart + 8));
            const numberOfTagBytesArray = buffer.subarray(tagsStart + 8, tagsStart + 16);
            const numberOfTagBytes = (0, utils_1.byteArrayToLong)(numberOfTagBytesArray);
            if (numberOfTagBytes > exports.MAX_TAG_BYTES)
                return false;
            if (numberOfTags > 0) {
                try {
                    const tags = (0, tags_1.deserializeTags)(buffer_1.Buffer.from(buffer.subarray(tagsStart + 16, tagsStart + 16 + numberOfTagBytes)));
                    if (tags.length !== numberOfTags) {
                        return false;
                    }
                }
                catch (e) {
                    return false;
                }
            }
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const Signer = index_1.indexToType[sigType];
            const signatureData = yield (0, ar_data_base_1.default)(item);
            return yield Signer.verify(item.rawOwner, signatureData, item.rawSignature);
        });
    }
    getSignatureData() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, ar_data_base_1.default)(this);
        });
    }
    /**
     * Returns the start byte of the tags section (number of tags)
     *
     * @private
     */
    getTagsStart() {
        const targetStart = this.getTargetStart();
        const targetPresent = this.binary[targetStart] == 1;
        let tagsStart = targetStart + (targetPresent ? 33 : 1);
        const anchorPresent = this.binary[tagsStart] == 1;
        tagsStart += anchorPresent ? 33 : 1;
        return tagsStart;
    }
    /**
     * Returns the start byte of the tags section (number of tags)
     *
     * @private
     */
    getTargetStart() {
        return 2 + this.signatureLength + this.ownerLength;
    }
    /**
     * Returns the start byte of the tags section (number of tags)
     *
     * @private
     */
    getAnchorStart() {
        let anchorStart = this.getTargetStart() + 1;
        const targetPresent = this.binary[this.getTargetStart()] == 1;
        anchorStart += targetPresent ? 32 : 0;
        return anchorStart;
    }
}
exports.DataItem = DataItem;
exports.default = DataItem;
//# sourceMappingURL=DataItem.js.map