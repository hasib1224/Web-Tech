import React from "react";
import StuNav from "./StuNav";
import TeachersProfileGrid from './TeachProfile';
    
 

export default function TeachersProfileGridContainer() {
  return (
    <>
   
    <StuNav/>
    
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      <TeachersProfileGrid />
      <TeachersProfileGrid />
      <TeachersProfileGrid />
      <TeachersProfileGrid />
      <TeachersProfileGrid />
      {/* Add more instances of TeachersProfileGrid component */}
    </div>
    </>
  );
}

      
     
