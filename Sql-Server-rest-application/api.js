var Order = require("./order");
const dboperations = require("./dboperations");
const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);
app.listen(5000);
console.log("Order API is running on port 5000");

router.use((req, res, next) => {
  console.log("middleware");
  next();
});
 // to get all orders in our api 
router.route("/orders").get((req, res) => {
  dboperations.getOrders().then((results) => {
    res.json(results[0])
  });
});

// to get an order by id using api 

router.route("/order/:id").get((req,res) => {
    dboperations.getOrder(req.params.id).then(result => {
        res.json(result[0])
    })
})


// to add a order into the database
router.route("/addorder").post((req,res) => {
    let order = {...req.body}
    dboperations.addOrder(order).then(result => {
        res.status(201).json(result);
    })
})


//to delete order by id
router.route("/delorder/:id").delete((req,res) => {
    dboperations.deleteOrder(req.params.id).then(result => {
        res.json(result[0])
    })
})

// api to update an order
router.route("/updateorder").put((req,res) => {
    let order = {...req.body}
    dboperations.updateOrder(order).then(result => {
        res.status(200).json(result);
    })
})