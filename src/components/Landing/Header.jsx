import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { TiHome } from "react-icons/ti";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { authcontext } from "../authprovider";
// import { config } from "../main";
// import { useAccount } from "wagmi";

function Header() {
  // const { isConnected } = useAccount(config);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { isLoggedIn } = useContext(authcontext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header style={{ position: "fixed" , background: "radial-gradient(ellipse at 20% 100%,  #6bba00,#d4f059)"}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 logo d-flex align-items-center justify-content-between px-4">
              <Link to="/">
                <img
                  className="nav-logo ps-3"
                  src="/final logo.png"
                  alt="company Logo"
                />
              </Link>
              <span className="fs-1 text-light menu-icon" onClick={toggleMenu}>
                <IoMdMenu />
              </span>
            </div>
            <div className="col-sm-6 col-md-8 main-menu">
              <nav className="navul ">
                <ul>
                  <li>
                    <Link to="/"  style={{color: "#000"}}>Home</Link>
                  </li>
                  <li className="">
                    <Link className="" to="/SignIn"  style={{color: "#000"}}>
                      Sign In
                    </Link>
                  </li>
                  <li className="btn nav-btn text-dark">
                    <Link to="/SignUp" className="py-2.5 px-3 text-dark" style={{borderRadius: "10px", border: "2px solid black"}} >
                      SIGN UP TO JOIN
                    </Link>
                  </li>
                  {/* <li
                    className={`wallet-btn ${
                      isLoggedIn || isConnected ? "d-none" : ""
                    } `}
                  >
                    {!isConnected && !isLoggedIn && <ConnectButton />}
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`offcanvas offcanvas-end  ${isMenuOpen ? "show" : ""} w-50`}
        // style={{ background: "#000" }}
        tabIndex="-1"
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
      >
        <div className="offcanvas-header d-flex align-items-center justify-content-between">
          <Link to="/">
            <img
              src="/images/LPC Logo.png"
              height="50px"
              width="auto"
              alt=""
              onClick={toggleMenu}
            />
          </Link>
          <span className="text-light fs-3" onClick={toggleMenu}>
            <ImCancelCircle />
          </span>
        </div>
        <div className="offcanvas-body" style={{background: "radial-gradient(ellipse at 20% 100%,  #6bba00,#d4f059)" , border: "none", paddingTop: "30px"}}>
          <nav>
            <ul className={` ms-3 ${isMenuOpen ? "d-block" : "none"}`} >
              <li className="w-50">
                <Link to="/" onClick={toggleMenu}>
                  <span className="fs-4">
                    <TiHome />
                  </span>
                  <span className="ms-3">Home</span>
                </Link>
              </li>
              <li className=" w-50">
                <Link to="/SignUp" onClick={toggleMenu}>
                  <span className="fs-4">
                    <FaUserPlus />
                  </span>
                  <span className="ms-3">Sign up</span>
                </Link>
              </li>
              <li className=" w-50">
                <Link to="/SignIn" onClick={toggleMenu}>
                  <span className="fs-4">
                    <FaSignInAlt />
                  </span>
                  <span className="ms-3">Sign In</span>
                </Link>
              </li>
              {/* <li
                onClick={toggleMenu}
                className={`wallet-btn ${
                  isLoggedIn || isConnected ? "d-none" : ""
                } `}
              >
                {!isConnected && !isLoggedIn && <ConnectButton />}
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;