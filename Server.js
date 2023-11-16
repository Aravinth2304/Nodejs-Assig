const express = require("express");
const app = express();
const path = require("path");

app.get("/html1",(req,res)=>{
    res.sendFile(path.join(__dirname,"HTML1.html"));
})

app.get("/html2",(req,res)=>{
    res.sendFile(path.join(__dirname,"HTML2.html"));
})

app.get("/html3",(req,res)=>{
    res.sendFile(path.join(__dirname,"HTML3.html"));
})

app.listen(3978      ,       ()=>{
    console.log("server is running");
})