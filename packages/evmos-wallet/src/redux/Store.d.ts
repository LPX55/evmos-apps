export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    wallet: {
        value: import("../internal/wallet/functionality/wallet").WalletExtension;
    };
    snackbar: {
        value: {
            currentId: number;
            snackbars: import("../notification/redux/notificationSlice").Snackbar[];
        };
    };
}, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<{
    wallet: {
        value: import("../internal/wallet/functionality/wallet").WalletExtension;
    };
    snackbar: {
        value: {
            currentId: number;
            snackbars: import("../notification/redux/notificationSlice").Snackbar[];
        };
    };
}, import("redux").AnyAction, undefined>]>;
export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//# sourceMappingURL=Store.d.ts.map