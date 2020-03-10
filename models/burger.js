var orm = require("../config/orm.js");

var burgers = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(burger_name, cb) {
        orm.insertOne(burger_name, function(res) {
            cb(res);
        });
    },
    updateOne: function(condition, cb) {
        orm.updateOne(condition, function(res) {
            cb(res);
        });
    },
    deleteOne: function(id, cb) {
        console.log(id);
        orm.deleteOne(id, function(res){
            cb(res);
            console.log(res);
        });
    }
};

module.exports = burgers;
