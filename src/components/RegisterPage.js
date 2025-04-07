import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    axios.post('/api/register', { username, password, email })
      .then(() => alert('Регистрация прошла успешно'))
      .catch(error => alert('Ошибка регистрации'));
  };

  return (
    <div className="register-page">
      <h1>Регистрация</h1>
      <input type="text" placeholder="Имя пользователя" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Пароль" onChange={e => setPassword(e.target.value)} />
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={handleRegister}>Зарегистрироваться</button>
    </div>
  );
}

export default RegisterPage;
