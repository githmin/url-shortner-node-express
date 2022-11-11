const express = require('express')
const router = express.Router();
const urlModel = require('../models/URL')


router.get('/' , async (req,res,next)=>{
    const urlList = await urlModel.find()
    res.render('index', { urlList : urlList})
})  


module.exports = router;
