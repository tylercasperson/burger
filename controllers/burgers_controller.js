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
        res.redirect("/");
    });
});

router.put("/burgers/:id", function(request, res){
    // var id = request.params.id;
    // console.log(request);
    var condition = "id = " + request.params.id;
    burgers.updateOne(condition, function(result) {
        // res.json(data);
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;
