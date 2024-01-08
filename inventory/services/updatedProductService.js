const prisma = require("../utils/prisma");

const updatedProductService = async (id, product) => {
  if (!id) {
    const error = new Error("Product id is required");
    error.status = 400;
    throw error;
  }

  const existingProduct = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  const updatedProduct = await prisma.product.update({
    where: {
      id: id,
    },
    data: {
      name: product.name || existingProduct.name,
      price: product.price || existingProduct.price,
      quantity: product.quantity || existingProduct.quantity,
    },
  });


  return updatedProduct;
};

module.exports = updatedProductService;
