import React from "react";
import Button from "@material-ui/core/Button";
function Subcat(props) {
  const buttonBuilder = () => {
    const buttonArray = [];
    for (const subCat of props.subCatArray) {
      buttonArray.push(
        <Button
          variant="contained"
          onClick={() => {
            props.handleButton(subCat);
          }}
        >
          {subCat}
        </Button>
      );
    }
    return buttonArray;
  };

  return <div>{buttonBuilder()}</div>;
}

export default Subcat;
