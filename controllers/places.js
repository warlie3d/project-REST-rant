const router = require("express").Router();
const places = require("../models/places.js");

router.get("/", (req, res) => {
  res.render("places/index", { places });
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

router.put("/:id", (req, res) => {
  let index = Number(req.params.id);
  if (isNaN(index)) {
    res.render("error404");
  } else if (!places[index]) {
    res.render("error404");
  } else {
    places[index] = { ...places[index], ...req.body };
  }
  res.redirect(`/places/${index}`);
});

router.delete("/:id", (req, res) => {
  let index = Number(req.params.id);
  places.splice(index, 1);
  res.redirect("/places");
});

router.get("/:id", (req, res) => {
  let index = Number(req.params.id);
  if (isNaN(index)) {
    res.render("error404");
  } else if (!places[index]) {
    res.render("error404");
  } else {
    let place = places[req.params.id];
    res.render("places/show", {
      place: place,
      index: index,
    });
  }
});

//edit
router.get("/:id/edit", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    let place = places[req.params.id];
    res.render("places/edit", {
      place: place,
      index: index,
    });
  }
});

router.post("/:id/rant", (req, res) => {
  res.send("Create a rant (comment) about a particular place");
});
router.delete("/:id/:rantId", (req, res) => {
  res.send("Delete a rant (comment) about a particular place");
});

module.exports = router;
