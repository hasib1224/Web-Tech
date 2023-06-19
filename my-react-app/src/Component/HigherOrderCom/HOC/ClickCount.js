import React from "react";
import withCounter from "./WithCounter";

const clickCount =(props) =>{
    const {count,countChange}=props;

    return (
        <div>
          <button type="button" onClick={countChange}>
            Clicked {count} times
          </button>
        </div>
      );
}

export default withCounter(clickCount);
