import React from 'react';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, type = 'button', onClick }) => {
  return (
    <button type={type} onClick={onClick} className="button">
      {text}
    </button>
  );
};