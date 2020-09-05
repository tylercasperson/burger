var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

router.get('/', function (req, res) {
  burgers.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    res.render('index', hbsObject);
  });
});

router.post('/api/burgers', function (req, res) {
  if (req.body.burger_name === undefined) {
    burgers.insertOriginal(function (result) {
      res.redirect('/');
    });
  } else {
    burgers.insertOne(req.body.burger_name, function (data) {
      res.redirect('/');
    });
  }
});

router.put('/burgers/:id', function (request, res) {
  var condition = 'id = ' + request.params.id;
  burgers.updateOne(condition, function (result) {
    console.log(result);
    res.sendStatus(200);
  });
});

router.delete('/api/burgers/:id', function (req, res) {
  var condition = req.params.id;
  burgers.deleteOne(condition, function () {
    res.status(202).end();
  });
});

router.put('/api/burgers', function (req, res) {
  burgers.reset(function (result) {
    console.log(result);
    res.sendStatus(200);
  });
});

router.delete('/api/burgers', function (req, res) {
  burgers.deleteAll(function (result) {
    console.log(result);
    res.sendStatus(200);
  });
});

module.exports = router;
