import React from "react";
import AddressForm from "./AddressForm";
import FilterPannel from "../mainpage/FilterPannel/FilterPannel";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import "./Header.css";

function Header(props) {
  return (
    <div className="Header">
      <AddressForm
        handleSubmit={props.handleSubmit}
        handleOnChange={props.handleOnChange}
      ></AddressForm>
      <InputLabel id="filter-label">Age</InputLabel>
      <Select labelId="filter-label" id="filter" autoWidth="true">
        <FilterPannel
          handleSlide={props.handleSlide}
          handleFilter={props.handleFilter}
          radius={props.radius}
        />
      </Select>
    </div>
  );
}

export default Header;
