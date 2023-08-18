import React from "react";
import { cn } from "tailwind-cn";

interface IFormControlProps extends React.HTMLProps<HTMLInputElement> {
  onUpdate: (name: string, value: string) => void;
}

const FormControl = ({ className, onUpdate, ...rest }: IFormControlProps) => {
  return (
    <div className="p-1">
      <label
        htmlFor={rest.id}
        className="block px-1 mb-1 text-xs font-medium text-gray-700 capitalize"
      >
        {rest.id}
      </label>
      <input
        name={rest.id}
        onChange={(e) => onUpdate(e.target.name, e.target.value)}
        {...rest}
        className={cn(
          "w-full  border-gray-200 rounded-md shadow-sm sm:text-sm",
          className
        )}
      />
    </div>
  );
};

export default FormControl;
