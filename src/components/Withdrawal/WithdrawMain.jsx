import React from "react";
import WithdrawHead from "./WithdrawHead";
import WithdrawRow from "./WithdrawRow";

function WithdrawMain() {
  return (
    <div className="main-content app-content" id="m-content">
      <div className="container-fluid">
        <WithdrawHead />
        <WithdrawRow />
      </div>
    </div>
  );
}

export default WithdrawMain;
