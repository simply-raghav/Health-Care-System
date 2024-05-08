const express = require("express");
const router = new express.Router();
const reg = require("../../controller/auth/patient/reg");
const {getusers, getuser} = require("../../controller/auth/patient/getpatient");
const login = require("../../controller/auth/login");
const password = require("../../controller/auth/patient/password");

router.post('/register', reg);
router.post('/users', getuser);
router.post("/changePassword", password);
module.exports = router;