import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import BooleanFilter from "@/atoms/ProductLists/filters/BooleanFilter";
import { SampleListProduct } from "@/data/data";
import RangeFilter from "@/atoms/ProductLists/filters/RangeFilter";
import TextFilter from "@/atoms/ProductLists/filters/TextFilter";
const SideFilter = () => {
  const [toggle, setToggle] = useState(false)
  return (
   !toggle ? <div  className="w-full flex flex-col mr-8 mb-8 sticky border-spacing-2 border rounded-md ">
      <div className="flex flex-row items-center mb-8 border-b-2 px-3 py-5" dir="rtl">
        <FontAwesomeIcon icon={faFilter} className="text-text " />
        <span className="font-vazir text-sm grow mr-2  text-text">فیلترها</span>
        <FontAwesomeIcon onClick={() => setToggle(true)} icon={faRightToBracket} className="text-text " />
      </div>
      <div className="flex flex-col gap-2">
        {SampleListProduct.filters.map(
          (item, index) =>
            item.type === "bool" ? (
              <BooleanFilter text={item.text} key={index + item.type} filters={item.options} />
            ) : item.type === "range" ?(<RangeFilter/>) : (<TextFilter text={item.text} key={index + item.type} filters={item.options}/>)
        )}
      </div>
    </div> : 
          <div onClick={() => setToggle(false)} className="flex flex-row  w-1/2  border-solid border-2  rounded-md border-spacing-2 mr-8 items-center mb-8 px-3 py-5" dir="rtl">
          <FontAwesomeIcon icon={faFilter} className="text-text " />
            <span className="font-vazir text-sm grow mr-2  text-text">فیلترها</span>
        </div>
    
  );
};

export default SideFilter;
