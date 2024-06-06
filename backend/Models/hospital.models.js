// Import mongoose for creating schema and model
const mongoose = require("mongoose");

// Define schema for hospital details
const hospitalDetails = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true, 
  },
  owner_name: {
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
  registration_number: {
    type: String,
    required: true,
  },
  license_number: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create hospital model
const hospital = new mongoose.model("hospital", hospitalDetails);

// Export the hospital model
module.exports = hospital;
