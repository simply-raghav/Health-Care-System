const doctor = require("../../Models/doctor.model");
const patient = require("../../Models/patient.model");

const jwt = require("jsonwebtoken");
const loggedin = (req, res, next) => {
    
    if (!(req.cookies.doctor_registered || req.cookies.patient_registered || req.cookies.hospital_registered || req.cookies.lab_registered || req.cookies.pharmacy_registered )) return next();
    let decoded;
    try {
      if (req.cookies.doctor_registered) {
        decoded = jwt.verify(
          req.cookies.doctor_registered,
          process.env.SECRET_KEY
        );
        req.entity = "doctor";
      } else if (req.cookies.patient_registered) {
         decoded = jwt.verify(
          req.cookies.patient_registered,
          process.env.SECRET_KEY
        );
        req.entity = "patient";
      } else if (req.cookies.hospital_registered) {
         decoded = jwt.verify(
          req.cookies.hospital_registered,
          process.env.SECRET_KEY
        );
        req.entity = "hospital";
      } else if (req.cookies.lab_registered) {
         decoded = jwt.verify(
          req.cookies.lab_registered,
          process.env.SECRET_KEY
        );
        req.entity = "lab";
      } else if (req.cookies.pharmacy_registered) {
         decoded = jwt.verify(
          req.cookies.lab_registered,
          process.env.SECRET_KEY
        );
        req.entity = "pharmacy";
      } 
    // console.log("decoded: ", decoded)
      req.user =decoded;
      return next();
    // });
  } catch (err) {
    if (err) return next();
  }
};

module.exports = loggedin;
