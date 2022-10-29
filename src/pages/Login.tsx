import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FormInput from "../components/FormInput";
import Register from "../components/Register";
import CustomButton from "../components/LoginButton";
import ForgotPassword from "../components/ForgotPassword";
import AuthFooter from "../components/AuthFooter";

const Login: React.FC = () => {
  const loginList: string[] = ["Home", "Shop", "Blog", "About", "Community"];
  const signedIn: boolean = false;

  return (
    <div>
      <Navbar list={loginList} auth={signedIn} />
      <Header />

      {/* Form Login Inputs */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-start w-[60%] m-5 p-5">
          <FormInput label="Email" type="text" />
          <FormInput label="Password" type="password" />

          <ForgotPassword />

          <CustomButton label="Login" />

          <Register />

          <AuthFooter />
        </div>
      </div>
    </div>
  );
};

export default Login;
