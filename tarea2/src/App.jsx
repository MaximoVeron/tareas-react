import { useState } from 'react';
import './App.css';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';

function App() {
  const [user, setUser] = useState('');
  const handleLogin = (username) => {
    setUser(username);
  };
  const logOut = () => {
    setUser('');
  };
  return (
    <>
      <RegisterForm />
      <LoginForm onLogin={handleLogin} />
      <h1>¡Hola de nuevo {user}!</h1>
      <button type="button" onClick={logOut}>
        logOut
      </button>
    </>
  );
}

export default App;
