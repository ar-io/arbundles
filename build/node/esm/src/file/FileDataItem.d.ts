/// <reference types="node" />
/// <reference types="node" />
import type { PathLike } from "fs";
import type { BundleItem } from "../BundleItem.js";
import type { Signer } from "../signing/index.js";
import type { AxiosResponse } from "axios";
import type { Base64URLString } from "../types.js";
export declare class FileDataItem implements BundleItem {
    readonly filename: PathLike;
    signatureLength(): Promise<number>;
    ownerLength(): Promise<number>;
    constructor(filename: PathLike, id?: Buffer);
    private _id?;
    get id(): string;
    get rawId(): Buffer;
    set rawId(id: Buffer);
    static isDataItem(obj: any): boolean;
    static verify(filename: PathLike): Promise<boolean>;
    isValid(): Promise<boolean>;
    isSigned(): boolean;
    size(): Promise<number>;
    signatureType(): Promise<number>;
    rawSignature(): Promise<Buffer>;
    signature(): Promise<string>;
    rawOwner(): Promise<Buffer>;
    owner(): Promise<string>;
    rawTarget(): Promise<Buffer>;
    target(): Promise<string>;
    getTargetStart(): Promise<number>;
    rawAnchor(): Promise<Buffer>;
    anchor(): Promise<Base64URLString>;
    rawTags(): Promise<Buffer>;
    tags(): Promise<{
        name: string;
        value: string;
    }[]>;
    rawData(): Promise<Buffer>;
    data(): Promise<string>;
    sign(signer: Signer): Promise<Buffer>;
    /**
     * @deprecated Since version 0.3.0. Will be deleted in version 0.4.0. Use @bundlr-network/client package instead to interact with Bundlr
     */
    sendToBundler(bundler: string): Promise<AxiosResponse>;
    getTagsStart(): Promise<number>;
    dataStart(): Promise<number>;
    private anchorStart;
}
export default FileDataItem;
