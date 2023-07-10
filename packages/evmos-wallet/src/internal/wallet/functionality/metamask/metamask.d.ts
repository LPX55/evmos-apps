import { Maybe } from "@metamask/providers/dist/utils";
import { ReduxWalletStore } from "../../../../wallet/redux/WalletSlice";
import { ResultMessage } from "../errors";
export declare class Metamask {
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
        message: "Disconnected from Metamask";
    };
    reset(): void;
    connectHandler(addresses: Maybe<string[]>): Promise<void>;
    connect(): Promise<ResultMessage>;
    generatePubKey(account: string): Promise<string | null>;
}
//# sourceMappingURL=metamask.d.ts.map