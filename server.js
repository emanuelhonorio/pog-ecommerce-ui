const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist/pog-ecommerce-ui"));

app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/dist/pog-ecommerce-ui/index.html");
});

app.listen(process.env.PORT || 4200);
