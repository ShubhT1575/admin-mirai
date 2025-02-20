import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAccount } from "wagmi";
import { apiUrl } from "../Config";
import { useSelector } from "react-redux";

function LevelIncomeBody() {

  const [directUser, setDirectUser] = useState([]);
  const { address } = useAccount();
  // console.log(address, 'saadnhufhuh')
  const itemsPerPage = 8; // Change this to modify items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [matrixIncome,setMatrixIncome] = useState([]);

  const totalPages = Math.ceil(matrixIncome.length / itemsPerPage);

  const paginatedLevels = matrixIncome.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };


  const getMatrixIncome = async () => {
    try {
      const response = await axios.get(apiUrl + "/matrixincome", {
        params: {
          userId: address,
          matrix: 1,
        },
      });
      if (response?.status === 200) {
      console.log(response.data.user_income, "repp")

        setMatrixIncome(response?.data?.user_income || [])
        console.log(matrixIncome,"Matrix")
        // setTotalPages(response?.data?.totalPages);
      } else {
        setDirectUser([]);
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };
  useEffect(() => {
    if (address) getMatrixIncome();
  }, [address]);

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card custom-card overflow-hidden">
          <div className="card-header justify-content-between">
            <div className="card-title">Matrix Income Data</div>
          </div>

          <div className="card-body active-tab">
            <div className="table-responsive">
              <table className="table table-bordered text-nowrap mb-0">
                <thead>
                  <tr>
                    <th scope="col">Referrer</th>
                    <th scope="col">Matrix</th>
                    {/* <th scope="col">Sender</th> */}
                    <th scope="col">Slot Id</th>
                    <th scope="col">Amount</th>
                    {/* <th scope="col">Level</th>
                    <th scope="col">Total Reward</th>
                    <th scope="col">Status</th> */}
                  </tr>
                </thead>
                <tbody>
                  {paginatedLevels?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-info">{`${item.user.slice(0, 7)}.......${item.user.slice(-5)}`}
                        </td>
                        <td className="text-warning">{item?.matrix}</td>
                        <td className="text-light">
                            {item.slotId}
                        </td>
                        <td className="text-danger">$ {item.amount/1e18}</td>
                        {/* <td>{item.level}</td> */}
                        {/* <td>{item.totalReward}</td> */}
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
              {matrixIncome?.length === 0 && (
                <div className=" w-100">
                  <div className="w-100 text-center p-3">No Data Found.</div>
                </div>
              )}
            </div>
          </div>

          <div className="card-footer pagination-body">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                Showing {matrixIncome?.length || 0} Matrix Income
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

export default LevelIncomeBody;
