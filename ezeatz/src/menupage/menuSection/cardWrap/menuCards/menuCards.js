import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { sizing } from "@material-ui/system";

const useStyles = makeStyles(() => ({
  card: {
    // maxWidth: "200",
    minWidth: "500",
    border: "1px solid black"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

export default function RestCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card} width={20} onClick={props.onClick}>
      <CardHeader
        title="card title"
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
        // className={classes.media}
        // image={props.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="black" component="p">
          <div>SAMPLE CARD AAAAYYYEEEEE</div>
        </Typography>
      </CardContent>
    </Card>
  );
}
