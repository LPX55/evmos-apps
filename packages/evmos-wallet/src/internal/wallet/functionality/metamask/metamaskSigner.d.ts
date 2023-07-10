import { Sender, TxGenerated } from "@evmos/transactions";
import { RawTx, TxGeneratedByBackend } from "../signing";
export declare type EvmosjsTxSignatureResponse = {
    result: boolean;
    message: string;
    transaction: RawTx | null;
};
export declare type BackendTxSignatureResponse = {
    result: boolean;
    message: string;
    signature: string | null;
};
export declare function signEvmosjsTxWithMetamask(sender: Sender, tx: TxGenerated): Promise<{
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
export declare function signBackendTxWithMetamask(sender: string, tx: TxGeneratedByBackend): Promise<{
    result: boolean;
    message: string;
    signature: null;
} | {
    result: boolean;
    message: string;
    signature: string;
}>;
//# sourceMappingURL=metamaskSigner.d.ts.map