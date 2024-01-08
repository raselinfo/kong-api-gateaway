const updatedProductService = require("../services/updatedProductService");

const updateProductController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, price, quantity, userID } = req.body;
    const updatedProduct = await updatedProductService(id, {
      name,
      price,
      quantity,
      userID,
    });

    res.status(200).json({ message: "Success", product: updatedProduct });
  } catch (err) {
    next(err);
  }
};

module.exports = updateProductController;
