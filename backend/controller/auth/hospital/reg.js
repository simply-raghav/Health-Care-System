// Load environment variables from .env file
require("dotenv").config();

// Import necessary modules and models
const hospital = require("../../../Models/hospital.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const doctor = require("../../../Models/doctor.model");
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

// Function to handle registration of a new hospital
const register = async (req, resp) => {
  try {
    // Log request body
    console.log(req.body);

    // Extract required data from request body
    const {
      name,
      address,
      email,
      contact,
      registration_number,
      owner_name,
      license_number,
      password,
    } = req.body;

    // Check if email already exists
    if (await exist(email)) {
      return resp.json({
        status: "Failure",
        message: "User already exists",
      });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 12);
    console.log(hashed);

    // Construct hospital object
    const hos = {
      name,
      address,
      email,
      contact,
      registration_number,
      owner_name,
      license_number,
      password: hashed,
    };

    // Save new hospital to database
    const newHos = new hospital(hos);
    const result = await newHos.save();

    // Generate JWT token
    const token = jwt.sign(
      { email: hos.email, id: result._id, entity: "hospital" },
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
    resp.cookie("hospital_registered", token, cookieOption);

    // Return success response with token and created hospital
    return resp.json({
      status: "success",
      token: token,
      message: "Entry created successfully",
      result,
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
