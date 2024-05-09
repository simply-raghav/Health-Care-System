// Import hospital model
const hospital = require("../../../Models/hospital.models");

// Function to get all users (hospitals)
const getusers = async (req, res) => {
  try {
    // Find all hospitals
    const result = await hospital.find();

    // Return success response with all hospitals
    return res.json({
      status: "success",
      message: "All hospitals retrieved successfully",
      result: result,
    });
  } catch (error) {
    // Return error response if an error occurs
    return res.json({
      status: "Error",
      message: error.message,
    });
  }
};

// Function to get a specific user (hospital) by ID
const getuser = async (req, res) => {
  try {
    // Find hospital by ID provided in request body
    const result = await hospital.findOne({ _id: req.body.id });
    console.log("Result: ", result);

    // Return success response with the retrieved hospital
    return res.json({
      status: "success",
      message: "Hospital data sent",
      result: result,
    });
  } catch (error) {
    // Return error response if an error occurs
    return res.json({
      status: "Error",
      message: error.message,
    });
  }
};

// Export the functions
module.exports = { getusers, getuser };
