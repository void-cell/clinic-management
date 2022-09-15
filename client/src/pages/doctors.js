import React, { useState, useEffect } from "react";

import SearchFilter from "../components/SearchFilter";
import { Link } from "react-router-dom";
import { getAllDoctors } from "../services/doctors";
import Pagination from "../components/Pagination";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);

  useEffect(() => {
    getAllDoctors(filter, currentPage, limit)
      .then((res) => setDoctors(res))
      .finally(() => setIsLoading(false));
  }, [filter, currentPage, limit]);

  const handleInput = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div className="flex">
        <h1>Doctors</h1>
        <SearchFilter title="Doctor" handleInput={handleInput} />
      </div>
      <div className="mb-5">
        <Link to="/doctors/new">Add new doctor</Link>
      </div>

      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Specialty</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Languages</th>
            <th scope="col">Availabilty</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
          {doctors.map((doctor, i) => (
            <tr key={doctor._id}>
              <th scope="row">{i + 1}</th>
              <td>
                <Link to={`/doctors/${doctor._id}`}>{doctor.name}</Link>
              </td>
              <td>{doctor.specialty}</td>
              <td>{doctor.email}</td>
              <td>{doctor.phone}</td>
              <td>
                {doctor.languages.map((l) => (
                  <button key={l} className="btn btn-secondary btn-sm mx-1">
                    {l}
                  </button>
                ))}
              </td>
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
