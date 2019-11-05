import React from "react";

function AddressForm(props) {
  return (
    <input
      placeholder="Location"
      onSubmit={props.handleSubmit}
      onChange={event => props.handleOnChange(event.target.value)}
    ></input>
  );
}

export default AddressForm;
