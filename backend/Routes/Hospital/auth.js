const express = require("express");
const router = new express.Router();
const reg = require("../../controller/auth/hospital/reg");
const {getusers, getuser} = require("../../controller/auth/hospital/gethospitals");

router.post('/register', reg);
router.post('/users', getuser);

module.exports = router;