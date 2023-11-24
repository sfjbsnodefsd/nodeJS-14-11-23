const express = require("express");
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const amqp = require("amqplib");
const Product = require("./Product");
const isAuthenticated = require("../isAuthenticated");
app.use(express.json());
var channel, connection;
var order;
mongoose.connect(
  "mongodb://localhost:27017/product-service",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`product service DB  Connected`);
    // console.log(pro);
  }
);

async function connect() {
  const amqpServer = "amqp://localhost:5672";
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
  await channel.assertQueue("PRODUCT");
}

connect();
// create a new product
// buy a new product

app.post("/product/create", isAuthenticated, async (req, res) => {
  const { name, description, price } = req.body;
  const newProduct = new Product({
    name,
    description,
    price,
  });
  newProduct.save();
  return res.json(newProduct);
});

// user will send a lift of the products that the user wants to buy , they will be identified by the product id
// the order will be created of those products and the sum of the products prices will be the total billing amount

app.post("/product/buy", isAuthenticated, async (req, res) => {
  const { ids } = req.body;
  const products = await Product.find({_id: { $in: ids }});

  channel.sendToQueue(
    "ORDER",
    Buffer.from(
      JSON.stringify({
        products,
        userEmail: req.user.email,
      })
    )
  );
  channel.consume("PRODUCT", data => {
    console.log("consuming product queue");
     order = JSON.parse(data.content);
     channel.ack(data);
  })
  return res.json(order)
});

app.listen(5001, () => {
  console.log(`product service is working at port 5001`);
});