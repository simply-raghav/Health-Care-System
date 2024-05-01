const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const appointmentDetail = new mongoose.Schema({
    doctorId : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : "doctor"
    }, 
    patientId : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : "doctor"
    }, 
    dateofAppointment : {
        type : Date
    }, 
    dateOfBooking : {
        type: Date
    },
    status : {
        type : String,
        enum : ["Completed", "Cancelled", "Pending", "Confirmed"]
    }, 
    amount : {
        type : Number
    }
});

const appointment = new mongoose.model("appointment", appointmentDetail);

module.exports = appointment;