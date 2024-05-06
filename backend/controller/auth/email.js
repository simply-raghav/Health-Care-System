require("dotenv").config();
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
const email = async (req, res) =>{
  try {
    
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false , digits:true});
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

        let info = await transporter.sendMail({
            from: `Health Care <${process.env.MAIL_USER}>`,
            to: req.body.email,
            subject: "Verify Your Email Address with Health Care",
            text: "OTP for your email verification is " + otp,
        });
        return res.json({
          status:"success",
          OTP : otp,
        })
      } catch (error) {
          return res.json({
            status:"error",
            message:error.message
          }) 
      }
}

module.exports = email;