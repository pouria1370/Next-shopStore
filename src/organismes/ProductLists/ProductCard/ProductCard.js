import Timer from '@/atoms/Generals/Timer/Timer'
import ProductPrice from '@/atoms/ProductLists/filters/ProductPrice';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'

const ProductCard = ({product}) => {
    function hashCode(str) {
        let hash = 0;
        for (var i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return hash;
      }
      
      function pickColor(str) {
        // Note the last value here is now 50% instead of 80%
        return `hsl(${hashCode(str) % 360}, 100%, 50%)`;
      }
  return (
    <Link href={`/${product.id}/productpage`}>
    <div className='h-[500px] w-[300px] mb-5 relative bg-light'>
        {product.number !== 0 ? (<Timer minutesOff='999' tag="فروش ویژه"/>) : <div className='h-[47px]'></div> }
        <div dir='rtl' className=' flex flex-row justify-start gap-3 items-center mt-1 mr-5'>
        {product.colors.map((color,index) => (<span key={color+ index} className={['rounded-full w-[20px] h-[20px]',` bg-[`,`${color}`,']'].join("")}></span>))}
        </div>
        <div className='w-full h-[300px] mt-n2'>
            {product.image}
        </div>
        <div className='font-vazir font-thin mt-3 mr-3 text-text'>
            {product.name}
        </div>
       {product.fav ? <div className=' mt-1 ml-3 flex flex-row align-baseline gap-2' dir='ltr'>
        <span className='font-vazir-adad font-thin text-text'>{product.fav}</span>
        <FontAwesomeIcon icon={faStar} className='text-warning' />
        </div> : null}
        {product.number === 0 ?(<div className='font-vazir bottom-3 w-full absolute text-sm  text-center flex flex-row justify-center items-center px-5 '>
          <div className='bg-danger h-px  w-full ml-5'/>عدم موجودی<div className='bg-danger h-px w-full mr-5'/></div>) 
            : (<ProductPrice price={product.currentPrice} off={product.off}/>)}

    </div>
    </Link>
  )
}

export default ProductCard