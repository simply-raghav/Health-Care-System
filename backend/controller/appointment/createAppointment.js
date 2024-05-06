
const Appointment = require("../../Models/appointment.model");
const doctor = require("../../Models/doctor.model");
const jwt = require('jsonwebtoken');
const createAppointment = async (req, res)=>{
    
    try {
        console.log(req.body);
        
        const { doctorId, dateofAppointment, timeofAppointment, amount } = req.body;
        const dateOfBooking = new Date();
        const timeOfBooking = dateOfBooking.getTime();
        const decoded = jwt.verify(
          req.cookies.patient_registered,
          process.env.SECRET_KEY
        );
        const patientId = decoded.id;
        const appt = {
            "doctorId" : doctorId ,
            "patientId" : patientId ,
            "dateofAppointment" : dateofAppointment ,
            "dateOfBooking" : dateOfBooking ,
            "timeofAppointment" : timeofAppointment ,
            "timeOfBooking" : timeOfBooking ,
            "status" : "Confirmed" ,
            "amount" : amount ,
        };
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