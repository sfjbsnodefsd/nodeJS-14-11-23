const express = require('express')
const app = express();


app.get("/",function(req,res) {
    res.send("Hello world")
})

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }
app.use(myLogger)
app.listen(3000, () => {
    console.log("application running on port 3000");
})

// write an endpoint where you will send a user body 
  // req // user : {
    //     name;
    //     age;
    //     city:
    // };   b  

    //res {
        // *name of the user* has been registered
        // on date and time of the registration
//    }