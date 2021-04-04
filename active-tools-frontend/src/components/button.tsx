import React from 'react';
import './button.css';

const sizes = {
  sm: "text-xs px-3 py-2",
  md: "text-md px-4 py-2",
  lg: "text-lg px-5 py-3",
}

export interface ButtonProps {
  label?: string;
  primary?: boolean;
  backgroundColor?: string;
  color?: string;
  size?: keyof typeof sizes;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'md',
  backgroundColor,
  color,
  label,
  ...props
}) => {
  const mode = primary ? 'bg-primary-600 hover:bg-primary-500 focus:ring-primary-500 focus:ring-offset-primary-200 text-white' : 'bg-gray-50 hover:bg-gray-200 focus:ring-gray-500 focus:ring-offset-gray-50 text-black';
  return (
    <button
      type="button"
      className={['w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg', sizes[size], mode].join(' ')}
      style={{ backgroundColor, color }}
      {...props}
    >
      {label}
    </button>
  );
};
