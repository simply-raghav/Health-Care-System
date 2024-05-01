
const Appointment = require("../../Models/appointment.model");
const doctor = require("../../Models/doctor.model");

const createAppointment = async (req, res)=>{
    
    try {
        console.log(req.body);
        
        const {name, status, amount} = req.body;
        const dateofAppointment = new Date("06-29-2024");
        const dateOfBooking = new Date("06-21-2024");
        const data = await doctor.findOne({name});
        console.log("hi there", data);
        const doctorId = data._id;
        
        const appt = {doctorId, doctorId, dateofAppointment, dateOfBooking, status, amount};
        console.log(appt);
        const newAppt = new Appointment(appt);
        const result = await newAppt.save();
        return res.json({
            status:"success", 
            message : "entry created successfully ", result
        });
    } catch (error) {
        return res.json({
            status:"Error", 
            message : error.message
        });
    }
}

module.exports = createAppointment;