var Connection = require('tedious').Connection;
const config = {
  user: "sa",
  password: "root",
  server: "localhost",
  database: "Products",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instanceName: "sqlexpress",
  },
  port: 55892,
};

var connection = new Connection(config);
connection.on('connect', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');
  }
});

module.exports = config;
