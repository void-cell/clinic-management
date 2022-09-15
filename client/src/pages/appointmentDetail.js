import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  getAppointmentById,
  removeAppointment,
  updateAppointment,
} from "../services/appointments";

export default function AppointmentDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [readOnly, setReadOnly] = useState(true);
  const [appointment, setAppointment] = useState({
    patient: "",
    doctor: "",
    status: "",
    date: "",
    time: "",
  });

  let { id } = useParams();
  let navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAppointment(id, appointment).then(alert("Updated"));
    return navigate("/appointments");
  };

  const handleEdit = () => {
    setReadOnly(!readOnly);
  };

  const handleDelete = () => {
    removeAppointment(id).then(alert("Removed"));
    return navigate("/appointments");
  };

  useEffect(() => {
    getAppointmentById(id)
      .then((res) => setAppointment(res))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}

      <Link to="/appointments">Back</Link>
      <div className="flex">
        <h1>Appointment {appointment._id}</h1>
        <div>
          {readOnly && (
            <button className="btn btn-danger right-m" onClick={handleDelete}>
              Delete
            </button>
          )}  
          <button
            className={`btn ${readOnly ? "btn-primary" : "btn-secondary"}`}
            onClick={handleEdit}
          >
            {!readOnly ? "Cancel" : "Edit"}
          </button>
        </div>
      </div>
      {appointment.updatedAt && (
        <p>
          <em>
            Last edited on: <strong>{appointment.updatedAt}</strong>
          </em>
        </p>
      )}

      <form className="my-3" method="post" noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Patient</label>
          <input
            type="text"
            name="patient"
            value={appointment.patient.name || ""}
            className="form-control"
            readOnly={readOnly}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Doctor</label>
          <input
            type="text"
            name="doctor"
            value={appointment.doctor.name || ""}
            className="form-control"
            readOnly={readOnly}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="text"
            name="date"
            value={appointment.date}
            className="form-control"
            onChange={handleInput}
            readOnly={readOnly}
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
            readOnly={readOnly}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            name="status"
            value={appointment.status}
            onChange={handleInput}
            disabled={readOnly && true}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {!readOnly ? (
          <button type="submit" className="btn btn-success mt-3">
            Save
          </button>
        ) : null}
      </form>
    </>
  );
}
