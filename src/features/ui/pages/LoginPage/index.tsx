import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "@/store";
import { LoginPageTemplate } from "@/ui/templates";
import { login } from "@/store/authSlice";

const LoginPage = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (token) {
      navigate("/");
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
    const jsonResponse = await fetch("https://fakestoreapi.com/auth/login", {
      body: JSON.stringify({ ...formData }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());

    if (jsonResponse) {
      const requiredResponse = jsonResponse as { token: string };
      dispatch(login({ ...requiredResponse }));
    }

    setFormData({ username: "", password: "" });
  };

  return (
    <LoginPageTemplate
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginPage;
