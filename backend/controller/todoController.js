const express = require("express");

const route = express.Router();

// controller for getting the initital page
module.exports.getTodoPage = (req, res) => {
  res.json("initial get request");
};
