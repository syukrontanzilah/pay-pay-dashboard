import React, { HTMLInputTypeAttribute, InputHTMLAttributes, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  // type: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean; 
  placeholder?: string;
  className? : string;
  disabled? : boolean;
  footText? : string;
  isInputPassword?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ 
    label, 
    name, 
    type,
    value, 
    onChange, 
    required = false, 
    placeholder,
    className,
    disabled = false,
    footText = '',
    isInputPassword = false,
    ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };
  return (
    <div className="mb-5 w-full">
      <label htmlFor={name} className="block text-xs font-bold text-gray-700">
        {label} {required && <span className='text-primary text-xs'>*</span>}
      </label>
      <div className="relative">
      <input
        type={isInputPassword && showPassword ? 'text' : type}
        name={name}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none text-xs focus:ring-primaryLight text-gray-700 focus:border-primary sm:text-xs border-input ${disabled? 'bg-gray-200': 'bg-background'}  dark:bg-white ring-offset-background placeholder:text-gray-400 ${className}`}
        disabled={disabled}
        required={required} 
        placeholder={placeholder}
        {...props}  
      />
      {isInputPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400"
          >
            {showPassword ? (
              <AiFillEyeInvisible  size={20} />  
            ) : (
              <AiFillEye  size={20} />  
            )}
          </button>
        )}
      </div>
      {footText && (<span className="text-[10px] text-gray-400 italic">
        {footText}
      </span>)}
    </div>
  );
};

export default FormInput;
