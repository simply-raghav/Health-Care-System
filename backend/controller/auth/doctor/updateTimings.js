require("dotenv").config();
const jwt = require("jsonwebtoken");
const doctor = require("../../../Models/doctor.model");

const updateTimings = async (req, res) => {
  try {
    console.log(req.body);
    const decoded = jwt.verify(
      req.cookies.doctor_registered,
      process.env.SECRET_KEY
    );
    console.log(decoded);
    const { slot_interval, timings } = req.body;
    console.log(slot_interval, timings);
    
    // Use $set with specific fields for targeted updates:
    const updatedDoc = { $set: { slot_interval, timings } };

    // Update and await the result:
    const result = await doctor.updateOne({ _id: decoded.id }, updatedDoc);

    return res.json({
      status: "success",
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

module.exports = updateTimings;
