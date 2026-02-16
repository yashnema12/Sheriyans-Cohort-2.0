/**server start and database copnnect krna */

const app = require('./src/app');
const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect("mongodb+srv://yash:84By2CeDwc8hEdZe@cluster0.w92dndu.mongodb.net/day-6")
    .then(()=>{
        console.log("connected to database");
    })
}
connectToDb();
app.listen('3000',(req,res)=>{
    console.log("server connect at 3000");
    
})