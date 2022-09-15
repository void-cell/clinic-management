const { updateUser } = require("../../repositories/users");

module.exports = async (req, res) => {
  const { user } = req.session;
  const { name, email, password } = req.body;

  const updatedUser = await updateUser(user._id, name, email, password);
  req.session.user = updatedUser;

  return res.json();
};
