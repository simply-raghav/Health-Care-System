// using appointment model to store appointment details in database.
const Appointment = require("../../Models/appointment.model");

// api to get list of all appointments with doctor information.
const getAllAppointments = async (req, res) => {
  try {
    const result = await Appointment.find().populate("doctorId");

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

// api to get list of all appointments of doctor with doctor details and patient details.
const getAllAppointments_doctor = async (req, res) => {
  try {
    console.log("Appointment : ", req.b);
    const result = await Appointment.find({ doctorId: req.body.doctor_id })
      .populate("doctorId")
      .populate("patientId");
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
// api to get list of all appointments of patient with doctor details and patient details.
const getAllAppointments_patient = async (req, res) => {
  try {
    console.log("Appointment : ", req);
    const result = await Appointment.find({ patientId: req.body.id })
      .populate("doctorId")
      .populate("patientId");
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

module.exports = {
  getAllAppointments,
  getAllAppointments_doctor,
  getAllAppointments_patient,
};
