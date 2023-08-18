import Form from "@/ui/components/Form";
import React from "react";

interface ILoginPageTemplateProps {
  formData: { username: string; password: string };
  handleChange: (name: string, value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginPageTemplate: React.FC<ILoginPageTemplateProps> = ({
  formData,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="container py-5">
      <h2 className="p-2 text-3xl font-[800] text-center text-blue-800 sm:text-2xl">
        Login
      </h2>

      <Form onSubmit={handleSubmit}>
        <Form.Control
          id="username"
          type="text"
          value={formData.username}
          placeholder="John Doe"
          onUpdate={handleChange}
        />
        <Form.Control
          id="password"
          type="password"
          value={formData.password}
          placeholder="Enter Password..."
          onUpdate={handleChange}
        />
        <div className="p-1 pt-5">
          <button
            type="submit"
            className="w-full py-3 text-sm font-bold text-white bg-blue-800 rounded-full"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default LoginPageTemplate;
