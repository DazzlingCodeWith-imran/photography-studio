const Booking = require('../models/Booking');

const createBooking = async (req, res, next) => {
  const { service, date } = req.body;
  try {
    const booking = new Booking({ user: req.user.id, service, date });
    await booking.save();
    res.status(201).json({ message: 'Booking created' });
  } catch (error) {
    next(error);
  }
};

module.exports = { createBooking };