import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    axios.get('/api/images', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => setImages(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="homepage">
      <h1>Ваши изображения</h1>
      <div className="image-gallery">
        {images.map(image => (
          <img key={image.id} src={`/api/get_image/${image.id}`} alt={image.filename} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
