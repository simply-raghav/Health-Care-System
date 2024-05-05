const express = require("express");
const router = new express.Router();
const reg = require("../../controller/auth/doctor/reg");
const {getusers, getuser} = require("../../controller/auth/doctor/getdocs");
const login = require("../../controller/auth/login");
const update = require("../../controller/auth/doctor/updateDoc");

router.post('/register', reg);
router.post('/users', getuser);
router.get('/user', getusers);
router.post('/login', login);
router.post('/update', update);



module.exports = router;