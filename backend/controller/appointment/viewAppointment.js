
const Appointment = require("../../Models/appointment.model");

const getAllAppointments = async (req, res)=>{
    
    try {
        const result = await Appointment.find().populate("doctorId");

        return res.json({
            status:"success", 
            message : "entry created successfully", 
            result : result, 
        });
    } catch (error) {
        return res.json({
            status:"Error", 
            message : error.message
        });
    }
}

const getAllAppointments_doctor = async (req, res) => {
  

  try {
      console.log("Appointment : ", req.b);
    const result = await Appointment.find({ doctorId: req.body.doctor_id }).populate("doctorId").populate("patientId");
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


module.exports = {getAllAppointments, getAllAppointments_doctor};