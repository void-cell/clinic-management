const { byId } = require("../../repositories/doctors");

module.exports = async (req, res) => {
  const { id } = req.params;
  const doctor = await byId(id);
  return res.json(doctor);
};
