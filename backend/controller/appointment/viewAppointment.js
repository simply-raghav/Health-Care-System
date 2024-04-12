
const Appointment = require("../../Models/appointment");
const getAllAppointments = async (req, res)=>{
    const doctor = require("../../Models/doctor")
    
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

module.exports = getAllAppointments;