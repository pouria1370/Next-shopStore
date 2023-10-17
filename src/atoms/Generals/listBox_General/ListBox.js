import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
const ListBox = ({ textButton, listItems , actived }) => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className={actived ? "px-2 bg-info bg-opacity-20" : "px-2"}>
      <div onClick={() => setToggle(prevState=> !prevState)} className="  cursor-pointer flex w-full items-center justify-between p-2" dir="rtl">
        <div className=" text-sm font-vazir text-text">
          <p>{textButton}</p>
        </div>
        <div className=" text-sm font-vazir text-text" >
        {!toggle ?<FontAwesomeIcon size="sm" icon={faAngleDown} /> : <FontAwesomeIcon size="sm" icon={faAngleUp}/>}
        </div>
      </div>
      {
        toggle ? listItems.map((item,index) => Object.hasOwn(item,'children') ? (<ListBox actived={true} key={index + item.text} textButton={item.text} listItems={item.children}/>) : <Link dir="rtl" href="/" className="border-gray-500 hover:bg-purple-200 hover:text-purple-700 mr-2 pr-2 py-1 border-r-[1px] flex text-sm text-gray-500">{item.text}</Link>) : null
      }
    </div>
  );
};

export default ListBox;
