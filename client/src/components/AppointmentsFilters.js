import React from "react";

export default function AppointmentsFilters() {
  return (
    <div className="input-group my-5">
      <input type="text" className="form-control" placeholder="Patient name" />
      <input type="text" className="form-control" placeholder="Doctor name" />
      <input type="date" className="form-control" placeholder="Date" />
      <select className="form-select">
        <option defaultValue>Select</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
}
