import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '../hooks/useLogin';
import { Link } from 'react-router-dom';

// Add Plus Jakarta Sans font
const fontFamily = '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const loginSchema = z.object({
  email: z.string().email('Invalid UID'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, status, error } = useLogin();
  const isLoading = status === 'pending';

  const onSubmit = (data: LoginFormData) => {
    mutate(data);
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#fff',
      fontFamily: fontFamily
    }}>
      <div style={{ 
        textAlign: 'center',
        width: '100%',
        maxWidth: '320px',
        padding: '20px'
      }}>
        <h2 style={{ 
          fontSize: '24px', 
          marginBottom: '30px',
          color: '#333',
          fontFamily: fontFamily,
          fontWeight: '600'
        }}>Welcome back!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="email"
              placeholder="UID"
              autoComplete="username"
              {...register('email')}
              style={{ 
                padding: '12px',
                width: '100%',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px',
                fontFamily: fontFamily
              }}
            />
            {errors.email && <p style={{ color: 'red', fontSize: '12px', textAlign: 'left', marginTop: '4px', fontFamily: fontFamily }}>{errors.email.message}</p>}
          </div>
          <div style={{ marginBottom: '25px' }}>
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              {...register('password')}
              style={{ 
                padding: '12px',
                width: '100%',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px',
                fontFamily: fontFamily
              }}
            />
            {errors.password && <p style={{ color: 'red', fontSize: '12px', textAlign: 'left', marginTop: '4px', fontFamily: fontFamily }}>{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            style={{
              padding: '12px',
              width: '108%',
              backgroundColor: '#1a3c61',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              fontWeight: '500',
              fontFamily: fontFamily
            }}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p style={{ color: '#dc3545', fontSize: '14px', marginTop: '10px', fontFamily: fontFamily }}>{error.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;