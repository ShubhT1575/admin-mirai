import React from "react";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-xl-9">
          <div className="card custom-card overflow-hidden">
            <div className="card-body p-4">
              <div className="mb-3 d-flex justify-content-between">
                <h3 className="mb-1 text-primary">
                  Terms of Use for MiraiDao
                </h3>
                <button class="btn btn-icon btn-danger btn-wave" onClick={() => window.history.back()}>
                  <i class="ri-arrow-left-circle-line"></i>
                </button>
              </div>
              <ul className="terms-list list-unstyled">
                <li>
                  <div className="fs-6 fw-medium text-primary">
                    1. Introduction :
                  </div>
                  <p className="mb-0">
                    Welcome to MiraiDao, a decentralized platform that
                    empowers individuals and communities to raise funds. By
                    accessing or using our platform, you agree to comply with
                    and be bound by these Terms of Use. Please read them
                    carefully.
                  </p>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">
                    2. Platform Purpose :
                  </div>
                  <p className="mb-0">
                    MiraiDao is a decentralized platform that facilitates
                    fundraising by providing tools and resources to connect
                    communities. We do not encourage or solicit donations or
                    investments, nor do we guarantee returns on any
                    contributions made through the platform.
                  </p>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">
                    3. User Responsibilities :
                  </div>
                  <ul className="mb-1">
                    <li style={{ color: "var(--tg-paragraph-color)" }}>
                      {" "}
                      You are solely responsible for the accuracy and legality
                      of the campaigns you create or contribute to.
                    </li>
                    <li style={{ color: "var(--tg-paragraph-color)" }}>
                      It is your duty to ensure that your use of the platform
                      complies with applicable laws and regulations in your
                      jurisdiction.
                    </li>
                    <li style={{ color: "var(--tg-paragraph-color)" }}>
                      Contributions made through the platform are voluntary and
                      should be considered non-refundable unless explicitly
                      agreed upon between the parties involved.
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">
                    4. No Liability for Returns :
                  </div>
                  <p className="mb-0">
                    MiraiDao is not responsible for ensuring or guaranteeing
                    any financial returns or benefits from donations or
                    contributions. Any potential returns are contingent upon the
                    growth and success of the specific community or project.
                  </p>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">
                    5. No Endorsement or Verification :
                  </div>
                  <p className="mb-0">
                    MiraiDao does not endorse, verify, or take responsibility
                    for the accuracy or legitimacy of campaigns hosted on the
                    platform. Contributors should exercise due diligence before
                    making any financial commitments.
                  </p>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">
                    6. Free Use of Platform :
                  </div>
                  <p className="mb-0">
                    Our platform is provided free of charge to users for
                    fundraising purposes. However, any additional services, if
                    introduced, may be subject to separate terms and conditions.
                  </p>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">
                    7. Prohibited Activities :
                  </div>
                  <span className="fs-6 text-primary3">
                    Users are prohibited from using the platform for :-
                  </span>
                  <ul className="mb-1">
                    <li style={{ color: "var(--tg-paragraph-color)" }}>
                      {" "}
                      Illegal, fraudulent, or deceptive campaigns.
                    </li>
                    <li style={{ color: "var(--tg-paragraph-color)" }}>
                      Misrepresentation of the purpose of funds raised.
                    </li>
                    <li style={{ color: "var(--tg-paragraph-color)" }}>
                      Activities that violate the intellectual property or
                      rights of others.
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">
                    8. Decentralization and Security :
                  </div>
                  <p className="mb-0">
                    As a decentralized platform, MiraiDao operates without
                    centralized oversight of user transactions. Users are
                    encouraged to take appropriate security measures to protect
                    their funds and information.
                  </p>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">
                    9. Limitation of Liability :
                  </div>
                  <span className="fs-6 text-primary3">
                    MiraiDao is not liable for any loss, damage, or claims
                    arising from the use of the platform, including but not
                    limited to :-
                  </span>
                  <ul className="mb-1">
                    <li style={{ color: "var(--tg-paragraph-color)" }}>
                      {" "}
                      Misuse of funds by campaign creators.
                    </li>
                    <li style={{ color: "var(--tg-paragraph-color)" }}>
                      Failure of a campaign to meet its goals.
                    </li>
                    <li style={{ color: "var(--tg-paragraph-color)" }}>
                      Technical issues, delays, or interruptions in platform
                      operations.
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">
                    10. Amendments :
                  </div>
                  <p className="mb-0">
                    MiraiDao reserves the right to modify or update these
                    Terms of Use at any time. Users will be notified of
                    significant changes, and continued use of the platform
                    constitutes acceptance of the updated terms.
                  </p>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">
                    11. Governing Law :
                  </div>
                  <p className="mb-0">
                    These Terms of Use are governed by the laws applicable in
                    your jurisdiction unless otherwise specified.
                  </p>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">
                    12. Contact :
                  </div>
                  <p className="mb-0">
                    For any questions or concerns about these Terms of Use,
                    please contact us at support in the user panel.
                  </p>
                </li>
              </ul>
            </div>
            <div className="card-footer">
              <div className="text-end">
                <Link
                  to="/SignUp"
                  className="btn btn-lg btn-primary1-light me-2"
                >
                  Decline
                </Link>
                <Link to="/SignUp" className="btn btn-lg btn-primary">
                  Accept
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
