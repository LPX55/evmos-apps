import { getReservedForFeeText } from "./format";

describe("Test Styles for Asset", () => {
  it("getReserverdForFee function", () => {
    const msg = getReservedForFeeText(5, "EVMOS", "EVMOS");
    expect(msg).toBe(
      "5 EVMOS is reserved for transaction fees on the EVMOS network."
    );
  });
});
