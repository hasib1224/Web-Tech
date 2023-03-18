import React from "react";
import classNamees from "../styles/Footer.css";
function Footer() {
  return (
    <footer classNameName="bg-dark text-light mt-auto py-3">
      <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col-md-4">
            <h5>About Us</h5>
            <img src="organization-logo.png" alt="Organization Logo" />
            <p>
              Institute of Information Technology
              <br />
              University of Dhaka
            </p>
          </div>
          {/* <div classNameName="col-md-4">
            <h5>Contact Us</h5>
            <div classNameName="d-flex justify-content-around">
              <a href="https://www.facebook.com/">
                <img src="facebook-logo.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com/">
                <img src="twitter-logo.png" alt="Twitter" />
              </a>
              <a href="https://wa.me/">
                <img src="whatsapp-logo.png" alt="WhatsApp" />
              </a>
              <a href="tel:123456789">
                <img src="phone-logo.png" alt="Phone" />
              </a>
            </div> */}
          {/* </div> */}
          {/* <div classNameName="col-md-4">
            <h5>Find Us</h5>
            <p>
              Dr. Qudrat-E-Khuda Road
              <br />
              Dhaka 1205
            </p>
          </div> */}
        </div>
      </div>
      {/* <div classNameName="container text-center">
        <span classNameName="text-muted">&copy; 2023 My Organization</span>
      </div> */}
    </footer>

  );
}

export default Footer;
