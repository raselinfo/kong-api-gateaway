const getProductByIdService = require("../services/getProductByIdService");

const getProductByIdController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await getProductByIdService(id);
    res.status(200).json({ message: "Success", product });
  } catch (err) {
    next(err);
  }
};


module.exports = getProductByIdController;