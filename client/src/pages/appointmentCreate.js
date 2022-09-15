import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addNewAppointment } from "../services/appointments";
import { api } from "../services/api";

export default function AppointmentCreate() {
  const [appointment, setAppointment] = useState({
    patient: "",
    doctor: "",
    status: "pending",
    date: "",
    time: "",
  });
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  let navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewAppointment(appointment).then(alert("Created"));
    return navigate("/appointments");
  };

  useEffect(() => {
    api.get("/patients").then((res) => setPatients(res.data));
    api.get("/doctors").then((res) => setDoctors(res.data));
  }, []);

  return (
    <>
      <Link to="/appointments">Back</Link>
      <h1>New appointment</h1>

      <form className="my-3" method="post" noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Patient</label>
          <select
            className="form-select"
            name="patient"
            value={appointment.patient}
            onChange={handleInput}
          >
            <option value="">Select</option>
            {patients.map((patient) => (
              <option key={patient._id} value={patient._id}>
                {patient.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Doctor</label>
          <select
            className="form-select"
            name="doctor"
            value={appointment.doctor}
            onChange={handleInput}
          >
            <option value="">Select</option>
            {doctors.map((doctor) => (
              <option key={doctor._id} value={doctor._id}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            name="date"
            value={appointment.date}
            className="form-control"
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Time</label>
          <input
            type="text"
            name="time"
            value={appointment.time}
            className="form-control"
            onChange={handleInput}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </>
  );
}
