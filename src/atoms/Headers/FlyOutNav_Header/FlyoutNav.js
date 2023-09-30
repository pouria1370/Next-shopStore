import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
const FlyoutNav = ({ items }) => {
  const [indexActive, setIndexActive] = useState(0);
  useEffect(() => {
    let index = items.findIndex((item, index) => item.active && index);
    setIndexActive(index);
  }, []);
  return (
    <div className="flex w-[500px] h-96  p-2 invisible opacity-0 absolute top-1 z-50 rounded-2xl bg-white shadow-1600 group-hover:opacity-100 group-hover:visible">
      <div
      className="flex flex-col w-1/3 gap-5 items-start justify-center"
      dir="rtl"
      
      >
        {items.map((item, index) => (
          <div key={index + item.text} className="flex flex-row-reverse" onMouseEnter={() => setIndexActive(index)}>
            <p>{item.text}</p>
            {/* <Image width={20} height={20} src={item.source} /> */}
            <FontAwesomeIcon icon={faBars} />
          </div>
        ))}
      </div>
      {
      items.map((item, indexio) => 
        indexio === indexActive ? (
          <div className=" columns-3  w-2/3">
            {item.children.map((item, index) => (
              <Link
                href="/"
                key={index + item}
                className="text-gray-500 text-sm cursor-pointer"
              >
                <p>{`${item} ${indexio}`}</p>
              </Link>
            ))}
          </div>
        ) : null)
      }
    </div>
  );
};

export default FlyoutNav;
