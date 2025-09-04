import React, { SelectHTMLAttributes } from "react";
import Required from "../Input/Required";

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  options: { value: string | number; label: string }[]; 
  optionsName?: string;
}

const Select: React.FC<SelectInputProps> = ({
  label,
  name,
  value,
  onChange,
  required = false,
  options,
  optionsName = "Pilih...",
  ...props
}) => {
  return (
    <div className="mb-4 w-full">
      <label className="block text-xs font-bold text-gray-700">
        {label} {required && <Required/>}
      </label>
      <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none text-xs focus:ring-primaryLight text-gray-700 focus:border-primary sm:text-xs border-input bg-background dark:bg-white ring-offset-background placeholder:text-gray-400 appearance-none pr-10"
        required={required}
        {...props}
        style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gray"%3E%3Cpath fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clip-rule="evenodd" /%3E%3C/svg%3E')`,
            backgroundPosition: "right 10px center", 
            backgroundRepeat: "no-repeat",
            backgroundSize: "0.8rem",
          }}
      >
        <option value="" disabled>
          {optionsName}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
};

export default Select;
