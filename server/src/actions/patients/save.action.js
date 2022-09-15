const { create } = require("../../repositories/patients");

module.exports = async (req, res) => {
  const { name, email, phone, birthday, taxNumber, insuranceCompany } =
    req.body;
  // const photo = req.files?.photo;
  const photo = req.file?.photo;

  const patient = await create(
    name,
    email,
    phone,
    birthday,
    taxNumber,
    insuranceCompany,
    photo
  );

  return res.status(201).json(patient);
};
