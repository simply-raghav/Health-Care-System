const express = require("express");
const router = new express.Router();
const { getusers, getuser } = require("../../controller/auth/patient/getdocs");

router.post("/user", getuser);

module.exports = router;
