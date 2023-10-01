import Cart from "@/atoms/Headers/Cart_Header/Cart";
import NavBar from "@/atoms/Headers/NavBar_Header/NavBar";
import LoginRegistery from "@/atoms/Headers/registery_Header/LoginRegistery";
import Logo_Header from "@/atoms/Headers/logo_Header/logo_Header";
import SearchBox_Header from "@/atoms/Headers/searchBox_Header/searchBox_Header";
import React from "react";
import HamburgerBars from "@/atoms/Headers/HamburgerBars/HamburgerBars";

const Header = () => {
  return<div className="border-b-2 pb-5">
    <div className=" relative  w-full justify-between flex gap-6 px-2 py-2" dir="rtl">
      <div className="flex lg:flex-row  flex-col gap-4 w-full">
       <div className="flex  justify-between gap-2 px-1">
       <HamburgerBars/>
        <Logo_Header />
       </div>
        <SearchBox_Header />
      </div>
      <div className="flex lg:flex-row  flex-col gap-4">
        <LoginRegistery />
        <Cart />
      </div>
    </div>
    <NavBar/>
  </div>;
};

export default Header;
