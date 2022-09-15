const { remove } = require("../../repositories/appointments");

module.exports = async (req, res) => {
  const { id } = req.params;
  await remove(id);

  return res.status(204).json();
};
