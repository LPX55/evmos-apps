import { EthereumClient } from "@web3modal/ethereum";
export declare const projectId = "ae920fe62c5a565cfaaa6edacbbb6fa7";
export declare const wagmiClient: import("@wagmi/core").Client<(import("@ethersproject/providers").FallbackProvider | import("@wagmi/core/dist/index-1260a84c").a<import("@wagmi/core/dist/index-1260a84c").P>) & {
    chains: import("@wagmi/chains").Chain[];
    pollingInterval: number;
}, import("@wagmi/core/dist/index-1260a84c").W> & {
    queryClient: import("@tanstack/query-core").QueryClient;
};
export declare const ethereumClient: EthereumClient;
//# sourceMappingURL=walletconnectConstants.d.ts.map