const { create } = require("../../repositories/appointments");

module.exports = async (req, res) => {
  const { patient, doctor, status, date, time } = req.body;
  const appointment = await create(patient, doctor, status, date, time);

  return res.status(201).json(appointment);
};
