var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    portL 4750,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if(err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;