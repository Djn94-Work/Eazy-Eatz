import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function MenuCard(props) {
  console.log("MENU CARD PROPS");
  console.log(props);
  return (
    <Card className="card" width={20} onClick={props.onClick}>
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
        <Typography variant="body2" color="black" component="p">
          <div>{props.price}</div>
          <div>{props.description}</div>
        </Typography>
      </CardContent>
    </Card>
  );
}
