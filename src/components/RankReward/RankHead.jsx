import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../Config";
import { useAccount } from "wagmi";

function RankHead() {
  const { address } = useAccount();
  // const [allData,setAllData] = useState();
  // const getAllData = async ()=>{
  //   const res = await axios.get(apiUrl + "/totaldata");

  //   setAllData(res?.data);
  //   console.log(res?.data, "alldata");

  // }

  // useEffect(()=>{
  //   getAllData();
  // },[address])

  return (
    <div
      className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2 page-head-breadcrumb"
      style={{ marginTop: "90px" }}
    >
      <div>
        <nav>
          <ol className="breadcrumb mb-1"></ol>
        </nav>
        <h1 className="page-title fw-bold fs-18 mb-0 text-dark">
          Users Report
        </h1>
      </div>
    </div>
  );
}

export default RankHead;
