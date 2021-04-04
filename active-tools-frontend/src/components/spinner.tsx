import React from 'react';
import './spinner.css';

import { ImSpinner9 } from 'react-icons/im'

const sizes = {
  "2": "h-2 w-2",
  "4": "h-4 w-4",
};

export interface SpinnerProps {
  color?: string;
  size?: any;
}

// export const Spinner: React.FC<{ SpinnerProps }> = ({
//   size = "4",
//   color,
//   ...props
// }) => {
//   return (<ImSpinner9 color="{{ color }}"/>);
// };

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  color = '#000000',
  ...props
}) => {
  return (
    <ImSpinner9
      className={['kj-spinner', 'kj-spinner-animation'].join(' ')}
      style={{ color }}
      {...props}
    >
    </ImSpinner9>
  );
};