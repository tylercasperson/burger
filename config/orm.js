var connection = require ("./connection");

var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function(burger_name, cb) {
        var queryString = "INSERT INTO burgers(burger_name, devoured) ";
        queryString += " VALUES('" + burger_name + "', false) ";
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(id, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id=" + id;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;
