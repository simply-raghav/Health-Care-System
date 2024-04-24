const express = require('express');
const doctor = require("./Models/doctor");
require("./DB/db.js");
const ejs = require("ejs");
const app = express();
const cookie = require('cookie-parser');
const PORT = process.env.PORT || 5000;
const path = require('path');
const javascript = path.join(__dirname,"/public/js");
app.use("/javascript",express.static(javascript));
const css = path.join(__dirname,"/public/css");
app.use("/css",express.static(css));

app.set("view engine","ejs");
app.set("views","./views");
app.use(cookie());
app.use(express.json());
app.use(express.static("public"));
app.use("/authDoctor", require("./Routes/Doctor/auth"))
app.use("/appointment", require("./Routes/Appointments"));
app.use("/health_care",require("./Routes/pages/render.js"))

app.listen(PORT, ()=>{
    console.log("Server running on ", PORT);
})