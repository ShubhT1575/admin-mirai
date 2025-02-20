import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer mt-auto py-3 text-center">
        <div className="container">
          <span className="text-light">
            Copyright © <span id="year"></span>
            <a href="#" className="text-info fw-medium">
            TETHER OCEAN.
            </a>
            {" "}All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
