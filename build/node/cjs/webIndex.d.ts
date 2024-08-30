/// <reference types="node" />
import * as arbundlesSrc from "./src";
import * as stream from "./src/stream";
declare const expObj: {
    stream: typeof stream;
    Signer: typeof arbundlesSrc.Signer;
    indexToType: arbundlesSrc.IndexToType;
    Curve25519: typeof arbundlesSrc.Curve25519;
    Rsa4096: typeof arbundlesSrc.Rsa4096;
    secp256k1: typeof arbundlesSrc.secp256k1;
    ArweaveSigner: typeof arbundlesSrc.ArweaveSigner;
    InjectedSolanaSigner: typeof arbundlesSrc.InjectedSolanaSigner;
    SolanaSigner: typeof arbundlesSrc.SolanaSigner;
    PolygonSigner: typeof arbundlesSrc.PolygonSigner;
    NearSigner: typeof arbundlesSrc.NearSigner;
    EthereumSigner: typeof arbundlesSrc.EthereumSigner;
    AlgorandSigner: typeof arbundlesSrc.AlgorandSigner;
    HexInjectedSolanaSigner: typeof arbundlesSrc.HexInjectedSolanaSigner;
    HexSolanaSigner: typeof arbundlesSrc.HexSolanaSigner;
    AptosSigner: typeof arbundlesSrc.AptosSigner;
    InjectedAptosSigner: typeof arbundlesSrc.InjectedAptosSigner;
    MultiSignatureAptosSigner: typeof arbundlesSrc.MultiSignatureAptosSigner;
    TypedEthereumSigner: typeof arbundlesSrc.TypedEthereumSigner;
    ArconnectSigner: typeof arbundlesSrc.ArconnectSigner;
    KyveSigner: typeof arbundlesSrc.KyveSigner;
    InjectedEthereumSigner: typeof arbundlesSrc.InjectedEthereumSigner;
    InjectedTypedEthereumSigner: typeof arbundlesSrc.InjectedTypedEthereumSigner;
    keccak256(value: any): any;
    exportForTesting: {
        intToBuffer: (i: number) => Buffer;
        intToHex: (i: number) => string;
        isHexPrefixed: (value: any) => boolean;
        stripHexPrefix: (value: any) => any;
        padToEven: (value: any) => any;
        isHexString: (value: any, length?: number | undefined) => boolean;
        toBuffer: (value: any) => any;
    };
    unbundleData(txData: Buffer): arbundlesSrc.Bundle;
    bundleAndSignData(dataItems: arbundlesSrc.DataItem[], signer: arbundlesSrc.Signer): Promise<arbundlesSrc.Bundle>;
    getSignatureAndId(item: arbundlesSrc.DataItem, signer: arbundlesSrc.Signer): Promise<{
        signature: Buffer;
        id: Buffer;
    }>;
    sign(item: arbundlesSrc.DataItem, signer: arbundlesSrc.Signer): Promise<Buffer>;
    createData(data: string | Uint8Array, signer: arbundlesSrc.Signer, opts?: arbundlesSrc.DataItemCreateOptions | undefined): arbundlesSrc.DataItem;
    Bundle: typeof arbundlesSrc.Bundle;
    BundleItem: typeof arbundlesSrc.BundleItem;
    SignatureConfig: typeof arbundlesSrc.SignatureConfig;
    SIG_CONFIG: Record<arbundlesSrc.SignatureConfig, arbundlesSrc.SignatureMeta>;
    MIN_BINARY_SIZE: 80;
    MAX_TAG_BYTES: 4096;
    DataItem: typeof arbundlesSrc.DataItem;
    serializeTags(tags: arbundlesSrc.Tag[]): Buffer;
    deserializeTags(tagsBuffer: Buffer): arbundlesSrc.Tag[];
    AVSCTap: typeof arbundlesSrc.AVSCTap;
    longToNByteArray(N: number, long: number): Uint8Array;
    longTo8ByteArray(long: number): Uint8Array;
    shortTo2ByteArray(short: number): Uint8Array;
    longTo16ByteArray(long: number): Uint8Array;
    longTo32ByteArray(long: number): Uint8Array;
    byteArrayToLong(byteArray: Uint8Array): number;
    getCryptoDriver(): arbundlesSrc.CryptoDriver;
    stringToBuffer: typeof arbundlesSrc.stringToBuffer;
    concatBuffers: typeof arbundlesSrc.concatBuffers;
    deepHash: typeof arbundlesSrc.deepHash;
    Transaction: typeof arbundlesSrc.Transaction;
    Arweave: typeof arbundlesSrc.Arweave;
    CryptoDriver: typeof arbundlesSrc.CryptoDriver;
};
export * from "./src/index";
export * from "./src/stream";
export default expObj;
export declare const arbundles: {
    stream: typeof stream;
    Signer: typeof arbundlesSrc.Signer;
    indexToType: arbundlesSrc.IndexToType;
    Curve25519: typeof arbundlesSrc.Curve25519;
    Rsa4096: typeof arbundlesSrc.Rsa4096;
    secp256k1: typeof arbundlesSrc.secp256k1;
    ArweaveSigner: typeof arbundlesSrc.ArweaveSigner;
    InjectedSolanaSigner: typeof arbundlesSrc.InjectedSolanaSigner;
    SolanaSigner: typeof arbundlesSrc.SolanaSigner;
    PolygonSigner: typeof arbundlesSrc.PolygonSigner;
    NearSigner: typeof arbundlesSrc.NearSigner;
    EthereumSigner: typeof arbundlesSrc.EthereumSigner;
    AlgorandSigner: typeof arbundlesSrc.AlgorandSigner;
    HexInjectedSolanaSigner: typeof arbundlesSrc.HexInjectedSolanaSigner;
    HexSolanaSigner: typeof arbundlesSrc.HexSolanaSigner;
    AptosSigner: typeof arbundlesSrc.AptosSigner;
    InjectedAptosSigner: typeof arbundlesSrc.InjectedAptosSigner;
    MultiSignatureAptosSigner: typeof arbundlesSrc.MultiSignatureAptosSigner;
    TypedEthereumSigner: typeof arbundlesSrc.TypedEthereumSigner;
    ArconnectSigner: typeof arbundlesSrc.ArconnectSigner;
    KyveSigner: typeof arbundlesSrc.KyveSigner;
    InjectedEthereumSigner: typeof arbundlesSrc.InjectedEthereumSigner;
    InjectedTypedEthereumSigner: typeof arbundlesSrc.InjectedTypedEthereumSigner;
    keccak256(value: any): any;
    exportForTesting: {
        intToBuffer: (i: number) => Buffer;
        intToHex: (i: number) => string;
        isHexPrefixed: (value: any) => boolean;
        stripHexPrefix: (value: any) => any;
        padToEven: (value: any) => any;
        isHexString: (value: any, length?: number | undefined) => boolean;
        toBuffer: (value: any) => any;
    };
    unbundleData(txData: Buffer): arbundlesSrc.Bundle;
    bundleAndSignData(dataItems: arbundlesSrc.DataItem[], signer: arbundlesSrc.Signer): Promise<arbundlesSrc.Bundle>;
    getSignatureAndId(item: arbundlesSrc.DataItem, signer: arbundlesSrc.Signer): Promise<{
        signature: Buffer;
        id: Buffer;
    }>;
    sign(item: arbundlesSrc.DataItem, signer: arbundlesSrc.Signer): Promise<Buffer>;
    createData(data: string | Uint8Array, signer: arbundlesSrc.Signer, opts?: arbundlesSrc.DataItemCreateOptions | undefined): arbundlesSrc.DataItem;
    Bundle: typeof arbundlesSrc.Bundle;
    BundleItem: typeof arbundlesSrc.BundleItem;
    SignatureConfig: typeof arbundlesSrc.SignatureConfig;
    SIG_CONFIG: Record<arbundlesSrc.SignatureConfig, arbundlesSrc.SignatureMeta>;
    MIN_BINARY_SIZE: 80;
    MAX_TAG_BYTES: 4096;
    DataItem: typeof arbundlesSrc.DataItem;
    serializeTags(tags: arbundlesSrc.Tag[]): Buffer;
    deserializeTags(tagsBuffer: Buffer): arbundlesSrc.Tag[];
    AVSCTap: typeof arbundlesSrc.AVSCTap;
    longToNByteArray(N: number, long: number): Uint8Array;
    longTo8ByteArray(long: number): Uint8Array;
    shortTo2ByteArray(short: number): Uint8Array;
    longTo16ByteArray(long: number): Uint8Array;
    longTo32ByteArray(long: number): Uint8Array;
    byteArrayToLong(byteArray: Uint8Array): number;
    getCryptoDriver(): arbundlesSrc.CryptoDriver;
    stringToBuffer: typeof arbundlesSrc.stringToBuffer;
    concatBuffers: typeof arbundlesSrc.concatBuffers;
    deepHash: typeof arbundlesSrc.deepHash;
    Transaction: typeof arbundlesSrc.Transaction;
    Arweave: typeof arbundlesSrc.Arweave;
    CryptoDriver: typeof arbundlesSrc.CryptoDriver;
};
