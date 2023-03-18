import React from "react";
import AuthR from "../components/auth/AuthR";
import signup from "../assets/imgs/signup.svg";

const RegisterPage = () => {
  return (
    <main className="h-screen w-full max-sm:bg-[#2C3062] overflow-y-hidden md:flex ">
      <div className="bg-[#2C3062] md:w-[45%]">
        <AuthR />
      </div>
      <div className="w-[55%] max-sm:hidden">
        <img className="max-w-full" src={signup} alt="" />
      </div>
    </main>
  );
};

export default RegisterPage;
