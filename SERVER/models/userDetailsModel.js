// Require Packages
const mongoose = require('mongoose')

// Creation of Scheme
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    coment:{
        type: String,
        required: true
    }
})

// Creation of Modules and Exporting Module
module.exports = mongoose.model('feedback', UserSchema)