import { ReduxWalletStore } from "../../../../wallet/redux/WalletSlice";
import type { Logger } from "ethers/lib/utils.js";
export type EthersError = Error & {
    reason: string;
    code: keyof typeof Logger.errors;
};
export declare function useWalletConnect(reduxStore: ReduxWalletStore): {
    connect: () => Promise<void>;
    address: `0x${string}` | undefined;
};
export declare function useActivateWalletConnect(store: ReduxWalletStore, notificationsEnabled: boolean, extensionName: string): void;
//# sourceMappingURL=walletconnect.d.ts.map