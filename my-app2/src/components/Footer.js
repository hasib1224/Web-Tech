import React from "react";
import classes from "../styles/Footer.module.css";
import itlogo from "../Assets/images/IIT-logo.png";
function Footer() {
  return (
    <footer className="bg-dark text-light mt-auto py-3">
      <div className={classes.container}>
        <div className="row">
          <div className="col-md-4">
            <a href="http://www.iit.du.ac.bd/" target="_blank">
              <img src={itlogo} />
            </a>

            <h5>About IIT</h5>
            <p>
              Institute of Information Technology
              <br />
              University of Dhaka
            </p>
          </div>

          {/* <div className="col-md-4">
            <h5>Contact Us</h5>
            <div className="d-flex justify-content-around">
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
          {/* <div className="col-md-4">
            <h5>Find Us</h5>
            <p>
              Dr. Qudrat-E-Khuda Road
              <br />
              Dhaka 1205
            </p>
          </div> */}
        </div>
      </div>
      {/* <div className="container text-center">
        <span className="text-muted">&copy; 2023 My Organization</span>
      </div> */}
    </footer>
  );
}

export default Footer;
