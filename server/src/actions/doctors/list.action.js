const { all } = require("../../repositories/doctors");

module.exports = async (req, res) => {
  const { filter, page, size } = req.query;

  const doctors = await all(filter, page, size);
  return res.json(doctors);
};
