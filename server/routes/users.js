/*File  Name: users.js
    Student Name: Nabil Malik
    Id: 301108920
    Date: 9 Oct 20*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
