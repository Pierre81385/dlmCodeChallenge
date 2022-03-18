const mongoose = require("mongoose");
const dogData = require("../models/dogData");
const dogSeed = require("./dogSeed.json");

mongoose
  .connect("mongodb://localhost:27017/doggie_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected and ready to seeeeeed");
  })
  .catch((err) => {
    console.log(err);
  });

const seedDB = async () => {
  await dogData.deleteMany({});
  await dogData.insertMany(dogSeed);
};

seedDB().then(() => {
  mongoose.connection.close();
});


