import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const Principal = () => {
  const [user, setUser] = useState('');

  const handleLogin = (username) => {
    setUser(username);
  };
  const handleLogOut = () => {
    setUser('');
  };
  return (
    <div className="row">
      <RegisterForm />
      <LoginForm onLogin={handleLogin} />
      <h2>¡Hola de nuevo {user}!</h2>
      <button className="btn btn-primary" type="reset" onClick={() => handleLogOut()}>
        logout
      </button>
    </div>
  );
};
