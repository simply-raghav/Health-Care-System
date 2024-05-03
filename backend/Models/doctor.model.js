const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const doctorDetail = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hospital",
    required: true,
  },
  password: {
    type: String,
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
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  license: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
});

const doctor = new mongoose.model("doctor", doctorDetail);

module.exports = doctor;