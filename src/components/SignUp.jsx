import React, { useEffect, useState } from "react";
import ConnectWallet from "./ConnectWallet";
import "../style/SignUp.css";
import { useAccount, useChainId, useConnect } from "wagmi";
import { Link } from "react-router-dom";
import LOGO from "../assets/logo/Bitgold yellow.png";
import { useDispatch, useSelector } from "react-redux";
import "../style/SignUp.css";
import { getAddressbyRefrralId } from "../API/Api.js";
import {
  buyPackage,
  checkAllowance,
  getOwner,
  getUSDT,
  tokenApprove,
  UserExist,
  userRegister,
} from "./web3";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getBalance } from "@wagmi/core";
import { config } from "../main.jsx";
// import { TokenAddress } from "./Config.js";
import { setWalletDetails } from "../Redux/Slice.js";
import { TokenAddres } from "./Config.js";

function SignUp() {
  const { tokenData } = useSelector((state) => state.bitgold);
  const TokenAddress = tokenData?.address;
  const tokenDecimals = tokenData?.decimals;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const chainId = useChainId();

  const { connector, isConnected, status, isDisconnected, address } =
    useAccount();

  useEffect(() => {
    dispatch(
      setWalletDetails({
        walletAddress: address,
        chainId,
        isConnected,
        isDisconnected,
        connector,
        status,
      })
    );
  }, [dispatch, chainId, address, isConnected, isDisconnected]);

  const [packageValue, setPackageValue] = useState("5");
  const [inputRef, setInputRef] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [refFromUrl, setRefFromUrl] = useState();
  const [showDiv, setShowDiv] = useState(false);
  const [isCheckedYes, setIsCheckedYes] = useState(false);
  const [isCheckedNo, setIsCheckedNo] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const res = new URLSearchParams(window.location.search);
    // console.log(res,'rrrrrrrrrrrrrrrrrrrrrr')
    if (res.has("ref")) {
      console.log("step1");
      const ref = res.get("ref");
      // console.log(ref,'123.........');
      setRefFromUrl(ref);
      setShowDiv(true);
    }
  }, [window.location.search]);

  // console.log(refFromUrl,'ref................');

  const handleYesChange = (event) => {
    const checked = event.target.checked;
    setIsCheckedYes(checked);
    if (checked) {
      setIsCheckedNo(false);
      setShowDiv(true);
    }
  };

  const handleNoChange = (event) => {
    const checked = event.target.checked;
    setIsCheckedNo(checked);
    if (checked) {
      setIsCheckedYes(false);
      setShowDiv(false);
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

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

  const appToken = async (amt, TokenAddress, tokenDecimals) => {
    try {
      const res = tokenApprove(amt, TokenAddress, tokenDecimals);
      await toast.promise(res, {
        loading: "Wait for Approvel.........",
        success: "Success!",
        error: "Approval Failed",
      });
      setIsLoading(false);
      return res;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      return false;
    }
  };

  const Register = async (refAddress, amt) => {
    try {
      setIsLoading(true);
      if (!address) {
        setIsLoading(false);
        return toast.error("Please connect wallet");
      }
      if (!isCheckedYes && !isCheckedNo) {
        setIsLoading(false);
        return toast.error("Please select checkbox !");
      }
      if (!packageValue) {
        setIsLoading(false);
        return toast.error("Enter Package Value");
      }
      // if (amt >= 60) {
      //   setIsLoading(false);
      //   toast.error("Please Enter an Register Amount Greater Than 60");
      //   return;
      // }

      const isUserExist = await UserExist(address);
      if (isUserExist) {
        toast.error("You are already registered! Please Login");
        setIsLoading(false);
        return;
      }

      // let getRefAddress;
      // if (refAddress) {
      //   getRefAddress = await getAddressbyRefrralId(refAddress);
      //   if (getRefAddress?.data?.status != 200) {
      //     setIsLoading(false);
      //     toast.error(getRefAddress?.data?.message);
      //     return;
      //   }
      // }

      const ownerAddress = await getOwner();

      const refAddressSet = !refAddress ? ownerAddress : refAddress;

      console.log(refAddressSet, "ref::::");

      const isValidRef = await UserExist(refAddressSet);

      if (!isValidRef) {
        setIsLoading(false);
        toast.error("Invalid Sponsor Address");
        return;
      }
    // console.log("xxx")

      
      // const Tokaddress = await getUSDT();
      // const Taddress = Tokaddress.address;
      // console.log(Taddress, "::::123");
      // const tokenDecimals = Tokaddress.decimals;
      
      // console.log(Taddress, Tokaddress, "::::123");

      // const balance = await getBalance(config, {
      //   address: address,
      //   token: Taddress,
      // });

      // const walletBalance = parseFloat(balance.formatted);

      // if (walletBalance < amt) {
      //   console.log(walletBalance, amt);
      //   setIsLoading(false);
      //   toast.error("Insufficient Balance");
      //   return;
      // }

      // if (!isChecked) {
      //   setIsLoading(false);
      //   return toast.error(
      //     "You must accept the Terms and Conditions to Register."
      //   );
      // }
      // console.log("a a");

      // const allowance = await checkAllowance(address, Taddress);
      // console.log("a a4");
      let appRes;

      // if (amt > allowance / Number("1e" + tokenDecimals)) {
      //   appRes = await appToken(amt, Taddress, tokenDecimals);
      // } else {
      // }
      appRes = true;
      if (appRes) {
        const buy = userRegister(refAddressSet, amt);
        await toast.promise(buy, {
          loading: "Buying...",
          success: "Success!",
          error: "Error",
        });
        if (buy) {
          setTimeout(() => {
            navigate("/Dashboard");
            setIsLoading(false);
          }, 2000);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred during the registration process.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (address) {
      checkAllowance(address, TokenAddres)
        .then((res) => {})
        .catch((e) => {
          console.log(e, ":::::::::");
        });
    }
  }, [address]);

  const handlePreviousMenu = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <div
          className="row authentication authentication-cover-main mx-0"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Left Section */}
          <div className="col-xxl-6 col-xl-7">
            <div className="row justify-content-center align-items-center h-100">
              <div
                className=""
                style={{
                  position: "absolute",
                  top: "25px",
                  left: "0px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button class="Btn" onClick={handlePreviousMenu}>
                  <div class="sign">
                    <i class="fa-solid fa-left-long"></i>
                  </div>
                  {/* <div class="text">Logout</div> */}
                </button>
                <div className="authentication-cover-logo">
              <ConnectWallet />
            </div>
              </div>
              <div className="col-xxl-7 col-xl-9 col-lg-6 col-md-6 col-sm-8 col-12">
                <div className="card custom-card my-5  new-card">
                  <div className="card-body p-5 signup-body">
                    <div className="text-center mb-3">
                      <img src="/final logo.png" alt="" width={150} />
                    </div>
                    <p className="h5 mb-2 text-center color-class">Register Here</p>
                    <p className="mb-4 op-7 fw-normal text-center color-class">
                      Welcome! Dashboard by creating your account.
                    </p>
                    <div className="row gy-3">
                      <div className="col-xl-12">
                        <label
                          htmlFor="signup-firstname"
                          className="form-label text-default color-class"
                        >
                          Wallet Address
                        </label>
                        <input
                          type="text"
                          className="form-control color-class"
                          id="signup-firstname"
                          placeholder={
                            isConnected ? address : "Connect Your Wallet First"
                          }
                      style={{ fontSize: "14px", background: "radial-gradient(circle, #d4f059, #6bba00)" , border: ".5px solid green" }}
                          readOnly
                        />
                      </div>
                      {showDiv && (
                        <div className="col-xl-12 " id="sponsor-div">
                          <label
                            htmlFor="signup-sponsor-id"
                            className="form-label text-default color-class"
                          >
                            Sponsor Id ?
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="signup-sponsor-id"
                            placeholder="Enter sponsor id"
                            value={refFromUrl ? refFromUrl : inputRef}
                            onChange={(e) => {
                              setInputRef(e.target.value);
                            }}
                          />
                        </div>
                      )}
                      <div className="col-xl-12">
                        <label
                          htmlFor="signup-package"
                          className="form-label text-default color-class"
                        >
                          Package<sup className="fs-12 text-light">*</sup>
                        </label>
                        <div className="position-relative">
                          <input
                            type="number"
                            className="form-control"
                            id="signup-package"
                            placeholder="Enter Your Package"
                            value={packageValue}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      {/* <div className="col-xl-12">
                        <div className="d-flex justify-content-center gap-3 default-package">
                          {["10", "50", "100", "200", "500"].map((value) => (
                            <button
                              key={value}
                              type="button"
                              className={`btn btn-${getButtonClass(
                                value
                              )} btn-wave`}
                              value={value}
                              onClick={() => handleButtonClick(value)}
                            >
                              $ {value}
                            </button>
                          ))}
                        </div>
                      </div> */}
                    </div>
                    <div className="text-center">
                      <p className=" mt-3 mb-0 ">Have any Sponsor Id ?{"  "}</p>
                      <div>
                        <div
                          className="form-check form-check-inline"
                          style={{ paddingRight: "0px" }}
                        >
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox1"
                            value="option1"
                            onChange={handleYesChange}
                            checked={isCheckedYes}
                            style={{ cursor: "pointer" }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox1"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                            onChange={handleNoChange}
                            checked={isCheckedNo}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox2"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="d-flex align-items-center gap-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <div
                          className="form-check mt-2 color-class"
                          style={{ paddingRight: "0px" }}
                        >
                          <label
                            className="form-check-label text-muted fw-normal fs-14"
                            for="defaultCheck1"
                          ></label>
                          By signing up, you agree to our
                          <Link to="/Terms" className="text-success">
                            <u>Terms &amp; Conditions</u>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="cc mt-4 d-grid btn btn-warning-gradient btn-wave address-notconnected-btn d-flex justify-content-center align-content-center text-primary">
                      {isLoading ? (
                        <span
                          className="spinner-border text-light"
                          role="status"
                        >
                          <span className="sr-only"></span>
                        </span>
                      ) : isConnected ? (
                        <button
                          style={{
                            background: "transparent",
                            border: "none",
                          }}
                          className="btn w-100 text-light"
                          onClick={() =>
                            Register(
                              refFromUrl ? refFromUrl : inputRef,
                              1
                            )
                          }
                        >
                          Register
                        </button>
                      ) : (
                        !isConnected && (
                          <ConnectWallet className="address-connected-btn" />
                        )
                      )}
                    </div>

                    <div className="text-center">
                      <p className=" mt-3 mb-0">
                        Already have an account?{"  "}
                        <Link to="/SignIn" className="text-primary">
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          {/* <div className="col-xxl-6 col-xl-5 col-lg-12 d-xl-block d-none px-0">
            <div className="authentication-cover overflow-hidden">
              <div className="authentication-cover-logo">
                <ConnectWallet />
              </div>
              <div className="aunthentication-cover-content d-flex align-items-center justify-content-center">
                <div className="">
                  <div className="d-flex gap-2">
                    <h3 className="text-fixed-white mb-1 fw-medium">
                      Welcome{" "}
                    </h3>
                    <h3 className="text-primary2">
                      {address
                        ? `${address.slice(0, 4)}...${address.slice(-4)}`
                        : ""}
                      !
                    </h3>
                  </div>
                  <h6 className="text-fixed-white mb-3 fw-medium">
                    Register Your Account
                  </h6>
                  <p className="text-fixed-white mb-1 op-6">
                    Welcome to the TETHER OCEAN Dashboard. Please Register to
                    securely manage your administrative tools and oversee
                    platform activities. Your credentials ensure system
                    integrity and functionality.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default SignUp;
