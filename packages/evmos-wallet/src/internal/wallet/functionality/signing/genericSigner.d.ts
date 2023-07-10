import { Sender, TxGenerated } from "@evmos/transactions";
import { Web3Provider } from "@ethersproject/providers";
import { RawTx, TxGeneratedByBackend } from "../signing";
type EIP712Data = {
    chainId: string;
    address: string;
    signature: string;
    body: string;
    auth: string;
};
export declare class Signer {
    keplrBackendData: {
        tx: RawTx | null;
        eipData: EIP712Data | null;
        sender: string;
        network: string;
    } | null;
    metamaskBackendData: EIP712Data | null;
    currentExtension: string | null;
    reset(): void;
    signEvmosjsTx(sender: Sender, tx: TxGenerated, chainId: string, currentExtension: string): Promise<{
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
    signBackendTx(sender: string, tx: TxGeneratedByBackend, network: string, currentExtension: string): Promise<{
        result: boolean;
        message: string;
    }>;
    signBackendTxWithAmino(sender: string, tx: TxGeneratedByBackend, network: string, currentExtension: string): Promise<{
        result: boolean;
        message: string;
        aminoResponse: null;
    } | {
        result: boolean;
        message: string;
        aminoResponse: import("@keplr-wallet/types").AminoSignResponse;
    }>;
    broadcastTxToBackend(): Promise<{
        error: boolean;
        message: string;
        txhash: string;
    }>;
    getProvider(currentExtension: string): Promise<Web3Provider | undefined>;
}
export {};
//# sourceMappingURL=genericSigner.d.ts.map