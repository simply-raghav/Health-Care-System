// this model structure is basic, 
// it should be updated according to requirements.

const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const pharmacyDetail = new mongoose.Schema({
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
});

const pharmacy = new mongoose.model("pharmacy", pharmacyDetail);

module.exports = pharmacy;