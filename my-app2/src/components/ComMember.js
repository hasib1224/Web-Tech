import React, { useState, useEffect } from "react";
import AdminNav from "./AdminNav";
import ReqStu from "./ReqStu";
import StuProfile from "./StuProfile";
import classes from "../styles/ComMember.css";
import img from "../Assets/images/Rajusir.jpg";

function MyTable1() {

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
    <AdminNav/>
    
   

<div className="card" style={{ width: "1450px", margin: "10px" }}>
 
  <img
    className="card-img-top"
    style={{ margin: "20px" }}
    src={img}
    alt="Card image cap"
  />
  <div className="card-body">
    <h4>Dr. B M Mainul Hossain</h4>
    <h5>Professor</h5>
    <h6>IIT,DU</h6>
     <br />
  </div>
</div>
<br />
<br />


{/* <div className="postNotice" style={{ marginLeft: "10px" }}>
  <input
    type="text"
    placeholder="Write Notice...."
    value={inputText}
    onChange={handleInputChange}
  />
  <br />
  <br /> */}

  {/* <button className="btn btn-primary" onClick={handlePostNotice}>
    {" "}
    Post Notice{" "}
  </button> */}
{/* </div> */}
        <ReqStu/>

      
    </>
  );
}
export default MyTable1;
