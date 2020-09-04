var connection = require('./connection');

var orm = {
  selectAll: function (cb) {
    var queryString = 'SELECT * FROM burgers';
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  insertOne: function (burger_name, cb) {
    var queryString = 'INSERT INTO burgers(burger_name, devoured) ';
    queryString += " VALUES('" + burger_name + "', false) ";
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne: function (condition, cb) {
    console.log(condition);
    var queryString =
      'UPDATE burgers SET devoured = true WHERE ' + condition + ';';
    console.log(queryString);
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  deleteOne: function (condition, cb) {
    console.log(condition);
    var queryString = 'DELETE FROM burgers WHERE id = ' + condition + ';';
    console.log(queryString);
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  deleteAll: function (cb) {
    var queryString = 'DELETE FROM burgers;';

    connection.query(queryString, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  insertOriginal: function (cb) {
    var queryString =
      "INSERT INTO burgers(burger_name, devoured) VALUES ('Luger Burger', false), ('Le Pigeon Burger', true), ('Double Animal Inside', false);";

    connection.query(queryString, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
};

module.exports = orm;
