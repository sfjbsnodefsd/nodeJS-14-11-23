var config = require("./dbconfig");
const sql = require("mssql");


// write a function to get a list of all products
async function getOrders() {
    try{
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * FROM Orders");
        return products.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

//write a function to get an order by id 
async function getOrder(orderId) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
        .input("input_parameter", sql.Int, orderId)
        .query("SELECT * FROM Orders where Id = @input_parameter")
        return product.recordsets;
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    getOrders : getOrders,
    getOrder : getOrder
}