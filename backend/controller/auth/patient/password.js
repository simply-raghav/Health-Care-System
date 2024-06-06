// Import patient model and necessary modules
const patient = require("../../../Models/patient.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Function to set new password for a patient
const setPassword = async (req, res) => {
  try {
    // Verify JWT token to get patient ID
    const decoded = jwt.verify(
      req.cookies.patient_registered,
      process.env.SECRET_KEY
    );

    // Extract old_password and new_password from request body
    const { old_password, new_password } = req.body;

    // Find patient by ID
    const result = await patient.findOne({ _id: decoded.id });
    console.log("Result: ", result);

    // Compare old password with the stored password
    const resp = await bcrypt.compare(old_password, result.password);

    // If old password matches, update password with the new one
    if (resp) {
      const hashed = await bcrypt.hash(new_password, 12);
      const changedPassword = await patient.updateOne(
        { _id: decoded.id },
        { $set: { password: hashed } }
      );
    } else {
      // If old password doesn't match, return failure response
      return res.json({
        status: "failure",
        message: "Old Password Incorrect",
        result: result,
      });
    }

    // Return success response
    return res.json({
      status: "success",
      message: "Password changed successfully",
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

// Export the function
module.exports = setPassword;
