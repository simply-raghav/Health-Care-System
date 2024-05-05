require("dotenv").config();
const doctor = require("../../../Models/doctor.model");

const updateTimings = async (req, res) => {
  try {
    const { id, slot_interval, timings } = req.body;
    console.log(slot_interval, timings);
    
    // Use $set with specific fields for targeted updates:
    const updatedDoc = { $set: { slot_interval, timings } };

    // Update and await the result:
    const result = await doctor.updateOne({ _id: id }, updatedDoc);

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
