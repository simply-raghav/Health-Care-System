// This API is used to get doctor details along with their respective hospital details.
const doctor = require("../../../Models/doctor.model");
// get all doctors lists with hospital details. 
const getusers = async (req, res) => {
  try {
    const result = await doctor.find().populate('hospital');
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

// get specific doctor details with hospital details.
const getuser = async (req, res) => {
  try {
    const result = await doctor.findOne({_id:req.body.id}).populate('hospital');
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