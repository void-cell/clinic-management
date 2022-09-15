import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addNewDoctor } from "../services/doctors";
import { languages, medicalSpecialties } from "../utils";

export default function DoctorCreate() {
  const [doctor, setDoctor] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    languages: [],
  });

  let navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewDoctor(doctor).then(alert("Created"));
    return navigate("/doctors");
  };

  return (
    <>
      <Link to="/doctors">Back</Link>
      <h1>New doctor</h1>

      <form className="my-3" method="post" noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={doctor.name}
            className="form-control"
            onChange={handleInput}
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
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Specialty</label>
          <select
            className="form-select"
            name="specialty"
            value={doctor.specialty}
            onChange={handleInput}
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
              />
              <label htmlFor={language} className="form-check-label">
                {language}
              </label>
            </div>
          ))}
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </>
  );
}
