const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const doctorDetail = new mongoose.Schema({
    name : {
        type : String
    }, 
    password : {
        type : String
    }, 
    email : {
        type : String
    }, 
    contact : {
        type : Number
    }
});

const doctor = new mongoose.model("doctor", doctorDetail);

module.exports = doctor;