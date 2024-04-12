
const patient = require("../../../Models/patient");
const bcrypt = require("bcryptjs");

const register = async (req, res)=>{
    
    try {
        console.log(req.body);
        const {name , password, email, contact} = req.body;
        const hashed = await bcrypt.hash(password, 12);
        console.log(hashed);
        const doc = {name, password:hashed, email, contact};
        const newDoc = new patient(doc);
        const result = await newDoc.save();
        return res.json({
            status:"success", 
            message : "entry created successfully ", result
        });
    } catch (error) {
        return res.json({
            status:"Error", 
            message : error.message
        });
    }
}

module.exports = register;