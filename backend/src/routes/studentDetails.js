const express = require('express');
const router = express.Router();
const { test, detailsControllers } = require('../controllers/StudetnsDetailsControls');
const {detailsController}= require('../controllers/StudetnsDetailsControls')

router.get('/', test);

router.post('/details',detailsController);

module.exports = router;
