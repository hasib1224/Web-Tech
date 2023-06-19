import React from "react";

export default class ClickCount extends React.Component {
  state = {
    count: 0,
  };

  countChange = () => {
    this.setState((prevStat) => ({ count: prevStat.count + 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <button type="button" onClick={this.countChange}>
          Clicked {count} times
        </button>
      </div>
    );
  }
}
