const mongoose = require("mongoose");

const todo = new mongoose.Schema(
  {
    task: {
      type: [],
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("TODO", todo);
