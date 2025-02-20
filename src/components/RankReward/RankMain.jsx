import React from "react";
import RankHead from "./RankHead";
import RankRow from "./RankRow";

function RankMain() {
  return (
    <div className="main-content app-content" id="m-content">
      <div className="container-fluid">
        <RankHead />
        <RankRow />
      </div>
    </div>
  );
}

export default RankMain;
