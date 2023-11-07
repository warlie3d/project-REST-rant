const router = require("express").Router();
const places = require("../models/places");

//route to display all places
router.get("/", async (req, res) => {
  try {
    const allPLaces = await places.find();
    res.render("places/index", { places: allPLaces });
  } catch (e) {
    console.log("error", e);
    res.status(404).render("Error 404");
  }
});

// route to create new place
router.post("/", async (req, res) => {
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
  await places.create(place);
  res.redirect("/places");
});

//route to display a form creating a new place
router.get("/new", (req, res) => {
  res.render("places/new");
});

//rout to update a place
router.put("/:id", (req, res) => {
  let index = Number(req.params.id);
  console.log(req.body);
  if (isNaN(index)) {
    res.render("Error404");
  } else if (!places[index]) {
    res.render("Error404");
  } else {
    let place = places[index];
    places[index] = { ...place, ...req.body };
    res.redirect(`/places/${index}`);
  }
});

//delete
router.delete("/:id", async (req, res) => {
  let index = req.params.id;
  // if (isNaN(index)) {
  //   res.render("Error404");
  // } else if (!places[index]) {
  //   res.render("Error404");
  // } else {
  //   places.splice(index, 1);
  // }
  await places.findByIdAndDelete(index);
  res.redirect("/places");
});

// route to display  a single place by it's id
router.get("/:id", async (req, res) => {
  //  let index = Number(req.params.id);
  // if (isNaN(index)) {
  //   res.render("error404");
  // } else if (!places[index]) {
  //   res.render("error404");
  // } else {
  try {
    let place = await places.findById(req.params.id);
    res.render("places/show", {
      place: place,
      index: req.params.id,
    });
  } catch (e) {
    console.log("error", e);
    res.render("Error404");
  }
});

//edit an existing place
router.get("/:id/edit", (req, res) => {
  // res.send('Form page for editing an existing place')
  let index = Number(req.params.id);
  if (isNaN(index)) {
    res.render("Error404");
  } else if (!places[index]) {
    res.render("Error404");
  } else {
    let place = places[req.params.id];
    res.render("places/edit", {
      place: place,
      index: index,
    });
  }
});

//routes for creating and deleting rants
router.post("/:id/rant", (req, res) => {
  res.send("Create a rant (comment) about a particular place");
});
router.delete("/:id/:rantId", (req, res) => {
  res.send("Delete a rant (comment) about a particular place");
});

module.exports = router;
