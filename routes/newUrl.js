const express = require('express')
const urlSchema = require('../models/URL')
const router = express.Router();
const randomstring = require("randomstring");


router.post('/' , async (req,res,next)=>{
   const newUrl = new urlSchema({
            full : req.body.full,
            short : randomstring.generate(8)
        })
    await newUrl.save()
    res.send("Done")
})  


module.exports = router;
