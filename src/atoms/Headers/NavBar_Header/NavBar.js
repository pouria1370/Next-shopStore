import Link from "next/link";
import React, { useState } from "react";
import FlyoutNav from "../FlyOutNav_Header/FlyoutNav";
import { FlyoutNavData } from "@/data/data";

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
  const [toggle, setToggle] = useState(false)
  return (
    <div
      className="w-full lg:flex mt-3 flex-row gap-5 pr-8 items-center hidden "
      dir="rtl"
    >
      {FlyoutNavData.map((item, index) => (
        <li
          key={index + "flyoutNav"}
          className={toggle ? "text-xs list-none group" : "text-xs list-none"}
          onMouseEnter={() => setToggle(true)}
          onMouseLeave={() => setToggle(false)}
        >
          <div className="relative flex h-full items-center">
            <span className="h-full cursor-default px-3 pb-4 text-[13px] font-semiBold 3xl:px-[21px] 3xl:text-sm ">
              {item.group}
            </span>
            <FlyoutNav items={item.items} />
          </div>
        </li>
      ))}
    </div>
  );
};

export default NavBar;
