import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import "./menuCards.css";

export default function MenuCard(props) {
  console.log("MENU CARD PROPS");
  console.log(props);
  const card = (
    <Card className="card" width={20}>
      <CardHeader
        title={props.menuItem}
        subheader={() => {
          let resp = "";
          if (props.open) {
            resp = "OPEN";
          } else {
            resp = "CLOSE";
          }
          return resp;
        }}
      />
      <CardContent>
        <div>{props.price}</div>
        <div>{props.description}</div>
      </CardContent>
    </Card>
  );
  return (
    <div className="cardHover" onClick={() => props.onClick(card, props.price)}>
      {card}
    </div>
  );
}
