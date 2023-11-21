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


module.exports = config;
