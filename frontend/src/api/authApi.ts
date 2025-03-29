import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export interface LoginResponse {
  message: string;
}

export const loginUser = async (data: { email: string; password: string }) => {
  const response = await axios.post<LoginResponse>(`${API_URL}/users/login`, data);
  return response.data;
};