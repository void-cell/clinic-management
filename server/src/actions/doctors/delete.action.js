const { remove } = require("../../repositories/doctors");

module.exports = async (req, res) => {
  const { id } = req.params;
  await remove(id);

  return res.status(204).json();
};
