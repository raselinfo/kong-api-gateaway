const prisma = require("../utils/prisma");

const getAllProductsByUserIDService = async (userId) => {
  if (!userId) {
    const error = new Error("User id is required");
    error.status = 400;
    throw error;
  }

  const products = await prisma.product.findMany({
    where: {
      createdBy: userId,
    },
  });

  return products;
};

module.exports = getAllProductsByUserIDService;
