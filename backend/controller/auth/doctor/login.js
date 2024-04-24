require("dotenv").config();
const doctor = require("../../../Models/doctor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const login = async (req, res)=>{
    
    try {
        const {email, pass} = req.body;
        console.log(email, " ", pass);
        const data = await doctor.findOne({email});
        console.log(data);
        if(!data){
            return res.json({
                status:"error", 
                message : "User Not Registered"
            });
        }
        const resp = await bcrypt.compare(pass, data.password);
        if(resp){
            const token = jwt.sign(


              { email: data.email, id: data._id },
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
            res.cookie("doctor_registered", token, cookieOption);
        
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