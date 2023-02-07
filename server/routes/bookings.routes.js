const express = require('express');
const router = express.Router({ mergeParams: true });
const Booking = require('../models/Booking')

router.get('/', async (req, res) => {
    try {
        const list = await Booking.find();
        res.status(200).send({ list });
    } catch (e) {
        res.status(500).json({
            message: 'Server error! Try again later'
        });
    }
});

module.exports = router;
