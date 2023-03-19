import classes from "../styles/Nav.module.css";
import Notice from "./Modal";
import { useState } from "react";
import React from "react";

export default function StuNav(props) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleSave = () => {
    // Save changes logic here
    handleClose();
  };

  return (
    <>
      <div className={classes.nav1}>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              SPL Management
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                {/* Modal Notice */}
                
                <li class="nav-item">
                  {/* <a class="nav-link active" aria-current="page" href="/notice">
                    Notice
                  </a> */}

                  <div>
                    <button className="btn btn-primary" onClick={handleShow}>
                      New Notice
                    </button>
                    <Notice
                      show={showModal}
                      handleClose={handleClose}
                      handleSave={handleSave}
                      title="Notification"
                    >
                      <p>
                        On 20th March and 21st March, SPL-2 Presentation will be
                        occured.Be Preapared .{" "}
                      </p>
                    </Notice>
                  </div>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/teachInfo"
                  >
                    Teacher's Profile
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Settings
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/editInfo">
                        Edit Information
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Change Password
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li></li>
                  </ul>
                </li>

                <a href="/" className="btn btn-primary">
                  Log Out
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
