import React from "react";
import RadiusSlider from "./RadiusSlider";

function FilterPannel(props) {
  return <RadiusSlider handleSlide={props.handleSlide} radius={props.radius} />;
}

export default FilterPannel;
