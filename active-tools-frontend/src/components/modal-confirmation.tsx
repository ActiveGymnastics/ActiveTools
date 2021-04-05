import React from "react";
import "./tailwind.css";
import {
  IoCheckmarkDoneCircle,
  IoInformationCircle,
  IoWarning,
} from "react-icons/io5";

import { InlineButton, InlineButtonProps } from "./inline-button";
import { IconType } from "react-icons/lib";

const types = {
  primary: "primary-600",
  warning: "yellow-400",
  danger: "red-500",
};

export interface ModalConfirmationProps {
  type?: keyof typeof types;
  title?: string;
  message?: string;
  buttonAction1?: string;
  buttonAction2?: string;
}

export const ModalConfirmation: React.FC<ModalConfirmationProps> = ({
  title,
  message,
  type,
  buttonAction1,
  buttonAction2,
  ...props
}) => {
  var icon = true;
  if (type !== "primary") {
    icon = false;
  }
  return (
    <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
      <div className="w-full h-full text-center">
        <div className="flex h-full flex-col justify-between">
          {icon && <IoInformationCircle className={["w-6 h-6 mt-4 w-12 h-12 m-auto", "text-"+types[type]].join(' ')} fill="currentColor" />}
          {!icon && <IoWarning className={["w-6 h-6 mt-4 w-12 h-12 m-auto", "text-"+types[type]].join(' ')} fill="currentColor" />}
          <p className="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
            {title}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-cs py-2 px-6">
            {message}
          </p>
          <div className="flex items-center justify-between gap-4 w-full mt-8">
            <InlineButton
              fullwidth={true}
              primary={false}
              label={buttonAction1}
              twbackgroundColor={"bg-" + types[type]}
            />
            <InlineButton
              fullwidth={true}
              primary={false}
              label={buttonAction2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
