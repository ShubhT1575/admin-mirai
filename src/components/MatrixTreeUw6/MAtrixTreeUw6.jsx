import React from "react";
import "../../style/matrix.css";
import { Link } from "react-router-dom";

const MatrixTree = () => {
  const diamondSlot = [
    {
      id: 1,
      name: "Saphire",
      Direct: "Direct-1",
      // Team: "Team-10",
      Distribution: "30%",
    },
    {
      id: 2,
      name: "Ruby",
      Direct: "Direct-2 with Promoter rank",
      Team: "Team-20",
      Distribution: "40%",
    },
    {
      id: 3,
      name: "Topaz",
      Direct: "Direct-4 with Promoter rank",
      Team: "Team-50",
      Distribution: "50%",
    },
    {
      id: 4,
      name: "Diamond",
      Direct: "Direct-6 with Promoter rank",
      Team: "Team-150",
      Distribution: "60%",
    },
    {
      id: 5,
      name: "Green Diamond",
      Direct: "Direct-8 with Promoter rank",
      Team: "Team-400",
      Distribution: "70%",
    },
    {
      id: 6,
      name: "Blue Diamond",
      Direct: "Direct-10 with Protmoter rank",
      Team: "Team-1000",
      Distribution: "80%",
    },
    {
      id: 7,
      name: "Black Diamond",
      Direct: "Direct-12 with Promoter rank",
      Team: "Team-3000",
      Distribution: "90%",
    },
    {
      id: 8,
      name: "Crown Diamond",
      Direct: "Direct-15 with Promoter rank",
      Team: "Team-10000",
      Distribution: "100%",
    },
  ];

  return (
    <>
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
                  How Does Usdtocean Uwn6 Matrix Work
                </h1>
              </div>
            </div>
          </div>
          <div className="verticals twelve">
            <section className="management-tree card custom-card school-card">
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
                        paddingTop: "10px",
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

              {/*  <!-- From Uiverse.io by adamgiebl -->  */}
              <div className="card-parent-uw6">
                {diamondSlot?.map((item) => {
                  return (
                    <div className="card-uw6" id={item.id}>
                      <div className="card__content">
                        <div className="head-uw6">{item.name}</div>
                        <div className="main-uw6">{item.Direct}</div>
                        <p className="uw6-p">{item.Team}</p>
                        <div className="foot-uw6">{item.Distribution}</div>
                      </div>
                    </div>
                  );
                })}
                {/* <div className="card-uw6">
                  <div className="card__content">
                    <div className="head-uw6">Ruby</div>
                    <div className="main-uw6">Direct-2 with Promoter Rank</div>
                    <p className="uw6-p">Team-20</p>
                    <div className="foot-uw6">40 %</div>
                  </div>
                </div>
                <div className="card-uw6">
                  <div className="card__content">
                    <div className="head-uw6">Topaz</div>
                    <div className="main-uw6">Direct-4 with Promoter rank</div>
                    <p className="uw6-p">Team-50</p>

                    <div className="foot-uw6">50 %</div>
                  </div>
                </div>
                <div className="card-uw6">
                  <div className="card__content">
                    <div className="head-uw6">Diamond</div>
                    <div className="main-uw6">Direct-6 with Promoter rank</div>
                    <p className="uw6-p">Team-150</p>

                    <div className="foot-uw6">60 %</div>
                  </div>
                </div>
                <div className="card-uw6">
                  <div className="card__content">
                    <div className="head-uw6">Green Diamond</div>
                    <div className="main-uw6">Direct-8 with Promoter rank</div>
                    <p className="uw6-p">Team-400</p>

                    <div className="foot-uw6">70 %</div>
                  </div>
                </div>
                <div className="card-uw6">
                  <div className="card__content">
                    <div className="head-uw6">Blue Diamond</div>
                    <div className="main-uw6">Direct-10 with Promoter rank</div>
                    <p className="uw6-p">Team-1000</p>

                    <div className="foot-uw6">80 %</div>
                  </div>
                </div>
                <div className="card-uw6">
                  <div className="card__content">
                    <div className="head-uw6">Black Diamond</div>
                    <div className="main-uw6">Direct-12 with Promoter rank</div>
                    <p className="uw6-p">Team-3000</p>

                    <div className="foot-uw6">90 %</div>
                  </div>
                </div>
                <div className="card-uw6">
                  <div className="card__content">
                    <div className="head-uw6">Crown Diamond</div>
                    <div className="main-uw6">Direct-15 with Promoter rank</div>
                    <p className="uw6-p">Team-10000</p>

                    <div className="foot-uw6">100 %</div>
                  </div>
                </div> */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatrixTree;
