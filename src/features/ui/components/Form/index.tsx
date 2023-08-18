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
        "max-w-[400px] min-w-[350px] mx-auto",
        "mt-[3vh] space-y-3 bg-gray-200/30 rounded p-4  backdrop-blur-sm ring-2 ring-blue-800/30 shadow-2xl "
      )}
      {...rest}
    >
      {children}
    </form>
  );
};

Form.Control = FormControl;

export default Form;
