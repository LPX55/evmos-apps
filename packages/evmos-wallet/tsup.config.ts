// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["src/**/*.tsx"],
  format: ["esm"],
  target: "ES2020",
  dts: true,
  minify: true,
  clean: true,
  external: [
    "next",
    "react",
    "react-dom",
    "react-redux",
    "@tanstack/react-query",
    "@web3modal/ethereum",
    "@web3modal/standalone",
    "@web3modal/react",
    "wagmi",
    "ethers",
    "@ethersproject/bignumber",
    "@evmos/address-converter",
    "@evmos/proto",
    "@evmos/provider",
    "@evmos/transactions",
    "@hanchon/signature-to-pubkey",
    "icons",
    "ui-helpers",
  ],
  ...options,
}));
