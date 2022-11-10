require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req,res,next)=>{
    res.send("Connection success")
})

app.listen(process.env.port, ()=> {
    console.log(`Listening for connections on port ${process.env.port}`)
})