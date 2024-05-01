const express = require("express");
const router = new express.Router();
const reg = require("../../controller/auth/hospital/reg");
const {getusers, getuser} = require("../../controller/auth/doctor/getdocs");

router.post('/register', reg);
router.get('/users', getusers);

module.exports = router;