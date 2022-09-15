import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-lg">
          <NavLink className="navbar-brand" to="/">
            CLINIC
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/appointments">
                  Appointments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/doctors">
                  Doctors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/patients">
                  Patients
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
