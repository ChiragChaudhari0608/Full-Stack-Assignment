import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
}

const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  try {
    console.log('Login attempt for email:', data.email);
    const response = await axios.post('http://localhost:3001/api/login', data);
    console.log('Login response:', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('Server response:', error.response?.data);
      // Show same message for both wrong UID and wrong password
      if (error.response?.status === 401 || error.response?.status === 404) {
        throw new Error('Invalid uid or password');
      }
      throw new Error(error.response?.data?.message || 'Login failed');
    }
    console.error('Unexpected error:', error);
    throw new Error('An unexpected error occurred');
  }
};

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation<LoginResponse, Error, LoginData>({
    mutationFn: loginUser,
    onSuccess: () => {
      navigate('/dashboard');
    },
  });
};