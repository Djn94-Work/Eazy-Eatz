import React from "react";
import Button from "@material-ui/core/Button";
function Subcat(props) {
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          props.handleButton("Appetizers");
        }}
      >
        Appetizers
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          props.handleButton("Enchiladas");
        }}
      >
        Enchiladas
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          props.handleButton("Fajitas");
        }}
      >
        Fajitas
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          props.handleButton("Desert");
        }}
      >
        Desert
      </Button>
    </div>
  );
}

export default Subcat;
