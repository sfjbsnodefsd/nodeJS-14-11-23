const express = require('express')
const app = express()
const mongoose = require('mongoose')
// mongoose.connect()
require("dotenv").config();

app.get("/", (req,res) =>{
    res.send("Hello, this is NodeJS Rest API App.")
})

mongoose.connect(process.env.DB_CONNECTION_URL).then(()=>{
    console.log("DB connected successfully")
})

app.listen(process.env.PORT, ()=>{
    console.log('App running on port 4000')
})

// app.listen(4000, ()=>{
//     console.log('App running on port 4000')
// })