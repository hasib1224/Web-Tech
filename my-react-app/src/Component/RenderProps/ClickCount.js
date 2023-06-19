
import React from "react";

export default class ClickCount extends React.Component {
  
  render() {
    const {count,increment}=this.props;

    return (
        <div>
          <button type="button" onClick={increment}>
            Clicked {count} times
          </button>
        </div>
      );
  }
}

