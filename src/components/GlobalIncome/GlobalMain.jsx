import React from "react";
import GlobalHead from "./GlobalHead";
import GlobalRow from "./GlobalRow"

function CoreMain() {
  return (
    <div className="main-content app-content" id="m-content">
      <div className="container-fluid">
        <GlobalHead/>
        <GlobalRow/>
      </div>
    </div>
  );
}

export default CoreMain;
