const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home');
});

/* GET main page. */
router.get('/dashboard', function(req, res) {
    res.render('dashboard');
  });

/* GET users list. */
router.get('/users', function(req, res) {
    res.render('users');
  });

/* GET register form. */
router.get('/register', usersController.register);
router.post('/register', usersController.save);

module.exports = router;
