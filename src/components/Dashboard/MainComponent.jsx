import React, { useEffect, useState } from "react";
import DashboardRow1 from "./DashboardRow1.jsx";
import DashboardRow2 from "./DashboardRow2.jsx";
import DashboardRow3 from "./DashboardRow3.jsx";
import DashboardRow4 from "./DashboardRow4.jsx";
import toast from "react-hot-toast";
import { baseUrl } from "../Config.js";
import { UserData } from "../web3.js";
import { useSelector } from "react-redux";
import DashboardRowHead from "./DashboardRowHead.jsx";

function MainComponent() {
  const { tokenData } = useSelector((state) => state.bitgold);
  const TokenAddress = tokenData?.address;
  const tokenDecimals = tokenData?.decimals;
  const { wallet, dashboardData } = useSelector((state) => state.bitgold);
  const { walletAddress } = wallet;
  const address = walletAddress;
  const [lapsAmt, setLapsAmt] = useState();

  const copyAddress = () => {
    const Caddress = document.getElementById("input-text").value;
    navigator.clipboard
      .writeText(Caddress)
      .then(() => {
        toast.success("Sponsor ID copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Something Went Wrong!");
      });
  };

  async function fetchData() {
    try {
      let data = await UserData(address);
      const formattedData = Number(data[3]) / Number("1e" + tokenDecimals);
      setLapsAmt(formattedData);
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(`${baseUrl}?ref=${dashboardData?.referralId}`)
  useEffect(() => {
    if (address) fetchData();
  }, [address]);

  return (
    <div className="main-content app-content">
      <div className="container-fluid">
        <div style={{ marginTop: "90px" }} className="dash-head-div">
          {/* {lapsAmt >= 0 && ( */}
            {/* <div
              className="alert alert-warning alert-dismissible fade show custom-alert-icon shadow-sm d-flex justify-content-between bg-danger-gradient"
              style={{ backgroundColor: "rgb(255 10 33)" }}
              role="alert"
            >
              <div
                style={{ width: "100%" }}
                className="d-flex align-items-center"
              >
                <svg
                  className="svg-warning"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                  width="1.5rem"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" />
                </svg>
                <span
                  style={{
                    marginLeft: "10px",
                    fontSize: "20px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                 Daily Login Reward Increased By : 
                </span>
              </div>
              <div className="d-flex justify-content-center align-content-center">
                <button
                  type="button"
                  className="bg-danger"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  style={{ borderRadius: "7px", border: "none" }}
                >
                  <i className="ri-close-line fw-bold"></i>
                </button>
              </div>
            </div> */}
          {/* )} */}

              {/* heading */}

          <div className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2 mt-3">
            <div>
              <nav>
                <ol className="breadcrumb mb-1">
                  {/* <li className="breadcrumb-item">
                    <a href="#"> Page </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li> */}
                </ol>
              </nav>
              {/* <h1 className="page-title fw-medium fs-18 mb-0 text-light">
                Dashboard
              </h1> */}
            </div>
            {/* {dashboardData?.referrerId && (
              <div className="d-flex">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text btn btn-secondary-gradient btn-wave"
                      id="basic-addon3"
                      style={{ borderRadius: "0" }}
                    >
                      Sponsor ID
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="input-text"
                    aria-describedby="basic-addon3"
                    value={`${baseUrl}/signUp?ref=${dashboardData?.referrerId}`}
                    readOnly
                    style={{
                      borderRadius: "0",
                      height: "36px",
                      fontSize: "14px",
                      overflow: "auto",
                    }}
                  />
                </div>

                <button
                  className="btn btn-icon btn-secondary-gradient btn-wave mx-2"
                  onClick={copyAddress}
                >
                  <i className="ri-file-copy-fill"></i>
                </button>
              </div>
             )} */}
          </div>
          
        </div>
        {/* row  start */}
        {/* <DashboardRowHead/> */}
        {/* <DashboardRow1 /> */}
        <DashboardRow2 />
        {/* <DashboardRow3 /> */}
        {/* <DashboardRow4 /> */}
        {/* row  end */}
      </div>
    </div>
  );
}

export default MainComponent;
