import React from "react";

function ProfileRow() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12">
          <div className="card custom-card profile-card">
            <div className="profile-banner-img">
              <img
                src="https://laravelui.spruko.com/xintra/build/assets/images/media/media-3.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body pb-0 position-relative">
              <div className="row profile-content">
                <div className="col-xl-3">
                  <div
                    className="card custom-card overflow-hidden border"
                    style={{ height: "587px" }}
                  >
                    <div className="card-body border-bottom border-block-end-dashed">
                      <div className="text-center">
                        <span className="avatar avatar-xxl avatar-rounded online mb-3">
                          <img
                            src="https://laravelui.spruko.com/xintra/build/assets/images/faces/11.jpg"
                            alt="Profile"
                          />
                        </span>
                        <h5 className="fw-semibold mb-1">Spencer Robin</h5>
                        <span className="d-block fw-medium text-muted mb-2">
                          Software Development Manager
                        </span>
                        <p className="fs-12 mb-0 text-muted">
                          <span className="me-3">
                            <i className="ri-building-line me-1 align-middle"></i>{" "}
                            Hamburg
                          </span>
                          <span>
                            <i className="ri-map-pin-line me-1 align-middle"></i>{" "}
                            Germany
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="p-3 pb-1 d-flex flex-wrap justify-content-between">
                      <div className="fw-medium fs-15 text-primary1">
                        Basic Info :
                      </div>
                    </div>
                    <div className="card-body border-bottom border-block-end-dashed p-0">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item pt-2 border-0">
                          <div>
                            <span className="fw-medium me-2">Name :</span>
                            <span className="text-muted">Spencer Robin</span>
                          </div>
                        </li>
                        <li className="list-group-item pt-2 border-0">
                          <div>
                            <span className="fw-medium me-2">
                              Designation :
                            </span>
                            <span className="text-muted">
                              Software Development Manager
                            </span>
                          </div>
                        </li>
                        <li className="list-group-item pt-2 border-0">
                          <div>
                            <span className="fw-medium me-2">Email :</span>
                            <span className="text-muted">
                              spencer.robin22@example.com
                            </span>
                          </div>
                        </li>
                        <li className="list-group-item pt-2 border-0">
                          <div>
                            <span className="fw-medium me-2">Phone :</span>
                            <span className="text-muted">
                              +1 (222) 111 - 57840
                            </span>
                          </div>
                        </li>
                        <li className="list-group-item pt-2 border-0">
                          <div>
                            <span className="fw-medium me-2">Experience :</span>
                            <span className="text-muted">10 Years</span>
                          </div>
                        </li>
                        <li className="list-group-item pt-2 border-0">
                          <div>
                            <span className="fw-medium me-2">Age :</span>
                            <span className="text-muted">28</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="card custom-card overflow-hidden border">
                    <div className="card-body">
                      <ul
                        className="nav nav-tabs tab-style-6 mb-3 p-0"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link w-100 text-start active"
                            id="profile-about-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile-about-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="profile-about-tab-pane"
                            aria-selected="true"
                          >
                            About
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link w-100 text-start"
                            id="edit-profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#edit-profile-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="edit-profile-tab-pane"
                            aria-selected="false"
                            tabIndex="-1"
                          >
                            Edit Profile
                          </button>
                        </li>
                      </ul>

                      <div className="tab-content" id="profile-tabs">
                        {/* About Tab Content */}
                        <div
                          className="tab-pane show active p-0 border-0"
                          id="profile-about-tab-pane"
                          role="tabpanel"
                          aria-labelledby="profile-about-tab"
                          tabIndex="0"
                        >
                          <ul className="list-group list-group-flush border rounded-3">
                            <li className="list-group-item p-3">
                              <span className="fw-medium fs-15 d-block mb-3">
                                <span className="me-1">✨</span> About Info:
                              </span>
                              <p className="text-muted mb-2">
                                Hello, I'm [Your Name], a dedicated [Your
                                Profession/Interest] based in [Your Location]. I
                                have a genuine passion for [Your
                                Hobbies/Interests] and enjoy delving into the
                                nuances of [Your Industry/Field].
                              </p>
                              <p className="text-muted mb-0">
                                Specializing in [Your Specialization/Area of
                                Expertise], I strive to infuse innovation into
                                every project I undertake. With a track record
                                of [Key Achievements] and valuable experiences,
                                I'm committed to continual growth and eagerly
                                anticipate the opportunities that lie ahead.
                              </p>
                            </li>
                            <li className="list-group-item p-3">
                              <span className="fw-medium fs-15 d-block mb-3">
                                Contact Info :
                              </span>
                              <div className="text-muted">
                                <p className="mb-3">
                                  <span className="avatar avatar-sm avatar-rounded text-primary p-1 bg-primary-transparent me-2">
                                    <i className="ri-mail-line align-middle fs-15"></i>
                                  </span>
                                  <span className="fw-medium text-default">
                                    Email :
                                  </span>{" "}
                                  spencer.robin22@example.com
                                </p>
                                <p className="mb-3">
                                  <span className="avatar avatar-sm avatar-rounded text-primary1 p-1 bg-primary1-transparent me-2">
                                    <i className="ri-map-pin-line align-middle fs-15"></i>
                                  </span>
                                  <span className="fw-medium text-default">
                                    Website :
                                  </span>{" "}
                                  www.yourwebsite.com
                                </p>
                                <p className="mb-3">
                                  <span className="avatar avatar-sm avatar-rounded text-primary2 p-1 bg-primary2-transparent me-2">
                                    <i className="ri-building-line align-middle fs-15"></i>
                                  </span>
                                  <span className="fw-medium text-default">
                                    Location :
                                  </span>{" "}
                                  City, Country
                                </p>
                                <p className="mb-0">
                                  <span className="avatar avatar-sm avatar-rounded text-primary3 p-1 bg-primary3-transparent me-2">
                                    <i className="ri-phone-line align-middle fs-15"></i>
                                  </span>
                                  <span className="fw-medium text-default">
                                    Phone :
                                  </span>{" "}
                                  +1 (222) 111 - 57840
                                </p>
                              </div>
                            </li>

                            <li className="list-group-item p-3">
                              <span className="fw-medium fs-15 d-block mb-3">
                                Social Media :
                              </span>
                              <div className="d-flex align-items-center gap-5 flex-wrap">
                                <div className="d-flex align-items-center gap-3 me-2">
                                  <div>
                                    <span className="avatar avatar-md bg-primary">
                                      <i className="ri-github-line fs-16"></i>
                                    </span>
                                  </div>
                                  <div>
                                    <span className="d-block fw-medium text-primay">
                                      Github
                                    </span>
                                    <span className="text-muted fw-medium">
                                      github.com/Dashboard
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 me-2">
                                  <div>
                                    <span className="avatar avatar-md bg-primary1">
                                      <i className="ri-twitter-x-line fs-16"></i>
                                    </span>
                                  </div>
                                  <div>
                                    <span className="d-block fw-medium text-primay1">
                                      Twitter
                                    </span>
                                    <span className="text-muted fw-medium">
                                      twitter.com/Dashboard.me
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 me-2">
                                  <div>
                                    <span className="avatar avatar-md bg-primary2">
                                      <i className="ri-linkedin-line fs-16"></i>
                                    </span>
                                  </div>
                                  <div>
                                    <span className="d-block fw-medium text-primay2">
                                      Linkedin
                                    </span>
                                    <span className="text-muted fw-medium">
                                      linkedin.com/in/Dashboard
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                  <div>
                                    <span className="avatar avatar-md bg-primary3">
                                      <i className="ri-briefcase-line fs-16"></i>
                                    </span>
                                  </div>
                                  <div>
                                    <span className="d-block fw-medium text-primay3">
                                      My Portfolio
                                    </span>
                                    <span className="text-muted fw-medium">
                                      Dashboard.com/
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>

                        {/* Edit Profile Tab Content */}
                        <div
                          className="tab-pane p-0 border-0"
                          id="edit-profile-tab-pane"
                          role="tabpanel"
                          aria-labelledby="edit-profile-tab"
                          tabIndex="0"
                        >
                          <ul className="list-group list-group-flush border rounded-3">
                            <li className="list-group-item p-3">
                              <span className="fw-medium fs-15 d-block mb-3">
                                Personal Info :
                              </span>
                              <div className="row gy-3 align-items-center">
                                <div className="col-xl-3">
                                  <div className="lh-1">
                                    <span className="fw-medium">
                                      User Name :
                                    </span>
                                  </div>
                                </div>
                                <div className="col-xl-9">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Placeholder"
                                    value="Spencer Robin"
                                  />
                                </div>
                                <div className="col-xl-3">
                                  <div className="lh-1">
                                    <span className="fw-medium">
                                      First Name :
                                    </span>
                                  </div>
                                </div>
                                <div className="col-xl-9">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Placeholder"
                                    value="Spencer"
                                  />
                                </div>
                                <div className="col-xl-3">
                                  <div className="lh-1">
                                    <span className="fw-medium">
                                      Last Name :
                                    </span>
                                  </div>
                                </div>
                                <div className="col-xl-9">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Placeholder"
                                    value="Robin"
                                  />
                                </div>
                                <div className="col-xl-3">
                                  <div className="lh-1">
                                    <span className="fw-medium">
                                      Designation :
                                    </span>
                                  </div>
                                </div>
                                <div className="col-xl-9">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Placeholder"
                                    value="Software Development Manager"
                                  />
                                </div>
                                <div className="col-xl-3">
                                  <div className="lh-1">
                                    <span className="fw-medium">Email :</span>
                                  </div>
                                </div>
                                <div className="col-xl-9">
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Placeholder"
                                    value="spencer.robin22@example.com"
                                  />
                                </div>
                                <div className="col-xl-3">
                                  <div className="lh-1">
                                    <span className="fw-medium">Phone :</span>
                                  </div>
                                </div>
                                <div className="col-xl-9">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Placeholder"
                                    value="+1 (222) 111 - 57840"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
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
  );
}

export default ProfileRow;
