// module.exports = {
//   url: "mongodb://localhost:27017/doggie_db",
// };

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/doggie_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
