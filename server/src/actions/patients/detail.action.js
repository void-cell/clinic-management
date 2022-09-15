const { byId } = require("../../repositories/patients");

module.exports = async (req, res) => {
  const { id } = req.params;
  const patient = await byId(id);
  return res.json(patient);
};
