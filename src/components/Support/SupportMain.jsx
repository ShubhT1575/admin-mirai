import React from "react";
import SupportHead from "./SupportHead";
import SupportRow from "./SupportRow";

function SupportMain() {
  return (
    <div className="main-content app-content" id="m-content">
      <div className="container-fluid">
        <SupportHead />
        <SupportRow />
      </div>
    </div>
  );
}

export default SupportMain;
