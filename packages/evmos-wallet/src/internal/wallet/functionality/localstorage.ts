// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

const WALLET_PROVIDER_KEY = "current_wallet_provider_evmos";

export function SaveProviderToLocalStorate(provider: string) {
  localStorage.setItem(WALLET_PROVIDER_KEY, provider);
}

export function RemoveProviderFromLocalStorage() {
  localStorage.removeItem(WALLET_PROVIDER_KEY);
}

export function GetProviderFromLocalStorage() {
  return localStorage.getItem(WALLET_PROVIDER_KEY);
}
