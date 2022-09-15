const { update } = require("../../repositories/patients");

module.exports = async (req, res) => {
  let { id } = req.params;
  const { name, email, phone, birthday, taxNumber, insuranceCompany } =
    req.body;

  const patient = await update(
    id,
    name,
    email,
    phone,
    birthday,
    taxNumber,
    insuranceCompany
  );

  return res.status(200).json({ message: "Updated successfully" });
};
