const express = require("express");
const router = new express.Router();
const reg = require("../../controller/auth/doctor/reg");
const {getusers, getuser} = require("../../controller/auth/doctor/getdocs");
const login = require("../../controller/auth/login");

router.post('/register', reg);
router.post('/users', getuser);
router.post('/login', login);



module.exports = router;