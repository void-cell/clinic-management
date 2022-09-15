const { all } = require("../../repositories/patients");

module.exports = async (req, res) => {
  const { filter, page, size, sort_by, order_by } = req.query;

  const patients = await all(filter, page, size, sort_by, order_by);
  return res.json(patients);
};
