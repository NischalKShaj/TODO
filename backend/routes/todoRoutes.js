const express = require("express");
const router = express.Router();
const todoController = require("../controller/todoController");

router.get("/", todoController.getTodoPage);

module.exports = router;
