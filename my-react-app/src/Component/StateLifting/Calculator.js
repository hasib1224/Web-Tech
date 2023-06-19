import React from "react";
import BoilingVerdict from "./BoilVerdict";
import TempInput from "./TempInput";
import { convert, toCelcius, toFarenhit } from "../../Lib/Convertor.js";

export default class Calculator extends React.Component {
  state = {
    temparature: "",
    scale: "c",
  };

  handleChange = (e, scale) => {
    this.setState({
      temparature: e.target.value,
      scale: scale,
    });
  };

  render() {
    // console.log( temparature);

    const { temparature, scale } = this.state;
    const celcius =
      scale == "f" ? convert(temparature, toCelcius) : temparature;
    const farenhit =
      scale == "c" ? convert(temparature, toFarenhit) : temparature;

    //   console.log( temparature);

    return (
      <>
        <div>
          <TempInput
            scale="c"
            temparature={celcius}
            onTemparatureChange={this.handleChange}
          />
          <TempInput
            scale="f"
            temparature={farenhit}
            onTemparatureChange={this.handleChange}
          />
        </div>
        <BoilingVerdict celcius={parseFloat(celcius)} />
      </>
    );
  }
}
