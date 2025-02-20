// import ToggleSidebar from "./ToggleSidebar";
import React, { useEffect, useState } from "react";
// import { buyNewLevel } from "../helpers/web3";
import { useDispatch, useSelector } from "react-redux";
import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { Loader } from "./Loader";
// import { setLevelStatus } from "../helpers/redux/dataSlice";
import "../../style/matrix.css";

const WorkingTree = () => {
  const [loading, setLoading] = useState(true);
  const [buynewLoading, setBuyNewLoading] = useState(false);
  //   const { walletAddress, workingTreeArray } = useSelector(
  //     (state) => state.user.value
  //   );
  const [dataarr, setdataArray] = useState([]);
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     if (workingTreeArray?.length > 0) {
  //       const countActiveLevel = workingTreeArray?.filter((data) => {
  //         return data.active === true;
  //       });
  //       dispatch(setLevelStatus({ levelStatus: countActiveLevel?.length }));
  //       setdataArray(workingTreeArray);
  //       setLoading(true);
  //     }
  //   }, [workingTreeArray]);

  //   function getActiveInvest(usersarr, numberOfReinvest, i) {
  //     if (usersarr?.length > 0) {
  //       const isfill =
  //         numberOfReinvest !== 0
  //           ? usersarr.length / numberOfReinvest === 6
  //             ? true
  //             : false
  //           : false;
  //       //  const toindex = numberOfReinvest !== 0?(usersarr.length/numberOfReinvest)-numberOfReinvest:0
  //       const fromindex = Math.floor(usersarr.length / 6) * 6;
  //       const uarr = numberOfReinvest !== 0 ? usersarr.slice(fromindex) : [];
  //       //  console.log(usersarr.length,uarr.length,numberOfReinvest,fromindex,'dsfdfg',uarr)
  //       return !isfill
  //         ? numberOfReinvest === 0
  //           ? usersarr.length
  //           : uarr.length
  //         : [];
  //     } else {
  //       return [];
  //     }
  //   }

  return (
    <div className="main-content app-content">
      <div className="container-fluid">
        <div style={{ marginTop: "90px" }} className="dash-head-div">
          <div className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2 mt-3">
            <div>
              <nav>
                <ol className="breadcrumb mb-1">
                  <li className="breadcrumb-item">
                    <a href="#"> Page </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Matrix
                  </li>
                </ol>
              </nav>
              <h1 className="page-title fw-medium fs-18 mb-0 text-light">
                How Does Usdtocean Matrix Work
              </h1>
            </div>
          </div>
        </div>
        <section className="main-dash-container">
          {/* <ToggleSidebar /> */}

          <div
            className="container"
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
          >
            <h2
              className="text-center text-warning pb-3 dash-heading"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              {/* Volcano S6 Structure */}
              <div className="btn-group align-self-end mb-3">
                <button
                  type=""
                  className="btn btn-primary-gradient btn-packages "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  See Packages
                </button>
                <ul className="dropdown-menu drop-ul">
                  <div className="overflow-div">
                    <li
                      className="w-100"
                      style={{
                        paddingBottom: "20px",
                        // paddingTop: "10px",
                        height: "14%",
                      }}
                    >
                      <Link to="/dashboard" className="side-menu__item">
                        <span className="side-menu__label">
                          Community Member
                        </span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/dashboard" className="side-menu__item">
                        <span className="side-menu__label">Biginner</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/dashboard" className="side-menu__item">
                        <span className="side-menu__label">Seeker</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/dashboard" className="side-menu__item">
                        <span className="side-menu__label">Engager</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/dashboard" className="side-menu__item">
                        <span className="side-menu__label">Motivator</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/dashboard" className="side-menu__item">
                        <span className="side-menu__label">Explorer</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/dashboard" className="side-menu__item">
                        <span className="side-menu__label">Soldier</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/dashboard" className="side-menu__item">
                        <span className="side-menu__label">Promoter</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/dashboard" className="side-menu__item">
                        <span className="side-menu__label">Advisor</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/dashboard" className="side-menu__item">
                        <span className="side-menu__label">Director</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/dashboard" className="side-menu__item">
                        <span className="side-menu__label">Achiever</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/dashboard" className="side-menu__item">
                        <span className="side-menu__label">Creator</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/dashboard" className="side-menu__item">
                        <span className="side-menu__label">Mentor</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/dashboard" className="side-menu__item">
                        <span className="side-menu__label">Expert</span>
                      </Link>
                    </li>

                    <li
                      className="w-100"
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/dashboard" className="side-menu__item">
                        <span className="side-menu__label">Master</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      style={{
                        paddingBottom: "35px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/dashboard" className="side-menu__item">
                        <span className="side-menu__label">
                          Community Legend
                        </span>
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </h2>

            <div id="ContentPlaceHolder1_UpdatePanel1">
              <div className="row d-flex">
                <div id="ContentPlaceHolder1_DAI11Tree" className="col-md-3">
                  <div className="mytreebox card custom-card school-card">
                    <div className="mytreebox-header">
                      <div className="mytreebox-lbl">Slot 1</div>
                      <div className="mytreebox-sloat">Uw</div>
                      <div className="mytreebox-dai">
                        {" "}
                        25 <span className="dai"></span>
                      </div>
                    </div>

                    <div className="mytreebox-body">
                      <div className="mytree">
                        <div className="mytree-l1">
                          <div
                            id="ContentPlaceHolder1_da102"
                            className="mytree-item "
                          >
                            <div className="mytree-icon">&nbsp;</div>
                          </div>
                        </div>
                        <div className="mytree-l2">
                          {/* {console.log(data?.users,"users:::")} */}
                          <div
                            id="ContentPlaceHolder1_l110"
                            className="mytree-item"
                          >
                            <div
                              className="mytree-icon "
                              data-toggle="tooltip"
                              title="1"
                            >
                              &nbsp;
                            </div>
                            <div className="mytree-l3">
                              <div
                                id="ContentPlaceHolder1_l112"
                                className="mytree-item"
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                              <div
                                id="ContentPlaceHolder1_l113"
                                className={`mytree-item `}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="ContentPlaceHolder1_l111"
                            className={`mytree-item`}
                          >
                            <div className="mytree-icon">&nbsp;</div>
                            <div className="mytree-l3">
                              <div
                                id="ContentPlaceHolder1_l114"progress-ba
                                className={`mytree-item`}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                              <div
                                id="ContentPlaceHolder1_l115"
                                className={`mytree-item`}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mytreebox-footer">
                      <div className="mytreebox-footer-content">
                        <div id="user8" className="mytreebox-users">
                          <i className="treeusers-icon"></i>
                          <span id="ContentPlaceHolder1_LblU8">44</span>
                        </div>
                        <div id="user8" className="mytreebox-trans">
                          <i className="treetrans-icon"></i>
                          <span id="ContentPlaceHolder1_LblU8">l,l</span>
                        </div>
                      </div>
                      <div className="treegrowth">
                        <div className="growth-per">
                          <span id="ContentPlaceHolder1_Lblpg8">0%</span>
                        </div>

                        <div className="progress">
                          <div
                            id="ContentPlaceHolder1_pg8"
                            className="progress-bar bg-success"
                            style={{
                              width: "50",
                            }}
                            progress-bar
                            bg-success="0.0"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="ContentPlaceHolder1_DAI11Tree" className="col-md-3">
                  <div className="mytreebox card custom-card school-card">
                    <div className="mytreebox-header">
                      <div className="mytreebox-lbl">Slot 2</div>
                      <div className="mytreebox-sloat">Uw1</div>
                      <div className="mytreebox-dai">
                        {" "}
                        25 <span className="dai"></span>
                      </div>
                    </div>

                    <div className="mytreebox-body">
                      <div className="mytree">
                        <div className="mytree-l1">
                          <div
                            id="ContentPlaceHolder1_da102"
                            className="mytree-item "
                          >
                            <div className="mytree-icon">&nbsp;</div>
                          </div>
                        </div>
                        <div className="mytree-l2">
                          {/* {console.log(data?.users,"users:::")} */}
                          <div
                            id="ContentPlaceHolder1_l110"
                            className="mytree-item"
                          >
                            <div
                              className="mytree-icon "
                              data-toggle="tooltip"
                              title="1"
                            >
                              &nbsp;
                            </div>
                            <div className="mytree-l3">
                              <div
                                id="ContentPlaceHolder1_l112"
                                className="mytree-item"
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                              <div
                                id="ContentPlaceHolder1_l113"
                                className={`mytree-item `}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="ContentPlaceHolder1_l111"
                            className={`mytree-item`}
                          >
                            <div className="mytree-icon">&nbsp;</div>
                            <div className="mytree-l3">
                              <div
                                id="ContentPlaceHolder1_l114"
                                className={`mytree-item`}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                              <div
                                id="ContentPlaceHolder1_l115"
                                className={`mytree-item`}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mytreebox-footer">
                      <div className="mytreebox-footer-content">
                        <div id="user8" className="mytreebox-users">
                          <i className="treeusers-icon"></i>
                          <span id="ContentPlaceHolder1_LblU8">44</span>
                        </div>
                        <div id="user8" className="mytreebox-trans">
                          <i className="treetrans-icon"></i>
                          <span id="ContentPlaceHolder1_LblU8">l,l</span>
                        </div>
                      </div>
                      <div className="treegrowth">
                        <div className="growth-per">
                          <span id="ContentPlaceHolder1_Lblpg8">0%</span>
                        </div>

                        <div className="progress">
                          <div
                            id="ContentPlaceHolder1_pg8"
                            className="progress-bar bg-success"
                            style={{
                              width: "50",
                            }}
                            progress-bar
                            bg-success="0.0"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="ContentPlaceHolder1_DAI11Tree" className="col-md-3">
                  <div className="mytreebox card custom-card school-card">
                    <div className="mytreebox-header">
                      <div className="mytreebox-lbl">Slot 3</div>
                      <div className="mytreebox-sloat">Uw2</div>
                      <div className="mytreebox-dai">
                        {" "}
                        25 <span className="dai"></span>
                      </div>
                    </div>

                    <div className="mytreebox-body">
                      <div className="mytree">
                        <div className="mytree-l1">
                          <div
                            id="ContentPlaceHolder1_da102"
                            className="mytree-item "
                          >
                            <div className="mytree-icon">&nbsp;</div>
                          </div>
                        </div>
                        <div className="mytree-l2">
                          {/* {console.log(data?.users,"users:::")} */}
                          <div
                            id="ContentPlaceHolder1_l110"
                            className="mytree-item"
                          >
                            <div
                              className="mytree-icon "
                              data-toggle="tooltip"
                              title="1"
                            >
                              &nbsp;
                            </div>
                            <div className="mytree-l3">
                              <div
                                id="ContentPlaceHolder1_l112"
                                className="mytree-item"
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                              <div
                                id="ContentPlaceHolder1_l113"
                                className={`mytree-item `}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="ContentPlaceHolder1_l111"
                            className={`mytree-item`}
                          >
                            <div className="mytree-icon">&nbsp;</div>
                            <div className="mytree-l3">
                              <div
                                id="ContentPlaceHolder1_l114"
                                className={`mytree-item`}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                              <div
                                id="ContentPlaceHolder1_l115"
                                className={`mytree-item`}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mytreebox-footer">
                      <div className="mytreebox-footer-content">
                        <div id="user8" className="mytreebox-users">
                          <i className="treeusers-icon"></i>
                          <span id="ContentPlaceHolder1_LblU8">44</span>
                        </div>
                        <div id="user8" className="mytreebox-trans">
                          <i className="treetrans-icon"></i>
                          <span id="ContentPlaceHolder1_LblU8">l,l</span>
                        </div>
                      </div>
                      <div className="treegrowth">
                        <div className="growth-per">
                          <span id="ContentPlaceHolder1_Lblpg8">0%</span>
                        </div>

                        <div className="progress">
                          <div
                            id="ContentPlaceHolder1_pg8"
                            className="progress-bar bg-success"
                            style={{
                              width: "50",
                            }}
                            progress-bar
                            bg-success="0.0"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="ContentPlaceHolder1_DAI11Tree" className="col-md-3">
                  <div className="mytreebox card custom-card school-card">
                    <div className="mytreebox-header">
                      <div className="mytreebox-lbl">Slot 4</div>
                      <div className="mytreebox-sloat">Uw3</div>
                      <div className="mytreebox-dai">
                        {" "}
                        25 <span className="dai"></span>
                      </div>
                    </div>

                    <div className="mytreebox-body">
                      <div className="mytree">
                        <div className="mytree-l1">
                          <div
                            id="ContentPlaceHolder1_da102"
                            className="mytree-item "
                          >
                            <div className="mytree-icon">&nbsp;</div>
                          </div>
                        </div>
                        <div className="mytree-l2">
                          {/* {console.log(data?.users,"users:::")} */}
                          <div
                            id="ContentPlaceHolder1_l110"
                            className="mytree-item"
                          >
                            <div
                              className="mytree-icon "
                              data-toggle="tooltip"
                              title="1"
                            >
                              &nbsp;
                            </div>
                            <div className="mytree-l3">
                              <div
                                id="ContentPlaceHolder1_l112"
                                className="mytree-item"
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                              <div
                                id="ContentPlaceHolder1_l113"
                                className={`mytree-item `}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="ContentPlaceHolder1_l111"
                            className={`mytree-item`}
                          >
                            <div className="mytree-icon">&nbsp;</div>
                            <div className="mytree-l3">
                              <div
                                id="ContentPlaceHolder1_l114"
                                className={`mytree-item`}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                              <div
                                id="ContentPlaceHolder1_l115"
                                className={`mytree-item`}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mytreebox-footer">
                      <div className="mytreebox-footer-content">
                        <div id="user8" className="mytreebox-users">
                          <i className="treeusers-icon"></i>
                          <span id="ContentPlaceHolder1_LblU8">44</span>
                        </div>
                        <div id="user8" className="mytreebox-trans">
                          <i className="treetrans-icon"></i>
                          <span id="ContentPlaceHolder1_LblU8">l,l</span>
                        </div>
                      </div>
                      <div className="treegrowth">
                        <div className="growth-per">
                          <span id="ContentPlaceHolder1_Lblpg8">0%</span>
                        </div>

                        <div className="progress">
                          <div
                            id="ContentPlaceHolder1_pg8"
                            className="progress-bar bg-success"
                            style={{
                              width: "50",
                            }}
                            progress-bar
                            bg-success="0.0"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="ContentPlaceHolder1_DAI11Tree" className="col-md-3">
                  <div className="mytreebox card custom-card school-card">
                    <div className="mytreebox-header">
                      <div className="mytreebox-lbl">Slot 5</div>
                      <div className="mytreebox-sloat">Uw4</div>
                      <div className="mytreebox-dai">
                        {" "}
                        25 <span className="dai"></span>
                      </div>
                    </div>

                    <div className="mytreebox-body">
                      <div className="mytree">
                        <div className="mytree-l1">
                          <div
                            id="ContentPlaceHolder1_da102"
                            className="mytree-item "
                          >
                            <div className="mytree-icon">&nbsp;</div>
                          </div>
                        </div>
                        <div className="mytree-l2">
                          {/* {console.log(data?.users,"users:::")} */}
                          <div
                            id="ContentPlaceHolder1_l110"
                            className="mytree-item"
                          >
                            <div
                              className="mytree-icon "
                              data-toggle="tooltip"
                              title="1"
                            >
                              &nbsp;
                            </div>
                            <div className="mytree-l3">
                              <div
                                id="ContentPlaceHolder1_l112"
                                className="mytree-item"
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                              <div
                                id="ContentPlaceHolder1_l113"
                                className={`mytree-item `}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="ContentPlaceHolder1_l111"
                            className={`mytree-item`}
                          >
                            <div className="mytree-icon">&nbsp;</div>
                            <div className="mytree-l3">
                              <div
                                id="ContentPlaceHolder1_l114"
                                className={`mytree-item`}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                              <div
                                id="ContentPlaceHolder1_l115"
                                className={`mytree-item`}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mytreebox-footer">
                      <div className="mytreebox-footer-content">
                        <div id="user8" className="mytreebox-users">
                          <i className="treeusers-icon"></i>
                          <span id="ContentPlaceHolder1_LblU8">44</span>
                        </div>
                        <div id="user8" className="mytreebox-trans">
                          <i className="treetrans-icon"></i>
                          <span id="ContentPlaceHolder1_LblU8">l,l</span>
                        </div>
                      </div>
                      <div className="treegrowth">
                        <div className="growth-per">
                          <span id="ContentPlaceHolder1_Lblpg8">0%</span>
                        </div>

                        <div className="progress">
                          <div
                            id="ContentPlaceHolder1_pg8"
                            className="progress-bar bg-success"
                            style={{
                              width: "50",
                            }}
                            progress-bar
                            bg-success="0.0"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="ContentPlaceHolder1_DAI11Tree" className="col-md-3">
                  <div className="mytreebox card custom-card school-card">
                    <div className="mytreebox-header">
                      <div className="mytreebox-lbl">Slot 6</div>
                      <div className="mytreebox-sloat">Uw5</div>
                      <div className="mytreebox-dai">
                        {" "}
                        25 <span className="dai"></span>
                      </div>
                    </div>

                    <div className="mytreebox-body">
                      <div className="mytree">
                        <div className="mytree-l1">
                          <div
                            id="ContentPlaceHolder1_da102"
                            className="mytree-item "
                          >
                            <div className="mytree-icon">&nbsp;</div>
                          </div>
                        </div>
                        <div className="mytree-l2">
                          {/* {console.log(data?.users,"users:::")} */}
                          <div
                            id="ContentPlaceHolder1_l110"
                            className="mytree-item"
                          >
                            <div
                              className="mytree-icon "
                              data-toggle="tooltip"
                              title="1"
                            >
                              &nbsp;
                            </div>
                            <div className="mytree-l3">
                              <div
                                id="ContentPlaceHolder1_l112"
                                className="mytree-item"
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                              <div
                                id="ContentPlaceHolder1_l113"
                                className={`mytree-item `}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="ContentPlaceHolder1_l111"
                            className={`mytree-item`}
                          >
                            <div className="mytree-icon">&nbsp;</div>
                            <div className="mytree-l3">
                              <div
                                id="ContentPlaceHolder1_l114"
                                className={`mytree-item`}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                              <div
                                id="ContentPlaceHolder1_l115"
                                className={`mytree-item`}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mytreebox-footer">
                      <div className="mytreebox-footer-content">
                        <div id="user8" className="mytreebox-users">
                          <i className="treeusers-icon"></i>
                          <span id="ContentPlaceHolder1_LblU8">44</span>
                        </div>
                        <div id="user8" className="mytreebox-trans">
                          <i className="treetrans-icon"></i>
                          <span id="ContentPlaceHolder1_LblU8">l,l</span>
                        </div>
                      </div>
                      <div className="treegrowth">
                        <div className="growth-per">
                          <span id="ContentPlaceHolder1_Lblpg8">0%</span>
                        </div>

                        <div className="progress">
                          <div
                            id="ContentPlaceHolder1_pg8"
                            className="progress-bar bg-success"
                            style={{
                              width: "50",
                            }}
                            progress-bar
                            bg-success="0.0"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="ContentPlaceHolder1_DAI11Tree" className="col-md-3">
                  <div className="mytreebox card custom-card school-card">
                    <div className="mytreebox-header">
                      <div className="mytreebox-lbl">Slot 7</div>
                      <div className="mytreebox-sloat">Uw6</div>
                      <div className="mytreebox-dai">
                        {" "}
                        25 <span className="dai"></span>
                      </div>
                    </div>

                    <div className="mytreebox-body">
                      <div className="mytree">
                        <div className="mytree-l1">
                          <div
                            id="ContentPlaceHolder1_da102"
                            className="mytree-item "
                          >
                            <div className="mytree-icon">&nbsp;</div>
                          </div>
                        </div>
                        <div className="mytree-l2">
                          {/* {console.log(data?.users,"users:::")} */}
                          <div
                            id="ContentPlaceHolder1_l110"
                            className="mytree-item"
                          >
                            <div
                              className="mytree-icon "
                              data-toggle="tooltip"
                              title="1"
                            >
                              &nbsp;
                            </div>
                            <div className="mytree-l3">
                              <div
                                id="ContentPlaceHolder1_l112"
                                className="mytree-item"
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                              <div
                                id="ContentPlaceHolder1_l113"
                                className={`mytree-item `}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="ContentPlaceHolder1_l111"
                            className={`mytree-item`}
                          >
                            <div className="mytree-icon">&nbsp;</div>
                            <div className="mytree-l3">
                              <div
                                id="ContentPlaceHolder1_l114"
                                className={`mytree-item`}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                              <div
                                id="ContentPlaceHolder1_l115"
                                className={`mytree-item`}
                              >
                                <div className="mytree-icon">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mytreebox-footer">
                      <div className="mytreebox-footer-content">
                        <div id="user8" className="mytreebox-users">
                          <i className="treeusers-icon"></i>
                          <span id="ContentPlaceHolder1_LblU8">44</span>
                        </div>
                        <div id="user8" className="mytreebox-trans">
                          <i className="treetrans-icon"></i>
                          <span id="ContentPlaceHolder1_LblU8">l,l</span>
                        </div>
                      </div>
                      <div className="treegrowth">
                        <div className="growth-per">
                          <span id="ContentPlaceHolder1_Lblpg8">0%</span>
                        </div>

                        <div className="progress">
                          <div
                            id="ContentPlaceHolder1_pg8"
                            className="progress-bar bg-success"
                            style={{
                              width: "50",
                            }}
                            progress-bar
                            bg-success="0.0"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="ContentPlaceHolder1_DAI11Tree" className="col-md-3">
                  <div className="mytreebox card custom-card school-card">
                    <div className="mytreebox-header">
                      <div className="mytreebox-lbl">Slot 7</div>
                      <div className="mytreebox-sloat">S 6</div>
                      <div className="mytreebox-dai">
                        {" "}
                        25 <span className="dai"></span>
                      </div>
                    </div>

                    <div className="mytreebox-body body-section">
                      <div className="text-center pt-5 pb-5">
                        {" "}
                        <h6 className="text-warning">Activate </h6>
                        <BsCartPlusFill
                          color="green"
                          size={45}
                          className="mb-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/*                         
                            <div
                              className="mytreebox-body body-section"
                              
                            >
                              <div className="text-center pt-5 pb-5">
                                {" "}
                                <h6 className="text-warning">Activate </h6>
                                <BsCartPlusFill
                                  color="green"
                                  size={45}
                                  className="mb-4"
                                />
                              </div>
                            </div>
                      */}
                {/* <>
                            <div className="mytreebox-body">
                              <div className="mytree">
                                <div className="mytree-l1">
                                  <div
                                    id="ContentPlaceHolder1_da102"
                                    className="mytree-item deactiv"
                                  >
                                    <div className="mytree-icon">&nbsp;</div>
                                  </div>
                                </div>
                                <div className="mytree-l2">
                                  <div
                                    id="ContentPlaceHolder1_l110"
                                    className="mytree-item deactiv"
                                  >
                                    <div className="mytree-icon">&nbsp;</div>
                                    <div className="mytree-l3">
                                      <div
                                        id="ContentPlaceHolder1_l112"
                                        className="mytree-item deactiv"
                                      >
                                        <div className="mytree-icon">
                                          &nbsp;
                                        </div>
                                      </div>
                                      <div
                                        id="ContentPlaceHolder1_l113"
                                        className="mytree-item deactiv"
                                      >
                                        <div className="mytree-icon">
                                          &nbsp;
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="ContentPlaceHolder1_l111"
                                    className="mytree-item deactiv"
                                  >
                                    <div className="mytree-icon">&nbsp;</div>
                                    <div className="mytree-l3">
                                      <div
                                        id="ContentPlaceHolder1_l114"
                                        className="mytree-item deactiv"
                                      >
                                        <div className="mytree-icon">
                                          &nbsp;
                                        </div>
                                      </div>
                                      <div
                                        id="ContentPlaceHolder1_l115"
                                        className="mytree-item deactiv"
                                      >
                                        <div className="mytree-icon">
                                          &nbsp;
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mytreebox-footer">
                              <div className="mytreebox-footer-content">
                                <div id="user8" className="mytreebox-users">
                                  <i className="treeusers-icon"></i>
                                  <span id="ContentPlaceHolder1_LblU8">0</span>
                                </div>
                                <div id="user8" className="mytreebox-trans">
                                  <i className="treetrans-icon"></i>
                                  <span id="ContentPlaceHolder1_LblU8">0</span>
                                </div>
                              </div>
                              <div className="treegrowth">
                                <div className="growth-per">
                                  <span id="ContentPlaceHolder1_Lblpg8">0</span>
                                </div>
                                <div className="progress">
                                  <div
                                    id="ContentPlaceHolder1_pg8"
                                    className="progress-bar bg-success"
                                    style={{ width: "0%" }}
                                    progress-bar
                                    bg-success="0.0"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorkingTree;
