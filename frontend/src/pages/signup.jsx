import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    const url = 'http://localhost:3333/signup';
    e.preventDefault();

    const response = await axios.post(url, { name, email, password });
    console.log(response);
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
