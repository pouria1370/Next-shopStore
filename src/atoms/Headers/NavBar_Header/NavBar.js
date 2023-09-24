import Link from "next/link";
import React from "react";

const NavBar = () => {
  const data = [
    "موبایل و تبلت",
    "لوازم جانبی",
    "ساعت و بند هوشمند",
    "هدفون و هندزفری",
    "لپتاپ",
    "کامپیوتر و شبکه",
    "ماشین های اداری",
    "گیمینگ",
    "صوتی و تصویری",
    "لوازم خانگی",
    "|",
    <Link href="/" className="text-blue-500">فروشنده شو</Link>,
  ];
  return (
    <div className="w-full flex mt-3 flex-row gap-5 pr-2 items-center " dir="rtl">
      {data.map((item) => <li className="text-xs list-none">{item}</li>)}
    </div>
  );
};

export default NavBar;
