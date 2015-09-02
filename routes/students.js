var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var students = require('../models/students.json');

router.post('/', function(req, res, next) {
  var studentsArray = students;
  studentsArray.push(req.body.firstName + " " + req.body.lastName);
  console.log(studentsArray);

  var file = path.join(__dirname, '../models/students.json');

  fs.writeFile(file, JSON.stringify(studentsArray), function(){
      res.sendStatus(200);
  });
});

module.exports = router;
