const express=require("express");
const mongoose=require("mongoose");

const MenuSchema=new mongoose.Schema[{
    dishName:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    }

}]

const Menu=mongoose.model("Menu",MenuSchema);
module.exports=Menu;