//require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB()


















/*
import express from "express"
const app=express()

(async()=>{
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
       app.on("error",(error)=>{
        console.log("Error",error)
       })
       app.listen(process.env.PORT,()=>{
        console.log("app is listing on port 8000")
       })
    } catch (error) {
       console.error("ERROR: ",error) 
    }
})()
*/