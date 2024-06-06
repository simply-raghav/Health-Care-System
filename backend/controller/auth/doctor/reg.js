
// Load environment variables from .env file
require("dotenv").config();

// Import necessary modules and models
const doctor = require("../../../Models/doctor.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const hospital = require("../../../Models/hospital.models");
const patient = require("../../../Models/patient.model");
const lab = require("../../../Models/lab.model");
const pharmacy = require("../../../Models/pharmacy.model");

// Function to check if an email already exists in any of the entities
const exist = async (email) => {
  let res;
  res = await hospital.findOne({ email: email });
  if (res) return true;
  res = await doctor.findOne({ email: email });
  if (res) return true;
  res = await patient.findOne({ email: email });
  if (res) return true;
  res = await lab.findOne({ email: email });
  if (res) return true;
  res = await pharmacy.findOne({ email: email });
  if (res) return true;
  return false;
};

// Function to handle registration of a new doctor
const register = async (req, res) => {
  try {
    // Extract required data from request body
    const {
      name,
      password,
      email,
      contact,
      address,
      gender,
      dob,
      degreeOverall,
      license,
      profession,
      experience,
    } = req.body;

    // Verify JWT token to get hospital ID
    const decoded = jwt.verify(
      req.cookies.hospital_registered,
      process.env.SECRET_KEY
    );

    // Check if email already exists
    if (await exist(email)) {
      return res.json({
        status: "Failure",
        message: "User already exists",
      });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 12);

    // Log hashed password and hospital ID
    console.log("hashed", hashed);
    console.log("Hospital ID", decoded, decoded.id);

    // Create doctor object
    const doc = {
      name,
      password: hashed,
      email,
      contact,
      address,
      gender,
      DOB: dob,
      hospital: decoded.id,
      degree: degreeOverall,
      license,
      profession,
      experience,
    };

    // Save new doctor to database
    const newDoc = new doctor(doc);
    const result = await newDoc.save();

    // Return success response
    return res.json({
      status: "success",
      message: "Entry created successfully",
      result,
    });
  } catch (error) {
    // Return error response
    return res.json({
      status: "Error",
      message: error.message,
    });
  }
};

module.exports = register;
