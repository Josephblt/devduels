import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_DEVDUELS_API_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchWelcomeMessage = async () => {
  try {
    console.log('API_BASE_URL:', API_BASE_URL);
    const response = await api.get('/');
    console.log('Welcome Message Response:', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching welcome message:', error);
    throw error;
  }
};
