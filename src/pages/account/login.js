import BannerImage from "@/atoms/Generals/bannerImage_General/bannerImage";
import React from "react";
import login from "../../assets/images/login.webp";
import LoginForm_Login from "@/atoms/Logins/loginForm_Login";

const LoginPage = () => {
  return (
    <div className=" flex flex-col md:flex-row h-full">
      <div className="w-3/4 h-screen ">
        <BannerImage imageSrc={login} alt="This is account page image" />
      </div>
      <div className="w-1/4">
        <LoginForm_Login />
      </div>
    </div>
  );
};

export default LoginPage;
