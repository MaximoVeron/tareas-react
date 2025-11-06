import { useNavigate, Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";

export const LoginPage = () => {
  const { form, handleChange, resetForm } = useForm({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { username, password } = form;
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(form);
    navigate("/home");
    resetForm();
    localStorage.setItem("isLogged", "true");
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div
          className="card shadow-sm border-0 p-4"
          style={{ width: "22rem", borderRadius: "1rem" }}
        >
          <h4 className="text-center fw-bold mb-3 text-dark">Login</h4>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-muted small">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                placeholder="Enter your username"
                name="username"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label text-muted small">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                required={true}
                value={password}
                placeholder="Enter your password"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 mt-2"
              style={{ borderRadius: "0.75rem" }}
            >
              Login
            </button>
          </form>

          <p className="text-center text-muted small mt-3 mb-0">
            Don’t have an account?
            <Link to="/register" className="text-decoration-none ms-1">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
