import React from "react";

function SupportRow() {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card custom-card">
              <div className="card-body">
                <div className="row justify-content-center border-bottom border-block-end-dashed mb-4">
                  <div className="col-xl-7">
                    <div className="py-2">
                      <div className="text-center">
                        <h3 className="text-primary1 mb-3">Support</h3>
                        <h5 className="d-block">
                          Require assistance? Here are some of our commonly
                          asked questions!
                        </h5>
                        <p className=" mb-2 px-4">
                          Discover answers to common queries and find solutions
                          to your concerns with our comprehensive list of
                          frequently asked questions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  className="nav nav-tabs nav-tabs-header mb-4 d-flex justify-content-center faq-nav gap-2"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      role="tab"
                      aria-current="page"
                      href="#general-settings"
                      aria-selected="true"
                    >
                      <i className="ti ti-settings me-1 d-inline-block"></i>
                      General Support
                    </a>
                  </li>
                </ul>
                <div className="tab-content mb-4">
                  <div
                    className="tab-pane border-0 p-0 active show"
                    id="general-settings"
                    role="tabpanel"
                  >
                    <div
                      className="accordion accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate"
                      id="accordionFAQ5"
                    >
                      {[
                        {
                          question: "Can I customize the admin template?",
                          answer:
                            "Yes, the admin template is fully customizable. You can modify the layout, color scheme, typography, and more to match your branding or design preferences.",
                        },
                        {
                          question: "How do I install the admin template?",
                          answer:
                            "Installing the admin template is straightforward. Simply download the template files and follow the included installation instructions provided in the documentation.",
                        },
                        {
                          question: "Is there a demo version available?",
                          answer:
                            "Yes, a demo version of the admin template is available for testing purposes. You can access the demo on our website and explore its features before making a purchase.",
                        },
                        {
                          question:
                            "How do I integrate the admin template with my existing project?",
                          answer:
                            "Integrating the admin template with your existing project is simple. You can either copy the template files into your project directory or use package managers like npm or yarn for easy integration.",
                        },
                        {
                          question:
                            "Does the admin template support responsive design?",
                          answer:
                            "Yes, the admin template is built with responsive design in mind. It is fully compatible with desktop, tablet, and mobile devices, ensuring a seamless user experience across all screen sizes.",
                        },
                      ].map((item, index) => (
                        <div className="accordion-item" key={index}>
                          <h2
                            className="accordion-header"
                            id={`headingcustomicon2Twenty${index + 1}`}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapsecustomicon2Twenty${
                                index + 1
                              }`}
                              aria-expanded="false"
                              aria-controls={`collapsecustomicon2Twenty${
                                index + 1
                              }`}
                            >
                              {index + 1}. {item.question}
                            </button>
                          </h2>
                          <div
                            id={`collapsecustomicon2Twenty${index + 1}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`headingcustomicon2Twenty${
                              index + 1
                            }`}
                            data-bs-parent="#accordionFAQ5"
                          >
                            <div className="accordion-body">{item.answer}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="row bg-light mx-0 justify-content-between align-items-center rounded">
                  <div className="col-sm-3 d-md-block d-none px-0">
                    <img
                      src="https://laravelui.spruko.com/xintra/build/assets/images/media/media-65.png"
                      alt=""
                      className="img-fluid ps-3"
                    />
                  </div>
                  <div className="col-md-8 px-0">
                    <div className="p-3">
                      <div>
                        <h5 className="fw-semibold mb-2">
                          Still Have Questions? We're Here to Help!
                        </h5>
                        <span className="d-block fs-12 text-muted">
                          Contact our support team for personalized assistance.
                          Your satisfaction is our priority! Write your question
                          below and we'll get back to you shortly.
                        </span>
                        <div className="row gy-3 mt-3">
                          <div className="col-xl-6">
                            <label htmlFor="user-name" className="form-label">
                              Your Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="user-name"
                              placeholder="Enter Your Name"
                            />
                          </div>
                          <div className="col-xl-6">
                            <label htmlFor="user-email" className="form-label">
                              Email Id
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="user-email"
                              placeholder="Enter Email"
                            />
                          </div>
                          <div className="col-xl-12">
                            <label htmlFor="text-area" className="form-label">
                              Textarea
                            </label>
                            <textarea
                              className="form-control"
                              placeholder="Enter your query here"
                              id="text-area"
                              rows="6"
                            ></textarea>
                          </div>
                          <div className="col-xl-12">
                            <button
                              className="btn btn-primary btn-wave waves-effect waves-light"
                              type="button"
                              id="send"
                            >
                              Send your question
                            </button>
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
  );
}

export default SupportRow;
