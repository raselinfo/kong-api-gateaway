const prisma = require("../utils/prisma");

const deleteProductService = async (id) => {
  if (!id) {
    const error = new Error("Product id is required");
    error.status = 400;
    throw error;
  }

  const existingProduct = await prisma.product.findFirst({
    where: {
      id: id,
    },
  
  })

  if (!existingProduct) {
    const error = new Error("Product not found");
    error.status = 404;
    throw error;
  }

  const deletedProduct = await prisma.product.delete({
    where: {
      id: id,
    },
  });

  console.log(deletedProduct)

  return deletedProduct;
};

module.exports = deleteProductService;
