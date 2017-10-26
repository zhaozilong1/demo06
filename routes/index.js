var express = require('express');
var router = express.Router();
var fs = require("fs");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'zhao19940801'
})
/* GET home page. */
router.post('/', function(req, res, next) {

  connection.connect();
  connection.query("SELECT * FROM class.1701",function(err,rows,next){
    res.header("Access-Control-Allow-Origin","*")
    res.send(rows)
  })
});

module.exports = router;
