const bcrypt = require("bcryptjs");

async function createPasswordHash(password) {
  bcrypt.hash(password, 8);
}

module.exports = createPasswordHash;
