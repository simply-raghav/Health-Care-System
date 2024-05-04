require("dotenv").config();
const doctor = require("../../../Models/doctor.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const hospital = require("../../../Models/hospital.models");
const patient = require("../../../Models/patient.model");
const lab = require("../../../Models/lab.model");
const pharmacy = require("../../../Models/pharmacy.model");

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

const register = async (req, res)=>{

    try {
        console.log(req.body);
        const decoded = jwt.verify(
          req.cookies.hospital_registered,
          process.env.SECRET_KEY
        );
        const {
          name,
          password,
          email,
          contact,
          address,
          gender,
          dob,
          degreeOverall,
          license,
          profession,
          experience,
        } = req.body;
        if (await exist(email)) {
          return res.json({
            status: "Failure",
            message: "User already exist",
          });
        }
        const hashed = await bcrypt.hash(password, 12);
        console.log("hashed", hashed);
        console.log("Hospital ID", decoded, decoded.id);
        
        const doc = {
          name,
          password: hashed,
          email,
          contact,
          address,
          gender,
          DOB: dob,
          hospital: decoded.id,
          degree: degreeOverall,
          license,
          profession,
          experience,
        };
        const newDoc = new doctor(doc);
        const result = await newDoc.save();
        
        return res.json({
            status:"success",
            message : "entry created successfully ", result
        });



    } catch (error) {
        return res.json({
            status:"Error", 
            message : error.message
        });
    }
}

module.exports = register;