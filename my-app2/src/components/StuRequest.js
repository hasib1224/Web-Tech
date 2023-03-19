import React from "react";
import classes from "../styles/StuRequest.module.css";
import blank from "../Assets/images/blank.png";

function StuRequest(props) {
  const { text } = props;

  return (
    <>
      <div  className={classes.req}>
        <img src={blank}/>
        <h1>{props.text}</h1>
        <button>Request</button>
        <button>Cancel</button>

      </div>
    </>
  );
}

export default StuRequest;
