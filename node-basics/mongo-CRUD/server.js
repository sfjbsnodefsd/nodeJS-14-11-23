const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config();
const userRouter = require('./routes/users')
const bodyParser =require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(userRouter)

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