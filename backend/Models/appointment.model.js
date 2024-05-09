// Import necessary modules
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");

// Define schema for appointment details
const appointmentDetail = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor",
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
  dateofAppointment: {
    type: Date,
    required: true,
  },
  dateOfBooking: {
    type: Date,
    required: true,
  },
  timeofAppointment: {
    type: String,
    required: true,
  },
  timeOfBooking: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Completed", "Cancelled", "Pending", "Confirmed"],
  },
  amount: {
    type: Number,
  },
});

// Create appointment model
const appointment = new mongoose.model("appointment", appointmentDetail);

// Export the appointment model
module.exports = appointment;
