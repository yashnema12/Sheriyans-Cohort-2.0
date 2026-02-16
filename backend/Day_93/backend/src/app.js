const express = require("express");
const notesModel = require("./models/node_model")
const cors = require("cors")
const path = require("path")

const app = express();
app.use(cors())
app.use(express.json()) //middleware
app.use(express.static("./public"))

/**post api/notes 
 * post data in mongodb
 * {title,description} = req.body
*/
app.post("/api/notes", async(req,res)=>{
    const {title,description} = req.body;
    const note = await notesModel.create({
        title,description
    })
    res.status(201).json({
        message:"note created success",
        note
    })
})

/** get /api/notes
 *  fetch all the data in notes from mongodb
 */

app.get("/api/notes", async(req,res)=>{
    const notes = await notesModel.find()

    res.status(200).json({
        message:"noted success",
        notes
    })
})


/**delete /api/notes/:id
 * delete note with id from req.params
*/
app.delete("/api/notes/:id",async (req,res)=>{
    const id = req.params.id;
   await notesModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"note deleted success"
    })
})

/**patch /api/notes/:id
 * update description note
 * req.body = description
 */
app.patch("/api/notes/:id", async(req,res)=>{
    const id = req.params.id
    const {description} = req.body;

    await notesModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        message:"note updated success"
    })
})
console.log(__dirname)

app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})

module.exports = app;