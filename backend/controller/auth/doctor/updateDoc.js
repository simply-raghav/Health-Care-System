// Load environment variables from .env file
require("dotenv").config();

// Import doctor model
const doctor = require("../../../Models/doctor.model");

// Function to handle updating doctor information
const update = async (req, res) => {
  try {
    // Extract updated data from request body
    const {
      name,
      email,
      contact,
      address,
      gender,
      DOB,
      license,
      profession,
      experience,
      degree,
      about_me,
      pricing,
      services,
      Specialization,
    } = req.body;

    // Construct updated doctor object
    const updatedDoc = {
      name,
      email,
      contact,
      address,
      gender,
      DOB,
      license,
      profession,
      experience,
      degree,
      about_me,
      pricing,
      services,
      Specialization,
    };

    // Update doctor information in the database
    const result = await doctor.updateOne(
      { email: email },
      { $set: updatedDoc }
    );

    // Return success response
    return res.json({
      status: "success",
      message: "Entry updated successfully",
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

module.exports = update;
