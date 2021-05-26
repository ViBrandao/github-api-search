import axios from 'axios';
import { CLIENT_SECRET } from '../settings';

export const api = axios.create({
  baseURL: 'https://api.github.com/users',
  headers: {
    Authorization: CLIENT_SECRET,
  },
});
