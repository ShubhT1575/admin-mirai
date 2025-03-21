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
import "../style/signin.css";
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
        navigate("/home");
      },2000)
    }else{
      toast.error("Invalid User Id or Password");
      setLoading(false);
      return;
    }
  }

  return (
    <div className="admin-login-container">
      <div className="admin-login-card" style={{margin:"20px"}}>
        <div className="admin-login-left">
          <div className="admin-left-content">
            <div className="admin-logo-container">
              <img src="/final logo.png" alt="Mirai DAO" className="admin-logo" />
            </div>
            <div className="admin-login-form">
              <h2>Admin Login</h2>
              <p className="welcome-text">Welcome back</p>
              
              <div className="input-group1">
                <label htmlFor="userId">User ID</label>
                <div className="input-container">
                  <i className="fa-solid fa-user input-icon"></i>
                  <input
                    type="text"
                    id="userId"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter your User ID"
                  />
                </div>
              </div>
              
              <div className="input-group1" style={{ marginBottom: "50px" }}>
                <label htmlFor="password">Password</label>
                <div className="input-container">
                  <i className="fa-solid fa-lock input-icon"></i>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                  />
                </div>
              </div>
              
              {/* <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div> */}
              
              <button 
                className="login-button" 
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? (
                  <div className="loader"></div>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </div>
        </div>
        
        <div className="admin-login-right">
          <div className="admin-right-content">
            <h2>Welcome</h2>
            <h3>Login to Your Account</h3>
            <p>
              Welcome to the Mirai DAO Admin Panel. Please log in to securely
              manage your administrative tools and oversee platform
              activities. Your credentials ensure system integrity and
              functionality.
            </p>
            {address && (
              <div className="wallet-address">
                <span>Connected Wallet:</span>
                <span className="address-display">
                  {`${address.slice(0, 6)}...${address.slice(-4)}`}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
