// Load environment variables from .env file
require("dotenv").config();

// Import necessary modules and models
const jwt = require("jsonwebtoken");
const doctor = require("../../../Models/doctor.model");

// Function to handle updating doctor timings
const updateTimings = async (req, res) => {
  try {
    // Log request body
    console.log(req.body);

    // Verify JWT token to get doctor ID
    const decoded = jwt.verify(
      req.cookies.doctor_registered,
      process.env.SECRET_KEY
    );
    console.log(decoded);

    // Extract slot_interval and timings from request body
    const { slot_interval, timings } = req.body;
    console.log(slot_interval, timings);

    // Construct updated doctor object with $set operator for targeted updates
    const updatedDoc = { $set: { slot_interval, timings } };

    // Update doctor timings in the database
    const result = await doctor.updateOne({ _id: decoded.id }, updatedDoc);

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

module.exports = updateTimings;
