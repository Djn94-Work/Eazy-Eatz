import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import React from "react";

function RadiusSlider(props) {
  return (
    <div style={{ width: "100%" }}>
      <Typography id="continuous-slider" gutterBottom>
        {"Radius:" + props.radius + " miles"}
      </Typography>
      <Slider
        max={20}
        onChange={(event, value) => {
          props.handleSlide(value);
        }}
        aria-labelledby="continuous-slider"
      />
    </div>
  );
}

export default RadiusSlider;
