const express = require('express');
const router = express.Router();

const listsController = require('../controllers/listsController');
router.get('/', listsController.list);
router.post('/add', listsController.save);
module.exports = router;
