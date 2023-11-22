var config = require("./dbconfig");
const sql = require("mssql");


// write a function to get a list of all products
async function getOrders() {
    try{
        let pool = await sql.connect(config); // connecting to the database first
        let products = await pool.request().query("SELECT * FROM Orders"); // we will send the request and the query
        return products.recordsets; // we will return the response form the running query 
    }
    catch (err) { // log the error if any issue
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

async function addOrder(order) {
    try {
        let pool = await sql.connect(config);
        let insertProduct = await pool.request()
        .input("Id", sql.NChar, order.Id)
        .input("Title",sql.NVarChar,order.Title)
        .input("Quantity",sql.Numeric,order.Quantity)
        .input("Message",sql.NVarChar,order.Message)
        .input("City",sql.NVarChar,order.City)
        .query("INSERT INTO Products.dbo.Orders (Id, Title, Quantity, Message, City) VALUES (@Id, @Title, @Quantity,  @Message, @City);")
        return insertProduct.recordset;

    }  catch (err) {
        console.log(err);
    }
}


async function deleteOrder(orderId) {
    try {
        let pool = await sql.connect(config);
        let deleteproduct = await pool.request()
        .input("id", sql.Int, orderId) 
        .query("DELETE FROM Products.dbo.Orders WHERE Id = @id")
        return deleteproduct.output;

    } catch(err) {
        console.log(err);
    }
}

async function updateOrder(order) {
    try {
        let pool = await sql.connect(config);
        let updateProduct = await pool.request()
        .input("Id", sql.NChar, order.Id)
        .input("Title",sql.NVarChar,order.Title)
        .input("Quantity",sql.Numeric,order.Quantity)
        .input("Message",sql.NVarChar,order.Message)
        .input("City",sql.NVarChar,order.City)
        .query("UPDATE Orders SET Title=@Title, Quantity =@Quantity, Message = @Message, City= @City  WHERE Id=@Id")
        return updateProduct.recordset;


    }  catch (err) { 
        console.log(err);
    }
}

// where you look for order for specific quantities


module.exports = {
    getOrders : getOrders,
    getOrder : getOrder,
    addOrder : addOrder,
    deleteOrder : deleteOrder,
    updateOrder : updateOrder
}