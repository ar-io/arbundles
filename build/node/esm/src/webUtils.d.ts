export { stringToBuffer, concatBuffers } from "arweave/web/lib/utils.js";
export { deepHash } from "./deepHash.js";
import webDriver from "arweave/web/lib/crypto/webcrypto-driver.js";
import type { JWKInterface } from "./interface-jwk.js";
export type { CreateTransactionInterface } from "arweave/web/common.js";
export { default as Transaction } from "arweave/web/lib/transaction.js";
export { default as Arweave } from "arweave/web/index.js";
declare const driver: typeof webDriver;
export declare class CryptoDriver extends driver {
    getPublicKey(_jwk: JWKInterface): string;
}
export declare function getCryptoDriver(): CryptoDriver;
