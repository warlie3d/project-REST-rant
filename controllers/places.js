const router = require("express").Router();
const places = require("../models/places");
const comments = require("../models/comments");

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
  try {
    await places.create(place);
    res.redirect("/places");
  } catch (e) {
    // console.log("err", err);
    if (e && e.name == "ValidationError") {
      let message = "Validation Error: ";
      //Todo: Find all validation errors
      for (let field in e.errors) {
        message += `${field} was ${e.errors[field].value}.`;
        message += `${e.errors[field].message}`;
        console.log("Validation error message", message);
      }
      res.render("places/new", { message });
    } else {
      console.log("Err", e);
      res.render("error404", e);
    }
  }
});

//route to display a form creating a new place
router.get("/new", (req, res) => {
  res.render("places/new");
});

//rout to update a place
router.put("/:id", async (req, res) => {
  //   let index = Number(req.params.id);
  //   console.log(req.body);
  //   if (isNaN(index)) {
  //     res.render("Error404");
  //   } else if (!places[index]) {
  //     res.render("Error404");
  //   } else {
  //     let place = places[index];
  //     places[index] = { ...place, ...req.body };
  //     res.redirect(`/places/${index}`);
  //   }
  // });
  try {
    let index = req.params.id;
    console.log(req.body);
    await places.findByIdAndUpdate(index, req.body, { new: true });
    res.redirect(`/places/${index}`);
  } catch (e) {
    console.log("Err", e);
    res.render("Error404");
  }
});

//delete
router.delete("/:id", async (req, res) => {
  console.log("inside delete route", req.params.id);
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

//edit an existing place
router.get("/:id/edit", async (req, res) => {
  // res.send('Form page for editing an existing place')
  let index = req.params.id;
  // if (isNaN(index)) {
  //   res.render("Error404");
  // } else if (!places[index]) {
  //   res.render("Error404");
  // }
  try {
    let place = await places.findById[req.params.id];
    res.render("places/edit", {
      place: place,
      index: index,
    });
  } catch (e) {
    console.log("Err", e);
    res.render("Error404");
  }
});

// route to display  a single place by it's id
router.get("/:id", async (req, res) => {
  let index = req.params.id;
  //  let index = Number(req.params.id);
  // if (isNaN(index)) {
  //   res.render("error404");
  // } else if (!places[index]) {
  //   res.render("error404");
  // } else {
  try {
    let place = await places.findById(index).populate("comments");
    //console.log("comments", place.comments);
    res.render("places/show", {
      place: place,
      index: index,
    });
  } catch (e) {
    console.log("error", e);
    res.render("Error404");
  }
});

//comments
router.post("/:id/comments", async (req, res) => {
  // console.log('req ',req.body.content);
  let index = req.params.id;
  let place = await places.findById(index);
  if (req.body.rant) {
    req.body.rant = true;
  } else {
    req.body.rant = false;
  }
  let comment = await comments.create(req.body);
  // console.log('new comment', comment.id);
  place.comments.push(comment.id);
  place.save();
  // res.send('new comment added', req.body)
  res.redirect(`/places/${index}`);
});

//routes for creating and deleting rants
router.post("/:id/rant", (req, res) => {
  res.send("Create a rant (comment) about a particular place");
});
router.delete("/:id/:rantId", (req, res) => {
  res.send("Delete a rant (comment) about a particular place");
});

module.exports = router;
