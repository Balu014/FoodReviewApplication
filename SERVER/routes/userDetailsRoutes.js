const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const userDetailsModel = require('../models/userDetailsModel')


// Get All Associates Data using GET method
router.get('/',async(req,res)=> {
    var AssociateData = await userDetailsModel.find()
    res.json(AssociateData)
})


// Post Associate data using POST method
router.post('/', async(req,res)=>{
    var AssociateData = {
        name: req.body.name,
        email : req.body.email,
        coment :req.body.coment
    }
    const postdata = await new userDetailsModel(AssociateData)
    postdata.save().then(dbres=> {
        res.json(dbres)
    })
})

// Exporting Module
module.exports = router