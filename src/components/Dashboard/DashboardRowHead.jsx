import React, { useEffect, useRef, useState } from "react";
import "../../style/dashboard.css";
// import { FaLock } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { MdOutlineDoneOutline } from "react-icons/md";
import { buySlot, checkAllowance, getActiveSlotData, getUSDT } from "../web3";
import toast from "react-hot-toast";
import { getBalance } from "@wagmi/core";
import {
  buyPackage,
  // checkAllowance,
  getOwner,
  // getUSDT,
  tokenApprove,
  UserExist,
} from "../web3";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAccount, useChainId } from "wagmi";
import { setWalletDetails } from "../../Redux/Slice";
import { TokenAddres } from "../Config.js";
import { config } from "../../main.jsx";

const DashboardRowHead = () => {
  const slots = [
    { id: 1, price: 7, name: "Community Member" },
    { id: 2, price: 7, name: "Beginner" },
    { id: 3, price: 14, name: "Seeker" },
    { id: 4, price: 14, name: "Engager" },
    { id: 5, price: 28, name: "Motivator" },
    { id: 6, price: 28, name: "Explorer" },
    { id: 7, price: 56, name: "Soldier" },
    { id: 8, price: 56, name: "Promoter" },
    { id: 9, price: 112, name: "Advisor" },
    { id: 10, price: 112, name: "Director" },
    { id: 11, price: 224, name: "Achiever" },
    { id: 12, price: 224, name: "Creator" },
    { id: 13, price: 448, name: "Mentor" },
    { id: 14, price: 896, name: "Expert" },
    { id: 15, price: 1792, name: "Master" },
    { id: 16, price: 3584, name: "Community Legend" },
  ];

  const { tokenData } = useSelector((state) => state.bitgold);
  // console.log(tokenData, "tokenData:::");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const chainId = useChainId();
  const carouselRef = useRef(null);

  const { connector, isConnected, status, isDisconnected, address } =
    useAccount();

  useEffect(() => {
    dispatch(
      setWalletDetails({
        walletAddress: address,
        chainId,
        isConnected,
        isDisconnected,
        connector,
        status,
      })
    );
  }, [dispatch, chainId, address, isConnected, isDisconnected]);

  const [purchasedSlots, setPurchasedSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const appToken = async (amt, TokenAddress, tokenDecimals) => {
    try {
      const res = tokenApprove(amt, TokenAddress, tokenDecimals);
      await toast.promise(res, {
        loading: "Wait for Approvel.........",
        success: "Success!",
        error: "Approval Failed",
      });
      setIsLoading(false);
      return res;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      return false;
    }
  };

  const handleBuyNow = async (id, amt) => {
    setIsLoading(true)
    if (!purchasedSlots.includes(id)) {
      setPurchasedSlots((prev) => [...prev, id]);
    }

    const Tokaddress = await getUSDT();
    const Taddress = Tokaddress.address;
    // console.log(Taddress, "::::123");
    const tokenDecimals = Tokaddress.decimals;

    // console.log(Taddress, Tokaddress, "::::123");

    const balance = await getBalance(config, {
      address: address,
      token: Taddress,
    });

    const walletBalance = parseFloat(balance.formatted);
    // console.log(walletBalance, amt, "balllllllllllll");
    try {
      if (walletBalance < amt) {
        // console.log(walletBalance, amt);
        setIsLoading(false);
        toast.error("Insufficient Balance");
        return;
      }
      
      const allowance = await checkAllowance(address, Taddress);
      let appRes;
      if (amt > allowance / Number("1e" + tokenDecimals)) {
        appRes = await appToken(amt, Taddress, tokenDecimals);
      } else {
        appRes = true;
      }

      if (appRes) {
        const buy = buySlot(amt, id, tokenDecimals);
        await toast.promise(buy, {
          loading: "Buying...",
          success: "Success!",
          error: "Error",
        });
        checkActiveSlot();
        if (buy) {
          setIsLoading(false);
          setTimeout(() => {
            navigate("/Dashboard");
          }, 4000);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Couldn't process your request !!");
      setIsLoading(false);
    }
  };

  const [slotId, setSlotId] = useState([]);

  const checkActiveSlot = async () => {
    slots.map((slot) => {
      getActiveSlotData(address, slot.id).then((res) => {
        // console.log(res, "resssssss");

        if (res) {
          setSlotId((prev) => [...prev, slot.id]);
        }
      });
    });
    // console.log(slotId, "idddddddddddddd");
  };

  useEffect(() => {
    if (address) {
      checkAllowance(address, tokenData?.address)
        .then((res) => {})
        .catch((e) => {
          // console.log(e, ":::::::::");
        });

      checkActiveSlot();
    }
  }, [address]);


  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    if (carouselRef.current && slots.length > 0) {
      const firstBuyNowIndex = slots.findIndex(
        (slot) =>
          !slotId.includes(slot.id) && // Slot is not purchased
          (slot.id === 1 || slotId.includes(slot.id - 1)) // Purchasable condition
      );

      const scrollToIndex = firstBuyNowIndex === -1 ? 0 : firstBuyNowIndex; // Default to first slot if none found

      // Dynamically get scroll position instead of fixed 200px
      const targetElement = carouselRef.current.children[scrollToIndex];
      const scrollAmount = targetElement ? targetElement.offsetLeft : 0;

      setScrollPosition(scrollAmount); // Store for future re-renders

      setTimeout(() => {
        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }, 100); // Small delay for mobile responsiveness
    }
  }, [slots, slotId]);

  return (
    <>
      <div className="col-sm-12 col-lg-12">
        <div>
          <div className="card custom-card school-card">
            <div
              className="card-body d-flex gap-2 justify-content-between"
              style={{ height: "203px" }}
            >
              
              <div className="carousel-container">
                <div className="carousel" ref={carouselRef}>
                  {slots.map((slot) => {
                    const isPurchased = slotId.includes(slot.id); // Check if the slot is already purchased
                    const isNextPurchasable =
                      !slotId.includes(slot.id - 1) && !isPurchased; // Check if this is the next slot after a purchased slot

                    // Ensure the first slot is always purchasable
                    const isPurchasable =
                      !slotId.includes(slot.id) ||
                      !isPurchased ||
                      (isNextPurchasable && isLoading);

                    return (
                      <a
                        href="#"
                        key={slot.id}
                        className={isPurchasable? "product-card bg-crypto-balance": "product-card bg-success-gradient"} 
                      >
                        <div
                          className={isPurchasable?"carousel-card-value":"carousel-card-value carousel-card-value-sucess"}
                          style={{ height: "30px" }}
                        >
                          ${slot.price}
                        </div>
                        <h6>{slot.name}</h6>

                        <button
                          onClick={() => handleBuyNow(slot.id, slot.price)}
                          disabled={!isPurchasable || isNextPurchasable}
                          className={
                            isPurchasable
                              ? "buy-btn btn btn-primary w-50 text-light stakebtn"
                              : "buy-btn btn btn-primary w-50 text-dark btn-success-gradient rounded-pill"
                          }
                        >
                          {isPurchased ? (
                            <MdOutlineDoneOutline
                              style={{ height: "1.5rem", width: "1.5rem" }}
                            />
                            // "Purchased"
                            // <>Purchased</>
                          ) : isNextPurchasable ? (
                            <IoIosLock
                              style={{ height: "1.5rem", width: "1.5rem" }}
                            />
                          ) : isLoading ? (
                            "Buying..."
                          ) : "Buy now"}
                          {/* {isLoading? "Buying":<></>} */}
                        </button>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardRowHead;
