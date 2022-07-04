import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:3333/login';

    try {
      const response = await axios.post(url, { email, password });
      localStorage.setItem('token', response.data.token);

      navigate('/tasks');
    } catch (error) {
      alert('Email ou senha incorretos');
    }
  };

  return (
    <div>
      <h1> Login</h1>
      <form>
        <label htmlFor="email">
          Email:
          <input type="text" id="email" value={email} onChange={({ target }) => setEmail(target.value)} />
        </label>

        <label htmlFor="password">
          Senha:
          <input type="password" id="password" value={password} onChange={({ target }) => setPassword(target.value)} />
        </label>

        <button type="submit" onClick={handleSubmit}>Entrar</button>

      </form>
    </div>
  );
}

export default Login;
