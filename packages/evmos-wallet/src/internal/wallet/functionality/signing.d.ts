import { Chain, Sender, TxGenerated } from "@evmos/transactions";
import { protoTxNamespace } from "@evmos/proto";
export declare type TxGeneratedByBackend = {
    signDirect: {
        body: string;
        authInfo: string;
        signBytes: string;
    };
    legacyAmino: {
        body: string;
        authInfo: string;
        signBytes: string;
    };
    eipToSign: string;
    accountNumber: string;
    chainId: string;
    dataSigningAmino: string;
};
export declare type RawTx = {
    message: protoTxNamespace.txn.TxRaw;
    path: string;
};
export declare function createEIP712Transaction(chain: Chain, sender: Sender, signature: string, tx: TxGenerated): {
    message: protoTxNamespace.txn.TxRaw;
    path: string;
};
export declare function broadcastSignedTxToBackend(rawTx: {
    message: protoTxNamespace.txn.TxRaw;
    path: string;
}, sender: string, network?: string, endpoint?: string): Promise<{
    error: boolean;
    message: string;
    txhash: string;
}>;
export declare function broadcastSignedTxToGRPC(rawTx: {
    message: protoTxNamespace.txn.TxRaw;
    path: string;
}, grpcEndpoint?: string): Promise<{
    error: boolean;
    message: string;
    txhash: string;
}>;
export declare function broadcastEip712BackendTxToBackend(chainId: number, feePayer: string, feePayerSig: string, body: string, authInfo: string, endpoint?: string): Promise<{
    error: boolean;
    message: string;
    txhash: string;
}>;
type PubKeySignature = {
    type: string;
    value: string;
};
type SignatureAmino = {
    pub_key: PubKeySignature;
    signature: string;
};
type FeeAmountSignedAmino = {
    denom: string;
    amount: string;
};
type FeeSignedAmino = {
    amount: readonly FeeAmountSignedAmino[];
    gas: string;
};
type TimeoutHeightSignedAmino = {
    revision_height: string;
    revision_number: string;
};
type TokenSignedAmino = {
    amount: string;
    denom: string;
};
type MsgsValueSignedAmino = {
    receiver: string;
    sender: string;
    source_channel: string;
    source_port: string;
    timeout_height: TimeoutHeightSignedAmino;
    timeout_timestamp: string;
    token: TokenSignedAmino;
};
type MsgsSignedAmino = {
    type: string;
    value: MsgsValueSignedAmino;
};
type SignedAmino = {
    account_number: string;
    chain_id: string;
    fee: FeeSignedAmino;
    memo: string;
    msgs: readonly MsgsSignedAmino[];
    sequence: string;
};
export declare function broadcastAminoBackendTxToBackend(signature: SignatureAmino, signed: SignedAmino, chainIdentifier: string, endpoint?: string): Promise<{
    error: boolean;
    message: string;
    txhash: string;
}>;
export {};
//# sourceMappingURL=signing.d.ts.map