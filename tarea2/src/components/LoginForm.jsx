import { useForm } from '../hooks/useForm';

export const LoginForm = ({ onLogin }) => {
  const { formState, handleChange } = useForm({
    username: '',
    password: '',
  });
  const { username, password } = formState;
  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(username);
    console.log(formState);
  };
  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <ul>
        <li>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            name="username"
            id="username"
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            name="password"
            id="password"
            onChange={handleChange}
          />
        </li>
        <li>
          <button type="submit">login</button>
        </li>
      </ul>
    </form>
  );
};
