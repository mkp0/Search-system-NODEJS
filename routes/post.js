const express = require("express");
const router = express.Router();
const User = require("../models/post");

router.get("/", (req, res) => {
  res.send("Hello world we are in post route");
});

router.post("/", (req, res) => {
  const newUser = User(req.body);

  newUser
    .save()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      res.json({ err });
    });
});

router.post("/alldata", (req, res) => {
  User.find({ name: { $regex: req.body.name, $options: "i" } })
    .limit(4)
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      res.json({ err: err });
    });
});

module.exports = router;
