const { all } = require("../../repositories/users");

module.exports = async (_, res) => {
  const users = await all();
  return res.json(users);
};
