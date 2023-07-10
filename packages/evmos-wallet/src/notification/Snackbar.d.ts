import { Dispatch } from "react";
import { AnyAction } from "redux";
declare const Snackbar: ({ type, content, id, dispatch, }: {
    type: string;
    content: {
        type: string;
        title: string;
        text?: string | undefined;
        hash?: string | undefined;
        explorerTxUrl?: string | undefined;
    };
    id: number;
    dispatch: Dispatch<AnyAction>;
}) => JSX.Element;
export default Snackbar;
//# sourceMappingURL=Snackbar.d.ts.map