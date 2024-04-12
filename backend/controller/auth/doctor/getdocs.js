
const doctor = require("../../../Models/doctor");

const getusers= async (req, res)=>{
    
    try {
        const result = await doctor.find();
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