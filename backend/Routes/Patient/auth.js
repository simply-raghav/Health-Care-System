const express = require("express");
const router = new express.Router();
const reg = require("../../controller/auth/patient/reg");
const {getusers, getuser} = require("../../controller/auth/patient/getpatient");
const login = require("../../controller/auth/login");

router.post('/register', reg);
router.post('/users', getusers);

module.exports = router;