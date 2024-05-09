// Load environment variables from .env file
require("dotenv").config();

// Import necessary models and modules
const doctor = require("../../Models/doctor.model");
const patient = require("../../Models/patient.model");
const hospital = require("../../Models/hospital.models");
const lab = require("../../Models/lab.model");
const pharmacy = require("../../Models/pharmacy.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Function to check if a doctor is registered with the given email
const login_doctor = async (email) => {
  try {
    let data = await doctor.findOne({ email: email });
    return data !== null;
  } catch (error) {
    return false;
  }
};

// Function to check if a patient is registered with the given email
const login_patient = async (email) => {
  try {
    const data = await patient.findOne({ email: email });
    return data !== null;
  } catch (error) {
    return false;
  }
};

// Function to check if a hospital is registered with the given email
const login_hospital = async (email) => {
  try {
    const data = await hospital.findOne({ email: email });
    return data !== null;
  } catch (error) {
    return false;
  }
};

// Function to check if a lab is registered with the given email
const login_lab = async (email) => {
  try {
    const data = await lab.findOne({ email: email });
    return data !== null;
  } catch (error) {
    return false;
  }
};

// Function to check if a pharmacy is registered with the given email
const login_pharmacy = async (email) => {
  try {
    const data = await pharmacy.findOne({ email: email });
    return data !== null;
  } catch (error) {
    return false;
  }
};

// Function to handle user login
const login = async (req, res) => {
  try {
    // Extract email and password from request body
    const { email, pass } = req.body;

    // Determine the type of entity (doctor, patient, hospital, lab, pharmacy) based on email
    let entity;
    let data;
    if (await login_patient(email)) {
      entity = "patient";
      data = await patient.findOne({ email: email });
    } else if (await login_hospital(email)) {
      entity = "hospital";
      data = await hospital.findOne({ email: email });
    } else if (await login_doctor(email)) {
      entity = "doctor";
      data = await doctor.findOne({ email: email });
    } else if (await login_lab(email)) {
      entity = "lab";
      data = await lab.findOne({ email: email });
    } else if (await login_pharmacy(email)) {
      entity = "pharmacy";
      data = await pharmacy.findOne({ email: email });
    } else {
      return res.json({
        status: "error",
        message: "User Not Registered",
      });
    }

    // Compare password
    const resp = await bcrypt.compare(pass, data.password);
    if (resp) {
      // Generate JWT token
      const token = jwt.sign(
        { email: data.email, id: data._id, entity: entity },
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
      res.entity = entity;
      res.cookie(entity + "_registered", token, cookieOption);

      // Return success response with token
      return res.json({
        status: "Success",
        token: token,
        message: "User Verified, Successful Login",
      });
    } else {
      // Return error response if password doesn't match
      return res.json({
        status: "Error",
        message: "Password Doesn't Match",
      });
    }
  } catch (error) {
    // Return error response if an error occurs
    return res.json({
      status: "Error",
      message: error.message,
    });
  }
};

// Export the function
module.exports = login;
