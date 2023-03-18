import React from "react";
import AuthL from "../components/auth/AuthL";
import signup from "../assets/imgs/signup.svg";

const LoginPage = () => {
  return (
    <main className="h-screen w-full max-sm:bg-[#2C3062] overflow-y-hidden md:flex ">
      <div className="bg-[#2C3062] md:w-[45%]">
        <AuthL />
      </div>
      <div className="w-[55%] max-sm:hidden">
        <img className="max-w-full" src={signup} alt="" />
      </div>
    </main>
  );
};
export default LoginPage;
