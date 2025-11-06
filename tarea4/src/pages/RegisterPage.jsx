import React from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div
          className="card shadow-sm border-0 p-4"
          style={{ width: "22rem", borderRadius: "1rem" }}
        >
          <h4 className="text-center fw-bold mb-3 text-dark">Register</h4>

          <form>
            <div className="mb-3">
              <label className="form-label text-muted small">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-muted small">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-muted small">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Create a password"
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-muted small">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Repeat your password"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 mt-2"
              style={{ borderRadius: "0.75rem" }}
            >
              Register
            </button>
          </form>

          <p className="text-center text-muted small mt-3 mb-0">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none ms-1">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
