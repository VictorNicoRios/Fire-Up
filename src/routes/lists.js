const express = require('express');
const router = express.Router();

const listsController = require('../controllers/listsController');
router.get('/', listsController.list);

module.exports = router;
