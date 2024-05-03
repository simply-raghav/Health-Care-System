const express = require("express");
const router = new express.Router();
const { getusers, getuser } = require("../../controller/auth/doctor/getdocs");

router.post("/user", getuser);
module.exports = router;
