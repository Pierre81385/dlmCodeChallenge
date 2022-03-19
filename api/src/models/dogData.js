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
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
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
