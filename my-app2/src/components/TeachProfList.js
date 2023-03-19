import React from "react";
import StuNav from "./StuNav";
import TeachersProfileGrid1 from '../Teachers/Teacher1.js';
import TeachersProfileGrid2 from '../Teachers/Teacher2.js';
import TeachersProfileGrid3 from '../Teachers/Teacher3.js';
import TeachersProfileGrid4 from '../Teachers/Teacher4.js';
import TeachersProfileGrid6 from '../Teachers/Teacher6.js';
import TeachersProfileGrid7 from '../Teachers/Teacher7.js';
import TeachersProfileGrid8 from '../Teachers/Teacher8.js';
import TeachersProfileGrid5 from '../Teachers/Teacher5.js';
    
 

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
      <TeachersProfileGrid1 />
      <TeachersProfileGrid2 />
      <TeachersProfileGrid3 />
      <TeachersProfileGrid4 />
      <TeachersProfileGrid5 />
      <TeachersProfileGrid6 />
      <TeachersProfileGrid7 />
      <TeachersProfileGrid8 />
      {/* Add more instances of TeachersProfileGrid component */}
    </div>
    </>
  );
}

      
     
