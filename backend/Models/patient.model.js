const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const patientDetail = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  DOB: {
    type: Date,
    required: true,
  },
  bloodGrp: {
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
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const patient = new mongoose.model("patient", patientDetail);

module.exports = patient;