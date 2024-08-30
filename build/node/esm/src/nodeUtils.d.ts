export { stringToBuffer, concatBuffers } from "arweave/node/lib/utils.js";
export { deepHash } from "./deepHash.js";
import { default as nodeDriver } from "arweave/node/lib/crypto/node-driver.js";
import type { JWKInterface } from "./interface-jwk.js";
export type { CreateTransactionInterface } from "arweave/node/common.js";
export { default as Transaction } from "arweave/node/lib/transaction.js";
export { default as Arweave } from "arweave/node/index.js";
declare const driver: typeof nodeDriver;
export declare class CryptoDriver extends driver {
    getPublicKey(jwk: JWKInterface): string;
}
export declare function getCryptoDriver(): CryptoDriver;
