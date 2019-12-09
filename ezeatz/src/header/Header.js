import React from "react";
import AddressForm from "./AddressForm";
import FilterPannel from "./FilterPannel/FilterPannel";
import Select from "@material-ui/core/Select";
import NameTag from "./NameTag";
import "./Header.css";
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

//import { InputLabel, TextField } from "@material-ui/core";

function Header(props) {
  return (
    <div className="Header">
      <div className="addressAndFilter">
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
      <NameTag />
      <IconContext.Provider
        value={{
          color: "black",
          className: "global-class-name",
          size: "3em"
        }}
      >
        <div>
          <FaUserCircle className="userIcon" />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Header;
