require("dotenv").config();
const hospital = require("../../../Models/hospital.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const doctor = require("../../../Models/doctor.model");
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
}

const register = async (req, resp) => {
  try {
    console.log(req.body);
    const {
      name,
      address,
      email,
      contact,
      registration_number,
      owner_name,
      license_number,
      password,
    } = req.body;
    if(await exist(email)){
      return resp.json({
        status: "Failure",
        message: "User already exist",
      });
    }
    const hashed = await bcrypt.hash(password, 12);
    console.log(hashed);

    const hos = {
      name,
      address,
      email,
      contact,
      registration_number,
      owner_name,
      license_number,
      password,
    };
    const newHos = new hospital(hos);
    const result = await newHos.save();

    const token = jwt.sign(
      { email: hos.email, id: result._id },
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
    resp.cookie("hospital_registered", token, cookieOption);
    return resp.json({
      status: "success",
      token: token,
      message: "entry created successfully ",
      result,
    });
  } catch (error) {
    return resp.json({
      status: "Error",
      message: error.message,
    });
  }
};

module.exports = register;
