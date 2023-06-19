import React from "react";

export default class HoverCount extends React.Component {
  state = {
    count: 0,
  };

  countChange = () => {
    this.setState((prevStat) => ({ count: prevStat.count + 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <h1 onMouseOver={this.countChange}>
          Hoverd {count} times
      </h1>
    );
  }
}
