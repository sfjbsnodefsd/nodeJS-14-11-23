const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  // res.write("Welcome to our home page")
  // res.end()
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("WElcome to the about page");
  }
  res.end(`
<h1>Page not found 404</h1>`);
});

server.listen(4000);
