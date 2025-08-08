const Service = require('../models/Service');

const getServices = async (req, res, next) => {
  try {
    const services = await Service.find().sort({ price: 1 });
    res.status(200).json(services);
  } catch (error) {
    next(error);
  }
};

module.exports = { getServices };