import React from "react";
import { useState } from "react";
import StuNav from "./StuNav";
import blank from "../Assets/images/blank.png";
import icon from "../Assets/images/sch-icon.png";
import classNamees from "../styles/StuProfile.module.css";
import Notice from "./Modal";
import ManNav from "./ManNav";

export default function TeachersProfileGrid() {
  const [inputText, setInputText] = useState("");

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  const handlePostNotice = () => {
    // Your code to post the notice here

    // Clear the input text
    setInputText("");
  };

  return (
    <>
      <ManNav />

      <div className="card" style={{ width: "1450px", margin: "10px" }}>
        {/* <div
          className="card-header"
          style={{ textAlign: "center", fontSize: "x-large" }}
        >
          Teachers List
        </div> */}
        <img
          className="card-img-top"
          style={{ margin: "20px" }}
          src={blank}
          alt="Card image cap"
        />
        <div className="card-body">
          <h4>Moumita Asad</h4>
          <h5>Lecturer</h5>
          <h6>IIT,DU</h6>
          <br />
        </div>
      </div>
      <br />
      <br />

      <div className="postNotice" style={{ marginLeft: "10px" }}>
        <input
          type="text"
          placeholder="Write Notice...."
          value={inputText}
          onChange={handleInputChange}
        />
        <br />
        <br />

        <button className="btn btn-primary" onClick={handlePostNotice}>
          {" "}
          Post Notice{" "}
        </button>
      </div>
    </>
  );
}
