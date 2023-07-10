import type { Maybe } from "@metamask/providers/dist/utils";
export declare function switchEthereumChain(ethChainId: string): Promise<boolean>;
export declare function changeNetworkToEvmosMainnet(): Promise<boolean>;
export declare function subscribeToAccountChange(handler: (a: Maybe<string[]>) => void): boolean;
export declare function unsubscribeToEvents(): void;
export declare function subscribeToChainChanged(): boolean;
export declare function getWallet(): Promise<string | null>;
export declare function generatePubkeyFromSignature(wallet: string): Promise<string | null>;
export declare function generatePubKey(account: string, evmosGRPCUrl?: string): Promise<string | null>;
export type Token = {
    erc20Address: string;
    symbol: string;
    decimals: number;
    img: string;
};
export declare function addToken(token: Token): Promise<{
    text: "Token added successfully";
    type: string;
} | {
    text: "Could not add token, please try again";
    type: string;
} | undefined>;
//# sourceMappingURL=metamaskHelpers.d.ts.map