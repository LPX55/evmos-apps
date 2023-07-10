export declare const EXECUTED_NOTIFICATIONS: {
    readonly SuccessTitle: "Successfully executed";
    readonly ErrorTitle: "Executing transaction";
    readonly UnexpectedSubtext: "Unexpected error";
    readonly WaitingTitle: "Waiting for ibc transaction to be executed in the destination chain";
    readonly IBCTransferInformation: {
        readonly text: "Note";
        readonly subtext: "IBC transfer takes up to 15 mins in time of congestion. Please be patient before attempting to resend the transaction.";
    };
};
export declare const BROADCASTED_NOTIFICATIONS: {
    readonly SuccessTitle: "Successfully broadcasted";
    readonly ErrorTitle: "Error broadcasting tx";
    readonly SubmitTitle: "Transaction submit with hash:";
};
export declare const MODAL_NOTIFICATIONS: {
    readonly ErrorAmountTitle: "Amount error";
    readonly ErrorZeroAmountSubtext: "Amount cannot be 0";
    readonly ErrorInsufficientFeeSubtext: "Lack sufficient balance to carry forth action. Balance needs to be above reserved amount";
    readonly ErrorsAmountGt: "Amount is bigger than the actual balance";
    readonly ErrorAmountEmpty: "Amount can not be empty";
    readonly ErrorAddressTitle: "Invalid address";
    readonly ErrorAddressSubtext: "The address does not match with the chain";
    readonly ErrorPositiveNumberSubtext: "Amount can only be a positive number";
    readonly ErrorAddressEmpty: "Address can not be empty";
    readonly ErrorTokenEmpty: "Please, select a token";
    readonly ErrorWrongPrefix: "Incorrect address";
    readonly ErrorValidatorEmpty: "Please, select a validator";
};
export declare const BALANCE_NOTIFICATIONS: {
    readonly ErrorGetBalance: "Error getting balance, please try again later";
    readonly ErrorGetBalanceExtChain: "Error getting balance from external chain";
};
export declare const GENERATING_TX_NOTIFICATIONS: {
    ErrorGeneratingTx: string;
};
export declare const SIGNING_NOTIFICATIONS: {
    readonly ErrorTitle: "Error signing tx";
};
export declare const INCLUDED_BLOCK_NOTIFICATIONS: {
    readonly SuccessTitle: "Successfully included in a block";
    readonly ErrorTitle: "Error including transaction in a block";
    readonly WaitingTitle: "Waiting for the transaction to be included in a block";
};
export declare const WALLET_NOTIFICATIONS: {
    ErrorTitle: string;
};
//# sourceMappingURL=errors.d.ts.map