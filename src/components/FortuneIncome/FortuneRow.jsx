import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../Config";
import { useAccount } from "wagmi";
import { useSelector } from "react-redux";

function CoreBody() {
  const { wallet } = useSelector((state) => state.bitgold);
  const { walletAddress, isConnected } = wallet;
  const address = walletAddress;
  const [transaction, setTransaction] = useState([]);
  const [directUser, setDirectUser] = useState([]);
  const [currentPageTable1, setCurrentPageTable1] = useState(1);
  const [currentPageTable2, setCurrentPageTable2] = useState(1);
  const itemsPerPage = 5;
  // const totalPages = Math.ceil(transaction.length / itemsPerPage);
  const totalPagesTable1 = Math.ceil(transaction.filter(item => item.packageId === 1).length / itemsPerPage);
const totalPagesTable2 = Math.ceil(transaction.filter(item => item.packageId === 2).length / itemsPerPage);

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
    const res = await axios.get(apiUrl + "/recentTransaction", {
      params: {
        user: address,
      },
    });
    // console.log(res?.data, "xx");
    setTransaction(res?.data);
  };
  useEffect(() => {
    if (address) showTransaction();
  }, [address]);

  const handlePreviousPageTable1 = () => {
    if (currentPageTable1 > 1) setCurrentPageTable1(currentPageTable1 - 1);
  };
  
  const handleNextPageTable1 = () => {
    if (currentPageTable1 < totalPagesTable1) setCurrentPageTable1(currentPageTable1 + 1);
  };
  
  const handlePreviousPageTable2 = () => {
    if (currentPageTable2 > 1) setCurrentPageTable2(currentPageTable2 - 1);
  };
  
  const handleNextPageTable2 = () => {
    if (currentPageTable2 < totalPagesTable2) setCurrentPageTable2(currentPageTable2 + 1);
  };
  
  const paginatedTable1 = transaction
  .filter(item => item.packageId === 1)
  .slice((currentPageTable1 - 1) * itemsPerPage, currentPageTable1 * itemsPerPage)

const paginatedTable2 = transaction
  .filter(item => item.packageId === 2)
  .slice((currentPageTable2 - 1) * itemsPerPage, currentPageTable2 * itemsPerPage);

  return (
    <div className="row">
      <div className="col-xl-6">
        <div className="card custom-card overflow-hidden new-card">
          <div className="card-header justify-content-between color-dark">
            <div className="card-title">Package History<strong>$5</strong></div>
          </div>

          <div className="card-body active-tab">
            <div className="table-responsive">
              <table className="table table-bordered text-nowrap mb-0">
                <thead>
                  <tr>
                    <th scope="col" style={{color: "black"}}>Tx Hash</th>
                    <th scope="col" style={{color: "black"}}>Package</th>
                    {/* <th scope="col">Sender</th> */}
                    {/* <th scope="col" style={{color: "black"}}>Transaction Hash</th> */}
                    {/* <th sscope="col" style={{color: "black"}}>Amount</th> */}
                    {/* <th scope="col">Level</th> */}
                    {/* <th scope="col" style={{color: "black"}}>Time Stamp</th> */}
                    <th scope="col" style={{color: "black"}}>Time Stamp</th>
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
                        <td>
                          <a
                            href={`https://opbnb-testnet.bscscan.com/tx/${item?.txHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "rgb(0, 119, 181)" }}
                          >
                            {item?.txHash.slice(0, 6)}...
                            {item?.txHash.slice(-6)}
                          </a>
                        </td>
                        <td style={{ color: "green" }}>$ {item.amount}</td>
                        {/* <td>{item.level}</td> */}
                        <td style={{ color: "black" }}>{new Date(item.createdAt).toLocaleString()}</td>
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
              {paginatedTable1?.length === 0 && (
                <div className=" w-100">
                  <div className="w-100 text-center p-3 color-dark">No Data Found.</div>
                </div>
              )}
            </div>
          </div>

          <div className="card-footer pagination-body">
            <div className="d-flex align-items-center justify-content-between color-dark">
              <div>
                Showing {paginatedTable1?.length || 0} Package History
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
      <div className="col-xl-6">
        <div className="card custom-card overflow-hidden new-card">
          <div className="card-header justify-content-between color-dark">
            <div className="card-title">Package History<strong>$25</strong></div>
          </div>

          <div className="card-body active-tab">
            <div className="table-responsive">
              <table className="table table-bordered text-nowrap mb-0">
                <thead>
                  <tr>
                    <th scope="col" style={{color: "black"}}>Tx Hash</th>
                    <th scope="col" style={{color: "black"}}>Package</th>
                    {/* <th scope="col">Sender</th> */}
                    {/* <th scope="col" style={{color: "black"}}>Transaction Hash</th> */}
                    {/* <th sscope="col" style={{color: "black"}}>Amount</th> */}
                    {/* <th scope="col">Level</th> */}
                    {/* <th scope="col" style={{color: "black"}}>Time Stamp</th> */}
                    <th scope="col" style={{color: "black"}}>Time Stamp</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTable2?.map((item, index) => {
                    return (
                      <tr key={item._id}>
                        {/* <td>{index + 1}</td> */}
                        {/* <td className="text-warning">
                          {item?.user.slice(0, 5)}...{item?.user.slice(-5)}
                        </td> */}
                        <td>
                          <a
                            href={`https://opbnb-testnet.bscscan.com/tx/${item?.txHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "rgb(0, 119, 181)" }}
                          >
                            {item?.txHash.slice(0, 6)}...
                            {item?.txHash.slice(-6)}
                          </a>
                        </td>
                        <td style={{ color: "green" }}>$ {item.amount}</td>
                        {/* <td>{item.level}</td> */}
                        <td style={{ color: "black" }}>{new Date(item.createdAt).toLocaleString()}</td>
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
              {paginatedTable2?.length === 0 && (
                <div className=" w-100">
                  <div className="w-100 text-center p-3 color-dark">No Data Found.</div>
                </div>
              )}
            </div>
          </div>

          <div className="card-footer pagination-body">
            <div className="d-flex align-items-center justify-content-between color-dark">
              <div>
                Showing {paginatedTable2?.length || 0} Package History
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
                      disabled={currentPageTable2 === 1}
                      onClick={handlePreviousPageTable2}
                    >
                      Prev
                    </button>

                    <button
                      className="btn btn-warning-gradient page-item btn-pagination"
                      disabled={currentPageTable2 === totalPagesTable2}
                      onClick={handleNextPageTable2}
                    >
                      Next
                    </button>
                  </ul>
                </nav>
              </div>
              <div>
                <span>
                  Page {currentPageTable2} of {totalPagesTable2}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreBody;
