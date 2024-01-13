const jwt = require("jsonwebtoken");

class Jwt {
  static signAccessToken(
    payload,
    expiry = "360d",
    secret = process.env.JWT_ACCESS_SECRET
  ) {
    return jwt.sign(payload, secret, { expiresIn: expiry });
  }

  static verifyAccessToken(payload, secret = process.env.JWT_ACCESS_SECRET) {
    return jwt.verify(payload, secret);
  }

  static decodeAccessToken(payload) {
    return jwt.decode(payload);
  }

}

module.exports = Jwt;
