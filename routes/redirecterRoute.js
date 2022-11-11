const express = require('express')
const router = express.Router()
const urlSchema = require('../models/URL')

router.get('/:id', async (req,res,next)=>{
    const fullInfo = await urlSchema.find().where('short').equals(req.params.id)
    res.redirect(`https://${fullInfo[0].full}`)
})



module.exports = router;