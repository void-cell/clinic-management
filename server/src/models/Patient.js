const { Schema, model } = require("mongoose");

const PatientSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    birthday: Date,
    taxNumber: String,
    insuranceCompany: String,
    clientNumber: String,
    photo: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Patient", PatientSchema);
