const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const labDetail = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hospital",
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
});

const lab = new mongoose.model("lab", labDetail);

module.exports = lab;