// Load environment variables from .env file
require("dotenv").config();

// Import nodemailer and otp-generator modules
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");

// Function to send email with OTP for verification
const email = async (req, res) => {
  try {
    // Generate OTP
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      digits: true,
    });

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Send email with OTP
    let info = await transporter.sendMail({
      from: `Health Care <${process.env.MAIL_USER}>`,
      to: req.body.email,
      subject: "Verify Your Email Address with Health Care",
      text: "OTP for your email verification is " + otp,
    });

    // Return success response with OTP
    return res.json({
      status: "success",
      OTP: otp,
    });
  } catch (error) {
    // Return error response if an error occurs
    return res.json({
      status: "error",
      message: error.message,
    });
  }
};

// Export the function
module.exports = email;
