const Portfolio = require('../models/Portfolio');

const getPortfolio = async (req, res, next) => {
  try {
    const items = await Portfolio.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

module.exports = { getPortfolio };