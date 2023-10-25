require("dotenv").config();
const express = require("express");
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//controller
app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.render("home");
});

//incase you put another route it gives a 404
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT);
