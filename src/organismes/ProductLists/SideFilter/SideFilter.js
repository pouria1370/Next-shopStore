import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import BooleanFilter from "@/atoms/ProductLists/filters/BooleanFilter";
import { SampleListProduct } from "@/data/data";
const SideFilter = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row justify-between" dir="rtl">
        <FontAwesomeIcon icon={faFilter} className="text-text " />
        <span className="font-vazir text-sm text-text">فیلترها</span>
        <FontAwesomeIcon icon={faRightToBracket} className="text-text " />
      </div>
      <div className="flex flex-col gap-2">
        {SampleListProduct.filters.map(
          (item, index) =>
            item.type === "bool" && (
              <BooleanFilter text={item.text} key={index + item.type} filters={item.options} />
            )
        )}
      </div>
    </div>
  );
};

export default SideFilter;
