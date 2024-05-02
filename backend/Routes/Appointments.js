const express = require("express");
const router = new express.Router();
const createAppointment = require("../controller/appointment/createAppointment");
const {
  getAllAppointments,
  getAllAppointments_doctor,
} = require("../controller/appointment/viewAppointment");

router.post('/makeAppointment', createAppointment);
router.post('/viewAppointment', getAllAppointments_doctor);


module.exports = router;