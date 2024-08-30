export declare enum SignatureConfig {
    ARWEAVE = 1,
    ED25519 = 2,
    ETHEREUM = 3,
    SOLANA = 4,
    INJECTEDAPTOS = 5,
    MULTIAPTOS = 6,
    TYPEDETHEREUM = 7,
    KYVE = 101
}
export interface SignatureMeta {
    sigLength: number;
    pubLength: number;
    sigName: string;
}
export declare const SIG_CONFIG: Record<SignatureConfig, SignatureMeta>;
