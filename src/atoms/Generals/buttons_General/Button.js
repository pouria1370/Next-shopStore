import React from "react";

const GeneralButton = ({ text, handler, size }) => {
  return (
    <button
      className={
        size == "md"
          ? "rounded-md text-sm w-[200px] h-[35px] flex flex-col items-center justify-center  font-vazir hover:text-white text-light hover:bg-secondary px-5 py-2 bg-primary"
          : size == "sm"
          ? "rounded-md text-xs w-[100px]  h-[25px] flex flex-col items-center justify-center   font-vazir hover:text-white text-light hover:bg-secondary px-5 py-2 bg-primary"
          : "rounded-md text-xl w-[300px] font-vazir flex flex-col items-center justify-center  h-[45px] hover:text-white text-light hover:bg-secondary px-5 py-2 bg-primary"
      }
      onClick={handler}
    >
      <span>{text}</span>
    </button>
  );
};

export default GeneralButton;
