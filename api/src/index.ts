import express from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("../src/models");

import dogData from "./models/dogData";
var corsOptions = {
  origin: "http://localhost:3000",
};
const ObjectID = require("mongodb").ObjectID;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//database connection to mongoose server
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// connect to mongoose
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Oops!  Ya messed up somewhere.", err);
    process.exit();
  });

/**
 * Test ping, this is used by the UI to determine if they are connected properly.
 * Once you see the connected message on the UI, you can remove this if you want to.
 */

app.get("/ping", (_, res) => {
  res.send("pong");
});

app.get("/dogs", async (req, res) => {
  // fetch many entities
  try {
    const allDogs = await dogData.find();
    res.status(200).json(allDogs);
  } catch (error) {
    res.status(404).json(error);
  }
});

app.post("/dogs", async (req, res) => {
  // create a single entity
  const newDog = new dogData({
    name: req.body.name,
    age: req.body.age,
    weight: req.body.weight,
    color: req.body.color,
    breed: req.body.breed,
  });
  try {
    await newDog.save();
    res.status(201).json(newDog);
  } catch (error) {
    res.status(404).json(error);
  }
});

app.delete("/dog/:id", async (req, res) => {
  // delete a single entity
  const id = req.params.id;
  try {
    const data = await dogData.deleteOne({ _id: ObjectID(id) });
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
});
app.get("/dog/:id", async (req, res) => {
  // fetch a single entity
  const id = req.params.id;
  console.log(id);
  try {
    const data = await dogData.findById(id);
    res.status(201).json(data);
  } catch (error) {
    res.status(404).send(`<h1>Lost Doggy!</h1>`);
  }
});
