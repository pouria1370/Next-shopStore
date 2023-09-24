import Cart from "@/atoms/Headers/Cart_Header/Cart";
import NavBar from "@/atoms/Headers/NavBar_Header/NavBar";
import LoginRegistery from "@/atoms/Headers/registery_Header/LoginRegistery";
import Logo_Header from "@/atoms/Headers/logo_Header/logo_Header";
import SearchBox_Header from "@/atoms/Headers/searchBox_Header/searchBox_Header";
import React from "react";

const Header = () => {
  return<div className="border-b-2 pb-5">
    <div className=" relative  w-full justify-between flex px-2 py-2" dir="rtl">
      <div className="flex gap-2">
        <Logo_Header />
        <SearchBox_Header />
      </div>
      <div className="flex gap-2">
        <LoginRegistery />
        <Cart />
      </div>
    </div>
    <NavBar/>
  </div>;
};

export default Header;
