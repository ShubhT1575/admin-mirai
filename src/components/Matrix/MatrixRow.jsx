import React from "react";

function MatrixRow() {
  return (
    <div className="d-flex justify-content-center align-items-center mb-4">
      <div className="col-lg-10 matrix-table-main-div table-container">
        <table
          border="0"
          width="100%"
          align="center"
          style={{ borderCollapse: "collapse" }}
          className="mt-4"
        >
          <tbody className="matrix-table-tbody">
            {/* Row 1 */}
            <tr>
              <td valign="top" height="45" colSpan="8" align="center">
                <img
                  alt="User"
                  src="/Tether Ocean1.png"
                  style={{height: "50px"}}
                />
                <br />
                <p className="indicator">
                  BG00000000
                  <br />
                  User Name
                </p>
              </td>
            </tr>
            {/* Row 2 */}
            <tr>
              <td
                valign="top"
                align="center"
                width="400"
                height="45"
                colSpan="4"
              >
                <img
                  alt="User"
                  src="https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled-128x128.png"
                />
                <br />
                <p className="indicator">
                  BG00000000
                  <br />
                  User Name
                </p>
              </td>
              <td
                valign="top"
                align="center"
                width="200"
                height="45"
                colSpan="4"
              >
                <img
                  alt="User"
                  src="https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled-128x128.png"
                />
                <br />
                <p className="indicator">
                  BG00000000
                  <br />
                  User Name
                </p>
              </td>
            </tr>
            {/* Row 3 */}
            <tr>
              {[...Array(4)].map((_, index) => (
                <td
                  key={index}
                  valign="top"
                  align="center"
                  width="200"
                  height="40"
                  colSpan="2"
                >
                  <img
                    alt="User"
                    src="https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled-128x128.png"
                  />
                  <br />
                  <p className="indicator">
                    BG00000000
                    <br />
                    User Name
                  </p>
                </td>
              ))}
            </tr>
            {/* Row 4 */}
            <tr>
              {[...Array(8)].map((_, index) => (
                <td
                  key={index}
                  valign="top"
                  align="center"
                  width="100"
                  height="40"
                >
                  <img
                    alt="User"
                    src="https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled-128x128.png"
                  />
                  <br />
                  <p className="indicator">
                    BG00000000
                    <br />
                    User Name
                  </p>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MatrixRow;
