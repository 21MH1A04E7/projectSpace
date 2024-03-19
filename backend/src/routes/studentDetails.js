const express = require('express');
const router = express.Router();
const {detailsController}= require('../controllers/StudetnsDetailsControls')
const {TrainingController,certificationController}=require('../controllers/TrainingController')



router.post('/details',detailsController);
router.post('/training',TrainingController)
router.post('/certification',certificationController)

module.exports = router;
