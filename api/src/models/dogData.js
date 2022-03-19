const mongoose = require("mongoose");

const dogSchema = mongoose.Schema({
  name: {
    type: String,
    validate: /[a-z]/,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  age: {
    type: String,
    enum: ["puppy", "adult", "senior"],
    required: true,
  },
  size: {
    type: String,
    enum: ["small", "medium", "large"],
    required: true,
  },
  color: {
    type: String,
    validate: /[a-z]/,
    required: true,
  },
  breed: {
    type: String,
    validate: /[a-z]/,
    required: true,
  },
});

var dogData = mongoose.model("dogData", dogSchema);
module.exports = dogData;
