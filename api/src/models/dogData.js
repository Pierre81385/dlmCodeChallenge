const mongoose = require("mongoose");

const dogSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
});

var dogData = mongoose.model("dogData", dogSchema);
module.exports = dogData;
