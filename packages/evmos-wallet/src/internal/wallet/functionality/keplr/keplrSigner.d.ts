import { Sender, TxGenerated } from "@evmos/transactions";
import { StdSignDoc } from "@keplr-wallet/types";
import Long from "long";
import { RawTx, TxGeneratedByBackend } from "../signing";
export declare function signEvmosjsTxWithKeplr(sender: Sender, tx: TxGenerated, chainId: string): Promise<{
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
type KeplrReturn = {
    result: boolean;
    message: string;
    transaction: RawTx | null;
    signature: string | null;
};
export declare function signBackendTxWithKeplr(sender: string, tx: TxGeneratedByBackend): Promise<KeplrReturn>;
export declare function signKeplr(sender: string, chainId: string, body: {
    bodyBytes: Uint8Array;
    authInfoBytes: Uint8Array;
    chainId: string;
    accountNumber: Long.Long;
}): Promise<{
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
export declare function signKeplrAmino(chainId: string, tx: StdSignDoc): Promise<{
    result: boolean;
    message: string;
    transaction: null;
} | {
    result: boolean;
    message: string;
    transaction: import("@keplr-wallet/types").AminoSignResponse;
}>;
export declare function signKeplrEIP712(sender: string, chainId: string, tx: string): Promise<{
    result: boolean;
    message: string;
    signature: null;
} | {
    result: boolean;
    message: string;
    signature: string;
}>;
export {};
//# sourceMappingURL=keplrSigner.d.ts.map