import React from "react";
import withCounter from "./WithCounter";

const hovCount =(props) =>{
    const {count,countChange}=props;

    return (
        <div>
          <h1  onMouseOver={countChange}>
            Hover {count} times
          </h1>
        </div>
      );
}

export default withCounter(hovCount);
