require('dotenv').config()

const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()

mongoose.connect(process.env.mongoDB)
const db = mongoose.connection
db.on('error', ()=>{
    console.log(error)
})

db.on('open', ()=>{
    console.log("Connected to db")
})




app.get('/', (req,res,next)=>{
    res.send("Connection success")
})



app.listen(process.env.port, ()=> {
    console.log(`Listening for connections on port ${process.env.port}`)
})