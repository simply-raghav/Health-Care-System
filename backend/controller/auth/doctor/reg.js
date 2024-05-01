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
        const {name , password, email, contact, address, gender, dob} = req.body;
        if (await exist(email)) {
          return res.json({
            status: "Failure",
            message: "User already exist",
          });
        }
        const hashed = await bcrypt.hash(password, 12);
        console.log(hashed);
        
        const doc = {name, password:hashed, email, contact, address, gender, dob};
        const newDoc = new doctor(doc);
        const result = await newDoc.save();
        
        const token = jwt.sign({email: doc.email, id: result._id}, process.env.SECRET_KEY, {
            expiresIn : process.env.JWT_EXPIRES,
        });
        const cookieOption = {
          expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES*24*60*60*1000),
          httpOnly: true,
        };
        res.cookie("doctor_registered", token, cookieOption);
        return res.json({
            status:"success", 
            token : token,
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