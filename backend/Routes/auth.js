const express = require("express");
const router = new express.Router();
const login = require("../controller/auth/login");
const logout = require("../controller/auth/logout");

router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
