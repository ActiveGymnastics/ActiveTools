import "./tailwind.css";
import { IoWarning } from "react-icons/io5";
export interface FormInputTextAreaProps {
  label?: string;
  fieldid?: string;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
  errormessage?: string;
}

export const FormInputTextArea: React.FC<FormInputTextAreaProps> = ({
  label,
  fieldid,
  placeholder,
  required = false,
  error = false,
  errormessage,
  ...props
}) => {
  const errorBorder = error ? "ring-red-500 ring-2" : "";
  return (
    <div className="relative">
      <label htmlFor={fieldid} className="text-gray-700">
        {label}
      </label>
      {required && <span className="text-red-500 required-dot">*</span>}
      <textarea
        id={fieldid}
        className={["rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent", errorBorder].join(' ')}
        name={label}
        placeholder={placeholder}
      >
      </textarea>
      {error && (<IoWarning fill="currentColor" className="absolute text-red-500 right-2 bottom-3"></IoWarning>)}
      {error && (<p className="absolute text-sm text-red-500 -bottom-6">{errormessage}</p>)}
    </div>
  );
};
