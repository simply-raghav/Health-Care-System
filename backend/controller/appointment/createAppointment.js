// This is an API to make an appointment for patient for specific doctor booking.

// using appointment model to store appointment details in database.
const Appointment = require("../../Models/appointment.model");
// using jwt to get patient id to store patient id in appointment database.
const jwt = require('jsonwebtoken');
const createAppointment = async (req, res)=>{
    
    try {
        console.log(req.body);
        
        const { doctorId, dateofAppointment, timeofAppointment, amount } = req.body;
        const dateOfBooking = new Date();
        const timeOfBooking = dateOfBooking.getTime();
        // extracting info of patient from cookies.
        const decoded = jwt.verify(
          req.cookies.patient_registered,
          process.env.SECRET_KEY
        );
        const patientId = decoded.id;
        // object for storing data into database.
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
        // creating an object for appointment model.
        const newAppt = new Appointment(appt);
        // adding the model into appointment schema.
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