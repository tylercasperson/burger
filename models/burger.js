var orm = require('../config/orm.js');

var burgers = {
  selectAll: function (cb) {
    orm.selectAll(function (res) {
      cb(res);
    });
  },
  insertOne: function (burger_name, cb) {
    orm.insertOne(burger_name, function (res) {
      cb(res);
    });
  },
  updateOne: function (condition, cb) {
    orm.updateOne(condition, function (res) {
      cb(res);
    });
  },
  deleteOne: function (id, cb) {
    orm.deleteOne(id, function (res) {
      cb(res);
    });
  },
  deleteAll: function (cb) {
    orm.deleteAll(function (res) {
      cb(res);
    });
  },
  insertOriginal: function (cb) {
    orm.insertOriginal(function (res) {
      cb(res);
    });
  },
};

module.exports = burgers;
