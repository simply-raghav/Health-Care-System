require("dotenv").config();
const doctor = require("../../../Models/doctor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const register = async (req, res)=>{

    try {
        console.log(req.body);
        const {name , password, email, contact} = req.body;
        const hashed = await bcrypt.hash(password, 12);
        console.log(hashed);

        const doc = {name, password:hashed, email, contact};
        const newDoc = new doctor(doc);
        const result = await newDoc.save();
        
        const token = jwt.sign({email: doc.email, id: result._id}, process.env.SECRET_KEY, {
            expiresIn : process.env.JWT_EXPIRES,
        });
        const cookieOption = {
          expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES*24*60*60*1000),
          httpOnly: true,
        };
        res.cookie("Doctor Registered", token, cookieOption);
        return res.json({
            status:"success", 
            token : token,
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