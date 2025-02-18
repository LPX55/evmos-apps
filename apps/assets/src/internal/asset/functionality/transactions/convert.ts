// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

import { BigNumber } from "@ethersproject/bignumber";
import { parseEther } from "@ethersproject/units";

import {
  EVMOS_BACKEND,
  EVMOS_NETWORK_FOR_BACKEND,
  Signer,
  IBCTransferResponse,
  ConvertMsg,
  BROADCASTED_NOTIFICATIONS,
  GENERATING_TX_NOTIFICATIONS,
  MODAL_NOTIFICATIONS,
  SIGNING_NOTIFICATIONS,
} from "evmos-wallet";
const feeAmountForConvert = BigNumber.from("30000000000000000");

async function convertCoinBackendCall(
  pubkey: string,
  address: string,
  params: ConvertMsg
): Promise<{
  error: boolean;
  message: string;
  data: IBCTransferResponse | null;
}> {
  try {
    const post = await fetch(`${EVMOS_BACKEND}/convertCoin`, {
      method: "post",
      body: JSON.stringify({
        transaction: {
          pubKey: pubkey,
          sender: address,
        },
        message: {
          srcChain: params.srcChain.toUpperCase(),
          sender: params.addressCosmos,
          receiver: params.addressEth,
          amount: params.amount,
          token: params.token,
        },
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = (await post.json()) as IBCTransferResponse;
    if ("error" in data) {
      // TODO: add sentry call here!
      return {
        error: true,
        message: GENERATING_TX_NOTIFICATIONS.ErrorGeneratingTx,
        data: null,
      };
    }
    return { error: false, message: "", data: data };
  } catch (e) {
    // TODO: add sentry call here!
    return {
      error: true,
      message: GENERATING_TX_NOTIFICATIONS.ErrorGeneratingTx,
      data: null,
    };
  }
}

async function convertERC20BackendCall(
  pubkey: string,
  address: string,
  params: ConvertMsg
): Promise<{
  error: boolean;
  message: string;
  data: IBCTransferResponse | null;
}> {
  try {
    const post = await fetch(`${EVMOS_BACKEND}/convertERC20`, {
      method: "post",
      body: JSON.stringify({
        transaction: {
          pubKey: pubkey,
          sender: address,
        },
        message: {
          srcChain: params.srcChain.toUpperCase(),
          sender: params.addressEth,
          receiver: params.addressCosmos,
          amount: params.amount,
          token: params.token,
        },
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = (await post.json()) as IBCTransferResponse;
    if ("error" in data) {
      // TODO: add sentry call here!
      return {
        error: true,
        message: GENERATING_TX_NOTIFICATIONS.ErrorGeneratingTx,
        data: null,
      };
    }
    return { error: false, message: "", data };
  } catch (e) {
    // TODO: add sentry call here!
    return {
      error: true,
      message: GENERATING_TX_NOTIFICATIONS.ErrorGeneratingTx,
      data: null,
    };
  }
}

export async function executeConvert(
  pubkey: string,
  address: string,
  params: ConvertMsg,
  isERC20Selected: boolean,
  feeBalance: BigNumber,
  extension: string
) {
  if (feeBalance.lt(feeAmountForConvert)) {
    return {
      error: true,
      message: MODAL_NOTIFICATIONS.ErrorInsufficientFeeSubtext,
      title: MODAL_NOTIFICATIONS.ErrorAmountTitle,
      txHash: "",
      explorerTxUrl: "",
    };
  }

  if (parseEther(params.amount).lte(BigNumber.from(0))) {
    return {
      error: true,
      message: MODAL_NOTIFICATIONS.ErrorZeroAmountSubtext,
      title: MODAL_NOTIFICATIONS.ErrorAmountTitle,
      txHash: "",
      explorerTxUrl: "",
    };
  }

  let tx;
  if (isERC20Selected) {
    tx = await convertERC20BackendCall(pubkey, address, params);
  } else {
    tx = await convertCoinBackendCall(pubkey, address, params);
  }

  if (tx.error === true || tx.data === null) {
    // Error generating the transaction
    return {
      error: true,
      message: tx.message,
      title: GENERATING_TX_NOTIFICATIONS.ErrorGeneratingTx,
      txHash: "",
      explorerTxUrl: "",
    };
  }

  const signer = new Signer();
  const sign = await signer.signBackendTx(
    address,
    tx.data,
    EVMOS_NETWORK_FOR_BACKEND,
    extension
  );
  if (sign.result === false) {
    return {
      error: true,
      message: sign.message,
      title: SIGNING_NOTIFICATIONS.ErrorTitle,
      txHash: "",
      explorerTxUrl: "",
    };
  }

  const broadcastResponse = await signer.broadcastTxToBackend();

  if (broadcastResponse.error === true) {
    // TODO: add sentry call here!
    return {
      error: true,
      message: broadcastResponse.message,
      title: BROADCASTED_NOTIFICATIONS.ErrorTitle,
      txHash: "",
      explorerTxUrl: "",
    };
  }

  return {
    error: false,
    message: `${BROADCASTED_NOTIFICATIONS.SubmitTitle} ${broadcastResponse.txhash}`,
    title: BROADCASTED_NOTIFICATIONS.SuccessTitle,
    txHash: broadcastResponse.txhash,
    explorerTxUrl: tx?.data?.explorerTxUrl,
  };
}
