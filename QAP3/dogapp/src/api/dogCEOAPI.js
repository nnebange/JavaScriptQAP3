import axios from 'axios';

const API_URL = 'https://dog.ceo';

export const fetchDogImages = async (breed, count) => {
  const response = await axios.get(`${API_URL}/breed/${breed}/images/random/${count}`);
  return response.data.message;
};

