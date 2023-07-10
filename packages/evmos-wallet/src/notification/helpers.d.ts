import { executeIBCTransferResponse } from "./transactionsTypes";
export declare function snackRequestRejected(): {
    payload: import("./redux/notificationSlice").Snackbar;
    type: "notificationSlice/addSnackbar";
};
export declare function snackErrorGeneratingTx(): {
    payload: import("./redux/notificationSlice").Snackbar;
    type: "notificationSlice/addSnackbar";
};
export declare function snackBroadcastSuccessful(hash: string, explorerTxUrl: string): {
    payload: import("./redux/notificationSlice").Snackbar;
    type: "notificationSlice/addSnackbar";
};
export declare function snackIBCInformation(): {
    payload: import("./redux/notificationSlice").Snackbar;
    type: "notificationSlice/addSnackbar";
};
export declare function snackExecuteIBCTransfer(res: executeIBCTransferResponse): {
    payload: import("./redux/notificationSlice").Snackbar;
    type: "notificationSlice/addSnackbar";
};
export declare function snackErrorConnectingKeplr(): {
    payload: import("./redux/notificationSlice").Snackbar;
    type: "notificationSlice/addSnackbar";
};
export declare function snackErrorConnectingMetaMask(): {
    payload: import("./redux/notificationSlice").Snackbar;
    type: "notificationSlice/addSnackbar";
};
export declare function snackErrorGettingBalanceExtChain(): {
    payload: import("./redux/notificationSlice").Snackbar;
    type: "notificationSlice/addSnackbar";
};
export declare function snackErrorAmountGt(): {
    payload: import("./redux/notificationSlice").Snackbar;
    type: "notificationSlice/addSnackbar";
};
export declare function snackWarningLedger(): {
    payload: import("./redux/notificationSlice").Snackbar;
    type: "notificationSlice/addSnackbar";
};
//# sourceMappingURL=helpers.d.ts.map