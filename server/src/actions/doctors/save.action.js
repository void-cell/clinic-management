const { create } = require("../../repositories/doctors");

module.exports = async (req, res) => {
  const {
    name,
    email,
    phone,
    specialty,
    languages,
    availableFrom,
    availableTo,
    availableSlots,
  } = req.body;
  const doctor = await create(
    name,
    email,
    phone,
    specialty,
    languages,
    availableFrom,
    availableTo,
    availableSlots
  );

  return res.status(201).json(doctor);
};
