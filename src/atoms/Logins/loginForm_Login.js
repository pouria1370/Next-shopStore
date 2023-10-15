import React from "react";
import GeneralButton from "../Generals/buttons_General/Button";
import Logo_Header from "../Headers/logo_Header/logo_Header";
import Link from "next/link";
import GeneralInput from "../Generals/input_General/Input_Genral";

const LoginForm_Login = () => {
  return (
      <form className=" flex flex-col justify-around h-full items-center ">
        <Logo_Header/>
        <div className="flex flex-col justify-center items-center">
        <h4 className="font-vazir whitespace-pre">ورود  |  ثبت نام</h4>
        <h6 className="font-vazir text-sm">خوش امدی</h6>
        </div>
        <div className="w-3/4">
        <GeneralInput name="account" type="text" label="شماره خود را وارد کنید"/>
        </div>
        <GeneralButton text="ادامه" size="md"/>
        <small className="font-vazir text-xs" >ثبت نام به معنای پذیرش <Link href="/" className="text-sm text-info">قوانین</Link> شرکت الف است </small>
      </form>
  );
};

export default LoginForm_Login;
