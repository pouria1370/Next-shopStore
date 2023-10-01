import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
const FlyoutNav = ({ items }) => {
  const [indexActive, setIndexActive] = useState(0);
  useEffect(() => {
    let index = items.findIndex((item, index) => item.active );
    setIndexActive(index);
  }, []);

  return (
    <div className="flex w-[500px] h-96  invisible opacity-0 absolute -right-7 top-5 z-50 rounded-2xl bg-red-200 shadow-1600 group-hover:opacity-100 group-hover:visible">
      <div
        className="flex flex-col w-2/5   items-start justify-around"
        dir="rtl"
      >
        {items.map((item, index) => (
          <div key={index + item.text} className="flex justify-between px-3 w-full items-baseline " onMouseEnter={() => setIndexActive(index)}>
            <div
              className="flex font-bold gap-3 text-[0.7rem] flex-row-reverse p-2  items-center"           
            >
              <p>{item.text}</p>
              {/* <Image width={20} height={20} src={item.source} /> */}
              <FontAwesomeIcon icon={faBars} />
            </div>
           {indexActive === index ? <FontAwesomeIcon icon={faArrowLeft} /> : null}
          </div>
        ))}
      </div>
      {items.map((item, indexio) =>
        indexio === indexActive ? (
          <div className=" flex flex-col flex-wrap font-bold text-xs justify-items-center item-center bg-sky-200 p-2 w-3/5">
            {item.children.map((item, index) => (
              <Link
                href="/"
                key={index + item}
                className="text-gray-500 my-1 cursor-pointer"
              >
                <p>{`${item} ${indexio}`}</p>
              </Link>
            ))}
          </div>
        ) : null
      )}
    </div>
  );
};

export default FlyoutNav;
