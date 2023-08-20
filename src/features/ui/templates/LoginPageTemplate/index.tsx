import Form from "@/ui/components/Form";
import React from "react";

interface ILoginPageTemplateProps {
  formData: { username: string; password: string };
  handleChange: (name: string, value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

const LoginPageTemplate: React.FC<ILoginPageTemplateProps> = ({
  formData,
  handleChange,
  handleSubmit,
  isLoading,
}) => {
  return (
    <div className="container flex sm:p-1 sm:bg-white sm:border-[1px] sm:shadow rounded space-x-2 h-min sm:h-[700px] px-4">
      <div className="flex-col hidden py-8 px-6 bg-blue-800 rounded sm:flex text-slate-100 aspect-[12/16]   shadow-sm">
        <h3 className="text-2xl font-[500]">Welcome Back</h3>
        <p className="text-sm font-[500] mt-1 px-1">Login, to get started</p>
        <img
          src={"/login.avif"}
          className="mt-auto scale-75 rounded-full"
        />
      </div>

      <div className="w-full px-2 pt-8 pb-4 mt-8 border-[1px] sm:border-0 rounded shadow sm:shadow-none bg-white sm:mt-0">
        <h2 className="text-2xl text-center font-[500]">Login</h2>
        <div className="flex justify-center w-full">
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
                className="w-full py-3 text-sm font-bold text-white duration-200 bg-blue-800 rounded-lg disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div role="status" className="flex justify-center">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 mr-2 text-gray-400 animate-spin fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPageTemplate;
