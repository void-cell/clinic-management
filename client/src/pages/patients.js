import React, { useState, useEffect } from "react";

import SearchFilter from "../components/SearchFilter";
import { Link } from "react-router-dom";
import { getAllPatients } from "../services/patients";
import Pagination from "../components/Pagination";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [order, setOrder] = useState("asc");

  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);

  useEffect(() => {
    getAllPatients(filter, currentPage, limit, sortBy, order)
      .then((res) => setPatients(res))
      .finally(() => setIsLoading(false));
  }, [filter, currentPage, sortBy, limit, order]);

  const handleInput = (e) => {
    setFilter(e.target.value);
  };

  const handleSortBy = (e) => {
    let field;
    switch (e.target.innerText) {
      case "Name":
        field = "name";
        break;
      case "Date of Birth":
        field = "birthday";
        break;
      case "Insurance":
        field = "insuranceCompany";
        break;
      default:
        field = "name";
    }

    setSortBy(field);
    return setOrder(order === "asc" ? "desc" : "asc");
  };

  return (
    <>
      <div className="flex">
        <h1>Patients</h1>
        <SearchFilter title="Patient" handleInput={handleInput} />
      </div>
      <div className="mb-5">
        <Link to="/patients/new">Add new patient</Link>
      </div>

      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" onClick={handleSortBy} className="cursor-click">
              Name
            </th>
            <th scope="col">Email</th>
            <th scope="col" onClick={handleSortBy} className="cursor-click">
              Date of Birth
            </th>
            <th scope="col">Tax Number</th>
            <th scope="col" onClick={handleSortBy} className="cursor-click">
              Insurance
            </th>
            <th scope="col">Client Number</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
          {patients.map((patient, i) => (
            <tr key={patient._id}>
              <th scope="row">{i + 1}</th>
              <td>
                <Link to={`/patients/${patient._id}`}>{patient.name}</Link>
              </td>
              <td>{patient.email}</td>
              <td>{patient.birthday.slice(0, 10)}</td>
              <td>{patient.taxNumber}</td>
              <td>{patient.insuranceCompany}</td>
              <td>{patient.clientNumber}</td>
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
