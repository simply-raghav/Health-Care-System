const express = require("express");
const router = express.Router();
const loggedin = require("../../controller/auth/doctor/isLoggedin")
router.get('/', loggedin, (req,res)=>{
    console.log("in render ",req.user)
    let loginbtnclass,dashboardbtnclass;
    if (req.user) {
        loginbtnclass = "hide";
        dashboardbtnclass = "show";
    }
    else{
        loginbtnclass = "show";
        dashboardbtnclass = "hide";
    }
      res.render("index", {
        loginbtnclass,
        dashboardbtnclass,
      });
});
router.get('/doctorlogin', loggedin, (req,res)=>{
    if (req.user) {
        res.render("doctor-dashboard");
    } else {
        res.render("login_doctor");
    }
    
});
module.exports=router;