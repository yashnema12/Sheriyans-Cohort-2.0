const express = require("express")

const app = express(); //server ka instance create krna

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.get('/about',(req,res)=>{
    res.send("This is about page")
})

app.get('/home',(req,res)=>{
    res.send("this is Home Page")
})

app.listen(3000); //server start krna