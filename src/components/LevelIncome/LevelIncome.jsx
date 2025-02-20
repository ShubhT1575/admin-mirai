import React from "react";
import LevelIncomeHead from "./LevelIncomeHead";
import LevelIncomeBody from "./LevelIncomeBody";
// import CoreBody from "./CoreBody";
// import CoreHead from "./CoreHead";

function LevelIncome() {
  return (
    <div className="main-content app-content" id="m-content">
      <div className="container-fluid">
        <LevelIncomeHead />
        <LevelIncomeBody />
      </div>
    </div>
  );
}

export default LevelIncome;
