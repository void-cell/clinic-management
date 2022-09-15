const { update } = require("../../repositories/appointments");

module.exports = async (req, res) => {
  let { id } = req.params;
  const { patient, doctor, status, date, time } = req.body;

  const appointment = await update(id, patient, doctor, status, date, time);

  return res.status(200).json({ message: "Updated successfully" });
};
