const express = require('express');
const { getDataController } = require('../controllers/dataController');

const router = express.Router();

router.get('/data', getDataController);

module.exports = router;
