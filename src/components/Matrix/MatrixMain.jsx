import React from "react";
import "../../style/matrix.css";
import MatrixHead from "./MatrixHead";
import MatrixRow from "./MatrixRow";

function MatrixMain() {
  return (
    <div className="main-content app-content" id="m-content">
      <div className="container-fluid">
        <MatrixHead />
        <MatrixRow />
      </div>
    </div>
  );
}

export default MatrixMain;
