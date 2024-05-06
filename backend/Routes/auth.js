const express = require("express");
const router = new express.Router();
const login = require("../controller/auth/login");
const email = require("../controller/auth/email");
const logout = require("../controller/auth/logout");

router.post("/login", login);
router.post("/logout", logout);
router.post("/email", email);

module.exports = router;
