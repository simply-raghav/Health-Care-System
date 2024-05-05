require("dotenv").config();
const doctor = require("../../../Models/doctor.model");

const update = async (req, res) => {
  try {
    console.log(req.body);
    const {
        name,
        email,
        contact,
        address,
        gender,
        DOB,
        license,
        profession,
        experience,
        degree,
        about_me,
        pricing,
        services,
        Specialization,
    } = req.body;

    const updatedDoc = {
        name,
        email,
        contact,
        address,
        gender,
        DOB,
        license,
        profession,
        experience,
        degree,
        about_me,
        pricing,
        services,
        Specialization,
    };
    const result = await doctor.updateOne({email: email}, {
        $set : updatedDoc
    });

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

module.exports = update;
