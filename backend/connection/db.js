require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.URL).then(()=>{
    console.log("Database connected");
}).catch((error)=>{
    console.log(error.message);
    process.exit(1);
})
