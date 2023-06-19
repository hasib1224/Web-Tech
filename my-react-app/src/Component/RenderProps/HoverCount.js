import React from "react";

export default class hoverCount extends React.Component {
  render() {
    const { count, increment } = this.props;

    return (
      <div>
        <h1 onMouseOver={increment}>Clicked {count} times</h1>
      </div>
    );
  }
}
