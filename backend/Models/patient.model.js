const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const patientDetail = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email : {
    type : String, 
    required : true,
  }, 
  contact : {
    type : Number, 
    required : true,
  }
});

const patient = new mongoose.model("patient", patientDetail);

module.exports = patient;