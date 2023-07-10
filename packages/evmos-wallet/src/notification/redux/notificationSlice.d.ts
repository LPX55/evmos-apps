import { StoreType } from "../../redux/Store";
import Snackbar from "../Snackbar";
export type Snackbar = {
    type: string;
    content: {
        type: string;
        title: string;
        text?: string;
        hash?: string;
        explorerTxUrl?: string;
    };
    id: number;
};
export declare const notificationSlice: import("@reduxjs/toolkit").Slice<{
    value: {
        currentId: number;
        snackbars: Snackbar[];
    };
}, {
    addSnackbar: (state: import("immer/dist/internal").WritableDraft<{
        value: {
            currentId: number;
            snackbars: Snackbar[];
        };
    }>, action: {
        type: string;
        payload: Snackbar;
    }) => void;
    removeSnackbar: (state: import("immer/dist/internal").WritableDraft<{
        value: {
            currentId: number;
            snackbars: Snackbar[];
        };
    }>, action: {
        type: string;
        payload: {
            id: number;
        };
    }) => void;
}, "notificationSlice">;
export declare const addSnackbar: import("@reduxjs/toolkit").ActionCreatorWithPayload<Snackbar, "notificationSlice/addSnackbar">, removeSnackbar: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: number;
}, "notificationSlice/removeSnackbar">;
export declare const getAllSnackbars: (state: StoreType) => Snackbar[];
export declare const NotificacionReducer: import("redux").Reducer<{
    value: {
        currentId: number;
        snackbars: Snackbar[];
    };
}, import("redux").AnyAction>;
export type NotificationType = typeof notificationSlice;
//# sourceMappingURL=notificationSlice.d.ts.map