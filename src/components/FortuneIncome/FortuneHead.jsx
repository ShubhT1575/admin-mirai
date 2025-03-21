import React, { useEffect, useState } from "react";
import { getAddressbyRefrralId } from "../../API/Api";
import { Button, Modal, Table } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { apiUrl } from "../Config";

function FortuneHead() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const [userData, setUserData] = useState([]);
  const handleSearch = async () => {
    if (search !== "") {
      const searchAdd = await getAddressbyRefrralId(search);
      const searchAddress = searchAdd?.data;
      console.log(searchAddress, "searchAddress");
      showLoading();
      const res = await axios.get(apiUrl + "/getPackageDetail", {
        params: {
          user: searchAddress ?? search,
        },
      });
      if (res?.data !== null) {
        // console.log("gg")
        setUserData(res?.data?.data);
        console.log("data", res?.data?.data);
      } else {
        toast.error("Enter a valid user id");
        setOpen(false);
        return;
      }
    } else {
      toast.error("Enter a valid user id");
      return;
    }
  };

  const columns = [
    {
      title: "Package ID",
      dataIndex: "packageId",
      key: "packageId",
    },
    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (value) => `$${value}`,
    },
    {
      title: "Transaction Hash",
      dataIndex: "txHash",
      key: "txHash",
      render: (hash) => (
        <a
          href={`https://polygonscan.com/tx/${hash}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgb(0, 17, 255)" }}
        >
          {hash.slice(0, 10)}...{hash.slice(-10)}
        </a>
      ),
    },
    // {
    //   title: "Block",
    //   dataIndex: "block",
    //   key: "block",
    // },
    {
      title: "Timestamp",
      dataIndex: "timestamp",
      key: "timestamp",
      render: (time) => new Date(time * 1000).toLocaleString(),
    },
  ];


  const fetchPrice = async () => {
    try {
      const res = await axios.get("/api/get-coin-price?symbol=BTC");
      console.log("POL Price in USD: ", res.data.price);
    } catch (err) {
      console.error("Error:", err);
    }
  };
  

useEffect(()=>{
  fetchPrice();
  // console.log(price, "price")
},[])

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
          Package Buy Report
        </h1>
      </div>
      <div className="d-flex" style={{ marginTop: "10px" }}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text btn btn-warning-gradient btn-wave"
              id="basic-addon3"
              style={{ borderRadius: "0" }}
            >
              Search
            </span>
          </div>
          <input
            type="text"
            className="form-control seach-input"
            id="input-text"
            aria-describedby="basic-addon3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              borderRadius: "0",
              height: "36px",
              fontSize: "14px",
              overflow: "auto",
            }}
          />
        </div>

        <button
          className="btn btn-icon btn-warning-gradient btn-wave mx-2"
          // onClick={copyAddress}
          onClick={handleSearch}
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <Modal
        title={<p style={{ color: "#ceb450" }}>Individual User Data</p>}
        footer={
          <Button
            type="primary"
            className="btn btn-warning-gradient text-dark"
            onClick={() => setOpen(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </Button>
        }
        open={open}
        onCancel={() => setOpen(false)}
        width={800} // You can adjust modal width
        bodyStyle={{ padding: "1rem", background: "#1e1e1e" }} // optional custom styles
      >
        {userData && userData.length > 0 ? (
          <Table
            columns={columns}
            dataSource={userData}
            rowKey="_id"
            pagination={false}
            scroll={{ x: "max-content" }} // THIS enables horizontal scroll
            style={{ background: "#1e1e1e" }} // Optional dark background
          />
        ) : (
          <p style={{ color: "#fff" }}>No data found</p>
        )}
      </Modal>

      {/* ); */}
    </div>
  );
}

export default FortuneHead;
