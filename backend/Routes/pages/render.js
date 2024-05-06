const express = require("express");
const router = express.Router();
const loggedin = require("../../controller/auth/isLoggedin")
const logout = require("../../controller/auth/logout");
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

router.get('/logout', logout);

router.get("/dashboard", loggedin, (req, res) => {
  
  if (req.user) {
    res.render((req.entity + "-dashboard"), {
      id: req.user.id,
    });
  } else {
    res.redirect("login");
  }
});

router.get("/registerPat", loggedin, (req, res) => {
  if (req.user) {
    res.redirect("dashboard", {
      id: req.user.id,
    });
  } else {
    res.render("register_pat");
  }
});

router.get("/registerHos", loggedin, (req, res) => {
  if (req.user) {
    res.render(req.entity + "-dashboard", {
      id: req.user.id,
    });
  } else {
    res.render("register_hospital");
  }
});

router.get("/addDoc", loggedin, (req, res) => {
  if (req.user) {
    res.render("hospital/add_doctor");
  } else {
    res.redirect("login");
  }
});


router.get("/appointment_list", loggedin, (req, res) => {
  if (req.user) {
    res.render("hospital/appointment-list");
  } else {
    res.redirect("login");
  }
});
router.get("/doctor_lists", loggedin, (req, res) => {
  if (req.user) {
    res.render("hospital/doctor-list");
  } else {
    res.redirect("login");
  }
});








router.get("/forgot_password", loggedin, (req, res) => {
  if (req.user) {
    res.render("hospital/forgot-password");
  } else {
    res.redirect("login");
  }
});


router.get("/patient_lists", loggedin, (req, res) => {
  if (req.user) {
    res.render("hospital/patient-list");
  } else {
    res.redirect("login");
  }
});

router.get("/profile", loggedin, (req, res) => {
  if (req.user) {
    res.render("hospital/profile");
  } else {
    res.redirect("login");
  }
});
router.get("/setting", loggedin, (req, res) => {
  if (req.user) {
    res.render("hospital/settings");
  } else {
    res.redirect("login");
  }
});
router.get("/profile1", loggedin, (req, res) => {
  if (req.user) {
    res.render("hospital/profile1");
  } else {
    res.redirect("login");
  }
});

router.get("/addLab", loggedin, (req, res) => {
  if (req.user) {
    res.render("hospital/add_laboratory");
  } else {
    res.redirect("login");
  }
});

router.get("/addPharm", loggedin, (req, res) => {
  if (req.user) {
    res.render("hospital/add_pharmacy");
  } else {
    res.redirect("login");
  }
});

router.get("/pat_profile", loggedin, (req, res) => {
  if (req.user) {
    res.render("patient/profile-settings");
  } else {
    res.redirect("login");
  }
});

router.get("/book_appointment", loggedin, (req, res) => {
  if (req.user) {
    res.render("patient/book-appointment");
  } else {
    res.redirect("login");
  }
});

router.get("/doctor_profile/:id", loggedin, (req, res) => {
  if (req.user) {
    res.render("patient/doctor-profile", {
      id: req.params.id,
    });
  } else {
    res.redirect("login");
  }
});

router.get("/booking/:id", loggedin, (req, res) => {
  if (req.user) {
    res.render("patient/booking", {
      id : req.params.id,
    });
  } else {
    res.redirect("login");
  }
});


router.get("/change_password", loggedin, (req, res) => {
  if (req.user) {
    res.render("patient/change-password", {
      id : req.params.id,
    });
  } else {
    res.redirect("login");
  }
});




router.get("/appointments", loggedin, (req, res) => {
  if (req.user) {
    res.render("doctor/appointments");
  } else {
    res.redirect("login");
  }
});

router.get("/schedule-timings", loggedin, (req, res) => {
  if (req.user) {
    res.render("doctor/schedule-timings", {
      id: req.user.id,
    });
  } else {
    res.redirect("login");
  }
});
router.get("/my_patients", loggedin, (req, res) => {
  if (req.user) {
    res.render("doctor/my-patients", {
      id: req.user.id,
    });
  } else {
    res.redirect("login");
  }
});

router.get("/doctor_profile_settings", loggedin, (req, res) => {
  if (req.user) {
    res.render("doctor/doctor-profile-settings", {
      id: req.user.id,
    });
  } else {
    res.redirect("login");
  }
});





router.get("/doctor_change_password", loggedin, (req, res) => {
  if (req.user) {
    res.render("doctor/doctor-change-password", {
      id: req.user.id,
    });
  } else {
    res.redirect("login");
  }
});





















module.exports=router;