import React, { useState, useEffect, useRef } from "react";
import AreaChart from "../Chart/AreaChart";
import { buyMatrix, getPendingCycle, getReinvestCount, LevelTeamBusiness, UserData } from "../web3";
import lapsLogo from "../../assets/img/loan.png";
import { useSelector } from "react-redux";
import { cutAfterDecimal } from "../web3";
import axios from "axios";
import { apiUrl } from "../Config";
import ApexChart from "../Chart/Radar";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import toast from "react-hot-toast";
import { getBalance } from "viem/actions";
import Tooltip from "../ToopTip/Tooptip";
import { IoClipboardSharp } from "react-icons/io5";
import { FaClipboardCheck } from "react-icons/fa6";


function DashboardRow2() {
  const [TBusiness, setTeamBusiness] = useState();
  const [dashboard, setDashboard] = useState();
  const [directList, setDirectList] = useState([]);
  const [IncomeOverview, setIncomeOverview] = useState({});
  const [dateType, setDateType] = useState("Yearly");
  const { tokenData } = useSelector((state) => state.bitgold);
  const TokenAddress = tokenData?.address;
  const tokenDecimals = tokenData?.decimals;
  const { dashboardData } = useSelector((state) => state.bitgold);
  const { directUser, directBusiness, teamBusiness, teamUser } = dashboardData;
  // const { walletAddress } = wallet;
  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState(false);
  // console.log(address,"xxx")
  // const address = walletAddress;
  const [matrixIncome, setMatrixIncome] = useState([]);
  const baseUrl = window.location.origin;
  console.log(baseUrl, "baseUrl");
  const inputRef = useRef();
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  // async function fetchData() {
  //   try {
  //     let data = await UserData(address);
  //     setDashboard(data);
  //     let TeamBusiness = await LevelTeamBusiness(address);
  //     setTeamBusiness(TeamBusiness);
  //   } catch (error) {
  //     setDashboard(false);
  //     setTeamBusiness(false);
  //     console.log(error);
  //   }
  // }

  // const getDirectList = async () => {
  //   try {
  //     const response = await axios.get(apiUrl + "/getDirectist", {
  //       params: {
  //         address: address,
  //       },
  //     });
  //     if (response?.status === 200) {
  //       setDirectList(response?.data?.data);
  //     } else {
  //       setDirectList([]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error.message);
  //   }
  // };

  // useEffect(() => {
  //   if (address) getDirectList();
  // }, [address]);

  // const GetIncomeOverview = async () => {
  //   try {
  //     const response = await axios.get(apiUrl + "/getChatIncomeWithfilter", {
  //       params: {
  //         address: address,
  //         datetype: dateType,
  //       },
  //     });
  //     if (response?.status === 200) {
  //       console.log(response?.data?.data?.percentages, "esponse?.data?.data");
  //       setIncomeOverview(response?.data?.data?.percentages);
  //     } else {
  //       setIncomeOverview({});
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error.message);
  //   }
  // };

  // useEffect(() => {
  //   if (address) GetIncomeOverview();
  // }, [address, dateType]);

  // console.log(, ",,,,,,,,,,,,");
  // useEffect(() => {
  //   if (address) fetchData();
  // }, [address]);

  //  const [currentPage, setCurrentPage] = useState(1); // Current page
  //   const rowsPerPage = 6; // Rows per page

  //   // Calculate the total number of pages
  //   const totalPages = Math.ceil(directList?.length / rowsPerPage);

  //   // Calculate the data to display for the current page
  //   const startIndex = (currentPage - 1) * rowsPerPage;
  //   const endIndex = startIndex + rowsPerPage;
  //   const currentData = directList?.slice(startIndex, endIndex);

  //   // Event handlers for pagination buttons
  //   const handlePrev = () => {
  //     if (currentPage > 1) {
  //       setCurrentPage(currentPage - 1);
  //     }
  //   };

  //   const handleNext = () => {
  //     if (currentPage < totalPages) {
  //       setCurrentPage(currentPage + 1);
  //     }
  //   };

  //   const handlePageClick = (page) => {
  //     setCurrentPage(page);
  //   };

  const itemsPerPage = 5; // Change this to modify items per page
  const [currentPage, setCurrentPage] = useState(1);
  // const [matrixIncome,setMatrixIncome] = useState([]);

  const totalPages = Math.ceil(matrixIncome.length / itemsPerPage);

  // Handle previous page
  // const handlePreviousPage = () => {
  //   if (currentPage > 1) setCurrentPage(currentPage - 1);
  // };

  // Handle next page
  // const handleNextPage = () => {
  //   if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  // };
  // const getMatrixIncome = async () => {
  //   try {
  //     const response = await axios.get(apiUrl + "/matrixincome", {
  //       params: {
  //         userId: address,
  //         matrix: 1,
  //       },
  //     });
  //     if (response?.status === 200) {
  //       console.log(response.data.user_income, "repp");

  //       setMatrixIncome(response?.data?.user_income || []);
  //       console.log(matrixIncome, "Matrix");
  //       // setTotalPages(response?.data?.totalPages);
  //     } else {
  //       setDirectUser([]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error.message);
  //   }
  // };
  // useEffect(() => {
  //   if (address) getMatrixIncome();
  // }, [address]);

  const [dashData, setDashData] = useState("");
  const getDash = async () => {
    const res = await axios.get(apiUrl + "/dashboard", {
      params: {
        user: address,
      },
    });
    console.log(res?.data, "respp");
    setDashData(res?.data);
    console.log(dashData, "dash");
  };

  const [income, setIncome] = useState([]);
  const [income5, setIncome5] = useState(0);
  const [income25, setIncome25] = useState(0);

  const showIncome = async () => {
    try {
      const res = await axios.get(apiUrl + "/Income", {
        params: { user: address },
      });
      console.log(res?.data, "income");
      setIncome(res?.data);
    } catch (error) {
      console.error("Error fetching income:", error);
    }
  };

  // Update income5 whenever income changes
  useEffect(() => {
    let amount = income
      .filter((item) => item.packageId === 1)
      .reduce((acc, item) => acc + item.amount, 0);

    setIncome5(amount);
  }, [income]); // Runs when `income` changes
  useEffect(() => {
    let amount = income
      .filter((item) => item.packageId === 2)
      .reduce((acc, item) => acc + item.amount, 0);

    setIncome25(amount);
  }, [income]); // Runs when `income` changes

  const [transaction, setTransaction] = useState([]);
  const showTransaction = async () => {
    const res = await axios.get(apiUrl + "/recentTransaction", {});
    console.log(res?.data, "xx");
    setTransaction(res?.data);
  };

  useEffect(() => {
    // getDash(address)
    if (address) {
      getDash();
      showIncome();
      showTransaction();
    }
  }, [address]);

  // const paginatedLevels = transaction
  // // .filter(item => item.packageId === 1)
  // .reverse()
  // .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const paginatedLevels = transaction.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // console.log(paginatedLevels, "paginatedLevels");

  // buyslotfunction

  const handleBuyNow = async (id) => {
    setIsLoading(true);
    // if (!purchasedSlots.includes(id)) {
    //   setPurchasedSlots((prev) => [...prev, id]);
    // }

    // const Tokaddress = await getUSDT();
    // const Taddress = Tokaddress.address;
    // // console.log(Taddress, "::::123");
    // const tokenDecimals = Tokaddress.decimals;

    // console.log(Taddress, Tokaddress, "::::123");

    // const balance = await getBalance(config, {
    //   address: address,
    //   token: Taddress,
    // });

    // const walletBalance = parseFloat(balance.formatted);
    // console.log(walletBalance, amt, "balllllllllllll");
    try {
      // if (walletBalance < amt) {
      //   // console.log(walletBalance, amt);
      //   setIsLoading(false);
      //   toast.error("Insufficient Balance");
      //   return;
      // }

      // const allowance = await checkAllowance(address, Taddress);
      // if (amt > allowance / Number("1e" + tokenDecimals)) {
      //   appRes = await appToken(amt, Taddress, tokenDecimals);
      // } else {
      // }
      let appRes;
      appRes = true;

      if (appRes) {
        const buy = buyMatrix(id);
        await toast.promise(buy, {
          loading: "Buying...",
          success: "Success!",
          error: "Error",
        });
        // checkActiveSlot();
        if (buy) {
          setIsLoading(false);
          setTimeout(() => {
            navigate("/Dashboard");
            getMatrix();
          }, 4000);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Couldn't process your request !!");
      setIsLoading(false);
    }
  };

  const [pool1, setPool1] = useState([]);
  const pool1pk1 = pool1?.filter((item)=> item.packageId === 1)
  const pool1pk2 = pool1?.filter((item)=> item.packageId === 2)
  const [pool2, setPool2] = useState([]);
  const pool2pk1 = pool2?.filter((item)=> item.packageId === 1)
  const pool2pk2 = pool2?.filter((item)=> item.packageId === 2)
  const [pool3, setPool3] = useState([]);
  const pool3pk1 = pool3?.filter((item)=> item.packageId === 1)
  const pool3pk2 = pool3?.filter((item)=> item.packageId === 2)
  const [cycle1,setCycle1] = useState(0)
  const [cycle2,setCycle2] = useState(0)
  const [reInvest1,setReInvest1] = useState(0)
  const [reInvest2,setReInvest2] = useState(0)
  const getPool1 = async (id) => {
    const res = await axios.get(apiUrl + "/newuserplacePool", {
      params: {
        // user: "0x8a62CcdFFb086c190A869E49761E6F9E422214E7",
        user: address,
        poolId: 1,
      },
    });
    console.log(res?.data, "Matrix1");
    setPool1(res?.data);
    const cyc1 = await getPendingCycle(address,1)
    const cyc2 = await getPendingCycle(address,2)
    const reinvestcount1 = await getReinvestCount(address,1)
    const reinvestcount2 = await getReinvestCount(address,2)
    const rein1 = Number(reinvestcount1)
    const rein2 = Number(reinvestcount2)
    const cycleFirst = Number(cyc1)
    const cycleSecond = Number(cyc2)
    // console.log(cycleFirst,"cyc1,cyc2")
    setCycle1(cycleFirst)
    setReInvest1(rein1)
    setReInvest2(rein2)
    setCycle2(cycleSecond)
    // console.log(pool1, "pool1");
  };
  const getPool2 = async (id) => {
    const res = await axios.get(apiUrl + "/newuserplacePool", {
      params: {
        // user: "0x8a62CcdFFb086c190A869E49761E6F9E422214E7",
        user: address,
        poolId: 2,
      },
    });
    console.log(res?.data, "Matrix2");
    setPool2(res?.data);
  };
  const getPool3 = async (id) => {
    const res = await axios.get(apiUrl + "/newuserplacePool", {
      params: {
        user: address,
        // user: "0x8a62CcdFFb086c190A869E49761E6F9E422214E7",
        poolId: 3,
      },
    });
    console.log(res?.data, "Matrix3");
    setPool3(res?.data);
  };

  useEffect(() => {
    if (address) {
      getPool1();
      getPool2();
      getPool3();
      
    }
  }, [address]);

  // const hasPlace1 = pool1.some(item => item.place === 1);
  // const hasPlace2 = pool1.some(item => item.place === 2);
  const [copied, setCopied] = useState(false);
  const inputValue = `${baseUrl}/SignUp?ref=${dashData?.user}`;
  console.log(inputValue, "inputRef");

  const handleCopy = () => {
    if (inputRef?.current) {
      // console.log("bbb")
      inputRef.current.select();
      navigator.clipboard.writeText(inputRef.current.value);
      setCopied(true);
      // setTimeout(() => setCopied(false), 1000);
    }
  };

  return (
    <div className="row">
      {/* Profit */}

      <div className="col-sm-12 col-md-4 col-xxl-4 mb-4">
        <div
          className="card custom-card overflow-hidden new-card row mb-2 justify-content-between "
          style={{ height: "100%", marginLeft: "0" }}
        >
          <div className="upcoming">
            <div className="col-sm-6 col-lg-6 mt-4" style={{ width: "95%" }}>
              <div className="">
                <div className="card custom-card school-card new-card-box mb-0 ">
                  <div className="card-body d-flex gap-2 justify-content-start align-self-start">
                    <div>
                      <span className="d-block mb-1">
                        User Id: {dashData?.userId}
                      </span>
                      <span className="d-block mb-1">
                        Id Date:{" "}
                        {new Date(dashData?.createdAt).toLocaleDateString()}
                      </span>
                      <span className="d-block mb-1">
                        Earning ($5): {income5}
                      </span>
                      <span className="d-block mb-1">
                        Earning ($25): {income25}
                      </span>
                      <span className="d-block mb-1">
                        Sponsor Id: {dashData?.referrerId}
                      </span>
                      {/* <span className="d-block mb-1">Referral: 200</span> */}
                      <h6 className="mb-0 fw-semibold">
                        {/* {dashboard && Number(dashboard[3])} */}
                        {/* {rank || "0"} */}
                      </h6>
                    </div>
                    <div>
                      <span className="text-primary2">
                        {/* <img src={rankImg} alt="" style={{ width: "40px" }} /> */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row col-sm-12 col-md-12 col-lg-12 left-row-cards mt-4"
            style={{ paddingRight: "0px", paddingLeft: "28px" }}
          >
            <div className="grid">
              <div className="g-col-6">
                <div className="">
                  <div className="card custom-card school-card new-card-box">
                    <div className="card-body d-flex justify-content-between">
                      <div>
                        <div className="recycle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Re-Invest">{reInvest1}</div>
                        <div className="recycle recycle2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Pending Cycle">{cycle1}</div>
                        <div
                          className="d-flex gap-2"
                          style={{ justifySelf: "center" }}
                        >
                          <span
                            className="d-block mb-1"
                            style={{ fontSize: "30px", fontWeight: "800" }}
                          >
                            $5
                          </span>
                          {/* <div
                                 className="text-success badge bg-success-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0 "
                                 style={{
                                   width: "fit-content",
                                   height: "fit-content",
                                   cursor: "pointer",
                                 }}
                               >
                                 Monthly Activated
                               </div> */}
                        </div>
                        {/* <h6 className="mb-0 fw-semibold">jj</h6> */}
                        <button
                          type="button"
                          className="btn btn-warning-gradient btn-wave"
                          style={{
                            background:
                              "radial-gradient(circle, #d4f059, #6bba00)",
                            color: "black",
                            fontWeight: "500",
                          }}
                          onClick={() => {
                            handleBuyNow(1);
                          }}
                        >
                          Buy
                        </button>
                      </div>
                      <div>
                        <span className="text-primary">
                          {/* <img src={id} alt="" style={{ width: "40px" }} /> */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="g-col-6">
                <div>
                  <div className="card custom-card school-card new-card-box">
                    <div className="card-body d-flex justify-content-between">
                      <div>
                      <div className="recycle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Re-Invest">{reInvest2}</div>
                      <div className="recycle recycle2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Pending Cycle">{cycle2}</div>

                        <span
                          className="d-block mb-1"
                          style={{ fontSize: "30px", fontWeight: "800" }}
                        >
                          $25
                        </span>
                        {/* <h6 className="mb-0 fw-semibold">
                          {referrerId || "No Sponsor"}
                        </h6> */}
                        <button
                          type="button"
                          className="btn btn-warning-gradient btn-wave"
                          style={{
                            background:
                              "radial-gradient(circle, #d4f059, #6bba00)",
                            color: "black",
                            fontWeight: "500",
                          }}
                          onClick={() => {
                            handleBuyNow(2);
                          }}
                        >
                          Buy
                        </button>
                      </div>
                      <div>
                        <span className="text-primary1">
                          {/* <img src={sponsor} alt="" style={{ width: "40px" }} /> */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="g-col-6">
                <div>
                  <div className="card custom-card school-card new-card-box">
                    <div className="card-body d-flex gap-2 justify-content-between">
                      {/* <div className="ss"> */}
                      <div>
                        <div className="card custom-card school-card new-card-box small-box">
                        <div className="tooptip" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={pool1pk1[1]?.user? pool1pk1[1]?.user : pool1pk1[0]?.user}>
                          <div
                            className={`card-body d-flex gap-2 justify-content-between slotBox ${
                              pool1pk1[1]?.place === 1 ? "slotBox-green" : ""
                            }`}
                          >
                            <div></div>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div>
                        <div className="card custom-card school-card new-card-box small-box">
                        <div className="tooptip" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={pool1pk1[0]?.user? pool1pk1[0]?.user : "N/A"}>
                          <div
                            className={`card-body d-flex gap-2 justify-content-between slotBox ${
                              pool1pk1[0]?.place === 2 ? "slotBox-green" : ""
                            }`}
                          >
                            <div></div>
                          </div>
                        </div>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="g-col-6">
                <div>
                  <div className="card custom-card school-card new-card-box">
                    <div className="card-body d-flex gap-2 justify-content-between">
                      {/* <div className="ss"> */}
                      <div>
                        <div className="card custom-card school-card new-card-box small-box">
                          <div
                            className={`card-body d-flex gap-2 justify-content-between slotBox ${
                              pool1pk2[1]?.place === 1 ? "slotBox-green" : ""
                            }`}
                          >
                            <div></div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="card custom-card school-card new-card-box small-box">
                          <div
                            className={`card-body d-flex gap-2 justify-content-between slotBox ${
                              pool1pk2[0]?.place === 2 ? "slotBox-green" : ""
                            }`}
                          >
                            <div></div>
                          </div>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="g-col-6">
                <div>
                  <div className="card custom-card school-card new-card-box">
                    <div className="card-body d-flex gap-2 justify-content-between">
                      {/* <div className="ss"> */}
                      <div className="row-slot">
                        {pool2pk1[0]?.place >= 1 ? (
                          <div>
                            <div className="card custom-card school-card new-card-box small-box">
                              <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                                <div></div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="card custom-card school-card new-card-box small-box">
                              <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                                <div></div>
                              </div>
                            </div>
                          </div>
                        )}
                        {pool2pk1[0]?.place >= 2 ? (
                          <div>
                            <div className="card custom-card school-card new-card-box small-box">
                              <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                                <div></div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="card custom-card school-card new-card-box small-box">
                              <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                                <div></div>
                              </div>
                            </div>
                          </div>
                        )}
                        {pool2pk1[0]?.place >= 3 ? (
                          <div>
                            <div className="card custom-card school-card new-card-box small-box">
                              <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                                <div></div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="card custom-card school-card new-card-box small-box">
                              <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                                <div></div>
                              </div>
                            </div>
                          </div>
                        )}
                        {pool2pk1[0]?.place == 4 ? (
                          <div>
                            <div className="card custom-card school-card new-card-box small-box">
                              <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                                <div></div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="card custom-card school-card new-card-box small-box">
                              <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                                <div></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="g-col-6">
                <div>
                  <div className="card custom-card school-card new-card-box">
                    <div className="card-body d-flex gap-2 justify-content-between">
                      {/* <div className="ss"> */}
                      <div className="row-slot">
                        {pool2pk2[0]?.place >= 1 ? (
                          <div>
                            <div className="card custom-card school-card new-card-box small-box">
                              <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                                <div></div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="card custom-card school-card new-card-box small-box">
                              <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                                <div></div>
                              </div>
                            </div>
                          </div>
                        )}
                        {pool2pk2[0]?.place >= 2 ? (
                          <div>
                            <div className="card custom-card school-card new-card-box small-box">
                              <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                                <div></div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="card custom-card school-card new-card-box small-box">
                              <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                                <div></div>
                              </div>
                            </div>
                          </div>
                        )}
                        {pool2pk2[0]?.place >= 3 ? (
                          <div>
                            <div className="card custom-card school-card new-card-box small-box">
                              <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                                <div></div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="card custom-card school-card new-card-box small-box">
                              <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                                <div></div>
                              </div>
                            </div>
                          </div>
                        )}
                        {pool2pk2[0]?.place == 4 ? (
                          <div>
                            <div className="card custom-card school-card new-card-box small-box">
                              <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                                <div></div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="card custom-card school-card new-card-box small-box">
                              <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                                <div></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="g-col-6 ">
                <div>
                  <div className="card custom-card school-card new-card-box">
                    <div className="card-body d-flex gap-2 justify-content-between flex-wrap">
                      {/* <div className="ss"> */}

                      {pool3pk1[0]?.place >= 1 ? (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      )}
                      {pool3pk1[0]?.place >= 2 ? (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      )}
                      {pool3pk1[0]?.place >= 3 ? (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      )}
                      {pool3pk1[0]?.place >= 4 ? (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      )}
                      {pool3pk1[0]?.place >= 5 ? (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      )}
                      {pool3pk1[0]?.place >= 6 ? (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      )}
                      {pool3pk1[0]?.place >= 7 ? (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      )}
                      {pool3pk1[0]?.place == 8 ? (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="g-col-6 ">
                <div>
                  <div className="card custom-card school-card new-card-box">
                    <div className="card-body d-flex gap-2 justify-content-between flex-wrap">
                      {/* <div className="ss"> */}

                      {pool3pk2[0]?.place >= 1 ? (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      )}
                      {pool3pk2[0]?.place >= 2 ? (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      )}
                      {pool3pk2[0]?.place >= 3 ? (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      )}
                      {pool3pk2[0]?.place >= 4 ? (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      )}
                      {pool3pk2[0]?.place >= 5 ? (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      )}
                      {pool3pk2[0]?.place >= 6 ? (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      )}
                      {pool3pk2[0]?.place >= 7 ? (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      )}
                      {pool3pk2[0]?.place == 8 ? (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox slotBox-green">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="card custom-card school-card new-card-box small-box">
                            <div className="card-body d-flex gap-2 justify-content-between slotBox ">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6" style={{ width: "100%" }}>
              <div>
                <div className="card custom-card school-card new-card-box">
                  <div className="card-body d-flex gap-2 justify-content-between">
                    <div className="btn-div">
                      <input
                        type="text"
                        ref={inputRef}
                        value={inputValue}
                        style={{ display: "none" }}
                      />
                      <button
                        type="button"
                        className={`btn btn-wave ${
                          copied
                            ? "btn-success-gradient"
                            : "btn-warning-gradient"
                        }`}
                        style={{ fontWeight: "500" , display: "flex", alignItems: "center"}}
                        onClick={handleCopy}
                      >
                        {copied ? <>Copied <FaClipboardCheck style={{height: "20px" , color: "#fff"}}/></> : <>Copy Referrel Link <IoClipboardSharp style={{height: "20px" , color: "#FFF"}}/></>}
                      </button>
                      {/* <button type="button" className="btn btn-warning-gradient btn-wave">Referrel Link</button>
                    <button type="button" className="btn btn-warning-gradient btn-wave">Withdrawl</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-6 col-lg-6">
                         <div className="">
                           <div className="card custom-card school-card">
                             <div className="card-body d-flex gap-2 justify-content-between">
                               <div>
                                 <span className="d-block mb-1">Referral Reward</span>
                                 <h6 className="mb-0 fw-semibold">
                                   ${" "}
                                   0
                                 </h6>
                               </div>
                               <div>
                                 <span className="text-primary">
                                   <img src={Ref} alt="" style={{ width: "40px" }} />
                                 </span>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-sm-6 col-lg-6">
                         <div>
                           <div className="card custom-card school-card">
                             <div className="card-body d-flex gap-2 justify-content-between">
                               <div>
                                 <span className="d-block mb-1">Rank Reward</span>
                                 <div className="d-flex gap-3">
                                   <h6 className="mb-0 fw-semibold">
                                     0
                                   </h6>
                                   <span
                                     className="text-primary badge bg-success-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0 px-2"
                                     style={{ cursor: "pointer" }}
                                     onClick={ClaimRankReward}
                                   >
                                     Claim
                                   </span>
                                 </div>
                               </div>
                               <div>
                                 <span className="text-primary1">
                                   <img src={rankReward} alt="" style={{ width: "40px" }} />
                                 </span>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-sm-6 col-lg-6">
                         <div>
                           <div className="card custom-card school-card">
                             <div className="card-body d-flex gap-2 justify-content-between">
                               <div>
                                 <span className="d-block mb-1"> Stake Reward</span>
                                 <div className="d-flex gap-3">
                                   <h6 className="mb-0 fw-semibold">
                                     ${" "}
                                     0
                                   </h6>
                                   <span
                                     className="text-warning badge bg-success-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0 px-2"
                                     style={{ cursor: "pointer" }}
                                     onClick={UserClaimStakeReward}
                                   >
                                     Claim
                                   </span>
                                   <div>
                                     <span
                                       className="text-primary1"
                                       style={{
                                         position: "absolute",
                                         right: "15px",
                                         top: "15px",
                                       }}
                                     >
                                       <img
                                         src={FundReward}
                                         alt=""
                                         style={{ width: "40px" }}
                                       />
                                     </span>
                                   </div>
                                 </div>
                               </div>
                               <div>
                                 <span className="text-primary2">
                                   <img src={Stake} alt="" style={{ width: "40px" }} />
                                 </span>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-sm-6 col-lg-6">
                         <div className="">
                           <div className="card custom-card school-card">
                             <div className="card-body d-flex gap-2 justify-content-between">
                               <div>
                                 <span className="d-block mb-1"> Login Reward</span>
                                 <div className="d-flex gap-1">
                                   {" "}
                                   <h6 className="mb-0 fw-semibold">
                                     0
                                   </h6>
                                   {isDivEnabled && (
                                     <span
                                       className="text-info badge bg-success-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0 px-2"
                                       style={{ cursor: "pointer" }}
                                       onClick={getReawrd}
                                     >
                                       Claim
                                     </span>
                                   )}
                                 </div>
                               </div>
                               <div>
                                 <span className="text-primary">
                                   <img src={Login} alt="" style={{ width: "40px" }} />
                                 </span>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div> */}
            {/* <div className="col-sm-6 col-lg-6">
                     <div
                       className="modal fade"
                       id="exampleModal"
                       tabindex="-1"
                       aria-labelledby="exampleModalLabel"
                       aria-hidden="true"
                     >
                       <div className="modal-dialog">
                         <div className="modal-content">
                           <div className="modal-header d-flex justify-content-between">
                             <div>
                               <h5 className="modal-title" id="exampleModalLabel">
                                 Fund Wallet Stake
                               </h5>
                             </div>
                             <div>
                               <button
                                 type="button"
                                 className="btn-close"
                                 data-bs-dismiss="modal"
                                 aria-label="Close"
                               ></button>
                             </div>
                           </div>
                           <div className="modal-body">
                             <div className="col-xl-12">
                               <label
                                 for="signup-firstname"
                                 className="form-label text-default"
                               >
                                 Stake Amount<sup className="fs-12 text-danger">*</sup>
                               </label>
                               <input
                                 type="Number"
                                 className="form-control"
                                 id="signup-firstname"
                                 placeholder="Enter Stake Amount"
                               />
                             </div>
                           </div>
                           <div className="modal-footer justify-content-center">
                             <button type="button" className="btn btn-primary w-50">
                               Deposit
                             </button>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div>
                       <div className="card custom-card school-card">
                         <div className="card-body d-flex gap-2 justify-content-between">
                           <div>
                             <span className="d-block mb-1" style={{ fontSize: "14px" }}>
                               Fund Wallet Reward
                             </span>
                             <div className="d-flex gap-3">
                               <h6 className="mb-0 fw-semibold">
                                 ${" "}
                                 {FundWReward &&
                                   FundWReward / Number("1e" + tokenDecimals)}
                               </h6>
                               <span
                                 className="text-info badge bg-success-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0 px-2 "
                                 data-bs-toggle="modal"
                                 data-bs-target="#exampleModal"
                                 style={{ cursor: "pointer" }}          <div className="col-sm-6 col-lg-6">
                     <div>
                       <div className="card custom-card school-card">
                         <div className="card-body d-flex gap-2 justify-content-center">
                         <a href="https://app.uniswap.org/swap">
                           <button className="btn-buyCrpto w-100">SELL CRYPTO</button>
                         </a>
                         </div>
                       </div>
                     </div>
                   </div>
                                 // onClick={getReawrd}
                               >
                                 Deposit
                               </span>
                             </div>
                           </div>
                           <div>
                             <span className="text-primary1">
                               <img src={FundReward} alt="" style={{ width: "40px" }} />
                             </span>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div> */}
            {/* <div className="col-sm-6 col-lg-6">
                     <div>
                       <div className="card custom-card school-card">
                         <div className="card-body d-flex gap-2 justify-content-between">
                           <div>
                             <span className="d-block mb-1">Fund Wallet</span>
                             <div className="">
                               <h6 className="mb-0 fw-semibold">
                                 ${" "}
                                 {(dashboard &&
                                   Number(dashboard[11].fundingWallet) /
                                     ("1e" + tokenDecimals)) ||
                                   0.0}
                               </h6>
                             </div>
                           </div>
                           <div>
                             <span className="text-primary2">
                               <img src={FundWallet} alt="" style={{ width: "40px" }} />
                             </span>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div> */}
            {/* <div className="col-sm-6 col-lg-6">
                     <div className="">
                       <div className="card custom-card school-card">
                         <div className="card-body d-flex gap-2 justify-content-between">
                           <div>
                             <span className="d-block mb-1"> Reward Wallet</span>
                             <div className="">
                               {" "}
                               <h6 className="mb-0 fw-semibold">
                                 ${" "}0
                               </h6>
                             </div>
                           </div>
                           <div>
                             <span className="text-primary">
                               <img src={Reward} alt="" style={{ width: "40px" }} />
                             </span>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="col-sm-6 col-lg-6">
                     <div>
                       <div className="card custom-card school-card">
                         <div className="card-body d-flex gap-2 justify-content-between">
                           <div>
                             <span className="d-block mb-1">Future Wallet</span>
                             <h6 className="mb-0 fw-semibold">
                               0
                             </h6>
                           </div>
                           <div>
                             <span className="text-primary1">
                               <img src={Future} alt="" style={{ width: "40px" }} />
                             </span>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div> */}
            {/* <div className="col-sm-6 col-lg-6">
                     <div>
                       <div className="card custom-card school-card">
                         <div className="card-body d-flex gap-2 justify-content-center">
                         <a href="#stakeID">
                           <button className="btn-buyCrpto w-100">STAKE</button>
                         </a>
                         </div>
                       </div>
                     </div>
                   </div> */}
            {/* <div className="col-sm-6 col-lg-6">
                     <div>
                       <div className="card custom-card school-card">
                         <div className="card-body d-flex gap-2 justify-content-center">
                         <a href="https://app.uniswap.org/swap">
                           <button className="btn-buyCrpto w-100">BUY CRYPTO</button>
                         </a>
                         </div>
                       </div>
                     </div>
                   </div> */}
            {/* <div className="col-sm-6 col-lg-6">
                     <div>
                       <div className="card custom-card school-card">
                         <div className="card-body d-flex gap-2 justify-content-center">
                         <Link to="/Withdraw" style={{ cursor: "pointer" }}>
                           <button className="btn-buyCrpto w-100 ">
                             TRANSFER REWARD
                           </button>
                         </Link>
                         </div>
                       </div>
                     </div>
                   </div> */}
            {/* <div className="col-sm-6 col-lg-6">
                     <div>
                       <div className="card custom-card school-card">
                         <div className="card-body d-flex gap-2 justify-content-center">
                         <a href="https://app.uniswap.org/swap">
                           <button className="btn-buyCrpto w-100">SELL CRYPTO</button>
                         </a>
                         </div>
                       </div>
                     </div>
                   </div> */}
          </div>
        </div>
      </div>
      {/* <div className="col-sm-12  col-md-6 col-xxl-6">
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
      </div> */}
      <div className="col-sm-12  col-md-4 col-xxl-4">
        <div className="card custom-card new-card" style={{ height: "483px" }}>
          <div className="upcoming">
            <div className="col-sm-6 col-lg-6 mt-4" style={{ width: "80%" }}>
              <div>
                <div className="card custom-card school-card new-card-box">
                  <div className="card-body d-flex gap-2 justify-content-between">
                    <div>
                      <span className="d-block mb-1">Latest Notification</span>
                      <h6 className="mb-0 fw-semibold">
                        {/* {dashboard && Number(dashboard[3])} */}
                        {/* {rank || "0"} */}
                      </h6>
                    </div>
                    <div>
                      <span className="text-primary2">
                        {/* <img src={rankImg} alt="" style={{ width: "40px" }} /> */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12  col-md-4 col-xxl-4">
        <div className="card custom-card new-card" style={{ height: "483px" }}>
          <div className="upcoming">
            <div className="col-sm-6 col-lg-6 mt-4" style={{ width: "80%" }}>
              <div>
                <div className="card custom-card school-card new-card-box">
                  <div className="card-body d-flex gap-2 justify-content-between">
                    <div>
                      <span className="d-block mb-1">Latest Transcation</span>
                      <h6 className="mb-0 fw-semibold">
                        {/* {dashboard && Number(dashboard[3])} */}
                        {/* {rank || "0"} */}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body p-0" style={{ height: "406px" }}>
            <div className="table-responsive">
              <table className="table text-nowrap text-center direct-data-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ color: "black" }}>
                      Tx Hash
                    </th>
                    <th scope="col" style={{ color: "black" }}>
                      Package
                    </th>
                    {/* <th scope="col">Matrix</th> */}
                    {/* <th scope="col">Level</th> */}
                    {/* <th scope="col">Slot Id</th> */}
                    <th scope="col" style={{ color: "black" }}>
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedLevels?.map((rep, index) => (
                    <tr key={index}>
                      <td>
                        <a
                          href={`https://opbnb-testnet.bscscan.com/tx/${rep?.txHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          // className="text-warning"
                          style={{ color: "blue" }}
                        >
                          {rep?.txHash.slice(0, 4)}...
                          {rep?.txHash.slice(-4)}
                        </a>
                      </td>
                      <td style={{ color: "black" }}>{rep.packageId}</td>
                      {/* <td style={{ color: "rgb(0, 119, 181)" }}>
                        {rep.matrix}
                      </td> */}

                      {/* <td>{rep.slotId}</td> */}
                      <td style={{ color: "black" }}>$ {rep.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {transaction?.length === 0 && (
                <div className=" w-100">
                  <div
                    className="w-100 text-center p-3 level-dash"
                    style={{ color: "black" }}
                  >
                    No Data Found.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PieChart*/}
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
    </div>
  );
}

export default DashboardRow2;
