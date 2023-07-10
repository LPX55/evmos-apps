import { AnyAction, ThunkMiddleware } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { WalletExtension } from "../../internal/wallet/functionality/wallet";
export declare type ReduxWalletStore = ToolkitStore<{
    wallet: {
        value: WalletExtension;
    };
}, AnyAction, [
    ThunkMiddleware<{
        wallet: {
            value: WalletExtension;
        };
    }, AnyAction, undefined>
]>;
export declare const walletSlice: import("@reduxjs/toolkit").Slice<{
    value: WalletExtension;
}, {
    setWallet: (state: import("immer/dist/internal").WritableDraft<{
        value: WalletExtension;
    }>, action: {
        type: string;
        payload: WalletExtension;
    }) => void;
    resetWallet: (state: import("immer/dist/internal").WritableDraft<{
        value: WalletExtension;
    }>) => void;
}, "walletSlice">;
export declare const setWallet: import("@reduxjs/toolkit").ActionCreatorWithPayload<WalletExtension, "walletSlice/setWallet">, resetWallet: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"walletSlice/resetWallet">;
export declare const WalletReducer: import("redux").Reducer<{
    value: WalletExtension;
}, AnyAction>;
//# sourceMappingURL=WalletSlice.d.ts.map