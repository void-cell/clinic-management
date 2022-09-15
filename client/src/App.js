import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import LayoutAuth from "./components/LayoutAuth";
import LayoutMain from "./components/LayoutMain";

import Login from "./pages/login";
import RecoverPassword from "./pages/recoverPassword";
import Appointments from "./pages/appointments";
import AppointmentDetail from "./pages/appointmentDetail";
import AppointmentCreate from "./pages/appointmentCreate";
import Doctors from "./pages/doctors";
import DoctorDetail from "./pages/doctorDetail";
import DoctorCreate from "./pages/doctorCreate";
import Patients from "./pages/patients";
import PatientDetail from "./pages/patientDetail";
import PatientCreate from "./pages/patientCreate";
import Profile from "./pages/profile";
import NotFound from "./pages/notFound";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({
    // name: "",
    email: "",
    password: "",
  });

  console.log(isAuth);
  console.log(user);
  return (
    <>
      <Routes>
        <Route element={<LayoutAuth />}>
          <Route
            path="/auth/login"
            element={
              <Login
                user={user}
                setUser={setUser}
                isAuth={isAuth}
                setIsAuth={setIsAuth}
              />
            }
          />
          <Route path="/auth/recover" element={<RecoverPassword />} />
        </Route>

        <Route element={<LayoutMain />}>
          <Route path="/" element={<Navigate replace to="/auth/login" />} />
          <Route
            path="/logout"
            element={<Navigate replace to="/auth/login" />}
          />

          <Route path="/appointments" element={<Appointments />} />
          <Route path="/appointments/:id" element={<AppointmentDetail />} />
          <Route path="/appointments/new" element={<AppointmentCreate />} />

          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
          <Route path="/doctors/new" element={<DoctorCreate />} />

          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/:id" element={<PatientDetail />} />
          <Route path="/patients/new" element={<PatientCreate />} />

          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
