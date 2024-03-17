const express = require('express');
const router = express.Router();
const StudentDetails = require('../models/studentNewData');
const { test } = require('../controllers/StudetnsDetailsControls');

router.get('/', test);

router.get('/details', async (req, res) => {
    const { roll_number } = req.body; // Use req.query to access query parameters
    try {
        const response = await StudentDetails.findOne({ roll_number: roll_number });
        if (!response) {
            return res.status(404).json({ message: 'not found' });
        }
        return res.status(200).json(response); // Send the retrieved data in the response
    } catch (err) {
        return res.status(500).json({ module: 'Internal Server error' });
    }
});
router.get('/certification',async (req,res)=>{
    
})
module.exports = router;
