import React, { useEffect, useState } from "react";
import "../../style/Ranking.css";
import { globalSelectPoolList } from "../../API/Api";
import { globalPoolData } from "../../API/Api";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RankingRow() {
  const [selectList, setSelectList] = useState([]);
  const [selectVal, setSelectVal] = useState(1);
  const [poolList, setPoolList] = useState({
    upline: [],
    currentUser: {},
    downline: [],
  });
  const { wallet } = useSelector((state) => state.bitgold);
  const { walletAddress, isConnected } = wallet;
  const address = walletAddress;

  useEffect(() => {
    globalSelectPoolList()
      .then((res) => {
        if (res?.data?.status === 200) {
          setSelectList(res?.data?.data);
        } else {
          setSelectList([]);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    globalPoolData(address, selectVal).then((res) => {
      if (res?.data?.status === 200) {
        const Upline = res?.data?.data?.upline;
        const CurrentUser = res?.data?.data?.currentUser;
        const Downline = res?.data?.data?.downline;
        setPoolList({
          upline: Upline,
          currentUser: CurrentUser,
          downline: Downline,
        });
      } else {
        setPoolList({ upline: [], currentUser: {}, downline: [] });
      }
    });
  }, [address, selectVal]);
  return (
    <div>
      <div className="row tracking-main">
        <div className="col-md-12 col-lg-12 ">
          <div id="tracking-pre"></div>
          <div id="tracking">
            <div
              className="text-center tracking-status-intransit d-flex justify-content-between px-4 "
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <div>
                <p className="tracking-status text-tight">
                  G{selectVal * 10} Ranking
                </p>
              </div>
              <div>
                <select
                  className="form-select bg-dark text-light border-primary"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setSelectVal(e.target.value);
                  }}
                >
                  {selectList?.map((item, index) => {
                    return <option value={item}>G{item * 10}</option>;
                  })}
                </select>
              </div>
            </div>
            <div
              className="tracking-list mb-5"
              style={{
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              {poolList?.upline?.map((item, index) => {
                return (
                  <div className="tracking-item">
                    <div
                      className="tracking-icon status-intransit"
                      style={{
                        backgroundColor: "rgb(0, 119, 181",
                        border: "none",
                      }}
                    >
                      <img
                        alt="User"
                        src="https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled-128x128.png"
                        style={{ width: "30px" }}
                      />
                    </div>
                    <div className="tracking-date">
                      {item.level}
                      <span>Level</span>
                    </div>
                    <div className="tracking-content">
                      <Link
                        style={{ color: "rgb(0, 119, 181)" }}
                        to={`/Dashboard?accessAddress=${item.user}`}
                      >
                        {item.user}
                      </Link>
                      <span>Upline User {index + 1}</span>
                    </div>
                  </div>
                );
              })}
              <div className="tracking-item">
                <div
                  className="tracking-icon status-outfordelivery d-flex justify-content-center align-items-center"
                  style={{
                    height: "60px",
                    width: "60px",
                    left: "-1.8rem",
                    top: "1.5rem",
                  }}
                >
                  <img
                    alt="User"
                    src="https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled-128x128.png"
                    style={{ width: "40px" }}
                  />
                </div>
                <div className="tracking-date">
                  {poolList?.currentUser?.level}
                  <span>Level</span>
                </div>
                <div className="tracking-content" style={{ color: "#f5a551" }}>
                  {poolList?.currentUser?.user}
                  <span className="text-light">User</span>
                </div>
              </div>
              {poolList?.downline?.map((item, index) => {
                return (
                  <div className="tracking-item">
                    <div
                      className="tracking-icon status-intransit"
                      style={{
                        backgroundColor: "rgb(0, 119, 181",
                        border: "none",
                      }}
                    >
                      <img
                        alt="User"
                        src="https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled-128x128.png"
                        style={{ width: "30px" }}
                      />
                    </div>
                    <div className="tracking-date">
                      {item.level}
                      <span>Level</span>
                    </div>
                    <div className="tracking-content ">
                      <Link
                        style={{ color: "rgb(0, 119, 181)" }}
                        to={`/Dashboard?accessAddress=${item.user}`}
                      >
                        {item.user}
                      </Link>
                      <span>Downline User {index + 1}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RankingRow;
