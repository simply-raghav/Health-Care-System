const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const patientDetail = new mongoose.Schema({
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

const patient = new mongoose.model("patient", patientDetail);

module.exports = patient;