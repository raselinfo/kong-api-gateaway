const prisma = require("../utils/prisma");

const getAllProductsService = async () => {
  const products = await prisma.product.findMany();
  return products;
};

module.exports = getAllProductsService;
