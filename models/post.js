const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("User", postSchema);
