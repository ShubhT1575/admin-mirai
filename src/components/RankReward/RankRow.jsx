import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../Config";
import { useAccount } from "wagmi";
import { useSelector } from "react-redux";
import { Button, Modal } from "antd";
import toast from "react-hot-toast";

function CoreBody() {
  const { wallet } = useSelector((state) => state.bitgold);
  const { walletAddress, isConnected } = wallet;
  const address = walletAddress;
  const [transaction, setTransaction] = useState([]);
  const [directUser, setDirectUser] = useState([]);
  const [currentPageTable1, setCurrentPageTable1] = useState(1);
  const [currentPageTable2, setCurrentPageTable2] = useState(1);
  const itemsPerPage = 10;
  // const totalPages = Math.ceil(transaction.length / itemsPerPage);
  const totalPagesTable1 = Math.ceil(transaction.length / itemsPerPage);
  const totalPagesTable2 = Math.ceil(
    transaction.filter((item) => item.packageId === 2).length / itemsPerPage
  );

  // const getCoreIncome = async () => {
  //   try {
  //     const response = await axios.get(apiUrl + "/getFundWalletList", {
  //       params: {
  //         address: address,
  //         page: currentPage,
  //       },
  //     });

  //      console.log(response, "]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]");
  //     if (response?.data?.status === 200) {
  //       setDirectUser(response?.data?.data);
  //     } else {
  //       setDirectUser([]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error.message);
  //   }
  // };
  // console;
  // useEffect(() => {
  //   if (address) getCoreIncome();
  // }, [address, currentPage]);

  const showTransaction = async () => {
    const res = await axios.get(apiUrl + "/getallusers");
    // console.log(res?.data, "xx");
    setTransaction(res?.data);
  };
  useEffect(() => {
    showTransaction();
  }, []);

  const handlePreviousPageTable1 = () => {
    if (currentPageTable1 > 1) setCurrentPageTable1(currentPageTable1 - 1);
  };

  const handleNextPageTable1 = () => {
    if (currentPageTable1 < totalPagesTable1)
      setCurrentPageTable1(currentPageTable1 + 1);
  };

  const handlePreviousPageTable2 = () => {
    if (currentPageTable2 > 1) setCurrentPageTable2(currentPageTable2 - 1);
  };

  const handleNextPageTable2 = () => {
    if (currentPageTable2 < totalPagesTable2)
      setCurrentPageTable2(currentPageTable2 + 1);
  };

  const paginatedTable1 = transaction
    // .filter(item => item.packageId === 1)
    .slice(
      (currentPageTable1 - 1) * itemsPerPage,
      currentPageTable1 * itemsPerPage
    );

  const paginatedTable2 = transaction
    .filter((item) => item.packageId === 2)
    .slice(
      (currentPageTable2 - 1) * itemsPerPage,
      currentPageTable2 * itemsPerPage
    );

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

  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState([]);

  const handleSearch = async () => {
    if (search !== "") {
      showLoading();
      const res = await axios.get(apiUrl + "/dashboard", {
        params: {
          user: search,
        },
      });
      if (res) {
        // console.log("gg")
        setUserData(res?.data);
      }
    } else {
      toast.error("Enter a valid user id");
      return;
    }
  };

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card custom-card overflow-hidden new-card">
          <div className="card-header justify-content-between color-dark">
            <div className="card-title">
              Users Report Data<strong></strong>
            </div>
            {/* {dashboardData?.userDetails?.referrerId && ( */}
            <div className="d-flex" style={{ marginTop: "10px" }}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text btn btn-warning-gradient btn-wave"
                    id="basic-addon3"
                    style={{ borderRadius: "0" }}
                  >
                    Search ID
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
            {/* //  )} */}
                  
          </div>

          <div className="card-body active-tab">
            <div className="table-responsive">
              <table className="table table-bordered text-nowrap mb-0">
                <thead>
                  <tr>
                    <th scope="col" style={{ color: "black" }}>
                      User
                    </th>
                    <th scope="col" style={{ color: "black" }}>
                      User Id
                    </th>
                    <th scope="col" style={{ color: "black" }}>
                      Referrer Id
                    </th>
                    <th scope="col" style={{ color: "black" }}>
                      Transaction Hash
                    </th>
                    {/* <th sscope="col" style={{color: "black"}}>Amount</th> */}
                    {/* <th scope="col">Level</th> */}
                    {/* <th scope="col" style={{color: "black"}}>Time Stamp</th> */}
                    <th scope="col" style={{ color: "black" }}>
                      Time Stamp
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTable1?.map((item, index) => {
                    return (
                      <tr key={item._id}>
                        {/* <td>{index + 1}</td> */}
                        {/* <td className="text-warning">
                          {item?.user.slice(0, 5)}...{item?.user.slice(-5)}
                        </td> */}
                        <td style={{ color: "rgb(0, 119, 181)" }}>
                          {/* <a
                            href={`https://opbnb-testnet.bscscan.com/tx/${item?.txHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "rgb(0, 119, 181)" }}
                          > */}
                          {item?.user.slice(0, 6)}...
                          {item?.user.slice(-6)}
                          {/* </a> */}
                        </td>
                        <td style={{ color: "green" }}>{item.userId}</td>
                        <td style={{ color: "green" }}>{item.referrerId}</td>
                        <td style={{ color: "blue" }}>
                          <a
                            href={`https://polygonscan.com/tx/${item?.txHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "rgb(0, 10, 151)" }}
                          >
                            {item?.txHash?.slice(0, 6)}.......
                            {item?.txHash?.slice(-6)}
                          </a>
                        </td>
                        <td style={{ color: "black" }}>
                          {new Date(item.createdAt).toLocaleString()}
                        </td>
                        {/* <td>
                          <span className="badge bg-success-transparent">
                            success
                          </span>
                        </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {transaction?.length === 0 && (
                <div className=" w-100">
                  <div className="w-100 text-center p-3 color-dark">
                    No Data Found.
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="card-footer pagination-body">
            <div className="d-flex align-items-center justify-content-between color-dark">
              <div>
                Showing {paginatedTable1?.length || 0} Users History
                <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
              </div>
              <div>
                <nav
                  aria-label="Page navigation"
                  className="pagination-style-4"
                >
                  <ul className="pagination mb-0">
                    <button
                      className="btn btn-primary page-item btn-pagination"
                      style={{ marginRight: "10px" }}
                      disabled={currentPageTable1 === 1}
                      onClick={handlePreviousPageTable1}
                    >
                      Prev
                    </button>

                    <button
                      className="btn btn-warning-gradient page-item btn-pagination"
                      disabled={currentPageTable1 === totalPagesTable1}
                      onClick={handleNextPageTable1}
                    >
                      Next
                    </button>
                  </ul>
                </nav>
              </div>
              <div>
                <span>
                  Page {currentPageTable1} of {totalPagesTable1}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title={<p>User Info</p>}
        footer={
          <Button type="primary" onClick={showLoading}>
            Reload
          </Button>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        {userData ? (
          <>
            <p>
              <strong>User:</strong> {userData?.user}
            </p>
            <p>
              <strong>Referrer:</strong> {userData?.referrerId}
            </p>
            <p>
              <strong>User ID:</strong> {userData?.userId}
            </p>
            <p>
              <strong>Transaction Hash:</strong>{" "}
              <a
                href={`https://polygonscan.com/tx/${userData?.txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgb(0, 119, 181)" }}
              >
                {userData?.txHash?.slice(0, 10)}.......
                {userData?.txHash?.slice(-10)}
              </a>
            </p>
            {/* <p><strong>Block:</strong> {userData?.block}</p> */}
            <p>
              <strong>Timestamp:</strong>{" "}
              {new Date(userData?.timestamp * 1000).toLocaleString()}
            </p>
            {/* <p><strong>Team Business:</strong> {userData.teamBusinessnew}</p> */}
          </>
        ) : (
          <p>No data found</p>
        )}
      </Modal>
    </div>
  );
}

export default CoreBody;
