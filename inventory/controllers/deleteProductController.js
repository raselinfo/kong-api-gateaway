const deleteProductService = require("../services/deleteProductService");


const deleteProductController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedProduct = await deleteProductService(id);
    res.status(200).json({ message: "Success", product: deletedProduct });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteProductController;
