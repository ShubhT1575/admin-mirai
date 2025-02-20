import React from "react";
import IncomeHead from "./IncomeHead";
import IncomeRow from "./IncomeRow";

function IncomeMain() {
  return (
    <div className="main-content app-content " id="m-content">
      <div className="container-fluid">
        <IncomeHead />
        <IncomeRow />
      </div>
    </div>
  );
}

export default IncomeMain;
