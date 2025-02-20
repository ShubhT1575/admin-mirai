import React, { useState } from "react";

function FormRow() {
  const [activeTab, setActiveTab] = useState("contactDetail");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="col-xl-10">
        <div className="card custom-card">
          <div className="card-header">
            <div className="card-title">FORM WIZARD WITH VALIDATION</div>
          </div>
          <div className="card-body">
            <div id="basicwizard">
              {/* Tab Navigation */}
              <ul
                className="nav nav-tabs nav-justified flex-md-row flex-column mb-4 tab-style-6 p-0"
                role="tablist"
              >
                {[
                  { id: "contactDetail", label: "Contact Detail" },
                  { id: "jobDetail", label: "Job Detail" },
                  { id: "educationDetail", label: "Education Detail" },
                  { id: "finish", label: "Finish" },
                ].map((tab) => (
                  <li
                    className="nav-item"
                    role="presentation"
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    <a
                      className={`nav-link icon-btn d-flex align-items-center justify-content-md-center gap-1 ${
                        activeTab === tab.id ? "active" : ""
                      }`}
                      href={`#${tab.id}`}
                      role="tab"
                    >
                      <span>{tab.label}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Tab Content */}
              <div className="tab-content">
                {activeTab === "contactDetail" && (
                  <div
                    className="tab-pane show active"
                    id="contactDetail"
                    role="tabpanel"
                  >
                    <form
                      id="contactForm"
                      className="needs-validation"
                      noValidate
                    >
                      <div className="mb-3">
                        <label htmlFor="fullName2" className="form-label">
                          Full Name:
                        </label>
                        <input
                          type="text"
                          id="fullName2"
                          name="fullName2"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email2" className="form-label">
                          Email:
                        </label>
                        <input
                          type="email"
                          id="email2"
                          name="email2"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phoneNumber2" className="form-label">
                          Phone Number:
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber2"
                          name="phoneNumber2"
                          className="form-control"
                          pattern="[0-9]{10}"
                          placeholder="Enter 10-digit phone number"
                        />
                      </div>
                    </form>
                  </div>
                )}
                {activeTab === "jobDetail" && (
                  <div
                    className="tab-pane show active"
                    id="jobDetail"
                    role="tabpanel"
                  >
                    <form id="jobForm" className="needs-validation" noValidate>
                      <div className="mb-3">
                        <label htmlFor="jobTitle" className="form-label">
                          Job Title:
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="company" className="form-label">
                          Company:
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="location" className="form-label">
                          Location:
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="jobDescription" className="form-label">
                          Job Description:
                        </label>
                        <textarea
                          id="jobDescription"
                          name="jobDescription"
                          className="form-control"
                          rows="4"
                          required
                        ></textarea>
                      </div>
                    </form>
                  </div>
                )}
                {activeTab === "educationDetail" && (
                  <div
                    className="tab-pane show active"
                    id="educationDetail"
                    role="tabpanel"
                  >
                    <form
                      id="educationForm"
                      className="needs-validation"
                      noValidate
                    >
                      <div className="mb-3">
                        <label htmlFor="degree" className="form-label">
                          Degree:
                        </label>
                        <input
                          type="text"
                          id="degree"
                          name="degree"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="institution" className="form-label">
                          Institution:
                        </label>
                        <input
                          type="text"
                          id="institution"
                          name="institution"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="graduationYear" className="form-label">
                          Graduation Year:
                        </label>
                        <input
                          type="number"
                          id="graduationYear"
                          name="graduationYear"
                          className="form-control"
                          min="1900"
                          max="2100"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="fieldOfStudy" className="form-label">
                          Field of Study:
                        </label>
                        <input
                          type="text"
                          id="fieldOfStudy"
                          name="fieldOfStudy"
                          className="form-control"
                          required
                        />
                      </div>
                    </form>
                  </div>
                )}
                {activeTab === "finish" && (
                  <div
                    className="tab-pane show active"
                    id="finish"
                    role="tabpanel"
                  >
                    <div className="text-center p-4">
                      <span className="avatar avatar-xl avatar-rounded bg-success-transparent svg-success">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                        >
                          <rect width="256" height="256" fill="none"></rect>
                          <circle
                            cx="128"
                            cy="128"
                            r="96"
                            opacity="0.2"
                          ></circle>
                          <polyline
                            points="88 136 112 160 168 104"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="16"
                          ></polyline>
                          <circle
                            cx="128"
                            cy="128"
                            r="96"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="16"
                          ></circle>
                        </svg>
                      </span>
                      <h3 className="mt-2">
                        Successful
                        <span className="fs-14 align-middle">🎉</span>
                      </h3>
                      <p>
                        Nulla facilisi. Praesent euismod, ex in viverra
                        ullamcorper, augue justo convallis urna, a sollicitudin
                        quam libero et magna. Sed ac metus.
                      </p>
                      <div className="mb-0">
                        <div className="form-check d-inline-block">
                          <input
                            className="form-check-input"
                            id="customCheck1"
                            required
                            type="checkbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck1"
                          >
                            I agree with the{" "}
                            <a
                              className="fw-medium text-decoration-underline"
                              href="#"
                            >
                              Terms and Conditions.
                            </a>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Navigation Buttons */}
              <div className="d-flex wizard justify-content-between mt-3 flex-wrap gap-2">
                <div className="first">
                  <button
                    className="btn btn-light"
                    disabled={activeTab === "contactDetail"}
                    onClick={() => handleTabChange("contactDetail")}
                  >
                    First
                  </button>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <div className="previous me-2">
                    <button
                      className="btn icon-btn btn-primary"
                      disabled={activeTab === "contactDetail"}
                      onClick={() => handleTabChange("jobDetail")}
                    >
                      Back To Previous
                    </button>
                  </div>
                  <div className="next">
                    <button
                      className="btn icon-btn btn-secondary"
                      disabled={activeTab === "finish"}
                      onClick={() => handleTabChange("educationDetail")}
                    >
                      Next Step
                    </button>
                  </div>
                </div>
                <div className="last">
                  <button
                    className="btn btn-success"
                    onClick={() => handleTabChange("finish")}
                  >
                    Finish
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

export default FormRow;
