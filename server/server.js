require("dotenv").config();

var fs = require("fs");

const axios = require("axios");

const PORT = 8080;
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "root",
  database: "restaurant_db"
});

const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let key = process.env.GMAPS_KEY;

app.get("/pls", function(req, res) {
  res.send("Ez-EaTZ");
});

app.get("/search", (req, res) => {
  // console.log(req.query.address);
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
            keyword: req.query.filter,
            key: key
          }
        })
        .then(restaurants => {
          this.image = {};
          let results = {};
          restaurants = restaurants.data.results;
          console.log(restaurants[0]);
          let promises = [];
          for (const entry in restaurants) {
            results[entry] = {
              name: restaurants[entry].name,
              address: restaurants[entry].vicinity,
              open: restaurants[entry].opening_hours.open_now,
              rating: restaurants[entry].rating,
              user_ratings_total: restaurants[entry].user_ratings_total,
              icon: ""
            };
            promises.push(
              axios.get("https://maps.googleapis.com/maps/api/place/photo?", {
                params: {
                  maxwidth: restaurants[entry].photos[0].width,
                  photoreference: restaurants[entry].photos[0].photo_reference,
                  key: key
                }
              })
            );
          }
          Promise.all(promises)
            .then(images => {
              for (let i = 0; i < images.length; i++) {
                results[i.toString()].icon =
                  images[i].request._redirectable._options.href;
              }
              res.send(results);
            })
            .catch(e => console.log(e));
        });
    });
});

app.get("/menu", (req, res) => {
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM fakemenu WHERE subCat='Pork'", function(
      err,
      result,
      fields
    ) {
      if (err) console.error(err);
      console.log(result);
      res.send(result);
    });
  });
});

app.listen(process.env.PORT || PORT, function() {
  console.log(`server listening on ${PORT}`);
});
