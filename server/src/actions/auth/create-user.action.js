const { createUser } = require("../../repositories/users");

module.exports = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await createUser(name, email, password);

  res.status(201).json(user);
};
