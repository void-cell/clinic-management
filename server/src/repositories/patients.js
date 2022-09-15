const Patient = require("../models/Patient");
const { randomInt } = require("crypto");

const all = async (filter = undefined, page, size, sort, order) => {
  let sortData = {};
  let filterData = {};

  if (sort) {
    switch (sort) {
      case "birthday":
        sortData = { birthday: order };
        break;
      case "name":
        sortData = { name: order };
        break;
      case "insuranceCompany":
        sortData = { insuranceCompany: order };
        break;
    }
  }

  if (filter) {
    filterData = {
      name: {
        $regex: `.*${filter}.*`,
        $options: "i",
      },
    };
    return Patient.find(filterData).lean();
  }

  let pagination = {
    limit: size,
    skip: size * (page - 1),
  };

  return Patient.find(filterData)
    .sort(sortData)
    .limit(pagination.limit)
    .skip(pagination.skip)
    .lean();
};

const byId = async (id) => Patient.findById(id).lean();

const create = async (
  name,
  email,
  phone,
  birthday,
  taxNumber,
  insuranceCompany,
  photo
) => {
  return Patient.create({
    name,
    email,
    phone,
    birthday,
    taxNumber,
    insuranceCompany,
    photo,
    clientNumber: randomInt(0, 10000000),
  });
};

const update = async (
  id,
  name,
  email,
  phone,
  birthday,
  taxNumber,
  insuranceCompany
) => {
  return Patient.findByIdAndUpdate(id, {
    $set: { name, email, phone, birthday, taxNumber, insuranceCompany },
  });
};

const remove = async (id) => {
  const patient = await Patient.findById(id);
  return patient.deleteOne();
};

module.exports = { all, byId, create, update, remove };
