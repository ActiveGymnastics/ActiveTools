import React from 'react';
import './tailwind.css';
import Link from 'next/link';

const sizes = {
  sm: "text-xs w-8 h-8",
  md: "text-md w-12 h-12",
  lg: "text-lg w-16 h-16",
}

export interface AvatarProps {
  image?: string;
  link?: string,
  size?: keyof typeof sizes;
  onClick?: () => void;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  image,
  link = ' ',
  ...props
}) => {
  return (
    <Link href={link}>
      <a className="block relative">
        <img alt="profile" src={image} className={["mx-auto object-cover rounded-full", sizes[size]].join(' ')}></img>
      </a>
    </Link>
  );
};
