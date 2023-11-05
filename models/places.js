const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
  cuisines: { type: String, required: true },
  pic: String,
  founded: Number,
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;

/* module.exports = [
  {
    name: "H-Thai-ML",
    city: "Seattle",
    state: "WA",
    cuisines: "Thai, Pan-Asian",
    pic: "/images/joshua-rawson-harris-Pq4amYMlSPM-unsplash.jpg",
    picAuthor: "Joshua Rawson-Harris",
    //authorLink: 'https://unsplash.com/@joshrh19?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
  },
  {
    name: "Coding Cat Cafe",
    city: "Phoenix",
    state: "AZ",
    cuisines: "Coffee, Bakery",
    pic: "/images/jamie-hagan-e7mg1NUk4FI-unsplash.jpg",
    picaAuthor: "Jamie Hagan",
    //authorLink:'https://unsplash.com/@dearjamie?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
  },
];
 */
