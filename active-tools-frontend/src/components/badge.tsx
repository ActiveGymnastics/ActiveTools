import React from 'react';
import './badge.css';

const sizes = {
  sm: "text-xs px-2 py-1",
  md: "text-md px-4 py-2",
  lg: "text-lg px-5 py-3",
}

export interface BadgeProps {
  label?: string;
  foregroundLight?: boolean,
  backgroundColor?: string;
  twBackgroundColor?: string;
  color?: string;
  size?: keyof typeof sizes;
  onClick?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  size = 'md',
  backgroundColor,
  foregroundLight = true,
  twBackgroundColor = "bg-indigo-500",
  color,
  label,
  ...props
}) => {
  const textColor = foregroundLight ? 'text-white' : 'text-black'
  return (
    <span
      className={['text-base rounded-full', textColor, sizes[size], twBackgroundColor].join(' ')}
      style={{ backgroundColor, color }}
      {...props}
    >
      {label}
    </span>
  );
};
