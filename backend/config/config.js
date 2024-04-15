const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("database connection success");
  })
  .catch(() => {
    console.log("error while connecting the database");
  });

module.exports = mongoose;
