require("dotenv").config();
const express = require("express");

const app = express();
const mongoose = require("mongoose");

const methodOverride = require("method-override");
app.use(express.static("public"));

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

//middleware
app.use(methodOverride("_method"));
app.set("view engine", "jsx");
app.set("views", __dirname + "/views");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({ extended: true }));

//controller
app.use("/places", require("./controllers/places"));
//app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  // res.send('Home page')
  res.render("Home");
});
app.get("*", (req, res) => {
  // res.status(404).send(`<h1>404 page</h1>`)
  res.render("Error404");
});
//create server
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});

//connect to db

const db = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDb");
  } catch (e) {
    console.log("Not connected to MongoDb", e);
  }
};
db();
