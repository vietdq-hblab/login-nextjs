"use client";
import LoginForm from "@/components/container/LoginForm";
import { login } from "@/services/login";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const handleSubmit = async (params: { email: string; password: string }) => {
    const res = await login(params);
    if (res) {
      // xu ly cac hanh dong sau khi thanh cong
      // set token vao localStorage
      localStorage.setItem("token", "123");
      router.push("/");
    } else {
      // xu ly loi or cac action khac neu dang nhap that bai
    }
  };
  return <LoginForm submit={handleSubmit} />;
};

export default LoginPage;
