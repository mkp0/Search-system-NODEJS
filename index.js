const express = require("express");
const app = express();
const postRoute = require("./routes/post");
const mongoose = require("mongoose");
const cors = require("cors");
const keys = require("keys");

app.use(cors());
app.use(express.json());
mongoose
  .connect(keys.mongouri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((res) => {
    console.log("Connected To DB");
  })
  .catch((err) => {
    console.log({ err: err });
  });

app.use("/post", postRoute);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(5001, () => {
  console.log("Server is running on port " + 5001);
});
