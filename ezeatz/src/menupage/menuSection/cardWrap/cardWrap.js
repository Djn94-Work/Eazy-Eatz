import React from "react";
import MenuCard from "./menuCards/menuCards";
import "./cardWrap.css";
function CardWrap(props) {
  return (
    <div className="shortCard">
      <MenuCard></MenuCard>
      <MenuCard></MenuCard>
      <MenuCard></MenuCard>
    </div>
  );
}

export default CardWrap;
