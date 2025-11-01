import { useForm } from '../hooks/useForm';

export const LoginForm = ({ onLogin }) => {
  const { formState, handleChange, handleReset } = useForm({
    username: '',
    password: '',
  });
  const { username, password } = useForm();
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formState.username);
    console.log(formState);
    handleReset();
  };
  return (
    <>
      <div className="col-md-6">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row mb-3">
            <label htmlFor="username1" className="mx-1 col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-10">
              <input
                type="username"
                className="form-control"
                name="username"
                id="username1"
                value={username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="password1" className="mx-1 col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                name="password"
                id="password1"
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary mx-2">
            Sign in
          </button>
          <button type="reset" className="mx-2 btn btn-primary" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>
    </>
  );
};
