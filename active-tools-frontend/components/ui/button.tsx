import React from 'react';
import './button.css';

const sizes = {
  "small": "py-1 px-2",
  "medium": "py-2 px-4",
  "large": "py-4 px-8",
};

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
  size = 'medium',
  backgroundColor,
  color,
  label,
  ...props
}) => {
  const mode = primary ? 'kj-button--primary' : 'kj-button--secondary';
  return (
    <button
      type="button"
      className={['kj-button', 'rounded-lg', 'bg-indigo-600', 'hover:bg-indigo-700', 'focus:ring-indigo-500', 'text-white', 'w-full', 'transition ease-in duration-200', 'text-center font-semibold', 'shadow-md', 'focus:outline-none focus:ring-2 focus:ring-offset-2', `${sizes[size]}`, mode].join(' ')}
      style={{ backgroundColor, color }}
      {...props}
    >
      {label}
    </button>
  );
};



{/* <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
    Valider
</button> */}
