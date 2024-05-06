
const patient = require("../../../Models/patient.model");

const getusers = async (req, res) => {
  try {
    const result = await patient.find();
    return res.json({
      status: "success",
      message: "entry created successfully",
      result: result,
    });
  } catch (error) {
    return res.json({
      status: "Error",
      message: error.message,
    });
  }
};

const getuser = async (req, res) => {
  try {
    const result = await patient.findOne({ _id: req.body.id });
    console.log("Result: ", result);
    return res.json({
      status: "success",
      message: "data sent ",
      result: result,
    });
  } catch (error) {
    return res.json({
      status: "Error",
      message: error.message,
    });
  }
};



module.exports = {getusers, getuser};