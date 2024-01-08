const prisma = require("../utils/prisma");

const getProductByIdService = async (id) => {
  if (!id) {
    const error = new Error("Product id is required");
    error.status = 400;
    throw error;
  }
  const product = await prisma.product.findFirst({
    where: {
      id: id,
    },
  });

  if (!product) {
    const error = new Error("Product Not Found");
    error.stack = 404;
    throw error;
  }

  return product;
};

module.exports = getProductByIdService;
