import React from "react";
import RadiusSlider from "./RadiusSlider";
import "./FilterPannel.css";

function FilterPannel(props) {
  return (
    <div>
      <RadiusSlider handleSlide={props.handleSlide} radius={props.radius} />
      <div className="ButtonContainer">
        <button onClick={() => props.handleFilter("Mexican")}>Mexican</button>
        <button onClick={() => props.handleFilter("Italian")}>Italian</button>
        <button onClick={() => props.handleFilter("burger")}>Burger</button>
        <button onClick={() => props.handleFilter("Chinese")}>Chinese</button>
      </div>
    </div>
  );
}

export default FilterPannel;
