import React, { useState, useEffect } from 'react';
import './Image.css';

const images = [
  '/images/download(1).jpg',
  '/images/download(1).jpg',
  '/images/download(1).jpg',
  
];

function Image() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={images[currentImage]}
          alt="Slideshow"
          className="App-image"
        />
      </header>
    </div>
  );
}

export default Image;
