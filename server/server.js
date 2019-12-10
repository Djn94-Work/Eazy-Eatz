require("dotenv").config();

var fs = require("fs");

const axios = require("axios");

const PORT = 8080;
const mysql = require("mysql");

const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let key = process.env.GMAPS_KEY;

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
          let results = [];
          restaurants = restaurants.data.results;
          let promises = [];
          console.log(restaurants[0].opening_hours.open_now);
          for (const entry in restaurants) {
            if (
              restaurants[entry].types.includes("restaurant") ||
              restaurants[entry].types.includes("food")
            ) {
              results.push({
                name: restaurants[entry].name,
                address: restaurants[entry].vicinity,
                rating: restaurants[entry].rating,
                user_ratings_total: restaurants[entry].user_ratings_total,
                open: restaurants[entry].opening_hours.open_now,
                icon: ""
              });
              if (restaurants[entry].photos) {
                promises.push(
                  axios.get(
                    "https://maps.googleapis.com/maps/api/place/photo?",
                    {
                      params: {
                        maxwidth: restaurants[entry].photos[0].width,
                        photoreference:
                          restaurants[entry].photos[0].photo_reference,
                        key: key
                      }
                    }
                  )
                );
              } else {
                promises.push(setTimeout(() => null, 0));
              }
            }
          }
          Promise.all(promises)
            .then(images => {
              for (let i = 0; i < images.length; i++) {
                if (images[i].request)
                  results[i.toString()].icon =
                    images[i].request._redirectable._options.href;
              }
              res.send(results);
              console.log("Restaurants Sent");
            })
            .catch(e => console.log(e));
        });
    });
});

app.get("/menu", (req, res) => {
  let cuisine = req.query.cuisine[0].toUpperCase() + req.query.cuisine.slice(1);
  console.log(cuisine);
  let connection;
  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      connectionLimit: 10,
      host: "remotemysql.com",
      port: 3306,
      user: "FvOErvgsR2",
      password: process.env.DB_PASSWORD,
      database: "FvOErvgsR2"
    });
  }
  connection.connect(function(err) {
    if (err) throw err;
    connection.query(
      "SELECT * FROM fakemenu WHERE cuisine='" + cuisine + "'",
      function(err, result, fields) {
        if (err) console.error(err);
        console.log(result);
        res.send(result);
      }
    );
    connection.end();
  });
});

app.listen(process.env.PORT || PORT, function() {
  console.log(`server listening on ${PORT}`);
});
