import BannerImage from "@/atoms/Generals/bannerImage_General/bannerImage";
import React from "react";
import login from "../../assets/images/login.webp";
import LoginForm_Login from "@/atoms/Logins/loginForm_Login";

const LoginPage = () => {
  return (
    <div className=" flex flex-col lg:flex-row h-full">
      <div className=" w-full h-screen lg:w-3/4 lg:h-screen ">
        <BannerImage imageSrc={login} alt="This is account page image" />
      </div>
      <div className="w-full z-20 h-screen absolute lg:[&&]:w-1/4 lg:[&&]:static ">
        <LoginForm_Login />
      </div>
      <div className="bg-smoky h-screen w-screen opacity-80 absolute z-10 lg:[&&]:opacity-0"></div>
    </div>
  );
};

export default LoginPage;
