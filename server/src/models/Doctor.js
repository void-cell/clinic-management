const { Schema, model } = require("mongoose");

const DoctorSchema = new Schema(
  {
    photo: String,
    name: String,
    email: String,
    phone: String,
    specialty: String,
    languages: [String],
    availableSlots: [
      {
        weekDay: String,
        startHour: String,
        endHour: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

DoctorSchema.virtual("timeSlot").get(function () {
  return availableSlots;
});

module.exports = model("Doctor", DoctorSchema);
