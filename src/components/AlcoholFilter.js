import React from "react";
import "./AlcoholFilter.css";

import SliderAlcohol from "./Sliders/SliderAlcohol";

class AlcoholFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      minimumValue: "",
      maximumValue: "",
      taste: ""
    };
  }

  render() {
    return (
      <div className="AlcoholFilter">
        <SliderAlcohol />
      </div>
    );
  }
}

export default AlcoholFilter;
