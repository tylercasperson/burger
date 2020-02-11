var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burgers.insertOne(req.body.burger_name, function(data) {
        res.json({ id: data.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res){
    burgers.updateOne(req.body.devoured, req.params.id, function(data) {
        if(data.affectedRows === 0){
            return res.status(404).end();
        } else {
        res.status(200).end();
        }
    });
});

module.exports = router;
