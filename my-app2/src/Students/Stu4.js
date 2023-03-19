import React from "react";
import icon from "../Assets/images/sch-icon.png";
import img from "../Assets/images/blank.png";

export default function StuProfileGrid() {
  return (
    <>
      <div class="card" style={{ width: "18rem", margin: "10px" }}>
        <img
          class="card-img-top"
          style={{ margin: "20px" }}
          src={img}
          alt="Card image cap"
        />
        <div class="card-body">
        
          <h5>Saad Noor</h5>
          <h5>Batch: 11</h5>
          <p class="card-text">Intersted to work in AI related project</p>
          <br />
         
          &nbsp; &nbsp; &nbsp;
          <button className="btn btn-primary">Accept</button> &nbsp;
          <button className="btn btn-primary">Reject</button>
        </div>
      </div>
    </>
  );
}
