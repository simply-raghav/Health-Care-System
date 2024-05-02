require("dotenv").config();
const pharmacy = require("../../../Models/pharmacy.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const lab = require("../../../Models/lab.model");
const patient = require("../../../Models/patient.model");
const doctor = require("../../../Models/doctor.model");
const hospital = require("../../../Models/hospital.models");
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
const register = async (req, res) => {
  try {
    console.log(req.body);
    const { name, password, email } = req.body;
    if (await exist(email)) {
      return res.json({
        status: "Failure",
        message: "Pharmacy already exist",
      });
    }
    const hashed = await bcrypt.hash(password, 12);
    console.log(hashed);

    const pharm = {
      name,
      password: hashed,
      email,
    };
    const newPharm = new pharmacy(pharm);
    const result = await newPharm.save();

    const token = jwt.sign(
      { email: pharm.email, id: result._id },
      process.env.SECRET_KEY,
      {
        expiresIn: process.env.JWT_EXPIRES,
      }
    );
    const cookieOption = {
      expiresIn: new Date(
        Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    res.cookie("pharmacy_registered", token, cookieOption);
    return res.json({
      status: "success",
      token: token,
      message: "entry created successfully ",
      result,
    });
  } catch (error) {
    return res.json({
      status: "Error",
      message: error.message,
    });
  }
};

module.exports = register;
