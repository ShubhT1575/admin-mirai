import React from "react";

function LapseHead() {
  return (
    <div
      className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2 page-head-breadcrumb"
      style={{ marginTop: "90px" }}
    >
      <div>
        <nav>
          <ol className="breadcrumb mb-1">
            <li className="breadcrumb-item">
              <a href="#"> Page </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Lapse Wallet
            </li>
          </ol>
        </nav>
        <h1 className="page-title fw-medium fs-18 mb-0 text-light">
          Lapse Wallet
        </h1>
      </div>
    </div>
  );
}

export default LapseHead;
