const express = require("express");
const router = new express.Router();
const reg = require("../../controller/auth/doctor/reg");
const getusers = require("../../controller/auth/doctor/getdocs");
const login = require("../../controller/auth/doctor/login");

router.post('/register', reg);
router.get('/users', getusers);
router.post('/login', login);



module.exports = router;