import ApexChart from "../Chart/Radar";
import React, { useEffect, useState } from "react";
import ConnectWallet from "../ConnectWallet.jsx";
import "../../style/SignUp.css";
import { buyPackage, checkAllowance, tokenApprove, UserData } from "../web3.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { TokenAddress } from "../Config.js";
import { UpgradeAmount } from "../web3.js";
import { getBalance } from "@wagmi/core";
import { config } from "../../main.jsx";
import axios from "axios";
import { apiUrl } from "../Config.js";
import { useSelector } from "react-redux";
import { PiHandDepositBold } from "react-icons/pi";
import AreaChart from "../Chart/AreaChart";


function DashboardRow3() {
  const { tokenData } = useSelector((state) => state.bitgold);
  const TokenAddress = tokenData?.address;
  const tokenDecimals = tokenData?.decimals;

  const navigate = useNavigate();
  const { wallet } = useSelector((state) => state.bitgold);
  const { walletAddress, isConnected } = wallet;
  const address = walletAddress;
  const [packageValue, setPackageValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [walletBal, setWalletBal] = useState("");
  const [directList, setDirectList] = useState([]);
  const [teamData, setTeamData] = useState("");
  const [IncomeOverview, setIncomeOverview] = useState({});
  const [dateType, setDateType] = useState("Yearly");
  const [accessAddress, setAccessAddress] = useState("");
  const [dashboard, setDashboard] = useState();

  async function fetchData(address) {
    try {
      let data = await UserData(address);
      setDashboard(data);
    } catch (error) {
      setDashboard(false);
    }
  }

  useEffect(() => {
    if (address) fetchData(address);
  }, [address]);

  const handleButtonClick = (value) => {
    setPackageValue(value);
  };

  const handleInputChange = (event) => {
    setPackageValue(event.target.value);
  };

  function getButtonClass(value) {
    switch (value) {
      case "10":
        return "primary3-light";
      case "50":
        return "secondary-light";
      case "100":
        return "warning-light";
      case "200":
        return "orange-light";
      case "500":
        return "primary2-light";
      default:
        return "default";
    }
  }

  const appToken = async (amt) => {
    try {
      const res = tokenApprove(amt, TokenAddress, tokenDecimals);
      await toast.promise(res, {
        loading: "Waiting for confirmation...",
        success: "Success!",
        error: "error",
      });
      return res;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  // const Stake = async (amt) => {
  //   try {
  //     setIsLoading(true);
  //     if (!address) {
  //       setIsLoading(false);
  //       return toast.error("Please connect wallet");
  //     }
  //     if (!packageValue) {
  //       setIsLoading(false);
  //       return toast.error("Enter Package Value");
  //     }
  //     const balance = await getBalance(config, {
  //       address: address,
  //       token: TokenAddress,
  //     });

  //     const walletBalance = parseFloat(balance.formatted);

  //     if (walletBalance <= amt) {
  //       setIsLoading(false);
  //       return toast.error("Insufficient Balance");
  //     }

  //     const allowance = await checkAllowance(address, TokenAddress);
  //     let appRes;

  //     if (amt > allowance / Number("1e" + tokenDecimals)) {
  //       appRes = await appToken(amt);
  //     } else {
  //       appRes = true;
  //     }

  //     if (appRes) {
  //       const buy = UpgradeAmount(amt, tokenDecimals);
  //       await toast.promise(buy, {
  //         loading: "Buying...",
  //         success: "Success!",
  //         error: "Error",
  //       });
  //       setIsLoading(false);
  //     } else {
  //       setIsLoading(false);
  //     }
  //   } catch (error) {
  //     if (error.message.includes("User rejected the request.")) {
  //       toast.error("User rejected the request.");
  //     } else {
  //       toast.error("Something Went Wrong!");
  //     }
  //     setIsLoading(false);
  //   }
  // };

  const getBal = async (address) => {
    const balance = await getBalance(config, {
      address: address,
      token: TokenAddress,
    });
    setWalletBal(balance.formatted);
  };
  useEffect(() => {
    getBal(address);
  }, [address]);

  const getDirectList = async () => {
    try {
      const response = await axios.get(apiUrl + "/getDirectList", {
        params: {
          address: address,
        },
      });
      if (response?.status === 200) {
        setDirectList(response?.data?.data);
      } else {
        setDirectList([]);
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  useEffect(() => {
    if (address) getDirectList();
  }, [address]);

  useEffect(() => {
    const res = new URLSearchParams(window.location.search);
    if (res.has("accessAddress")) {
      const ref = res.get("accessAddress");

      setAccessAddress(ref);
      // setShowDiv(true);
    }
  }, [window.location.search]);

  const GetDeposit = async () => {
    try {
      const response = await axios.get(apiUrl + "/getDashboardData", {
        params: {
          address: address,
        },
      });
      if (response?.status === 200) {
        setTeamData(response?.data);
      } else {
        setTeamData([]);
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  useEffect(() => {
    GetDeposit();
  }, [address]);

  const GetIncomeOverview = async () => {
    try {
      const response = await axios.get(apiUrl + "/getChatIncomeWithfilter", {
        params: {
          address: address,
          datetype: dateType,
        },
      });
      if (response?.status === 200) {
        console.log(response?.data?.data?.percentages,"esponse?.data?.data")
        setIncomeOverview(response?.data?.data?.percentages);
      } else {
        setIncomeOverview({});
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  useEffect(() => {
    if (address) GetIncomeOverview();
  }, [address, dateType]);

  const [currentPage, setCurrentPage] = useState(1); // Current page
  const rowsPerPage = 6; // Rows per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(directList?.length / rowsPerPage);

  // Calculate the data to display for the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = directList?.slice(startIndex, endIndex);

  // Event handlers for pagination buttons
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
    <div className="row" id="stakeID"> 
            <div className="col-sm-12  col-md-6 col-xxl-6">
              <div className="card custom-card">
                <div className="card-header justify-content-between position-absolute">
                  <div className="card-title">Daily Income</div>
                </div>
                <div className="card-body saleChart-body">
                  <div id="sales-overview-crm">
                    <AreaChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12  col-md-6 col-xxl-6">
              <div className="card custom-card">
                <div className="card-header justify-content-between position-absolute">
                  <div className="card-title">Daily Income</div>
                </div>
                <div className="card-body saleChart-body">
                  <div id="sales-overview-crm">
                    <AreaChart />
                  </div>
                </div>
              </div>
            </div>
            
      {/* <div className="col-sm-12  col-md-5 col-xxl-5" >
        <div
          className="card custom-card overflow-hidden"
          style={{ height: "95%" }}
        >
          <div className="card-header justify-content-left">
            <p className="mb-0 card-title">Upgrade Package</p>
          </div>
          <div className="card-body p-0">
            <div className="p-4 m-2 rounded-2 bg-primary text-fixed-white bg-crypto-balance">
              <div className="d-flex align-items-center gap-2 justify-content-between">
                <div>
                  <div className="mb-1 op-9">Total Wallet Balance</div>
                  <h4 className="text-fixed-white mb-1 fw-medium me-2">
                    ${walletBal ? Number(walletBal)?.toFixed(2) : "0.00"} USDT
                  </h4>
                  {/* <span className="op-7 fs-12">Increased by </span>
                  <span className="badge bg-success mt-2 text-fixed-white p-1 text-end ms-1">
                    <i className="ti ti-trending-up me-2"></i>12.2%
                  </span> */}
                {/* </div>
                <div className=" text-end">
                  <div className="avatar avatar-lg bg-primary1 shadow">
                    <i className="ri-bank-line fs-4 lh-1"></i>
                  </div>
                </div> */}
              {/* </div> */}
            {/* </div>
            <div className="row g-0">
              <div className="col ">
                <div className="p-3">
                  <div className="d-flex align-items-center justify-content-start gap-3">
                    <span className="avatar avatar-md bg-primary2">
                      <i className="ri-arrow-left-down-fill fs-20"></i>
                    </span>
                    <div>
                      <div className="fw-medium ">Total Stake</div>
                      <h5 className="mb-0">
                        ${" "}
                        {(dashboard &&
                          Number(dashboard[4]) /
                            Number("1e" + tokenDecimals)) ||
                          0.0}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <div className="d-flex align-items-center justify-content-end gap-3">
                    <span className="avatar avatar-md bg-primary3">
                      <PiHandDepositBold />
                    </span>
                    <div>
                      <div className="fw-medium ">Min.. Stake</div>
                      <h5 className="mb-0">$07 USD</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>*/}
          {/* <div className="card-body p-3 pt-0 d-flex flex-column justify-content-center align-items-center">
            <div className="row gy-3 w-100 px-0">
              <div className="col-xl-12 p-0">
                <div className="position-relative">
                  <input
                    type="number"
                    className="form-control"
                    id="signup-package"
                    placeholder="Enter Package Amount"
                    value={packageValue}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-xl-12 p-0">
                <div className="d-flex justify-content-center gap-4 stake-amt-buttons align-items-center">
                  {["10", "50", "100", "200", "500"].map((value) => (
                    <button
                      key={value}
                      type="button"
                      className={`btn btn-${getButtonClass(value)} btn-wave`}
                      value={value}
                      onClick={() => handleButtonClick(value)}
                    >
                      $ {value}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="cc mt-3 d-grid btn btn-outline-primary address-notconnected-btn d-flex justify-content-center align-items-center">
              {isLoading ? (
                <span className="p-2">
                  <span className="spinner-border text-light" role="status">
                    <span className="sr-only"></span>
                  </span>
                </span>
              ) : (
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                  }}
                  className="btn btn-primary w-100 text-light stakebtn"
                  onClick={() => Stake(packageValue)}
                  disabled={accessAddress}
                >
                  Stake
                </button>
              )}
            </div>
          </div>
        </div>
      </div> */ }
      {/* <div className="col-sm-12 col-md-3 col-xxl-3">
        <div
          className="card custom-card overflow-hidden"
          style={{ height: "483px" }}
        >
          <div className="card-header justify-content-between">
            <div className="card-title">Income Overview</div>
            <div className="dropdown">
              <div
                className="btn btn-light border btn-full btn-sm "
                data-bs-toggle="dropdown"
                style={{ color: "white" }}
              >
                {dateType}
                <i className="ti ti-chevron-down ms-1"></i>
              </div>
              <ul className="dropdown-menu" role="menu">
                <li>
                  <a
                    className="dropdown-item "
                    onClick={() => setDateType("Yearly")}
                  >
                    Yearly
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light"
                    onClick={() => setDateType("Weekly")}
                  >
                    Weekly
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item "
                    onClick={() => setDateType("Monthly")}
                  >
                    Monthly
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body px-0">
            <div
              id="Leads-overview"
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "369px" }}
            >
              <ApexChart
                totalCoreIncome={IncomeOverview?.refrealRewardPercentage || 0}
                totalGlobleIncome={IncomeOverview?.rankBonusPercentage || 0}
                totalFortuneIncome={IncomeOverview?.dailyStakingPercentage || 0}
                totalAllIncome={IncomeOverview?.dialyloginRewardPercentage || 0}
                funWallet={IncomeOverview?.fundWalletPercentage || 0}
              />
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="col-sm-12 col-md-4 col-xxl-4">
        <div
          className="card custom-card overflow-hidden"
          style={{ height: "483px" }}
        >
          <div className="card-header justify-content-between">
            <div className="card-title">Direct Users Data</div>
          </div>
          <div className="card-body p-0" style={{ height: "406px" }}>
            <div className="table-responsive">
              <table className="table text-nowrap text-center direct-data-table">
                <thead>
                  <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">User</th>
                    <th scope="col">Level</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Time Stamp</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData?.map((rep, index) => (
                    <tr key={index} >
                      <td>{startIndex + index + 1}</td>
                      <td style={{ color: "rgb(0, 119, 181)" }}>
                        {`${rep.user.slice(0, 6)}...${rep.user.slice(-4)}`}
                      </td>
                      <td>{rep.now_level}</td>
                      <td>$ {rep.totalAmount}</td>
                      <td>{new Date(rep.timestamp).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mb-2 d-flex justify-content-center pb-2">
            <nav aria-label="Page navigation" className="pagination-style-2">
              <ul className="pagination mb-0 flex-wrap">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <a
                    className="page-link text-primary bg-transparent border-1"
                    onClick={handlePrev}
                  >
                    Prev
                  </a>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i}
                    className={`page-item ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      onClick={() => handlePageClick(i + 1)}
                    >
                      {i + 1}
                    </a>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <a
                    className="page-link text-primary bg-transparent"
                    onClick={handleNext}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div> */}
    </div>
    </>
  );
}

export default DashboardRow3;
