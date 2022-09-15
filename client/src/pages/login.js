import React from "react";
import { useNavigate } from "react-router-dom";
import { attemptUserLogin } from "../services/auth";

export default function Login({ user, setUser, isAuth, setIsAuth }) {
  let navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    attemptUserLogin(user).then(alert("Logged in"));
    setIsAuth(true);

    return navigate("/appointments");
  };

  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <form method="post" noValidate onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={user.email}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
