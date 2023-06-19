import React from "react";
import BoilingVerdict from "./BoilVerdict";

const tempType = {
  c: "Celcius",
  f: "Farenhit",
};

export default function TempInput({ temparature, scale, onTemparatureChange }) {
  return (
    <>
      <div>
        <fieldset>
          <legend> Enter temp in {tempType[scale]}</legend>
          <input
            type="text"
            value={temparature}
            onChange={(e) => onTemparatureChange(e, scale)}
          />
        </fieldset>
      </div>
    </>
  );
}
