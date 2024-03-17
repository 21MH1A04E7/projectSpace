const test=async (req, res) => {
    res.status(200).json({ message: 'hello' });
}

module.exports={
    test
}