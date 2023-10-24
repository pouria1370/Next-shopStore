import Dropdown from "@/atoms/Generals/dropdown_General/dropdown";
import React from "react";
const BooleanFilter = ({ text, filters }) => {
  return (
    <Dropdown text={text}>
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
    </Dropdown>
  );
};

export default BooleanFilter;
