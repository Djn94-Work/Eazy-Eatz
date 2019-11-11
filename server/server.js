require("dotenv").config();

var fs = require("fs");

const axios = require("axios");

const PORT = process.env.PORT || 8080;

const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let keyword = "burger";
let key = process.env.GMAPS_KEY;
let radius = 2000;

app.get("/pls", function(req, res) {
  res.send("Ez-EaTZ");
});

app.get("/search", (req, res) => {
  console.log(req.query.address);
  axios
    .get(`https://maps.googleapis.com/maps/api/geocode/json?`, {
      params: {
        address: req.query.address,
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
        .then(restaurants => {
          let results = {};
          restaurants = restaurants.data.results;
          for (const entry in restaurants) {
            results[entry] = {
              name: restaurants[entry].name,
              address: restaurants[entry].vicinity,
              open: restaurants[entry].opening_hours.open_now,
              rating: restaurants[entry].rating,
              user_ratings_total: restaurants[entry].user_ratings_total,
              icon: restaurants[entry].icon
            };
          }
          fs.writeFile("results.json", JSON.stringify(results), () => {});
          res.send(results);
        });
    });
});
app.listen(process.env.PORT || PORT, function() {
  console.log(`server listening on ${PORT}`);
});
