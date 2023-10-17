import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import Logo_Header from '../logo_Header/logo_Header';
import ListBox from '@/atoms/Generals/listBox_General/ListBox';
import {sideBarData} from '@/data/data';
const HamburgerBars = () => {
    const [toggle, setToggle] = useState(false)
    
    useEffect(() => {
      const sizeHandler = () => {
        if (window.innerWidth > 1023) setToggle(false);
      };
      window.addEventListener("resize", sizeHandler);

      return () => {
        window.removeEventListener("resize", sizeHandler);
      };
    }, []);
    
  return (
    <>
      <div
        onClick={() => setToggle(true)}
        className="cursor-pointer h-[2.25rem] flex items-center justify-center "
      >
        <FontAwesomeIcon className="lg:hidden " icon={faBars} />
      </div>

      {toggle ? (
        <div
          class="relative z-50"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
          dir="ltr"
        >
          <div
            onClick={() => setToggle(false)}
            class="fixed inset-0  lg:hidden bg-gray-900 bg-opacity-30 transition-opacity"
          ></div>

          <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div class="pointer-events-auto relative w-64 max-w-md">
                <div class="flex h-full  flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div class="px-4 sm:px-6 flex items-center justify-between">
                    <Logo_Header />
                    <div class="left-0 top-0 flex p-2 sm:-ml-10 ">
                      <button
                        type="button"
                        onClick={() => setToggle(false)}
                        class="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        <FontAwesomeIcon
                          icon={faXmark}
                          className="text-gray-500"
                        />
                      </button>
                    </div>
                  </div>
                  <div class="relative mt-6 flex-1 ">
                      {sideBarData .map((item,index) => (<ListBox key={index + item.text} textButton={item.text} listItems={item.children} />))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default HamburgerBars