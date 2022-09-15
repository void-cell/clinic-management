import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addNewPatient } from "../services/patients";
import { insuranceCompanies } from "../utils";

export default function PatientCreate() {
  const [patient, setPatient] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    taxNumber: "",
    insuranceCompany: "",
    photo: "",
  });

  let navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewPatient(patient).then(alert("Created"));
    return navigate("/patients");
  };

  return (
    <>
      <Link to="/patients">Back</Link>
      <h1>New patient</h1>

      <form
        className="my-3"
        method="post"
        noValidate
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={patient.name}
            className="form-control"
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={patient.email}
            className="form-control"
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            value={patient.phone}
            className="form-control"
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Birthday</label>
          <input
            type="date"
            name="birthday"
            value={patient.birthday}
            className="form-control"
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tax Number</label>
          <input
            type="text"
            name="taxNumber"
            value={patient.taxNumber}
            className="form-control"
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Insurance</label>
          <select
            className="form-select"
            name="insuranceCompany"
            value={patient.insuranceCompany}
            onChange={handleInput}
          >
            {insuranceCompanies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </>
  );
}
