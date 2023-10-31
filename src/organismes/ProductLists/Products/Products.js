import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Pagination } from '../Pagination/Pagination'

const Products = ({productsList}) => {
  return (
    <>
    <div className='grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-3 mt-5 '>
        {productsList.map((item , index) => <ProductCard key={`${item} + listKey`} product={item}/>)}
    </div>
    <Pagination/>
    </>
  )
}

export default Products