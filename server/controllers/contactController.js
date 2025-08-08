const ContactMessage = require('../models/ContactMessage');

const submitContact = async (req, res, next) => {
  const { name, email, phone, message } = req.body;
  try {
    const contact = new ContactMessage({ name, email, phone, message });
    await contact.save();
    res.status(201).json({ message: 'Contact form submitted' });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitContact };