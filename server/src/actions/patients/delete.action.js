const { remove } = require("../../repositories/patients");

module.exports = async (req, res) => {
  const { id } = req.params;
  await remove(id);

  return res.json({ message: "Patient removed from database" });
};
