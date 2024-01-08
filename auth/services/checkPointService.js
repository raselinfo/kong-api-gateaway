const prisma = require("../utils/prisma");
const Jwt = require("../utils/Jwt");
const checkPointService = ({ token }) => {
  if (!token) {
    throw new Error("Access denied. No token provided.");
  }

  const decoded = Jwt.verifyAccessToken(token);
  const user = prisma.user.findUnique({
    where: {
      id: decoded.id,
    },
  });

  if (!user) {
    throw new Error("Access denied.");
  }
  return user;
};

module.exports = checkPointService;
