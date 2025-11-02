import { useForm } from '../hooks/useForm';

export const RegisterForm = () => {
  const { formState, handleChange, handleReset } = useForm({
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
  });
  const { username, password, email, firstName, lastName } = formState;
  const registerSubmit = (e) => {
    e.preventDefault();
    handleReset();
    console.log(formState);
  };
  return (
    <form onSubmit={(e) => registerSubmit(e)}>
      <ul>
        <li>
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" value={email} onChange={handleChange} />
        </li>
        <li>
          <label htmlFor="username1">Username</label>
          <input
            type="text"
            value={username}
            name="username"
            id="username1"
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="password1">Password</label>
          <input
            type="password"
            value={password}
            name="password"
            id="password1"
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="firstName">firstName</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="lastName">lastName</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </li>
        <li>
          <button type="submit">registrarse</button>
        </li>
      </ul>
    </form>
  );
};
