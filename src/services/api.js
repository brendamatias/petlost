import axios from 'axios';
import openSocket from 'socket.io-client';

const api = axios.create({
  baseURL: 'https://petlost-api-dev.herokuapp.com',
  // baseURL: 'http://localhost:3333',
});

const socket = openSocket('https://petlost-api-dev.herokuapp.com');

export { api, socket };
