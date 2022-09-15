import React from "react";
import { Link } from "react-router-dom";

export default function RecoverPassword() {
  return (
    <>
      <div className="login">
        <h1>Recover password</h1>
        <form method="post" className="my-3">
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
        <Link to="/auth/login">Back</Link>
      </div>
    </>
  );
}
