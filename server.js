const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist/ecommerce-ui"));

app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/dist/ecommerce-ui/index.html");
});

app.listen(process.env.PORT || 4200, () => {
  console.log("app is running at port " + 4200);
});
