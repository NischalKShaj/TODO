const express = require("express");
const todoRouter = require("./routes/todoRoutes.js");
const mongoose = require("./config/config.js");
require("dotenv").config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", todoRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
