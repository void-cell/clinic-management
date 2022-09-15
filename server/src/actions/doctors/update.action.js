const { update } = require("../../repositories/doctors");

module.exports = async (req, res) => {
  let { id } = req.params;
  const { name, email, phone, specialty, languages } = req.body;

  const doctor = await update(id, name, email, phone, specialty, languages);

  return res.status(200).json({ message: "Updated successfully" });
};
