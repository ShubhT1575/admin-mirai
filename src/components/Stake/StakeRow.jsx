import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../Config";
import { useSelector } from "react-redux";

function StakeRow() {
  const { wallet } = useSelector((state) => state.bitgold);
  const { walletAddress } = wallet;
  const address = walletAddress;
  const [directUser, setDirectUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await axios.get(apiUrl + "/getTeamList", {
        params: {
          address: address,
        },
      });
      if (response?.status === 200) {
        // console.log(response,'=============================')
        setDirectUser(response?.data?.data);
      } else {
        setDirectUser([]);
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };
  console;
  useEffect(() => {
    if (address) getUser();
  }, [address]);


  console.log(directUser,';;;;;;;;;;;;;')
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card custom-card overflow-hidden">
          <div className="card-header justify-content-between">
            <div className="card-title">Team Data</div>
          </div>

          <div className="card-body active-tab">
            <div className="table-responsive">
              <table className="table table-bordered text-nowrap mb-0">
                <thead>
                  <tr>
                    <th scope="col">S.NO</th>
                    <th scope="col">User ID</th>
                    <th scope="col">User</th>
                    <th scope="col">Level</th>
                    {/* <th scope="col">User's Level</th> */}
                    <th scope="col">Time Stamp</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {directUser?.map((item, index) => {
                    return (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item.userId}</td>
                        <td>
                          <div className="d-flex">
                            <div className="flex-1 ms-2">
                              <p className="mb-0 fs-14"></p>
                              <a href="#">
                                {item.user?.slice(0, 6)}...
                                {item.user?.slice(-6)}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>{item.level}</td>
                        {/* <td>{item.nowLevel}</td> */}
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
            </div>
          </div>

          <div className="card-footer">
            <div className="d-flex align-items-center">
              <div>
                Showing {directUser?.length || 0} Team Data
                <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
              </div>
              {/* <div className="ms-auto">
                <nav
                  aria-label="Page navigation"
                  className="pagination-style-4"
                >
                  <ul className="pagination mb-0">
                    <li className="page-item disabled">
                      <a className="page-link" href="#">
                        Prev
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link text-primary" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StakeRow;
