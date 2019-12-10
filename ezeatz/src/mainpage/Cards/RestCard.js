import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: "345",
    border: "1px solid black"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

export default function RestCard(props) {
  const classes = useStyles();

  const card = (
    <Card className={classes.card}>
      <CardHeader
        title={props.title}
        subheader={(() => {
          let resp = "";
          if (props.open) {
            resp = "OPEN";
          } else {
            resp = "CLOSED";
          }
          return resp;
        })()}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="black" component="p">
          {props.address}
        </Typography>
      </CardContent>
    </Card>
  );

  let result;

  if (props.open) {
    result = (
      <Link to="/menu" onClick={props.selectedCard} style={linkStyle}>
        {card}
      </Link>
    );
  } else {
    result = card;
  }
  return result;
}

const linkStyle = {
  textDrcoration: "none"
};
