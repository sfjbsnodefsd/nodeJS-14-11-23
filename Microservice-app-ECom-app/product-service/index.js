const express = require("express")
const app = express();
const PORT = 6000
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const amqp = require("amqplib")
const Product = require("./Product");
const isAuthenticated = require("../isAuthenticated");
app.use(express.json());



mongoose.connect(
    "mongodb://localhost:27017/product-service",
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    } 
)


// async function connect() {
//     const ampqserver = "ampq://localhost:5672"; 
//     connection = await amqp.connect(ampqserver);
//     channel = await connection.createChannel();
//     await channel.assertQueue("PRODUCT");
// }
// connect();

// to add a new product to the db
app.post("/product/create", isAuthenticated,async (req,res) => {
    const {name, description, price} = req.body;
    const newProduct = new Product({
        name,
        description,
        price
    })
    newProduct.save();
    return res.json(newProduct);
})


app.listen(PORT, () => {
    console.log("product service running on port 6000")
})