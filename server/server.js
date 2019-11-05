const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/pls", function(req, res) {
  res.send("Ez-EaTZ");
});

app.listen(process.env.PORT || PORT, function() {
  console.log(`server listening on ${PORT}`);
});
