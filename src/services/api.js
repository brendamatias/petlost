import axios from 'axios';
import openSocket from 'socket.io-client';

const api = axios.create({
  baseURL: 'https://petlost.herokuapp.com',
  // baseURL: 'http://localhost:3333',
});

const socket = openSocket('https://petlost.herokuapp.com');

export { api, socket };
