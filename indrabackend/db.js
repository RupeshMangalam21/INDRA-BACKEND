const mongoose = require("mongoose");
const  dotenv = require("dotenv");
dotenv.config();

 const connectdb = ()=>{
    
  
  
    mongoose.connect(process.env.MONGODB_URI);
    
    mongoose.connection.on("connected",()=>{
        console.log("Mongoose is connected");
    })
    mongoose.connection.on("error",(err)=>{
        console.log(err);
    })
    mongoose.connection.on("disconnected",()=>{
        console.log("Mongoose is not connected");
    })
   

}

module.exports = { connectdb };