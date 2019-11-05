import React from "react";
import AddressForm from "./AddressForm";

function Header(props) {
  return (
    <div>
      <AddressForm
        handleSubmit={props.handleSubmit}
        handleOnChange={props.handleOnChange}
      ></AddressForm>
    </div>
  );
}

export default Header;
