import React from "react";
import RadiusSlider from "./RadiusSlider";
import "./FilterPannel.css";

function FilterPannel(props) {
  return (
    <div style={{ width: "20vw" }}>
      <RadiusSlider handleSlide={props.handleSlide} radius={props.radius} />
      <div className="ButtonContainer">
        <button onClick={() => props.handleFilter("mexican")}>Mexican</button>
        <button onClick={() => props.handleFilter("Italian")}>Italian</button>
        <button onClick={() => props.handleFilter("Burger")}>Burger</button>
        <button onClick={() => props.handleFilter("Chinese")}>Chinese</button>
        <button onClick={() => props.handleFilter("Thai")}>Thai</button>
        <button onClick={() => props.handleFilter("Japanese")}>Japanese</button>
        <button onClick={() => props.handleFilter("Barbecue")}>BBQ</button>
      </div>
    </div>
  );
}

export default FilterPannel;
