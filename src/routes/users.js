const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
router.get('/register', usersController.register);
router.post('/add', usersController.save);
router.get('/list', usersController.list);
router.get('/a', usersController.a);
module.exports = router;
