export declare type ResultMessage = {
    result: boolean;
    message: string;
};
export declare const METAMASK_ERRORS: {
    readonly PubkeyError: "An error was produced while getting the public key, please sign the generate_pubkey message";
    readonly ChangeNetwork: "An error was produced while changing your Metamask network to Evmos, please select the Evmos network in your wallet extension";
    readonly SubscribeChangeNetwork: "An error was produced while listening to change network events, please restart your browser";
    readonly GetWallet: "An error was produced while getting your Metamask address, please allow the app to interact with your wallet";
    readonly DeniedSignature: "MetaMask Message Signature: User denied message signature.";
    readonly JsonParse: "JSON.parse: unexpected end of data at line 1 column 1 of the JSON data";
    readonly ProvidedChain: "Provided chainId \"9001\" must match the active chainId \"1\"";
};
export declare const METAMASK_SUCCESS_MESSAGES: {
    readonly Connected: "Successfully connected to Metamask";
    readonly Disconnected: "Disconnected from Metamask";
};
export declare const KEPLR_ERRORS: {
    readonly ExtensionNotFound: "Could not find Keplr Extension";
    readonly ConnectionError: "Could not connect to Evmos and Osmosis Network";
    readonly RequestRejectedError: "Request rejected";
};
export declare const KEPLR_SUCCESS_MESSAGES: {
    readonly Connected: "Successfully connected to Keplr";
    readonly Disconnected: "Disconnected from Keplr";
};
export declare const METAMASK_NOTIFICATIONS: {
    readonly ErrorTitle: "Error connecting with Metamask";
    readonly SuccessTitle: "Connected with Metamask";
    readonly PubkeySubtext: "Could not get the pubkey, please sign the generate_pubkey message!";
    readonly ChangeNetworkSubtext: "Could not change the network to EVMOS";
    readonly AddressSubtext: "Could not get the user address from Metamask";
    readonly DeniedSignatureSubtext: "Transaction was not signed";
    readonly EipToSignSubtext: "There was a problem creating the transaction, please try again";
    readonly ProvidedChainSubtext: "Please, connect to the EVMOS network";
    readonly AddTokenTitle: "Token added successfully";
    readonly ErrorAddToken: "Could not add token, please try again";
};
export declare const KEPLR_NOTIFICATIONS: {
    readonly ErrorTitle: "Error connecting with Keplr";
    readonly SuccessTitle: "Connected with Keplr";
    readonly ExtensionNotFoundSubtext: "The Keplr extension could not be found";
    readonly LedgerNotInitSubtext: "Please initialize ethereum app on ledger first";
    readonly RequestRejectedSubtext: "Please unlock the extension and allow the app to access your wallet address";
    readonly RequestRejectedSignSubtext: "Transaction was not signed";
    readonly WarningSubtext: "If you want to use Keplr with ledger in the EVMOS network, you need to install the ethereum app first";
};
//# sourceMappingURL=errors.d.ts.map