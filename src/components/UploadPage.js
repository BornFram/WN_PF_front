import React, { useState } from 'react';
import axios from 'axios';

function UploadPage() {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    const token = localStorage.getItem('jwtToken');
    const formData = new FormData();
    formData.append('file', file);

    axios.post('/api/upload', formData, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => alert('Файл успешно загружен'))
      .catch(error => alert('Ошибка загрузки файла'));
  };

  return (
    <div className="upload-page">
      <h1>Загрузка изображения</h1>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Загрузить</button>
    </div>
  );
}

export default UploadPage;