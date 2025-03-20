import React, { useState } from "react";

function CoreHead() {
  const [dateType, setDateType] = useState("Yearly");
  return (
    <div
      className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2 page-head-breadcrumb"
      style={{ marginTop: "90px" }}
    >
      <div>
        <nav>
          <ol className="breadcrumb mb-1">
          </ol>
        </nav>
        <h1 className="page-title fw-bold fs-18 mb-0 text-dark">
        Club Report
        </h1>
    
      </div>
    </div>
  );
}

export default CoreHead;
