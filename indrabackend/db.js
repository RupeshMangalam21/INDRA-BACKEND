const mongoose = require("mongoose");
const  dotenv = require("dotenv");
dotenv.config();

 const connectdb = ()=>{
    const  DB_USER = process.env.DB_USERNAME;
    const  DB_PASS = process.env.DB_PASSWORD;
    const MONGO_URI=`mongodb+srv://${DB_USER}:${DB_PASS}@mern.q0vi3og.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(MONGO_URI);
    
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