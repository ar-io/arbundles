export var SignatureConfig;
(function (SignatureConfig) {
    SignatureConfig[SignatureConfig["ARWEAVE"] = 1] = "ARWEAVE";
    SignatureConfig[SignatureConfig["ED25519"] = 2] = "ED25519";
    SignatureConfig[SignatureConfig["ETHEREUM"] = 3] = "ETHEREUM";
    SignatureConfig[SignatureConfig["SOLANA"] = 4] = "SOLANA";
    SignatureConfig[SignatureConfig["INJECTEDAPTOS"] = 5] = "INJECTEDAPTOS";
    SignatureConfig[SignatureConfig["MULTIAPTOS"] = 6] = "MULTIAPTOS";
    SignatureConfig[SignatureConfig["TYPEDETHEREUM"] = 7] = "TYPEDETHEREUM";
    SignatureConfig[SignatureConfig["KYVE"] = 101] = "KYVE";
})(SignatureConfig || (SignatureConfig = {}));
export const SIG_CONFIG = {
    [SignatureConfig.ARWEAVE]: {
        sigLength: 512,
        pubLength: 512,
        sigName: "arweave",
    },
    [SignatureConfig.ED25519]: {
        sigLength: 64,
        pubLength: 32,
        sigName: "ed25519",
    },
    [SignatureConfig.ETHEREUM]: {
        sigLength: 65,
        pubLength: 65,
        sigName: "ethereum",
    },
    [SignatureConfig.SOLANA]: {
        sigLength: 64,
        pubLength: 32,
        sigName: "solana",
    },
    [SignatureConfig.INJECTEDAPTOS]: {
        sigLength: 64,
        pubLength: 32,
        sigName: "injectedAptos",
    },
    [SignatureConfig.MULTIAPTOS]: {
        sigLength: 64 * 32 + 4,
        pubLength: 32 * 32 + 1,
        sigName: "multiAptos",
    },
    [SignatureConfig.TYPEDETHEREUM]: {
        sigLength: 65,
        pubLength: 42,
        sigName: "typedEthereum",
    },
    [SignatureConfig.KYVE]: {
        sigLength: 65,
        pubLength: 65,
        sigName: "kyve",
    },
};
//# sourceMappingURL=constants.js.map