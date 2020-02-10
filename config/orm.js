var connection = require ("../config/connection.js");

var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, colToInsert, valOfCol, cb) {
        var querystring = "INSERT INTO burgers(burger_name, false VALUE(?, ?)";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableInput, colToUpdate, valOfCol, cb) {
        var querystring = "UPDATE burgers SET burger_name = ?, devouered = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, reuslt) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
