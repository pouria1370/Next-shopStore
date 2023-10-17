import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
const BooleanFilter = ({ text, filters }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex mx-2 my-1 cursor-pointer flex-col" onClick={() => setToggle(!toggle)}>
      <div className="flex flex-row  justify-between w-full items-center ">
        <div className="font-vazir text-sm text-text ">{text}</div>
        <div>
          {toggle ? (
            <FontAwesomeIcon className="text-gray text-sm" icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon className="text-gray text-sm" icon={faAngleDown} />
          )}
        </div>
      </div>
      {toggle ? (
        <div className="flex min-w-full min-h-full top-10  flex-row flex-wrap flex-grow text-text bg-dark bg-opacity-20">
          {filters.map((item, index) => (
            <span
              key={index + item}
              className="bg-light m-2 px-2 font-vazir text-xs rounded-md"
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default BooleanFilter;
