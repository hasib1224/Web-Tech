

import React from "react";
import icon from "../Assets/images/sch-icon.png";
import img from "../Assets/images/blank.png";

export default function StuProfileGrid() {
  return (
    <>
      <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <h4 className="card-title" style={{textAlign:"center", marginTop:"10px"}}>Team 3</h4>
        <div className="card-img-container">
          <img
            className="card-img-left"
            src={img}
            alt="Card image cap"
          />
          <img
            className="card-img-right"
            src={img}
            alt="Card image cap"
          />
        </div>
        <div className="card-body">
         
          <h5>Md Sifat  & <br/>Tasnia Esha</h5>
          <h5>Batch: 12</h5>
          <p className="card-text">Interested to work in developing Android application</p>
          <br />
         
          &nbsp; &nbsp; &nbsp;
          <button className="btn btn-primary">Accept</button> &nbsp;
          <button className="btn btn-primary">Reject</button>
        </div>
      </div>
      <style jsx>{`
        .card-img-container {
          display: flex;
          justify-content: space-between;
        }
        
        .card-img-left {
            width: 18rem;
          height: 5rem;
          margin: 20px;
        }
        
        .card-img-right {
            width: 18rem;
            height: 5rem;
          margin: 20px;
        }
      `}</style>
    </>
  );
}
