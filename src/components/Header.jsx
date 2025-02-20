import React, { useEffect, useState } from "react";
import ConnectWallet from "./ConnectWallet";
import { useAccount, useChainId } from "wagmi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setDashboardData,
  setTokenData,
  setWalletDetails,
} from "../Redux/Slice";
import { getUser } from "../API/Api";
import { getUSDT } from "./web3";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const dispatch = useDispatch();
  const chainId = useChainId();
  // const address = "0x70961132c3C0EAffA3651A578DA4c7b0e958D3cB";
  const { address } = useAccount();
  const navigate = useNavigate();
  const [accessAdress, setAccessAddress] = useState("");
  const { connector, isConnected, status, isDisconnected } = useAccount();

  useEffect(() => {
    const res = new URLSearchParams(window.location.search);
    if (res.has("accessAddress")) {
      const ref = res.get("accessAddress");
      console.log(ref, "redddddfffff");
      setAccessAddress(ref);
    }
  }, [window.location.search]);

  const add = address ? address : accessAdress;

  useEffect(() => {
    dispatch(
      setWalletDetails({
        walletAddress: add,
        chainId,
        isConnected,
        isDisconnected,
        connector,
        status,
      })
    );
  }, [dispatch, chainId, add, isConnected, isDisconnected, accessAdress]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (!add) {
  //       navigate("/SignIn");
  //     }
  //   }, 2000);
  
  //   return () => clearTimeout(timeout); 
  // }, [add, navigate]);
  

  useEffect(() => {

    getUser(add)
      .then((res) => {
        console.log(res, "res");
        if (res?.status == 200) {
          console.log(res?.data?.userDetails, "ghfsdatgcgt");
          dispatch(setDashboardData(res?.data?.userDetails));
        } else {
          dispatch(setDashboardData({}));
        }
      })
      .catch((error) => {
        console.log(error, "ERROR:::");
      });
  }, [add]);

  

  function isCollapsed() {
    const side = document.getElementById("sidebar");
    if (window.innerWidth <= 992) {
      if (side.classList.contains("t")) {
        side.classList.replace("t", "y");
      } else if (side.classList.contains("y")) {
        side.classList.replace("y", "t");
      }
    }
  }

  // const handleOpenPDF = () => {
  //   window.open("/pdf/CoreCrowd.pdf", "_blank");
  // };

  useEffect(() => {
    if (address)
      getUSDT().then((res) => {
        // console.log(res);
        dispatch(
          setTokenData({
            address: res?.address,
            decimals: res?.decimals,
            symbol: res?.symbol,
          })
        );
      });
  }, [address]);

  return (
    <header className="app-header header-ll sticky" id="header" style={{background: "radial-gradient(circle, #d4f059, #6bba00)"}}>
      <div className="main-header-container container-fluid align-items-center">
        <div className="header-content-left  d-flex align-items-center ">
          <div
            className="header-element mx-lg-0 mx-2 head-tog text-dark"
            onClick={isCollapsed}
            id="ic"
          >
            <a
              aria-label="Hide Sidebar"
              className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle text-dark"
              data-bs-toggle="sidebar"
              href="#"
            >
              {/* <span></span> */}
              {/* <i class="fa-solid fa-bars" style={{color: "black"}}></i> */}
              <GiHamburgerMenu style={{color: '#ecf5c9'}} className="ham-btn"/>
            </a>
          </div>
          {/* <div className=" d-flex align-items-center">
            <span className="fw-bold head-welcome" style={{ fontSize: "22px" }}>
              Welcome Back...
              <span className="text-warning">
                {address ? `${address.slice(0, 4)}...${address.slice(-4)}` : ""}
              </span>
            </span>
          </div> */}
        </div>
        <ul className="header-content-right">
          {/* <ConnectWallet /> */}
          <h4 className="text-dark">Admin Panel MiraiDao</h4>
        </ul>
      </div>
    </header>
  );
}

export default Header;
