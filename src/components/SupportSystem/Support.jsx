import React, { useEffect, useState } from "react";
import "../../style/Support.css";
import chatImg from "../../assets/img/chat.png";
// import socket from "../Soket/Soket";
import { useSelector } from "react-redux";
import { formatTime, getAmPm, getTicketList, raiseTicket } from "../../API/Api";
import "./Support.css";
import { FiSend } from "react-icons/fi";
import { toast } from "react-hot-toast";
import chat1 from "../../assets/img/chat1.jpg";
import chat2 from "../../assets/img/chat2.jpg";

function Support() {
  const { wallet } = useSelector((state) => state.bitgold);
  const { walletAddress, isConnected } = wallet;
  const [name, setName] = useState("");

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [queryfile, setQueryFile] = useState("");
  const [list, setlist] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [replymessage, setReplyMessage] = useState("");
  const [replyfile, setReplyFile] = useState("");
  const [loading, setLoading] = useState(false);

  function sendRequest(msg, file, subject_msg) {
    setLoading(true);
    raiseTicket(
      walletAddress,
      name,
      subject_msg ? subject_msg : subject,
      msg,
      file
    )
      .then((resp) => {
        const res = resp?.data;
        // console.log(res, "res");
        setLoading(false);
        if (res?.status == 200) {
          // getList();
          socket.emit("message", walletAddress?.toLowerCase());
          setQueryFile("");
          setReplyFile("");
          setMessage("");
          setReplyMessage("");
          toast.success(res?.message);
        } else {
          toast.error(res?.message);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e, "Error in sendREquest()");
      });
  }

  function getList() {
    try {
      setRefreshing(true);
      getTicketList(walletAddress, 1)
        .then((res) => {
          console.log(res, "RES::::");
          setRefreshing(false);
          if (res?.status == 200) {
            setlist(res?.data?.data);
          }
        })
        .catch((e) => {
          setRefreshing(false);
          console.log(e, "Error in getList raisedTicketList()/support page");
        });
    } catch (e) {
      setRefreshing(false);
      console.log(e, "Error in getList");
    }
  }

  useEffect(() => {
    if (walletAddress) getList();
  }, [walletAddress]);

  useEffect(() => {
    console.log("is socket connected", socket.connected);
    if (socket.connected) {
      socket.on("update-chat", (msg) => {
        console.log("chat update", msg);
        if (msg === walletAddress?.toLowerCase()) {
          getList();
        }
      });
    }
    return () => {
      socket.off();
    };
  }, [socket.connected, walletAddress]);
  return (
    <>
      {/* <div className="main-content app-content" id="m-content">
      <div className="container-fluid">
        <div
          className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2 page-head-breadcrumb"
          style={{ marginTop: "90px" }}
        >
          <div>
            <nav>
              <ol className="breadcrumb mb-1">
                <li className="breadcrumb-item">
                  <a href="#">Page</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Support
                </li>
              </ol>
            </nav>
            <h1 className="page-title fw-medium fs-18 mb-0 text-light">
              Support
            </h1>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary btn-help"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              + New Ticket
            </button>

            <div
              className="modal fade "
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <span>
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        New Ticket
                      </h1>
                    </span>
                    <span>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </span>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="message-text"
                          className="col-form-label"
                        >
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="message-text"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button className="btn-send">
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <span>Send</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item ">
                <h2 className="accordion-header">
                  <div
                    className="accordion-button d-flex justify-content-around d-flex align-items-center justify-content-between"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    <div className="col-lg-1">
                      <img src={chatImg} alt="" style={{ width: "20px" }} />
                    </div>
                    <div className="col-lg-2 d-flex flex-column">
                      <span className="chat-modal-head">ID Ticket</span>
                      <span className="chat-modal-text"> %67576567567</span>
                    </div>
                    <div className="d-flex flex-column col-lg-2">
                      <span className="chat-modal-head">Subject of Appeal</span>
                      <span className="chat-modal-text"> %67576567567</span>
                    </div>
                    <div className="d-flex flex-column col-lg-2 ">
                      <span className="chat-modal-head">Last Update</span>
                      <span className="chat-modal-text"> %67576567567</span>
                    </div>
                    <div className="d-flex flex-column col-lg-2 ">
                      <span className="chat-modal-head">
                        Status of the Request
                      </span>
                      <span className="chat-modal-text"> %67576567567</span>
                    </div>
                  </div>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body">
                    <div className="accordion-head-inner">
                      <h6 className="">Your Chat</h6>
                    </div>
                    <div>
                      <div className="d-flex justify-content-start">
                        <div className="accordion-head-body col-lg-6">
                          <div className="card custom-card mb-2 overflow-hidden border border-primary">
                            <div className="card-body">
                              <p>
                                <i className="ri-double-quotes-l fs-1 lh-1 me-3"></i>
                                The network administrator has ensured our
                                systems run smoothly and securely,Always quick
                                to resolve any issues and keep our network
                                optimized."
                              </p>
                              <div className="d-flex justify-content-end text-end flex-wrap gap-3">
                                <div className="d-flex">
                                  <div className="me-2 my-auto mb-0">
                                    <div className="mb-0 lh-1 fs-12 fw-semibold">
                                      Georgia Kate
                                    </div>
                                    <p className="fs-12 mb-0 op-7">
                                      Systems Analyst
                                    </p>
                                  </div>
                                  <img
                                    src="https://laravelui.spruko.com/xintra/build/assets/images/faces/5.jpg"
                                    alt="img"
                                    className="avatar avatar-md avatar-rounded border border-3 border-primary2"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <div className="accordion-head-body col-lg-6">
                          <div className="card custom-card mb-2 overflow-hidden border border-primary">
                            <div className="card-body">
                              <p>
                                <i className="ri-double-quotes-l fs-1 lh-1 me-3"></i>
                                The network administrator has ensured our
                                systems run smoothly and securely,Always quick
                                to resolve any issues and keep our network
                                optimized."
                              </p>
                              <div className="d-flex justify-content-end text-end flex-wrap gap-3">
                                <div className="d-flex">
                                  <div className="me-2 my-auto mb-0">
                                    <div className="mb-0 lh-1 fs-12 fw-semibold">
                                      Georgia Kate
                                      {/* <span className="fs-11 fw-normal ms-2">
                                        <i className="ri-star-fill text-warning fs-9 mb-1 align-middle"></i>
                                        4.5
                                      </span> *
                                    </div>
                                    <p className="fs-12 mb-0 op-7">
                                      Systems Analyst
                                    </p>
                                  </div>
                                  <img
                                    src="https://laravelui.spruko.com/xintra/build/assets/images/faces/5.jpg"
                                    alt="img"
                                    className="avatar avatar-md avatar-rounded border border-3 border-primary2"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      <div className="main-content app-content" id="m-content">
        <div className="container-fluid">
          <div
            className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2 page-head-breadcrumb"
            style={{ marginTop: "90px" }}
          >
            <div>
              <nav>
                <ol className="breadcrumb mb-1">
                  <li className="breadcrumb-item">
                    <a href="#">Page</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Support
                  </li>
                </ol>
              </nav>
              <h1 className="page-title fw-medium fs-18 mb-0 text-light">
                Support
              </h1>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary btn-help"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                + New Ticket
              </button>

              <div
                className="modal fade "
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <span>
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          New Ticket
                        </h1>
                      </span>
                      <span>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </span>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="subject" className="col-form-label">
                            Your Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            aria-describedby="name"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => {
                              let nname = e.target.value;
                              if (e?.target?.value?.length > 30) {
                                nname = nname.slice(0, 30);
                              }
                              setName(nname);
                            }}
                          />
                          <div
                            className={`${
                              name?.length < 30
                                ? "text-secondary"
                                : "text-danger"
                            }`}
                          >
                            {30 - name?.length}/30
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="subject" className="col-form-label">
                            Subject
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            aria-describedby="subject"
                            placeholder="Enter subject"
                            value={subject}
                            onChange={(e) => {
                              let msg = e.target.value;
                              if (e?.target?.value?.length > 30) {
                                msg = msg.slice(0, 30);
                              }
                              setSubject(msg);
                            }}
                          />
                          <div
                            className={`${
                              subject?.length < 30
                                ? "text-secondary"
                                : "text-danger"
                            }`}
                          >
                            {30 - subject?.length}/30
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="message-text"
                            className="col-form-label"
                          >
                            Message
                          </label>
                          <textarea
                            className="form-control"
                            id="message-text"
                            rows={5}
                            placeholder="Enter your message"
                            value={message}
                            onChange={(e) => {
                              let msg = e.target.value;
                              if (e?.target?.value?.length > 500) {
                                msg = msg.slice(0, 500);
                              }
                              setMessage(msg);
                            }}
                          ></textarea>
                          <div
                            className={`${
                              message?.length < 500
                                ? "text-secondary"
                                : "text-danger"
                            }`}
                          >
                            {500 - message?.length}/500
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        className="btn-send"
                        onClick={() => sendRequest(message, queryfile)}
                      >
                        <div className="svg-wrapper-1">
                          <div className="svg-wrapper">
                            <svg
                              height="24"
                              width="24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 0h24v24H0z" fill="none"></path>
                              <path
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <span>Send</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <main className="pt-3 support_main">
            <div className="container-fluid">
              {/* <div className="mb-3 d-flex justify-content-between">
                <h1 className="heading">Support</h1>
              </div> */}
              {/* accordian start */}
              {list?.length > 0
                ? list?.map((item, i) => {
                    return (
                      <div className="" key={i + "support-query-list"}>
                        <div
                          className="accordion accordion-flush"
                          id={"accordionFlushExample" + i}
                          // style={{ backgroundColor: "#fff" }}
                          onClick={() => setReplyMessage("")}
                        >
                          <div className="accordion-item mb-2 rounded">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={"#flush-collapseOne" + i}
                                aria-expanded="false"
                                aria-controls={"flush-collapseOne" + i}
                              >
                                <div className="card-body p-0 overflow-x-auto">
                                  <div className="d-flex gap-4">
                                    <div className="">
                                      <div className="d-flex align-items-center gap-3">
                                        <img
                                          src="/public/img/message.svg"
                                          alt="user"
                                          style={{
                                            height: "45px",
                                            width: "45px",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="col mob-font d-flex align-items-start flex-column">
                                      <div className="d-flex align-items-start card-title flex-column">
                                        <div className=" fst-normal fs-10 mb-1 text-nowrap ">
                                          ID Ticket
                                        </div>
                                        <div className="text-nowrap">
                                          #{item?.ticketId}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col mob-font d-flex align-items-start flex-column">
                                      <div
                                        className=" fst-normal mb-1 text-nowrap"
                                        style={{
                                          fontSize: "13px",
                                          color: "#909090",
                                        }}
                                      >
                                        Subject of the appeal
                                      </div>
                                      <div className="text-nowrap">
                                        {item?.query_subject}
                                      </div>
                                    </div>

                                    <div className="col mob-font d-flex align-items-start flex-column">
                                      <div
                                        className="mb-1  fst-normal text-nowrap"
                                        style={{
                                          fontSize: "13px",
                                          color: "#909090",
                                        }}
                                      >
                                        Last Update
                                      </div>
                                      <div className="text-nowrap">
                                        {new Date(
                                          item?.querytime * 1000
                                        ).toLocaleString()}
                                      </div>
                                    </div>
                                    <div className="col mob-font d-flex align-items-start flex-column">
                                      <div
                                        className=" fst-normal mb-1 text-nowrap"
                                        style={{
                                          fontSize: "13px",
                                          color: "#909090",
                                        }}
                                      >
                                        Status of the request
                                      </div>
                                      <div className="text-nowrap">
                                        <span
                                          className={`fs-6 fw-normal text-capitalize ${
                                            item?.status === "success"
                                              ? "text-success"
                                              : "text-warning"
                                          }`}
                                        >
                                          {item?.status}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              id={"flush-collapseOne" + i}
                              className="accordion-collapse collapse"
                              data-bs-parent={"#accordionFlushExample" + i}
                            >
                              <div className="accordion-body">
                                {/* {item?.query_meggage} */}

                                {/* Customer Chats */}
                                <div
                                  style={{
                                    minHeight: "auto",
                                    maxHeight: "500px",
                                    overflow: "scroll",
                                    overflowX: "hidden",
                                  }}
                                  className="px-3 chat_custom-scrollbar"
                                >
                                  <div className="">
                                    <div className="col-lg-12 col-sm-12 mb-2">
                                      <div>
                                        {/* <h6>Your Chats</h6> */}
                                        <div className="">
                                          {item?.messages?.map((it, i) => {
                                            if (it.type == "user1") {
                                              return (
                                                <div className="col-lg-6 col-sm-12 mb-2 ">
                                                  <div className="border-0 shadow-none ">
                                                    <div className=" chat-div">
                                                      <div className="d-flex gap-2">
                                                        <div className="">
                                                          <img
                                                            src={chat2}
                                                            alt="user"
                                                            style={{
                                                              height: "40px",
                                                              width: "40px",
                                                              borderRadius:
                                                                "50%",
                                                              objectFit:
                                                                "cover",
                                                            }}
                                                          />
                                                        </div>
                                                        <div
                                                          className="card mb-2 shadow-none border border-opacity-25 border-warning bg-warning-transparent"
                                                          style={{
                                                            borderRadius:
                                                              "10px",
                                                          }}
                                                        >
                                                          <div className="card-body py-3">
                                                            <h6 className="mb-0">
                                                              {item?.userName}
                                                            </h6>
                                                            <div>
                                                              <div className="text_gray">
                                                                {it.message}
                                                              </div>
                                                              {it?.file ? (
                                                                <img
                                                                  src={(
                                                                    "/" +
                                                                    it?.file
                                                                  ).replace(
                                                                    "/uploads",
                                                                    "/support"
                                                                  )}
                                                                  className="chat-image"
                                                                  alt="Query Image"
                                                                />
                                                              ) : null}
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>

                                                      {/* Custome Time Stamp */}
                                                      <div className="ms-5  mb-3">
                                                        <span className="text-gray fs-12">
                                                          {new Date(
                                                            it.createdAt
                                                          ).toLocaleDateString() +
                                                            " / " +
                                                            formatTime(
                                                              new Date(
                                                                it.createdAt
                                                              ).getHours()
                                                            ) +
                                                            ":" +
                                                            formatTime(
                                                              new Date(
                                                                it.createdAt
                                                              ).getSeconds()
                                                            ) +
                                                            " " +
                                                            getAmPm(
                                                              new Date(
                                                                it.createdAt
                                                              ).getTime()
                                                            )}
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              );
                                            } else {
                                              return (
                                                <div className="row justify-content-end mb-2">
                                                  <div className="col-lg-6 col-sm-12 mb-2 admin-main">
                                                    <div className="d-flex gap-2  justify-content-end">
                                                      <div className="">
                                                        <img
                                                          alt="user"
                                                          src={
                                                            item?.replier_picture
                                                              ? `data:image/jpeg;base64,${item?.replier_picture}`
                                                              : chat1
                                                          }
                                                          style={{
                                                            height: "40px",
                                                            width: "40px",
                                                            borderRadius: "50%",
                                                            objectFit: "cover",
                                                          }}
                                                        />
                                                      </div>
                                                      <div className="card mb-2 shadow-none border border-opacity-25 border-secondary bg-secondary-transparent">
                                                        <div className="card-body py-3">
                                                          <h6 className="mb-0">
                                                            {item?.replierName
                                                              ? item?.replierName
                                                              : "Boface"}
                                                          </h6>
                                                          <div className="text_gray">
                                                            {it.message}
                                                          </div>
                                                          <div>
                                                            {it?.file ? (
                                                              <img
                                                                src={
                                                                  // url2 +
                                                                  (
                                                                    "/" +
                                                                    item?.file
                                                                  ).replace(
                                                                    "/uploads",
                                                                    "/support"
                                                                  )
                                                                }
                                                                style={{
                                                                  height:
                                                                    "105px",
                                                                  width:
                                                                    "105px",
                                                                  // borderRadius: "50%",
                                                                  objectFit:
                                                                    "cover",
                                                                }}
                                                                alt="Query Image"
                                                              />
                                                            ) : null}
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>

                                                    {/* Time and Date */}
                                                    <div className="text-start mb-3 fs-12">
                                                      <span className="text_gray">
                                                        {formatTime(
                                                          new Date(
                                                            it.createdAt
                                                          ).getHours()
                                                        ) +
                                                          ":" +
                                                          formatTime(
                                                            new Date(
                                                              it.createdAt
                                                            ).getSeconds()
                                                          ) +
                                                          " " +
                                                          getAmPm(
                                                            new Date(
                                                              it.createdAt
                                                            ).getTime()
                                                          )}
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              );
                                            }
                                          })}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Admin Chats */}
                              <div className="col-lg-12 col-sm-12">
                                {item?.status == "pending" ? (
                                  <div className="card-footer bg_lgray p-5">
                                    <div className="">
                                      <div className="d-flex justify-content-end">
                                        <div className="col-lg-9">
                                          <div className="d-flex gap-2">
                                            <div style={{ flex: "auto" }}>
                                              <textarea
                                                type="text"
                                                rows="2"
                                                placeholder="Write your message..."
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                value={replymessage}
                                                onChange={(e) => {
                                                  let msg = e.target.value;
                                                  if (
                                                    e?.target?.value?.length >
                                                    500
                                                  ) {
                                                    msg = msg.slice(0, 500);
                                                  }
                                                  setReplyMessage(msg);
                                                }}
                                              />
                                              <div className="text-gray fs-12 text-end px-2">
                                                {500 - replymessage?.length}
                                                /500
                                              </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center  ">
                                              <div
                                                className="anchor_link"
                                                style={{
                                                  lineHeight: "47px",
                                                }}
                                                onClick={() =>
                                                  document
                                                    .getElementById("replyfile")
                                                    .click()
                                                }
                                              >
                                                {/* <i className="fa-solid fa-paperclip text_gray fs-4" /> */}
                                              </div>
                                              <input
                                                type="file"
                                                className=" d-none"
                                                id="replyfile"
                                                onChange={(e) => {
                                                  setReplyFile(
                                                    e?.target?.files[0]
                                                  );
                                                }}
                                              />
                                              <div
                                                className="coin_style3"
                                                onClick={() =>
                                                  sendRequest(
                                                    replymessage,
                                                    replyfile,
                                                    item?.query_subject
                                                  )
                                                }
                                              >
                                                {loading ? (
                                                  <div
                                                    className="spinner-border text-black load-icon mx-1"
                                                    role="status"
                                                  ></div>
                                                ) : (
                                                  <FiSend />
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : null}
                                {replyfile ? (
                                  <div
                                    style={{
                                      border: "7px solid #666",
                                      width: "210px",
                                      justifyContent: "center",
                                      display: "flex",
                                      borderRadius: 25,
                                    }}
                                  >
                                    <img
                                      src={URL.createObjectURL(replyfile)}
                                      style={{
                                        height: "200px",
                                        width: "200px",
                                        backgroundSize: "contain",
                                        borderRadius: 20,
                                      }}
                                    />
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}

              {/* accordian end */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Support;
