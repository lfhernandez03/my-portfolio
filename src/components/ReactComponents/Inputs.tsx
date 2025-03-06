import React from "react";

interface InputsProps {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  id: string;
}

const Inputs: React.FC<InputsProps> = ({
  type,
  name,
  id,
  placeholder,
  required,
  onChange,
}) => {
  return (
    <div className="mt-2">
      <label htmlFor={name} className="text-sm">
        {id}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        className="w-full h-10 border-2 rounded-md px-2 mt-1"
      />
    </div>
  );
};

export default Inputs;
