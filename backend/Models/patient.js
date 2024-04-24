const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const patientDetail = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const patient = new mongoose.model("patient", patientDetail);

module.exports = patient;