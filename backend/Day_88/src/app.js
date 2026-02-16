/*
server create krna 
server config krna
*/

const express = require("express");

const app = express();

app.use(express.json()); //middleware

const notes = [];

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.post("/notes",(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    console.log(notes);
    res.send("notes created");
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.send("note deleted successfully")
})

/*patch /notes/:index 
  req.body ={"description":"sample"}
  req.params do not work without : symbol
  */

app.patch("/notes/:index",(req,res)=>{
        notes[req.params.index].description = req.body.description
        res.send("note updated successfully")
    })
module.exports = app;

