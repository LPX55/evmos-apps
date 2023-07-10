import { ReduxWalletStore } from "../../../wallet/redux/WalletSlice";
export declare function NotifyError(content: {
    type: string;
    title: string;
    text?: string;
    hash?: string;
    explorerTxUrl?: string;
}, store: ReduxWalletStore, isEnabled: boolean): void;
export declare function NotifySuccess(content: {
    type: string;
    title: string;
    text?: string;
    hash?: string;
    explorerTxUrl?: string;
}, store: ReduxWalletStore, isEnabled: boolean): void;
export declare function NotifyWarning(content: {
    type: string;
    title: string;
    text?: string;
    hash?: string;
    explorerTxUrl?: string;
}, store: ReduxWalletStore, isEnabled: boolean): void;
//# sourceMappingURL=notifications.d.ts.map