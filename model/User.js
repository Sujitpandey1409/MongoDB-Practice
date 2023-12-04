const mongoose = require('mongoose')

const user = mongoose.Schema({
    email:{
        type: String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
        select: false
    }
})
module.exports = mongoose.model("user", user);