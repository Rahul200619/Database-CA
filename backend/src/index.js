const mongoose =require("mongoose");
const express=require("express");
require("dotenv").config();
const Menu=require("./Schemas/MenuSchema");
const Restaurant=require("./Schemas/RestaurantSchema");
const app=express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to MongoDB")
})
.catch((err)=>{
    console.log("Error Connecting to MongoDB",err)
})

app.get("/",()=>{
    res.send("Welcome to Restaurant")
})

app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000")
})