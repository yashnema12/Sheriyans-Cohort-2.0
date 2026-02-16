/**server start krna db se connect krna */


require("dotenv").config();
const app = require('./src/app');
const connectToDb = require('./src/config/database')

connectToDb();

app.listen(3000,(req,res)=>{
    console.log("server connected at 3000");
})