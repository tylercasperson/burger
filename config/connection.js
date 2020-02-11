var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "ixqxr3ajmyapuwmi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "zwcyxtg8ymm7j2tu",
    password: "r4qcrtfznirdo2hw",
    database: "mct5u4ax4mk4uaee"
});

connection.connect(function(err) {
    if(err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
