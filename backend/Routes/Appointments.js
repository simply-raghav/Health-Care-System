const express = require("express");
const router = new express.Router();
const createAppointment = require("../controller/appointment/createAppointment");
const viewAppointment = require("../controller/appointment/viewAppointment");

router.post('/makeAppointment', createAppointment);
router.get('/viewAppointment', viewAppointment);


module.exports = router;