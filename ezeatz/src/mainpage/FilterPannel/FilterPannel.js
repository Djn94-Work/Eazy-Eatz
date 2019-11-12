import React from "react";
import RadiusSlider from "./RadiusSlider";

function FilterPannel(props) {
  return (
    <div>
      <RadiusSlider handleSlide={props.handleSlide} radius={props.radius} />
    </div>
  );
}

export default FilterPannel;
