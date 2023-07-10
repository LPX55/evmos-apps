import { Sender, TxGenerated } from "@evmos/transactions";
import { TxGeneratedByBackend } from "../signing";
export declare function signEvmosjsTxWithWalletConnect(sender: Sender, tx: TxGenerated): Promise<{
    result: boolean;
    message: string;
    transaction: null;
} | {
    result: boolean;
    message: string;
    transaction: {
        message: import("@evmos/proto/dist/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.TxRaw;
        path: string;
    };
}>;
export declare function signBackendTxWithWalletConnect(sender: string, tx: TxGeneratedByBackend): Promise<{
    result: boolean;
    message: string;
    signature: null;
} | {
    result: boolean;
    message: string;
    signature: string;
}>;
//# sourceMappingURL=walletconnectSigner.d.ts.map