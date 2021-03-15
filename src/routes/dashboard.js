const express = require('express');
const router = express.Router();

/* GET dash page. */
router.get('/', function(req, res, next) {
  res.render('dashboard');
  });

module.exports = router;
