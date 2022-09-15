import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getDoctorById, removeDoctor, updateDoctor } from "../services/doctors";
import { languages, medicalSpecialties } from "../utils";

export default function DoctorDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [readOnly, setReadOnly] = useState(true);
  const [doctor, setDoctor] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    languages: [],
  });

  let { id } = useParams();
  let navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDoctor(id, doctor).then(alert("Updated"));
    return navigate("/doctors");
  };

  const handleEdit = () => setReadOnly(!readOnly);

  const handleDelete = () => {
    removeDoctor(id).then(alert("Removed"));
    return navigate("/doctors");
  };

  useEffect(() => {
    getDoctorById(id)
      .then((res) => setDoctor(res))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}

      <Link to="/doctors">Back</Link>
      <div className="flex">
        <h1>{doctor.name}</h1>
        <div>
          {readOnly && (
            <button className="btn btn-danger right-m" onClick={handleDelete}>
              Delete
            </button>
          )}
          <button
            className={`btn  ${readOnly ? "btn-primary" : "btn-secondary"}`}
            onClick={handleEdit}
          >
            {!readOnly ? "Cancel" : "Edit"}
          </button>
        </div>
      </div>
      {doctor.updatedAt && (
        <p>
          <em>
            Last edited on: <strong>{doctor.updatedAt}</strong>
          </em>
        </p>
      )}

      <form className="my-3" method="post" noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={doctor.name}
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
            value={doctor.email}
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
            value={doctor.phone}
            className="form-control"
            onChange={handleInput}
            readOnly={readOnly}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Specialty</label>
          <select
            className="form-select"
            name="specialty"
            value={doctor.specialty}
            onChange={handleInput}
            disabled={readOnly && true}
          >
            {medicalSpecialties.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Languages</label>
          {languages.map((language) => (
            <div key={language} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="languages"
                value={language}
                id={language}
                onChange={handleInput}
                disabled={readOnly && true}
              />
              <label htmlFor={language} className="form-check-label">
                {language}
              </label>
            </div>
          ))}
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
