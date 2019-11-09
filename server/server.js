const axios = require("axios");
let keyword = "burger";
let address = "403 commons trail ln huffman tx";
let key = "AIzaSyCB_pxu8oBdjMN9fP_KgnPaMqTwYw0qPFs";
let radius = 2000;

const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/pls", function(req, res) {
  res.send("Ez-EaTZ");
});

axios
  .get(`https://maps.googleapis.com/maps/api/geocode/json?`, {
    params: {
      address: address,
      key: key
    }
  })
  .then(locations => {
    const { lat, lng } = locations.data.results[0].geometry.location;
    console.log("lat: " + lat + " lng: " + lng);
    axios
      .get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?", {
        params: {
          location: lat + "," + lng,
          radius: radius,
          keyword: keyword,
          key: key
        }
      })
      .then(restaurants =>
        app.get("/search", (req, res) => {
          res.send(restaurants.data.results);
        })
      );
  });
//console.log(ans);
app.listen(process.env.PORT || PORT, function() {
  console.log(`server listening on ${PORT}`);
});
