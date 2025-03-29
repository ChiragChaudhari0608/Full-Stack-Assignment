import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  register: any; // From React Hook Form
  error?: string;
}

export const Input: React.FC<InputProps> = ({ type, placeholder, name, register, error }) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="input-field"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};