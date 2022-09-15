const Doctor = require("../models/Doctor");

const all = async (filter = undefined, page, size) => {
  let pagination = {
    limit: size,
    skip: size * (page - 1),
  };

  let filterData = {};

  if (filter) {
    filterData = {
      name: {
        $regex: `.*${filter}.*`,
        $options: "i",
      },
    };
    
    return Doctor.find(filterData).lean();
  }

  return Doctor.find(filterData)
    .limit(pagination.limit)
    .skip(pagination.skip)
    .lean();
};

const byId = async (id) => {
  return Doctor.findById(id).lean();
};

const create = async (
  name,
  email,
  phone,
  specialty,
  languages,
  availableFrom,
  availableTo,
  availableSlots
) => {
  return Doctor.create({
    name,
    email,
    phone,
    specialty,
    languages,
    availableFrom,
    availableTo,
    availableSlots,
  });
};

const update = async (id, name, email, phone, specialty, languages) => {
  return Doctor.findByIdAndUpdate(id, {
    $set: { name, email, phone, specialty, languages },
  });
};

const remove = async (id) => {
  const doctor = await Doctor.findById(id);
  return doctor.deleteOne();
};

module.exports = { all, byId, create, update, remove };
