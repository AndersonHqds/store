import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5e0e484336b80000143dbc0f.mockapi.io',
});

export default api;
