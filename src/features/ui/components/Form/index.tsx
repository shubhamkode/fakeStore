import React from "react";
import { cn } from "tailwind-cn";
import FormControl from "./FormControl";

interface IFormProps extends React.HTMLProps<HTMLFormElement> {
  children: React.ReactNode;
}

const Form = ({ children, className, ...rest }: IFormProps) => {
  return (
    <form
      className={cn(
        className,
        "max-w-[600px] w-full",
        "space-y-2 rounded p-4 px-2 h-min"
      )}
      {...rest}
    >
      {children}
    </form>
  );
};

Form.Control = FormControl;

export default Form;
