const Appointment = require("../models/Appointment");

const all = async (filter = {}, page, size) => {
  let pagination = {
    limit: size,
    skip: size * (page - 1),
  };

  let filterData = {};

  if (filter) {
    filterData = {
      status: {
        $regex: `.*${filter}.*`,
        $options: "i",
      },
    };

    return Appointment.find(filterData)
      .lean()
      .populate([
        { path: "patient", select: "name" },
        { path: "doctor", select: ["name", "specialty"] },
      ]);
  }

  return Appointment.find(filterData)
    .limit(pagination.limit)
    .skip(pagination.skip)
    .populate([
      { path: "patient", select: "name" },
      { path: "doctor", select: ["name", "specialty"] },
    ])
    .lean();
};

const byId = async (id) => {
  return Appointment.findById(id).populate(["patient", "doctor"]).lean();
};

const create = async (patient, doctor, status, date, time) => {
  return Appointment.create({
    patient,
    doctor,
    status,
    date,
    time,
  });
};

const update = async (id, patient, doctor, status, date, time) => {
  return Appointment.findByIdAndUpdate(id, {
    $set: { patient, doctor, status, date, time },
  });
};

const remove = async (id) => {
  const appointment = await Appointment.findById(id);
  return appointment.deleteOne();
};

module.exports = { all, byId, create, update, remove };
