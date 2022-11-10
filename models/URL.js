const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    full : { type : String , required : true},
    short : { type : String , required : true},
    clicks : { type : Number , required : true}
})

module.exports = mongoose.model("urlSchema", urlSchema)