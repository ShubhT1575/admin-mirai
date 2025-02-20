import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../Config";
import { useSelector } from "react-redux";

function CoreBody() {
  const { wallet } = useSelector((state) => state.bitgold);
  const { walletAddress, isConnected } = wallet;
  const address = walletAddress;
  const [GlobalIncome, setGlobalIncome] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const getGlobalIncome = async () => {
    try {
      const response = await axios.get(apiUrl + "/getStakingRewardList", {
        params: {
          address: address,
          page: currentPage,
        },
      });
      if (response?.data?.status === 200) {
        setGlobalIncome(response?.data?.data);
      } else {
        setGlobalIncome([]);
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };
  console;
  useEffect(() => {
    if (address) getGlobalIncome();
  }, [address, currentPage]);
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card custom-card overflow-hidden">
          <div className="card-header justify-content-between">
            <div className="card-title">Daily Stake Reward Data</div>
          </div>

          <div className="card-body active-tab">
            <div className="table-responsive">
              <table className="table table-bordered text-nowrap mb-0">
                <thead>
                  <tr>
                    <th scope="col">S.NO</th>
                    <th scope="col">User</th>
                    {/* <th scope="col">Sender</th> */}
                    <th scope="col">Transaction Hash</th>
                    <th scope="col">Reward</th>
                    {/* <th scope="col">Level</th> */}
                    <th scope="col">Time Stamp</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {GlobalIncome?.map((item, index) => {
                    return (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td className="text-warning">{item?.user.slice(0,6)}...{item?.user.slice(-6)}</td>
                        <td>
                          <a
                            href={`https://opbnb-testnet.bscscan.com/tx/${item.txHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "rgb(0, 119, 181)" }}
                          >
                            {item.txHash?.slice(0, 6)}...
                            {item.txHash?.slice(-6)}
                          </a>
                        </td>
                        <td>$ {item.reward}</td>
                        {/* <td>{item.level}</td> */}
                        <td>{new Date(item.timestamp).toLocaleString()}</td>
                        <td>
                          <span className="badge bg-success-transparent">
                            success
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {GlobalIncome?.length === 0 && (
                    <div className=" w-100">
                      <div className="w-100 text-center p-3">
                          No Data Found.
                      </div>
                    </div>
                  )
              }
            </div>
          </div>

          <div className="card-footer pagination-body">
            <div className="d-flex align-items-center justify-content-between">
              <div>Showing {GlobalIncome?.length || 0} Daily Stake Reward</div>
              <div>
                <nav
                  aria-label="Page navigation"
                  className="pagination-style-4"
                >
                  <ul className="pagination mb-0">
                    <button
                      className="btn btn-primary page-item btn-pagination"
                      style={{ marginRight: "10px" }}
                      disabled={currentPage === 1}
                      onClick={handlePreviousPage}
                    >
                      Prev
                    </button>

                    <button
                      className="btn btn-success page-item btn-pagination"
                      disabled={currentPage === totalPages}
                      onClick={handleNextPage}
                    >
                      Next
                    </button>
                  </ul>
                </nav>
              </div>
              <div>
                <span>
                  Page {currentPage} of {totalPages}
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
