import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

export default function RestCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <a target="_blank" href="google.com" style={aStyle}>
        <CardHeader
          title={props.title}
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
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.address}
          </Typography>
        </CardContent>
      </a>
    </Card>
  );
}

const aStyle = {
  textDecoration: "none"
};
