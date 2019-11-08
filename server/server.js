/*const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/pls", function(req, res) {
  res.send("Ez-EaTZ");
});

app.listen(process.env.PORT || PORT, function() {
  console.log(`server listening on ${PORT}`);
});*/

const axios = require("axios");

axios
  .get(`https://maps.googleapis.com/maps/api/geocode/json?`, {
    params: {
      address: "2202 Signal hill dr pearland tx",
      key: "AIzaSyCB_pxu8oBdjMN9fP_KgnPaMqTwYw0qPFs"
    }
  })
  .then(locations => {
    const { lat, lng } = locations.data.results[0].geometry.location;
    console.log("lat: " + lat + " lng: " + lng);
    axios
      .get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?", {
        params: {
          location: lat + "," + lng,
          radius: 4444,
          keyword: "burger",
          key: "AIzaSyCB_pxu8oBdjMN9fP_KgnPaMqTwYw0qPFs"
        }
      })
      .then(restaurants => console.log(restaurants.data.results));
  });
//console.log(ans);
