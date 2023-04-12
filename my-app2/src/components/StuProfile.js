import React from "react";
import StuNav from "./StuNav";
import blank from "../Assets/images/blank.png";
import icon from "../Assets/images/sch-icon.png";
import classNamees from "../styles/StuProfile.module.css";
import Notice from "./Modal";
import { useState } from "react";

export default function TeachersProfileGrid() {


  return (
    <>
      <StuNav />

      

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
          <h4>Abir Adnan</h4>
          <h5>Roll: 1334</h5>
          <h5>Email: abir123@gmail.com</h5>
          <p className="card-text">Interested to implement Web Application in SPL-2</p>
          <br />
        </div>
      </div>
     

      
    </>
  );
}
