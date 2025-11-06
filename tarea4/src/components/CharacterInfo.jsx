import { useNavigate } from "react-router-dom";
import { useCount } from "../hooks/useCount";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "./Loading";

export const CharacterInfo = () => {
  const { count, incrementCount, decrementCount, equalCount } = useCount();
  const { data, error, loading } = useFetch(
    `https://rickandmortyapi.com/api/character/${count}`
  );
  const navigate = useNavigate();
  if (loading === true) return <Loading />;
  if (error) return <h1>Error fetching data</h1>;
  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    navigate("/login");
  };

  return (
    <>
      <div className="container mt-3">
        <h2>Bienvenido al Home</h2>
        <button className="btn btn-danger mt-3" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
      {data && (
        <div className="d-flex flex-column align-items-center mt-4">
          <div
            className="card shadow-sm border-0"
            style={{ width: "18rem", borderRadius: "1rem" }}
          >
            <img
              src={data.image}
              className="card-img-top"
              alt={data.name}
              style={{
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold text-dark mb-2">{data.name}</h5>
              <p className="card-text text-muted small mb-0">
                Status: <span className="text-dark">{data.status}</span>
                <br />
                Species: <span className="text-dark">{data.species}</span>
                <br />
                Gender: <span className="text-dark">{data.gender}</span>
              </p>
            </div>
          </div>

          <div className="mt-3 d-flex gap-2">
            <button
              type="button"
              className="btn btn-outline-secondary"
              disabled={count === 1}
              onClick={decrementCount}
            >
              Previous
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={incrementCount}
            >
              Next
            </button>

            {count > 1 && (
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={equalCount}
              >
                Current
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
