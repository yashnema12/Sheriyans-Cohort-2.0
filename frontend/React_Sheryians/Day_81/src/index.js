const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    const dummy=[
        {
            username:'yash',
            age:30,
            City:'Bhopal'
        }
    ]
    res.json({data:dummy})
})

app.listen(8000,()=>{
    console.log('server is running at 8000 port');
    
})