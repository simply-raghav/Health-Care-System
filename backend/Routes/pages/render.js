const express = require("express");
const router = express.Router();
const loggedin = require("../../controller/auth/isLoggedin")
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

router.get('/login', loggedin, (req,res)=>{
    if (req.user) {
        res.redirect("dashboard")
    } else {
        res.render("login");
    }  
});

router.get("/dashboard", loggedin, (req, res) => {
  
  if (req.user) {
    res.render((req.entity + "-dashboard"), {
      doctor_id: req.user.id,
    });
  } else {
    res.redirect("login");
  }
});

router.get("/registerPat", loggedin, (req, res) => {
  if (req.user) {
    res.redirect("dashboard", {
      doctor_id: req.user.id,
    });
  } else {
    res.render("register_pat");
  }
});

router.get("/registerHos", loggedin, (req, res) => {
  if (req.user) {
    res.render(req.entity + "-dashboard", {
      doctor_id: req.user.id,
    });
  } else {
    res.render("register_hospital");
  }
});





module.exports=router;