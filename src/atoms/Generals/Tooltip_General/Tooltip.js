import React, { useEffect, useState } from "react";

const Tooltip = (props) => {
  const [toggleTooltip, setToggleTooltip] = useState(false);
  
  return (
    <div
      className="relative"
      onClick={(e) => {
        if (props.clickable) {
          setToggleTooltip((prevState) => !prevState);
        }
      }}
      onMouseEnter={() => {
        if (!props.clickable) {
          setToggleTooltip(true);
        }
      }}
      onMouseLeave={() => {
        if (!props.clickable) {
          setToggleTooltip(false);
        }
      }}
      
    >
      {toggleTooltip ? (
        <div className="absolute p-1 font-vazir-adad -top-16 text-sm min-w-[100px]  text-light bg-smoky">
          {props.text}
        </div>
      ) : null}
      {props.children}
    </div>
  );
};

export default Tooltip;
