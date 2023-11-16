const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRouter = require("./routes/users")
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(userRouter)

app.get("/" , (req,res) =>{
    res.send("Hello and welcome to the node js Rest API application")
})

mongoose.connect(process.env.DB_CONNECTION_URL).then(() => console.log('Connected!'));

app.listen(process.env.PORT, () => {
    console.log("App running on post 4000");
})

