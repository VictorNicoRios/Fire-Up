const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

/* GET A RAW USERS LIST FROM MYSQL. */
router.get('/users', usersController.list);


module.exports = router;
