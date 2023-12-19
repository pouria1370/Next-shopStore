import { turnToPrice } from '@/utilities/utility';
import React from 'react'

const ProductPrice= ({price,off}) => {

 
  return (
    <div className="w-full mt-1 " dir="ltr">
      {off ? (
        <div>
          <div className="text-danger font-vazir-adad flex flex-row justify-between px-3">
            <span className="whitespace-pre">
              <span className="text-sm">تومان </span>
              {turnToPrice(price,off)}
            </span>
            <span className="text-white rounded-md bg-danger px-1">{off}</span>
          </div>
          <div className="text-gray opacity-70 relative font-vazir-adad flex flex-row justify-between px-3">
            <span className="whitespace-pre">
              <span className="text-sm">تومان </span>
              {turnToPrice(price)}
            </span>
            <div className="h-[2px] w-1/5 top-[10px] bg-gray opacity-70 absolute"></div>
          </div>
        </div>
      ) : (
        <span className="text-danger absolute bottom-8 font-vazir-adad whitespace-pre pl-3 ">
          {turnToPrice(price)} 
          <span className="text-sm">تومان </span>
        </span>
      )}
    </div>
  );
}

export default ProductPrice