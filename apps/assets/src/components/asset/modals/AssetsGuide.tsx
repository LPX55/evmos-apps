// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

import dynamic from "next/dynamic";
import { useState } from "react";

const ModalAsset = dynamic(() => import("./ModalAsset"));

const AssetsGuide = () => {
  const [show, setShow] = useState(false);
  const modalContent = (
    <div className="space-y-5">
      <h5 className="text-2xl font-bold">Asset Guides</h5>
      <p>
        Reference guide on the Evmos Assets Page can be found{" "}
        <a
          href="https://medium.com/evmos/assets-page-quick-reference-guide-f1cd09e7cb85"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-red">here</span>
        </a>
        .
      </p>
      Axelar-based assets workflow can be found{" "}
      <a
        href="https://www.notion.so/How-to-Deposit-or-Withdraw-Axelar-Assets-on-the-Evmos-Assets-Page-2ef683c3bec745eda4cc1b894ce165b8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-red">here</span>
      </a>
      .
    </div>
  );
  return (
    <>
      <span
        onClick={() => {
          setShow(true);
        }}
        className="cursor-pointer text-red"
      >
        view the assets guide
      </span>
      <ModalAsset
        show={show}
        modalContent={modalContent}
        close={() => {
          setShow(false);
        }}
      />
    </>
  );
};

export default AssetsGuide;
