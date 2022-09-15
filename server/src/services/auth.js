const bcrypt = require("bcrypt");
const { userByEmail } = require("../repositories/users");
// const { userByName } = require("../repositories/users");

const attemptLogin = async (email, password) => {
  const user = await userByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  const credentialsMatch = await bcrypt.compare(password, user.password);

  if (!credentialsMatch) {
    throw new Error("Bad credentials");
  }

  return user;
};

module.exports = { attemptLogin };
