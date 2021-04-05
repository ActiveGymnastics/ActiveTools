import React from "react";
import "./tailwind.css";
import "./alert.css";
import Link from "next/link";
import { IoCheckmarkDoneCircle, IoInformationCircle, IoWarning } from "react-icons/io5";
import { IconType } from "react-icons/lib";

const sizes = {
  sm: "text-xs w-8 h-8",
  md: "text-md w-12 h-12",
  lg: "text-lg w-16 h-16",
};

const types = {
  success: "green-500",
  info: "blue-500",
  warning: "yellow-400",
  error: "red-500"
}

export interface AlertProps {
  type?: keyof typeof types;
  size?: keyof typeof sizes;
  title?: string;
  message?: string;
}

export const Alert: React.FC<AlertProps> = ({
  size = "md",
  type = "info",
  title,
  message,
  ...props
}) => {
  var infowarning: boolean = false;
  var success: boolean = false;
  var error: boolean = false;

  if (type == "info" || type=="warning") {
    var infowarning = true;
  }
  else if (type == "success") {
    var success = true;
  }
  else if (type == "error") {
    var error = true;
  }
  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className={["kj-alertsvg flex items-center justify-center w-12", 'bg-' + types[type]].join(' ')}>
      {
        infowarning && (
          <IoInformationCircle className="w-6 h-6" />
        )
      }
            {
        success && (
          <IoCheckmarkDoneCircle className="w-6 h-6" />
        )
      }
            {
        error && (
          <IoWarning className="w-6 h-6" />
        )
      }
      </div>
      <div className="px-4 py-2 -mx-3">
        <div className="mx-3">
          <span className={['font-semibold', 'text-' + types[type]].join(' ')}>{title}</span>
          <p className="text-sm text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
};

//