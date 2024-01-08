const getAllProductsByUserIDService = require("../services/getAllProductsByUserIDService");

const getAllProductsByUserIDController = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const products = await getAllProductsByUserIDService(userId);
    res.status(200).json({ message: "Success", products: products });
  } catch (err) {
    next(err);
  }
};

module.exports = getAllProductsByUserIDController;
