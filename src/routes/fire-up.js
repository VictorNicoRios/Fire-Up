const express = require('express');
const router = express.Router();
const dbControllers = require('../controllers/dbControllers');

/** GET home page. */
router.get('/', function(req, res) {
  res.render('home');
});

/** GET contact page. */
router.get('/contact', function(req, res) {
  res.render('contact');
});

/** GET main page. */
router.get('/dashboard', function(req, res) {
    res.render('dashboard');
  });

/** Get all the rutines */
router.get('/dashboard/rutines', function(req, res) {
  res.render('dashboard');
});

/** Get a specific rutine */
router.get('/dashboard/rutines/:idrutine', function(req, res) {
  res.render('dashboard');
});

/** Get all the exercises */
router.get('/dashboard/exercises', function(req, res) {
  res.render('dashboard');
});


module.exports = router;
