const { byId } = require("../../repositories/appointments");

module.exports = async (req, res) => {
  const { id } = req.params;
  const appointment = await byId(id);
  return res.json(appointment);
};
