var Order = require("./order");
const dboperations = require("./dboperations");
const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');
var app = express();
var router = express.Router()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use("/api",router)
app.listen(5000);
console.log("Order API is running on port 5000");


dboperations.getOrders().then(results => {
    console.log(results);
})