
const pharmacy = require("../../../Models/pharmacy");

const getusers = async (req, res) => {
  try {
    const result = await pharmacy.find();
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
    const result = await pharmacy.findOne({ _id: req.body.doctor_id });
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