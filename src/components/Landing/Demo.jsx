import React from "react";
import "./css/style.css";
// import "./css/slick.css";
import "./css/responsive.css";
import "./css/default.css";
import trans from "../../assets/img/security.png";
import effe from "../../assets/img/efficacy.png";
import creator from "../../assets/img/creator.png";
import investor from "../../assets/img/crowdfunding.png";
import dcent from "../../assets/img/blockchain1.png";
import blockchain from "../../assets/img/blockchain.png";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      {/* <!--==============================Hero Area==============================--> */}
      <div className="hero-wrapper hero-1">
        <div className="hero-bg-gradient"></div>
        <div className="ripple-shape">
          <span className="ripple-1"></span>
          <span className="ripple-2"></span>
          <span className="ripple-3"></span>
          <span className="ripple-4"></span>
          <span className="ripple-5"></span>
        </div>

        <div className="container">
          <div className="hero-style1">
            <div className="row flex-row-reverse">
              {/* <div className="col-lg-3">
                <div className="hero-thumb alltuchtopdown">
                  <img
                    src="/img/update/hero/hero-1-1.jpg"
                    alt="img"
                  />
                </div>
              </div> */}
              <div className="col-lg-12">
                <h1 className="hero-title text-center">BITGOLD</h1>
                <div className="row justify-content-center">
                  <div className=" col-lg-8 ">
                    <div
                      className="pt-3 text-light text-center"
                      style={{ textAlign: "justify" }}
                    >
                      JOIN THE REVOLUTION IN CROWDFUNDING TODAY. WHETHER YOU'RE
                      LOOKING TO RAISE CAPITAL OR INVEST IN GROUNDBREAKING
                      PROJECTS, THE WORLD OF CRYPTOCURRENCY CROWDFUNDING IS
                      WAITING FOR YOU!{" "}
                    </div>
                  </div>
                </div>
                <div className="btn-wrap">
                  <a href="/learnmore" className="btn123 btn2">
                    Learn More
                  </a>
                  <a href="/SignUp" className="btn123 btn-two">
                    Join
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="hero-countdown-wrap">
            <h2 className="hero-countdown-wrap-title">ICO will start in..</h2>
            

          </div> */}
        </div>
      </div>
      {/* <!--======== / Hero Section ========--> */}

      {/* <!--==============================Brand Area 2==============================--> */}
      {/* <div className="brand-area2">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-12">
              <div className="brand-title text-center mt-4">
                <h6 className="title">Our top Partner</h6>
              </div>
            </div>
          </div>
          <div className="brand-item-wrap style2">
            <div className="row justify-content-center g-3 brand-active2">
              <div className="col-sm-12 col-md-2 ">
                <div className="brand-item">
                  <img
                    src="/img/brand/brand_img01.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-2">
                <div className="brand-item">
                  <img
                    src="/img/brand/brand_img02.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-2">
                <div className="brand-item">
                  <img
                    src="/img/brand/brand_img03.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-2">
                <div className="brand-item">
                  <img
                    src="/img/brand/brand_img04.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-2">
                <div className="brand-item">
                  <img
                    src="/img/brand/brand_img05.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <!--==============================Why Choose Us Area==============================--> */}
      <div className="" id="about">
        <div className="coreWhatIs">
          <div className="coreWhatoverlay">
            <div className="wcu-area-1 pt-50 pb-4 " id="feature">
              <div className="container">
                <div className="mb-25">
                  <div className="row gy-5">
                    <div className="col-lg-12">
                      <div className="section-title mb-0">
                        <h2 className="title style2">
                          What is BITGOLD Crowdfunding?
                        </h2>
                        <p
                          className="sec-text  pt-2 pb-4"
                          style={{ textAlign: "justify" }}
                        >
                          BITGOLD crowdfunding is a modern approach to
                          fundraising that uses digital currencies like Bitcoin,
                          Ethereum, or custom tokens to raise funds for
                          projects. Unlike traditional crowdfunding platforms,
                          which rely on fiat currency, cryptocurrency
                          crowdfunding harnesses blockchain technology to
                          provide several key benefits:
                        </p>
                      </div>
                    </div>
                    {/* <div className="col-lg-5">
                    <div className="wcu-thumb text-center alltuchtopdown">
                    <img
                        src="/img/update/normal/why_1-1.png"
                        alt="img"
                    />
                    </div>
                </div> */}
                  </div>
                </div>
                <div className="row gy-1 justify-content-center">
                  <div className="col-sm-6 col-lg-6">
                    <div className="feature-card">
                      <div className="feature-card-icon">
                        <img
                          src={dcent}
                          alt="img"
                          style={{ height: "40px", width: "40px" }}
                          className="feature-img"
                        />
                      </div>
                      <div className="feature-card-details">
                        <h4 className="feature-card-title">Decentralization</h4>
                        <p className="feature-card-text">
                          Bypass intermediaries and raise funds directly from
                          the global community.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6 ">
                    <div className="feature-card">
                      <div className="feature-card-icon">
                        <img
                          src={trans}
                          alt="img"
                          style={{ height: "40px", width: "40px" }}
                          className="feature-img"
                        />
                      </div>
                      <div className="feature-card-details">
                        <h4 className="feature-card-title">Transparency</h4>
                        <p className="feature-card-text">
                          All transactions are recorded on the blockchain,
                          ensuring full transparency and accountability
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="feature-card">
                      <div className="feature-card-icon">
                        <img
                          src={effe}
                          alt="img"
                          style={{ height: "40px", width: "40px" }}
                          className="feature-img"
                        />
                      </div>
                      <div className="feature-card-details">
                        <h4 className="feature-card-title">
                          Speed & Efficiency
                        </h4>
                        <p className="feature-card-text">
                          Fundraising can happen almost instantly with minimal
                          fees.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-sm-6 col-lg-6">
                    <div className="feature-card">
                      <div className="feature-card-icon">
                        <img
                          src={blockchain}
                          alt="img"
                          style={{ height: "40px", width: "40px" }}
                          className="feature-img"
                        />
                      </div>
                      <div className="feature-card-details">
                        <h4 className="feature-card-title">Security</h4>
                        <p className="feature-card-text">
                          Protects funds and data with advanced encryption.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--==============================Invest Area==============================--> */}
      <div className="coreWorkIs" id="howitwork">
        <div className="coreWhatoverlay">
          <div className="container pt-130">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7">
                <div className="section-title text-center mb-50">
                  <h2 className="title style2">How It Works</h2>
                </div>
              </div>
            </div>
            <div className="row gy-30">
              <div className="col-md-4 col-lg-4">
                <div className="invest-card">
                  {/* <h5>Early Investment Opportunities</h5> */}

                  <div className="invest-card-icon">
                    <div className="inv-div">Create Your Campaign</div>
                    <p className="">
                      Start by creating your fundraising campaign on our
                      platform. Set your goal, describe your project, and
                      provide the details to attract potential users.
                    </p>

                    {/* <img src="/img/update/invest/invest-icon-1.png" alt="icon"/> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="invest-card">
                  <div className="invest-card-icon">
                    <div className="inv-div">Start Fundraising</div>
                    <p className="">
                      Share your campaign link with your network, social media,
                      and relevant crypto communities to start raising funds.
                      Users can easily contribute using their crypto wallets.
                    </p>

                    {/* <img src="/img/update/invest/invest-icon-2.png" alt="icon"/> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="invest-card">
                  <div className="invest-card-icon">
                    <div className="inv-div">
                      Track Contributions in Real-Time
                    </div>
                    <p className="">
                      Keep track of the funds raised with real-time blockchain
                      transparency. Our platform updates every transaction, so
                      you always know where your funding stands.
                    </p>

                    {/* <img src="/img/update/invest/invest-icon-3.png" alt="icon"/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--==============================Intro Area==============================--> */}
      <div className="coreChooseIs" id="whycorecrowd">
        <div className="coreWhatoverlay">
          <div className="pt-100 pb-2  overflow-hidden bg-black2">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="section-title mb-45">
                    <h2 className="title style2">
                      Why Choose BITGOLD Crowdfunding?
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-12">
                  <div className="intro-wrap mt-xl-4">
                    <h6 className="intro-wrap-title">Lower Fees</h6>
                    <p className="intro-wrap-text">
                      Traditional platforms often take a large percentage of
                      your raised funds. BITGOLD transactions usually have
                      lower fees, meaning more of your funds go toward your
                      project.
                    </p>
                  </div>
                  <div className="intro-wrap">
                    <h6 className="intro-wrap-title">Security</h6>
                    <p className="intro-wrap-text">
                      Blockchain technology ensures the security of
                      transactions, reducing the risk of fraud or chargebacks.
                    </p>
                  </div>
                  <div className="intro-wrap">
                    <h6 className="intro-wrap-title">
                      Access to Crypto Investors
                    </h6>
                    <p className="intro-wrap-text">
                      Tap into the growing community of crypto enthusiasts,
                      investors, and supporters who are eager to invest in
                      innovative ideas.
                    </p>
                  </div>
                  <div className="intro-wrap mt-50">
                    <h6 className="intro-wrap-title">Innovation</h6>
                    <p className="intro-wrap-text">
                      BITGOLD crowdfunding aligns with the future of finance,
                      bringing innovation to the way funding works in various
                      sectors—tech, arts, real estate, and more.
                    </p>
                  </div>
                </div>
                {/* <div className="col-xl-6">
              <div className="intro-thumb1 alltuchtopdown">
                <img src="/img/update/normal/intro_1-1.png" alt="img" />
              </div>
              <div className="intro-wrap mt-50">
                <h6 className="intro-wrap-title">Innovation</h6>
                <p className="intro-wrap-text">
                  BITGOLD crowdfunding aligns with the future of finance,
                  bringing innovation to the way funding works in various
                  sectors—tech, arts, real estate, and more.
                </p>
              </div>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--==============================Invest Area==============================--> */}
      <div className="" id="benefits">
        <div className="">
          <div className="pt-130 overflow-hidden">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7">
                  <div className="section-title text-center mb-50">
                    <h2 className="title style2">
                      Benefits for Backers (Users)
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row gy-30">
                <div className="col-lg-4 col-md-6">
                  <div className="invest-card">
                    {/* <h5>Early Investment Opportunities</h5> */}

                    <div className="invest-card-icon">
                      <h5>Early Investment Opportunities</h5>
                      <p className=" btn3">
                        By backing a compaign with BITGOLD, investors get
                        access to early-stage projects that could turn into
                        valuable assets
                      </p>

                      {/* <img src="/img/update/invest/invest-icon-1.png" alt="icon"/> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="invest-card">
                    <div className="invest-card-icon">
                      <h5>Global Participation</h5>
                      <p className=" btn3">
                        Backers can support projects from anywhere in the world
                        without the need for currency conversions or
                        international fees.
                      </p>

                      {/* <img src="/img/update/invest/invest-icon-2.png" alt="icon"/> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="invest-card">
                    <div className="invest-card-icon">
                      <h5>Potential for Growth</h5>
                      <p className=" btn3">
                        Some crypto crowdfunding campaigns issue tokens that can
                        increase in value, offering potential financial growth
                        for early backers.
                      </p>

                      {/* <img src="/img/update/invest/invest-icon-3.png" alt="icon"/> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--==============================Why Choose Us Area==============================--> */}
      <div className="wcu-area-1 pt-130 pb-4 position-relative" id="feature">
        <div className="bg-gradient-1">
          <img src="/img/update/bg/bg-gradient1-1.jpg" alt="img" />
        </div>
        <div className="container">
          <div className="mb-25">
            <div className="row gy-5 text-center">
              <div className="col-lg-12">
                <div className="section-title mb-0">
                  <h2 className="title style2">Get Started Today!</h2>
                  <p
                    className="sec-text text-center  pt-2 pb-4"
                    style={{ textAlign: "justify" }}
                  >
                    Are you a project creator ready to launch your crypto
                    crowdfunding campaign? Or are you an investor looking for
                    innovative opportunities? Get in touch with us today and
                    start raising or backing funds in the world of
                    cryptocurrency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-1 justify-content-center">
            <div className="col-lg-6">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <img
                    src={creator}
                    alt="img"
                    style={{ height: "40px", width: "40px" }}
                  />
                </div>
                <div className="feature-card-details">
                  <h4 className="feature-card-title">For Project Creators</h4>
                  <p className="feature-card-text">
                    Start your campaign now and bring your idea to life using
                    the power of blockchain technology!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <img
                    src={investor}
                    alt="img"
                    style={{ height: "40px", width: "40px" }}
                  />
                </div>
                <div className="feature-card-details">
                  <h4 className="feature-card-title">For Investors</h4>
                  <p className="feature-card-text">
                    Discover exciting, groundbreaking projects, and invest in
                    the future of innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--==============================Faq Area==============================--> */}
      <div className="pt-100 pb-4 overflow-hidden" id="faq">
        <div className="container">
          <div className="section-title mb-50 text-center">
            <h2 className="title style2">Frequently Asked Questions</h2>
            <p className="sec-text">
              DO have any kind Of questions? We're here to help.
            </p>
          </div>
          <div className="row gy-40 justify-content-between">
            <div className="col-xl-4 text-xl-start">
              <div className="faq-thumb mt-1">
                <img src="/img/update/normal/faq_1-1.png" alt="img" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-8">
              <div className="accordion-area accordion" id="faqAccordion">
                <div className="accordion-card active">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                      aria-controls="collapse-1"
                    >
                      <span className="number">1</span> What types of projects
                      can use BITGOLD crowdfunding?
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        From tech startups to creative projects, real estate
                        developments to social impact initiatives, almost any
                        type of project can benefit from BITGOLD
                        crowdfunding.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      <span className="number">2</span> How can I contribute to
                      a campaign?
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse "
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Simply connect your cryptocurrency wallet like Meta
                        Mask, Trust wallet, Token pocket or any other
                        decentralized wallet, select the amount you want to
                        contribute, and confirm the transaction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      <span className="number">3</span> 3. Are there any risks?
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse "
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        As with any investment, cryptocurrency crowdfunding
                        carries some risk. We recommend doing thorough research
                        and understanding the project before contributing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                      aria-controls="collapse-4"
                    >
                      <span className="number">4</span> Can I use my local
                      currency to back a project?
                    </button>
                  </div>
                  <div
                    id="collapse-4"
                    className="accordion-collapse collapse "
                    aria-labelledby="collapse-item-4"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Currently, contributions are made via cryptocurrency.
                        However, we are working to integrate more fiat-to-crypto
                        payment options in the future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--==============================Footer Area==============================--> */}
      <footer className="footer-wrapper footer-layout1 position-relative mt-100">
        <div className="bg-gradient-1">
          <img src="/img/update/bg/bg-gradient1-1.jpg" alt="img" />
        </div>
        <div className="container">
          <div className="footer-menu-area m-0 p-0">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-5 col-lg-12 d-flex w-100 justify-content-center align-items-center flex-wrap font-landing-footer">
                <span className="">Contract Address:</span>
                <a
                  className="ps-2 "
                  target="_blank"
                  href="https://polygonscan.com/address/0x7E64d0fbA2908eba5F1FeF73fC9BD358c9fCc8D6#readProxyContract"
                >
                  0x7E64d0fbA2908eba5F1FeF73fC9BD358c9fCc8D6
                </a>
                {/* <div className="social-btn justify-content-center justify-content-lg-start">
                            <a href="https://www.facebook.com/">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                                        fill="currentColor"></path>
                                </svg>
                            </a>
                            <a href="https://instagram.com/">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://linkedin.com/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div> */}
              </div>
              {/* <div className="col-xl-7 col-lg-8 text-lg-end text-center">
                        <ul className="footer-menu-list">
                            <li>
                                <a href="index.html">
                                    HOME
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    OUR PROJECTS
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    OUR TEAM
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    NEWS FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    DOCUMENTS
                                </a>
                            </li>
                        </ul>
                    </div> */}
            </div>
          </div>
        </div>
        <div className="copyright-wrap text-center text-lg-start">
          <div className="container">
            <div className="row gy-3 justify-content-between align-items-center">
              <div className="col-lg-6 align-self-center">
                <div className="social-btn justify-content-center justify-content-lg-start">
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a href="https://instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://linkedin.com/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-end footer-text-landing">
                <p className="copyright-text">
                  Copyright © 2024 <a href="#">BITGOLD.</a> All rights
                  reserved.
                </p>

                {/* <ul className="footer-links">
                            <li>
                                <a href="blog.html">
                                    Job & Career
                                </a>
                            </li>
                            <li>
                                <a href="contact.html">
                                    Terms and Condition
                                </a>
                            </li>
                            <li>
                                <a href="contact.html">
                                    Help Center
                                </a>
                            </li>
                        </ul> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
