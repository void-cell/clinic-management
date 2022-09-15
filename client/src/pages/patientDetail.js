import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  getPatientById,
  removePatient,
  updatePatient,
} from "../services/patients";
import { insuranceCompanies } from "../utils";

export default function PatientDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [readOnly, setReadOnly] = useState(true);
  const [patient, setPatient] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    taxNumber: "",
    insuranceCompany: "",
  });

  let { id } = useParams();
  let navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePatient(id, patient).then(alert("Updated"));
    return navigate("/patients");
  };

  const handleEdit = () => {
    setReadOnly(!readOnly);
  };

  const handleDelete = () => {
    removePatient(id).then(alert("Removed"));
    return navigate("/patients");
  };

  useEffect(() => {
    getPatientById(id)
      .then((res) => setPatient(res))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}

      <Link to="/patients">Back</Link>
      <div className="flex">
        <h1>{patient.name}</h1>
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
      {patient.updatedAt && (
        <p>
          <em>
            Last edited on: <strong>{patient.updatedAt}</strong>
          </em>
        </p>
      )}

      <form className="my-3" method="post" noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={patient.name}
            className="form-control"
            onChange={handleInput}
            readOnly={readOnly}
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
            readOnly={readOnly}
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
            readOnly={readOnly}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Birthday</label>
          <input
            type="text"
            name="birthday"
            value={patient.birthday}
            className="form-control"
            onChange={handleInput}
            readOnly={readOnly}
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
            readOnly={readOnly}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Insurance</label>
          <select
            className="form-select"
            name="insuranceCompany"
            value={patient.insuranceCompany}
            onChange={handleInput}
            disabled={readOnly && true}
          >
            {insuranceCompanies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
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
