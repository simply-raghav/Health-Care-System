
const patient = require("../../../Models/patient");

const getusers= async (req, res)=>{
    
    try {
        const result = await patient.find();
        return res.json({
            status:"success", 
            message : "entry created successfully", 
            result : result, 
        });
    } catch (error) {
        return res.json({
            status:"Error", 
            message : error.message
        });
    }
}

module.exports = getusers;