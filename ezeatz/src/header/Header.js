import React from "react";
import AddressForm from "./AddressForm";
import FilterPannel from "./FilterPannel/FilterPannel";
import Select from "@material-ui/core/Select";
import "./Header.css";
//import { InputLabel, TextField } from "@material-ui/core";

function Header(props) {
  return (
    <div className="Header">
      <AddressForm
        className="searchBar"
        handleSubmit={props.handleSubmit}
      ></AddressForm>
      <Select labelId="filter-label" id="filter" autoWidth={true}>
        <FilterPannel
          handleSlide={props.handleSlide}
          handleFilter={props.handleFilter}
          radius={props.radius}
        ></FilterPannel>
      </Select>
    </div>
  );
}

export default Header;
