const express = require('express');
const router = express.Router();
const dbControllers = require('../controllers/dbControllers');

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
router.get('/register', dbControllers.users_register);
router.post('/register', dbControllers.users_save);

module.exports = router;
