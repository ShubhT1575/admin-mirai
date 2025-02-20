import React from "react";
import { useSelector } from "react-redux";
import { baseUrl } from "../Config";
import toast from "react-hot-toast";

function WithdrawHead() {
  // const { wallet } = useSelector((state) => state.Methereum);
  // const { walletAddress, isConnected } = wallet;
  // const address = walletAddress;
  // const copyAddress = () => {
  //   const Caddress = document.getElementById("input-text").value;
  //   navigator.clipboard
  //     .writeText(Caddress)
  //     .then(() => {
  //       toast.success("Sponsor ID copied to clipboard!");
  //     })
  //     .catch((err) => {
  //       toast.error("Something Went Wrong!");
  //     });
  // };

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
              Withdrawal
            </li>
          </ol>
        </nav>
        <h1 className="page-title fw-medium fs-18 mb-0 text-light">
          Withdrawal
        </h1>
      </div>
    </div>
  );
}

export default WithdrawHead;
