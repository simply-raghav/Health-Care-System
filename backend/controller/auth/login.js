require("dotenv").config();
const doctor = require("../../Models/doctor.model");
const patient = require("../../Models/patient.model");
const hospital = require("../../Models/hospital.models");
const lab = require("../../Models/lab.model");
const pharmacy = require("../../Models/pharmacy.model");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login_doctor = async (email) => {
  try {
    let data = await doctor.findOne({ email: email });
    if (!data === true) {return false;}
    else
    return true;
  } catch (error) {
    // return false;
  }
};

const login_patient = async (email) => {
  try {
    const data = await patient.findOne({ email: email });
    if (!data === true) 
      return false;
    else
      return true;
  } catch (error) {
    return false;
  }
};

const login_hospital = async (email) => {
  try {
    const data = await hospital.findOne({ email: email });
    if (!data === true) return false;
    return true;
  } catch (error) {
    return false;
  }
};

const login_lab = async (email) => {
  try {
    const data = await lab.findOne({ email: email });
    if (data === null) return false;
    return true;
  } catch (error) {
    return false;
  }
};

const login_pharmacy = async (email) => {
  try {
    const data = await pharmacy.findOne({ email:email });
    if (data === null) return false;
    return true;
  } catch (error) {
    return false;
  }
};


const login = async (req, res)=>{
    
    try {
        const {email, pass} = req.body;
        console.log(email, " ", pass);
        let entity;
        let data;
        if (await login_patient(email)) {
          entity = "patient";
          data = await patient.findOne({ email: email });
          // console.log(entity, email, data);
        } else if (await login_hospital(email)) {
          entity = "hospital";
          data = await hospital.findOne({ email: email });
          // console.log(entity, email, data);
        } else if (await login_doctor(email)) {
          entity = "doctor";
          data = await doctor.findOne({ email: email });
          // console.log(entity, email, data);
        } else if (await login_lab(email)) {
          entity = "lab";
          data = await lab.findOne({ email: email });
          // console.log(entity, email, data);
        } else if (await login_pharmacy(email)) {
          entity = "pharmacy";
          data = await pharmacy.findOne({ email: email });
          // console.log(entity, email, data);
        } else {
          return res.json({
            status: "error",
            message: "User Not Registered",
          });
        }
        
        console.log("data",data)

        const resp = await bcrypt.compare(pass, data.password);
        if(resp){
            const token = jwt.sign(
              { email: data.email, id: data._id,entity:entity },
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
            res.entity = entity;
            res.cookie(entity + "_registered", token, cookieOption);
            // console.log(res);
            return res.json({
                status:"Success", 
                token: token,
                message : "User Verified, Successful Login"
            });
        }else{
            return res.json({
                status:"Error", 
                message : "Password Doesn't Match"
            });
        }
      
    } catch (error) {
        return res.json({
            status:"Error", 
            message : error.message
        });
    }
}



module.exports = login;