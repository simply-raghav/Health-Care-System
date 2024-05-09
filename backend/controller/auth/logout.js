// Import the jsonwebtoken module
const jwt = require("jsonwebtoken");

// Function to handle user logout
const logout = (req, res) => {
  // Check which type of user is logged in and clear the respective cookie
  if (req.cookies.doctor_registered) {
    res.clearCookie("doctor_registered");
    res.redirect("/health_care");
  } else if (req.cookies.patient_registered) {
    res.clearCookie("patient_registered");
    res.redirect("/health_care");
  } else if (req.cookies.lab_registered) {
    res.clearCookie("lab_registered");
    res.redirect("/health_care");
  } else if (req.cookies.pharmacy_registered) {
    res.clearCookie("pharmacy_registered");
    res.redirect("/health_care");
  } else if (req.cookies.hospital_registered) {
    res.clearCookie("hospital_registered");
    res.redirect("/health_care");
  }
};

// Export the function
module.exports = logout;
