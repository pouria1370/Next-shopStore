import Link from "next/link";
import React from "react";

const UpperFastAccess = ({ links }) => {
  return (
    <div dir="rtl" className="text-gray text-xs font-vazir whitespace-pre m-8 font-light flex flex-row">
      {links.map((item,index) => (
        <Link key={item.text+index} href={item.address}>{item.text} /</Link>
      ))}
    </div>
  );
};

export default UpperFastAccess;
