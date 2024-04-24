const doctor = require("../../../Models/doctor");
const jwt = require("jsonwebtoken");
const loggedin = (req, res, next) => {
    console.log("hello");
    if (!req.cookies.doctor_registered) return next();
    console.log("hello1");
    try {
        const decoded = jwt.verify(
            req.cookies.doctor_registered,
            process.env.SECRET_KEY
        );
        console.log("hello2");
    console.log("decoded : ", decoded)

    // const sql = `SELECT * FROM userinfo WHERE sno = ${decoded.sno}`;
    // db.query(sql, (err, result) => {
    //   if (err) return next();
      req.user =decoded;
      return next();
    // });
  } catch (err) {
    if (err) return next();
  }
};

module.exports = loggedin;
