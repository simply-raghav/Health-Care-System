// Import mongoose for creating schema and model
const mongoose = require("mongoose");

// Define schema for patient details
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

// Create patient model
const patient = new mongoose.model("patient", patientDetail);

// Export the patient model
module.exports = patient;
