import React from "react";
import AdminNav from "./AdminNav";
import Stu1 from "../Students/Stu1.js";
import Stu2 from "../Students/Stu2.js";
import Stu3 from "../Students/Stu3.js";
import Stu4 from "../Students/Stu4.js";

export default function StuContainer() {
  return (
    <>
      {/* <AdminNav/> */}
      <a href="#" className="btn btn-primary" style={{ marginLeft: "23px" }}>
        SPL-2 Students Request
      </a>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Stu1 />
        <Stu2 />
        <Stu3 />

        {/* <Stu5 />
      <Stu6 />
      <Stu7 />
      <Stu8 /> */}
      </div><br/><br/>
      

      <a href="#" className="btn btn-primary" style={{ marginLeft: "23px" }}>
          SPL-3 Students Request
        </a>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        
        <Stu4 />
      </div>
    </>
  );
}
