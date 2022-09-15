// module.exports = async (req, res) => res.json({ message: "profile page" });
const { userById } = require("../../repositories/users");

module.exports = async (req, res) => {
  const { id } = req.params;
  const user = await userById(id);
  return res.json(user);
};
