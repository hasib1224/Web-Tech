import React from "react";

export default class hoverCount extends React.Component {
  render() {
    const { count, increment,theme,switchTheme} = this.props;
    const style = theme=='dark'?{backgroundColor:'#000000',color:'#ffffff' }:null;

    return (
      <div>
        <h1 onMouseOver={increment} style={style}>Hovered {count} times</h1>
        <button type="button" onClick={switchTheme}>Change Theme</button>
      </div>
    );
  }
}
