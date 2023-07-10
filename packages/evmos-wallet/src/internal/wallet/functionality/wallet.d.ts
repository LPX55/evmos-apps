export declare const METAMASK_KEY = "metamask";
export declare const KEPLR_KEY = "keplr";
export declare const WALLECT_CONNECT_KEY = "walletconnect";
export type WalletExtension = {
    active: boolean;
    extensionName: string;
    evmosAddressEthFormat: string;
    evmosAddressCosmosFormat: string;
    evmosPubkey: string | null;
    osmosisPubkey: string | null;
    accountName: string | null;
};
//# sourceMappingURL=wallet.d.ts.map