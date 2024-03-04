// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    'Content-Type': 'application/json', // Wymagane dla express.json()
  },
});

export default api;