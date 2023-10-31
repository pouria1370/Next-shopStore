import React from 'react'

const ProductPrice= ({price,off}) => {

  const turnToPrice = (priceii,offii) => {
    let priceNumber = +priceii;
    priceNumber = offii ?  priceNumber - ((+(offii.slice(0,-1))) * priceNumber )/ 100 : priceNumber;
    let turnedOverprice = '' ; 
    let u = 0 ; 
    while(priceNumber > 1000)
    {
      u = u + 1;
      priceNumber = priceNumber/1000 
    }
    if ((priceNumber * 10) % 10 == 0) {
      for (let index = 0; index <= u; index++) {
        turnedOverprice = !turnedOverprice
          ? priceNumber + ","
          : index === u
          ? turnedOverprice + "000"
          : turnedOverprice + "000,";
      }
    }
    if ((priceNumber * 10) % 10 != 0) {
      for (let index = 0; index < u; index++) {
        turnedOverprice = !turnedOverprice
          ? Math.floor((priceNumber * 1000) / 1000) +
            "," +
            ((priceNumber * 1000) % 1000) +
            ","
          : index === u - 1
          ? turnedOverprice + "000"
          : turnedOverprice + "000,";
      }
    }
  return turnedOverprice
  }
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