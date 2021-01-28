import axios from 'axios';
import openSocket from 'socket.io-client';

const api = axios.create({
  baseURL: 'https://petlost-api-dev.herokuapp.com/',
});

const socket = openSocket('http://localhost:3333');

export { api, socket };
