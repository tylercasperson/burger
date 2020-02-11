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
        res.json(data);
    });
});

router.put("/api/burgers/:id", function(req, res){
    burgers.updateOne(req.params.id, function(data) {
        res.json(data);
    });
});

module.exports = router;
