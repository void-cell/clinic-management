import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllAppointments } from "../services/appointments";
import Pagination from "../components/Pagination";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState({
    patient: "",
    doctor: "",
    date: "",
    status: "",
  });
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getAllAppointments(filter, currentPage, limit)
      .then((res) => setAppointments(res))
      .finally(() => setIsLoading(false));
  }, [filter, currentPage, limit]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <>
      <div className="flex">
        <h1 className="mb-3">Appointments</h1>
        <div className="col-auto">
          <select className="form-select" name="status" onChange={handleInput}>
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      <div className="mb-5">
        <Link to="/appointments/new">Add new appointment</Link>
      </div>

      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Patient</th>
            <th scope="col">Doctor</th>
            <th scope="col">Specialty</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
          {appointments.map((appointment, i) => (
            <tr key={appointment._id}>
              <th scope="row">{i + 1}</th>
              <td>
                <Link to={`/appointments/${appointment._id}`}>
                  {appointment.patient.name}
                </Link>
              </td>
              <td>{appointment.doctor.name}</td>
              <td>{appointment.doctor.specialty}</td>
              <td>{appointment.date.slice(0, 10)}</td>
              <td>{appointment.time}</td>
              <td>{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        setTotalPages={setTotalPages}
      />
    </>
  );
}
