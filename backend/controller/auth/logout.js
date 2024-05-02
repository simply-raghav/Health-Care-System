const jwt = require("jsonwebtoken");
const logout = (req, res) => {
if (req.cookies.doctor_registered){
  res.clearCookie("doctor_registered");
  res.redirect("/health_care");
}else if (req.cookies.patient_registered){
  res.clearCookie("patient_registered");
  res.redirect("/health_care");
}else if (req.cookies.lab_registered){
  res.clearCookie("lab_registered");
  res.redirect("/health_care");
}else if (req.cookies.pharmacy_registered){
  res.clearCookie("pharmacy_registered");
  res.redirect("/health_care");
}else if (req.cookies.hospital_registered){
  res.clearCookie("hospital_registered");
  res.redirect("/health_care");
}
  // res.clearCookie((res.entity + "_registered"));
  // res.redirect("/health_care");
};
module.exports = logout;
