import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "@/store";
import { LoginPageTemplate } from "@/ui/templates";

import { useLoginMutation } from "@/api/storeApi";

const LoginPage = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  React.useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  const [formData, setFormData] = React.useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.password || !formData.username) {
      alert("All fields Required");
    }
    await login({ ...formData });
    setFormData({ username: "", password: "" });
  };

  return (
    <LoginPageTemplate
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
    />
  );
};

export default LoginPage;
