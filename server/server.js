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
            radius: parseInt(req.query.radius) * 1609.344, //converts the miles to meters
            keyword: keyword,
            key: key
          }
        })
        .then(restaurants => {
          let results = {};
          restaurants = restaurants.data.results;
          console.log(restaurants);
          for (const entry in restaurants) {
            let params = {
              maxwidth: restaurants[entry].photos[0].width,
              photoreference: restaurants[entry].photos[0].photo_reference,
              key: key
            };

            results[entry] = {
              name: restaurants[entry].name,
              address: restaurants[entry].vicinity,
              open: restaurants[entry].opening_hours.open_now,
              rating: restaurants[entry].rating,
              user_ratings_total: restaurants[entry].user_ratings_total,
              // new Image().src(
              icon:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=" +
                params.maxwidth +
                "&photoreference=" +
                params.photoreference +
                "&key=" +
                key
              //)
            };
          }
          //fs.writeFile("results.json", JSON.stringify(results), () => {});
          res.send(results);
        });
    });
});
app.listen(process.env.PORT || PORT, function() {
  console.log(`server listening on ${PORT}`);
});
