const express=require("express");
const connectDB = require("./config/Database");
const dotenv=require("dotenv");
dotenv.config();

const app=express();
connectDB();

const port=process.env.PORT || 5000;

app.listen((port,()=>console.log(`server is running on : ${port}`)));