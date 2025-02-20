import React, { useEffect, useState } from "react";
import { LapseWallet, CurrentLapseAdd } from "../../web3";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import lapsebg from "../../../assets/img/pattern-2.svg";

function lapseBody() {
  const { wallet } = useSelector((state) => state.bitgold);
  const { walletAddress, isConnected } = wallet;
  const address = walletAddress;
  const [lapseInput, setLapseInput] = useState("");
  const [CurrentLapAdd, setCurrentLapAdd] = useState("");

  const handleChange = (event) => {
    setLapseInput(event.target.value);
  };

  const lapseWallletAdd = async () => {
    try {
      if (lapseInput == "" || !lapseInput.startsWith("0x")) {
        toast.error("Plese Valid Address!");
        return;
      }
      const data = await LapseWallet(lapseInput);
    } catch (error) {
      if (error.message.includes('Address "0x" is invalid.')) {
        toast.error('Address "0x" is invalid.');
      } else if (error.message.includes("User rejected the request.")) {
        toast.error("User rejected the request.");
      } else {
        toast.error("Something Went Wrong!");
      }
    }
  };

  const LapseAddress = async () => {
    try {
      const res = await CurrentLapseAdd();
      setCurrentLapAdd(res);
    } catch (error) {
      toast.error("Address is not Found");
    }
  };

  useEffect(() => {
    LapseAddress();
  }, []);
  return (
    <div className="d-flex justify-content-center">
      <div className="col-lg-6">
        <div className="card custom-card col-lg-5 border border-danger d-flex justify-content-center">
          <div className="card-header">
            <div className="card-title">Lapse Wallet Details</div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="card-body col-lg-10">
              <div className="d-flex gy-4 justify-content-center flex-column w-100 ">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text btn btn-secondary-gradient btn-wave"
                      id="basic-addon3"
                      style={{
                        borderRadius: "0",
                        height: "36px",
                        fontSize: "14px",
                      }}
                    >
                      Current Lapse Address
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="input-text"
                    readOnly
                    value={CurrentLapAdd}
                    style={{
                      borderRadius: "0",
                      height: "36px",
                      fontSize: "14px",
                    }}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-lg-8 ">
                    <div className="form-floating mb-4 floating-primary">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInputprimary"
                        placeholder="Enter the wallet address you want to update"
                        onChange={handleChange}
                      />
                      <label for="floatingInputprimary">
                        Enter the wallet address you want to Change
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-100  d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-primary btn-wave waves-effect waves-light "
                    onClick={lapseWallletAdd}
                  >
                    Change Lapse Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default lapseBody;
