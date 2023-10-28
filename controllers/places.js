const router = require("express").Router();
let places = [
  {
    name: "H-Thai-ML",
    city: "Seattle",
    state: "WA",
    cuisines: "Thai, Pan-Asian",
    pic: "http://placekitten.com/250/250",
  },
  {
    name: "Coding Cat Cafe",
    city: "Phoenix",
    state: "AZ",
    cuisines: "Coffee, Bakery",
    pic: "http://placekitten.com/250/250",
  },
];
router.get("/new", (req, res) => {
  res.render("places/New");
});

router.get("/:id", (req, res) => {
  let place = places[req.params.id];
  res.render("places/Show", { place });
});

router.put("/:id", (req, res) => {
  res.send("Update a particular place");
});

router.delete("/:id", (req, res) => {
  res.send("Delete a particular place");
});

router.get("/:id/edit", (req, res) => {
  let place = places[req.params.id];
  res.render("places/Edit", { place });
});

router.post("/:id/rant", (req, res) => {
  console.log(req.body);
  res.send("Create a rant/comment about a particular place");
});

router.delete("/:id/rant", (req, res) => {
  res.send("Delete a rant/comment about a particular place");
});

router.get("/", (req, res) => {
  res.render("places/Index", { places });
});

router.post("/", (req, res) => {
  res.send("Create new place");
});

module.exports = router;
