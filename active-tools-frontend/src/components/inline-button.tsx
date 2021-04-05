import React from "react";
import "./tailwind.css";

const sizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2",
  lg: "px-4 py-2 text-lg",
};

export interface InlineButtonProps {
  label?: string;
  primary?: boolean;
  twbackgroundColor?: string;
  backgroundColor?: string;
  color?: string;
  outline?: boolean;
  size?: keyof typeof sizes;
  fullwidth?: boolean;
  onClick?: () => void;
}

export const InlineButton: React.FC<InlineButtonProps> = ({
  primary = false,
  backgroundColor,
  twbackgroundColor,
  color = "tw-white-500",
  label,
  size = "md",
  outline = false,
  fullwidth = false,
  ...props
}) => {
  if (outline) {
    const width = fullwidth ? "w-full" : "";
    const mode = primary
      ? "bg-transparent border border-primary-500 text-primary-700 rounded-md hover:bg-primary-500 hover:text-white dark:hover:bg-gray-700 focus:border-transparent focus:bg-primary-600 dark:focus:bg-gray-700"
      : "bg-transparent border border-gray-700 text-gray-700 rounded-md hover:text-white hover:bg-gray-700 dark:hover:bg-gray-700 focus:border-transparent focus:bg-gray-500 dark:focus:bg-gray-700";
    return (
      <button
        type="button"
        className={[
          "font-medium tracking-wide text-white capitalize transition-colors duration-200 transform",
          mode,
          width,
          sizes[size],
          twbackgroundColor,
        ].join(" ")}
        style={{ backgroundColor, color }}
        {...props}
      >
        {label}
      </button>
    );
  } else {
    const width = fullwidth ? "w-full" : "";
    const mode = primary
      ? "bg-primary-600 rounded-md dark:bg-gray-800 hover:bg-primary-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-primary-600 dark:focus:bg-gray-700"
      : "bg-gray-500 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-400 dark:focus:bg-gray-700";
    return (
      <button
        type="button"
        className={[
          "font-medium tracking-wide text-white capitalize transition-colors duration-200 transform",
          mode,
          width,
          twbackgroundColor,
          sizes[size],
        ].join(" ")}
        style={{ backgroundColor, color }}
        {...props}
      >
        {label}
      </button>
    );
  }
};
