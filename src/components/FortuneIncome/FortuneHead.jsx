import React, { useState } from "react";

function FortuneHead() {
  const [search, setSearch] = useState("");
  const handleSearch = ()=>{
    
  }
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
        Package Buy Report
        </h1>
      </div>
        <div className="d-flex" style={{ marginTop: "10px" }}>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text btn btn-warning-gradient btn-wave"
                      id="basic-addon3"
                      style={{ borderRadius: "0" }}
                    >
                      Search
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control seach-input"
                    id="input-text"
                    aria-describedby="basic-addon3"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                      borderRadius: "0",
                      height: "36px",
                      fontSize: "14px",
                      overflow: "auto",
                    }}
                  />
                </div>

                <button
                  className="btn btn-icon btn-warning-gradient btn-wave mx-2"
                  // onClick={copyAddress}
                  onClick={handleSearch}
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
    </div>
  );
}

export default FortuneHead;
