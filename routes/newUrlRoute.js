const express = require('express')
const urlSchema = require('../models/URL')
const router = express.Router();
const randomstring = require("randomstring");


router.post('/' , async (req,res,next)=>{
   const newUrl = new urlSchema({
            full : req.body.full,
            short : randomstring.generate(4)
        })
    await newUrl.save()
    res.redirect('/')
})  


module.exports = router;
