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
          console.log(restaurants[0].photos);
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
              icon:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=" +
                params.maxwidth +
                "&photoreference=" +
                params.photoreference +
                "&key=" +
                key
            };

            axios
              .get(
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=393&photoreference=CmRaAAAAEJRSJA8qSkkEC9CcTceOPh8gHatu5Q9UGxnuv-Bgu0UUnzUeHvItJ0xkhbRDlRSrurKGqEC9CeI6oITtI1CTqYyi2RgVTfgbYDgmqx-Qf15yRGoPANLc4XU9MlAzKEfFEhCrri_R-DUvZfxnYb8cTnshGhQq79Vibm9fKhVjTG_XGEDGDJLzkg&key=AIzaSyCk0of6o-JuJc3PLuYzOUiXX7r3oOxG010"
              )
              .then(image =>
                console.log(image.request._redirectable._options.href)
              );
          }
          res.send(results);
        });
    });
});
app.listen(process.env.PORT || PORT, function() {
  console.log(`server listening on ${PORT}`);
});
