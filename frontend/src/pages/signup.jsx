/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const verifyName = () => {
    const verify = name.length > 2;

    if (!verify) alert('name must be at least 3 characters long');

    return verify;
  };

  const verifyEmail = () => {
    const verify = /\S+@\S+\.\S+/;

    if (!verify.test(email)) alert('Must be a valid email');

    return verify.test(email);
  };

  const verifyPassword = () => {
    const verify = password.length >= 6;

    if (!verify) alert('Password must be at least 6 characters long');

    return verify;
  };

  const verifyUser = () => {
    const vn = verifyName();
    const ve = verifyEmail();
    const vp = verifyPassword();

    return vn && ve && vp;
  };

  const handleSubmit = async (e) => {
    const url = 'http://localhost:3333/signup';
    e.preventDefault();

    if (verifyUser()) {
      try {
        await axios.post(url, { name, email, password });

        navigate('/login');
      } catch (error) {
        alert('Usuário já existente');
      }
    }
  };

  return (
    <div>
      <h1> Cadastrar</h1>
      <form>
        <label htmlFor="name">
          Nome:
          <input type="text" id="name" value={name} onChange={({ target }) => setName(target.value)} />
        </label>

        <label htmlFor="email">
          Email:
          <input type="text" id="email" value={email} onChange={({ target }) => setEmail(target.value)} />
        </label>

        <label htmlFor="password">
          Senha:
          <input type="password" id="password" value={password} onChange={({ target }) => setPassword(target.value)} />
        </label>

        <button type="submit" onClick={handleSubmit}>Cadastrar</button>
      </form>
    </div>
  );
}

export default Signup;
