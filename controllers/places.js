const router = require("express").Router();
const places = require("..models/places.js");

router.get("/", (req, res) => {
  res.render("places/Index", { places });
});

router.post("/", (req, res) => {
  console.log(req.body);
  let place = req.body;
  if (!req.body.pic) {
    place.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    place.city = "Anytown";
  }
  if (!req.body.state) {
    place.state = "USA";
  }
  places.push(place);
  //should give path
  res.redirect("/places");
});

router.get("/new", (req, res) => {
  res.render("places/New");
});

router.delete("/:id", (req, res) => {
  let index = req.params.id;
  places.splice(index, 1);
  res.status(303).redirect("/places");
  //res.send("Delete a particular place");
});

router.get("/:id", (req, res) => {
  let place = places[req.params.id];
  res.render("places/Show", {
    place: place,
    index: req.params.id,
  });
});

router.put("/:id", (req, res) => {
  res.send("Update a particular place");
});

router.get("/:id/edit", (req, res) => {
  let place = places[req.params.id];
  res.render("places/Edit", { place });
});

router.post("/:id/rant", (req, res) => {
  //console.log(req.body);
  res.send("Create a rant/comment about a particular place");
});

router.delete("/:id/rant", (req, res) => {
  res.send("Delete a rant/comment about a particular place");
});

module.exports = router;
