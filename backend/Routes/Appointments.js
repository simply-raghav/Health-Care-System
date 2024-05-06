const express = require("express");
const router = new express.Router();
const createAppointment = require("../controller/appointment/createAppointment");
const {
  getAllAppointments,
  getAllAppointments_doctor,
  getAllAppointments_patient,
} = require("../controller/appointment/viewAppointment");

router.post('/makeAppointment', createAppointment);
router.post('/viewAppointment_doctor', getAllAppointments_doctor);
router.post('/viewAppointment_patient', getAllAppointments_patient);


module.exports = router;