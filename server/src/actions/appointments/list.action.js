const { all } = require("../../repositories/appointments");

module.exports = async (req, res) => {
  const { filter, page, size } = req.query;

  const appointments = await all(filter, page, size);
  return res.json(appointments);
};
