const bcrypt = require("bcryptjs");

class Password {
  static hash(password) {
    return bcrypt.hash(password, 10);
  }

  static verify(plainPassword, hashedPassword) {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}

module.exports = Password;
