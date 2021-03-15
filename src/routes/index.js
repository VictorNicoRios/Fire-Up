const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.send(console.log('aloha'));
  res.render('index');
});

module.exports = router;
