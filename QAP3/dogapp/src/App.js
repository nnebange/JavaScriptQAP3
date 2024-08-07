import React, { useState } from 'react';
import DogBreedSelect from './components/DogBreedSelect';
import DogImageGallery from './components/DogImageGallery';

const App = () => {
  const [breed, setBreed] = useState('labrador');
  const [count, setCount] = useState(5);

  const handleBreedChange = (breed) => {
    setBreed(breed);
  };

  const handleCountChange = (event) => {
    setCount(event.target.value);
  };

  return (
    <div className="app">
      <div >
        <h1>
          The DogApp
        </h1>
      </div>
      <DogBreedSelect onBreedChange={handleBreedChange} />
      <input
        type="number"
        value={count}
        onChange={handleCountChange}
        placeholder="Number of images"
      />
      <DogImageGallery breed={breed} count={count} />
    </div>
  );
};

export default App;
