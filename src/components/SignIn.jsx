import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";
import { UserExist } from "./web3";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import LOGO from "../assets/logo/Bitgold yellow.png";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";
import Header from "./Landing/Header";
import "../style/SignUp.css";
import { apiUrl } from "./Config";
import axios from "axios";

function SignIn() {
  // const address = "0x70961132c3C0EAffA3651A578DA4c7b0e958D3cB";
  const { connector, isConnected, status, isDisconnected, address } =
    useAccount();
  const [walletAddress, setWalletAddress] = useState();
  const [loading, setLoading] = useState(false);
  // const { isConnected } = useAccount();
  const navigate = useNavigate();

  const res = new URLSearchParams(window.location.search);
  const ref = res?.get("ref");
  useEffect(() => {
    // if (res.has("ref")) {

    setWalletAddress(ref ? ref : address);
  }, [ref, address]);

  const LogIn = async () => {
    try {
      const user = await UserExist(walletAddress);
      if (user) {
        navigate("/Dashboard");
      } else {
        toast.error("User Not Exist! Please Register first");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred during the login process.");
    }
  };

  const handlePreviousMenu = () => {
    navigate("/");
  };

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    const response = await axios.get(apiUrl + "adminlogin" , {
      params: {
        email: userId,
        password: password
      }
    })
    console.log(response)
    if(response.data != null){
      setTimeout(()=>{
        setLoading(false);
        navigate("/RankReward");
      },2000)
    }else{
      toast.error("Invalid User Id or Password");
      setLoading(false);
      return;
    }
    
  }

  return (
    <div
      className="row authentication authentication-cover-main mx-0"
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <div className="col-xxl-6 col-xl-7">
        <div className="row justify-content-center align-items-center h-100">
          {/* <div
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
            <div className="authentication-cover-logo">
              <ConnectWallet />
            </div>
          </div> */}
          <div className="col-xxl-7 col-xl-9 col-lg-6 col-md-6 col-sm-8 col-12 ">
            <div className="card custom-card my-auto  new-card">
              <div className="card-body p-5 signin-body">
                <div className="text-center mb-3">
                  <img src="/final logo.png" alt="" width={150} />
                </div>
                <p className="h5 mb-2 text-center color-class">Admin Login</p>
                <div className="d-flex justify-content-center gap-1">
                  <p className="mb-4 op-7 fw-normal text-center color-class">
                    Welcome back
                  </p>
                </div>
                <div className="row gy-3">
                  <div className="col-xl-12">
                    <label className="form-label text-dark">
                      User Id
                    </label>
                    <input
                      type="text"
                      className="form-control color-class"
                      id="signup-firstname"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      placeholder="Enter Your User Id"
                      // value={isConnected ? address : " Please Connect Wallet"}
                      style={{
                        fontSize: "14px",
                        background: "radial-gradient(circle, #d4f059, #6bba00)",
                        border: ".5px solid green", opacity: "0.8"
                      }}
                    />
                    <label className="form-label text-dark">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control color-class"
                      id="signup-firstname"
                      placeholder="Enter Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      // value={isConnected ? address : " Please Connect Wallet"}
                      style={{
                        fontSize: "14px",
                        background: "radial-gradient(circle, #d4f059, #6bba00)",
                        border: ".5px solid green", opacity: "0.8"
                      }}
                    />
                  </div>
                </div>
                <div className="d-grid mt-4">
                    {!loading? <button
                      className="btn btn-warning-gradient btn-wave"
                      onClick={handleLogin}
                    >
                      Login
                    </button>: <button
                      className="btn btn-warning-gradient btn-wave d-flex justify-content-center"
                    >
                      <div class="loader"></div>
                    </button>}
                </div>
                <div className="text-center">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-6 col-xl-5 col-lg-12 d-xl-block d-none px-0">
        <div
          className="authentication-cover overflow-hidden"
          style={{ background: "radial-gradient(black, transparent)" }}
        >
          <div className="aunthentication-cover-content d-flex align-items-center justify-content-center">
            <div>
              <div className="d-flex gap-2">
                <h3 className="text-fixed-white mb-1 fw-medium text-light fw-900">Welcome </h3>
                <h3 className="text-primary2">
                  {address
                    ? `${address.slice(0, 4)}...${address.slice(-4)}`
                    : ""}
                </h3>
              </div>
              <h6 className="text-fixed-white mb-3 fw-medium">
                Login to Your Account
              </h6>
              <p className="text-fixed-white mb-1 op-6t text-light">
                Welcome to the Mirai Dao Admin Panel. Please log in to securely
                manage your administrative tools and oversee platform
                activities. Your credentials ensure system integrity and
                functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
