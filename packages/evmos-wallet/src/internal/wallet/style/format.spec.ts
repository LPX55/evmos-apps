// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

import { truncateAddress } from "./format";

describe("Test format", () => {
  it("Lower than 11 or ''", () => {
    const address = "evmos1";
    const truncate = truncateAddress(address);
    expect(truncate).toBe(address);
  });
  it("truncate evmos address", () => {
    const address = "evmos1c8wgcmqde5jzymrjrflpp8j20ss000c00zd0ak";
    const truncate = truncateAddress(address);
    expect(truncate).toBe("evmos1c8wgcmq...0zd0ak");
  });
  it("truncate Hex address", () => {
    const hexAddress = "0xC1dC8C6c0dCd24226c721a7E109E4A7C20F7bF0f";
    const truncate = truncateAddress(hexAddress);
    expect(truncate).toBe("0xC1d...bF0f");
  });
  it("undefined", () => {
    const hexAddress = undefined;
    const truncate = truncateAddress(hexAddress);
    expect(truncate).toBe("");
  });
});
