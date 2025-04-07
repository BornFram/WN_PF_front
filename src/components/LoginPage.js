import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('/api/login', { username, password })
      .then(response => {
        localStorage.setItem('jwtToken', response.data.access_token);
        window.location.href = '/';
      })
      .catch(error => alert('Ошибка входа'));
  };

  return (
    <div className="login-page">
      <h1>Вход</h1>
      <input type="text" placeholder="Имя пользователя" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Пароль" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
}

export default LoginPage;
