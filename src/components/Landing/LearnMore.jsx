import React from 'react'
import Header from './Header'

export default function LearnMore() {
  return (
    <>
    <Header />
        <div className="wcu-area-1 pt-130 pb-4 position-relative" id="feature">
        <div className="bg-gradient-1">
          <img src="/img/update/bg/bg-gradient1-1.jpg" alt="img" />
        </div>
        <div className="container">
          <div className="mb-25">
            <div className="row gy-5 text-center">
              <div className="col-lg-12">
                <div className="section-title mb-0">
                  <h2 className="title style2">Welcome to the future of crowdfunding!</h2>
                  <p
                    className="sec-text text-center  pt-2 pb-4 fs-5"
                    style={{ textAlign: "justify" }}
                  >
                   BITGOLD crowdfunding is transforming the way businesses, creators, and innovators raise capital for their projects. Using the power of blockchain technology and decentralized finance, we make it easier, faster, and more transparent for you to fund your ideas or investments, all while tapping into the global crypto ecosystem.

                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row gy-1 justify-content-center">
            <div className="col-lg-6">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <img src="/img/update/icon/feature-icon1-1.svg" alt="img" />
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
                  <img src="/img/update/icon/feature-icon1-3.svg" alt="img" />
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
          </div> */}
        </div>
      </div>
    </>
  )
}
