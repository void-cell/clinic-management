const { Schema, model } = require("mongoose");

const AppointmentSchema = new Schema(
  {
    patient: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
    status: String,
    date: Date,
    time: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Appointment", AppointmentSchema);
