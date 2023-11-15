// Built in modules ->  modules which are buil inside node and helps us to develop applications
// FS -> file system
// PATH -
// OS
//HTTP

const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  // res.write("Welcome to our home page")
  // res.end()
  if (req.url === "/") {
    res.end("Welcome to our home page Nishant today is a good day");
  }
  if (req.url === "/about") {
    res.end("WElcome to the about page");
  }

});

server.listen(4000);
