require('dotenv').config()
const path = require('path');


const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()

mongoose.connect(process.env.mongoDB)
const db = mongoose.connection
db.on('error', (error)=>{
    console.log(error)
})

db.on('open', ()=>{
    console.log("Connected to db")
})

const reqIdentifier = (req,res,next) => {
    console.log("Got/Sent a req/res")
    next()
}

const newUrlRoute = require('./routes/newUrlRoute')
const indexRoute = require('./routes/indexRoute')
const redirecterRouter = require('./routes/redirecterRoute')

// Middlewear
app.use(reqIdentifier)
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use('/new', newUrlRoute)
app.use('/', indexRoute )
app.use('/rdr', redirecterRouter)


app.listen(process.env.port, ()=> {
    console.log(`Listening for connections on port ${process.env.port}`)
})