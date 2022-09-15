import React from "react";

export default function Profile({ user }) {
  return (
    <>
      <h1 className="mb-3">Hello, {user.email.split("@")[0].toUpperCase()}</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={user.email}
            readOnly
          />
        </div>
      </form>
    </>
  );
}
