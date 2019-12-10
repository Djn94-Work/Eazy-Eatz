import React from "react";
import "./AddressForm.css";

import { useHistory } from "react-router-dom";

function AddressForm(props) {
  const history = useHistory();

  return (
    <input
      className="inputBar"
      placeholder="Location"
      onKeyDown={event => {
        props.handleSubmit(event.key, event.target.value, () => {
          history.push("/");
        });
      }}
    ></input>
  );
}

export default AddressForm;
