import React, { useState, useEffect } from 'react';
import { fetchDogImages } from '../api/dogCEOAPI';

const DogImageGallery = ({ breed, count }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchDogImages(breed, count).then((images) => setImages(images));
  }, [breed, count]);

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <img key={image} src={image} alt={breed} />
      ))}
    </div>
  );
};

export default DogImageGallery;
