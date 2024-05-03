
const doctor = require("../../../Models/doctor.model");

const getusers = async (req, res) => {
  try {
    const result = await doctor.find();
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
    const result = await doctor.findOne({_id:req.body.id});
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