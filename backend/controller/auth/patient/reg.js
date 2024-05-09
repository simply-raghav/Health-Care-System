// Load environment variables from .env file
require("dotenv").config();

// Import necessary modules and models
const patient = require("../../../Models/patient.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pharmacy = require("../../../Models/pharmacy.model");
const lab = require("../../../Models/lab.model");
const doctor = require("../../../Models/doctor.model");
const hospital = require("../../../Models/hospital.models");

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

// Function to handle registration of a new patient
const register = async (req, resp) => {
  try {
    // Log request body
    console.log(req.body);

    // Extract required data from request body
    const {
      fstName,
      lastName,
      DOB,
      bloodGrp,
      email,
      contact,
      address,
      city,
      state,
      pincode,
      password,
    } = req.body;

    // Check if email already exists
    if (await exist(email)) {
      return resp.json({
        status: "Failure",
        message: "Patient already exists",
      });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 12);
    console.log(hashed);

    // Construct patient's full name
    let name = fstName + " " + lastName;

    // Construct patient object
    const pat = {
      name,
      DOB,
      bloodGrp,
      email,
      contact,
      address,
      city,
      state,
      pincode,
      password: hashed,
    };

    // Save new patient to database
    const newPat = new patient(pat);
    const result = await newPat.save();

    // Generate JWT token
    const token = jwt.sign(
      { email: pat.email, id: result._id, entity: "patient" },
      process.env.SECRET_KEY,
      {
        expiresIn: process.env.JWT_EXPIRES,
      }
    );

    // Set token as a cookie
    const cookieOption = {
      expiresIn: new Date(
        Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    resp.cookie("patient_registered", token, cookieOption);

    // Return success response with token and created patient
    return resp.json({
      status: "success",
      token: token,
      message: "Entry created successfully",
      result: result,
    });
  } catch (error) {
    // Return error response if an error occurs
    return resp.json({
      status: "Error",
      message: error.message,
    });
  }
};

// Export the function
module.exports = register;
