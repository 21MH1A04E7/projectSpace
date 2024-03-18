const StudentDetails = require('../models/studentNewData');

const test = async (req, res) => {
    res.status(200).json({ message: 'hello' });
}

const detailsController = async (req, res) => {
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
}

module.exports = {
    test,
    detailsController
}
