import React from 'react';
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import iit from "../Assets/images/IIT.jpg";
import classes from "../styles/HomePage.module.css";
import Typed from "typed.js";

export default function Homepage() {
  // const nav=useNavigate();
  // const findLogIn=()=>{
  //     nav('/login');
  //   }

  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Welcome to SPL Management!!"],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
    <div>
        <span ref={el} />
        

      </div>
    
    <div className={classes.homePic}>
    {/* <span ref={el} /> */}
      
      </div>
      
      
      </>
  );
}
