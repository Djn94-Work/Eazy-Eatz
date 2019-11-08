import React from "react";

function AddressForm(props) {
  return (
    <input
      placeholder="Location"
      onKeyDown={event => props.handleSubmit(event.key, event.target.value)}
    ></input>
  );
}

export default AddressForm;
