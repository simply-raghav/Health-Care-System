const doctor = require("../../../Models/doctor.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const setPassword = async (req, res) => {
  try {
    const decoded = jwt.verify(
      req.cookies.doctor_registered,
      process.env.SECRET_KEY
    );
    const {old_password, new_password} = req.body;
    const result = await doctor.findOne({ _id: decoded.id });
    console.log("Result: ", result);
    const resp = await bcrypt.compare(old_password,result.password);
    if(resp){
        const hashed = await bcrypt.hash(new_password, 12);
         const changedPassword = await doctor.updateOne({_id: decoded.id}, {
        $set : {password : hashed}
    });
    }else{
        return res.json({
          status: "success",
          message: "Old Password Incorrect",
          result: result,
        });    
    }
    return res.json({
      status: "success",
      message: "Password changed successfully",
      result: result,
    });
  } catch (error) {
    return res.json({
      status: "Error",
      message: error.message,
    });
  }
};

module.exports =  setPassword;
