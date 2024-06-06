// Import patient model
const patient = require("../../../Models/patient.model");

// Function to get all patients
const getusers = async (req, res) => {
  try {
    // Find all patients
    const result = await patient.find();

    // Return success response with all patients
    return res.json({
      status: "success",
      message: "All patients retrieved successfully",
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

// Function to get a specific patient by ID
const getuser = async (req, res) => {
  try {
    // Find patient by ID provided in request body
    const result = await patient.findOne({ _id: req.body.id });
    console.log("Result: ", result);

    // Return success response with the retrieved patient
    return res.json({
      status: "success",
      message: "Patient data sent",
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
