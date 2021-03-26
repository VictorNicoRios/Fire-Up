const express = require('express');
const router = express.Router();
const dbControllers = require('../controllers/dbControllers');

/* GET A RAW LIST FROM MYSQL. */
router.get('/users', dbControllers.users_list);
router.get('/exercises', dbControllers.exercises_list);
router.get('/rutines', dbControllers.rutines_list);

module.exports = router;