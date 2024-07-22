import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginNavBar from "./LoginNavBar/LoginNavBar";

const Login = () => {
  const nav = useNavigate();
  const Login = () => {
    const name = prompt("Enter your name");
    const password = prompt("Enter Admin Password:");
    if (name !== "sunny" && password !== "Bodhgaya@123") {
      return nav("/");
    } else {
      return nav("/login/login/general_theme");
    }
  };
  useEffect(() => {
    Login();
  }, []);
  return (
    <div>
      <LoginNavBar />
    </div>
  );
};

export default Login;
