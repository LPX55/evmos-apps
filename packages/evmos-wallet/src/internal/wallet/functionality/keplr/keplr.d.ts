import { ReduxWalletStore } from "../../../../wallet/redux/WalletSlice";
import { ResultMessage } from "../errors";
export declare class Keplr {
    active: boolean;
    extensionName: string;
    addressCosmosFormat: string;
    addressEthFormat: string;
    evmosPubkey: string | null;
    cosmosPubkey: string | null;
    grpcEndpoint: string;
    reduxStore: ReduxWalletStore;
    notificationsEnabled: boolean;
    constructor(reduxStore: ReduxWalletStore, notificationsEnabled?: boolean, grpcEndpoint?: string);
    disconnect(): {
        result: boolean;
        message: "Disconnected from Keplr";
    };
    reset(): void;
    getKeplr(): Promise<unknown>;
    connectHandler(): Promise<boolean>;
    connect(): Promise<ResultMessage>;
}
//# sourceMappingURL=keplr.d.ts.map