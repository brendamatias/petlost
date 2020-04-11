import axios from 'axios';

const api = axios.create({
  baseURL: 'https://petlost.herokuapp.com',
});

export default api;
