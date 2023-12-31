import axios from 'axios';
import type { User } from './types';

const getUsers = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url = `${baseUrl}/users`;
  const response = await axios.get<User[]>(url);
  return response.data;
};

export default getUsers;
