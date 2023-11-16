const { mongo, default: mongoose } = require("mongoose");

const User = mongoose.Schema({
    name:{
        type:String,
        require: true

    },
    city:{
        type:String,
        require: true

    },
    email:{
        type:String,
        require: true

    },
    active:true
})

module.exports = mongoose.model("users", User);