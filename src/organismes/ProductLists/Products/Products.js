import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Pagination } from '../Pagination/Pagination'

const Products = ({ productsList }) => {
  const [pageTraverse, setPageTraverse] = useState({
    max:1,
    current:1
  });
  useEffect(() => {
    let count = Math.floor(Math.round(productsList.length / 15));
    count = productsList.length % 15 ? count + 1 : count;
    setPageTraverse(prevState => ({...prevState,max:count}));
  }, [productsList]);

  return (
    <>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1 mt-5 ">
        {productsList.slice(pageTraverse.current,pageTraverse.current+15).map((item, index) => (
          <ProductCard key={`${item} + listKey`} product={item}/>
        ))}
      </div>
      <Pagination max={pageTraverse.max} onCurrentHandler={(newCurrrent) =>setPageTraverse(prevState => ({...prevState,current:newCurrrent}))}/>
    </>
  );
};

export default Products