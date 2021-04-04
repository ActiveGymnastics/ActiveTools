import React from "react";
import "./progress-bar.css";

export interface ProgressBarProps {
  label?: string;
  twBackgroundColor?: string;
  twBarColor?: string;
  twBarWidth?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  twBackgroundColor = "bg-gray-200",
  twBarColor = "bg-green-500",
  twBarWidth,
  ...props
}) => {
  return (
    <div
      className={["w-full h-4 rounded-full mt-3", twBackgroundColor].join(" ")}
    >
      <div className={[twBarWidth, twBarColor, "h-full text-center text-xs text-white rounded-full"].join(" ")}>
        {label}
      </div>
    </div>
  );
};
