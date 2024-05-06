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
        type : Date,
        required : true,
    }, 
    dateOfBooking : {
        type: Date,
        required : true,
    },
    timeofAppointment : {
        type : String,
        required : true,
    }, 
    timeOfBooking : {
        type: String,
        required : true,
    },
    status : {
        type : String,
        enum : ["Completed", "Cancelled", "Pending", "Confirmedw"]
    }, 
    amount : {
        type : Number
    }
});

const appointment = new mongoose.model("appointment", appointmentDetail);

module.exports = appointment;