import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function SupportHead() {
  const { wallet } = useSelector((state) => state.bitgold);
  const {walletAddress} = wallet;
  const address = walletAddress;
  const copyAddress = () => {
    const Caddress = document.getElementById("input-text").value;
    navigator.clipboard
      .writeText(Caddress)
      .then(() => {
        toast.success("Address copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Something Went Wrong!");
      });
  };

  return (
    <>
      {/* {" "} */}
      <div className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
      <div>
        <nav>
          <ol className="breadcrumb mb-1">
            <li className="breadcrumb-item">
              <a href="#"> Page </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Support
            </li>
          </ol>
        </nav>
        <h1 className="page-title fw-medium fs-18 mb-0">Support</h1>
      </div>
      <div className="btn-list d-flex">
        <input
          type="text"
          className="form-control copy-address-input"
          id="input-text"
          value={address}
          style={{ fontSize: "0.9rem" }}
          readOnly
        />
        <button
          className="btn btn-icon btn-info btn-wave"
          onClick={copyAddress}
        >
          <i className="ri-file-copy-fill"></i>
        </button>
      </div>
    </div>
    </>
  );
}

export default SupportHead;
