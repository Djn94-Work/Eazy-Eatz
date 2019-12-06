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
        {props.subCatArray[0]}
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          props.handleButton("Enchiladas");
        }}
      >
        {props.subCatArray[1]}
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          props.handleButton("Fajitas");
        }}
      >
        {props.subCatArray[2]}
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          props.handleButton("Desert");
        }}
      >
        {props.subCatArray[3]}
      </Button>
    </div>
  );
}

export default Subcat;
