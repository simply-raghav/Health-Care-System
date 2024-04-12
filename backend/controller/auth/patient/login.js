
const patient  = require("../../../Models/patient");
const bcrypt = require("bcryptjs");

const login = async (req, res)=>{
    
    try {
        const {email, password} = req.body;
        console.log(email, " ", password);
        const data = await patient.findOne({email});
        console.log(data);
        if(!data){
            return res.json({
                status:"error", 
                message : "User Not Registered"
            });
        }
        const resp = await bcrypt.compare(password, data.password);
        if(resp){
            return res.json({
                status:"Success", 
                message : "User Verified, Successful Login"
            });
        }else{
            return res.json({
                status:"Error", 
                message : "Password Doesn't Match"
            });
        }
      
    } catch (error) {
        return res.json({
            status:"Error", 
            message : error.message
        });
    }
}

module.exports = login;