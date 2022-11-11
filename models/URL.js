const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    full : { type : String , required : true},
    short : { type : String , required : true},
    clicks : { type : Number , default : 0},
    createdAt : { type: Number, default: new Date() }
})

module.exports = mongoose.model("urlSchema", urlSchema)