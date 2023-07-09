// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

import {
  EthereumClient, 
  w3mConnectors, 
  w3mProvider
} from "@web3modal/ethereum";
import { configureChains, createClient } from "wagmi";
import { evmos } from "wagmi/chains";
// TODO: move this to a ENV VAR
export const projectId = "ae920fe62c5a565cfaaa6edacbbb6fa7";

const chains = [evmos];
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const { provider } = configureChains(chains, [w3mProvider({ projectId })])

export const wagmiClient = createClient({
  autoConnect: false,
  connectors: w3mConnectors({ projectId, chains }),
  provider,
});

export const ethereumClient = new EthereumClient(wagmiClient, chains);
